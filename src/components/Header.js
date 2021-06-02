import React from "react";
import { Close, NavLinked, Bars, NavMenu } from "./HeaderElements";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Header({ sidebar, setSidebar }) {
  const { pathname } = useLocation();
  let navColor = "#6f48d9";
  let hdrimgurl =
    "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622373953/common_head_ru7ghz.jpg";
  if (pathname === "/") {
    navColor = "#092E4B";
    hdrimgurl =
      "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622372679/homehead_i5ohb0.jpg";
  } else if (pathname === "/home") {
    navColor = "#092E4B";
    hdrimgurl =
      "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622372679/homehead_i5ohb0.jpg";
  } else if (pathname === "/research") {
    navColor = "#531235";
    hdrimgurl =
      "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622372750/Research_head_rswcck.jpg";
  } else if (pathname === "/publication") {
    navColor = "#120060";
    hdrimgurl =
      "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622372683/Publication_head_mmvlcg.jpg";
  } else if (pathname === "/member") {
    navColor = "#154527";
    hdrimgurl =
      "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622372751/Member_head_xu419y.jpg";
  } else if (pathname === "/news") {
    navColor = "#1183BF";
    hdrimgurl =
      "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622373624/News_head_hxudsf.jpg";
  } else {
    navColor = "#340B44";
    hdrimgurl =
      "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622373953/common_head_ru7ghz.jpg";
  }

  const Nav = styled.nav`
    background: ${navColor};
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0px;
    /*padding: 0.2rem calc((100vw - 1000px) / 2);*/
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; 
    @media screen and (maax-width: ) {
      display: block;
    }*/
  `;
  const ImgNav = styled.div`
    width: 100%;
    height: 250px;
    background-image: url("${hdrimgurl}"), linear-gradient(#d3cce35e, #e9e4f063);
    /* linear-gradient(#0e0c1fde,#07041f); */
    /* background-image:linear-gradient(#D3CCE3, #E9E4F0); */

    background-blend-mode: overlay;
    background-size: cover;
    /* <------ */
    background-repeat: no-repeat;
    background-position: center center;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;

  console.log(sidebar);
  console.log(pathname);
  return (
    <div className="header">
      <ImgNav className="overflow-hidden">
        <div className="row d-flex justify-content-center align-items-center">
          <div
            className="super-hline col-8 text-end mt-4"
            style={{ color: "#120060" }}
          >
            <h1 className="fw-bold">Biomimetic Supramolecular</h1>
            <h1 className="fw-bold"> Chemistry Group</h1>
          </div>
        </div>
      </ImgNav>
      <Nav className="row">
        {sidebar === "1" ? (
          <Close onClick={() => setSidebar("0")} />
        ) : (
          <Bars onClick={() => setSidebar("1")} />
        )}

        <NavMenu className="col-8 justify-content-between">
          <NavLinked to="/home">Home</NavLinked>
          <NavLinked to="/research">Research</NavLinked>
          <NavLinked to="/publication">Publication</NavLinked>
          <NavLinked to="/member">Member</NavLinked>
          <NavLinked to="/gole">Dr.Gole</NavLinked>
          <NavLinked to="/news">News</NavLinked>
          <NavLinked to="contact">Contact</NavLinked>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Header;
