import React from "react";

const Library = ({ fetchByCategory, categorys, setOpenMenuHamb, setPage }) => {
  return (
    <div className="library">
      <h2 className="section-title">Category</h2>
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
            }}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
