const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    name: String,
    time: { type: [String] },
    rating: { type: Number }
  },
  { timestamps: true }
);

const MovieModel = mongoose.model("Movies", Movie);
module.exports = MovieModel;
