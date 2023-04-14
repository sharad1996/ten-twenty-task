import React from "react";
import s from "../css/Navbar.module.scss";
import RightArrow from "../img/rightArrow.svg";
import NavbarButton from "../img/navbarButton.svg";
import useMediaQuery from "../hooks/useMediaQuery";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={s.container}>
      {!isMobile && (
        <div className={s.navBarItems}>
          <span>About</span>
          <span>News</span>
          <span>Services</span>
          <span>Our Team</span>
          <span>Make Enquiry</span>
        </div>
      )}
      <button className={s.navBarButton}>
        <span>Contact us</span> <img alt="arrow" src={RightArrow} />
      </button>
      {isMobile && <img alt="button" src={NavbarButton} />}
    </div>
  );
}

export default Navbar;
