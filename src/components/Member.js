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
                  src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622454396/Rabban_bkllvp.jpg "
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
                  Foldamers, Oligopeptides
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
          <CharCard className="my-5 char-card-3">
            <div className="row">
              <div className="col-sm-4" style={{ padding: "0px" }}>
                <img
                  src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622454396/Rajkumar_myqy6t.jpg"
                  alt="Dr Gole"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div className="col-sm-8" style={{ paddingLeft: "50px" }}>
                <h3 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Raj Kumar (since March 2021)
                </h3>
                <p className="mt-3">
                  Research Assistant
                  <br />
                  Department of Chemistry
                  <br /> Shiv Nadar University
                  <br />
                  <b> Email: </b>rajkumar@snu.edu.in
                  <br />
                </p>
                <p className="mt-3">
                  <b> Research Interest: </b>Supramolecular Chemistry, Polymers,
                  <br />
                  Organic Material Chemistry
                  <br />
                </p>

                <p className="mt-3">
                  <b>Education:</b>
                  <br />
                  BS-MS: Indian Institute of Science Education and Research
                  (IISER), Kolkata
                  <br /> &emsp; &emsp;(Chemistry specialisation)
                  <br />
                </p>
                <p className="mt-3">
                  <b>Off-the-bench:</b>
                  <br />
                  Playing Badminton, Swimming and Gardening
                </p>
                <p className="mt-3">
                  <b>Native place:</b> Gwalior, Madhya Pradesh, India
                  <br />
                </p>
              </div>
            </div>
          </CharCard>
        </div>
      </div>
    </div>
  );
}

export default Member;
