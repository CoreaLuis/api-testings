/**
 * @swagger
 * /api/token:
 *   post:
 *     summary: Genera un token JWT
 *     description: Devuelve un token válido si las credenciales son correctas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Token generado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: admin
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       401:
 *         description: Credenciales inválidas
 */
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const controllerToken = require('../controllers/tokenController');
require('dotenv').config();

router.post('/', controllerToken.token);

module.exports = router;