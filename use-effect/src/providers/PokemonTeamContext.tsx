import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { IDefaultProviderProps } from "./@types";
import { IPokemon } from "./PokemonListContext";

export interface ITeamPokemon extends IPokemon{
   id: string;
}

interface IPokemonTeamContext{
   pokemonTeam: ITeamPokemon[];
   addPokemonToTeam: (pokemon: IPokemon) => void;
   removePokemonFromTeam: (pokemonId: string) => void
}

export const PokemonTeamContext = createContext({} as IPokemonTeamContext);

export const PokemonTeamProvider = ({ children }: IDefaultProviderProps) => {
   const localPokemonTeam = localStorage.getItem("@POKETEAM");

   const [pokemonTeam, setPokemonTeam] = useState<ITeamPokemon[]>(localPokemonTeam ? JSON.parse(localPokemonTeam) : []);

   useEffect(() => {
      localStorage.setItem("@POKETEAM", JSON.stringify(pokemonTeam));
   }, [pokemonTeam]);

   const addPokemonToTeam = (pokemon: IPokemon) => {
      if (pokemonTeam.length < 6) {
         const newPokemon = { ...pokemon, id: uuidv4() };
         setPokemonTeam([...pokemonTeam, newPokemon]);
         toast.success("Pokémon adicionado com sucesso!");
      } else {
         toast.error("O time pode conter no máximo 6 pokémons");
      }
   };

   const removePokemonFromTeam = (pokemonId: string) => {
      const newPokemonTeam = pokemonTeam.filter((pokemon) => pokemon.id !== pokemonId);
      setPokemonTeam(newPokemonTeam);
   };

   return (
      <PokemonTeamContext.Provider value={{ pokemonTeam, addPokemonToTeam, removePokemonFromTeam }}>{children}</PokemonTeamContext.Provider>
   );
};
