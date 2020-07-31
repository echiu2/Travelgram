const express = require("express");
const router = express.Router();
const { Post, User } = require("../../database/models/index");

router.get("/", async (req, res, next) => {
  try {
    const post = await Post.findAll({
      include: [
        {
          model: User
        },
      ],
    });
    console.log('post', post)
    if (post) {
      res.status(200).send(post);
    } else {
      res.status(401).send();
    }
  } catch (error) {
    res.status(404).send("No Posts");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPost = await Post.create({ caption: req.body.caption });
    console.log("newPost", newPost);
    res.status(201).send(newPost);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
