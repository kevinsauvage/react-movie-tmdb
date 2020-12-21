import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { FiArrowRight } from "react-icons/fi";

const SectionTitle = ({ title }) => {
  const [showSeeAll, setShowSeeAll] = useState(false);

  const props = useContext(AppContext);

  const seeAllHandler = (e) => {
    props.fetchByAtt(e.target.dataset.key);
  };

  return (
    <div className="title-wrapper">
      <h3 className="section-title main-title">{title}</h3>
      <div
        data-key="top_rated"
        className="see-all"
        onMouseOver={() => setShowSeeAll(true)}
        onMouseOut={() => setShowSeeAll(false)}
        onClick={seeAllHandler}>
        {showSeeAll ? (
          <p className="see-all">See All</p>
        ) : (
          <FiArrowRight stroke="#00FFFF" size={18} />
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
