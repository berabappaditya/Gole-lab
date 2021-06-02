import React from "react";
import { CharCard } from "./BoxCard";

function Member() {
  return (
    <div className="member">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <h1 className="fw-bold my-5" style={{ color: "#120060" }}>
            Group Leader
          </h1>
          <CharCard>
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622454396/Bappadiyya_Gole_1_v2pegs.jpg"
                  alt="Dr Gole"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div className="col-sm-8">
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
                  <b> Research Interest:</b>Supramolecular Chemistry,
                  Self-assembly,
                  <br />
                  Functional materials, Foldamers, Oligopeptides
                  <br />
                </p>
                <p className="mt-3">
                  <b>Teaching Interest:</b> Supramolecular Chemistry, Inorganic
                  <br />
                  Chemistry
                  <br />
                </p>
                <p className="mt-3">
                  <b>Education:</b>
                  <br />
                  PhD - Indian Institute of Science (IISc),
                  <br /> Bangalore MS - Indian Institute of Science (IISc),
                  <br /> Bangalore BSc. - University of Calcutta
                  <br />
                </p>
                <p className="mt-3">
                  <b>Off-the-bench:</b>
                  <br />
                  Photography, Cooking, travelling, reading books, Listing songs
                </p>
              </div>
            </div>
          </CharCard>

          <h1
            className="fw-bold mb-5"
            style={{ color: "#120060", margin: "100px 0px 0px 0px" }}
          >
            Current Members
          </h1>
          <CharCard>
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622454396/Rabban_bkllvp.jpg "
                  alt="Dr Gole"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div className="col-sm-8">
                <h3 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Rabban Khan
                </h3>
                <p className="mt-3">
                  PhD student
                  <br /> Department of Chemistry
                  <br /> Shiv Nadar University
                  <br />
                  <b> Email:</b>rk635@snu.edu.in
                  <br />
                </p>
                <p className="mt-3">
                  <b> Research Interest:</b>Supramolecular Chemistry, Functional
                  <br />
                  materials, Foldamers, Oligopeptides
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
                  Playing badminton, travelling or reading books
                </p>
                <p className="mt-3">
                  <b>Native place:</b> Delhi, India
                  <br />
                </p>
              </div>
            </div>
          </CharCard>
          <CharCard className="my-5">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src="https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622454396/Rajkumar_myqy6t.jpg"
                  alt="Dr Gole"
                  style={{ height: "100%", width: "100%" }}
                  className="profile-img"
                />
              </div>
              <div className="col-sm-8">
                <h3 className="fw-bold mt-5" style={{ color: "#120060" }}>
                  Raj Kumar
                </h3>
                <p className="mt-3">
                  Research Assistant
                  <br />
                  Department of Chemistry
                  <br /> Shiv Nadar University
                  <br />
                  <b> Email:</b>rajkumar@snu.edu.in
                  <br />
                </p>
                <p className="mt-3">
                  <b> Research Interest:</b>Supramolecular Chemistry, Polymers,
                  <br />
                  Organic Material Chemistry
                  <br />
                </p>

                <p className="mt-3">
                  <b>Education:</b>
                  <br />
                  BS-MS - Indian Institute of Science
                  <br /> Education and Research (IISER), Kolkata
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
