const express = require("express");
const app = express();

const v1Router = express.Router();

const problemRouter = require("./problems.routes");

v1Router.use("/problems", problemRouter);

module.exports = v1Router;
