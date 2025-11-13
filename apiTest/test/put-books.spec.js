const axios = require('axios');
const validator = require('jsonschema');
const putBooksSchema = require("../schemas/put-books.v1.json");


describe('API test Books update', function() {
    test('PUT Books should return 200 when send valid request', async () => {
        const booksResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/104',
            {"Content-Type": "application/json; v=1.0"},
            {
                "id": 104,
                "title": "101 string",
                "description": "string",
                "pageCount": 1000,
                "excerpt": "string",
                "publishDate": "2025-11-13T18:36:28.654Z"
            }
    );
        await expect(booksResponse.status).toEqual(200);
    });

    test('PUT Books should return valid response body', async () => {
        const booksResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/105',
            {"Content-Type": "application/json; v=1.0"},
            {
                "id": 105,
                "title": "102 string",
                "description": "string",
                "pageCount": 101,
                "excerpt": "string",
                "publishDate": "2025-11-13T18:36:28.654Z"
            }
        );
        await expect(booksResponse).toBeValidSchema(putBooksSchema);
    });

    test('PUT Books should return 404 when invalid URL', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books1233',
                {"Content-Type": "application/json; v=1.0"},
                {
                    "id": 106,
                    "title": "101 string",
                    "description": "string",
                    "pageCount": 101,
                    "excerpt": "string",
                    "publishDate": "2025-11-12T18:36:28.654Z"
                }
            );
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(404);
    })


    test('PUT Books should return 400 without body', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/105',
                {"Content-Type": "application/json; v=1.0"});
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(400);
    }); //Тест падает: Server response Code = 400, Responses Code = 200, смотрит на Responses Code

})