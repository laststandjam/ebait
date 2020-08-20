const express = require("express");
const router = express.Router();
const Fish = require("../models/fish");

router.get("/", (req, res, next) => {
  Fish.find({}, (err, fishs) => {
    if (err) {
      console.log("hit", err);
    } else {
      res.send(fishs);
    }
  });
});

router.post("/add", async (req, res, next) => {
  let newFish = new Fish({
    speices: req.body.speices,
    location: req.body.location,
    size: req.body.size,
    price: req.body.price,
    sex: req.body.sex
  });
  try {
    const savedFish = await newFish.save();
    res.send({ savedFish });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/:id", function(req, res) {
  Fish.findByIdAndRemove({ _id: req.params.id }, (err, issue) => {
    if (err) res.json(err);
    else res.send("Remove succesful");
  });
});
router.get("/:id", (req, res, next) => {
  Fish.findById(req.params.id, (err, fish) => {
    if (err) console.log(err);
    else res.send(fish);
  });
});
module.exports = router;
