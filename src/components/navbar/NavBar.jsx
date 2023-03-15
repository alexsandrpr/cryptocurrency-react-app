import React from 'react';
import Logo from '../../img/logo.png';
import '../navbar/navbar.css';

function NavBar() {
  return (
        <div className='header__nav'>
        <img className='logotype' src={Logo} alt='logotype' />
            <nav className='navbar'>
                <div className='nav__item'>Home</div>
                <div className='nav__item'>Businesses</div>
                <div className='nav__item'>Trade</div>
                <div className='nav__item'>Market</div>
                <div className='nav__item'>Learn</div>
            </nav>
            <div className='login__and__language'>
                <button className='btn__login'>Login</button>
            </div>
        </div>
  );
}

export default NavBar;
