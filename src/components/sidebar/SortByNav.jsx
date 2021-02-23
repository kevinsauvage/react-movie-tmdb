import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const SortByNav = () => {
  const props = useContext(AppContext);

  const style = {
    background: "var(--color-primary)",
    color: "#181b21",
    fontWeight: "900",
    paddingLeft: "5px",
    fontSize: "12px",
  };
  const handleClick = (e) => {
    window.scrollTo(0, 0);
    props.setDisplay(false);
    document.querySelector("body").classList.remove("overflow");
    props.fetchBy(e.currentTarget.dataset.name);
    props.setOpenMenuHamb(false);
  };

  return (
    <div className="sort-by">
      <h2 className="section-title">SORT BY</h2>
      <ul className="sort-by-nav">
        <li
          style={props.sectionName === "popularity.desc" ? style : null}
          data-name="popularity.desc"
          onClick={handleClick}>
          Popularity desc
        </li>
        <li
          style={props.sectionName === "vote_average.desc" ? style : null}
          data-name="vote_average.desc"
          onClick={handleClick}>
          Vote average
        </li>
        <li
          style={props.sectionName === "vote_count.desc" ? style : null}
          data-name="vote_count.desc"
          onClick={handleClick}>
          Vote Count
        </li>
      </ul>
    </div>
  );
};

export default SortByNav;
