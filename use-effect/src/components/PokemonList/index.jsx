import React from "react";
import PokemonCard from "./PokemonCard";
import { StyledPokemonList } from "./style";

const PokemonList = ({ addPokemonToTeam, searchPokemonList }) => {
   return (
      <StyledPokemonList>
         {searchPokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} addPokemonToTeam={addPokemonToTeam} />
         ))}
      </StyledPokemonList>
   );
};

export default PokemonList;
