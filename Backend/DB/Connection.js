const mongoose = require("mongoose");

const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rabii:rabii@cluster0.vhf6i.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("db connected succesfuly");
};

module.exports = ConnectDB;
