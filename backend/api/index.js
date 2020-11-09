const express = require('express');
const router = express.Router();
router.use(express.json());

//add additional routes here
router.use('/profile', require('./profile'));
router.use('/user', require('./user'));
router.use('/friendRequests', require('./friendRequest'));
router.use('/updateSecurity', require('./updateSecurity'));
router.use('/updateProfile', require('./user'));
router.use('/post', require("./post"));
router.use('/signup', require("./signup"));
router.use('/auth', require('./auth/authentication'))

module.exports = router