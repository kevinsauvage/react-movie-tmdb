import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const Carusel = ({ movies, handleCardClickShow }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1601 },
      items: 7,
    },
    between: {
      breakpoint: { max: 1600, min: 1024 },
      items: 5,
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
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleCardClickShow={handleCardClickShow}
          />
        );
      })}
    </Carousel>
  );
};

export default Carusel;
