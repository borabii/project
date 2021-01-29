const mongoose = require("mongoose");

const userInfoShcema = new mongoose.Schema({
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userPassword: {
    type: String,
  },
  userProfilePicture: {
    type: String,
  },
});

module.exports = mongoose.model("User", userInfoShcema);
