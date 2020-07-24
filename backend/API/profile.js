const express = require('express');
const router = express.Router();
const { Post } = require('../../database/models/index')

router.get('/', async (req, res, next) => {
    const posts = await Post.findAll()
    res.send(posts)
})

module.exports = router