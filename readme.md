## Config .env generate token
JWT_SECRET=mi_clave_secreta_123
JWT_EXPIRES_IN=1h

### añadir libreria jwebtoken
npm install express jsonwebtoken dotenv

1. Set Up Your Project
First, create a new Node.js project if you don't have one already.

mkdir swagger-demo
cd swagger-demo
npm init -y
npm install express swagger-ui-express swagger-jsdoc

2. Create Your Express Server
Create an index.js file (or app.js, depending on your preference):

touch index.js
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
      title: 'My API',
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

3. Document Your Routes
Create a routes folder and add a hello.js file to it (or any route file):

mkdir routes
cd routes
touch hello.js
Then, add the following code to hello.js:

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
app.get('/api/user', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});
4. Run Your Server
Start your server:

node index.js

5. Access Swagger UI
Open your browser and navigate to http://localhost:3000/api-docs. You should see the Swagger UI with your documented API.

