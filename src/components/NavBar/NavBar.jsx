import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/navbar.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () =>{
  return (
    <div className='navBar'>
      <div className='logo'>Ecommerce Logo</div>
      <nav className='routes'>
        <ul className='ul'>
          <li className='li'>
            <Link className='link' to="/">Home</Link>
          </li>
          <li className='li'>
            <Link className='link' to="/products">Products</Link>
          </li>
          <li className='li'>
            <Link className='link' to="/offers">Offers</Link>
          </li>
          <li className='li'>
            <Link className='link' to="/categories">Categories</Link>
          </li>
          <li className='li'>
            <Link className='link' to="/contact">Contact</Link>
          </li>
        </ul>
          <SearchBar/>
      </nav>
      <div className='logo-2'>Account</div>
    </div>
  );
}


export default NavBar