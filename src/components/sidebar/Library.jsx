import React from "react";

const Library = ({ fetchByCategory, categorys, sectionName }) => {
  const style = {
    background: "var(--color-pink)",
    color: "black",
    fontWeight: "800",
    paddingLeft: "10px",
    fontSize: "16px",
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
