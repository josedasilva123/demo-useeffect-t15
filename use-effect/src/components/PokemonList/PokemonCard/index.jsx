import React from "react";

const PokemonCard = ({pokemon, addPokemonToTeam}) => {
   return (
      <li key={pokemon.name}>
         <h3>{pokemon.name}</h3>
         <button onClick={() => addPokemonToTeam(pokemon)}>Adicionar pokémon ao time</button>
      </li>
   );
};

export default PokemonCard;
