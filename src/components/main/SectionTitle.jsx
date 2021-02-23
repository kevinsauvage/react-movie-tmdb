import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { FiArrowRight } from "react-icons/fi";

const SectionTitle = ({ title }) => {
  const [showSeeAll, setShowSeeAll] = useState(false);

  const props = useContext(AppContext);

  const seeAllHandler = (e) => {
    let att = e.currentTarget.parentNode.parentNode.dataset.key;
    props.fetchByAtt(att);
  };

  return (
    <div className="title-wrapper">
      <h3 className="section-title main-title">{title}</h3>
      <div
        className="see-all"
        onMouseOver={() => setShowSeeAll(true)}
        onMouseOut={() => setShowSeeAll(false)}
        onClick={seeAllHandler}>
        {showSeeAll ? (
          <p className="see-all">See All</p>
        ) : (
          <FiArrowRight stroke="var(--color-primary)" />
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
