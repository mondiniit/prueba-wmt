const mongoose = require('mongoose');
const RunService = require('./productos.service');


jest.mock('mongoose');

beforeEach(() => {});

/** @test {RunService} */
describe('GetData Service', () => {
	/** @test {RunService.getDataByFilter} */
	it('retorna operación exitosa, al obtener data', async () => {
         const mockBusinessData = {
            find: jest.fn().mockResolvedValue(''),
			insertMany: jest.fn().mockResolvedValue(''),
			collection: {
				createIndex: jest.fn().mockResolvedValue(''),
			},
		};
         
		 mockBusinessData.sort = jest.fn().mockReturnValue({ mockBusinessData });
		 mockBusinessData.find = jest.fn().mockReturnValue(mockBusinessData);
		 mongoose.Schema = jest.fn();
		 mongoose.model.mockImplementation(() => mockBusinessData);
 		 mongoose.models = {
            "id": Number,
            "brand": String,
            "description": String,
            "image": String,
            "price": Number,
            "half": Number
                };
		// request.headers.funcionalidad = 'SVX003';
         const service = await RunService.executeGetMongoId(123);
		 expect(service.mockBusinessData).toBe(undefined);
	});
});
