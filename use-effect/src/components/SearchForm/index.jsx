import React, { useContext, useState } from 'react'
import { PokemonListContext } from '../../providers/PokemonListContext';

const SearchForm = () => {
  const { setSearch } = useContext(PokemonListContext);
  const [searchValue, setSearchValue] = useState("");  

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  } 

  return (
    <form onSubmit={submit}>
        <input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        <button type="submit">Pesquisa</button>
    </form>
  )
}

export default SearchForm