import React from "react";
import LogoImg from "../../assets/images/logo.png";

const Logo = ({ handleBackhome }) => {
  return (
    <img className="logo" onClick={handleBackhome} src={LogoImg} alt="Logo" />
  );
};

export default Logo;
