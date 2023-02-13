import React, { useContext } from "react";
import { PokemonTeamContext } from "../../../providers/PokemonTeamContext";

const PokemonCard = ({pokemon}) => {
   const { addPokemonToTeam } = useContext(PokemonTeamContext);

   return (
      <li key={pokemon.name}>
         <h3>{pokemon.name}</h3>
         <button onClick={() => addPokemonToTeam(pokemon)}>Adicionar pokémon ao time</button>
      </li>
   );
};

export default PokemonCard;
