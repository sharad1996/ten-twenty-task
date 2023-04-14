import React, { useState, useEffect } from "react";
import s from "../css/NextButton.module.scss";

function NextButton({ setReset, activeImage, nextImage, currentImage }) {
  return (
    <div className={s.buttonContainer}>
      <div
        className={s.nextButton}
        onClick={() => {
          setReset(true);
        }}
      >
        <span />
        <span />
        <span />
        <span />
        <img
          alt="nextImage"
          src={activeImage}
          style={{
            height: "90px",
            width: "90px",
            transform: "translate(27%,27%)",
          }}
        />
        <img alt="background" className={s.animationImage} src={nextImage} />
        <span className={s.buttonBorder} />
      </div>
      <div className={s.countContainer}>
        <span>0{currentImage}</span>
        <hr style={{ width: "100px" }} />
        <span>02</span>
      </div>
    </div>
  );
}

export default NextButton;
