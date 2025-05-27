const express = require('express');
const cors = require('cors');
const app = express();
const pokemonRoutes = require('./routes/pokemons');

app.use(cors());
app.use(express.json());

app.use('/api/pokemons', pokemonRoutes);

app.listen(3001, () => {
  console.log('Servidor backend rodando em http://localhost:3001');
});
 
