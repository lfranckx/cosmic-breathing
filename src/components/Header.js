import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo-notext.png';
import '../styles/Header.scss';

export default function Header(props) {
    const [active, setActive] = useState(false);
    const location = useLocation();

    const homeColor = location.pathname === '/' ? 'p1' : 'p1';
    const aboutColor = location.pathname === '/about' ? 'cream' : 'p1';
    const servicesColor = location.pathname === '/services' ? 'p1' : 'p1';
    const connectColor = location.pathname === '/connect' ? 'p1' : 'p1';
 
    return (
        <>
            <div className='page_width header_wrap'>
                <header id='header'>
                    <div className='flex row'>
                        <Link to={'/'}>
                            <div className='logo_text_wrap'>
                                {active ? <h1 className='p1 top_layer'>Cosmic Breathing</h1> 
                                        : <h1 className={`${homeColor} ${aboutColor} ${servicesColor} ${connectColor}`}>Cosmic Breathing</h1>}
                                <div className='logo_wrap'>
                                    <img src={logo} alt='Main logo for Cosmic Breathing' className='logo' />
                                </div>
                            </div>
                        </Link>

                        <button 
                            id='menu_button' 
                            className={active ? 'active' : ''}
                            onClick={() => {setActive(!active)}}
                        >
                            <div className={active ? 'active text_wrap' : 'text_wrap'}>
                                <span className={location.pathname === '/about' ? 'menu_text cream' : 'menu_text'}>{active ? 'Close' : 'Menu'}</span>
                            </div>
                            
                            <div className='wrap'>
                                <span className={location.pathname === '/about' ? 'slash cream' : 'slash'}></span>
                                <span className={location.pathname === '/about' ? 'slash cream' : 'slash'}></span>
                            </div>
                        </button>
                    </div>
                </header>
            </div>
            <div id='menu' className={active ? 'show' : ''} >
                <div className='content'>
                    <div className='link_wrap'>
                        <Link className='h1 link' to='/' onClick={() => {setActive(!active)}}>Index</Link>
                    </div>
                    <div className='link_wrap right'>
                        <Link className='h1 link' to='/about' onClick={() => {setActive(!active)}}>About</Link>
                    </div>
                    <div className='link_wrap'>
                        <Link className='h1 link' to='/services' onClick={() => {setActive(!active)}}>Services</Link>
                    </div>
                    <div className='link_wrap left'>
                        <Link className='h1 link' to='/connect' onClick={() => {setActive(!active)}}>Connect</Link>
                    </div>
                </div>
            </div>
        </>
    )
}