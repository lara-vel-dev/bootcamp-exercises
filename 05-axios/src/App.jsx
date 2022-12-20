import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  async function getPokemon() {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await axios.get(url);
      toArray.push(response.data);
      setPokemonType(response.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();
    getPokemon();
  }

  function handleChange(e) {
    setPokemon(e.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <img
            src="src/img/pokeball.png"
            alt="Pokeball image"
            className="pokeLogo"
          />
          <h2>PokeSearch</h2>
        </div>
        <form onSubmit={handleSubmit} className="searchBar">
          <label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter pokemon..."
            />
          </label>
          <button type="submit" className="btn">Submit</button>
        </form>
      </header>
      {pokemonData.map((data) => {
        return (
          <Card
            key={data.id}
            img={data.sprites["front_default"]}
            name={data.name}
            height={data.height}
            type={pokemonType}
            weight={data.weight}
          />
        );
      })}
    </div>
  );
}

export default App;
