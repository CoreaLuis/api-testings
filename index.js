//@developer Luis Corea
//@date 08/2025
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 3000;

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    myapi: '3.0.0',
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
  apis: ['./routes/*.js'], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sample route
app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

//Importacion de Routers
const helloRouter = require('./routes/homeRoute')

// Uso implementacion de Rutas
app.use('/api/hello-luis',helloRouter)


//Puerto Corriendo
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});