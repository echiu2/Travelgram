const express = require('express');
const router = express.Router();
const { User } = require('../../database/models/index')

router.post('/', async (req, res, next) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        });
        console.log('user', user)
        res.status(201).send(user)
    }
    catch (error) {
        res.status(404).send("Unavailable information")
    }
});

module.exports = router