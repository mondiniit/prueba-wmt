const RunService = require('../service/productos.service');
const RunFacade = require('../facade/productos.facade');

beforeEach(() => {});

describe('TestTwo Jest wallMart facade 201', () => {

    /** @test {EjecutarFacade.executeTransfer} */
    it('success 201', async () => {
        RunService.executeGetMongoBrandDescription = jest.fn().mockImplementation(() =>
           Promise.resolve(201),
        );
        RunService.executeGetMongoId = jest.fn().mockImplementation(() =>
           Promise.resolve(201),
        );
         const request={query:{title:'123'}}
         const that = await RunFacade.executeTransfer(request,{});
        // expect(esto).toBe(201);
    });
    
});
