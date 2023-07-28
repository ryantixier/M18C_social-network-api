const router = require("express").Router();
const { User } = require("../../models");
// // /api/users

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getOneUser = await User.findOne({ _id: id });
    console.log("===================");
    console.log(id);
    console.log("===================");
    res.status(200).json(getOneUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const user = await User.create(data);
    console.log("===================");
    console.log(data);
    console.log("===================");
    //
    //
    //
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
