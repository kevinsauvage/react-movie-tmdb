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

  return (
    <div className="content">
      <div className="carusel-wrapper">
        <SectionTitle title="Popular Movies" />
        <Carusel movies={props.popMovies} />
      </div>

      <div className="carusel-wrapper">
        <SectionTitle title="Top Rated Movies" />
      </div>
      <Carusel movies={props.topMovies} />
    </div>
  );
};

export default Content;
