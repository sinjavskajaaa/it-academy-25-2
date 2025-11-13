const axios = require('axios');
const validator = require('jsonschema');
const getBooksSchema = require('../schemas/get-books.v1.json');

describe('API test Books get list', function() {
    test('GET Books should return 200 when send valid request', async () => {
            const booksResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
            await expect(booksResponse.status).toEqual(200);
        });

    test('GET Books should return valid response body', async () => {
            const booksResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
            await expect(booksResponse).toBeValidSchema(getBooksSchema);
        });

    test('GET Books should return 404 when invalid URL', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books1233');
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(404);
    });

    test('GET Books should return 405 when invalid method', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books');
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(405);
    });

})