import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { movies } from '../DataMovie'
import "./trailer.css"
const Trailer = () => {
  const {id}=useParams()
 let filmtrouvé = movies.find((el)=>el.id === Number(id))

 console.log('dfghjk=>',filmtrouvé)
  return (
    <div>
<article className="card">
  <div className="card__image" />
  <img src={filmtrouvé.PosterURL} />
  <div className="card__player">
    <div id="player" />
  </div>
  <div className="card__info">
    <h2 className="title"> {filmtrouvé.Title}  </h2>
    <p className="genre">{filmtrouvé.Description}</p>
    <div className="desc">
      <div className="rating">
        <p className="meta">Animation/Comedy ● 1h 32m</p>
        <div className="stars">
          <i className="material-icons">star_rate</i>
          <i className="material-icons">star_rate</i>
          <i className="material-icons">star_rate</i>
          <i className="material-icons">star_rate</i>
          <i className="material-icons">star_rate</i>
        </div>
      </div>
      <p>
<Link  to='/'  >     Retourn Home 
</Link>      </p>
    </div>
   
  </div>
</article>
    </div>
  )
}

export default Trailer
