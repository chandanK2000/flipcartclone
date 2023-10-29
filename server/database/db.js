const mongoose = require("mongoose");

const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-prod-cluster.iru5a32.mongodb.net/ecommerce`;

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log(`Error while connecting with database`, error.message);
  }
}

module.exports = connection;
