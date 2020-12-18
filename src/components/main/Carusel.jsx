import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const Carusel = (movies) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1601 },
      items: 4,
    },
    between: {
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      containerClass="container-with-dots"
      draggable
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      showDots={false}
      slidesToSlide={4}
      swipeable>
      {movies.movies.lenth !== 0
        ? movies.movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        : null}
    </Carousel>
  );
};

export default Carusel;
