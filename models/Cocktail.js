const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
  name: String,
  image: String,
  mainAlcoolID: {
    type: Schema.Types.ObjectId,
    ref: "MainAlcool"
  },
  ingredients: [String],
  recipe: String,
  isPublic: Boolean,
  UserProID: {
    type: Schema.Types.ObjectId,
    ref: "UserPro",
    tagID: {
      type: Schema.Types.ObjectId,
      ref: "Tag"
    }
  },
  likes: Number
});

const CocktailModel = mongoose.model("Cocktail", CocktailSchema);
module.exports = CocktailModel;
