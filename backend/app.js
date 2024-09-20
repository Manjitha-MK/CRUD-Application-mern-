// pass = fyszVQtqxFcPE6P0
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);

mongoose
  .connect("mongodb+srv://admin:fyszVQtqxFcPE6P0@cluster0.vje7p.mongodb.net/")
  .then(() => console.log("connect to mongodb"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

//Register.................................
//call Register Model
require("./Model/Register");
const User = mongoose.model("Register");
app.post("/register", async (req, res) => {
  const { name, gmail, password } = req.body;
  try {
    await User.create({
      name,
      gmail,
      password,
    });
    res.send({ status: "OK" });
  } catch (err) {
    res.send({ status: "err" });
  }
});

//Login..............................
app.post("/login", async (req, res) => {
  const { gmail, password } = req.body;
  try {
    const user = await User.findOne({ gmail });
    if (!user) {
      return res.status(404).json({ err: "User Not Found" });
    }
    if (user.password === password) {
      return res.status(200).json({ Status: "OK" });
    } else {
      return res.status(401).json({ err: "Incorrect Password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Server Error" });
  }
});

