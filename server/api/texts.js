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

// single text
router.get("/:id", async (req, res, next) => {
  try {
    const text = await Text.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["content", "id", "source", "description", "link"],
      include: {
        model: Tag,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
    res.send(text);
  } catch (err) {
    next(err);
  }
});

// finds texts by tag
router.get("/byTag", async (req, res, next) => {
  try {
    const { userId, tagName } = req.query;
    const texts = await Text.findAll({
      where: {
        userId: userId,
      },
      attributes: ["content", "id"],
      include: {
        model: Tag,
        where: { name: tagName },
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
    res.send(texts);
  } catch (err) {
    next(err);
  }
});

// finds text by search term
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

// create new text
router.post("/", async (req, res, next) => {
  try {
    const { content, userId, source, link, description, tags } = req.body;

    const newText = await Text.create({
      content,
      userId,
      source,
      link,
      description,
    });

    if (tags && tags.length > 0) {
      for (const tag of tags) {
        const [newTag, created] = await Tag.findOrCreate({
          where: { name: tag },
        });

        await newText.addTags(newTag);
      }
    }

    res.send(newText);
  } catch (err) {
    next(err);
  }
});
