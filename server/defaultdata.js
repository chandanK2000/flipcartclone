
const products = require("./constants/products");

const Product = require("./model/product-schema");
const DefaultData = async () => {
  try {
    const existingProduct = await Product.findOne({ id: products[0].id }).maxTimeMS(50000); 
    if (!existingProduct) {
      await Product.insertMany(products);
      console.log('Data imported Successfully');
    } else {
      console.log('Data already exists, skipping insertion.');
    }
  } catch (error) {
    console.log('Error while inserting default Data', error.message);
  }
}


module.exports = DefaultData;