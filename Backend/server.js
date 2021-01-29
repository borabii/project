const express = require("express");
const connectDb = require("./DB/Connection");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 6001;
connectDb();
const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
app.use("/users", require("./Api/Annonce"));
app.use("/users", require("./Api/User"));

app.listen(PORT, () => {
  console.log(`server runnig on port ${PORT}`);
});
