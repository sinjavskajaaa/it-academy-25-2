const axios = require('axios');
const validator = require('jsonschema');
const getBooksIdSchema = require('../schemas/get-booksId.v1.json');

describe('API test Books get current book', function() {
    test('GET BooksId should return 200 when send valid request', async () => {
            const booksResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/11');
            await expect(booksResponse.status).toEqual(200);
        });

    test('GET BooksId should return valid response body', async () => {
            const booksResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/11');
            await expect(booksResponse).toBeValidSchema(getBooksIdSchema);
        });

    test('GET BooksId should return 400 with invalid id', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/_3');
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(400);
    });

    test('GET BooksId should return 405 when invalid method', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books');
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(405);
    });



    test('GET BooksId should return 404 when id doesnt exit', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/1000');
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(404);
    });
})