import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <div >
        <header className='container'>
      
        <div className='logo'>
        <h2>upGrad eShop</h2>
        </div>
        <div className='btn'>
            <button className='btn-left'>Login</button>
            <button className='btn-right'>Signup</button>
        </div>
        </header>
      
    </div>
  )
}
