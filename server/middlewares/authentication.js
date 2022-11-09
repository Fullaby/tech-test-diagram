const { verifyToken } = require("../helpers/jwtHelpers")
const {User} =require('../models');
const authentication= async (req,res,next)=>{
    try {
        const {access_token}= req.headers
        const verify= verifyToken(access_token)
        const user= await User.findByPk(verify.id)
        if(!access_token)throw({code: 2})
        if(!user)throw({code: 2})
        req.user={
            id: user.id,
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports= authentication