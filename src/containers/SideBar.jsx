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
}) => {
  return (
    <div className="side-bar" onClick={handleCardClickRemove}>
      <Logo />
      <Nav handleBackhome={handleBackhome} />
      <Library
        categorys={categorys}
        fetchByCategory={fetchByCategory}
        resetCounterPage={resetCounterPage}
      />
    </div>
  );
};

export default SideBar;
