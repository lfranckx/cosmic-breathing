import React from 'react';
import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from '../routes/Home';

function App() {
  return (
    <>
      <div id='app'>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;