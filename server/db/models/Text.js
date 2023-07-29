const Sequelize = require("sequelize");
const db = require("../db");

const Text = db.define("text", {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Text;
