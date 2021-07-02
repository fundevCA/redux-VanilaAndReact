const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    name: String,
    time: { type: [String] },
    rating: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movies", Movie);
