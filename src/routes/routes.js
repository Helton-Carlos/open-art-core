const express = require("express");
const router = express.Router()

const controllers = require("../controllers/controllers.js");

router.get("/users", controllers.users);

module.exports = router;
