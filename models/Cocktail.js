const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
  Name: String,
  Alcoholic: Boolean,
  Tags: String,
  Glass: String,
  Image: {
    type: String,
    default:
      "https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
  },
  Instructions: String,
  Ingredients: Array,
  Measures: Array,
  Date: Date,
  isPublic: Boolean,
  UserProID: {
    type: Schema.Types.ObjectId,
    ref: "UserPro"
  },
  // tagID: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Tag"
  // },
  Like: {
    type: Number,
    default: 0
  }
});

CocktailSchema.index({ Name: "text", Ingredients: "text", Tags: "text" });
const CocktailModel = mongoose.model("Cocktail", CocktailSchema);
module.exports = CocktailModel;
