import React, { useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import { MenuContext } from "react-flexible-sliding-menu";
import { Link } from "react-router-dom";

import ".\\Menu.css";
function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="menu">
      <div className="menu__exitBtn">
        <CloseIcon fontSize="large" onClick={closeMenu} />
      </div>
      <ul className="menu__item">
        <Link to="/home">
          <li>
            <span>
              <HomeIcon fontSize="large" />
            </span>
            <span>home</span>
          </li>
        </Link>
        <Link to="/chat">
          <li>
            <span>
              <ForumIcon fontSize="large" />
            </span>
            <span>chat</span>
          </li>
        </Link>
        <Link to="/AddAnnonce">
          <li>
            <span>
              <AddIcon fontSize="large" />
            </span>
            <span>Ajouter une annonce</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
