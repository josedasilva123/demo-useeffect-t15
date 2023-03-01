import { createContext, useState } from "react";
import { IDefaultProviderProps } from "./@types";

interface IPokemonModalContext{
    pokemonTeamModal: boolean;
    setPokemonTeamModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonModalContext = createContext({} as IPokemonModalContext);

export const PokemonModalProvider = ({ children }: IDefaultProviderProps) => {
    const [pokemonTeamModal, setPokemonTeamModal] = useState(false);

    return(
        <PokemonModalContext.Provider value={{pokemonTeamModal, setPokemonTeamModal}}>
            {children}
        </PokemonModalContext.Provider>
    )
}