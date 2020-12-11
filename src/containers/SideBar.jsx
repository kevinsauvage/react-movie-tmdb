import React from "react";
import Nav from "../components/sidebar/Nav";
import Library from "../components/sidebar/Library";
import Logo from "../components/sidebar/Logo";

const SideBar = ({
  fetchByCategory,
  categorys,
  openMenuHamb,
  setOpenMenuHamb,
  setPage,
  setDisplaySearch,
  setDisplay,
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
      <Logo className="logo" />
      <Nav setPage={setPage} setDisplaySearch={setDisplaySearch} />
      <Library
        setOpenMenuHamb={setOpenMenuHamb}
        openMenuHamb={openMenuHamb}
        categorys={categorys}
        fetchByCategory={fetchByCategory}
        setPage={setPage}
      />
    </div>
  );
};

export default SideBar;
