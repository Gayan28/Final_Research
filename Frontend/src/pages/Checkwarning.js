import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/hexagon.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import LineChartExample from "./LineChartExample";
import "../assets/styles/hexagon.css";
import jwtDecode from "jwt-decode";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import TipsAndTricks from "./TipsAndTricks";
import RatnapuraDistrictMap from "../components/RathnapuraDistrictMap";

const containerStyle = {
  width: "100%",
  height: "500px",
};
const center = {
  lat: 6.7056,
  lng: 80.3847,
};
// Modal.setAppElement('#root');
function Checkwarning() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");
  const [disasterType, setdisasterType] = useState();
  const [flood, setFlood] = useState({});
  const [landslide, setLandslide] = useState({});
  const [strongwind, setStrongwind] = useState({});
  const [thunder, setThunder] = useState({});
  const [requestTime, setRequestTime] = useState(null);
  const [userLocationlat, setUserLocationlat] = useState();
  const [userLocationlong, setUserLocationlong] = useState();
  const [emergencyflood, setEmergencyflood] = useState([]);
  const [emergencyslide, setEmergencyslide] = useState([]);
  const [emergencywind, setEmergencywind] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedMarkerslide, setSelectedMarkerslide] = useState(null);
  const [selectedwind, setSelectedwind] = useState(null);
  const [floodGuidance, setFloodGuidance] = useState([]);
  const [slideGuidance, setslideGuidance] = useState([]);
  const [windGuidance, setwindGuidance] = useState([]);
  const [thunderGuidance, setthunderGuidance] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [owner_id, setowner_id] = useState({});
  //   useEffect(() => {
  //     // Get the token from storage (localStorage, cookies, etc.)
  //     const token = localStorage.getItem('access_token'); // Adjust this according to your setup

  //     if (token) {
  //       const decodedToken = jwtDecode(token);
  //       owner = {

  //       }
  //       setowner_id(decodedToken.user_id);
  //       console.log(owner_id)
  //     }
  //   }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isfloodModalOpen, setIsfloodModalOpen] = useState();

  const openfloodModal = () => {
    setIsfloodModalOpen(true);
  };

  const closefloodModal = () => {
    setIsfloodModalOpen(false);
  };

  const [isLandModalOpen, setIsLandModalOpen] = useState();

  const openLandModal = () => {
    setIsLandModalOpen(true);
  };

  const closeLandModal = () => {
    setIsLandModalOpen(false);
  };

  const [isStrongwindModalOpen, setIsStrongwindModalOpen] = useState();

  const openStrongwindModal = () => {
    setIsStrongwindModalOpen(true);
  };

  const closeStrongwindModal = () => {
    setIsStrongwindModalOpen(false);
  };

  const [isThunderModalOpen, setIsThunderModalOpen] = useState();

  const openThunderModal = () => {
    setIsThunderModalOpen(true);
  };

  const closeThunderModal = () => {
    setIsThunderModalOpen(false);
  };

  const colorMap = {
    "[0]": "#10F034", // Green for [0]
    "[1]": "#FFFF00", // Yellow for [1]
    "[2]": "#FFA500", // Orange for [2]
    "[3]": "#FF0000", // Red for [3]
  };

  const impactRangeMap = {
    "[0]": "0",
    "[1]": "335 - 3003",
    "[2]": "3003 - 14650",
    "[3]": "More than 14650",
  };

  const RiskMap = {
    "[0]": "Low Risk",
    "[1]": "Medium Risk",
    "[2]": "High Risk",
    "[3]": "Very High Risk",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // axios.get('http://127.0.0.1:8000/floodpred/').then((res)=>{
  //   setFlood(res.data)

  // }).catch((err)=>{
  //   console.log(err.message)
  // })
  useEffect(() => {
    fetchFlood();
  }, {});
  useEffect(() => {
    fetchLandslide();
  }, {});
  useEffect(() => {
    fetchStrongWind();
  }, {});
  useEffect(() => {
    fetchThunder();
  }, {});
  useEffect(() => {
    getPlacesFlood();
  }, []);
  useEffect(() => {
    getPlacesLandslide();
  }, []);
  useEffect(() => {
    getPlacesWind();
  }, []);

  useEffect(() => {
    getGuidanceFlood();
  }, []);
  useEffect(() => {
    getGuidanceSlide();
  }, []);
  useEffect(() => {
    getGuidanceWind();
  }, []);
  useEffect(() => {
    getGuidanceThunder();
  }, []);
  // useEffect(()=>{
  //   axios.get()
  // })

  // useEffect(() => {
  //   function getloc(){
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         // const { latitude, longitude } = position.coords;
  //         // setUserLocation({ lat: latitude, lng: longitude });
  //         // console.log(userLocation)
  //         const pos = {
  //           lat : position.coords.latitude,
  //           lng: position.coords.longitude
  //         }
  //         setUserLocationlat(pos.lat)
  //         setUserLocationlong(pos.lng)
  //         console.log(userLocationlat)

  //       }
  //     );
  //   } else {
  //     console.error('Geolocation is not supported by this browser.');
  //   }}
  // // }, {});
  //   // console.log(userLocation)
  //   //       console.log(setUserLocation)

  //   console.log(getloc())

  const fetchFlood = async () => {
    try {
      const currentTime = new Date();
      const formattedDateTime = `${currentTime.toDateString()} ${currentTime.toLocaleTimeString()}`;

      setRequestTime(formattedDateTime);
      console.log(requestTime);
      const response = await axios.get("http://127.0.0.1:8000/floodpred/");
      setFlood(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchLandslide = async () => {
    try {
      const currentTime = new Date();
      const formattedDateTime = `${currentTime.toDateString()} ${currentTime.toLocaleTimeString()}`;

      setRequestTime(formattedDateTime);
      console.log(requestTime);
      const response = await axios.get("http://127.0.0.1:8000/landslidepred/");
      setLandslide(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchStrongWind = async () => {
    try {
      const currentTime = new Date();
      const formattedDateTime = `${currentTime.toDateString()} ${currentTime.toLocaleTimeString()}`;

      setRequestTime(formattedDateTime);
      console.log(requestTime);
      const response = await axios.get("http://127.0.0.1:8000/windpred/");
      setStrongwind(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchThunder = async () => {
    try {
      const currentTime = new Date();
      const formattedDateTime = `${currentTime.toDateString()} ${currentTime.toLocaleTimeString()}`;

      setRequestTime(formattedDateTime);
      console.log(requestTime);
      const response = await axios.get("http://127.0.0.1:8000/thunderpred/");
      setThunder(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getGuidanceFlood = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/guidance/");
      const filteredFloodGuidance = response.data
        .filter((item) => item.disaster === "Flood")
        .map(({ disaster, ...rest }) => rest);
      setFloodGuidance(filteredFloodGuidance);
      console.log(floodGuidance);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getGuidanceSlide = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/guidance/");
      const filteredslideGuidance = response.data
        .filter((item) => item.disaster === "Landslide")
        .map(({ disaster, ...rest }) => rest);
      setslideGuidance(filteredslideGuidance);
      console.log(floodGuidance);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getGuidanceWind = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/guidance/");
      const filteredwindGuidance = response.data
        .filter((item) => item.disaster === "Strongwind")
        .map(({ disaster, ...rest }) => rest);
      setwindGuidance(filteredwindGuidance);
      console.log(windGuidance);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getGuidanceThunder = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/guidance/");
      const filteredthunderGuidance = response.data
        .filter((item) => item.disaster === "Thunder")
        .map(({ disaster, ...rest }) => rest);
      setthunderGuidance(filteredthunderGuidance);
      console.log(windGuidance);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getPlacesFlood = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/emergency/");

      console.log(response.data);
      const filteredFloodData = response.data
        .filter((item) => item.flood === true)
        .map(({ flood, ...rest }) => rest);
      setEmergencyflood(filteredFloodData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getPlacesLandslide = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/emergency/");

      console.log(response.data);
      const filteredslideData = response.data
        .filter((item) => item.landslide === true)
        .map(({ landslide, ...rest }) => rest);
      setEmergencyslide(filteredslideData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getPlacesWind = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/emergency/");

      console.log(response.data);
      const filteredwindData = response.data
        .filter((item) => item.strongwind === true)
        .map(({ strongwind, ...rest }) => rest);
      setEmergencywind(filteredwindData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const contactAuthority = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const decodedToken = jwtDecode(localStorage.getItem("access_token"));
      const user = {
        id: decodedToken.user_id,

        // Include other user fields as needed
      };
      console.log(user);

      const response = await axios.post(
        "http://127.0.0.1:8000/contact/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data?.message);
    } catch (error) {
      console.error(error.response?.data?.error);
    }
  };

  console.log(emergencyflood);

  const iconColor = colorMap[flood.impactRange] || "#000000";
  const victimRange = impactRangeMap[flood.impactRange];
  const riskLevel = RiskMap[flood.impactRange];

  const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <br></br>
      <Container
        style={{ backgroundColor: "white", border: "solid 1px #B3FF84" }}
      >
        <div
          className="d-flex align-items-center justify-content-between mb-5"
          style={{ position: "relative" }}
        >
          {/* Left: Back arrow + title */}
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
              {t("warning alerts")}
            </h1>
          </div>

          {/* Right: Alert icon */}
          <img
            src={require("../assets/images/alert.png")}
            height="60px"
            alt="Alert"
            style={{
              marginLeft: "10px",
              flexShrink: 0,
            }}
          />
        </div>
        {flood !== 0 && (
          <div
            className="card"
            style={{
              backgroundColor: "#F8FFF7",
              border: "1px solid #B3FF84",
              height: "400px",
            }}
          >
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" style={{ width: "35rem" }}>
                  <a
                    className={`nav-link ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab1")}
                    href="#tab1"
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {" "}
                    <img
                      alt="Air quality"
                      src={require("../assets/images/warningAl.jpg")}
                      className="rounded-circle"
                      style={{ width: "30px", height: "30px" }}
                    />{" "}
                    {t("info")}
                  </a>
                </li>
                <li className="nav-item" style={{ width: "44.5rem" }}>
                  <a
                    className={`nav-link ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab2")}
                    href="#tab2"
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {" "}
                    <img
                      alt="Air quality"
                      src={require("../assets/images/help.jpg")}
                      className="rounded-circle"
                      style={{ width: "30px", height: "30px" }}
                    />
                    {t("help")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab1" ? "show active" : ""
                  }`}
                  id="tab1"
                >
                  {/* <h5 className="card-title" style={{color:"black"}}>Tab 1 Content</h5> */}
                  {/* <div className="row ">
                                      <div className='col'><center>
                                          <img alt="Air quality" src={require("../assets/images/flooded-house.png")} className="rounded-circle" style={{ width: '100px', height: '100px', alignItself: "center" }} />
                                      </center>
                                      </div>
                                      <div className='col' style={{ float: "right" }}>
  
                                      </div>
                                  </div> */}
                  <div className="row ">
                    <div className="col-md-6">
                      <div
                        className="card mb-3"
                        style={{
                          // width: "540px",
                          border: "none",
                          backgroundColor: "#F8FFF7",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-8">
                            {/* <img
                            src={require("../assets/images/flooded-house.png")}
                            className="img-fluid rounded-start"
                            alt="..."
                          /> */}
                            <LineChartExample />
                          </div>

                          {/* <div className="col-md-6">
                          <div className="card-body">
                            <h5 className="card-title" style={{ color: "black" }}>
                              Flood
                            </h5>

                            <p className="card-text" style={{ color: "black" }}>
                              Ratnapura, Sabaragamuwa, Sri Lanka
                            </p>
                            <span>
                              <i
                                className="bi bi-square"
                                style={{
                                  color: iconColor,
                                  background: iconColor,
                                }}
                              >
                                Low
                              </i>
                            </span>
                            <p className="card-text" style={{ color: "black" }}>
                              <small className="text-muted">
                                Last updated {requestTime}
                              </small>
                            </p>
                          </div>
                        </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="card mb-3"
                        style={{
                          // width: "540px",
                          border: "none",
                          backgroundColor: "#F8FFF7",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-6">
                            <div
                              className="card-body"
                              style={{ alignItems: "left" }}
                            >
                              <h5
                                className="card-title"
                                style={{ color: "black", fontWeight: "bold" }}
                              >
                                {t("flood")}
                              </h5>

                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                Ratnapura, Sabaragamuwa, Sri Lanka
                              </p>
                              <span>
                                <i
                                  className="bi bi-square"
                                  style={{
                                    color: iconColor,
                                    background: iconColor,
                                  }}
                                >
                                  {riskLevel}
                                </i>
                              </span>
                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                <small className="text-muted">
                                  Last updated {requestTime}
                                </small>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card-body">
                              <h5
                                className="card-title"
                                style={{ color: "black" }}
                              >
                                Damage Estimation
                              </h5>
                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                <small className="text-muted">
                                  These are predicted values
                                </small>
                              </p>
                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                <span
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  <small>Affected areas:</small>
                                </span>
                                <small> Ratnapura , Kegalle</small>
                              </p>
                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                <span
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  <small>No. of victims:</small>
                                </span>{" "}
                                <small> {victimRange}</small>
                              </p>
                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                <span
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  <small>Risk Level:</small>{" "}
                                </span>{" "}
                                <small> {riskLevel}</small>
                              </p>
                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                <small className="text-muted">
                                  Last updated {requestTime}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab2" ? "show active" : ""
                  }`}
                  id="tab2"
                >
                  <div className="row g-0">
                    <div className="col">
                      <img
                        src={require("../assets/gifs/emergency-call.gif")}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h3 className="card-title" style={{ color: "black" }}>
                          Emergency hotline
                        </h3>
                        <br></br>
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={contactAuthority}
                            style={{ width: "400px" }}
                          >
                            119
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title" style={{ color: "black" }}>
                          Department of Methodology
                        </h3>
                        <br></br>
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={contactAuthority}
                            style={{ width: "400px" }}
                          >
                            011 2 686 686
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        )}

        <br></br>

        {thunder !== 0 && (
          <div
            className="card"
            style={{
              backgroundColor: "#F8FFF7",
              border: "1px solid #B3FF84",
              height: "400px",
            }}
          >
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" style={{ width: "35rem" }}>
                  <a
                    className={`nav-link ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab1")}
                    href="#tab1"
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {" "}
                    <img
                      alt="Air quality"
                      src={require("../assets/images/warningAl.jpg")}
                      className="rounded-circle"
                      style={{ width: "30px", height: "30px" }}
                    />{" "}
                    {t("info")}
                  </a>
                </li>
                <li className="nav-item" style={{ width: "44.5rem" }}>
                  <a
                    className={`nav-link ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab2")}
                    href="#tab2"
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {" "}
                    <img
                      alt="Air quality"
                      src={require("../assets/images/help.jpg")}
                      className="rounded-circle"
                      style={{ width: "30px", height: "30px" }}
                    />
                    {t("help")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab1" ? "show active" : ""
                  }`}
                  id="tab1"
                >
                  {/* <h5 className="card-title" style={{color:"black"}}>Tab 1 Content</h5> */}
                  {/* <div className="row ">
                                      <div className='col'><center>
                                          <img alt="Air quality" src={require("../assets/images/flooded-house.png")} className="rounded-circle" style={{ width: '100px', height: '100px', alignItself: "center" }} />
                                      </center>
                                      </div>
                                      <div className='col' style={{ float: "right" }}>
  
                                      </div>
                                  </div> */}
                  <div className="row ">
                    <div className="col-md-6">
                      <div
                        className="card mb-3"
                        style={{
                          // width: "540px",
                          border: "none",
                          backgroundColor: "#F8FFF7",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-8">
                            <LineChartExample />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="card mb-3"
                        style={{
                          // width: "540px",
                          border: "none",
                          backgroundColor: "#F8FFF7",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-md-6">
                            <div
                              className="card-body"
                              style={{ alignItems: "left" }}
                            >
                              <h5
                                className="card-title"
                                style={{ color: "black", fontWeight: "bold" }}
                              >
                                {t("thunderstrom")}
                              </h5>

                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                Ratnapura, Sabaragamuwa, Sri Lanka
                              </p>
                              <span>
                                <i
                                  className="bi bi-square"
                                  style={{
                                    color: iconColor,
                                    background: iconColor,
                                  }}
                                >
                                  {riskLevel}
                                </i>
                              </span>
                              <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                <small className="text-muted">
                                  Last updated {requestTime}
                                </small>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                          <div className="card-body">
                            <h5 className="card-title" style={{ color: "black" }}>
                              Damage Estimation
                            </h5>
                            <p className="card-text" style={{ color: "black" }}>
                              <small className="text-muted">
                                These are predicted values
                              </small>
                            </p>
                            <p className="card-text" style={{ color: "black" }}>
                              <span
                                style={{ color: "black", fontWeight: "bold" }}
                              >
                                <small>Affected areas:</small>
                              </span>
                              <small> Ratnapura , Kegalle</small>
                            </p>
                            <p className="card-text" style={{ color: "black" }}>
                              {/* <span
                                style={{ color: "black", fontWeight: "bold" }}
                              >
                                <small>No. of victims: </small>
                              </span>{" "} */}
                              
                              <small>{thunder?.victims} </small>
                            </p>
                            {/* <p
                                className="card-text"
                                style={{ color: "black" }}
                              >
                                <span
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  <small>Rain Summary:</small>{" "}
                                </span>{" "}
                                <small> {thunder?.rainSum}</small>
                            </p> */}
                            <p className="card-text" style={{ color: "black" }}>
                              <small className="text-muted">
                                Last updated {requestTime}
                              </small>
                            </p>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab2" ? "show active" : ""
                  }`}
                  id="tab2"
                >
                  <div className="row g-0">
                    <div className="col">
                      <img
                        src={require("../assets/gifs/emergency-call.gif")}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h3 className="card-title" style={{ color: "black" }}>
                          Emergency hotline
                        </h3>
                        <br></br>
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={contactAuthority}
                            style={{ width: "400px" }}
                          >
                            119
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title" style={{ color: "black" }}>
                          Department of Methodology
                        </h3>
                        <br></br>
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={contactAuthority}
                            style={{ width: "400px" }}
                          >
                            011 2 686 686
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        )}
        <br></br>

        <br></br>
        <Container
          style={{ backgroundColor: "#F8FFF7", border: "1px solid #B3FF84" }}
        >
          <br></br>

          <h3>{t("Evacuation Routes and Shelter Sites")}</h3>
          <br></br>
          <RatnapuraDistrictMap />
          <br></br>
        </Container>
        <br></br>
        <Container
          style={{ backgroundColor: "#F8FFF7", border: "1px solid #B3FF84" }}
        >
          <br></br>

          <h3>{t("safety tips")}</h3>

          <TipsAndTricks />
          <br></br>
        </Container>
      </Container>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default Checkwarning;
