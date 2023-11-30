import React from 'react'
import { Link } from 'react-router-dom';
import '../component/Navbar.scss' 

const Navbar = () => {
  

  return (
   
    <ul>
        <li> <Link to="/petList">Home </Link> </li>
        <li> <Link to ="/addPet"> Add pet </Link> </li>
    </ul>
    
    
  )
}

export default Navbar