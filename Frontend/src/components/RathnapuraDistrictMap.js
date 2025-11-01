import React, { useState } from "react";
import { LoadScript, GoogleMap, Marker, Polyline, InfoWindow } from "@react-google-maps/api";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ArrowLeft, GeoAltFill, TelephoneFill, PeopleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const RatnapuraDistrictMap = () => {
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const googleMapsApiKey = "AIzaSyAM7fsnOFQ-z7tYeJSUeVeGLvyHHLfJgYg";

  const { t } = useTranslation();
  const navigate = useNavigate();

  // Ratnapura District Center Coordinates
  const ratnapuraCenter = { lat: 6.6828, lng: 80.3992 };

  // Resource Locations in Ratnapura District
  const resourceLocations = [
    {
      id: 1,
      name: "Ratnapura Community Center",
      lat: 6.6828,
      lng: 80.3992,
      type: "Food & Shelter",
      capacity: "500 people",
      contact: "+94 45 222 2345",
      resources: ["Emergency Food", "Medical Aid", "Temporary Shelter"],
      color: "#1976d2"
    },
    {
      id: 2,
      name: "Embilipitiya Relief Camp",
      lat: 6.3411,
      lng: 80.8497,
      type: "Medical & Food",
      capacity: "300 people",
      contact: "+94 47 226 0123",
      resources: ["Medical Supplies", "Food Packages", "Water Supply"],
      color: "#d32f2f"
    },
    {
      id: 3,
      name: "Balangoda Emergency Center",
      lat: 6.6527,
      lng: 80.6995,
      type: "Shelter & Supplies",
      capacity: "400 people",
      contact: "+94 45 228 7654",
      resources: ["Shelter", "Clothing", "Food Distribution"],
      color: "#388e3c"
    },
    {
      id: 4,
      name: "Eheliyagoda Support Hub",
      lat: 6.8500,
      lng: 80.2667,
      type: "Food Distribution",
      capacity: "250 people",
      contact: "+94 36 224 5678",
      resources: ["Emergency Food", "Water Tanks", "Basic Supplies"],
      color: "#f57c00"
    },
    {
      id: 5,
      name: "Pelmadulla Distribution Point",
      lat: 6.6167,
      lng: 80.5333,
      type: "Complete Services",
      capacity: "600 people",
      contact: "+94 45 225 9876",
      resources: ["Food", "Medical", "Shelter", "Communication Hub"],
      color: "#7b1fa2"
    }
  ];

  // Evacuation Routes connecting resource locations in Ratnapura District
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

  // Map options focused on Ratnapura District
  const mapOptions = {
    center: ratnapuraCenter,
    zoom: 10,
    mapTypeControl: true,
    streetViewControl: false,
    fullscreenControl: true,
  };

  const handleCardClick = (location) => {
    setSelectedMarker(location);
    map?.panTo({ lat: location.lat, lng: location.lng });
    map?.setZoom(13);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="flex-grow-1" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <div className="bg-white text-dark p-4 rounded shadow-sm">
          {/* District Info */}
          <div 
            style={{ 
              backgroundColor: "#f0f8ff", 
              padding: "15px", 
              borderRadius: "8px",
              marginBottom: "20px",
              textAlign: "center"
            }}
          >
            <h5 style={{ margin: 0, color: "#1976d2", fontWeight: "bold" }}>
              Ratnapura District Emergency Resources & Evacuation Routes
            </h5>
            <p style={{ margin: "5px 0 0 0", color: "#555" }}>
              5 Resource Centers • 5 Evacuation Routes • 24/7 Emergency Support
            </p>
          </div>

          {/* Legend */}
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              flexWrap: "wrap",
              gap: "20px", 
              marginBottom: "25px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ 
                width: "24px", 
                height: "24px", 
                backgroundColor: "#1976d2", 
                borderRadius: "50%",
                border: "2px solid #fff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}></div>
              <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>Resource Centers</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ 
                width: "30px", 
                height: "4px", 
                background: "linear-gradient(to right, #FF5722, #2196F3, #4CAF50, #FFC107, #9C27B0)"
              }}></div>
              <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>Evacuation Routes</span>
            </div>
          </div>

          {/* Resource Centers as Cards */}
          <div className="mb-4">
            <h5 style={{ fontWeight: "bold", marginBottom: "15px", color: "#333" }}>
              Available Resource Centers
            </h5>
            <Row>
              {resourceLocations.map((location) => (
                <Col key={location.id} xs={12} sm={6} lg={4} className="mb-3">
                  <Card
                    onClick={() => handleCardClick(location)}
                    style={{
                      cursor: "pointer",
                      border: `2px solid ${location.color}`,
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      height: "100%",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                    }}
                  >
                    <Card.Body>
                      <div 
                        style={{ 
                          width: "50px", 
                          height: "50px", 
                          backgroundColor: location.color,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "15px",
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "1.2rem"
                        }}
                      >
                        {location.id}
                      </div>
                      
                      <Card.Title 
                        style={{ 
                          fontSize: "1.1rem", 
                          fontWeight: "bold",
                          color: location.color,
                          marginBottom: "10px"
                        }}
                      >
                        {location.name}
                      </Card.Title>
                      
                      <div style={{ marginBottom: "8px" }}>
                        <GeoAltFill size={16} style={{ marginRight: "8px", color: location.color }} />
                        <span style={{ fontSize: "0.9rem", color: "#666" }}>
                          {location.type}
                        </span>
                      </div>
                      
                      <div style={{ marginBottom: "8px" }}>
                        <PeopleFill size={16} style={{ marginRight: "8px", color: location.color }} />
                        <span style={{ fontSize: "0.9rem", color: "#666" }}>
                          Capacity: {location.capacity}
                        </span>
                      </div>
                      
                      <div style={{ marginBottom: "12px" }}>
                        <TelephoneFill size={16} style={{ marginRight: "8px", color: location.color }} />
                        <span style={{ fontSize: "0.9rem", color: "#666" }}>
                          {location.contact}
                        </span>
                      </div>
                      
                      <div style={{ 
                        paddingTop: "10px", 
                        borderTop: "1px solid #eee"
                      }}>
                        <div style={{ fontSize: "0.85rem", fontWeight: "600", marginBottom: "5px" }}>
                          Resources:
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#666" }}>
                          {location.resources.join(" • ")}
                        </div>
                      </div>
                      
                      <div style={{
                        marginTop: "12px",
                        padding: "8px",
                        backgroundColor: `${location.color}15`,
                        borderRadius: "6px",
                        textAlign: "center",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        color: location.color
                      }}>
                        Click to view on map
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Map Container */}
          <div style={{ 
            height: "600px", 
            width: "100%", 
            borderRadius: "12px", 
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            marginBottom: "20px"
          }}>
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={mapOptions.center}
                zoom={mapOptions.zoom}
                options={mapOptions}
                onLoad={(map) => setMap(map)}
              >
                {/* Resource Location Markers */}
                {resourceLocations.map((location) => (
                  <Marker
                    key={location.id}
                    position={{ lat: location.lat, lng: location.lng }}
                    title={location.name}
                    onClick={() => setSelectedMarker(location)}
                    icon={{
                      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    }}
                  />
                ))}

                {/* Info Window for selected marker */}
                {selectedMarker && (
                  <InfoWindow
                    position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                    onCloseClick={handleCloseInfoWindow}
                  >
                    <div style={{ maxWidth: "280px", padding: "12px" }}>
                      <h6 style={{ 
                        margin: "0 0 12px 0", 
                        color: selectedMarker.color, 
                        fontWeight: "bold",
                        fontSize: "1.15rem",
                        borderBottom: `2px solid ${selectedMarker.color}`,
                        paddingBottom: "8px"
                      }}>
                        {selectedMarker.name}
                      </h6>
                      
                      <div style={{ marginBottom: "8px" }}>
                        <GeoAltFill size={14} style={{ marginRight: "6px", color: selectedMarker.color }} />
                        <strong style={{ fontSize: "0.9rem" }}>Type:</strong>
                        <span style={{ marginLeft: "5px", fontSize: "0.9rem" }}>
                          {selectedMarker.type}
                        </span>
                      </div>
                      
                      <div style={{ marginBottom: "8px" }}>
                        <PeopleFill size={14} style={{ marginRight: "6px", color: selectedMarker.color }} />
                        <strong style={{ fontSize: "0.9rem" }}>Capacity:</strong>
                        <span style={{ marginLeft: "5px", fontSize: "0.9rem" }}>
                          {selectedMarker.capacity}
                        </span>
                      </div>
                      
                      <div style={{ marginBottom: "12px" }}>
                        <TelephoneFill size={14} style={{ marginRight: "6px", color: selectedMarker.color }} />
                        <strong style={{ fontSize: "0.9rem" }}>Contact:</strong>
                        <span style={{ marginLeft: "5px", fontSize: "0.9rem" }}>
                          {selectedMarker.contact}
                        </span>
                      </div>
                      
                      <div style={{ 
                        paddingTop: "10px",
                        borderTop: "1px solid #eee"
                      }}>
                        <strong style={{ fontSize: "0.9rem", color: selectedMarker.color }}>
                          Available Resources:
                        </strong>
                        <ul style={{ 
                          margin: "8px 0 0 0", 
                          paddingLeft: "20px",
                          fontSize: "0.85rem"
                        }}>
                          {selectedMarker.resources.map((resource, index) => (
                            <li key={index} style={{ marginBottom: "4px" }}>{resource}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </InfoWindow>
                )}

                {/* Evacuation Routes */}
                {evacuationRoutes.map((route) => (
                  <Polyline
                    key={route.id}
                    path={route.path}
                    options={{
                      strokeColor: route.color,
                      strokeOpacity: 0.8,
                      strokeWeight: 5,
                      geodesic: true
                    }}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>

          {/* Route Information */}
          <div style={{ marginBottom: "20px" }}>
            <h5 style={{ fontWeight: "bold", marginBottom: "15px", color: "#333" }}>
              Evacuation Routes Information
            </h5>
            <Row>
              {evacuationRoutes.map((route) => (
                <Col key={route.id} xs={12} sm={6} md={4} className="mb-3">
                  <div style={{
                    padding: "15px",
                    border: `3px solid ${route.color}`,
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  >
                    <div style={{ 
                      fontWeight: "600", 
                      fontSize: "0.95rem",
                      color: route.color,
                      marginBottom: "8px"
                    }}>
                      {route.name}
                    </div>
                    <div style={{ 
                      fontSize: "0.85rem", 
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    }}>
                      <GeoAltFill size={14} style={{ color: route.color }} />
                      Distance: <strong>{route.distance}</strong>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Emergency Contact Section */}
          <div style={{
            padding: "20px",
            backgroundColor: "#fff3e0",
            borderLeft: "5px solid #ff9800",
            borderRadius: "8px"
          }}>
            <h5 style={{ fontWeight: "bold", color: "#e65100", marginBottom: "15px" }}>
              🚨 Emergency Contacts
            </h5>
            <Row>
              <Col md={4} className="mb-2">
                <p style={{ margin: "0", fontSize: "0.95rem" }}>
                  <strong>Emergency Hotline:</strong> 119 / 1919
                </p>
              </Col>
              <Col md={4} className="mb-2">
                <p style={{ margin: "0", fontSize: "0.95rem" }}>
                  <strong>District Management:</strong> +94 45 222 2222
                </p>
              </Col>
              <Col md={4} className="mb-2">
                <p style={{ margin: "0", fontSize: "0.95rem" }}>
                  <strong>Medical Emergency:</strong> 110
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RatnapuraDistrictMap;