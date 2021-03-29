import React, { useEffect, useContext } from "react";
import Carusel from "../main/Carusel";
import SectionTitle from "../main/SectionTitle";
import { AppContext } from "../../Context/AppContext";
import Loader from "react-loader-spinner";

const Content = () => {
  const props = useContext(AppContext);

  useEffect(() => {
    props.getCarusselMovies("popular");
    props.getCarusselMovies("top_rated");
  }, []);

  return (
    <div className="content">
      <div className="carusel-wrapper" data-key="popular">
        <SectionTitle title="Popular Movies" />
        {props.popMovies.length !== 0 ? (
          <Carusel movies={props.popMovies} />
        ) : (
          <div className="loader">
            <Loader
              type="TailSpin"
              color="var(--color-primary)"
              height={50}
              width={50}
            />
          </div>
        )}
      </div>
      <div className="carusel-wrapper" data-key="top_rated">
        <SectionTitle title="Top Rated Movies" />
        {props.topMovies.length !== 0 ? (
          <Carusel movies={props.topMovies} />
        ) : (
          <div className="loader">
            <Loader
              type="TailSpin"
              color="var(--color-primary)"
              height={50}
              width={50}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
