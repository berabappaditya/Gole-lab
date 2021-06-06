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
        <img
          className="mb-5"
          src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622809257/Social_ojkxfh.jpg"
          alt="social-life"
        />
      </div>
    </div>
  );
}

export default SocialLife;
