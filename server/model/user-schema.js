const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: true,
    min: 5,
    max: 20
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
    min: 3,
    max: 20
  },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
    index: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
})

const User = mongoose.model('user', userSchema);

module.exports =User;

