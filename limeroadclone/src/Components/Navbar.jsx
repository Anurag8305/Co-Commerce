import React from 'react'
import "./NavbarStyles.css"
const Navbar = () => {
  return (
   <div className='nav'>
    <ul className='con'>
    <li>
      <img className='logo' 
      src='https://th.bing.com/th/id/OIP.tS6ZyitKvx8DC92dNwCNvgHaBt?pid=ImgDet&rs=1' alt='logo'/>
    </li>
      <li>women</li>
      <li>men</li>
      <li>kids</li>
      <li>home</li>
      <li>offers</li>

    </ul>
   </div>
  
  )
}

export default Navbar