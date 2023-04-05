const express = require("express");
const router = express.Router();

const Bug = require("../models/bug.model");

// This api is used to store user details in mongodb
router.post("/", async (req, res) => {
  try {
    console.log(req.body.containerId, req.body.bugs);
    let bugs = await Bug.find({ containerId: req.body.containerId });
    console.log("bugs", bugs);
    if (bugs == null || bugs.length == 0) {
      console.log("creating", req.body);
      bugs = await Bug.create(req.body);
    } else {
      bugs = await Bug.findOneAndUpdate(
        { containerId: req.body.containerId },
        { bugs: req.body.bugs },
        {
          new: true,
        }
      );
    }
    return res.status(200).send(bugs);
  } catch (e) {
    return res.status(401).json({ message: e.message, status: "Failed" });
  }
});

// This api is used to get all user details from mongodb

router.get("/", async (req, res) => {
  try {
    const bugs = await Bug.find().lean().exec();
    return res.status(200).send(bugs);
  } catch (e) {
    return res.status(401).json({ message: e.message, status: "Failed" });
  }
});

router.get("/:containerId", async (req, res) => {
  try {
    const bugs = await Bug.find({ containerId: req.params.containerId })
      .lean()
      .exec();
    return res.status(200).send(bugs);
  } catch (e) {
    return res.status(401).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
