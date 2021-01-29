import axios from "axios";
import React, { useState } from "react";
import "./SignUp.css";
function SignUp() {
  const [UserInfo, setUserInfo] = useState({});

  const handelInputChange = (event) => {
    //event.persist();

    setUserInfo((inputs) => ({
      ...UserInfo,
      [event.target.name]: event.target.value,
    }));
    console.log(UserInfo);
  };
  const handelSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    const registerUser = axios.post(
      "http://localhost:6001/users/signup",
      UserInfo
    );
  };
  return (
    <div className="signup">
      <div className="signup__container">
        <h1>Sign-in</h1>

        <form onSubmit={handelSubmit}>
          <div className="signup__containerAddInfo">
            <h5>user name</h5>
            <input
              type="text"
              name="userName"
              onChange={handelInputChange}
              value={UserInfo.name}
            ></input>
            <h5>email</h5>
            <input
              type="text"
              name="userEmail"
              onChange={handelInputChange}
              value={UserInfo.name}
            ></input>
            <h5>mots de passe</h5>
            <input type="password"></input>
            <h5>confirmer mots de passe</h5>
            <input
              type="password"
              name="userPassword"
              onChange={handelInputChange}
              value={UserInfo.name}
            ></input>
          </div>
          <button className="signup__registerBtn">Inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
