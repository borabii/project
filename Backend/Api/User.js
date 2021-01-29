const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const auth = require("../midelware/auth");
const bcrypt = require("bcryptjs");
const User = require("C:/Users/Legion/Desktop/Projet/PFE_Demo/Backend/DB/UserInfo.js");
const route = express.Router();

// add user from sigun request
route.post("/signup", async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  // haching the pass of the user before  store it in db
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(userPassword, salt);
  const userExist = await User.findOne({ userEmail: userEmail });
  // verifie if email exist or not in db
  if (userExist) {
    return res.status(400).json({ msg: "adress mail deja existant" });
  } else {
    let user = {};
    user.userName = userName;
    user.userEmail = userEmail;
    user.userPassword = hashedPassword;
    let userModel = new User(user);
    await userModel.save();
    res.status(200).json({ msg: "regiter sucess", userModel });
  }
});
// login route
route.post("/login", async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    const user = await User.findOne({ userEmail: userEmail });
    if (!user)
      return res.status(400).json({ msg: "adress mail n'existe pas " });
    const isPassMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!isPassMatch)
      return res.status(400).json({ msg: "email ou password invalide " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
      },
    });
  } catch (err) {}
});
//get user data if login true
route.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    id: user._id,
    username: user.userName,
  });
});
// endpoint for check user token
route.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const userExist = await User.findById(verified.id);
    if (!userExist) return res.json(false);

    return res.json(true);
  } catch (err) {}
});

//endpoint for add profile photo to an user
route.post("/addPhoto", async (req, res) => {
  const { userPhoto } = req.body;
  await User.updateOne();
});
module.exports = route;
