import React, { useState } from "react";
import "./Ajouteannonce.css";
import axios from "axios";
function AjouteAnnonce() {
  const [Inputs, setInputs] = useState({});
  const times = ["9", "10", "11", "11", "12", "13", "14", "15"];
  const handelInputChange = (event) => {
    // event.persist();
    setInputs((inputs) => ({
      ...Inputs,
      [event.target.name]: event.target.value,
    }));
  };
  const handelSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    axios
      .post("http://localhost:6001/users/addannonce", Inputs)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="AjouteAnnonce">
      <form onSubmit={handelSubmit}>
        {/* categorie */}
        <div className="AjouteAnnonce__categorie">
          <select
            name="categorie"
            onChange={handelInputChange}
            value={Inputs.name}
          >
            <option value="foot">Foot</option>
            <option value="tennis">tenis</option>
            <option value="fifa2020">fifa2020</option>
            <option value="billard">billard</option>
          </select>
        </div>
        {/* place */}
        <div className="AjouteAnnonce__localite">
          <select name="place" onChange={handelInputChange} value={Inputs.name}>
            <option value="stade1">stade1</option>
            <option value="stade2">stade2</option>
            <option value="stade3">stade3</option>
            <option value="stade4">stade4</option>
          </select>
        </div>
        {/* temps */}
        <div className="AjouteAnnonce__rdvTemps">
          <select name="temp" onChange={handelInputChange} value={Inputs.name}>
            {times.map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>
        </div>
        {/* btnSubmit */}
        <button type="submit">Publier</button>
      </form>
    </div>
  );
}

export default AjouteAnnonce;
