const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
  Name: String,
  Alcoholic: Boolean,
  Glass: String,
  Image: {
    type: String,
    default:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAxQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwIEAQf/xAAvEAEAAgEBBQcDAwUAAAAAAAAAAQIDEQQSEyFBMTNRUnGBkSJhoTJC8RQjYnKx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBQf/aAAwDAQACEQMRAD8A+xANMgAAAAGk6a6AAAAAA1Slrz9Me8isi8YKxGt51OFinsn8lEBW+CYjWs6paTHKeUlQAAAAAAAAAAAAAAXxWrau5aI+yB8mjeTHOOfGOksL0y1tSa5P5RtERP0zrHRB4HseyjWOm/bSOzrK820nh445sYr1pjmdfqnozjy7kzrGuvaiqzhjSZtM2n7yjgpF7aWjotGelqz0nTqlgtFba25RoCs1ti50nWOsS8yUjLXfrys9ttFI7NZTw3/uzGmm9zBL/o3mjdyTHuwuIAAAAAAAAAAAAvh4do3ZiN5XhU8sOOO2NJ00dWHLF40ntj8ouNcKnlg4WPyw2IrHCp5YOFTyw2AxwqeWDhU8sNgMcLH5Yc2Xdm+lI0hvLkm9tzHz8S+Ddx6x+rqqa1TZ68ptMyXrWuTHuxpzebPk/bM+jVPryzf9sRpAJ7T3keiTWW29kmfZlQAEAAAAAAAAAACOU6xynxAHVhy78aT2quDnrrE84dWHLF40nlZFqoPEV65suSck7mP0mXmbLM/TXs6z4pVmazrE6SsRfHPB5WpP+0N8evStvhOu0WjlasS9/qP8fyDMYZvbWYmkeDWXJFK7lP4YtmvbwiPsmB00AVAAAAAAAAAAAAAAA7J1jlIA7MVpvSJntS2m8xO7HLWObez92ltPeR6JipAKg8egAAAAAAAAAAAAAAAAAAAAOrZ+790tp7yPRXZ+790tp7yPRMXiQCoAAAAAAAAAAAAAAAAAAAAAcvEHVs/d+6W095Hors/d+6W095HozipANIAAAAAAAAAAAAAAAAAAAApg039bTpEOjep5quMItdu/TzV+Xm/TzV+XGJCuybUmP1V+XHMaTMAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q=="
  },
  Instructions: String,
  Ingredients: [String],
  Measures: Array,
  Date: Date,
  isPublic: Boolean,
  UserProID: {
    type: Schema.Types.ObjectId,
    ref: "UserPro"
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag"
    }
  ],
  Like: {
    type: Number,
    default: 0
  }
});

// CocktailSchema.index({ Name: "text", Ingredients: "text", Tags: "text" });
const CocktailModel = mongoose.model("Cocktail", CocktailSchema);
module.exports = CocktailModel;
