import React from 'react'
import { PokemonListProvider } from './PokemonListContext'
import { PokemonModalProvider } from './PokemonModalContext'
import { PokemonTeamProvider } from './PokemonTeamContext'

const Providers = ({children}) => {
  return (
    <PokemonListProvider>
        <PokemonTeamProvider>
            <PokemonModalProvider>
                {children}
            </PokemonModalProvider>
        </PokemonTeamProvider>
    </PokemonListProvider>    
  )
}

export default Providers