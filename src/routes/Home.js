import React from 'react';
import logo from '../images/logo-main.png';

export default function Home() {
    return (
        <>
            <header id='header'>
                <div className='flex container'>
                    <div class='logo_wrap'>
                        <img src={logo} alt='Main logo for Cosmic Breathing' />
                    </div>
                </div>
            </header>
        </>
    )
}