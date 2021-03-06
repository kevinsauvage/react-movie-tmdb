import React, { useContext } from "react";
import Search from "../components/main/Search";
import Content from "../components/main/Content";
import CardDetail from "../components/main/CardDetail";
import SearchResult from "../components/main/SearchResult";
import Logo from "../components/sidebar/Logo";
import { AppContext } from "../Context/AppContext";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Main = () => {
  const props = useContext(AppContext);

  const handleClickHamb = () => {
    document.querySelector("body").classList.toggle("overflow");
    props.setOpenMenuHamb(!props.openMenuHamb);
  };

  const handleClickLogo = () => {
    document.querySelector("body").classList.remove("overflow");

    props.setPage(1);
    props.handleBackHome();
  };

  return (
    <div className="main">
      <div className="hamburger-icon" onClick={handleClickHamb}>
        {props.openMenuHamb ? (
          <AiOutlineClose size={30} />
        ) : (
          <FaBars size={30} />
        )}
      </div>
      <div className="logo" onClick={handleClickLogo}>
        <Logo />
      </div>
      {props.display && <CardDetail />}
      <Search />
      {props.displaySearch ? (
        <div className="search-result-container">
          <SearchResult />
        </div>
      ) : (
        <Content />
      )}
    </div>
  );
};

export default Main;
