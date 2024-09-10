import React from 'react';
import '../styles.css';

export default function Header(){
    return(
        <div className='header'>
            <img className='logo' src='logo.png' alt='moviedux' />
            <p className='app-subtitle'>It's time for popcorn! Find your next Film here...</p>
        </div>
    )
}