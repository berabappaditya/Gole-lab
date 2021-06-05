import React, { useState } from "react";
import { Close, NavLinked, Bars, NavMenu } from "./HeaderElements";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import Dropdown from "./Dropdown";

function Header({ sidebar, setSidebar }) {
  const { pathname } = useLocation();

  const [dropMenu, UpdateDropMenu] = useState("0");

  const handleHover = (e) => {
    console.log("This is event on hover");
    if (window.innerWidth < 960) {
      UpdateDropMenu("0");
      console.log(
        `Mouse is hovering ${dropMenu} displaywidth is  ${window.innerWidth}`
      );
    } else {
      UpdateDropMenu("1");
      console.log(
        `Mouse is hovering ${dropMenu} displaywidth is  ${window.innerWidth}`
      );
    }
  };

  const mouseLeave = () => {
    if (window.innerWidth < 960) {
      UpdateDropMenu(false);
    } else {
      UpdateDropMenu(false);
    }
  };
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
  } else if (pathname === "/support") {
    navColor = "#092E4B";
    hdrimgurl =
      "https://res.cloudinary.com/dk74e0jcv/image/upload/v1622810451/Support_head_vydc5a.jpg";
  } else if (pathname === "/lab") {
    navColor = "#1183BF";
    hdrimgurl =
      "https://res.cloudinary.com/dk74e0jcv/image/upload/v1622810416/Laboratory_head_f1rsly.jpg";
  } else if (pathname === "/socialLife") {
    navColor = "#1183BF";
    hdrimgurl =
      "https://res.cloudinary.com/dk74e0jcv/image/upload/v1622810449/Social_head_zhjoyt.jpg";
  } else {
    navColor = "#340B44";
    hdrimgurl =
      "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1622373953/common_head_ru7ghz.jpg";
  }

  const Nav = styled.nav`
    background: ${navColor};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
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
          <NavLinked to="/gole">Dr. Gole</NavLinked>
          <NavLinked to="/news">News</NavLinked>
          <NavLinked to="contact">Contact</NavLinked>

          <NavLinked
            to="/more"
            onMouseEnter={(e) => handleHover()}
            onMouseLeave={(e) => mouseLeave()}
          >
            {dropMenu === "1" ? <Dropdown navColor={navColor} /> : null}
            More
            <FaCaretDown />
          </NavLinked>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Header;
