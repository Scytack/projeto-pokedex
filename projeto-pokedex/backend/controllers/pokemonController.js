const db = require('../db');

function getPokemons(req, res) {
  db.query('SELECT * FROM pokemons', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro no banco de dados' });
    } else {
      res.json(results);
    }
  });
}

module.exports = { getPokemons };

