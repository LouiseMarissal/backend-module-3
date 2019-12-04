const express = require("express");
const UserProModel = require("./../models/UserPro");
const cocktailModel = require("./../models/Cocktail");
const uploadCloud = require("./../config/cloudinary");
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

//Create User
router.post("/", uploadCloud.single("Image"), (req, res) => {
  if (req.file) {
    req.body.Image = req.file.secure_url;
  }
  UserProModel.create(req.body)
    .then(dbRes => {
      res.status(201).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Modify User profile
router.patch("/:id", (req, res) => {
  UserProModel.findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      res.status(201).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Delete user Profile
router.delete("/:id", (req, res) => {
  UserProModel.findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dberr);
    });
});
