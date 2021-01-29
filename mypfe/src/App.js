import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/header/Header";
import Home from "./page/home/Home";
import Menu from "C:\\Users\\Legion\\Desktop\\Projet\\PFE_Demo\\mypfe\\src\\Component\\home_menu\\Menu.js";
import Chat from "C:\\Users\\Legion\\Desktop\\Projet\\PFE_Demo\\mypfe\\src\\page\\chat\\Chat.js";
import AjouteAnnonce from "./page/ajout_annonce/AjouteAnnonce";
import MenuProvider from "react-flexible-sliding-menu";
import Login from "./page/welcomPage/Login";
import SignUp from "./page/welcomPage/SignUp";
import UserContext from "./context/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from "./page/userProfil/UserProfile";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLogin = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const toeknRes = await axios.post(
        "http://localhost:6001/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (toeknRes.data) {
        const userDataRes = await axios.get("http://localhost:6001/users", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userDataRes.data,
        });
      }
    };
    checkLogin();
  }, []);
  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <MenuProvider MenuComponent={Menu}>
          <div className="app">
            <Switch>
              <Route path="/chat">
                <Header />
                <Chat />
              </Route>
              <Route path="/AddAnnonce">
                <Header />
                <AjouteAnnonce />
              </Route>
              <Route path="/home">
                <Header />
                <Home />
              </Route>
              <Route path="/SignUp">
                <SignUp />
              </Route>
              <Route path="/userProfile">
                <Header />

                <UserProfile />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </div>
        </MenuProvider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
