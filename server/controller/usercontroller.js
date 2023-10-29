const User = require('../model/user-schema');
const usersignup = async (request, response) => {
  try {
    const existingUser = await User.findOne({ username: request.body.username });

    if (existingUser) {
      return response.status(401).json({ message: 'User already exists' });
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }

};

//for the userlogin

const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({ username: username, password: password })
    if (user) {
      return response.status(200).json({data:user});

    } else {
      return response.status(401).json("invalid login");

    }

  } catch (error) {
    response.status(500).json('Error', error.message);
  }
}

module.exports = {
  usersignup, userLogin
};
