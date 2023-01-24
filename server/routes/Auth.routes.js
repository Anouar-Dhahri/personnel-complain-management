const express = require('express');
const router = express.Router();
const { Signup, Signin, UserData, Profile } = require('./../controllers/Auth.Controller');

router.post('/signup', Signup);

router.post('/signin', Signin);

router.post('/user', UserData);

router.put('/profile/:id', Profile);

module.exports = router