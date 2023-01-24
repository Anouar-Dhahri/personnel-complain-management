const express = require('express');
const router = express.Router();
const { AddHardware, GetHardware, deleteHardware }  = require('../controllers/Hardware.Controller');
const verifyAccessToken = require('./../helpers/jwt.helper')

router.get('/get', GetHardware);

router.post('/add', AddHardware);

router.delete('/delete/:id', deleteHardware );

module.exports = router