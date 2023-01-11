import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-main.png';

export default function Header(props) {
    const [active, setActive] = useState(false);
 
    return (
        <>
            <div className='page_width header_wrap'>
                <header id='header'>
                    <div className='flex row'>
                        <div className='logo_wrap'>
                            <img src={logo} alt='Main logo for Cosmic Breathing' className='logo' />
                        </div>

                        <button 
                            id='menu_button' 
                            className={active ? 'active' : ''}
                            onClick={() => {setActive(!active)}}
                        >
                            <div className='text_wrap'>
                                <span className='menu_text'>{active ? 'Close' : 'Menu'}</span>
                            </div>
                            
                            <div className='wrap'>
                                <span className='slash'></span>
                                <span className='slash'></span>
                            </div>
                        </button>
                    </div>
                </header>
            </div>
            <div id='menu' className={active ? 'show' : ''} >
                <div className='content'>
                    <div className='link_wrap'><Link className='h1 link' to='/'>Index</Link></div>
                    <div className='link_wrap right'><Link className='h1 link' to='/' >About</Link></div>
                    <div className='link_wrap'><Link className='h1 link' to='/' >Work</Link></div>
                    <div className='link_wrap left'><Link className='h1 link' to='/' >Services</Link></div>
                    <div className='link_wrap'><Link className='h1 link' to='/' >Contact</Link></div>
                </div>
                
            </div>
        </>
    )
}