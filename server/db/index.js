//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Text = require("./models/Text");
const Tag = require("./models/Tag");

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Text,
    Tag,
  },
};
