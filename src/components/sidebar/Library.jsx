import React from "react";

const Library = ({ fetchByCategory, categorys, sectionName }) => {
  const style = {
    borderLeft: "3px solid  #0AC2F3",
    color: "var(--color-pink)",
    fontWeight: 600,
    fontSize: "17px",
    paddingLeft: "5px",
  };

  return (
    <div className="library">
      <h2 className="section-title">GENRE</h2>
      <ul className="library-nav">
        {categorys.map((category) => (
          <li
            key={category.id}
            data-id={category.id}
            data-name={category.name}
            style={sectionName === category.name ? style : null}
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
