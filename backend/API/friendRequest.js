const express = require('express');
const router = express.Router();
const { FriendRequest, User } = require('../../database/models/index')
const { authenticateToken } = require("../../utils");
const { Op } = require("sequelize");

router.get('/', authenticateToken, async (req, res, next) => {
    try {
        const requests = await FriendRequest.findAll({
            where: {
                [Op.or]: [
                    { userId: req.userId.id },
                    { friendId: req.userId.id }
                ]
            },
            include: [{
                model: User
            }]
        })
        res.status(200).send(requests)
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router