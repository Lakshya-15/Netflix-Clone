import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <div className={`nav ${show && "show"}`}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
            aria-label="netflix logo"
            className="nav_logo"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/33/e4/07/33e407bc4b74d5d7d56eb4dc78c29164.jpg"
            alt="Netflix Logo"
            aria-label="netflix logo"
            className="nav_avatar"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
