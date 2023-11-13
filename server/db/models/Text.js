const Sequelize = require("sequelize");
const db = require("../db");

const Text = db.define("text", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Text;
