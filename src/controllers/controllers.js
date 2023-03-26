const users = require("./json/users.json");

class controllers {
  users(req, res) {
    return res.status(200).json({
      users,
    });
  }
}

module.exports = new controllers();
