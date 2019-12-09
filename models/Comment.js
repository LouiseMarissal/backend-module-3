const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User"
  },
  content: String,
  created: Date
});

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
