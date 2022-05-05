import React from "react";
import "./Addon.scss";
import { CharCard } from "./BoxCard";

function Member() {
  return (
    <div className="member">
      <div className="row d-flex align-items-center justify-content-end">
        <div className="col-10 fit-mob">
          <h1
            className="fw-bold"
            style={{
              color: "#154527",
              margin: "100px 0 60px 0",
            }}
          >
            Group Leader
          </h1>
          <CharCard className="char-card-1">
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
                <h3 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Dr. Bappaditya Gole
                </h3>
                <p className="mt-3">
                  Assistant Professor
                  <br /> Department of Chemistry
                  <br /> Shiv Nadar University
                  <br />
                  <b> Email:</b> bappaditya.gole@snu.edu.in
                  <br />
                </p>
                <p className="mt-3">
                  <b> Research Interest: </b>Supramolecular Chemistry,
                  Self-assembly,
                  <br />
                  Functional materials, Foldamers, Oligopeptides
                  <br />
                </p>
                <p className="mt-3">
                  <b>Teaching Interest:</b> Supramolecular Chemistry, Inorganic
                  Chemistry
                  <br />
                </p>
                <p className="mt-3">
                  <b>Education:</b>
                  <br />
                  PhD - Indian Institute of Science (IISc),Bangalore
                  <br /> MS - Indian Institute of Science (IISc), Bangalore
                  <br />
                  BSc. - University of Calcutta
                  <br />
                </p>
                <p className="mt-3">
                  <b>Off-the-bench:</b>
                  <br />
                  Photography, Cooking, Travelling, Reading, Listing songs
                </p>
              </div>
            </div>
          </CharCard>

          <h1
            className="fw-bold mb-5"
            style={{
              color: "#154527",
              margin: "150px 0 80px 0",
            }}
          >
            Current Members
          </h1>
          <CharCard className="char-card-2">
            <div className="row">
              <div className="col-sm-4" style={{ padding: "0px" }}>
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1651218596/Rabban_xsgt8t.jpg"
                  alt="Dr Gole"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div className="col-sm-8" style={{ paddingLeft: "50px" }}>
                <h3 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Rabban Khan (since 2020)
                </h3>
                <p className="mt-3">
                  PhD student
                  <br /> Department of Chemistry
                  <br /> Shiv Nadar University
                  <br />
                  <b> Email: </b>rk635@snu.edu.in
                  <br />
                </p>
                <p className="mt-3">
                  <b> Research Interest: </b>Supramolecular Chemistry,
                  Host-guest Chemistry, Porous organic cages
                  <br />
                </p>

                <p className="mt-3">
                  <b>Education:</b>
                  <br />
                  MSc. - Aligarh Muslim University, Aligarh, UP
                  <br /> &emsp;&emsp; (Organic Chemistry specialisation)
                  <br /> BSc. - Jamia Millia Islamia, Delhi
                  <br />
                  &emsp;&emsp; (Chemistry, Physics, Mathematics)
                </p>
                <p className="mt-3">
                  <b>Off-the-bench:</b>
                  <br />
                  Playing badminton, Travelling or Reading
                </p>
                <p className="mt-3">
                  <b>Native place:</b> Delhi, India
                  <br />
                </p>
              </div>
            </div>
          </CharCard>
          <CharCard className=" my-5 char-card-3">
            <div className="row">
              <div className="col-sm-4" style={{ padding: "0px" }}>
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1651218594/Dhanyashree_savqor.jpg"
                  alt="Dhanyashree Das"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div className="col-sm-8" style={{ paddingLeft: "50px" }}>
                <h3 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Dhanyashree Das
                </h3>
                <p className="mt-3">
                  PhD student
                  <br /> Department of Chemistry
                  <br /> Shiv Nadar University
                  <br />
                  <b> Email: </b>dd537@snu.edu.in
                  <br />
                </p>
                <p className="mt-3">
                  <b> Research Interest: </b>Supramolecular Chemistry, Strain
                  resistance materials, Foldamers
                  <br />
                </p>

                <p className="mt-3">
                  <b>Education:</b>
                  <br />
                  MSc. - Gauhati University, Guwahati, Assam
                  <br /> BSc. - B. Borooah College, Guwahati, Assam
                  <br />
                  &emsp;&emsp; (Chemistry, Physics, Mathematics)
                </p>
                <p className="mt-3">
                  <b>Off-the-bench:</b>
                  <br />
                  Dancing (Classical & Folk), Reading Books, Cooking
                </p>
                <p className="mt-3">
                  <b>Native place:</b> Guwahati, Assam, India
                  <br />
                </p>
              </div>
            </div>
          </CharCard>
          <CharCard className="my-5 char-card-4">
            <div className="row">
              <div className="col-sm-4" style={{ padding: "0px" }}>
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1651218594/Dhruba_detezt.jpg"
                  alt="Dr Gole"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div className="col-sm-8" style={{ paddingLeft: "50px" }}>
                <h3 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Dhrubajyoti Talukdar
                </h3>
                <p className="mt-3">
                  PhD student
                  <br /> Department of Chemistry
                  <br /> Shiv Nadar University
                  <br />
                  <b> Email: </b>dt914@snu.edu.in
                  <br />
                </p>
                <p className="mt-3">
                  <b> Research Interest: </b> Supramolecular Chemistry,
                  Functional materials, Foldamers, Oligopeptides
                  <br />
                </p>

                <p className="mt-3">
                  <b>Education:</b>
                  <br />
                  MSc. - Tezpur University, Napaam, Assam
                  <br />
                  BSc. - B. Borooah College, Guwahati, Assam
                  <br />
                  &emsp;&emsp; (Chemistry, Physics, Mathematics)
                </p>
                <p className="mt-3">
                  <b>Off-the-bench:</b>
                  <br />
                  Playing badminton, Cricket and Chess
                </p>
                <p className="mt-3">
                  <b>Native place:</b> Guwahati, Assam, India
                  <br />
                </p>
              </div>
            </div>
          </CharCard>
          <CharCard className="my-5 char-card-5">
            <div className="row">
              <div className="col-sm-4" style={{ padding: "0px" }}>
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1651218596/Jinti_wraa4r.jpg"
                  alt="Jinti Moni Kumar"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div className="col-sm-8" style={{ paddingLeft: "50px" }}>
                <h3 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Jinti Moni Kumar
                </h3>
                <p className="mt-3">
                  PhD student
                  <br />
                  Department of Chemistry
                  <br /> Shiv Nadar University
                  <br />
                  <b> Email: </b>jk657@snu.edu.in
                  <br />
                </p>
                <p className="mt-3">
                  <b> Research Interest: </b>Self-assembled macrocycles for
                  transport, Supramolecular Chemistry, Functional materials
                </p>

                <p className="mt-3">
                  <b>Education:</b>
                  <br />
                  MSc: - Gauhati University, Guwahati, Assam
                  <br />
                  BSc. - B. Borooah College, Guwahati, Assam
                  <br />
                  &emsp;&emsp;(Chemistry, Physics, Mathematics)
                </p>
                <p className="mt-3">
                  <b>Off-the-bench:</b>
                  <br />
                  Dancing, Drawing, Painting, Travelling
                </p>
                <p className="mt-3">
                  <b>Native place:</b> Guwahati, Assam, India
                  <br />
                </p>
              </div>
            </div>
          </CharCard>

          <h1
            className="fw-bold mb-5"
            style={{
              color: "#154527",
              margin: "150px 0 80px 0",
            }}
          >
            Past Members
          </h1>
          <p className="mb-5">
            <b>1. Raj Kumar </b>(Research Assistant, March 2021 - December 2021)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Member;
