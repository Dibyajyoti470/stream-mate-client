import PropTypes from "prop-types";
import PlayIcon from "./play.svg";
import "./HeroCarouselItem.css";

export default function HeroCarouselItem({ isPrev, isActive, movieDetails }) {
  const convertMinutesToHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    let result = `${hours}h`;

    if (minutes) {
      result += ` ${minutes}m`;
    }

    return result;
  };

  return (
    <div
      // style={{
      //   backgroundImage: `url(${movieDetails.bgPosterUrl})`,
      // }}
      className={`carousel-item ${isActive ? "active" : ""} ${
        isPrev ? "prev" : ""
      }`}
    >
      <div className="carousel-item-content">
        <img className="carousel-bg-image" src={movieDetails.bgPosterUrl} />
        <div className="carousel-item-overlay linear-gradient"></div>
        <div className="carousel-item-overlay radial-gradient"></div>
        <div className="carousel-item-details">
          <h2 className="heading">{movieDetails.title}</h2>
          <div className="dot-separated-list">
            <span>{movieDetails.year}</span>
            <div className="dot-icon-container">
              <span className="dot-icon"></span>
            </div>
            <span>
              {convertMinutesToHoursAndMinutes(movieDetails.duration)}
            </span>
            <div className="dot-icon-container">
              <span className="dot-icon"></span>
            </div>
            <span>{movieDetails.language}</span>
            <div className="dot-icon-container">
              <span className="dot-icon"></span>
            </div>
            <span className="certification">{movieDetails.certification}</span>
          </div>
          <button className="cta-btn">
            <PlayIcon className="cta-btn-icon" />
            <span>Watch Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

HeroCarouselItem.propTypes = {
  isPrev: PropTypes.bool,
  isActive: PropTypes.bool.isRequired,
  movieDetails: PropTypes.object.isRequired,
};
