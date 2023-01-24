import React from 'react';
import '../styles/App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import Home from '../routes/Home';
import Header from './Header';
import About from '../routes/About';
// import AboutNew from '../routes/AboutNew';
import Services from '../routes/Services';
import Connect from '../routes/Connect';
import Footer from './Footer';

function App() {
  const location = useLocation();

  const homeBgColor = location.pathname === '/' ? 'cream' : '';
  const aboutBgColor = location.pathname === '/about' ? 'black' : '';
  const servicesBgColor = location.pathname === '/services' ? 'cream' : '';
  const connectBgColor = location.pathname === '/connect' ? 'grey' : '';

  return (
    <>
      <div id='app' className={`${homeBgColor} ${aboutBgColor} ${servicesBgColor} ${connectBgColor}`}>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/about' element={<AboutNew />} /> */}
          <Route path='/services' element={<Services />} />
          <Route path='/connect' element={<Connect />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;