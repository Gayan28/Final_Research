import React, { useState, useEffect } from "react";
import axios from "axios";
import { LoadScript, GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useTranslation } from "react-i18next";
import "../assets/styles/locDropdown.css";
import { ArrowLeft } from "react-bootstrap-icons"

const LocationDropdown = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const googleMapsApiKey = "AIzaSyAM7fsnOFQ-z7tYeJSUeVeGLvyHHLfJgYg"; 

  const { t } = useTranslation();
  const navigate = useNavigate();

  // Shelter Sites (Safe Locations)
  const shelterSites =  [
    {
      id: 1,
      name: "Ratnapura Community Center",
      lat: 6.6828,
      lng: 80.3992,
    },
    {
      id: 2,
      name: "Embilipitiya Relief Camp",
      lat: 6.3411,
      lng: 80.8497,
    },
    {
      id: 3,
      name: "Balangoda Emergency Center",
      lat: 6.6527,
      lng: 80.6995,
    },
    {
      id: 4,
      name: "Eheliyagoda Support Hub",
      lat: 6.8500,
      lng: 80.2667,
    },
    {
      id: 5,
      name: "Pelmadulla Distribution Point",
      lat: 6.6167,
      lng: 80.5333,
    }
  ];

  // Evacuation Routes (Path coordinates)
  const evacuationRoutes = [
    {
      id: 1,
      name: "Route 1: Ratnapura to Balangoda",
      path: [
        { lat: 6.6828, lng: 80.3992 },
        { lat: 6.6700, lng: 80.4500 },
        { lat: 6.6600, lng: 80.5500 },
        { lat: 6.6527, lng: 80.6995 }
      ],
      color: "#FF5722",
      distance: "42 km"
    },
    {
      id: 2,
      name: "Route 2: Ratnapura to Embilipitiya",
      path: [
        { lat: 6.6828, lng: 80.3992 },
        { lat: 6.6000, lng: 80.4500 },
        { lat: 6.5000, lng: 80.6000 },
        { lat: 6.4000, lng: 80.7500 },
        { lat: 6.3411, lng: 80.8497 }
      ],
      color: "#2196F3",
      distance: "68 km"
    },
    {
      id: 3,
      name: "Route 3: Eheliyagoda to Ratnapura",
      path: [
        { lat: 6.8500, lng: 80.2667 },
        { lat: 6.8200, lng: 80.3000 },
        { lat: 6.7500, lng: 80.3500 },
        { lat: 6.6828, lng: 80.3992 }
      ],
      color: "#4CAF50",
      distance: "28 km"
    },
    {
      id: 4,
      name: "Route 4: Pelmadulla to Balangoda",
      path: [
        { lat: 6.6167, lng: 80.5333 },
        { lat: 6.6300, lng: 80.5800 },
        { lat: 6.6400, lng: 80.6400 },
        { lat: 6.6527, lng: 80.6995 }
      ],
      color: "#FFC107",
      distance: "22 km"
    },
    {
      id: 5,
      name: "Route 5: Balangoda to Embilipitiya",
      path: [
        { lat: 6.6527, lng: 80.6995 },
        { lat: 6.5500, lng: 80.7400 },
        { lat: 6.4500, lng: 80.7900 },
        { lat: 6.3411, lng: 80.8497 }
      ],
      color: "#9C27B0",
      distance: "45 km"
    }
  ];

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/location/")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []);

  const handleLocationSelect = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedLocation = locations[selectedIndex - 1];
    setSelectedLocation(selectedLocation);
  };

  // Define map options
  const mapOptions = {
    center: selectedLocation
      ? {
          lat: parseFloat(selectedLocation.latitude),
          lng: parseFloat(selectedLocation.longitude),
        }
      : { lat: 7.8731, lng: 80.7718 },
    zoom: 8,
  };

  return (
    <div>
      <Header></Header>
      <br></br>
      <Container>
        <center>
          <div className="bg-white text-dark" style={{ height: "1000px" }}>
            <div
              className="d-flex align-items-center justify-content-between mb-5"
              style={{ position: "relative" }}
            >
              <div className="d-flex align-items-center">
                <ArrowLeft
                  size={28}
                  style={{
                    cursor: "pointer",
                    marginRight: "30px",
                    color: "#000",
                    flexShrink: 0,
                  }}
                  onClick={() => navigate(-1)}
                />
                <h1
                  style={{
                    fontFamily: "Montserrat",
                    textTransform: "uppercase",
                    fontSize: "1.8rem",
                    margin: 0,
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  {t("s_location")}
                </h1>
              </div>
      
              <img
                alt="asd"
                src={require("../assets/images/diet.png")}
                height={"70px"}
                style={{ float: "right" , margin: "10px" }}
              ></img>
            </div>
            <Row className="justify-content-center">
              <Col>
                <label className="mr-2">
                  {t("s_location_r")} : {" "}
                </label>
                <select className="location-dropdown" onChange={handleLocationSelect}>
                  <option value="">Location</option>
                  {locations.map((location) => (
                    <option key={location.locationName} value={location.locationName}>
                      {location.locationName}
                    </option>
                  ))}
                </select>
              </Col>
              <Col xs="auto">
                <Link to="/freefood" style={{ textDecoration: "none" , marginRight:"10px"}}>
                  <Button type="submit" className="btn btn-dark ">
                    Apply Resources
                  </Button>
                </Link>
              </Col>
            </Row>
            <br />
            
            {/* Legend */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '30px', 
              marginBottom: '20px',
              padding: '10px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              width: '90%',
              margin: '0 auto 20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: '#4CAF50', 
                  borderRadius: '50%' 
                }}></div>
                <span style={{ fontWeight: 'bold' }}>Shelter Sites</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ 
                  width: '20px', 
                  height: '3px', 
                  backgroundColor: '#FF5722' 
                }}></div>
                <span style={{ fontWeight: 'bold' }}>Evacuation Routes</span>
              </div>
            </div>

            <div style={{ height: "400px", width: "100%", flex: 1 }}>
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={{ width: "90%", height: "700px" }}
                  center={mapOptions.center}
                  zoom={mapOptions.zoom}
                  onLoad={(map) => setMap(map)}
                >

                  {selectedLocation && (
                    <Marker
                      position={{
                        lat: parseFloat(selectedLocation.latitude),
                        lng: parseFloat(selectedLocation.longitude),
                      }}
                      title={selectedLocation.locationName}
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                      }}
                    />
                  )}


                  {shelterSites.map((shelter) => (
                    <Marker
                      key={shelter.id}
                      position={{ lat: shelter.lat, lng: shelter.lng }}
                      title={`Shelter: ${shelter.name}`}
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                      }}
                    />
                  ))}

                  {/* Evacuation Routes (Red Polylines) */}
                  {evacuationRoutes.map((route) => (
                    <Polyline
                      key={route.id}
                      path={route.path}
                      options={{
                        strokeColor: "#FF5722",
                        strokeOpacity: 0.8,
                        strokeWeight: 4,
                        title: route.name
                      }}
                    />
                  ))}
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </center>
      </Container>
      <br />
      <Footer></Footer>
    </div>
  );
};

export default LocationDropdown;