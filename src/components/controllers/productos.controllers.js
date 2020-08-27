const RunFacade = require('../facade/productos.facade')


class RunController{
    static async executeTransfer(req,res){
        const output = await RunFacade.executeTransfer(req,res)
        return output
    }
}

module.exports = RunController;
