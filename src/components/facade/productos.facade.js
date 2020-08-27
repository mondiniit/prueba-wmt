const RunService = require('../service/productos.service');

class RunFacade{

    static async executeTransfer(req,res){
        let data
        try {
            let output = await this.getData(req,res);
            data = output;
        }catch (err) {
            data = 'error:'+err;
            return data;
        }
        return data
    }


    static async getData(req,res) {
        let array=[];
        let variable=-1;
        const entrada = req.query.title
        const id = parseInt(entrada);
        const patt = new RegExp(/^[^\*\+]/); 
        const patron = patt.test(entrada);   
        try {
            if(this.isPalindromo(entrada)) {
                variable = 1;
            }
            if(patron && entrada!=undefined ){
                if(isNaN(id)){
                    if(entrada.length>=3){
                        array = await RunService.executeGetMongoBrandDescription(req, res)                    
                        if(array.length>0){
                            array.map((value)=>{
                                value.half = this.price / 2;
                                value.palindromo = variable;
                            })
                        }
                    } else array.length = 0
                }else{
                    array = await RunService.executeGetMongoId(id);
                    if(array.length >= 0) {
                            array[0].half = array[0].price / 2;
                            array[0].palindromo = variable;
                    }
                }
            }
        }catch(e){
        }
    return array
    }


    static isPalindromo(data){
        let ss = true
        try {
            for (var i=0;i<data.length;i++){
                if(data[i]!=data[data.length-i-1]){
                    ss = false;
                }
            }
        }catch(e){
        }
    return ss
    }
}


module.exports = RunFacade;