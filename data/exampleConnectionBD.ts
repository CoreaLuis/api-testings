// En este archivo creamos la cadena de conexion con la base de datos
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = pool;

//Esta es la conexion para base de datos SQLite
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// const dbPath = path.resolve(__dirname, 'database.db');

// // Abre o crea la base de datos
// const db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//     console.error('Error al conectar con SQLite:', err);
//   } else {
//     console.log('Conectado a la base de datos SQLite');
//   }
// });

// module.exports = db;