import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";

const Header = () => {
  return (
    <header className="header">
      <SideBar />
      <Main />
    </header>
  );
};

export default Header;
