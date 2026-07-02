const express = require("express");
const ServiceController = require("./Controllers/ServiceController");
const AuthController = require("./Controllers/AuthController");
const RankingController = require("./Controllers/RankingController");
const Avaliation = require("./Controllers/AvaliationController");
const AuthMiddleware = require('./Middleware/AuthMiddleware.js');

const privateRouter = express.Router();

privateRouter.use(AuthMiddleware)

privateRouter.post('/service', ServiceController.store);
privateRouter.get('/profile', AuthController.search);
privateRouter.get('/ranking', RankingController.index);
privateRouter.post('/avaliation', Avaliation.store);

module.exports = privateRouter;
