import React from 'react';
import Logo from './Logo';
import NavItems from './NavItems';
import Grid2 from '@mui/material/Grid2';

export default function Nav(props): React.JSX.Element {
  return (
    <>
      <Grid2 container sx={{display: 'flex', justifyContent: 'flex-start', position: 'absolute'}}>
        <Logo />
      </Grid2>
      <Grid2 container spacing={0} sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <NavItems isActive={props.isActive} />
      </Grid2>
    </>
  )
}