const Sequelize = require("sequelize");
const db = require("../db");

const Text = db.define("text", {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  source: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Text;
