import { Icon, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import "./Layout.scss";

import LogoIcon from "../../assets/images/logo.png";

const Layout: FC = ({ children }) => (
  <div className="layout">
    <div>
      <div>
        <Menu />
      </div>
      {children}
    </div>
  </div>
);

const Menu = () => {
  const { push } = useHistory();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="menu">
      <div className="menu__image-container">
        <img
          className="menu__img"
          src={LogoIcon}
          alt="logo digital house"
          onClick={() => push({ pathname: "/" })}
          loading="lazy"
          decoding="async"
        />
      </div>
      <ul className="menu__nav">
        <li className="menu__nav__item">
          <Link to="/config" className="menu__nav__item-link">Administrar</Link>
          <Link to="/history" className="menu__nav__item-link">Historial</Link>
        </li>
      </ul>
      <button className="menu__btn" onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon as={BsSun} /> : <Icon as={BsMoon} />}
        {colorMode === "light" ? " Light" : " Dark"} mode
      </button>
    </div>
  );
};

export default Layout;
