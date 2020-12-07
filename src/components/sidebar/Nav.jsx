import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";

const Nav = ({ handleBackhome }) => {
  return (
    <ul className="nav">
      <div className="home-link">
        <FaHome />
        <a href="/#" className="link" onClick={handleBackhome}>
          <li>HOME</li>
        </a>
      </div>
      <div className="browse-link">
        <FaSearch />
        <a href="/#" className="link">
          <li>BROWSE</li>
        </a>
      </div>
    </ul>
  );
};

export default Nav;
