import React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import videoUrl from '../assets/tour.mp4';
import VideoItem from '../components/VideoItem';
import Nav from '../components/Nav';
import curvySection from '../assets/curvy-section.svg';
import {Box, Grid2, Typography, Container} from '@mui/material';
import rackImg from '../assets/miner-rack-sect-2.jpg';
import siteImg from '../assets/site-sect2-cropped-1.webp';
import cloudHostingSvg from '../assets/cloud-hosting.svg';
import peopleSvg from '../assets/people.svg';
import handsSvg from '../assets/hands.svg';
import terralinesSvg from '../assets/terralines.svg';
import teamImg from '../assets/team-on-site.jpg';
import racksImg from '../assets/racks-comp.jpg';
import siteRowsImg from '../assets/site-rows.jpg';
import teamInspectionImg from '../assets/teamwork-inspection.webp';
import {styled } from '@mui/material/styles';

const TicketItem = styled(Box)(({theme}) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  borderRadius: '0',
  textAlign: 'center',
  objectFit: 'contain',
  width: '100%',
  height: 'auto',
  color: theme.palette.text.secondary, ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  }),
}));

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
      <Paper id='home-2' elevation={0} sx={{width: '100vw', height: '90vh', maxHeight:'calc(100vw / 2)', borderRadius: '0', position: 'relative', overflow: 'hidden'}}>
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
      <Paper id='home-3' elevation={0} sx={{backgroundColor: 'cream', width: '100vw', height: '100vh', maxHeight: 'calc(100vw / 2)', borderRadius: '0', position: 'relative', zIndex:'0'}}>
        <Box id='grid-box'  sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Grid2  sx={{ width: '80cqw', height: '100%'}} id='ticket-container' wrap='nowrap' container spacing={3}>
            <Grid2 id='ticket-1' size={4} position='relative'>
              <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Box id='ticket-image-1' sx={{width: 'inherit', height: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}position='absolute' zIndex={1} >
                  <TicketItem><svg id="Rxb0gwuOd2RZZaz3" fill="#062e60" viewBox="0 0 109.7036 146.0043"><g id="CTxoJCnxpADD2SgY"><path id="YAYqSJyBaBu2GALT" d="M103.45016064,0 L6.25338984,0 C6.25338984,3.44086003 3.4707799,6.25338984 0,6.25338984 L0,139.75091906 C3.44086003,139.75091906 6.25338984,142.53351946 6.25338984,146.00431795 L103.45016064,146.00431795 C103.45016064,142.56341906 106.23276104,139.75091906 109.70355953,139.75091906 L109.70355953,6.25338984 C106.26266064,6.25338984 103.45016064,3.4707799 103.45016064,0 Z" ></path></g></svg></TicketItem>
                </Box>
                <Box id='ticket-content-1' position='absolute' flexWrap='nowrap' zIndex={2} sx={{width: '80%', height: '100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
                  <Box display='flex' justifyContent='center' alignItems='center'>
                    <img style={{objectFit: 'contain', width:'30%', height:'auto', marginBottom: '3cqh', }} src={cloudHostingSvg} alt="Cloud Hosting Image" />
                  </Box>
                  <Box sx={{width: '80%', height: 'auto'}}>
                    <Typography textAlign='center' color='white' sx={{fontSize: '1.9cqw', fontWeight: 'bold', marginBottom:'calc(.5vw + .5vh)', textWrap: 'nowrap'}}>Hosting Solutions</Typography>
                  </Box>
                  <Box sx={{width: '80%', height: 'auto'}}>
                    <Typography sx={{fontSize: '1cqw'}} textAlign='center' color='white'>Have ASICs that need cheap ​energy? Contact us today to get ​access to the cheapest power in ​the industry ran by world class ​operators.</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid2>
            <Grid2 id='ticket-2' size={4} position='relative'>
              <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Box id='ticket-image-2' sx={{width: 'inherit', height: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}position='absolute' zIndex={1} >
                  <TicketItem><svg id="Rxb0gwuOd2RZZaz3" fill="#062e60" viewBox="0 0 109.7036 146.0043"><g id="CTxoJCnxpADD2SgY"><path id="YAYqSJyBaBu2GALT" d="M103.45016064,0 L6.25338984,0 C6.25338984,3.44086003 3.4707799,6.25338984 0,6.25338984 L0,139.75091906 C3.44086003,139.75091906 6.25338984,142.53351946 6.25338984,146.00431795 L103.45016064,146.00431795 C103.45016064,142.56341906 106.23276104,139.75091906 109.70355953,139.75091906 L109.70355953,6.25338984 C106.26266064,6.25338984 103.45016064,3.4707799 103.45016064,0 Z" ></path></g></svg></TicketItem>
                </Box>
                <Box id='ticket-content-2' position='absolute' flexWrap='nowrap' zIndex={2} sx={{width: '80%', height: '100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
                  <Box display='flex' justifyContent='center' alignItems='center'>
                    <img style={{objectFit: 'contain', width:'45%', height:'auto', marginBottom: '3cqh'}} src={peopleSvg} alt="Cloud Hosting Image" />
                  </Box>
                  <Box sx={{width: '80%', height: 'auto'}}>
                    <Typography textAlign='center' color='white' sx={{fontSize: '1.9cqw', fontWeight: 'bold', marginBottom:'calc(.5vw + .5vh)', textWrap: 'nowrap'}}>3rd Party Operators</Typography>
                  </Box>
                  <Box sx={{width: '80%', height: 'auto'}}>
                    <Typography sx={{fontSize: '1cqw'}} textAlign='center' color='white'>Looking to develop your own site ​and need an operating team? We ​offer 3rd party operating services ​so you can sleep at night knowing ​your site is taken care of.</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid2>
            <Grid2 id='ticket-3' size={4} position='relative'>
              <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Box id='ticket-image-3' sx={{width: 'inherit', height: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}position='absolute' zIndex={1} >
                  <TicketItem><svg id="Rxb0gwuOd2RZZaz3" fill="#062e60" viewBox="0 0 109.7036 146.0043"><g id="CTxoJCnxpADD2SgY"><path id="YAYqSJyBaBu2GALT" d="M103.45016064,0 L6.25338984,0 C6.25338984,3.44086003 3.4707799,6.25338984 0,6.25338984 L0,139.75091906 C3.44086003,139.75091906 6.25338984,142.53351946 6.25338984,146.00431795 L103.45016064,146.00431795 C103.45016064,142.56341906 106.23276104,139.75091906 109.70355953,139.75091906 L109.70355953,6.25338984 C106.26266064,6.25338984 103.45016064,3.4707799 103.45016064,0 Z" ></path></g></svg></TicketItem>
                </Box>
                <Box id='ticket-content-3' position='absolute' flexWrap='nowrap' zIndex={2} sx={{width: '80%', height: '100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
                  <Box display='flex' justifyContent='center' alignItems='center'>
                    <img style={{objectFit: 'contain', width:'30%', height:'auto', marginBottom: '3cqh'}} src={handsSvg} alt="Cloud Hosting Image" />
                  </Box>
                  <Box sx={{width: '80%', height: 'auto'}}>
                    <Typography textAlign='center' color='white' sx={{fontSize: '1.9cqw', fontWeight: 'bold', marginBottom:'calc(.5vw + .5vh)', textWrap: 'nowrap'}}>Hosting Solutions</Typography>
                  </Box>
                  <Box sx={{width: '80%', height: 'auto'}}>
                    <Typography sx={{fontSize: '1cqw'}} textAlign='center' color='white'>Have ASICs that need cheap ​energy? Contact us today to get ​access to the cheapest power in ​the industry ran by world class ​operators.</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Paper>
      <Paper id='home-4' elevation={1} sx={{backgroundColor:'#062e60', width: '100vw', height: '40vh', maxHeight: 'calc(100vw / 5)', borderRadius: '0'}}>
        <Box id='home-4-container'position='relative' width='100%' height='100%' display='flex' flexDirection='row' alignItems='center' justifyContent='center' zIndex={0}>
          <Box id='background-svg-container' position={'absolute'} sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', width: '100%', height: '100%', zIndex: 1, overflow: 'hidden'}}>
            <img width='100%' src={terralinesSvg} alt="background svg" />
          </Box>
          <Box id='content-container' position={'absolute'} sx={{ display:'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', justifyContent:'space-around', width: '100%', height: '100%', zIndex: 2}}>
              <Box>
                <Typography sx={{ fontSize: '6cqw', fontWeight: 'bold', textShadow: '0em .3em .5em rgba(0, 0, 0, 0.6) !important', color: 'white'}}>65</Typography>
                <Typography sx={{ fontSize: '1.5cqw', fontWeight: 'bold', color: 'rgba(250, 250, 250, .6)'}}>MEGAWATTS DEPLOYED</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '6cqw', fontWeight: 'bold', textShadow: '0em .3em .5em rgba(0, 0, 0, 0.6) !important', color: 'white'}}>~2.5EH</Typography>
                <Typography sx={{ fontSize: '1.5cqw', fontWeight: 'bold', color: 'rgba(250, 250, 250, .6)'}}>HASHRATE OPERATED</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '6cqw', fontWeight: 'bold', textShadow: '0em .3em .5em rgba(0, 0, 0, 0.6) !important', color: 'white'}}>5</Typography>
                <Typography sx={{ fontSize: '1.5cqw', fontWeight: 'bold', color: 'rgba(250, 250, 250, .6)'}}>SITES MANAGED</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '6cqw', fontWeight: 'bold', textShadow: '0em .3em .5em rgba(0, 0, 0, 0.6) !important', color: 'white'}}>25</Typography>
                <Typography sx={{ fontSize: '1.5cqw', fontWeight: 'bold', color: 'rgba(250, 250, 250, .6)'}}>TEAM MEMBERS</Typography>
              </Box>
          </Box>
        </Box>
      </Paper>
      <Paper id='home-5' elevation={0} sx={{backgroundColor: 'cream', width: '100vw', height: '150vh', maxHeight: 'calc(100vw * 1.6)', borderRadius: '0', zIndex: 0}}>
        <Box id='gallery-container' width={'100%'} height={'100%'} sx={{padding: '3cqw', zIndex: 1}}>
          <Grid2 container id='gallery-parent-grid' spacing={4} width={'100%'} height={'100%'} sx={{zIndex: 2, backgroundColor: 'purple'}}>
              <Grid2 id='gallery-left-column'size={6} sx={{backgroundColor: 'green'}}>
                <Box id='collumn-box-container' width={'100%'} height={'100%'}>
                  <Grid2 id='gallery-left-column-container' container rowSpacing={8} width={'100%'} height={'100%'}>
                    <Grid2 id='top-left-text' size={12} sx={{backgroundColor: 'black', height: '30%', width:'100%', zIndex: 3}}>
                    </Grid2>
                    <Grid2 id='bottom-left-img' size={12} sx={{backgroundColor: 'white', height: '65%', width: '100%', zIndex: 3}}>
                    </Grid2>
                  </Grid2>
                </Box>
              </Grid2>
              <Grid2 id='gallery-right-column' size={6} sx={{backgroundColor: 'orange', height: '100%'}}>
              <Box id='collumn-box-container' width={'100%'} height={'100%'}>
                <Grid2 id='gallery-left-column-container' container rowSpacing={8} width={'100%'} height={'100%'}>
                  <Grid2 id='top-left-text' size={12} sx={{backgroundColor: 'yellow', height: '30%', width:'100%', zIndex: 3}}>
                  </Grid2>
                  <Grid2 id='bottom-left-img' size={12} sx={{backgroundColor: 'teal', height: '65%', width: '100%', zIndex: 3}}>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Paper>
      <Paper id='footer-contact' elevation={0} sx={{backgroundColor: '#062e60', width: '100vw', height: '100vh', borderRadius: '0'}}>
        <p>contact@satokie.io</p>
      </Paper>
    </Paper>
  );
}
