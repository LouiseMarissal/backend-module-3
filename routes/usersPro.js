const express = require("express");
const UserProModel = require("./../models/UserPro");
const cocktailModel = require("./../models/Cocktail");
const router = express.Router();

router.get("/:id", (req, res) => {
  cocktailModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(200).send(dbErr);
    });
  UserProModel.find()
    .populate("cocktails")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(200).send(dbErr);
    });
});

// Show Pro Profile
router.get("/:id", (req, res) => {
  UserProModel.findById(req.params.id)
    .populate("")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

//
