/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Retrieve a hello
 *     responses:
 *       200:
 *         description: Bienvenida
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
 *                     example: Bienvenido
 */
app.get('api/hello', (req, res) => {
    res.send('¡Bienvenido a la API de Testing!');
})

/**
 * @swagger
 * /api/hello-luis:
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
app.get('/api/hello-luis', (req, res) => {
    res.send('¡Bienvenido a la API de Testing!');
});


/**
* @swagger
* /api/create-user:
*   post:
*     summary: Create a new user
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - name
*             properties:
*               name:
*                 type: string
*                 example: Jane Doe
*     responses:
*       201:
*         description: User created successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 id:
*                   type: integer
*                   example: 2
*                 name:
*                   type: string
*                   example: Jane Doe
*/
app.post('/api/create-user', (req, res) => {
    const { name } = req.body;
    res.status(201).json({ id: 2, name });
});
