const express = require('express');
const router = express.Router()
const AuthController = require("./Controllers/AuthController.js");
const Avaliation = require("./Controllers/AvaliationController.js")
const ServiceController = require('./Controllers/ServiceController.js');
const AuthMiddleware = require('./Middleware/AuthMiddleware.js');

router.post('/auth/register', AuthController.register)
router.post('/auth/login', AuthController.login)

router.get('/service', ServiceController.index)
router.post('/service', AuthMiddleware, ServiceController.store)

router.get('/avaliation', Avaliation.index)
router.post('/avaliation', AuthMiddleware, Avaliation.store)

module.exports = router;