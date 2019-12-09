const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User"
  },
  cocktail: {
    type: Schema.ObjectId,
    ref: "Cocktail"
  },
  message: String,
  created: Date
});

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
