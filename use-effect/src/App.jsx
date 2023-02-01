import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import PokemonList from "./components/PokemonList";
import { api } from "./services/api";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from "react-toastify";

import SearchForm from "./components/SearchForm";

function App() {
   const localPokemonTeam = localStorage.getItem("@POKETEAM");
   const [loading, setLoading] = useState(false);
   const [pokemonList, setPokemonList] = useState([]);
   const [pokemonTeam, setPokemonTeam] = useState(localPokemonTeam ? JSON.parse(localPokemonTeam) : []);
   const [search, setSearch] = useState("");

   const searchPokemonList = pokemonList.filter((pokemon) => {
      return search === "" ? true : (pokemon.name.toLowerCase()).includes(search.toLowerCase()) 
   })
   /* se não tiver busca, tudo ser true, pokemonList = searchPokemonList, somente os pokemons buscados */
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

   useEffect(() => {
      localStorage.setItem("@POKETEAM", JSON.stringify(pokemonTeam));
   }, [pokemonTeam])

   const addPokemonToTeam = (pokemon) => {
      if(pokemonTeam.length < 6){
         const newPokemon = { ...pokemon, id: uuidv4() }
         setPokemonTeam([...pokemonTeam, newPokemon]);
         toast.success("Pokémon adicionado com sucesso!")
      } else {
         toast.error("O time pode conter no máximo 6 pokémons")
      }      
   }


   const removePokemonFromTeam = (pokemonId) => {
      const newPokemonTeam = pokemonTeam.filter(pokemon => pokemon.id !== pokemonId);
      setPokemonTeam(newPokemonTeam);
   }

   return (
      <div className="App">
         {loading ? (
            <Loading />
         ) : (
            <main>
               <ul>
                  
                  {pokemonTeam.map(pokemon => (
                     <li key={pokemon.id}>
                        <h3>{pokemon.name}</h3>
                        <button onClick={() => removePokemonFromTeam(pokemon.id)}>Remover do time</button>
                     </li>
                  ))}
                  
               </ul>
               <SearchForm setSearch={setSearch} />
               {search && <div>
                  <p>Resultados de busca para: {search}</p>
                  <button onClick={() => setSearch("")}>Limpar a busca</button>               
               </div>}
               <PokemonList searchPokemonList={searchPokemonList} addPokemonToTeam={addPokemonToTeam}/>
            </main>            
         )}
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </div>
   );
}

export default App;
