import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo-notext.png';
import '../styles/Header.scss';

export default function Header(props) {
    const [active, setActive] = useState(false);
    const location = useLocation();

    const homeTextColor = location.pathname === '/' ? 'p1' : 'p1';
    const aboutTextColor = location.pathname === '/about' ? 'bronze p1' : 'p1';
    const servicesTextColor = location.pathname === '/services' ? 'p1' : 'p1';
    const connectTextColor = location.pathname === '/connect' ? 'p1' : 'p1';

    const activeMenuTextColorHome = location.pathname === '/' ? 'cream' : 'p1';
    const activeMenuTextColorServices = location.pathname === '/services' ? 'cream' : 'p1';

    const homeBgColor = location.pathname === '/' ? 'black' : '';
    const aboutBgColor = location.pathname === '/about' ? 'white' : '';
    const servicesBgColor = location.pathname === '/services' ? 'black' : '';
    const connectBgColor = location.pathname === '/connect' ? 'white' : '';
    const activeScreen = active ? 'show' : '';

    const homeLinkColor = location.pathname === '/' ? 'bronze' : '';
    const aboutLinkColor = location.pathname === '/about' ? 'black' : '';
    const servicesLinkColor = location.pathname === '/services' ? 'bronze' : '';
    const connectLinkColor = location.pathname === '/connect' ? 'black' : '';
    
    return (
        <>
            <div className='page_width header_wrap'>
                <header id='header'>
                    <div className='flex row'>
                        <Link to={'/'}>
                            <div className='logo_text_wrap'>
                                {active ? <h1 className={`p1 top_layer ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}>Cosmic Breathing</h1> 
                                        : <h1 className={`${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}>Cosmic Breathing</h1>}
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
                                {active ? <span className={`menu_text ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}>{active ? 'Close' : 'Menu'}</span>
                                        : <span className={`menu_text ${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}>{active ? 'Close' : 'Menu'}</span>}
                            </div>
                            
                            <div className='wrap'>
                                {active ? <span className={`slash ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}></span>
                                        : <span className={`slash ${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}></span>}
                                {active ? <span className={`slash ${activeMenuTextColorHome} ${activeMenuTextColorServices}`}></span>
                                        : <span className={`slash ${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}></span>}
                            </div>
                        </button>
                    </div>
                </header>
            </div>
            <div id='menu' className={`${homeBgColor} ${aboutBgColor} ${servicesBgColor} ${connectBgColor} ${activeScreen}`}>
                <div className='content'>
                    <div className='link_wrap'>
                        <Link className={`h1 link ${homeLinkColor} ${aboutLinkColor} ${servicesLinkColor} ${connectLinkColor}`} to='/' onClick={() => {setActive(!active)}}>Index</Link>
                    </div>
                    <div className='link_wrap right'>
                        <Link className={`h1 link ${homeLinkColor} ${aboutLinkColor} ${servicesLinkColor} ${connectLinkColor}`} to='/about' onClick={() => {setActive(!active)}}>About</Link>
                    </div>
                    <div className='link_wrap'>
                        <Link className={`h1 link ${homeLinkColor} ${aboutLinkColor} ${servicesLinkColor} ${connectLinkColor}`} to='/services' onClick={() => {setActive(!active)}}>Services</Link>
                    </div>
                    <div className='link_wrap left'>
                        <Link className={`h1 link ${homeLinkColor} ${aboutLinkColor} ${servicesLinkColor} ${connectLinkColor}`} to='/connect' onClick={() => {setActive(!active)}}>Connect</Link>
                    </div>
                </div>
            </div>
        </>
    );
}