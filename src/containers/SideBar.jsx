import React, { useContext } from "react";
import Library from "../components/sidebar/Library";
import Logo from "../components/sidebar/Logo";
import SortByNav from "../components/sidebar/SortByNav";
import { AppContext } from "../Context/AppContext";

const SideBar = () => {
  const props = useContext(AppContext);

  const styleOpen = {
    left: "0",
    opacity: "1",
    transition: "left 1s ease",
  };

  return (
    <div className="side-bar" style={props.openMenuHamb ? styleOpen : null}>
      <Logo className="logo" />
      <Library />
      <SortByNav />
    </div>
  );
};

export default SideBar;
