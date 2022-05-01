import React from "react";

function SocialLife() {
  return (
    <div className="sociallife">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-9 fit-mob">
          <h1
            className="fw-bold"
            style={{ color: "rgb(212, 139, 2)", margin: "5rem 0 5rem 0" }}
          >
            Social Life and Activities
          </h1>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          className="mb-5"
          style={{ width: "80%", height: "auto" }}
          src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1651218592/Group_in_Decenber_2021_ufs0gq.jpg"
          alt="social-life"
        />
        <img
          className="mb-5"
          style={{ width: "80%", height: "auto" }}
          src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1651218589/IMG_20211015_145352_pc5is5.jpg"
          alt="social-life"
        />
      </div>
    </div>
  );
}

export default SocialLife;
