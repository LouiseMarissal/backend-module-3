const express = require("express");
const UserProModel = require("./../models/UserPro");
const cocktailModel = require("./../models/Cocktail");
const uploadCloud = require("./../config/cloudinary");
const router = express.Router();

// get the userPro view (admin) (bonus ?)
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

// Show UserPro Profile
router.get("/:id", (req, res) => {
  cocktailModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(200).send(dbErr);
    });
  UserProModel.findById(req.params.id)
    .populate("cocktails")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

//Create User
router.post("/", uploadCloud.single("photo"), (req, res) => {
  if (req.file) {
    req.body.photo = req.file.secure_url;
  }
  UserProModel.create(req.body)
    .then(dbRes => {
      res.status(201).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Modify UserPro profile
router.patch("/:id", uploadCloud.single("photo"), (req, res) => {
  if (req.file) {
    req.body.photo = req.file.secure_url;
  }
  UserProModel.findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      res.status(201).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Delete userPro Profile
router.delete("/:id", (req, res) => {
  UserProModel.findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dberr);
    });
});

module.exports = router;
