const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  name: String,
  email: String,
  password: String,
  photo: String,
  cocktail: {
    type: Schema.Types.ObjectId,
    ref: "Cocktail"
  },
  etablissement: {
    name: String,
    website: String
  }
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
