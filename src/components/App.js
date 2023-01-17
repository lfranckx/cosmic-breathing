import React from 'react';
import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from '../routes/Home';
import Header from './Header';
import About from '../routes/About';

function App() {
  return (
    <>
      <div id='app'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;