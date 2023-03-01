import React, { useContext } from "react";
import { PokemonListContext } from "../../providers/PokemonListContext";
import PokemonCard from "./PokemonCard";
import { StyledPokemonList } from "./style";

const PokemonList = () => {
   // use o useContext para fazer a importação
   const { searchPokemonList } = useContext(PokemonListContext);

   return (
      <StyledPokemonList>
         {searchPokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
         ))}
      </StyledPokemonList>
   );
};

export default PokemonList;
