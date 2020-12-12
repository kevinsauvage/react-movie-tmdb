import React from "react";
import Library from "../components/sidebar/Library";
import Logo from "../components/sidebar/Logo";
import SortByNav from "../components/sidebar/SortByNav";

const SideBar = ({
  fetchByCategory,
  categorys,
  openMenuHamb,
  setOpenMenuHamb,
  setPage,
  setDisplaySearch,
  setDisplay,
  sortByClickHandler,
  handleBackHome,
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
      <Logo
        className="logo"
        setDisplaySearch={setDisplaySearch}
        handleBackHome={handleBackHome}
      />
      <Library
        setOpenMenuHamb={setOpenMenuHamb}
        openMenuHamb={openMenuHamb}
        categorys={categorys}
        fetchByCategory={fetchByCategory}
        setPage={setPage}
        setDisplay={setDisplay}
      />
      <SortByNav sortByClickHandler={sortByClickHandler} />
    </div>
  );
};

export default SideBar;
