import { useState, useEffect } from "react";
import { api } from "./services/api";

function App() {
   const [loading, setLoading] = useState(false);
   const [pokemonList, setPokemonList] = useState([]);

   /* carregar dados de uma api */
   //MONTAGEM
   useEffect(() => {
      //FONTES DE DADOS
      //API: fonte de dado externa ao front-end
      //Formulário: eu quero o usuário como fonte de dados

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
      <div className="App">
         {loading ? (
            <h1>CARREGANDO...</h1>
         ) : (
            <ul>
               {pokemonList.map((pokemon) => (
                  <li key={pokemon.name}>
                     <h3>{pokemon.name}</h3>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default App;
