const express = require('express');
const router = express.Router();
const { CartData, CloseRequests, OpenRequests, ActionRequests, ApprovedRequests } = require('./../controllers/Data.Controller');
const verifyAccessToken = require('./../helpers/jwt.helper')

router.get('/cart/:id', CartData);
router.get('/request/open/:id', OpenRequests);
router.get('/request/close/:id', CloseRequests);
router.get('/request/action/:id', ActionRequests);
router.get('/request/approved/:id', ApprovedRequests);

module.exports = router;