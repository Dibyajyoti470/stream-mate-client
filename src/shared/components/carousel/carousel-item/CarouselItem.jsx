import PropTypes from "prop-types";
import styles from "./CarouselItem.module.css";

export default function CarouselItem({ movieDetails }) {
  return (
    <div className={styles["carousel-item"]}>
      <img
        className={styles["carousel-item-bg-image"]}
        src={movieDetails.bgPosterUrl}
        alt={movieDetails.title}
      />
    </div>
  );
}

CarouselItem.propTypes = {
  movieDetails: PropTypes.object,
};
