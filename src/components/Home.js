import React from "react";
import "./Addon.scss";

function Home() {
  return (
    <div className="research">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <div className="row" style={{ marginTop: "9%" }}>
            <div className="col-sm-4 d-flex align-items-center">
              <div>
                <h3>WELCOME to the</h3>
                <h1 style={{ color: "#1183BF", fontWeight: "bold" }}>
                  GOLE LAB
                </h1>
              </div>
            </div>
            <div className="col-sm-8">
              <p>
                We are a supramolecular chemistry group based in Shiv Nadar
                University, Delhi NCR. We are interested in designing and
                synthesizing artificial peptides for biomimetic functions and
                their aggregation studies.
              </p>
              <br />
              <p>
                In addition, we are also interested in investigating the
                self-aggregated behavior of macrocycles for functional
                materials.
              </p>{" "}
              <br />
              <p>
                Although our primary focus remains on chemical synthesis,
                however, our multidisciplinary research approach also involves
                crystallographic analyses, spectroscopic and microscopic
                characterization, and material development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{ marginTop: "100px", backgroundColor: "#F5F1EC" }}
      >
        <div className="col-10 fit-mob fit-mob-center common-col">
          <div className="row justify-content-center align-items-center w-100 card-row pb-5">
            <h1
              className="home-letest-news"
              style={{
                color: "#1183BF",
              }}
            >
              Latest <b>NEWS</b>
            </h1>
            <div className="col-xl-3 my-3 PortCard ">
              <p>
                <b>February 2021</b>
              </p>
              <br />
              <p className="neg-merge" style={{ fontSize: "2.6vh" }}>
                Dr. Gole has been selected for prestigious Ramanujan Fellowship
                by the SERB, Department of Science & Technology, Government of
                India.
              </p>
              <br />
              <p>
                <b>October 2020</b>
              </p>
              <br />
              <p className="neg-merge" style={{ fontSize: "2.6vh" }}>
                Dr. Gole joined Department of Chemistry, Shiv Nadar University
                as an Assistant Professor.
              </p>
            </div>
            <div
              // style={{ paddingBottom: "200px" }}
              className="col-xl-3 my-3 pb-5 PortCard home-card"
            >
              <p style={{ marginTop: "-1.5vh" }}>
                <b>December 2021</b>
              </p>
              <br />
              <p>
                <p
                  className="neg-merge"
                  style={{ fontSize: "2.6vh", marginTop: "-15%" }}
                >
                  Jinti joined the group. Welcome!
                </p>
              </p>
              <br />

              <p style={{ marginTop: "-2vh" }}>
                <b>September 2021</b>
              </p>
              <br />
              <p>
                <p
                  className="neg-merge"
                  style={{ fontSize: "2.6vh", marginTop: "-15%" }}
                >
                  Dhanyashree and Dhrubajyoti joined the group. Welcome!
                </p>
              </p>
              <br />
              <p style={{ marginTop: "-2vh" }}>
                <b>March 2021</b>
              </p>
              <br />
              <p
                className="neg-merge"
                style={{ fontSize: "2.6vh", marginTop: "-15%" }}
              >
                Rajkumar joined the group. Welcome!
              </p>
              <br />
              <p style={{ marginTop: "-2vh" }}>
                <b>December 2020</b>
              </p>
              <br />
              <p
                className="last-p neg-merge"
                style={{ fontSize: "2.6vh", marginTop: "-15%" }}
              >
                Rabban joined the group as PhD student. Welcome!
              </p>
            </div>
            <div className="col-xl-3 my-3 PortCard home-card">
              <p>
                <b>Open Positions</b>
              </p>
              <br />
              <p className="neg-merge" style={{ fontSize: "2.6vh" }}>
                We are currently looking for hardworking, motivated student for
                fully funded PhD position.
              </p>
              <br />
              <p className="neg-merge" style={{ fontSize: "2.6vh" }}>
                Bachelor and Masters’ students can approach us for their
                respective thesis.
              </p>
              <br />
              <p className="neg-merge" style={{ fontSize: "2.6vh" }}>
                Students interested in Postdoctoral position can contact us for
                possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
