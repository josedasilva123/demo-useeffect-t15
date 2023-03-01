import { useContext } from "react";
import { ITeamPokemon, PokemonTeamContext } from "../../../providers/PokemonTeamContext";

interface IPokemonTeamCardProps{
   pokemon: ITeamPokemon;
}

const PokemonTeamCard = ({ pokemon }: IPokemonTeamCardProps) => {
   const { removePokemonFromTeam } = useContext(PokemonTeamContext);

   return (
      <li>
         <h3>{pokemon.name}</h3>
         <button onClick={() => removePokemonFromTeam(pokemon.id)}>Remover do time</button>
      </li>
   );
};

export default PokemonTeamCard;
