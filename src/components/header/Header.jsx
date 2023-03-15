import React from 'react';
import '../header/header.css';
import NavBar from '../navbar/NavBar';

function Header() {
  return (
    <header className='header'>
        <NavBar />
        <div className='header__title'>
            <h1 className='title'>Start and Build Your Crypto Portfolio Here</h1>
            <p className='title__info'>Only at CryptoCap, you can build a good portfolio and learn 
                best practices about cryptocurrency.
            </p>
            <button className='btn__get__started'>Get Started</button>
        </div>
        <div className='header__gradient-1'></div>
        <div className='header__gradient-2'></div>
    </header>
  );
}

export default Header;
