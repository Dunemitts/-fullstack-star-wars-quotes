const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endPointsFiles = ['./routes/api/v1/index.js']

const doc = {
    info: {
        version: '1.0.0',
        title: 'Star Wars Quotes',
        description: 'Documentation for this Star Wars Quotes API'
    },
    host: 'localhost.3000',
    basePath: '/api/v1',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json']
}

swaggerAutogen(outputFile, endPointsFiles, doc)