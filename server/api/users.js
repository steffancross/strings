const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// set first visit to false
router.put("/:id", async (req, res, next) => {
  try {
    const userToEdit = await User.findByPk(req.params.id);

    userToEdit.firstvisit = false;

    await userToEdit.save();

    res.send(userToEdit);
  } catch (err) {
    next(err);
  }
});
