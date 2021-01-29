import React, { useState, useEffect } from "react";
import ".\\Home.css";
import axios from "axios";
import Annonce from "C:\\Users\\Legion\\Desktop\\Projet\\PFE_Demo\\mypfe\\src\\Component\\annonce\\Annonce.js";
function Home() {
  const [AnnonceData, setAnnonceData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6001/users/getAnnonce")
      .then((res) => {
        console.log(res);
        setAnnonceData(res.data.annoncedata);
        console.log(AnnonceData);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="home">
      <div className="home__row">
        {AnnonceData.map((annoce) => (
          <Annonce
            categorie={annoce.categorie}
            place={annoce.place}
            temps={annoce.temp}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
