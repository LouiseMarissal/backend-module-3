const express = require("express");
const cocktailModel = require("./../models/Cocktail");
const router = express.Router();

// Show Cocktails
router.get("/", (req, res) => {
  cocktailModel
    .find()
    .populate("tag")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Show One Cocktail
router.get("/:id", (req, res) => {
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
router.patch("/:id", (req, res) => {
  cocktailModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Delete cocktails
router.delete("/:id", (req, res) => {
  cocktailModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});
module.exports = router;
