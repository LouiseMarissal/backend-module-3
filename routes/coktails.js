const express = require("express");
const cocktailModel = require("./../models/Cocktail");
const router = express.Router();
const uploadCloud = require("./../config/cloudinary");

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
router.post("/", uploadCloud.single("Image"), (req, res) => {
  if (req.file) {
    req.body.Image = req.file.secure_url;
  }
  console.log(req.body);
  req.body.UserProID = req.session.currentUser;
  cocktailModel
    .create(req.body)
    .then(dbRes => {
      res.status(201).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
  res.send("Ok");
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
