import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";
const navData = [
  {
    title: "Home",
    path: "/",
    cname: "side-nav-txt",
  },
  {
    title: "Research",
    path: "/research",
    cname: "side-nav-txt",
  },
  {
    title: "Publication",
    path: "/publication",
    cname: "side-nav-txt",
  },
  {
    title: "Member",
    path: "/member",
    cname: "side-nav-txt",
  },
  {
    title: "Dr. Gole",
    path: "/gole",
    cname: "side-nav-txt",
  },
  {
    title: "News",
    path: "/news",
    cname: "side-nav-txt",
  },
  {
    title: "Contact",
    path: "/contact",
    cname: "side-nav-txt",
  },
  {
    title: "Our Support",
    path: "/support",
    cname: "side-nav-txt",
  },
  {
    title: "Laboratory",
    path: "/lab",
    cname: "side-nav-txt",
  },
  {
    title: "Social Life",
    path: "/socialLife",
    cname: "side-nav-txt",
  },
];

function MobileNav({ sidebar, setSidebar }) {
  return (
    <div className="sidebar" sidebar={sidebar}>
      <ul className="sidenav-lnk">
        {navData.map((item, index) => {
          return (
            <li
              key={index}
              className={item.cname}
              onClick={() => setSidebar("0")}
            >
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileNav;
