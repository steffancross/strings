const router = require("express").Router();
module.exports = router;
const { models } = require("../db");
const { Tag, Text } = models;

// get all
router.get("/", async (req, res, next) => {
  try {
    const { userId } = req.query;
    const tags = await Tag.findAll({
      where: {
        userId: userId,
      },
      attributes: ["name", "id"],
    });
    res.send(tags);
  } catch (err) {
    next(err);
  }
});

// get single
router.get("/:id", async (req, res, next) => {
  try {
    const tag = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["name", "id"],
      include: {
        model: Text,
        attributes: ["content", "id"],
        through: { attributes: [] },
      },
    });
    res.send(tag);
  } catch (err) {
    next(err);
  }
});

// create new tag
router.post("/", async (req, res, next) => {
  try {
    const { name, userId } = req.body;

    const [newTag, created] = await Tag.findOrCreate({
      where: { name, userId },
    });

    res.send(newTag);
  } catch (err) {
    next(err);
  }
});

// delete tag
router.delete("/:id", async (req, res, next) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    await tag.destroy();
    res.send(tag);
  } catch (err) {
    next(err);
  }
});

// edit a tag
router.put("/:id", async (req, res, next) => {
  try {
    const { name } = req.body;
    const tagToEdit = await Tag.findByPk(req.params.id);

    tagToEdit.name = name;

    await tagToEdit.save();
    res.send(tagToEdit);
  } catch (err) {
    next(err);
  }
});
