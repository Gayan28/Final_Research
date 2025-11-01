import { BrowserRouter as Router, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer class="bg-dark text-white bottom">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
            <a href="#">
              <img src={require("../assets/images/logo.png")} height={200} />
            </a>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <center>
              <h5 class="text-uppercase" style={{ paddingTop: "2rem"}}>{t("services")}</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link
                    to="/warnings"
                    class="text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {t("alert")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard"
                    class="text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Dashboard
                  </Link>
                </li>

                
             

              
              </ul>
            </center>
          </div>

          <div
            class="col-lg-4 col-md-6 mb-4 mb-md-0"
            style={{ paddingLeft: "10%" }}
          >
            <center>
              <h5 class="text-uppercase" style={{ paddingTop: "2rem"}}>{t("tools")}</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link
                    to="/locshow"
                    class="text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Safety Locations
                  </Link>
                </li>

                <li>
                  <Link
                    to="/freefood"
                    class="text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Apply for free food resources
                  </Link>
                </li>
              </ul>
            </center>
          </div>

        </div>
        <hr></hr>
      </div>

      <div class="text-center p-1" style={{ backgroundcolor: "black" }}>
        © 2025 RescueReady
      </div>
    </footer>
  );
}

export default Footer;
