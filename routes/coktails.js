const express = require("express");
const cocktailModel = require("./../models/Cocktail");
const router = express.Router();

// Show Cocktails
router.get("/", (req, res) => {
  cocktailModel
    .find()
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Show One Cocktail
router.get("/", (req, res) => {
  cocktailModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Create one Cocktail
router.post("/", (req, res) => {
  cocktailModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});
// findbyId and update
router
  .patch("/", (req, res) => {
    cocktailModel.findByIdAndUpdate(req.params.id);
  })
  .then()
  .catch();
module.exports = router;
