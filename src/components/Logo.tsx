import React from 'react';
import { Grid2, Link } from "@mui/material";
import logo from '../assets/logo-1.png';

export default function Logo({isMobile}): React.JSX.Element{
  
  return (
    <Grid2 sx={{ zIndex: 3}}>
      <Link href='/'>
        <img src={logo} style={{width: 'calc(5vw + 5vh)', height: 'calc(4vw + 4vh)', margin: 'calc(2vw + 2vh)', position: 'absolute' }}/>
      </Link>
    </Grid2>
  )
}