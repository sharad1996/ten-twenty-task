import React from "react";
import "./index.css";
import BannerSlider from "./components/BannerSlider";
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (
    <div className="mainContainer">
      <BannerSlider />
      <ImageSlider />
    </div>
  );
};

export default App;
