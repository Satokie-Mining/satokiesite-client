import React from 'react';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './components/Nav';

export default function AppRouter() {
  const [active, setActive] = useState(false);

  return (
    <Routes>
          <Route path='/' element={<Home isActive={active}/>}/>
          <Route path='*' element={<div><h1>404 Please bear with us, this page is under construction!</h1><a href='/'>Return</a></div>}/>
    </Routes>
  )
}