import React from "react";
import s from "../css/ImageSlider.module.scss";
import ImageCarousel from "./ImageCarousel";

function ImageSlider() {
  return (
    <div className={s.sliderConatiner}>
      <div className={s.sliderTitle}>Quality Products</div>
      <div className={s.sliderDetail}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <ImageCarousel />
      <div>Client 1</div>
      <div className={s.sliderDetail}>Dubai, United Arab Emirates</div>
    </div>
  );
}

export default ImageSlider;
