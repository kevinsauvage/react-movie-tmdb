import React from "react";
import Nav from "../components/sidebar/Nav";
import Library from "../components/sidebar/Library";
import Logo from "../components/sidebar/Logo";

const SideBar = ({
  handleCardClickRemove,
  handleBackhome,
  fetchByCategory,
  resetCounterPage,
  categorys,
  openMenuHamb,
  setOpenMenuHamb,
}) => {
  const styleOpen = {
    left: "0",
    transition: "left 1s ease",
  };

  return (
    <div
      className="side-bar"
      onClick={handleCardClickRemove}
      style={openMenuHamb ? styleOpen : null}>
      <Logo className="logo" />
      <Nav handleBackhome={handleBackhome} />
      <Library
        setOpenMenuHamb={setOpenMenuHamb}
        openMenuHamb={openMenuHamb}
        categorys={categorys}
        fetchByCategory={fetchByCategory}
        resetCounterPage={resetCounterPage}
      />
    </div>
  );
};

export default SideBar;
