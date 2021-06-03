import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Logo from '../components/Logo';
import PokeButton from '../components/PokeButton';

function About() {
  let { name } = useParams();

  const [jsonData, setjsonData] = useState({});
  const [imageURL, setimageURL] = useState({});

  useEffect(() => {
    const fetchJSON = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((pokemonInformation) => {
          // console.log(pokemonInformation);
          // console.log(pokemonInformation.sprites.front_default);
          setjsonData(pokemonInformation);
          setimageURL(pokemonInformation.sprites.front_default);
        });
    };
    fetchJSON();
  }, []);

  return (
    <div className="home">
      <Logo />
      {name && jsonData.id ? (
        <>
          <PokeButton
            data={`Pokemon Name: ${
              name.charAt(0).toUpperCase() + name.slice(1)
            }`}
          />

          <PokeButton data={`Height of Pokemon: ${jsonData.height / 10}m`} />

          <PokeButton data={`Weight of Pokemon: ${jsonData.weight / 10}kg`} />

          <Image
            className="image"
            fluid
            src={
              imageURL
                ? imageURL
                : 'https://www.heraldscotland.com/resources/images/5283517/'
            }
          />
          <div>List of Abilities:</div>
          {jsonData.abilities.map((item) => (
            <PokeButton data={item.ability.name} key={item.ability.name} />
          ))}
          <br />
          <div>List of Potential Moves:</div>
          {jsonData.moves.map((item) => (
            <PokeButton data={item.move.name} key={item.move.name} />
          ))}
        </>
      ) : (
        <p> contents of the pokemon are loading</p>
      )}
    </div>
  );
}

export default About;
