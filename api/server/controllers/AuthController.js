const User = require('../models/User')

module.exports.Register = async(req, res) => {

    const checkUser = await User.findOne({email: req.body.email})
    if (checkUser) {
        res.json({
            success: false,
            error: 'User with this credentials already exists'
        })
    }

    const newUser = await User.create(req.body)
    try {
        res.json({
            success: true,
            newUser
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
}

module.exports.Login = async (req, res) => {
    
    const { email, password } = req.body;

    try {
        if(email == "") {
            res.json({
                success: false,
                error: "Please enter EMAIL"
            })
        }
    
        if(password == "") {
            res.json({
                success: false,
                error: "Please enter PASSWORD"
            })
        }
    
        const existingUser = await User.findOne({ email })
        if(!existingUser) {
            res.json({
                success: false,
                error: "Invalid credentials. User does not exist"
            })
        }
    
        const passwordsMatched = await existingUser.ComparePasswords(password)
        if(!passwordsMatched) {
            res.json({
                success: false,
                error: "Invalid password. Enter correct one"
            })
        }
    
        const token = existingUser.GenerateJWT();
       
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 900 * 1000
        }).json({
            success: true,
            token
        })
    }
    catch(error) {
        res.json({
            error: error.message
        })
    }
}
