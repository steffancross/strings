const router = require("express").Router();
module.exports = router;
const { models } = require("../db");
const { Tag } = models;

// get all
router.get("/", async (req, res, next) => {
  try {
    const { userId } = req.query;
    const tags = await Tag.findAll({
      where: {
        userId: userId,
      },
    });
    res.send(tags);
  } catch (err) {
    next(err);
  }
});
