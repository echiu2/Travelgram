const express = require('express');
const router = express.Router();
const { FriendRequest, User } = require('../../database/models/index')
const { authenticateToken } = require("../../utils");
const { Op } = require("sequelize");

router.get('/sent', authenticateToken, async (req, res, next) => {
    try {
        const requests = await FriendRequest.findAll({
            where: {
                [Op.or]: [
                    { userId: req.userId.id },
                    { friendRequestId: req.userId.id }
                ]
            },
            include: [{
                model: User,
                where: {
                    id: {
                        [Op.not]: req.userId.id
                    }
                }
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