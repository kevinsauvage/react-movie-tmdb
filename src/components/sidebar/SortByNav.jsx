import React from "react";

const SortByNav = ({ fetchBy, setOpenMenuHamb, sectionName }) => {
  const style = {
    background: "var(--color-pink)",
    color: "white",
    fontWeight: "400",
    paddingLeft: "10px",
    fontSize: "16px",
  };

  return (
    <div className="sort-by">
      <h2 className="section-title">SORT BY</h2>
      <ul className="sort-by-nav">
        <li
          style={sectionName === "popularity.desc" ? style : null}
          data-name="popularity.desc"
          onClick={(e) => {
            fetchBy(e.target.dataset.name);
            setOpenMenuHamb(false);
          }}>
          Popularity desc
        </li>
        <li
          style={sectionName === "vote_average.desc" ? style : null}
          data-name="vote_average.desc"
          onClick={(e) => {
            fetchBy(e.target.dataset.name);
            setOpenMenuHamb(false);
          }}>
          Vote average
        </li>
        <li
          style={sectionName === "vote_count.desc" ? style : null}
          data-name="vote_count.desc"
          onClick={(e) => {
            fetchBy(e.target.dataset.name);
            setOpenMenuHamb(false);
          }}>
          Vote Count
        </li>
      </ul>
    </div>
  );
};

export default SortByNav;
