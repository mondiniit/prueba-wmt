 const Trabajos = require('../../model/modelo')

/*  ejecuta el bice servicio api externa*/

class EjecutarService{

    static async executeGetMongoBrandDescription(req,res){
        let array_1=[]
        let array_2=[]
        try{

            array_1 = await Trabajos.find({ brand: { $regex: req.query.title } }).maxTimeMS(1000)
            array_2 = await Trabajos.find({ description: { $regex: req.query.title } }).maxTimeMS(1000)                        

        }catch(error){
            
        }

        return array_1.concat(array_2);
    }

    
    static async executeGetMongoId(id){
        let array=[]
        try{
            array = await Trabajos.find({"id": id})    
        }catch(error){
        }
        return array;
    }

}
module.exports = EjecutarService;


