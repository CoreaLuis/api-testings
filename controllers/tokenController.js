const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// Cargar usuarios del JSON
const usersPath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

exports.token = (req, res) => {
    const { username, password } = req.body;

    // Buscar usuario en el JSON
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid Credentials' });
    }

    // Datos dentro del token
    const payload = {
        user: user.username,
        role: user.role
    };

    // Generar token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    });

    console.log(payload, token);
    res.json({ payload, token });
};

// Version Estable
// const jwt = require('jsonwebtoken');

// exports.token = (req, res) => {
//     const { username, password } = req.body;

//     // Validación básica (aquí pondrías tu lógica real)
//     if (username !== 'admin' || password !== '1234') {
//         return res.status(401).json({ message: 'Invalid Credentials' });
//     }

//     // Datos dentro del token
//     const payload = {
//         user: username,
//         role: 'admin'
//     };
//     // Generar token
//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN || '1h'
//     });
//     console.log(payload,token);
//     res.json({ payload, token});
// };