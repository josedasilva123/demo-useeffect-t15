import { IDefaultProviderProps } from './@types'
import { PokemonListProvider } from './PokemonListContext'
import { PokemonModalProvider } from './PokemonModalContext'
import { PokemonTeamProvider } from './PokemonTeamContext'

const Providers = ({children}: IDefaultProviderProps) => {
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