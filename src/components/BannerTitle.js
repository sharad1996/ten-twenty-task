import React, { useEffect, useState } from "react";
import s from "../css/BannerTitle.module.scss";
import NextButton from "./NextButton";

function BannerTitle({
  activeImage,
  setCurrentImage,
  currentImage,
  setReset,
  reset,
  nextImage,
}) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter === 12) {
      setReset(true);
    }
    if (reset) {
      setReset(false);
      setCounter(0);
      setTimeout(() => {
        if (currentImage === 2) {
          setCurrentImage(1);
        } else {
          setCurrentImage(2);
        }
      }, 4000);
    }
  }, [reset, counter]);

  useEffect(() => {
    setInterval(() => {
      setCounter((prv) => prv + 1);
    }, 1000);
  }, []);

  return (
    <div className={s.TitleConatiner}>
      <div className={s.title}>Welcome To TenTwenty Farms</div>
      <div className={s.subTitle}>From our Farms to your hands</div>
      {!reset && (
        <NextButton
          setReset={setReset}
          activeImage={activeImage}
          reset={reset}
          nextImage={nextImage}
          currentImage={currentImage}
        />
      )}
    </div>
  );
}

export default BannerTitle;
