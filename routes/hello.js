/**
 * @swagger
 * /api/hello-luis:
 *   get:
 *     summary: Mensaje de bienvenida
 *     description: Retorna un mensaje de bienvenida a la API.
 *     responses:
 *       200:
 *         description: Mensaje devuelto exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "¡Bienvenido a la API de Testing!"
 */
app.get('/api/hello-luis', (req, res) => {
    res.send('¡Bienvenido a la API de Testing!');
});
