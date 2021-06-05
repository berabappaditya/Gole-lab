import React from "react";

import { CharCardGole } from "./BoxCard";
import "./Addon.scss";
import {
  researchExp,
  awrdRec,
  edu,
  teach,
  goleBioFirst,
  goleBioSec,
} from "./data/GoleData";

function Gole() {
  return (
    <div className="gole">
      <div className="row d-flex align-items-center justify-content-end">
        <div className="col-10 fit-mob">
          <CharCardGole className="char-card-gole">
            <div className="row">
              <div className="col-sm-4" style={{ padding: "0px" }}>
                <img
                  src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622454396/Bappadiyya_Gole_1_v2pegs.jpg"
                  alt="Dr Gole"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div
                className="col-sm-8"
                style={{ backgroundColor: "#f0eede", paddingLeft: "50px" }}
              >
                <p className="mt-5 pe-4"> {goleBioFirst}</p>
                <p className="mt-3 pe-4">{goleBioSec}</p>
              </div>
            </div>
          </CharCardGole>
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <h1
            className="fw-bold"
            style={{
              color: "#1183BF",
              margin: "150px 0 10px 0",
              fontSize: "4rem",
            }}
          >
            Academic career
          </h1>
          <h3
            className="fw-bold"
            style={{
              color: "#AF559A",
              margin: "30px 0 60px 0",
              fontSize: "2rem",
            }}
          >
            Research Experience
          </h3>
          <div>
            {researchExp.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-sm-5">
                    <p>
                      <b>{item.date}</b>
                    </p>
                  </div>
                  <div className="col-sm-7">{item.details}</div>
                </div>
              );
            })}
          </div>
          <h3
            className="fw-bold"
            style={{
              color: "#AF559A",
              margin: "30px 0 60px 0",
              fontSize: "2rem",
            }}
          >
            Education
          </h3>
          <div>
            {edu.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-sm-5">
                    <p>
                      <b>{item.date}</b>
                    </p>
                  </div>
                  <div className="col-sm-7">{item.details}</div>
                </div>
              );
            })}
          </div>
          <h1
            className="fw-bold"
            style={{
              color: "#1183BF",
              margin: "100px 0 60px 0",
              fontSize: "3rem",
            }}
          >
            Awards and Recognitions
          </h1>
          <div>
            {awrdRec.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-sm-5">
                    <p>
                      <b>{item.date}</b>
                    </p>
                  </div>
                  <div className="col-sm-7">{item.details}</div>
                </div>
              );
            })}
          </div>
          <h1
            className="fw-bold"
            style={{
              color: "#1183BF",
              margin: "100px 0 60px 0",
              fontSize: "3rem",
            }}
          >
            Teaching
          </h1>
          <div>
            {teach.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-sm-5">
                    <p>
                      <b>{item.code}</b>
                    </p>
                  </div>
                  <div className="col-sm-7">
                    <p>{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gole;
