import React from 'react'
import './Header.css';

const Header = () => {
  return (
   <section className='h-wrapper'>
    
        <div className='flexCenter paddings innerWidth h-container'>  
        <img src="/logo.png" alt="logo" width={100} />

       

 <div className="flexCenter h-menu">
   
    <a href="">Services</a>
    <a href="">Carees</a>
    <a href="">Blog</a>
    <a href="">About</a>
    <button className='button'>
    <a href="">Contact</a> 
    </button>
    </div>
    </div>
       
   </section>
  )
}

export default Header;
