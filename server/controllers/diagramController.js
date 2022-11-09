const{DiagramData}= require('../models');
class Controller{
    
    static async fetchDiagramData(req,res,next){
        try {
            let data= await DiagramData.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error);
        }
    }

}

module.exports= Controller