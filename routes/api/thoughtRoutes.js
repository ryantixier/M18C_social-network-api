const router = require("express").Router();
const { Thought } = require("../../models");
// /api/thoughts

router.get("/", async (req, res) => {
  try {
    res.status(200).json("thoughts");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("===================");
    console.log(id);
    console.log("===================");
    res.status(200).json(req.params.id);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
