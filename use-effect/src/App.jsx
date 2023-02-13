import { useContext } from "react";
import Loading from "./components/Loading";
import PokemonList from "./components/PokemonList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SearchForm from "./components/SearchForm";
import PokemonTeam from "./components/PokemonTeam";
import { PokemonListContext } from "./providers/PokemonListContext";
import { PokemonModalContext } from "./providers/PokemonModalContext";

function App() {
   const { loading, search, setSearch } = useContext(PokemonListContext);
   const { pokemonTeamModal, setPokemonTeamModal } = useContext(PokemonModalContext); 
  
   return (
      <div className="App">
         {loading ? (
            <Loading />
         ) : (
            <main>
               <button onClick={() => setPokemonTeamModal(!pokemonTeamModal)}>Abrir e fechar time</button>
               {pokemonTeamModal && <PokemonTeam />}
               <SearchForm />
               {search && <div>
                  <p>Resultados de busca para: {search}</p>
                  <button on onClick={() => setSearch("")}>Limpar a busca</button>               
               </div>}
               <PokemonList />
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
