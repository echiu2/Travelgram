const express = require('express');
const router = express.Router();
const { Post } = require('../../database/models/index')

// router.get('/', async (req, res, next) => {
//     try {
//         const posts = await Post.findAll()
//         res.send(posts)
//     }
//     catch (e) {
//         console.log(e)
//     }
// })

module.exports = router