const axios = require('axios');


describe('API test Books delete', function() {
    test('DELETE Books should return 200 when send valid request', async () => {
        const booksResponse = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/101');
        await expect(booksResponse.status).toEqual(200);
    });

    test('DELETE Books should return 404 when book is deleted already', async () => {
        const booksResponse = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/101');
        await expect(booksResponse.status).toEqual(404);
    }); //Тест падает: Server response Code = 400, Responses Code = 200, не видит, что в предыдущем тесте объект уже был удален

    test('DELETE Books should return 400 with invalid Id', async () => {
        const booksResponse = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/1014575');
        await expect(booksResponse.status).toEqual(400);
    }); //Тест падает: Server response Code = 400, Responses Code = 200, не видит, что объект не существует в системе

})
