import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';
import InTheaters from './components/InTheaters/InTheaters';
import Upcoming from './components/Upcoming/Upcoming';
import TopRated from './components/TopRated/TopRated';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/popular" exact element={<Popular />}/>
        <Route path="/intheaters" exact element={<InTheaters />}/>
        <Route path="/upcoming" exact element={<Upcoming />}/>
        <Route path="/toprated" exact element={<TopRated />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
