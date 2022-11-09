const errorHandler= (error,req,res,next)=>{
    console.log(error)
    if(error.name== 'SequelizeValidationError'){
        res.status(400).json({
            message: error.errors[0].message
        })
    }else if(error.name== 'TypeError'||error.name==  "JsonWebTokenError"){
        res.status(400).json({
            message: "Invalid Username/Password"
        })
    }else if(error.code==1){
        res.status(401).json({
            message: "Invalid Username/Password"
        })
    }else if(error.code==2){
        res.status(401).json({
            message: "Invalid Token"
        })
    }else{
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}
module.exports= errorHandler