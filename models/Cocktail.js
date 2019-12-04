const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
  Name: String,
  Alcoholic: Boolean,
  Tags: String,
  Glass: String,
  Image: String,
  Instructions: String,
  Ingredients1: String,
  Ingredients2: String,
  Ingredients3: String,
  Ingredients4: String,
  Ingredients5: String,
  Ingredients6: String,
  Ingredients7: String,
  Ingredients8: String,
  Ingredients9: String,
  Ingredients10: String,
  Ingredients11: String,
  Ingredients12: String,
  Ingredients13: String,
  Ingredients14: String,
  Ingredients15: String,
  Measure1: String,
  Measure2: String,
  Measure3: String,
  Measure4: String,
  Measure5: String,
  Measure6: String,
  Measure7: String,
  Measure8: String,
  Measure9: String,
  Measure10: String,
  Measure11: String,
  Measure12: String,
  Measure13: String,
  Measure14: String,
  Measure15: String,
  Date: Date,
  isPublic: Boolean,
  UserProID: {
    type: Schema.Types.ObjectId,
    ref: "UserPro"
  },
  tagID: {
    type: Schema.Types.ObjectId,
    ref: "Tag"
  },
  like: {
    type: Number,
    default: 0
  }
});

const CocktailModel = mongoose.model("Cocktail", CocktailSchema);
module.exports = CocktailModel;
