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

  return (
    <div className="main">
      <div
        className="hamburger-icon"
        onClick={() => props.setOpenMenuHamb(!props.openMenuHamb)}>
        {props.openMenuHamb ? <AiOutlineClose /> : <FaBars />}
      </div>
      <div
        className="logo"
        onClick={() => {
          props.setPage(1);
          props.handleBackHome();
        }}>
        <Logo />
      </div>

      {props.display ? <CardDetail /> : null}

      <Search />

      {props.displaySearch ? (
        <>
          <div className="search-result-container">
            <SearchResult />
          </div>
        </>
      ) : (
        <Content />
      )}
    </div>
  );
};

export default Main;
