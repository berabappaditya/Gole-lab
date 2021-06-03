import React from "react";
import "./Addon.scss";
import { NewsArray, OpenPosition } from "./data/PubData";
import { BoxCard } from "./BoxCard";

function News() {
  return (
    <div className="news">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <h1 className="fw-bold my-5" style={{ color: "#120060" }}>
            open position
          </h1>
          <BoxCard className="news-sec-one">
            <div className="p-4">{OpenPosition}</div>
          </BoxCard>
          <h1
            className="fw-bold mb-5"
            style={{ color: "#120060", marginTop: "100px" }}
          >
            News
          </h1>
          <div className="mb-5">
            {NewsArray.map((item, index) => {
              return (
                <div className="mt-5">
                  <BoxCard key={index} className="news-sec-one">
                    <div className="p-4 w-100">
                      <p>
                        <b>{item.date}</b>
                        <br />
                        {item.news}
                      </p>
                    </div>
                  </BoxCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
