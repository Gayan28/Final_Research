import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountSetup from "./AccountSetup";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";

function Dashboard() {
  const navigate = useNavigate();
  const [firstTimeLogin, setFirstTimeLogin] = useState();

  // multi language handlers
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

  function checkLog() {
    const isFirstTime = localStorage.getItem("firstTimeLogin");
    if (isFirstTime === null) {
      setFirstTimeLogin(false);
      console.log(firstTimeLogin);
    } else {
      setFirstTimeLogin(true);
    }
    navigate("/checkaccup");
  }

  useEffect(() => {
    const isFirstTime = localStorage.getItem("firstTimeLogin");
    if (isFirstTime === null) {
      setFirstTimeLogin(false);
      console.log(firstTimeLogin);
    } else {
      setFirstTimeLogin(true);
    }
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <Container className="flex-grow-1" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="p-4 bg-white text-dark rounded shadow-sm">
          {/* Language Selection Buttons - Centered */}
          <Row className="justify-content-center mb-4">
            <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
              <Button
                variant={currentLanguage === "en" ? "success" : "outline-success"}
                onClick={() => changeLanguage("en")}
                className="w-100"
                size="lg"
              >
                English
              </Button>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
              <Button
                variant={currentLanguage === "sl" ? "success" : "outline-success"}
                onClick={() => changeLanguage("sl")}
                className="w-100"
                size="lg"
              >
                සිංහල
              </Button>
            </Col>
          </Row>

          {/* Title and Description - Centered */}
          <div className="text-center mb-5">
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: "15px",
                fontSize: "2rem",
              }}
            >
              {t("RescueReady")}
            </h3>
            <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: "800px", margin: "0 auto" }}>
              {t("stay_informed_main_dashboard")}
            </p>
          </div>

          {/* Cards Section - Centered and Responsive */}
          <Row className="justify-content-center g-4">
            {/* Alerts Card */}
            <Col xs={12} sm={10} md={6} lg={5} xl={4}>
              <Link to="/warnings" style={{ textDecoration: "none" }}>
                <div
                  className="card shadow-lg h-100 hover-card"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    borderRadius: "15px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                  }}
                >
                  <div className="card-body text-center p-4">
                    <h5
                      className="card-title mb-4"
                      style={{
                        fontWeight: "600",
                        fontSize: "1.5rem",
                        color: "#333",
                      }}
                    >
                      {t("alert")}
                    </h5>
                    <img
                      src={require("../assets/images/alert.png")}
                      className="card-img-top"
                      alt="Alerts"
                      style={{
                        width: "60%",
                        maxWidth: "150px",
                        height: "auto",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </Col>

            {/* Apply for Resources Card */}
            <Col xs={12} sm={10} md={6} lg={5} xl={4}>
              <Link to="/freefood" style={{ textDecoration: "none" }}>
                <div
                  className="card shadow-lg h-100 hover-card"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    borderRadius: "15px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                  }}
                >
                  <div className="card-body text-center p-4">
                    <h5
                      className="card-title mb-4"
                      style={{
                        fontWeight: "600",
                        fontSize: "1.5rem",
                        color: "#333",
                      }}
                    >
                      {t("free_food_resources")}
                    </h5>
                    <img
                      src={require("../assets/images/diet.png")}
                      className="card-img-top"
                      alt="Apply for Resources"
                      style={{
                        width: "60%",
                        maxWidth: "150px",
                        height: "auto",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
      {!firstTimeLogin && <AccountSetup />}
    </div>
  );
}

export default Dashboard;