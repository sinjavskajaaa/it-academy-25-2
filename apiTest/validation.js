const validator = require('jsonschema');

expect.extend({
    toBeValidSchema(response, schema) {
        const schemaValidationResult = validator.validate(response.data, schema);
        let errorMassage;
        if (schemaValidationResult.errors.length) {
            errorMassage = schemaValidationResult.errors.reduce(function (accumulator, currentValue) {
                return `${accumulator} ${currentValue.stack}`;
            },'');
        }
        return schemaValidationResult.valid
            ? {
                pass: true,
                massage: () => 'The schemas are matched',
            }
            : {
                pass: false,
                massage: () => `JSON schema validation error: ${errorMassage}`,
                Url: `${response.config.url}`,
                Params: `${JSON.stringify(response.config.params)}"\n`,
            };
},
})