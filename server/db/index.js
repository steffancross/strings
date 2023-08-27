//this is the access point for all things database related!
const db = require("./db");

const User = require("./models/User");
const Text = require("./models/Text");
const Tag = require("./models/Tag");
const TextTag = require("./models/TextTag");

User.hasMany(Text);
Text.belongsTo(User);

User.hasMany(Tag);
Tag.belongsTo(User);

Text.belongsToMany(Tag, { through: TextTag });
Tag.belongsToMany(Text, { through: TextTag });

module.exports = {
  db,
  models: {
    User,
    Text,
    Tag,
    TextTag,
  },
};
