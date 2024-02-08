import React from 'react'
import './movie.css'
import { useNavigate } from 'react-router-dom'
const MovieCard = ({el,handelRemove,handelSeen}) => {

  const navigate = useNavigate()
  return (
  
    <div className="main">
      <img
        className="tokenImage"
        src={el.PosterURL}
        alt="NFT"
      />
      <h2>Kibertopiks #4269</h2>
      <p className="description">
       {el.Title}
      </p>
      <div className="tokenInfo">
        <div className="price">
          <ins>◘</ins>
          <p>{el.Description}</p>
        </div>
        <div className="duration">
          <ins>◷</ins>
          <p>{el.Rate}</p>
        </div>
      </div>
      <hr />
     <div>
<button  type='button'  onClick={()=>handelRemove(el.id)} > remove </button>
<button  onClick={()=>navigate(`/trailer/${el.id}`)}  >Trailer</button>
<button  type='button' onClick={()=>handelSeen(el.id)}  > { el.seen ? "c bon ritou":"mezelit"} </button>
     </div>
    </div>
  
  )
}

export default MovieCard
