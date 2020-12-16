import React from "react";

const Logo = ({ handleBackHome }) => {
  return (
    <div className="logo" onClick={handleBackHome}>
      <h1>MOVIES</h1>
    </div>
  );
};

export default Logo;
