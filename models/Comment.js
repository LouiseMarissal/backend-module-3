const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: Object,
  cocktail: {
    type: Schema.ObjectId,
    ref: "Cocktail"
  },
  message: String,
  created: Date
});

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
