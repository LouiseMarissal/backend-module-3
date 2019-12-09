const express = require("express");
const CommentModel = require("./../models/Comment");
userModel = require("./../models/User");
const router = express.Router();

router.get("/", (req, res) => {
  CommentModel.find()
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
});

module.exports = router;
