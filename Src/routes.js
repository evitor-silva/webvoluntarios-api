const express = require('express');
const router = express.Router()
const AuthController = require("./Controllers/AuthController.js");

router.post('/auth/register', AuthController.register)
router.post('/auth/login', AuthController.login)

module.exports = router;