require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const routerManager = require('./routes/route');

const app = express();

app.use(express.json());

routerManager(app);

module.exports = app;