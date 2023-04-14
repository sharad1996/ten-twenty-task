import React, { useEffect, useState } from "react";
import s from "../css/BackgroundSlider.module.scss";

function BackgroundSlider({ activeImage, nextImage, reset }) {
  const [showTransition, setShowTransition] = useState(false);
  useEffect(() => {
    if (reset) {
      setShowTransition(true);
      setTimeout(() => {
        setShowTransition(false);
      }, 4000);
    }
  }, [reset]);
  return (
    <div>
      <img alt="background" className={s.image} src={activeImage} />
      {showTransition && (
        <img alt="background" className={s.animationImage} src={nextImage} />
      )}
    </div>
  );
}

export default BackgroundSlider;
