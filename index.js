//@developer Luis Corea
//@date 08/2025
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Para leer el body en formato JSON

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    // myapi: '3.0.0',
    openapi: '3.0.0', // ✅ Correcto para OpenAPI 3
    info: {
      title: 'Backend API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
//   apis: ['./routes/*.js'], // files containing annotations as above
apis: ['./routes/**/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sample route
app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

//Importacion de Routers
const helloRouter = require('./routes/homeRoute')
const tokenRouter = require('./routes/tokenRoute')

// Uso implementacion de Rutas
app.use('/api/hello-luis',helloRouter)
app.use('/api/token',tokenRouter)

//Puerto Corriendo
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});