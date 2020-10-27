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
        const { firstName, lastName, email} = req.body
        // console.log(req.body)
        // console.log("check error", req.body)
        // if (password) next()
        // console.log("no password changed")
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        })
        console.log("email",email)
        if (user){
            user.update({firstName, lastName, email})
            res.status(201).send(user)
        }
        else{
            res.status(401).send('no user information available')
        }
    }
    catch (e) {
        console.log(e)
    }
})

// router.put('/', async (req, res, next) => {
//     try{
//         const {user, password, newPassword, confirmNewPassword, email} = req.body
//         if (email) next()
//         const curr_user = await User.findOne({
//                         where: {
//                             email: user.email,
//                         }
//                     })
//         if (password === req.body.user.password) {
//             if (newPassword === confirmNewPassword) {
//                 curr_user.update({password: newPassword})
//                 res.status(201)
//             } else {
//                 throw new Error('new passwords do not match')
//             }
//         } else {
//             res.status(401).send('incorrect password')
//         }
//     }
//     catch (e){
//         console.log(e)
//     }
// })

module.exports = router