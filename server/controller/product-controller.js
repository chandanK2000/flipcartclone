const Product = require('../model/product-schema.js');
const getProducts = async (request, response) => {
  try {

    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });

  }
}

const getProductById = async (request, response) => {
  try {
    const products = await Product.findOne({ 'id': request.params.id });
    response.status(200).json(products);
  } catch (error) {
    response.status(201).json(error.message)
  }
}

module.exports = {
  getProducts, getProductById
};
