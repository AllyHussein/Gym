import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import './Navbar.css'
function Navbar() {
  return (
    <div className='p-4 d-flex align-items-center'>
    <Link className='text-decoration-none d-flex align-items-center' to='/'>
      <img src={Logo} alt='logo' style={{width : "48px" , height : "48px" , margin : "0 20px"  }}/>
      <span style={{ fontSize : "25px" , color : "black"}}>MyGym</span>
      </Link>
    </div>
        

  )
}

export default Navbar