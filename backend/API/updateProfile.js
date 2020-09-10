const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log("updateProfile")
})

module.exports = router