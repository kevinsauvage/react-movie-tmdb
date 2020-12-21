import React, { useEffect, useContext } from "react";
import Carusel from "../main/Carusel";
import SectionTitle from "../main/SectionTitle";
import { AppContext } from "../../Context/AppContext";
import { FiArrowRight } from "react-icons/fi";

const Content = () => {
  const props = useContext(AppContext);

  useEffect(() => {
    props.getCarusselMovies("popular");
    props.getCarusselMovies("top_rated");
  }, []);

  return (
    <div className="content"  >
      <div className="carusel-wrapper" data-key="top_rated">
        <SectionTitle title="Popular Movies"   />
        <Carusel movies={props.popMovies} />
      </div>

      <div className="carusel-wrapper" data-key="popular" >
        <SectionTitle title="Top Rated Movies"  />
        <Carusel movies={props.topMovies} />
      </div>
    </div>
  );
};

export default Content;
