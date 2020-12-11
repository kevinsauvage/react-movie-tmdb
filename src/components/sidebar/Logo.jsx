import React from "react";

const Logo = ({ setDisplaySearch }) => {
  return (
    <div className="logo" onClick={() => setDisplaySearch(false)}>
      <h1>MOVIES</h1>
    </div>
  );
};

export default Logo;
