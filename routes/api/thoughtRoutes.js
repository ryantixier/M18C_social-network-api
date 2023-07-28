const router = require("express").Router();
const { Thought, User } = require("../../models");
// /api/thoughts

router.get("/", async (req, res) => {
  try {
    const allThoughts = await Thought.find();
    res.status(200).json(allThoughts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getOneThought = await User.findOne({ _id: id });
    console.log("===================");
    console.log(id);
    console.log("===================");
    res.status(200).json(getOneThought);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const thought = await Thought.create({
      username: data.username,
      thoughtText: data.thoughtText,
    });
    await User.findOneAndUpdate(
      { _id: data.userId }, // condition
      { $push: { thoughts: thought._id } }, // update location
      { new: true } // boilerplate
    );

    console.log("===================");
    console.log(data);
    console.log("===================");
    //
    //
    //
    res.status(200).json(thought);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// TO-DO
// update route
// delete route

module.exports = router;
