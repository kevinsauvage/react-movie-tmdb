import React, { useContext } from "react";
import { useRef } from "react";
import Library from "../components/sidebar/Library";
import Logo from "../components/sidebar/Logo";
import SortByNav from "../components/sidebar/SortByNav";
import { AppContext } from "../Context/AppContext";

const SideBar = () => {
  const props = useContext(AppContext);
  const Sidebar = useRef(null);

  const styleOpen = {
    transform: "translateX(100vw)",
    opacity: "1",
    transition: "transform 1s ease",
  };
  const handleClick = (e) => {
    if (Sidebar.current && Sidebar.current.contains(e.target)) {
      props.setOpenMenuHamb(false);
    }
  };

  return (
    <div
      ref={Sidebar}
      onClick={handleClick}
      className="side-bar"
      style={props.openMenuHamb ? styleOpen : null}>
      <Logo className="logo" />
      <Library />
      <SortByNav />
    </div>
  );
};

export default SideBar;
