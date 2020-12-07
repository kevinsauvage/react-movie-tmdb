import React from "react";

const Logo = ({ handleBackhome }) => {
  return (
    <div className="logo" onClick={handleBackhome}>
      <h2>My Movies</h2>
    </div>
  );
};

export default Logo;
