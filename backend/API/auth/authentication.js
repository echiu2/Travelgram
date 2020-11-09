const express = require("express");
const router = express.Router();
const { User } = require("../../../database/models/index");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../../../utils");
//require dotenv to use .env file
require("dotenv").config();

router.post("/", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    console.log(process.env.JWT_KEY)
    // console.log('user',user)
    if (user) {
      res.status(200).send(jwt.sign({ id: user.id }, process.env.JWT_KEY));
    } else {
      res.status(401).send();
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
