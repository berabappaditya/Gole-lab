import React from "react";

function Lab() {
  return (
    <div className="lab">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-9 fit-mob">
          <h1 className="fw-bold my-5" style={{ color: "#1183BF" }}>
            Laboratory and Facility
            <br />
          </h1>
        </div>

        <div className="lab-slider" style={{ width: "70%" }}>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            fade="true"
            interval="2000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={3}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={4}
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={5}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={6}
                aria-label="Slide 6"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={7}
                aria-label="Slide 7"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={8}
                aria-label="Slide 8"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={9}
                aria-label="Slide 9"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={10}
                aria-label="Slide 10"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={11}
                aria-label="Slide 11"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={12}
                aria-label="Slide 12"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816983/1_hhbhpj.jpg"
                  className="d-block w-100"
                  alt="first"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816983/2_pwdvfx.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816983/3_s8khjn.jpg"
                  className="d-block w-100"
                  alt="third"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816983/4_dkzlcv.jpg"
                  className="d-block w-100"
                  alt="fourth"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816983/5_uvrhhg.jpg"
                  className="d-block w-100"
                  alt="fifth"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816983/6_exyyt4.jpg"
                  className="d-block w-100"
                  alt="six"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816984/7_ig1viz.jpg"
                  className="d-block w-100"
                  alt="seven"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816984/8_bhhx8q.jpg"
                  className="d-block w-100"
                  alt="eight"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816983/5_uvrhhg.jpg"
                  className="d-block w-100"
                  alt="nine"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1622816984/10_jz9nhx.jpg"
                  className="d-block w-100"
                  alt="ten"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1630136788/11_i9eiei.jpg"
                  className="d-block w-100"
                  alt="eleven"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1630136789/13_unoatk.jpg"
                  className="d-block w-100"
                  alt="12"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dk74e0jcv/image/upload/v1630136780/12_cn1m0v.jpg"
                  className="d-block w-100"
                  alt="13"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-8 fit-mob"></div>
      </div>
    </div>
  );
}

export default Lab;
