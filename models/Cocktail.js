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
  Ingredient1: String,
  Ingredient2: String,
  Ingredient3: String,
  Ingredient4: String,
  Ingredient5: String,
  Ingredient6: String,
  Ingredient7: String,
  Ingredient8: String,
  Ingredient9: String,
  Ingredient10: String,
  Ingredient11: String,
  Ingredient12: String,
  Ingredient13: String,
  Ingredient14: String,
  Ingredient15: String,
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
  Like: {
    type: Number,
    default: 0
  }
});

const CocktailModel = mongoose.model("Cocktail", CocktailSchema);
module.exports = CocktailModel;
