const express = require("express");
const router = express.Router();
// insert model

const User = require("../Model/UserModel");
//insert user controller
const UserController = require("../Controlers/UserControlers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getByID);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteUser);


//export
module.exports = router;
