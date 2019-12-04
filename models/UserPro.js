const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProSchema = new Schema({
  firstName: String,
  name: String,
  email: String,
  password: String,
  photo: String,
  cocktails: {
    type: Schema.Types.ObjectId,
    ref: "Cocktail"
  },
  etablissement: {
    name: String,
    website: String
  }
});

const UserProModel = mongoose.model("UserPro", UserProSchema);
module.exports = UserProModel;
