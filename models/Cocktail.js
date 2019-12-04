const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
  name: String,
  image: String,
  mainAlcoolID: {
    type: Schema.Types.ObjectId,
    ref: "MainAlcool"
  },
  ingredients: [Array],
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
  rates: [
    {
      rate: Number,
      author: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ]
});

const CocktailModel = mongoose.model("Cocktail", CocktailSchema);
module.exports = CocktailModel;
