import React from 'react'
import MovieCard from './MovieCard'
import Search from '../Search'

const MovieList = ({Mymovies,handelRemove,handelSeen,searchTitle,setSearchTitle}) => {
  return (
    <div className="nft">

<Search  setSearchTitle={setSearchTitle}  />
      {
      Mymovies
      .map((el)=>  <MovieCard  el={el} handelSeen={handelSeen}   handelRemove={handelRemove}   />)
      }
     
     
    </div>
  )
}

export default MovieList
