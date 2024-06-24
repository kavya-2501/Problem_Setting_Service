const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const BaseError = require("./errors/Baseerror");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "The service is alive" });
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server running on PORT ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to DB Server");
});
