import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Logo = () => {
  const props = useContext(AppContext);

  return (
    <div className="logo" onClick={props.handleBackHome}>
      <h1>MV</h1>
    </div>
  );
};

export default Logo;
