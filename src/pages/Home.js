import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import PokeButton from '../components/PokeButton';

function Home() {
  const [jsonData, setjsonData] = useState({});

  const fetchJSON = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then((response) => {
        return response.json();
      })
      .then((pokemonArray) => {
        // console.log(pokemonArray.results);
        setjsonData(pokemonArray.results);
      });
  };

  useEffect(() => {
    fetchJSON();
  }, []);

  return (
    <div className="home">
      <Logo />
      {jsonData.length > 0 ? (
        jsonData.map((pokemon) => (
          <Link key={pokemon.name} to={`/${pokemon.name}`} className="btn-dex">
            <PokeButton data={pokemon.name} />
          </Link>
        ))
      ) : (
        <h1>There are no pokemon to be shown</h1>
      )}
    </div>
  );
}

export default Home;
