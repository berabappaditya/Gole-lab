import React from "react";
import "./Addon.scss";
import { PublicationArray } from "./data/PubData";
import { BoxCard, SqrCard, CmHeader } from "./BoxCard";

function Publication() {
  return (
    <div>
      <div className="publication">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-8 fit-mob">
            <CmHeader style={{ color: "#120060" }}>
              Publication Metrics
            </CmHeader>
            <BoxCard className="mt-4 pub-head-box">
              <div className="d-flex p-4 row">
                <div className="box-left col-sm-6">
                  <p className="mb-3">
                    Total publication: <b>28</b>
                  </p>
                  <p>
                    Total Citation: <b>2248</b> (Scopus)
                    <br /> h-index:<b> 21</b> (Scopus)
                    <br />
                    i10-index: <b>27</b> (Google Scholar)
                    <br />
                  </p>
                </div>
                <div className="box-right col-sm-6 d-flex align-items-center justify-content-center">
                  <p>
                    <b> Scopus Author ID:</b> 30467654700
                    <br /> <b>ORCID ID:</b> 0000-0002-0001-6569
                    <br /> <b>Web of Science ResearcherID:</b> A-3585-2019
                  </p>
                </div>
              </div>
            </BoxCard>
            <CmHeader style={{ color: "#120060" }}>Publications</CmHeader>
            <i>Before joining SNU</i>
            {PublicationArray.map((item) => {
              return (
                <SqrCard key={item.index}>
                  <div>
                    <h3 className="fw-bold mt-2" style={{ color: "#120060" }}>
                      #{item.index}
                    </h3>
                    <p>
                      {item.details}
                      <br />
                      {item.authors}
                      <br />
                      {item.publication}
                      <b>, {item.year}</b>, {item.adrs}
                    </p>
                  </div>
                </SqrCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
