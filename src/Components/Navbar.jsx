import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const items = useSelector((state) => state.cart.initstate)

  return (
    <div className='App-nav'>
      <span>REDUX E-STORE</span>
      <div style={{ display: 'flex', width: '300px', justifyContent: 'space-evenly', marginLeft: 'auto' }}>
        <Link className='logo' to='/home' preventScrollReset={true}>Home</Link>
        <Link className='cartlink' to='/cart' preventScrollReset={true}>Cart link</Link>
        <Link className='cartlink' to='/feedback' preventScrollReset={true}>Feedback</Link>
        <span className='cartcount'>Cart items : {items.length}</span>
        <span className='cartcount'>
        {<DarkModeToggle />}</span>
      </div>
    </div>
  )
}
