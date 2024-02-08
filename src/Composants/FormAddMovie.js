import React, { useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom'
const FormAddMovie = ({handelAdd}) => {
const navigate = useNavigate()
  const[Title,setTitle]=useState()
  const[Description,setDescription]=useState()
  const [PosterURL,setPosterURL]=useState()
  const[Rate,setRate]=useState()
  return (
    <div className="signup-container" id="signup-container">
  <h2>Sign Up</h2>
  <form className="signup-form">
    <label htmlFor="username">Title</label>
    <input type="text" id="username" name="username"  onChange={(e)=>setTitle(e.target.value)}   />
   
   
    <label htmlFor="password">Description</label>
    <input  id="password" name="password"  onChange={(e)=>setDescription(e.target.value)}    />
   
    <label htmlFor="PosterURL">PosterURL</label>
    <input  id="PosterURL" name="PosterURL"  onChange={(e)=>setPosterURL(e.target.value)}   />
   
    <label htmlFor="rate">Rate</label>
    <input  id="Rate" name="PosterURL"  onChange={(e)=>setRate(e.target.value)}  />
    <button type="button" onClick={()=>handelAdd({Title,Description,PosterURL,Rate}),navigate('/mylist</form>')}   >Add el Movie</button>
  </form>
 
</div>
  )
}

export default FormAddMovie
