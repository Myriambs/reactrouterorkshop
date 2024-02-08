import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
      <span className="logo">
        <span>
          FEM<span className="different-color">ovies</span>
        </span>
      </span>
      <ul>
        <li> <Link  to="/"  >Home</Link>   </li>
        <li><Link  to="/mylist"  >Movies</Link>  </li>
        <li><Link  to="/addmovie" >Add Movie</Link></li>
      </ul>
      <div className="user">
        <img src="https://cdn.mirchistatus.com/siteuploads/images/images8/3866/thumb/new-white-rose-dp-image-full-hd_xlrg.jpg?time=1555927332" />
      </div>
      <span className="dropdown-icon">
        <img src="https://png.pngtree.com/svg/20161212/952e94189c.svg" />
      </span>
    </nav>
  )
}

export default Navbar
