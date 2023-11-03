const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const auth = require('../controllers/auth');

router.post('/register', catchAsync(auth.register));

router.post('/login', auth.login);

router.get('/renewToken', catchAsync(auth.renewToken));

router.get('/logout', auth.logout);

module.exports = router;
