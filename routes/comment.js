const express = require("express");
const CommentModel = require("./../models/Comment");
userModel = require("./../models/User");
const router = express.Router();

router.get("/", (req, res) => {
  CommentModel.find()
    .populate("User")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
});

router.post("/", (req, res) => {
  CommentModel.create(req.body)
    .then(dbRes => {
      res.status(201).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
  // res.send("Ok");
});

module.exports = router;
