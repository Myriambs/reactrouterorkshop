import React, { useState } from 'react'
import './App.css'
import Navbar from './Composants/Navbar/Navbar'
import MainMovie from './Composants/Main/MainMovie'
import MovieList from './Composants/MovieList/MovieList'
import FormAddMovie from './Composants/FormAddMovie'
import { movies } from './DataMovie'
// import Search from './Composants/Search'
import {Routes,Route} from 'react-router-dom'
import Trailer from './Composants/Trailer'


const App = () => {

  const [Mymovies,setMyMovies]=useState(movies)

const handelRemove=(id)=>{
  setMyMovies( 
    Mymovies.filter((el)=> el.id !== id)
    )

}

const handelSeen=(id)=>{
setMyMovies(
  Mymovies.map((el)=> el.id === id ? {...el, seen : !el.seen} :el    )
  )
}

const handelAdd=(newMovie)=>{
setMyMovies([...Mymovies,newMovie])
}

const [searchTitle,setSearchTitle]=useState()




  return (
    <>
   <Navbar/>
<Routes>
<Route path='/' element={<section className="container">
  
   <MainMovie/>
    <h2>Trending now</h2>
  </section>} />


<Route path='/mylist' element={<MovieList   setSearchTitle={setSearchTitle} searchTitle={searchTitle}  Mymovies={Mymovies}  handelSeen={handelSeen}    handelRemove={handelRemove} />
} />


<Route path="/addmovie" element={<FormAddMovie  handelAdd={handelAdd} />} />

<Route path='/trailer/:id' element={<Trailer/>} />
</Routes>




</>

  )
}

export default App
