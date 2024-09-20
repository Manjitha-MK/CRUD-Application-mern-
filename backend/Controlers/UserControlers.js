const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {
  let Users;

  //Get all Users
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  //not found
  if (!users) {
    return res.status(404).json({ message: "User not Found" });
  }
  //Display all users
  return res.status(200).json({ users });
};

//data insert

const addUsers = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;

  let user;

  try {
    user = new User({ name, gmail, age, address });
    await user.save();
  } catch (err) {
    console.log(err);
  }

  //not inseert user
  if (!user) {
    return res.status(404).json({ message: "unable to add users" });
  }
  return res.status(200).json({ user });
};

// GET by ID
const getByID = async (req, res, next) => {
  const id = req.params.id; // Get the ID from the URL parameters

  let user;
  try {
    user = await User.findById(id); // Pass the ID to findById()
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error retrieving user" });
  }

  // Check if user is not found
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });
};

//Update users
const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, gmail, age, address } = req.body;

  let users;
  try {
    users = await User.findByIdAndUpdate(id, {
      name: name,
      gmail: gmail,
      age: age,
      address: address,
    });
    users = await users.save();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "Unavailable to Update Users" });
  }
  return res.status(200).json({ users });
};

//Delete users
const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(404).json({ message: "Unavailable to delete Users" });
  }
  return res.status(200).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getByID = getByID;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
