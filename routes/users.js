const express = require("express");
const UserModel = require("./../models/User");
const router = express.Router();
const uploadCloud = require("./../config/cloudinary");

// get the user view (admin) (bonus ?)
router.get("/", (req, res) => {
  UserModel.find()
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dberr);
    });
});

// router.post("/create-user", (req, res) => {
//   UserModel.create(req.body)
//     .then(dbRes => res.send(dbRes))
//     .catch(err => console.log(err));
// });
//
// Show User Profil
router.get("/:id", (req, res) => {
  UserModel.findById(req.params.id)
    .populate("favorites")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Modify User Profile
router.patch("/:id", (req, res) => {
  if (req.file) {
    req.body.photo = req.file.secure_url;
  }
  UserModel.findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Delete User Profile
router.delete("/:id", (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

module.exports = router;
