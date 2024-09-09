import { useEffect, useState } from "react";
import { movies } from "./movie-data";
import PrevIcon from "./prev.svg";
import NextIcon from "./next.svg";
import HeroCarouselItem from "./hero-carousel-item/HeroCarouselItem";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = movies.length - 1;
    } else if (newIndex >= movies.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  // useEffect(() => {
  //   if (currentIndex === movies.length - 3) {
  //     const firstItem = movies.shift();
  //     movies.push(firstItem);
  //   }
  // }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          // left: `-${currentIndex * 20}%`,
          transform: `translateX(calc(-${currentIndex * 20}% - ${
            currentIndex * 0.8
          }rem))`,
        }}
      >
        {/* <HeroCarouselItem
          key={
            movies[currentIndex === 0 ? movies.length - 1 : currentIndex - 1].id
          }
          isPrev={true}
          movieDetails={
            movies[currentIndex === 0 ? movies.length - 1 : currentIndex - 1]
          }
        /> */}
        {movies.map((movie, index) => (
          <HeroCarouselItem
            key={movie.id}
            isActive={index === currentIndex}
            movieDetails={movie}
          />
        ))}
      </div>
      <div className="carousel-indicators">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === currentIndex && "active"
            }`}
            onClick={() => updateIndex(index)}
          ></button>
        ))}
      </div>
      <button
        className="nav-btn prev"
        onClick={() => updateIndex(currentIndex - 1)}
      >
        <PrevIcon className="nav-btn-icon" />
      </button>
      <button
        className="nav-btn next"
        onClick={() => updateIndex(currentIndex + 1)}
      >
        <NextIcon className="nav-btn-icon" />
      </button>
    </div>
  );
}
