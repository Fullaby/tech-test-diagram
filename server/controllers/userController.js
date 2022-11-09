const {User}= require('../models');
const {comparePass}= require('../helpers/bcryptHelper');
const { createToken } = require('../helpers/jwtHelpers');
class Controller{

    static async login(req,res,next){
        try {
            const{username,password}=req.body
            let dataUser= await User.findOne({where:{username:username}})
            let checkPassword= comparePass(password,dataUser.password)
            if(!username || !password){throw({code: 1})}
            if(!checkPassword){throw({code: 1})}
            if(!dataUser){throw({code: 1})}
            const payload={id:dataUser.id}
            let token= createToken(payload)
            res.status(200).json({access_token: token, username: dataUser.username})
        } catch (error) {
            next(error);
        }
    }

    static async register(req,res,next){
        try {
            const{username,password}= req.body
            await User.create({username,password})
            res.status(201).json("Success Register New User")
        } catch (error) {
           next(error);
        }
    }
}

module.exports= Controller