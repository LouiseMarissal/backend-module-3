const express = require("express");
const cocktailModel = require("./../models/Cocktail");
const TagModel = require("./../models/Tag");
const userModel = require("./../models/User");
const router = express.Router();

// find all tags
router.get("/", (req, res) => {
  TagModel.find()
    .then(dbRes => res.json(dbRes))
    .catch(dbErr => console.log(dbErr));
});

// update tag id into cocktail model
router.post("/cocktail/addTag/:id", (req, res) => {
  const tagId = req.body.Id;
  cocktailModel
    .findByIdAndUpdate(req.params.id, { $push: { tag: tagId } })
    .then(dbRse => console.log(dbRes))
    .catch(dbErr => console.log(dbErr));
});

router.post("/cocktail/removeTag/:id", (req, res) => {
  cocktailModel
    .findByIdAndUpdate(req.params.id, { $pull: { tag: tagId } })
    .then(dbRes => console.log(dbRes))
    .catch(dbErr => console.log(dbErr));
});

module.exports = router;
