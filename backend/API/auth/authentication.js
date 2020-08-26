const express = require("express");
const router = express.Router();
const { User } = require('../../../database/models/index')

const jwt = require('jwt-simple')
require('dotenv').config()

router.post("/", async(req, res, next) => {
    try {
        console.log(req.body)
        const user = await User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        console.log(user)
        // console.log(process.env.JWT_KEY)
        if (user) {
            res.status(200).send(jwt.encode({id: user.id}, process.env.JWT_KEY))
            // res.status(200).write(jwt.encode({id: user.id}, process.env.JWT_KEY))
            // res.status(200).write(user.id)
            // res.end()

        } else {
            res.status(401).send()
        }
    }
    catch(error) {
        console.log(error)
    }
})

module.exports = router