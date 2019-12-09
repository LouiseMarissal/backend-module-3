const express = require("express");
const cocktailModel = require("./../models/Cocktail");
userModel = require("./../models/User");
const router = express.Router();
const uploadCloud = require("./../config/cloudinary");

// Show Cocktails

// router.get("/", (req, res) => {
//   cocktailModel
//     .find({
//       $text: {
//         $search: `.*${req.query.query}.*`,
//         $caseSensitive: false
//       }
//     })
//     .populate("tag")
//     .then(dbRes => {
//       res.status(200).send(dbRes);
//     })
//     .catch(dbErr => {
//       console.log(dbErr);
//       res.status(500).send(dbErr);
//     });
// });

router.get("/", (req, res) => {
  cocktailModel
    .find({
      $or: [
        { Name: { $regex: `.*${req.query.query}.*`, $options: "i" } },
        { Tags: { $regex: `.*${req.query.query}.*`, $options: "i" } },
        { Ingredients: { $regex: `.*${req.query.query}.*`, $options: "i" } }
      ]
    })
    .populate("tag")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
});

// router.get("/userpro-cocktail", (req, res) => {
//   cocktailModel
//     .find({
//       UserProID: req.params.id
//     })
//     .then(dbRes => {
//       res.status(200).send(dbRes);
//     })
//     .catch(dbErr => {
//       res.status(500).send(dbErr);
//     });
// });

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

//FindByUserId
router.get("/profile/edit-cocktail/:id", (req, res) => {
  // userModel
  //   .findById(req.params.id)
  //   .then(dbRes => {
  // res.status(200).send(dbRes);
  // console.log("'iiiiici");
  cocktailModel
    .findById(req.params.id)
    .populate("cocktail")
    .then(dbRes => {
      console.log("heeeere");
      console.log(dbRes);
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
  // })
  // .catch(dbErr => {
  //   console.log;
  //   res.status(500).send(dbErr);
  // });
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
  // res.send("Ok");
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

// Search cocktails

module.exports = router;
