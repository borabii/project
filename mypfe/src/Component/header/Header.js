import React, { useContext } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { MenuContext } from "react-flexible-sliding-menu";
import logo from "./avatar-370-456322.png";
import { Link } from "react-router-dom";

import "./Header.css";
function Header() {
  const { openMenu } = useContext(MenuContext);
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon fontSize="large" onClick={openMenu} />
      </div>
      <div className="header__rigth">
        <span className="header__rigthUserName">Hello,Floyd Miles</span>
        <Link to="/userProfile">
          <img className="header__rigthUserProfilePhoto" src={logo} alt="" />
        </Link>

        <Link to="/">
          <ExitToAppIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
