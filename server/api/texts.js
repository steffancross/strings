const router = require("express").Router();
module.exports = router;
const { Op } = require("sequelize");
const { models } = require("../db");
const { Text, Tag } = models;

// all user text
router.get("/", async (req, res, next) => {
  try {
    const { userId } = req.query;
    const texts = await Text.findAll({
      where: {
        userId: userId,
      },
      attributes: ["content", "id"],
      include: {
        model: Tag,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
    res.send(texts);
  } catch (err) {
    next(err);
  }
});

// finds texts by tag
router.get("/byTag", async (req, res, next) => {
  try {
    const { userId, tagNames } = req.query;
    const texts = await Text.findAll({
      where: {
        userId: userId,
      },
      attributes: ["content", "id"],
      include: {
        model: Tag,
        where: { name: tagNames },
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
    res.send(texts);
  } catch (err) {
    next(err);
  }
});

router.get("/byContent", async (req, res, next) => {
  try {
    const { userId, searchTerm } = req.query;
    const texts = await Text.findAll({
      where: {
        userId: userId,
        content: {
          [Op.iLike]: `%${searchTerm}%`,
        },
      },
      attributes: ["content", "id"],
      include: {
        model: Tag,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
    res.send(texts);
  } catch (err) {
    next(err);
  }
});
