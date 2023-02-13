import React, { useContext } from "react";
import { PokemonTeamContext } from "../../../providers/PokemonTeamContext";

const PokemonTeamCard = ({ pokemon }) => {
   const { removePokemonFromTeam } = useContext(PokemonTeamContext);

   return (
      <li>
         <h3>{pokemon.name}</h3>
         <button onClick={() => removePokemonFromTeam(pokemon.id)}>Remover do time</button>
      </li>
   );
};

export default PokemonTeamCard;
