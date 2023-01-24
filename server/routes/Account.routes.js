const express = require('express');
const router = express.Router();
const { GetAccount, AddAccount, deleteAccount } = require('./../controllers/Account.Controller');
const verifyAccessToken = require('./../helpers/jwt.helper')

router.get('/get', GetAccount);

router.post('/add', AddAccount);

router.delete('/delete/:id', deleteAccount);

module.exports = router;