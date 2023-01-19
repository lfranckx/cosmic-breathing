import React from 'react';
import '../styles/App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from '../routes/Home';
import Header from './Header';
import About from '../routes/About';
import Services from '../routes/Services';
import Connect from '../routes/Connect';

function App() {
  const location = useLocation();

  return (
    <>
      <div id='app' className={location.pathname === '/about' ? 'black' : ''}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/connect' element={<Connect />} />
        </Routes>
      </div>
    </>
  );
}

export default App;