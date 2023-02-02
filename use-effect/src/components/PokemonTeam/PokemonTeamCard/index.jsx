import React from "react";

const PokemonTeamCard = ({ pokemon, removePokemonFromTeam }) => {
   return (
      <li>
         <h3>{pokemon.name}</h3>
         <button onClick={() => removePokemonFromTeam(pokemon.id)}>Remover do time</button>
      </li>
   );
};

export default PokemonTeamCard;
