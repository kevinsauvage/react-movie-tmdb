import React from "react";

const Logo = ({ handleBackHome }) => {
  return (
    <div className="logo" onClick={handleBackHome}>
      <h1>MV</h1>
    </div>
  );
};

export default Logo;
