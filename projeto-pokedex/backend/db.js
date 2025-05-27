const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Tutu12.34',
  database: 'pokedex'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = connection;

