import React, { useState } from "react";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import s from "../css/ImageCarousel.module.scss";

const mockData = [image1, image2, image3];
function ImageCarousel() {
  return (
    <div className={s.imageContainer}>
      {mockData.map((item, index) => (
        <img src={item} key={index} className={s.image} />
      ))}
    </div>
  );
}

export default ImageCarousel;
