const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const bugController = require("./controllers/bug.controller");

app.use("/bugs", bugController);
module.exports = app;
