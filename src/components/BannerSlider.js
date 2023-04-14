import React, { useState } from "react";
import BackgroundSlider from "./BackgroundSlider";
import Navbar from "./Navbar";
import BannerTitle from "./BannerTitle";
import background from "../img/background.jpg";
import background3 from "../img/background3.jpg";

function BannerSlider() {
  const [currentImage, setCurrentImage] = useState(1);
  const [reset, setReset] = useState(false);

  const changeImage = (value) => {
    switch (value) {
      case 1:
        return background;
      case 2:
        return background3;
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <BackgroundSlider
        activeImage={changeImage(currentImage)}
        nextImage={changeImage(currentImage === 2 ? 1 : currentImage + 1)}
        reset={reset}
      />
      <BannerTitle
        activeImage={changeImage(currentImage === 2 ? 1 : currentImage + 1)}
        nextImage={changeImage(currentImage)}
        setCurrentImage={setCurrentImage}
        currentImage={currentImage}
        setReset={setReset}
        reset={reset}
      />
    </div>
  );
}

export default BannerSlider;
