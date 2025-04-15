import PropTypes from "prop-types";
import CarouselItem from "./carousel-item/CarouselItem";
import styles from "./Carousel.module.css";

export default function Carousel({ heading, items }) {
  return (
    <div className={styles["carousel"]}>
      <h4 className={styles["carousel-heading"]}>{heading}</h4>
      <div className={styles["carousel-items"]}>
        {items.map((item) => (
          <CarouselItem key={item.id} movieDetails={item} />
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  heading: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};
