import React from 'react';
import logo from '../images/logo-main.png';

export default function Home() {
    return (
        <div class='page_wrap home'>
            <header id='header'>
                <div className='flex container'>
                    <div class='logo_wrap'>
                        <img src={logo} alt='Main logo for Cosmic Breathing' className='logo' />
                    </div>
                </div>
            </header>
        </div>
    )
}