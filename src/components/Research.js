import React from "react";

import { crntObjt } from "./data/GeneralData";
import { BoxCard } from "./BoxCard";
import "./Addon.scss";

function Research() {
  return (
    <div className="research">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <div className="rch-misn" style={{ margin: "100px 0 100px 0" }}>
            <h1 className="fw-bold my-4" style={{ color: "#1183BF" }}>
              Research mission and Vision{" "}
            </h1>
            <p>
              We are multidisciplinary research group aim to work in the
              interface of Inorganic and Organic chemistry. We have strong
              research interest in supramolecular chemistry, biomimetic
              chemistry, synthetic peptides, stimuli-responsive materials, and
              supramolecular self-assembled functional materials.
            </p>
          </div>
          <div className="crnt-objt my-5">
            <h1 className="fw-bold mb-3 " style={{ color: "#1183BF" }}>
              Current Objectives
            </h1>
            <div>
              {crntObjt.map((item, index) => {
                return (
                  <div key={index} style={{ marginTop: "50px" }}>
                    <h6
                      className="fw-bold mb-2"
                      style={{ color: "#531235", fontSize: "1.4rem" }}
                    >
                      {item.object}
                    </h6>
                    <BoxCard className="mt-4 rsrch-box">
                      <p className="p-4" style={{ width: "90%" }}>
                        {item.details}
                      </p>
                    </BoxCard>
                  </div>
                );
              })}
            </div>

            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
