import * as React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import videoUrl from './assets/tour.mp4';
import logo from './assets/logo-1.png';
import VideoItem from './VideoItem';



export default function App() {
  return (
    <Paper  sx={{position: 'relative', flexGrow: 1, overflowX: 'hidden'}}>
      <Paper sx={{backgroundColor: 'black', width: '100vw', height: '90vh', borderRadius: '0'}}>
        <Grid2 container sx={{display: 'flex', justifyContent: 'flex-start', position: 'absolute'}}>
          <Grid2 sx={{ zIndex: 3}}>
              <img src={logo} style={{width: 'calc(5vw + 4vh)', height: 'calc(5vw + 4vh)', margin: 'calc(2vw + 2vh)', position: 'absolute' }}/>
            </Grid2>
        </Grid2>
        <Grid2 container spacing={0} sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Grid2 size={6} sx={{ flexShrink: 3, display: 'flex', justifyContent:' flex-end', position: 'absolute', zIndex: 3, margin: '2.0rem'}}>
            <Link href='/' sx={{color: 'white', textDecoration: 'none', textWrap: 'nowrap'}}>
              <Typography style={{fontSize: 'calc(1vw + 1vh)', margin: 'calc(0.4vw + 0.4vh)'}}>About</Typography>
            </Link>
            <Link sx={{color: 'white', textDecoration: 'none', textWrap: 'nowrap'}}>
              <Typography style={{fontSize: 'calc(1vw + 1vh)', margin: 'calc(0.4vw + 0.4vh)'}}>Services</Typography>
            </Link>
            <Link sx={{color: 'white', textDecoration: 'none', textWrap: 'nowrap'}}>
              <Typography style={{fontSize: 'calc(1vw + 1vh)', margin: 'calc(0.4vw + 0.4vh)'}}>Satokie Midstream</Typography>
            </Link>
            <Link sx={{color: 'white', textDecoration: 'none', textWrap: 'nowrap'}}>
              <Typography style={{fontSize: 'calc(1vw + 1vh)', margin: 'calc(0.4vw + 0.4vh)'}}>FAQ</Typography>
            </Link>
            <Link sx={{color: 'white', textDecoration: 'none', textWrap: 'nowrap'}}>
              <Typography style={{fontSize: 'calc(1vw + 1vh)', margin: 'calc(0.4vw + 0.4vh)'}}>Contact</Typography>
            </Link>
            <Link>
              <XIcon sx={{ fontSize: 'calc(1vw + 1vh)', marginTop: 'calc(.55vw + .55vh)', marginRight: 'calc(.6vw+.6vh)', marginLeft: '1.5rem', color: 'white', textDecoration: 'none', textWrap: 'nowrap'}}/>
            </Link>
            <Link>
              <LinkedInIcon sx={{ fontSize: 'calc(1vw + 1vh)', marginTop: 'calc(.55vw + .55vh)', marginRight: 'calc(.4vw+ .4vh)', color: 'white', textDecoration: 'none', textWrap: 'nowrap'}} />
            </Link>
            
          </Grid2>
        </Grid2>
        <Grid2 container spacing={0} sx={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Grid2 container spacing={0}>
            <Grid2 sx={{
                width: '100vw', 
                height: '90vh', 
                overflow: 'hidden', 
                boxShadow: '0px 16px 16px rgba(0,0,0, .5)',
                backgroundColor: 'rgba(0,0,0,.9)',
                zIndex: 2}}>
              <VideoItem sx={{width: '100%', height: '100%', objectFit: 'cover', zIndex: 1}} videoUrl={videoUrl}/>
            </Grid2>
          </Grid2>
        </Grid2>
      </Paper>
      <Paper sx={{backgroundColor: 'blue', width: '100vw', height: '100vh', borderRadius: '0'}}>

      </Paper>
      <Paper sx={{backgroundColor: 'cream', width: '100vw', height: '100vh', borderRadius: '0'}}>

      </Paper>
    </Paper>
  );
}
