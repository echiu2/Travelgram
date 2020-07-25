const express = require('express');
const router = express.Router();
const { Post } = require('../../database/models/index');

router.get('/', async(req, res, next) => {
    try {
        const post = await Post.findAll()
        console.log(post)
        if (post){
            res.status(200).send(post)
        } else {
            res.status(401).send()
        }
    }
    catch (error) {
        res.status(404).send("No Posts")
    }
});

module.exports = router
