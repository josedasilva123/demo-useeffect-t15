import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const PokemonTeamContext = createContext({});

export const PokemonTeamProvider = ({ children }) => {
   const localPokemonTeam = localStorage.getItem("@POKETEAM");

   const [pokemonTeam, setPokemonTeam] = useState(localPokemonTeam ? JSON.parse(localPokemonTeam) : []);

   useEffect(() => {
      localStorage.setItem("@POKETEAM", JSON.stringify(pokemonTeam));
   }, [pokemonTeam]);

   const addPokemonToTeam = (pokemon) => {
      if (pokemonTeam.length < 6) {
         const newPokemon = { ...pokemon, id: uuidv4() };
         setPokemonTeam([...pokemonTeam, newPokemon]);
         toast.success("Pokémon adicionado com sucesso!");
      } else {
         toast.error("O time pode conter no máximo 6 pokémons");
      }
   };

   const removePokemonFromTeam = (pokemonId) => {
      const newPokemonTeam = pokemonTeam.filter((pokemon) => pokemon.id !== pokemonId);
      setPokemonTeam(newPokemonTeam);
   };

   //value - exportador
   return (
      <PokemonTeamContext.Provider value={{ pokemonTeam, addPokemonToTeam, removePokemonFromTeam }}>{children}</PokemonTeamContext.Provider>
   );
};
