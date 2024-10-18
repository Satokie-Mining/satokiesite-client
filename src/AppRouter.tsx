import React, { useEffect } from 'react';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import UnderConstruction from './Pages/UnderConstruction';

export default function AppRouter() {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); 

  }, []);

  return (
    <Routes>
          <Route path='/about' element={<UnderConstruction isMobile={isMobile}/>}/>
          <Route path='/services' element={<UnderConstruction isMobile={isMobile}/>}/>
          <Route path='/midstream' element={<UnderConstruction isMobile={isMobile}/>}/>
          <Route path='/faq' element={<UnderConstruction isMobile={isMobile}/>}/>
          <Route path='/contact' element={<UnderConstruction isMobile={isMobile}/>}/>
          <Route path='/' element={<Home isActive={active} isMobile={isMobile}/>}/>
    </Routes>
  )
}