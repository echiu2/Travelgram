const express = require('express');
const router = express.Router();
const { Post } = require('../../database/models/index');

router.get('/', async (req, res, next) => {
    try {
        const post = await Post.findAll()
        if (post) {
            res.status(200).send(post)
        } else {
            res.status(401).send()
        }
    }
    catch (error) {
        res.status(404).send("No Posts")
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newPost = await Post.create({ caption: req.body.caption })
        res.status(201).send(newPost)
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router
