const express = require('express');
const router = express.Router();
const { AddApplication, GetApplication, deleteApplication } = require('./../controllers/App.Controller')
const { upload } = require('../helpers/file.helper');
const verifyAccessToken = require('./../helpers/jwt.helper')

router.get('/get', GetApplication);

router.post('/add', upload.single('file'), AddApplication);

router.delete('/delete/:id', deleteApplication);

module.exports = router