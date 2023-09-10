import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='element'>
            <h2>Rest Countries</h2>
            <div>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/details">Details</a>
            <a href="/login">Login</a>
            </div>
            </div>
        </div>
    );
};

export default Header;