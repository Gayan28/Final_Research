import React from "react";
import { Tabs, Tab, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function TipsAndTricks() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <div
        style={{
          backgroundColor: "#f0f9f0",
          padding: "30px",
          borderRadius: "8px",
          border: "2px solid #c8e6c9",
        }}
      >
        <h3
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "30px",
            color: "#1b5e20",
          }}
        >
          TIPS & TRICKS
        </h3>

        <Tabs
          defaultActiveKey="floods"
          id="safety-tips-tabs"
          className="mb-3"
          style={{
            borderBottom: "2px solid #c8e6c9",
          }}
        >
          <Tab
            eventKey="floods"
            title={
              <span style={{ fontSize: "18px", padding: "10px 20px" }}>
                <img
                  alt="asd"
                  src={require("../assets/images/circleFlood.png")}
                  height={"40px"}
                  style={{ paddingRight: "10px" }}
                />
                Floods
              </span>
            }
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "5px",
                marginTop: "15px",
              }}
            >
              <h4>Flood Safety Tips</h4>
              <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/phoneAlert.jpg")}
                        className="card-img-top"
                        alt="noWash"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Monitor local weather updates and pay attention to
                          flood warnings issued by the authorities.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/emergencyKit.jpg")}
                        className="card-img-top"
                        alt="noPhone"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Put together an emergency kit containing essential
                          items such as non-perishable food, water, flashlights,
                          batteries, a first aid kit, important documents, and a
                          portable battery-powered radio
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/safeguardHome.jpg")}
                        className="card-img-top"
                        alt="noFloor"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Elevate electrical switches, sockets, and appliances
                          above anticipated flood levels. Move valuable items,
                          furniture, and electrical equipment to higher floors
                          or elevated areas.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/shelters.jpg")}
                        className="card-img-top"
                        alt="noTree"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          If authorities issue evacuation orders, follow them
                          immediately. Evacuate to higher ground or designated
                          shelters.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/food.jpg")}
                        className="card-img-top"
                        alt="noBike"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Do not consume food or water that has come into
                          contact with floodwaters, as it may be contaminated.
                          Use bottled water for drinking and cooking, or boil
                          water before use.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/return.jpg")}
                        className="card-img-top"
                        alt="noPhone"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Wait for authorities to declare it safe to return home
                          after a flood. Be cautious of damaged infrastructure,
                          weakened structures, or live electrical wires.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/damagehome.jpg")}
                        className="card-img-top"
                        alt="noPhone"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Inspect your home for any structural damage caused by
                          the flood.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/authorities.jpg")}
                        className="card-img-top"
                        alt="noPhone"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Report any damages or hazards to the relevant
                          authorities, such as the local disaster management
                          center or municipality.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>
                <h2>Flood Types</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      {/* <img
                      src={require("../assets/images/direct.gif")}
                    className="card-img-top"
                    alt="direct"
                  ></img> */}
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Monsoonal Floods</h5>
                        </center>
                        <p>
                          Sri Lanka is influenced by the southwest and northeast
                          monsoons, resulting in heavy rainfall during specific
                          seasons. Monsoonal floods occur when these seasonal
                          monsoons bring excessive rainfall, causing rivers,
                          streams, and reservoirs to overflow.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      {/* <img
                      src={require("../assets/images/sideflash.gif")}
                    className="card-img-top"
                    alt="sideflash"
                  ></img> */}
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Flash Floods</h5>
                        </center>
                        <p>
                          Flash floods occur suddenly and are characterized by a
                          rapid rise in water levels within a short period. They
                          are typically caused by intense rainfall, often
                          associated with thunderstorms or heavy downpours.
                          Flash floods can be highly destructive and occur in
                          both urban and rural areas.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      {/* <img
                      src={require("../assets/images/ground.gif")}
                    className="card-img-top"
                    alt="ground"
                  ></img> */}
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Riverine Floods</h5>
                        </center>
                        <p>
                          Riverine floods happen when rivers and their
                          tributaries overflow their banks due to heavy rainfall
                          or the accumulation of water from upstream areas.
                          Riverine floods are common in Sri Lanka, parti cularly
                          in low-lying regions, and can result in prolonged
                          inundation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      {/* <img
                      src={require("../assets/images/conduction.gif")}
                    className="card-img-top"
                    alt="conduction"
                  ></img> */}
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">
                            Coastal and Tsunami-Related Floods
                          </h5>
                        </center>
                        <p>
                          Sri Lanka has a long coastline, and coastal areas can
                          be susceptible to flooding. High tides, storm surges,
                          and tsunamis caused by seismic activities can result
                          in coastal flooding, leading to significant damage in
                          coastal communities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      {/* <img
                      src={require("../assets/images/streamer.gif")}
                    className="card-img-top"
                    alt="..."
                  ></img> */}
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Urban Flooding</h5>
                        </center>
                        <p>
                          Rapid urbanization and inadequate drainage systems in
                          some areas of Sri Lanka can lead to urban flooding.
                          When rainwater cannot be efficiently drained due to
                          poorly designed or clogged drainage systems, it can
                          accumulate in streets, neighborhoods, and urban areas,
                          causing flooding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          </Tab>

          <Tab
            eventKey="cyclone"
            title={
              <span style={{ fontSize: "18px", padding: "10px 20px" }}>
                <img
                  alt="asdasd"
                  src={require("../assets/images/circleCyclone.png")}
                  height={"40px"}
                  style={{ paddingRight: "10px" }}
                />
                Cyclone
              </span>
            }
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "5px",
                marginTop: "15px",
              }}
            >
              <h4>Cyclone Safety Tips</h4>
              <div>
                <br></br>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Before the Cyclone:
                </p>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/tv.jpg")}
                        className="card-img-top"
                        alt="Stay informed"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Stay informed</h5>
                        </center>
                        <p>
                          Monitor weather forecasts, warnings, and updates from
                          reliable sources. Pay attention to the cyclone's
                          projected path, intensity, and estimated time of
                          arrival.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/emerKit.jpg")}
                        className="card-img-top"
                        alt="Emergency kit"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Emergency kit</h5>
                        </center>
                        <p>
                          Prepare an emergency kit with essential supplies,
                          including non-perishable food, drinking water, a first
                          aid kit, flashlight, batteries, a battery-powered or
                          hand-crank radio, necessary medications, and important
                          documents in a waterproof container.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/safety.jpg")}
                        className="card-img-top"
                        alt="Evacuation plan:"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Evacuation plan:</h5>
                        </center>
                        <p>
                          Familiarize yourself with evacuation routes, shelters,
                          and the evacuation plan of your area. Determine where
                          you would go if you need to evacuate, and plan for
                          your pets as well.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  During the Cyclone:
                </p>
                <br></br>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/shelter.jpg")}
                        className="card-img-top"
                        alt="Shelter"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Shelter</h5>
                        </center>
                        <p>
                          Seek shelter indoors well before the cyclone arrives.
                          Move to a small, windowless interior room on the
                          lowest level of your home. If possible, use mattresses
                          or heavy furniture to create a physical barrier for
                          added protection.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/stayaway.jpg")}
                        className="card-img-top"
                        alt="Stay away from windows:"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Stay away from windows:</h5>
                        </center>
                        <p>
                          Avoid being near windows, glass doors, or skylights
                          during the cyclone. They can shatter due to high winds
                          and flying debris, posing a significant risk of
                          injury.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/turnoff.jpg")}
                        className="card-img-top"
                        alt="Power and utilities"
                        style={{ height: "55%" }}
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Power and utilities</h5>
                        </center>
                        <p>
                          Turn off electricity, gas, and water supplies if
                          advised to do so. Unplug appliances to protect them
                          from power surges once the cyclone passes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/connected.jpg")}
                        className="card-img-top"
                        alt="Stay connected"
                        style={{ height: "55%" }}
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Stay connected</h5>
                        </center>
                        <p>
                          Keep your mobile phone charged and have a backup power
                          source available. Use it sparingly to conserve battery
                          life and stay connected with loved ones or emergency
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          </Tab>

          <Tab
            eventKey="landslides"
            title={
              <span style={{ fontSize: "18px", padding: "10px 20px" }}>
                <img
                  alt="asdas"
                  src={require("../assets/images/circleLand.png")}
                  height={"40px"}
                  style={{ paddingRight: "10px" }}
                />{" "}
                LandSlides
              </span>
            }
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "5px",
                marginTop: "15px",
              }}
            >
              <h4>Landslide Safety Tips</h4>
              <div>
                <br></br>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/radio.png")}
                        className="card-img-top"
                        alt="Stay Informed"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Stay Informed</h5>
                        </center>
                        <p>
                          Be aware of the weather conditions in your area and
                          pay attention to any landslide warnings or advisories
                          issued by local authorities or meteorological
                          agencies.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/sign.png")}
                        className="card-img-top"
                        alt="Report any concerns"
                        style={{
                          height: "50%",
                          width: "95%",
                          paddingLeft: "20px",
                        }}
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Report any concerns</h5>
                        </center>
                        <p>
                          If you notice any signs of potential landslide
                          hazards, such as cracks in the ground or retaining
                          walls, erosion, or land movement, report it to your
                          local authorities, land management agencies, or
                          geotechnical professionals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/heavy.jpg")}
                        className="card-img-top"
                        alt="Be cautious during heavy rainfall"
                        style={{ height: "50%" }}
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">
                            Be cautious during heavy rainfall
                          </h5>
                        </center>
                        <p>
                          Streamer development during a lightning strike can
                          pose a threat to individuals as multiple streamers
                          discharge, potentially causing harm even without a
                          completed lightning channel.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/beaware.jpg")}
                        className="card-img-top"
                        alt="Plan your surroundings"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Plan your surroundings</h5>
                        </center>
                        <p>
                          If you live in an area prone to landslides, consider
                          the landscape and topography when planning your
                          surroundings. Avoid building or living near steep
                          slopes or areas with loose soil or rock.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/drain.jpg")}
                        className="card-img-top"
                        alt="Maintain drainage systems"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Maintain drainage systems</h5>
                        </center>
                        <p>
                          Keep gutters, ditches, and storm drains clear of
                          debris to ensure proper water drainage. Excessive
                          water accumulation can increase the risk of
                          landslides.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/warning.jpg")}
                        className="card-img-top"
                        alt="Know the Signs"
                        style={{ paddingBottom: "20px" }}
                      ></img>

                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Know the Signs</h5>
                        </center>
                        <p>
                          Learn to recognize the signs of an impending
                          landslide, such as sudden changes in water flow or
                          patterns, unusual sounds, cracking of the ground, or
                          tilting of trees or utility poles. If you notice any
                          of these signs, evacuate the area immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/evacuate.jpg")}
                        className="card-img-top"
                        alt="Evacuate if necessary"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Evacuate if necessary</h5>
                        </center>
                        <p>
                          If an official evacuation order is issued or you feel
                          that your safety is at risk, evacuate the area
                          immediately. Do not delay or underestimate the
                          potential danger of a landslide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>
                <h2>classNameifications of a Landslide</h2>
                <center>
                  <p style={{ fontSize: "20px" }}>
                    Landslides are classNameified by their type of movement. There
                    are four main types of movements.
                  </p>
                </center>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/falls.jpeg")}
                        className="card-img-top"
                        alt="Falls"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Falls</h5>
                        </center>
                        <p>
                          Falls are landslides that involve the collapse of
                          material from a cliff or steep slope. Falls usually
                          involve a mixture of free fall through the air,
                          bouncing or rolling. A fall-type landslide results in
                          the collection of rock or debris near the base of a
                          slope.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/topple.jpg")}
                        className="card-img-top"
                        alt="Topples"
                        style={{ paddingBottom: "20px" }}
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Topples</h5>
                        </center>
                        <p>
                          A side flash occurs when lightning strikes a taller
                          object near the victim and a portion of the current
                          jumps from taller object to the victim.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/slide.jpg")}
                        className="card-img-top"
                        alt="slides"
                        style={{ paddingBottom: "20px" }}
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Slides</h5>
                        </center>
                        <p>
                          A slide-type landslide is a specific downhill movement
                          of material along a deep slip surface. It is
                          characterized by a prominent main scarp, a
                          backward-tilted block at the top, and rotational
                          movement below.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/flow.jpg")}
                        className="card-img-top"
                        alt="Flow"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Flow</h5>
                        </center>
                        <p>
                          Flows are landslides that involve the movement of
                          material down a slope in the form of a fluid. Flows
                          often leave behind a distinctive, upside-down funnel
                          shaped deposit where the landslide material has
                          stopped moving. There are different types of flows:
                          mud, debris and rock (rock avalanches).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <center>
                  <p style={{ fontSize: "20px" }}>
                    <b>Slides</b> are characterised by a failure of material at
                    depth and then movement by sliding along a rupture or slip
                    surface. There are two types of slide failure, rotational
                    slides (slumps) and translational (planar) slides.
                  </p>
                </center>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/rotational.jpg")}
                        className="card-img-top"
                        alt="Rotational slides"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Rotational slides</h5>
                        </center>
                        <p>
                          If the slip surface is listric (curved or
                          spoon-shaped) the slide is said to be rotational. A
                          good example of a rotational landslide is the Holbeck
                          Hall landslide, in Scarborough, North Yorkshire.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/translational.jpg")}
                        className="card-img-top"
                        alt="Translational slides"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Translational slides</h5>
                        </center>
                        <p>
                          A translational or planar landslide is a downslope
                          movement of material that occurs along a distinctive
                          planar surface of weakness such as a fault, joint or
                          bedding plane. Some of the largest and most damaging
                          landslides on Earth are translational. These
                          landslides occur at all scales and are not
                          self-stabilising. They can be very rapid where
                          discontinuities are steep.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
              </div>
            </div>
          </Tab>

          <Tab
            eventKey="thunderstorm"
            title={
              <span style={{ fontSize: "18px", padding: "10px 20px" }}>
                <img
                  alt="asd"
                  src={require("../assets/images/circleThunder.png")}
                  height={"40px"}
                  style={{ paddingRight: "10px" }}
                />{" "}
                Thunderstorm
              </span>
            }
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "5px",
                marginTop: "15px",
              }}
            >
              <h4>Thunderstorm Safety Tips</h4>
              <div>
                <Row xs={1} md={3} className="g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/noWash.png")}
                        className="card-img-top"
                        alt="noWash"
                      ></img>
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ textAlign: "justify" }}
                        >
                          {t("l1")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/noPhone.png")}
                        className="card-img-top"
                        alt="noPhone"
                      ></img>
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ textAlign: "justify" }}
                        >
                          {t("l2")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/noFloor.png")}
                        className="card-img-top"
                        alt="noFloor"
                      ></img>
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ textAlign: "justify" }}
                        >
                          {t("l3")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/noTree.png")}
                        className="card-img-top"
                        alt="noTree"
                      ></img>
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ textAlign: "justify" }}
                        >
                          {t("l4")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/noBike.png")}
                        className="card-img-top"
                        alt="noBike"
                      ></img>
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ textAlign: "justify" }}
                        >
                          {t("l5")}
                        </h5>
                      </div>
                    </div>
                  </div>
                </Row>

                <br />
                <h2>{t("Lightning_t_W")}</h2>
                <Row xs={1} md={3} className="g-4">
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/direct.gif")}
                        className="card-img-top"
                        alt="direct"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5
                            className="card-title"
                            style={{ textAlign: "center" }}
                          >
                            Direct Strike
                          </h5>
                        </center>
                        <p>{t("l6")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/sideflash.gif")}
                        className="card-img-top"
                        alt="sideflash"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5
                            className="card-title"
                            style={{ textAlign: "center" }}
                          >
                            Side Flash
                          </h5>
                        </center>
                        <p>{t("l7")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/ground.gif")}
                        className="card-img-top"
                        alt="ground"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5
                            className="card-title"
                            style={{ textAlign: "center" }}
                          >
                            Ground Current
                          </h5>
                        </center>
                        <p>{t("l8")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/conduction.gif")}
                        className="card-img-top"
                        alt="conduction"
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5
                            className="card-title"
                            style={{ textAlign: "center" }}
                          >
                            Conduction
                          </h5>
                        </center>
                        <p>{t("l9")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ paddingLeft: "30px" }}>
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        backgroundColor: "white",
                        color: "black",
                        height: "100%",
                      }}
                    >
                      <img
                        src={require("../assets/images/streamer.gif")}
                        className="card-img-top"
                        alt="..."
                      ></img>
                      <div className="card-body">
                        <center>
                          <h5
                            className="card-title"
                            style={{ textAlign: "center" }}
                          >
                            Streamer
                          </h5>
                        </center>
                        <p>{t("l10")}</p>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default TipsAndTricks;
