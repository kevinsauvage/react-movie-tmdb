import React from "react";
import Nav from "../components/sidebar/Nav";
import Library from "../components/sidebar/Library";
import Logo from "../components/sidebar/Logo";

const SideBar = ({
  handleCardClickRemove,
  handleBackhome,
  fetchByCategory,
}) => {
  return (
    <div className="side-bar" onClick={handleCardClickRemove}>
      <Logo handleBackhome={handleBackhome} />
      <Nav handleBackhome={handleBackhome} />
      <Library fetchByCategory={fetchByCategory} />
    </div>
  );
};

export default SideBar;
