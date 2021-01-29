import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./Login.css";
import { Link } from "react-router-dom";
import UserContext from "C:/Users/Legion/Desktop/Projet/PFE_Demo/mypfe/src/context/UserContext.js";
function Login() {
  const [Inputs, setInputs] = useState({});

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const handelInputChange = (event) => {
    // event.persist();
    setInputs((inputs) => ({
      ...Inputs,
      [event.target.name]: event.target.value,
    }));
    console.log(Inputs);
  };
  const handelSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const loginRes = await axios.post(
      "http://localhost:6001/users/login",
      Inputs
    );

    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    console.log(userData);
    localStorage.setItem("auth-token", userData.token);
    history.push("/home");
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={handelSubmit}>
          <h5>E-mail</h5>
          <input
            type="text"
            name="userEmail"
            value={Inputs.name}
            onChange={handelInputChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="userPassword"
            value={Inputs.name}
            onChange={handelInputChange}
          />
          {/* <Link to="/home"> */}
          <button
            type="submit"
            className="login__signInButton"
            //onClick={signIn}
          >
            Sign In
          </button>
          {/* </Link> */}
        </form>
        <Link to="/signup">
          <button className="login__registerButton">Inscriver vous!</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
