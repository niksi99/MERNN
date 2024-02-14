const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/User')

module.exports.IsAuthenticated = async (req, res, next) => {

    const { token } =  req.cookies 
    console.log(req)
    if(!token) {
        res.json({
            success: false,
            error: "Invalid request. User is not logged in!"
        })
    }

    try {
        const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        if(!decodedToken) {
            res.json({
                success: false,
                error: "decodedToken not available"
            })
        }
        const user = await User.findById(decodedToken.id)
        req.user = user;
        next();

        if(!req.user) {
            res.json({
                succes: false,
                message: "Invalid credentials. User with this token/id not found in DB"
            })
        }
    } catch (error) {
        return next(error)
    }
}