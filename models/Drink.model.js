const mongoose = require("mongoose");

const drink = mongoose.Schema({
  name: String,
  price: Number,
  stock: Boolean,
  coffein: Boolean,
  volume: Number,
  description: String
  });


const Juice = mongoose.model('Juice', drink);

module.exports = Juice;