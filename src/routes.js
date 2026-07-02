const express = require('express');
const router = express.Router()
const AuthController = require("./Controllers/AuthController.js");
const ServiceController = require("./Controllers/ServiceController");
const Avaliation = require("./Controllers/AvaliationController.js")
const CategoryController = require('./Controllers/CategoryController.js');
const privateRoutes = require('./privateRoutes')

router.post('/auth/register', AuthController.register)
router.post('/auth/login', AuthController.login)
router.get('/service', ServiceController.index);
router.get('/category', CategoryController.index)
router.get('/avaliation', Avaliation.index)

router.use(privateRoutes);

module.exports = router;