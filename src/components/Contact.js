import React from "react";
import "./Addon.scss";
import Map from "./Map";
import { FaPhoneSquareAlt, FaUniversity, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="research">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <div className="row">
            <div className="col-md-5">
              <h1
                style={{
                  color: "#1183BF",
                  margin: "100px 0 60px 0",
                  fontSize: "2rem",
                }}
              >
                <FaUniversity
                  style={{ marginRight: "25px", marginTop: "-10px" }}
                />
                Address
              </h1>
              <div style={{ marginLeft: "60px", marginTop: "-40px" }}>
                <h5 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Dr. Bappaditya Gole
                </h5>
                <p>
                  Research Block
                  <br /> Department of Chemistry,
                  <br /> School of Natural Sciences
                  <br /> Shiv Nadar University
                  <br /> NH-91, Tehsil Dadri
                  <br /> Gautam Buddha Nagar,
                  <br /> Uttar Pradesh 201314, India.
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <img
                src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622372734/IMG_4446_wn3pdx.jpg"
                alt="research block"
                style={{ marginTop: "100px" }}
                width="120%"
              />
            </div>
          </div>
          <div className="row" style={{ margin: "100px 0 100px 0" }}>
            <div className="col-md-5">
              <div>
                <h1
                  style={{
                    color: "#1183BF",
                    margin: "10px 0 20px 0",
                    fontSize: "2rem",
                  }}
                >
                  <FaPhoneSquareAlt
                    style={{ marginRight: "25px", marginTop: "-10px" }}
                  />
                  Telephone
                </h1>
                <p style={{ marginLeft: "60px" }}>+911207170100  ext. 637</p>
              </div>
              <div>
                <h1
                  style={{
                    color: "#1183BF",
                    margin: "100px 0 60px 0",
                    fontSize: "2rem",
                  }}
                >
                  <FaEnvelope
                    style={{ marginRight: "25px", marginTop: "-10px" }}
                  />
                  Email
                </h1>
                <p style={{ marginLeft: "60px", marginTop: "-40px" }}>
                  bappaditya.gole@snu.edu.in
                  <br /> bappagole@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
