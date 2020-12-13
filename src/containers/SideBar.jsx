import React from "react";
import Library from "../components/sidebar/Library";
import Logo from "../components/sidebar/Logo";
import SortByNav from "../components/sidebar/SortByNav";

const SideBar = ({
  fetchByCategory,
  categorys,
  openMenuHamb,
  setDisplay,
  handleBackHome,
  fetchBy,
}) => {
  const styleOpen = {
    left: "0",
    transition: "left 1s ease",
  };

  return (
    <div
      className="side-bar"
      onClick={() => setDisplay(false)}
      style={openMenuHamb ? styleOpen : null}>
      <Logo className="logo" handleBackHome={handleBackHome} />
      <Library categorys={categorys} fetchByCategory={fetchByCategory} />
      <SortByNav fetchBy={fetchBy} />
    </div>
  );
};

export default SideBar;
