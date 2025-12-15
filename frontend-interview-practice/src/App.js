import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://swapi.dev/api/planets/?page=${page}&search=${search}`
      );
      const data = await response.json();
      console.log(data);
      setPlanets(data.results);
    }
    fetchData();
  }, [page, search]);

  return (
    <div className="App">
      <h1>Frontend Interview Practice</h1>
      <p>Fetch and display data here</p>
      <input
        type="text"
        placeholder="Search planets..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {planets.map((planet, index) => {
          return (
            <div key={index} style={{border: '1px solid black', margin: '10px', padding: '10px', flex: '1 1 300px'}}>
              <h3>{planet.name}</h3>
              <p>Climate: {planet.climate}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Population: {planet.population}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default App;
