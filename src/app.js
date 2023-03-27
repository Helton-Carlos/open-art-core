const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");

const cors = require("cors");
require("dotenv").config();

class App {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "Get, POST, PUT, DELETE");
      res.header(
        "Access-Control-Allow-Headers",
        "Access, Content-type, Authorization, Acept, Origin, X-Requested-With"
      );

      this.app.use(cors());
      next();
    });
  }
  
  routes() {
    this.app.use("/api", routes);
  }
}

module.exports = new App().app;
