import React, { useContext } from "react";
import { useOutclick } from "../../hooks/useOutclick";
import { PokemonModalContext } from "../../providers/PokemonModalContext";
import { PokemonTeamContext } from "../../providers/PokemonTeamContext";
import PokemonTeamCard from "./PokemonTeamCard";
import { StyledPokemonTeam } from "./style";

const PokemonTeam = () => {
   const { pokemonTeam } = useContext(PokemonTeamContext); //importação
   const { setPokemonTeamModal } = useContext(PokemonModalContext); //importação
   
   const ref = useOutclick(() => {
      setPokemonTeamModal(false); 
   });

   return (
      <StyledPokemonTeam ref={ref}>
         <button onClick={() => setPokemonTeamModal(false)}>Fechar</button>
         {pokemonTeam.map((pokemon) => (
            <PokemonTeamCard key={pokemon.id} pokemon={pokemon} />
         ))}
      </StyledPokemonTeam>
   );
};

export default PokemonTeam;
