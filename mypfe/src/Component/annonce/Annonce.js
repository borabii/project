import React from "react";
import ".\\Annonce.css";
import logo from "./avatar-370-456322.png";

function Annonce({ categorie, place, temps }) {
  return (
    <div className="annonce">
      <img className="annonce__photo" src={logo} alt=""></img>
      <div className="annonce__categorie">Categorie:{categorie}</div>
      <div className="annonce__place">Place:{place}</div>
      <div className="annonce__temps">Temps:{temps}</div>
      <button>Contacter</button>
    </div>
  );
}

export default Annonce;
