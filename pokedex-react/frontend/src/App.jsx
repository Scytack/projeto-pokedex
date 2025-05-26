import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/pokemons')
      .then(res => setPokemons(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Pokédex com MySQL</h1>
      <div className="grid">
        {pokemons.map(poke => (
          <div key={poke.id} className="card">
            <h3>{poke.nome.toUpperCase()}</h3>
            <img src={poke.sprite} alt={poke.nome} />
            <p>{poke.tipo1}{poke.tipo2 ? ' / ' + poke.tipo2 : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
