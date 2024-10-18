import React from 'react';
import { useState } from 'react';
import { Grid2, Link, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function NavItems({isActive, isMobile}): React.JSX.Element {
  
  const mobileNavTypograhyStyle = {
    fontSize: '2cqw',
    margin: '.8cqw',
    textShadow: '0em .2em .5em rgba(0,0,0,.9) !important',
  };

  const navTypographyStyle = {
    fontSize: 'calc(1vw + 1vh)',
    margin: 'calc(0.5vw + 0.5vh)',
    textShadow: '0em .2em .5em rgba(0,0,0,.9) !important',
  };


  const navLinkStyle = {
    color: 'white', 
    textWrap: 'nowrap'
  };

  const mobileXIconStyle = {

  }

  const XIconStyle = {
    fontSize: 'calc(1vw + 1vh)', marginTop: 'calc(.65vw + .65vh)', marginRight: 'calc(4vw+4vh)', marginLeft: '1.5rem', color: 'white', textDecoration: 'none', textWrap: 'nowrap'
  }

  const LinkedInIconStyle = {
    fontSize: 'calc(1.2vw + 1.2vh)', marginTop: 'calc(.55vw + .55vh)', marginRight: 'calc(.4vw+ .4vh)', color: 'white', textDecoration: 'none', textWrap: 'nowrap'
  }
  
  const navItems = [
    {id: 0, ref: '/about', text: 'About', isActive: false},
    {id: 1, ref: '/services', text: 'Services', isActive: false},
    {id: 2, ref: '/midstream', text:'Satokie Midstream', isActive: false},
    {id: 3, ref: '/faq', text: 'FAQ', isActive: false},
    {id: 4, ref: '/contact', text: 'Contact', isActive: false} 
  ];



  return (
    <Grid2 size={6} sx={{ display: 'flex', justifyContent:' flex-end', position: 'absolute', zIndex: 3, margin: isMobile ? '0': '2.0rem', marginTop: isMobile ? '8cqw': '0', marginRight: isMobile ? '4cqw': '0'}}>
      {navItems.map( item => (
          <Link href={item.ref} underline='hover' sx={navLinkStyle} style={{textDecoration: isActive ? 'underline': 'none', marginTop: isMobile? '1cqw': '0'}}>
            <Typography sx={isMobile ?  mobileNavTypograhyStyle : navTypographyStyle}>{item.text}</Typography>
          </Link>
      ))}
      <Link href="https://x.com/SatokieMining">
        <XIcon sx={isMobile ? {fontSize: '3cqw', marginTop: '.1cqw', marginRight: '.3cqw', marginLeft: '2cqw', color: 'white', textDecoration: 'none', textWrap: 'nowrap'} : XIconStyle}/>
      </Link>
      <Link href="https://www.linkedin.com/company/satokie-mining">
        <LinkedInIcon sx={isMobile ? { fontSize: '3.8cqw', marginTop: '.9cqw', marginRight: '.1cqw', color: 'white', textDecoration: 'none', textWrap: 'nowrap'}: LinkedInIconStyle} />
      </Link>
    </Grid2>
  )
}