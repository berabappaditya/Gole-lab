import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinked = styled(Link)`
  color: white;
  display: flex;
  margin: 0 1% 0 1%;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 1%;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
    background-color: #ffffff;
  }
  &:hover {
    color: #ffd800;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;
  width: 50px;
  font-size: 1rm;
  @media screen and (max-width: 768px) {
    /*display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;*/
    position: Absolute;
    //  top:10px;
    right: 20px;
    // transform: translate(100%, 75%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 37%;
  }
`;
export const Close = styled(IoMdClose)`
  display: none;
  color: white;
  width: 50px;
  font-size: 1rm;
  @media screen and (max-width: 768px) {
    position: Absolute;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 37%;
  }
`;
