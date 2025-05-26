const express = require('express');
const router = express.Router();
const { getPokemons } = require('../controllers/pokemonController');

router.get('/', getPokemons);

module.exports = router;

