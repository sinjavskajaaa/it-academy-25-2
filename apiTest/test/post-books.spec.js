const axios = require('axios');
const validator = require('jsonschema');
const postBooksSchema = require("../schemas/post-books.v1.json");


describe('API test Books creation', function() {
    test('POST Books should return 200 when send valid request', async () => {
        const booksResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books',
            {"Content-Type": "application/json; v=1.0"},
            {
                "id": 1000,
                "title": "string",
                "description": "string",
                "pageCount": 10,
                "excerpt": "string",
                "publishDate": "2025-11-12T18:36:28.654Z"
            }
    );
        await expect(booksResponse.status).toEqual(200);
    });

    test('POST Books should return valid response body', async () => {
        const booksResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books',
            {"Content-Type": "application/json; v=1.0"},
            {
                "id": 1001,
                "title": "101 string",
                "description": "string",
                "pageCount": 101,
                "excerpt": "string",
                "publishDate": "2025-11-12T18:36:28.654Z"
            }
        );
        await expect(booksResponse).toBeValidSchema(postBooksSchema);
    });

    test('POST Books should return 404 when invalid URL', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books1233',
                {"Content-Type": "application/json; v=1.0"},
                {
                    "id": 1002,
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

    test('POST Books should return 405 when invalid method', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books',
                {"Content-Type": "application/json; v=1.0"},
                {
                    "id": 1003,
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
        await expect(booksResponse.status).toEqual(405);
    });


    test('POST Books should return 400 with invalid params', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books',
                {"Content-Type": "application/json; v=1.0"},
                {
                    "id": "string",
                    "title": 1004,
                    "description": 1000,
                    "pageCount": "string",
                    "excerpt": "string",
                    "publishDate": "test time"
                }
            );
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(400);
    }); //Тест падает: Server response Code = 400, Responses Code = 200, смотрит на Responses Code


    test('POST Books should return 400 when book exit', async () => {
        let booksResponse;
        try {
            booksResponse = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books',
                {"Content-Type": "application/json; v=1.0"},
                {
                    "id": 2,
                    "title": "Book 2",
                    "description": "Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\n",
                    "pageCount": 200,
                    "excerpt": "Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\nLorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\n",
                    "publishDate": "2025-11-10T18:34:32.225597+00:00"
                }
            );
        } catch(err) {
            booksResponse = err.response;
        }
        await expect(booksResponse.status).toEqual(400);
    });  //Тест падает: Server response Code = 400, Responses Code = 200, смотрит на Responses Code

})