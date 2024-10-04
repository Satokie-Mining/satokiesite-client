import React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import videoUrl from '../assets/tour.mp4';
import VideoItem from '../components/VideoItem';
import Nav from '../components/Nav';
import curvySection from '../assets/curvy-section.svg';
import {Box, Grid2, Typography} from '@mui/material';
import rackImg from '../assets/miner-rack-sect-2.jpg';
import siteImg from '../assets/site-sect2-cropped-1.webp';
import cloudHostingSvg from '../assets/cloud-hosting.svg';
import peopleSvg from '../assets/people.svg';



export default function Home(props): React.JSX.Element {

  return (
    <Paper  sx={{position: 'relative', flexGrow: 1, overflowX: 'hidden'}}>
      <Paper id='home-1' elevation={3} sx={{backgroundColor: 'black', width: '100vw', height: '90vh', borderRadius: '0'}}>
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
          <img style={{zIndex: 2, position: 'absolute', width: 'auto', height: '100%'}} src={curvySection} alt="svg curvy background image" />
          <Grid2 container sx={{ margin: 'calc(4vw+5vh)', width: '100vw', height: "90vh", zIndex: 3}}>
            <Grid2 size={5} sx={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center'}} >
              <Box sx={{width: 'calc(20vw + 20vh)', marginBottom: 'calc(10vw + 10vh)', marginLeft:'calc(10vw + 10vw)'}}>
                <Typography variant='h6'  sx={{fontSize: 'calc(.6vh + .6vw)'}}color='white'>Satokie Mining</Typography>
                <Typography variant='h3' sx={{fontSize: 'calc(1.6vh + 1.6vw)', textWrap: 'wrap'}} color='white'>WE BUILD, OWN AND OPERATE DATACENTERS THAT SUPPORT THE BITCOIN NETWORK</Typography>
              </Box>
            </Grid2>
            <Grid2 size={7} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Box sx={{marginTop: 'calc(10vw + 10vh)', backgroundColor: 'black', width: 'calc(10vw + 10vh)', height: 'calc(10vw + 10vh)', borderRadius: '50%', objectFit: 'contain', overflow: 'hidden', display: 'flex'}}>
                  <img style={{objectFit: 'cover'}}src={rackImg} alt="satokie rack image" />
                </Box> 
                <Box sx={{backgroundColor: 'black', width: 'calc(18vw + 18vh)', height: 'calc(18vw + 18vh)', borderRadius: '50%', objectFit: 'contain', overflow: 'hidden', display: 'flex'}}>
                  <img style={{objectFit: 'cover'}} src={siteImg} alt="satokie site image" />
                </Box>
            </Grid2>
          </Grid2>
        </Paper>
        <Paper sx={{width: '100%', height: '100%', borderRadius:'0', backgroundColor: '#062e60', position: 'absolute', zIndex: 1}}></Paper>
      </Paper>
      <Paper id='home-3' elevation={0} sx={{backgroundColor: 'cream', width: '100vw', height: '100vh', borderRadius: '0'}}>
        <Grid2 wrap='nowrap' sx={{display:'flex', alignItems:'space-between', justifyContent:'center'}} container spacing={3}>
          <Grid2 size={3} position='relative'>
            <Box width='100%' height='100%' position='absolute' zIndex={1} >
              <svg id="Rxb0gwuOd2RZZaz3" fill="#062e60" viewBox="0 0 109.7036 146.0043"><g id="CTxoJCnxpADD2SgY"><path id="YAYqSJyBaBu2GALT" d="M103.45016064,0 L6.25338984,0 C6.25338984,3.44086003 3.4707799,6.25338984 0,6.25338984 L0,139.75091906 C3.44086003,139.75091906 6.25338984,142.53351946 6.25338984,146.00431795 L103.45016064,146.00431795 C103.45016064,142.56341906 106.23276104,139.75091906 109.70355953,139.75091906 L109.70355953,6.25338984 C106.26266064,6.25338984 103.45016064,3.4707799 103.45016064,0 Z" ></path></g></svg>
            </Box>
            <Box width='100%' height='100%' position='absolute' flexWrap='nowrap' zIndex={2} sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'1.2rem' }} >
              <Grid2 container spacing={1} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Grid2 display='flex' justifyContent='center' alignItems='center' size={4}>
                  <img style={{objectFit: 'contain', width:'100%', height:'auto'}} src={cloudHostingSvg} alt="Cloud Hosting Image" />
                </Grid2>
                <Grid2 sx={{width: '100%', height: 'auto'}} size={4}>
                  <Typography textAlign='center' color='white' sx={{fontSize: 'calc(.9vw + .9vh)', fontWeight: 'bold', marginBottom:'calc(.5vw + .5vh)', flexShrink: 5}}>Hosting Solutions</Typography>
                </Grid2>
                <Grid2 sx={{width: '100%', height: 'auto'}} size={4}>
                  <Typography sx={{fontSize: 'calc(.8vw + .8vh)', flexShrink: 5}} textAlign='center' color='white'>Have ASICs that need cheap ​energy? Contact us today to get ​access to the cheapest power in ​the industry ran by world class ​operators.</Typography>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
          <Grid2 position='relative' size={3}>
            <Box width='100%' height='100%' sx={{position: 'absolute'}}>
              <svg id="Rxb0gwuOd2RZZaz3" fill="#062e60" viewBox="0 0 109.7036 146.0043"><g id="CTxoJCnxpADD2SgY"><path id="YAYqSJyBaBu2GALT" d="M103.45016064,0 L6.25338984,0 C6.25338984,3.44086003 3.4707799,6.25338984 0,6.25338984 L0,139.75091906 C3.44086003,139.75091906 6.25338984,142.53351946 6.25338984,146.00431795 L103.45016064,146.00431795 C103.45016064,142.56341906 106.23276104,139.75091906 109.70355953,139.75091906 L109.70355953,6.25338984 C106.26266064,6.25338984 103.45016064,3.4707799 103.45016064,0 Z" ></path></g></svg>
            </Box>
            <Box width='100%' height='100%' position='absolute' flexWrap='nowrap' zIndex={2} sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'1.2rem' }} >
              <Box sx={{zIndex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center', width: '100%', height: '25%'}}>
                <img style={{objectFit: 'contain', width:'30%', height:'auto'}} src={peopleSvg} alt="Cloud Hosting Image" />
              </Box>
              <Typography textAlign='center' color='white' sx={{fontSize: 'calc(.9vw + .9vh)', fontWeight: 'bold', marginBottom:'calc(.5vw + .5vh)'}}>3rd Party Site Operators</Typography>
              <Typography sx={{fontSize: 'calc(.8vw + .8vh)'}} textAlign='center' color='white'>Looking to develop your own site ​and need an operating team? We ​offer 3rd party operating services ​so you can sleep at night knowing ​your site is taken care of.</Typography>
            </Box>
          </Grid2>
          <Grid2 position='relative' size={3}>
            <svg id="Rxb0gwuOd2RZZaz3" fill="#062e60"viewBox="0 0 109.7036 146.0043"><g id="CTxoJCnxpADD2SgY"><path id="YAYqSJyBaBu2GALT" d="M103.45016064,0 L6.25338984,0 C6.25338984,3.44086003 3.4707799,6.25338984 0,6.25338984 L0,139.75091906 C3.44086003,139.75091906 6.25338984,142.53351946 6.25338984,146.00431795 L103.45016064,146.00431795 C103.45016064,142.56341906 106.23276104,139.75091906 109.70355953,139.75091906 L109.70355953,6.25338984 C106.26266064,6.25338984 103.45016064,3.4707799 103.45016064,0 Z" ></path></g></svg>
          </Grid2>

        </Grid2>
      </Paper>
      <Paper id='footer-contact' elevation={0} sx={{backgroundColor: '#062e60', width: '100vw', height: '100vh', borderRadius: '0'}}>
        
      </Paper>
    </Paper>
  );
}
