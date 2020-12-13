import React from "react";

const Library = ({ fetchByCategory, categorys }) => {
  return (
    <div className="library">
      <h2 className="section-title">GENRE</h2>
      <ul className="library-nav">
        {categorys.map((category) => (
          <li
            key={category.id}
            data-id={category.id}
            data-name={category.name}
            onClick={(e) =>
              fetchByCategory(e.target.dataset.name, e.target.dataset.id)
            }>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
