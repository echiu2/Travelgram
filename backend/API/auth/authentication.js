const express = require("express");
const router = express.Router();
const { User } = require('../../../database/models/index')
const jwt = require('jsonwebtoken')

//require dotenv to use .env file
require('dotenv').config()

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    //const token = authHeader && authheader.split(' ')[1]
    console.log('token', token)
    if (token === null) return res.sendStatus(401)

    const userId = jwt.verify(token, process.env.JWT_KEY)
    req.userId = userId
    next()
}

router.post("/", authenticateToken, async (req, res, next) => {
    try {
        console.log('user', req.userId)
        const user = await User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        // console.log(process.env.JWT_KEY)
        if (user) {
            res.status(200).send(jwt.sign({ id: user.id }, process.env.JWT_KEY))
            // res.status(200).write(jwt.encode({id: user.id}, process.env.JWT_KEY))
            // res.status(200).write(user.id)
            // res.end()

        } else {
            res.status(401).send()
        }
    }
    catch (error) {
        console.log(error)
    }
})


module.exports = router