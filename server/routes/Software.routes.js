const express = require('express');
const router = express.Router();
const { AddSoftware, GetSoftware, deleteSofware }  = require('../controllers/Software.Controller');
const verifyAccessToken = require('./../helpers/jwt.helper')

router.get('/get', GetSoftware);

router.post('/add', AddSoftware);

router.delete('/delete/:id', deleteSofware);

module.exports = router