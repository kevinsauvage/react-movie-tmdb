import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const SortByNav = () => {
  const props = useContext(AppContext);

  const style = {
    background: "var(--color-pink)",
    color: "#181b21",
    fontWeight: "900",
    paddingLeft: "10px",
    fontSize: "16px",
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="sort-by">
      <h2 className="section-title">SORT BY</h2>
      <ul className="sort-by-nav">
        <li
          style={props.sectionName === "popularity.desc" ? style : null}
          data-name="popularity.desc"
          onClick={(e) => {
            props.fetchBy(e.target.dataset.name);
            props.setOpenMenuHamb(false);
            handleClick();
          }}>
          Popularity desc
        </li>
        <li
          style={props.sectionName === "vote_average.desc" ? style : null}
          data-name="vote_average.desc"
          onClick={(e) => {
            props.fetchBy(e.target.dataset.name);
            props.setOpenMenuHamb(false);
            handleClick();
          }}>
          Vote average
        </li>
        <li
          style={props.sectionName === "vote_count.desc" ? style : null}
          data-name="vote_count.desc"
          onClick={(e) => {
            props.fetchBy(e.target.dataset.name);
            props.setOpenMenuHamb(false);
            handleClick();
          }}>
          Vote Count
        </li>
      </ul>
    </div>
  );
};

export default SortByNav;
