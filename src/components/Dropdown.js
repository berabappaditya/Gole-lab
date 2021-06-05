import React, { useState } from "react";
import { MenuItems } from "./data/MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown({ navColor }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // {click ? "dropdown-menu clicked" : "dropdown-menu"}
  return (
    <>
      <ul
        onClick={handleClick}
        className="dropdown-mnu"
        style={{ backgroundColor: navColor }}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
