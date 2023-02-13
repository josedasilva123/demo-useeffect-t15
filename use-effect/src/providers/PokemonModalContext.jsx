import { createContext, useState } from "react";

export const PokemonModalContext = createContext({});

export const PokemonModalProvider = ({ children }) => {
    const [pokemonTeamModal, setPokemonTeamModal] = useState(false);

    return(
        <PokemonModalContext.Provider value={{pokemonTeamModal, setPokemonTeamModal}}>
            {children}
        </PokemonModalContext.Provider>
    )
}