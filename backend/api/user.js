const express = require('express');
const router = express.Router();
const { User } = require('../../database/models/index')

router.post('/', async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        if (user) {
            res.status(200).send(user)
        } else {
            res.status(401).send()
        }
    }
    catch (error) {
        res.status(404).send("Email or Password Incorrect")
    }
});

router.put('/', async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, newPassword, confirmNewPassword } = req.body
        const user = await User.findOne({
            where: {
                email: req.body.user.email,
            }
        })
        if (password === req.body.user.password) {
            if (newPassword === confirmNewPassword) {
                user.update({
                    firstName, lastName, email, password: newPassword
                })
            } else {
                throw new Error('new passwords do not match')
            }
        } else {
            res.status(401).send('incorrect password')
        }

    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router