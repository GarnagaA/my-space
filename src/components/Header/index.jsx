import React from "react";
import "./index.module.scss";
import { Link } from "react-router-dom";

import { useLottie } from "lottie-react";
import spaceMan from "../../assets/lottie/spaceMan.json";

const Header = () => {
  const options = {
    animationData: spaceMan,
    loop: true,
  };
  const { View } = useLottie(options);

  const navLink = [
    {
      path: "/",
      name: "To do list",
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
    Array.from(document.querySelectorAll(".nav-list__link")).forEach((el) =>
      el.classList.remove("nav-list__link__active"),
    );
    e.target.classList.add("nav-list__link__active");
  };

  return (
    <div className="header__wrapper">
      <div className="header">
        <Link onClick={onActivePage} className="header__logo__link" to="/">
          <div className="header__logo">
            <h2 className="header__title">My</h2>
            <div style={{ width: 90 }}>{View}</div>
            <h2 className="header__title">Space</h2>
          </div>
        </Link>

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
