import React from 'react'
import './search.css'
const Search = ({setSearchTitle}) => {
  return (
    <div>
       <input type="text" placeholder="Search.." onChange={(e)=>setSearchTitle(e.target.value)}  />
    </div>
  )
}

export default Search
