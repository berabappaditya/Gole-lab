import React from "react";
import "./Addon.scss";
import { CmHeader } from "./BoxCard";

function Home() {
  return (
    <div className="research">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <div className="row">
            <div className="col-sm-4">
              <h3>WELCOME to the</h3>
              <CmHeader style={{ color: "#1183BF" }}>GOLE LAB</CmHeader>
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
                In addition to our primary focus on chemical synthesis, our
                multidisciplinary research approach involves crystallographic
                analyses, spectroscopic and microscopic characterization, and
                material development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-10 fit-mob fit-mob-center">
          <div className="row justify-content-center align-items-center w-100 card-row">
            <div className="col-md-3 my-3 PortCard ">
              <p>
                <b>February 2021</b>
              </p>
              <br />
              <p>
                Dr. Gole has been selected for prestigious Ramanujan Fellowship
                by the SERB, Department of Science & Technology, Government of
                India.
              </p>
              <br />
              <p>
                <b>October 2020</b>
              </p>
              <br />
              <p>
                Dr. Gole joined Department of chemistry, Shiv Nadar University
                as an Assistant Professor.
              </p>
            </div>
            <div className="col-md-3 my-3 pb-5 PortCard home-card">
              <p>
                <b>March 2021</b>
              </p>
              <br />
              <p>Rajkumar joined the group as research assistant. Welcome!</p>
              <br />
              <p>
                <b>December 2020</b>
              </p>
              <br />
              <p>Rabban joined the group as PhD student. Welcome!</p>
            </div>
            <div className="col-md-3 my-3 PortCard home-card">
              <p>
                <b>Open Position</b>
              </p>
              <br />
              <p>
                We are currently looking for hardworking, motivated student for
                fully funded PhD position.
              </p>
              <br />
              <p>
                Bachelor and Masters’ students can approach us for their
                respective thesis.
              </p>
              <br />
              <p>
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
