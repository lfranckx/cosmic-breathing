import React from 'react';
import logo from '../images/logo-main.png';

export default function Header() {
    return (
        <div className='page_width header_wrap'>
            <header id='header'>
                <div className='flex row'>
                    <div className='logo_wrap'>
                        <img src={logo} alt='Main logo for Cosmic Breathing' className='logo' />
                    </div>
                    <button id='menu_button'>
                        <div className='text_wrap'>
                            <span className='menu_text'>Menu</span>
                        </div>
                        
                        <div className='wrap'>
                            <span className='slash'></span>
                            <span className='slash'></span>
                        </div>
                    </button>
                </div>
            </header>
        </div>
    )
}