import React from "react";

const Library = ({
  fetchByCategory,
  categorys,
  setOpenMenuHamb,
  setPage,
  setDisplay,
}) => {
  return (
    <div className="library">
      <h2 className="section-title">GENRE</h2>
      <ul className="library-nav">
        {categorys.map((category) => (
          <li
            key={category.id}
            data-id={category.id}
            data-name={category.name}
            onClick={function (e) {
              fetchByCategory(e);
              setPage(1);
              setOpenMenuHamb(false);
              setDisplay(false);
            }}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
