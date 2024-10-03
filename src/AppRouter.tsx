import React from 'react';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import UnderConstruction from './Pages/UnderConstruction';

export default function AppRouter() {
  const [active, setActive] = useState(false);

  return (
    <Routes>
          <Route path='/about' element={<UnderConstruction />}/>
          <Route path='/services' element={<UnderConstruction />}/>
          <Route path='/midstream' element={<UnderConstruction />}/>
          <Route path='/faq' element={<UnderConstruction />}/>
          <Route path='/contact' element={<UnderConstruction />}/>
          <Route path='/' element={<Home isActive={active}/>}/>
    </Routes>
  )
}