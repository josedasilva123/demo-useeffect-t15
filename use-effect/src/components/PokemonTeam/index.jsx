import React, { useEffect, useRef } from "react";
import { useOutclick } from "../../hooks/useOutclick";
import PokemonTeamCard from "./PokemonTeamCard";
import { StyledPokemonTeam } from "./style";

const PokemonTeam = ({ pokemonTeam, removePokemonFromTeam, setPokemonTeamModal }) => {
   const ref = useOutclick(() => {
      setPokemonTeamModal(false); 
   });

   return (
      <StyledPokemonTeam ref={ref}>
         <button onClick={() => setPokemonTeamModal(false)}>Fechar</button>
         {pokemonTeam.map((pokemon) => (
            <PokemonTeamCard key={pokemon.id} pokemon={pokemon} removePokemonFromTeam={removePokemonFromTeam} />
         ))}
      </StyledPokemonTeam>
   );
};

export default PokemonTeam;
