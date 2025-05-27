import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/pokemons")
      .then(res => res.json())
      .then(data => setPokemons(data));
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };
const tipoCores = {
  Normal: "#A8A77A",
  Fogo: "#EE8130",
  Água: "#6390F0",
  Elétrico: "#F7D02C",
  Grama: "#7AC74C",
  Gelo: "#96D9D6",
  Lutador: "#C22E28",
  Venenoso: "#A33EA1",
  Terra: "#E2BF65",
  Voador: "#A98FF3",
  Psíquico: "#F95587",
  Inseto: "#A6B91A",
  Rocha: "#B6A136",
  Fantasma: "#735797",
  Dragão: "#6F35FC",
  Sombrio: "#705746",
  Aço: "#B7B7CE",
  Fada: "#D685AD"
};

  return (
    <div className="container">
      <h1></h1>
      <div className="grid">
        {pokemons.map(p => (
          <div key={p.id} className="card-container">
            <div className="card" onClick={() => toggleExpand(p.id)}>
              <img src={p.sprite} alt={p.nome} />
              <p></p>
            </div>
            
            <div className="tipos">
            {p.tipo1 && (
            <span className="tipo" style={{ backgroundColor: tipoCores[p.tipo1] || "#ccc" }}>
            {p.tipo1}
            </span>
            )}
            {p.tipo2 && (
            <span className="tipo" style={{ backgroundColor: tipoCores[p.tipo2] || "#ccc" }}>
            {p.tipo2}
            </span>
            )}
</div>

            <div className={`details ${expandedId === p.id ? "show" : ""}`}>
              <p><strong>ID:</strong> #{p.id.toString().padStart(3, "0")}</p>
              <p></p>
              {p.tipo2 && <p></p>}
              {p.descricao && (
                <p className="descricao"><strong>Descrição:</strong> {p.descricao}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
