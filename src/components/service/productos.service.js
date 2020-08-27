 const Work = require('../../model/modelo');


class RunService{

    static async executeGetMongoBrandDescription(req,res){
        let array_1=[]
        let array_2=[]
        try{

            array_1 = await Work.find({ brand: { $regex: req.query.title } }).maxTimeMS(1000)
            array_2 = await Work.find({ description: { $regex: req.query.title } }).maxTimeMS(1000)                        

        }catch(error){
            
        }

        return array_1.concat(array_2);
    }

    static async executeGetMongoId(id){
        let array=[]
        try{
            array = await Work.find({"id": id})    
        }catch(error){
        }
        return array;
    }

}
module.exports = RunService;


