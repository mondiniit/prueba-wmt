const controller = require('./productos.controllers');
const EjecutarFacade = require('../facade/productos.facade');

beforeEach(() => {});

describe('prueba1 Jest wallMart controlador', () => {

    /** @test {controller.executeTransfer} */
    it('retorna un mensaje de éxito 200', async () => {
        EjecutarFacade.executeTransfer = jest.fn().mockImplementation(() =>
           Promise.resolve(200),
        );
        const request={query:{title:''}}  
        let esto = await controller.executeTransfer(request,{});
        expect(esto).toBe(200);
    });
    
});
