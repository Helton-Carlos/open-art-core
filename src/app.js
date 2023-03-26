const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");

const app = express();

const cors = require("cors");

require('dotenv').config()

app.use(bodyParser.json());

app.use(cors());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Conexão porta ${process.env.PORT}`);
});
