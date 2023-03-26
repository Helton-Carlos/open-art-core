const { Router } = require("express");
const controller = require("../src/app/controllers/controllers");

const routes = new Router();

routes.get("/users", controller.users);

module.exports = routes;
