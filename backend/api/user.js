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

module.exports = router