const express = require("express");
const Router = express.Router();
const { usersignup, userLogin } = require('../controller/usercontroller');
const { getProducts, getProductById } = require("../controller/product-controller");

Router.post('/signup', usersignup);
Router.post('/login', userLogin);
Router.get('/products', getProducts);
Router.get('/product/:id', getProductById);

module.exports = Router;
