require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");

const PORT = process.env.PORT || 5005;

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server start on ${PORT} `));
  } catch (e) {
    console.log(e);
  }
};

start();