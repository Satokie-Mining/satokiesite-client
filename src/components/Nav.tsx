import React from 'react';
import Logo from './Logo';
import NavItems from './NavItems';
import Grid2 from '@mui/material/Grid2';

export default function Nav({isActive, isMobile}): React.JSX.Element {
  return (
    <>
      <Grid2 container sx={{display: 'flex', justifyContent: 'flex-start', position: 'absolute'}}>
        <Logo isMobile={isMobile}/>
      </Grid2>
      <Grid2 container spacing={0} sx={{display: 'flex', justifyContent: 'flex-end', width: '100cqw'}}>
        <NavItems isActive={isActive} isMobile={isMobile} />
      </Grid2>
    </>
  )
}