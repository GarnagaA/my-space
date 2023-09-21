import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

import { useLottie } from "lottie-react";
import spaceMan from "./space-man-90x90.json";

const Header = () => {
  const options = {
    animationData: spaceMan,
    loop: true,
  };
  const { View } = useLottie(options);

  const navLink = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "counter",
      name: "Counter",
    },
    {
      path: "/",
      name: "Home",
    },
    {
      path: "error-page",
      name: "ErrorPage",
    },
  ];

  const onActivePage = (e) => {
    e.stopPropagation();
    Array.from(document.querySelectorAll(".nav-list__link")).forEach((el) =>
      el.classList.remove("nav-list__link__active"),
    );
    // console.log(e.target.parentN);
    e.target.classList.add("nav-list__link__active");
  };

  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__logo" style={{ width: 80, height: 80 }}>
          <h2 className="header__title">My</h2>
          <div className="header__animation" style={{ width: 50 }}>
            {View}
          </div>
          <h2 className="header__title">Project</h2>
        </div>
        <nav className="nav__wrapper">
          <ul className="nav-list">
            {navLink.map((el, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) => onActivePage(e)}
                  className="nav-list__li"
                >
                  <Link className="nav-list__link" to={el.path}>
                    {el.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
