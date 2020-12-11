import React from "react";
import { FaHome } from "react-icons/fa";

const Nav = ({ setPage, setDisplaySearch }) => {
  return (
    <ul className="nav">
      <div className="home-link">
        <FaHome />
        <a
          href="/"
          className="link"
          onClick={() => {
            setPage(1);
            setDisplaySearch(false);
          }}>
          <li>HOME</li>
        </a>
      </div>
    </ul>
  );
};

export default Nav;
