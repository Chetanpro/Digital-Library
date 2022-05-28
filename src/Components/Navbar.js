import React from 'react'
import '../App.css';

export default function Navbar() {
  const show_hide_Nav= (e)=>{
    e.preventDefault();
    let nav=document.getElementById('nav');
    if(nav.style.display!=='none')
    {
      nav.style.display='none';
    }
    else
    {
      nav.style.display='inline';
    }
  };
  return (
    <nav className="navbar">
      <img src={require('../Images/menu_white.png')} alt="nav_icon" onClick={show_hide_Nav}/>
      <center>
       <ul id='nav'>
         <li className="item">Home</li>
         <li className="item">Category</li>
         <li className="item">About Us</li>
         <li className="item">Sign Up</li>
         <li className="item">Log In</li>
       </ul>
       </center>
    </nav>
  )
}
