import React, { useEffect, useContext } from "react";
import Carusel from "../main/Carusel";
import SectionTitle from "../main/SectionTitle";
import { AppContext } from "../../Context/AppContext";

const Content = () => {
  const props = useContext(AppContext);

  useEffect(() => {
    props.getCarusselMovies("popular");
    props.getCarusselMovies("top_rated");
  }, []);

  const seeAllHandler = (e) => {
    props.fetchByAtt(e.target.dataset.key);
  };

  return (
    <div className="content">
      <div className="carusel-wrapper">
        <SectionTitle title="Popular Movies" />
        <Carusel movies={props.popMovies} />
        <div data-key="popular" className="see-all" onClick={seeAllHandler}>
          See all
        </div>
      </div>

      <div className="carusel-wrapper">
        <SectionTitle title="Top Rated Movies" />
        <Carusel movies={props.topMovies} />
        <div data-key="top_rated" className="see-all" onClick={seeAllHandler}>
          See all
        </div>
      </div>
    </div>
  );
};

export default Content;
