const User = require('../models/User');

module.exports.MyProfile = async (req, res) => {
    
    console.log(req)
    //const id = req.user.id

    try {
        const userProfile = await User.findById(req.user.id)
        if(!userProfile) {
            res.json({
                success: false,
                message: "Непостојећи корисник"
            })
        }  
        
        res.json({
            success: true,
            userProfile 
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }




    
    
}