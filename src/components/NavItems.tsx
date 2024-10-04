import React from 'react';
import { useState } from 'react';
import { Grid2, Link, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function NavItems(props): React.JSX.Element {
  
  const navTypograhyStyle = {
    fontSize: 'calc(1vw + 1vh)',
    margin: 'calc(0.5vw + 0.5vh)'
  };
  
  const navLinkStyle = {
    color: 'white', 
    textWrap: 'nowrap'
  };
  
  const navItems = [
    {id: 0, ref: '/about', text: 'About', isActive: false},
    {id: 1, ref: '/services', text: 'Services', isActive: false},
    {id: 2, ref: '/midstream', text:'Satokie Midstream', isActive: false},
    {id: 3, ref: '/faq', text: 'FAQ', isActive: false},
    {id: 4, ref: '/contact', text: 'Contact', isActive: false} 
  ];



  return (
    <Grid2 size={6} sx={{ display: 'flex', justifyContent:' flex-end', position: 'absolute', zIndex: 3, margin: '2.0rem'}}>
      {navItems.map( item => (
          <Link href={item.ref} underline='hover' sx={navLinkStyle} style={{textDecoration: props.isActive ? 'underline': 'none'}}>
            <Typography style={navTypograhyStyle}>{item.text}</Typography>
          </Link>
      ))}
      <Link href="https://x.com/SatokieMining">
        <XIcon sx={{ fontSize: 'calc(1vw + 1vh)', marginTop: 'calc(.65vw + .65vh)', marginRight: 'calc(4vw+4vh)', marginLeft: '1.5rem', color: 'white', textDecoration: 'none', textWrap: 'nowrap'}}/>
      </Link>
      <Link href="https://www.linkedin.com/company/satokie-mining">
        <LinkedInIcon sx={{ fontSize: 'calc(1.2vw + 1.2vh)', marginTop: 'calc(.55vw + .55vh)', marginRight: 'calc(.4vw+ .4vh)', color: 'white', textDecoration: 'none', textWrap: 'nowrap'}} />
      </Link>
    </Grid2>
  )
}