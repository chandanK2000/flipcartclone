const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique:true
  },
  url: {
    type: String,
    required: true,
  },
  detailUrl: {
    type: String,
    required: true,
  },
  title: {
    type: Object,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },

})

const Product = mongoose.model('product', productSchema);

module.exports = Product;