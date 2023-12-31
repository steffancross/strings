const router = require("express").Router();
const { col } = require("sequelize");
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

// get user styling
router.get("/styles", async (req, res, next) => {
  try {
    const { userId } = req.query;
    const user = await User.findOne({
      where: {
        id: userId,
      },
      attributes: [
        "primaryColor",
        "secondaryColor",
        "tertiaryColor",
        "columns",
      ],
    });

    res.send(user);
  } catch (err) {
    next(err);
  }
});

// set user styling
router.put("/styles", async (req, res, next) => {
  try {
    const { primaryColor, secondaryColor, tertiaryColor, columns, userId } =
      req.body;

    const userToEdit = await User.findByPk(userId);

    userToEdit.primaryColor = primaryColor;
    userToEdit.secondaryColor = secondaryColor;
    userToEdit.tertiaryColor = tertiaryColor;
    userToEdit.columns = columns;

    await userToEdit.save();
    res.send(userToEdit);
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
