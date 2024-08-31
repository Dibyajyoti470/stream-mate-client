import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { getAverageColor } from "../../utils/colorExtractor";
import "./ImageWrapper.css";

export default function ImageWrapper({ src, onColorExtracted }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    const extractAverageColor = () => {
      const averageColor = getAverageColor(img);
      onColorExtracted(averageColor);
    };

    const handleImageLoad = () => {
      extractAverageColor(img);
    };

    if (img && img.complete) {
      extractAverageColor(img);
    } else {
      img.addEventListener("load", handleImageLoad);
    }

    return () => {
      img.removeEventListener("load", handleImageLoad);
    };
  }, [src, onColorExtracted]);

  return <img ref={imgRef} className="image" src={src} />;
}

ImageWrapper.propTypes = {
  src: PropTypes.string.isRequired,
  onColorExtracted: PropTypes.func.isRequired,
};
