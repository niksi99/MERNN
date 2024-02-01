const express = require('express');
const Router = express.Router();

const AuthenticationMiddleware = require('../middlewares/AuthenticationMIddleware')
const UserController = require('../controllers/UserController')

Router.get("/user-profile", 
    AuthenticationMiddleware.IsAuthenticated,
    UserController.MyProfile
)

module.exports = Router;    