import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Library = () => {
  const props = useContext(AppContext);

  const style = {
    background: "var(--color-primary)",
    color: "#181b21",
    fontWeight: "900",
    paddingLeft: "5px",
    fontSize: "12px",
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="library">
      <h2 className="section-title">GENRE</h2>
      <ul className="library-nav">
        {props.categorys.length !== 0
          ? props.categorys.map((category) => (
              <li
                key={category.id}
                data-id={category.id}
                data-name={category.name}
                style={props.sectionName === category.name ? style : null}
                onClick={(e) => {
                  props.fetchByCategory(
                    e.target.dataset.name,
                    e.target.dataset.id
                  );
                  handleClick();
                }}>
                {category.name}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Library;
