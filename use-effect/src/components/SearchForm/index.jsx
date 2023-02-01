import React, { useState } from 'react'

const SearchForm = ({setSearch}) => {
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