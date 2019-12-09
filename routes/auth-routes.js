const express = require("express");
const router = express.Router();
const userModel = require("./../models/User");
const bcrypt = require("bcryptjs");
const uploadCloud = require("../config/cloudinary");
// console.log(uploadCloud);

//Signup User
router.post("/signup", uploadCloud.single("photo"), (req, res, next) => {
  const user = req.body; // req.body contains the submited informations (out of post request)
  if (req.file) user.photo = req.file.secure_url;
  if (!user.email || !user.password) {
    res.status(400).send("information incomplete");
    return;
  } else {
    userModel
      .findOne({ email: user.email })
      .then(dbRes => {
        if (dbRes) return res.status(400).send("User already exists");

        const salt = bcrypt.genSaltSync(10); // cryptography librairie
        const hashed = bcrypt.hashSync(user.password, salt); // generates a secured random hashed password
        user.password = hashed; // new user is ready for db

        userModel
          .create(user)
          .then(createdUser => {
            //
            res.status(201).send(createdUser);
          })
          .catch(dbErr => res.status(500).send("Something went wrong"));
      })
      .catch(dbErr => next(dbErr));
  }
  console.log(user);
});

// Login

router.post("/signin", (req, res, next) => {
  const user = req.body.formValues;
  console.log(user);

  if (!user.email || !user.password) {
    // one or more field is missing
    // req.flash("error", "wrong credentials");
    return res.status(400).send("You need to enter both email and password");
  }

  userModel
    .findOne({ email: user.email })
    .then(dbRes => {
      if (!dbRes) {
        // no user found with this email
        // req.flash("error", "wrong credentials");
        return res.status(400).send("Email not existing");
      }
      // user has been found in DB !
      if (bcrypt.compareSync(user.password, dbRes.password)) {
        // encryption says : password match success
        req.session.currentUser = dbRes; // user is now in session... until session.destroy

        //create sendable user;
        return res.status(200).send(dbRes);
        // return res.redirect("/pro");
      } else {
        // encryption says : password match failde
        return res.status(400).send("Wrong password");
      }
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send("Something went wrong");
    });
});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    res.locals.isLoggedIn = undefined;
    res.locals.isAdmin = undefined;
    res.status(200).send("Succesfully logged out");
  });
});

module.exports = router;
