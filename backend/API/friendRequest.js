const express = require('express');
const router = express.Router();
const { FriendRequest, User } = require('../../database/models/index')
const { authenticateToken } = require("../../utils");
const { Op } = require("sequelize");

router.get('/', authenticateToken, async (req, res, next) => {
    try {
        const requests = await FriendRequest.findAll({
            where: {
                //requestedId: req.userId.id
                [Op.or]: [
                    { senderId: req.userId.id },
                    { recieverId: req.userId.id }
                ]
            },
            include: [{
                model: User,
                as: "sender"
            }]
        })
        res.status(200).send(requests)
    }
    catch (e) {
        console.log(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        console.log('post at friends!!!!!!')
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router