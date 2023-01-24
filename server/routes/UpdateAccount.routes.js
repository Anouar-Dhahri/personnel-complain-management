const express = require('express');
const router = express.Router();
const { GetUpdateAccount, AddUpdateAccount, deleteUpdateAccount } = require('./../controllers/UpdateAccount.Controller');
const verifyAccessToken = require('./../helpers/jwt.helper')

router.get('/get', GetUpdateAccount);

router.post('/add', AddUpdateAccount);

router.delete('/delete/:id', deleteUpdateAccount);

module.exports = router;