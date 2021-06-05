import React from "react";
import "../Addon.scss";
import { BoxCard } from "../BoxCard";
import "./ExtPage.scss";

function Support() {
  return (
    <div className="support">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <h1 className="fw-bold my-5" style={{ color: "#1183BF" }}>
            Our Support
          </h1>
          <div className="row">
            <div
              className="col-md-5 d-flex align-items-center justify-content-center"
              style={{ padding: "1px" }}
            >
              <img
                src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622392758/SNU_logo_mpe8qh.png"
                alt="SNU logo"
                style={{ width: "90%", marginTop: "30px" }}
              />
            </div>
            <div className="col-md-7 d-flex align-items-center justify-content-center">
              <img
                src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622810450/SNF_mlyrsk.png"
                alt="SNf logo"
                style={{ width: "90%" }}
              />
            </div>
          </div>
          <div className="mt-5">
            <BoxCard
              className="mb-5 support-card"
              style={{ color: "#290C0C", marginTop: "100px" }}
            >
              <p className="p-3">
                We are highly thankful to the <b>Shiv Nadar University</b> and{" "}
                <b>Shiv Nadar Foundation</b> for their generous support.,
              </p>
            </BoxCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
