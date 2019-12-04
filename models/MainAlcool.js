const mongoose = requires("mongoose");
const Schema = mongoose.Schema;

const MainAlcoolSchema = new Schema({
  name: String,
  abv: String,
  description: String
});

const MainAlcoolModel = mongoose.model("MainAlcool", MainAlcoolSchema);

module.exports = MainAlcoolModel;
