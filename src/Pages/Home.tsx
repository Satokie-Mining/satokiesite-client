import React from 'react';
import Paper from '@mui/material/Paper';
import videoUrl from '../assets/tour.mp4';
import VideoItem from '../components/VideoItem';
import Nav from '../components/Nav';
import curvySection from '../assets/curvy-section.svg';
import {Box, Grid2, Typography} from '@mui/material';
import rackImg from '../assets/miner-rack-sect-2.jpg';
import siteImg from '../assets/site-sect2.webp';

export default function Home(props): React.JSX.Element {

  return (
    <Paper  sx={{position: 'relative', flexGrow: 1, overflowX: 'hidden'}}>
      <Paper id='home-1' sx={{backgroundColor: 'black', width: '100vw', height: '90vh', borderRadius: '0'}}>
        <Nav isActive={props.isActive}/>
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
      <Paper id='home-2' elevation={0} sx={{width: '100vw', height: '90vh', borderRadius: '0', position: 'relative', overflow: 'hidden'}}>
        <Paper elevation={0} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', borderRadius:'0', position: 'absolute'}}>
          <img style={{zIndex: 2, position: 'absolute', width: 'calc(100vh + 100vw)', height: 'calc(60vh + 60vw)'}} src={curvySection} alt="" />
          <Grid2 container sx={{ margin: 'calc(4vw+5vh)', width: '100vw', height: "90vh", zIndex: 3}}>
            <Grid2 size={5} sx={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center'}} >
              <Box sx={{width: 'calc(20vw + 20vh)', marginBottom: 'calc(10vw + 10vh)', marginLeft:'calc(10vw + 10vw)'}}>
                <Typography variant='h6' color='white'>Satokie Mining</Typography>
                <Typography variant='h3' color='white' sx={{textWrap: 'wrap'}}>WE BUILD, OWN AND OPERATE DATACENTERS THAT SUPPORT THE BITCOIN NETWORK</Typography>
              </Box>
            </Grid2>
            <Grid2 size={2} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Box sx={{marginTop: 'calc(10vw + 10vh)', backgroundColor: 'black', width: 'calc(10vw + 10vh)', height: 'calc(10vw + 10vh)', borderRadius: '50%', objectFit: 'contain', overflow: 'hidden', display: 'flex'}}>
                  <img style={{objectFit: 'cover'}}src={rackImg} alt="" />
                </Box> 
            </Grid2>
            <Grid2 size={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <Box sx={{backgroundColor: 'black', width: 'calc(18vw + 18vh)', height: 'calc(18vw + 18vh)', borderRadius: '50%', objectFit: 'contain', overflow: 'hidden', display: 'flex'}}>
                <img style={{objectFit: 'cover'}} src={siteImg} alt="" />
              </Box>
            </Grid2>
            
          </Grid2>
        </Paper>
        <Paper sx={{width: '100%', height: '100%', borderRadius:'0', backgroundColor: 'blue', position: 'absolute', zIndex: 1}}>
            
        </Paper>
      </Paper>
      <Paper id='home-3' sx={{backgroundColor: 'cream', width: '100vw', height: '100vh', borderRadius: '0'}}>

      </Paper>
    </Paper>
  );
}
