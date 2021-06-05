import React from "react";
// import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./Addon.scss";

function Footer() {
  return (
    <div className="footer overflow-hidden">
      <div className="footer-head d-flex align-items-center justify-content-center row">
        <div className="col-10 ">
          <div className="row">
            <div className="upper-ft-cl col-sm-4 d-flex justify-content-center align-items-center">
              <div className="footer-icons">
                <span>
                  <h5 style={{ color: "#3498DB " }}>Follow us on</h5>
                  <FaTwitter
                    size={30}
                    style={{ fill: "#3498DB ", margin: "3px" }}
                  />{" "}
                  <FaInstagram
                    size={30}
                    style={{ fill: "#3498DB ", margin: "3px" }}
                  />{" "}
                  <FaFacebookSquare
                    size={30}
                    style={{ fill: "#3498DB ", margin: "3px" }}
                  />{" "}
                  <img
                    src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622616212/Google_scholer_e3o3ki.png"
                    alt="google scholer icon"
                    style={{ height: "30%", width: "10%", margin: "3px" }}
                  />
                  <FaLinkedin
                    size={30}
                    style={{ fill: "#3498DB ", margin: "3px" }}
                  />
                </span>
              </div>
            </div>
            <div className="upper-ft-cl col-sm-4 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid m-1 w-50"
                src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622392758/SNU_logo_mpe8qh.png"
                alt="SNU logo"
              />
            </div>
            <div className="upper-ft-cl col-sm-4 d-flex justify-content-center align-items-center">
              <div>
                <h4>
                  Depertment <i>of</i>{" "}
                </h4>
                <h3 className="fw-bold dep-chem">Chemistry</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom d-flex justify-content-center align-items-end">
        <p className="align-baseline">&copy;2021 Bappaditya Gole</p>
      </div>
    </div>
  );
}

export default Footer;
