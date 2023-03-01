import { useContext } from "react";
import { IPokemon } from "../../../providers/PokemonListContext";
import { PokemonTeamContext } from "../../../providers/PokemonTeamContext";

interface IPokemonCardProps{
   pokemon: IPokemon;
}

const PokemonCard = ({pokemon}: IPokemonCardProps) => {
   const { addPokemonToTeam } = useContext(PokemonTeamContext);

   return (
      <li key={pokemon.name}>
         <h3>{pokemon.name}</h3>
         <button onClick={() => addPokemonToTeam(pokemon)}>Adicionar pokémon ao time</button>
      </li>
   );
};

export default PokemonCard;
