const express = require('express');
const router = express.Router();
const { User } = require('../../database/models/index')
const { authenticateToken } = require("../../utils");

router.put('/', authenticateToken, async (req, res, next) => {
    try{
        const {password, newPassword, confirmNewPassword} = req.body
        // if (email) next()
        const curr_user = await User.findOne({
                        where: {
                            id: req.userId.id,
                        }
                    })
        if (password === curr_user.password) {
            if (newPassword === confirmNewPassword) {
                curr_user.update({password: newPassword})
                res.status(201)
            } else {
                throw new Error('new passwords do not match')
            }
        } else {
            res.status(401).send('incorrect password')
        }
    }
    catch (e){
        console.log(e)
    }
})

module.exports = router