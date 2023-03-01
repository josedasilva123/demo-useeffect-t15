import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IDefaultProviderProps } from "./@types";

export interface IPokemon{
   name: string;
   url: string;
}

interface IPokemonListContext{
   search: string;
   setSearch: React.Dispatch<React.SetStateAction<string>>;
   searchPokemonList: IPokemon[];
   loading: boolean;
}


export const PokemonListContext = createContext({} as IPokemonListContext);

export const PokemonListProvider = ({ children }: IDefaultProviderProps) => {
   const [loading, setLoading] = useState(false);
   const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
   const [search, setSearch] = useState(""); 

   const searchPokemonList = pokemonList.filter((pokemon) => {
      return search === "" ? true : pokemon.name.toLowerCase().includes(search.toLowerCase());
   });

   useEffect(() => {
      async function loadPokemonData() {
         try {
            setLoading(true);
            const response = await api.get("pokemon", {
               params: {
                  limit: 151,
                  offset: 0,
               },
            });
            setPokemonList(response.data.results);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      }
      loadPokemonData();
   }, []);

   return (
      <PokemonListContext.Provider
         value={{
            search,
            setSearch,
            searchPokemonList,
            loading,
         }}
      >
         {children}
      </PokemonListContext.Provider>
   );
};
