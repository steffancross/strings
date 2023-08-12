const router = require("express").Router();
module.exports = router;
const { models } = require("../db");
const { Text, Tag } = models;

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
