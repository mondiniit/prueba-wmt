const controller = require('./productos.controllers');
const RunFacade = require('../facade/productos.facade');

beforeEach(() => {});

describe('prueba1', () => {

    /** @test {controller.executeTransfer} */
    it('retorna un mensaje de éxito 200', async () => {
        RunFacade.executeTransfer = jest.fn().mockImplementation(() =>
           Promise.resolve(200),
        );
        const request={query:{title:''}}  
        let esto = await controller.executeTransfer(request,{});
        expect(esto).toBe(200);
    });
    
});
