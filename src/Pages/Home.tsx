import React from 'react';
import Paper from '@mui/material/Paper';
import videoUrl from '../assets/tour.mp4';
import VideoItem from '../components/VideoItem';
import Nav from '../components/Nav';
import curvySection from '../assets/curvy-section.svg';
import {Box, Grid2, Typography, Link} from '@mui/material';
import rackImg from '../assets/miner-rack-sect-2.jpg';
import siteImg from '../assets/site-sect2-cropped-1.webp';
import cloudHostingSvg from '../assets/cloud-hosting.svg';
import peopleSvg from '../assets/people.svg';
import handsSvg from '../assets/hands.svg';
import terralinesSvg from '../assets/terralines.svg';
import teamImg from '../assets/team-on-site.jpg';
import racksImg from '../assets/racks-comp.jpg';
import siteRowsImg from '../assets/site-rows.jpg';
import poloImg from '../assets/polo.jpg';
import teamInspectionImg from '../assets/teamwork-inspection.webp';
import {styled } from '@mui/material/styles';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/global.css'

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
                    <img style={{objectFit: 'contain', width:'45%', height:'auto', marginBottom: '3cqh', }} src={cloudHostingSvg} alt="Cloud Hosting Image" />
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
                    <Typography 
                      textAlign='center' 
                      color='white'
                      sx={{fontSize: '1.9cqw', fontWeight: 'bold', marginBottom:'calc(.5vw + .5vh)', textWrap: 'nowrap'}}>Consulting</Typography>
                  </Box>
                  <Box sx={{width: '80%', height: 'auto'}}>
                    <Typography sx={{fontSize: '1cqw'}} textAlign='center' color='white'>Need help finding a site or structuring a power purchase agreement? We offer our team expertise to anyone looking to develop their own optimized mining facility.</Typography>
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
        <Box id='gallery-container' width={'100%'} height={'100%'} sx={{padding: '6cqw', zIndex: 1}}>
          <Grid2 container id='gallery-parent-grid' spacing={6} width={'100%'} height={'100%'} sx={{zIndex: 2}}>
              <Grid2 id='gallery-left-column'size={6}>
                <Box id='collumn-box-container' width={'100%'} height={'100%'}>
                  <Grid2 id='gallery-left-column-container' container rowSpacing={7.5} width={'100%'} height={'100%'}>
                    <Grid2 id='top-left-text' size={12} sx={{height: '30%', width:'100%', zIndex: 3}}>
                      <Box id='top-left-text-box'>
                        <Box id='top-left-text-title' sx={{marginBottom: '2cqh'}}>
                            <Typography variant='h3' sx={{fontWeight: 'bold', fontSize: '3cqw', color: '#062e60'}}>Setting the Standard for Bitcoin Mining Co-Location</Typography>
                        </Box>
                        <Box id='top-left-text-content' sx={{width: '90%'}}>
                            <Typography variant='h5' sx={{lineHeight: '4cqh', fontSize: '1.6cqw'}}>Our mission is to offer our clients the most ​trustworthy and optimized hosting ​facilities so that they no longer have to ​worry about the quality of care their ASICs ​are getting and know they are receiving ​the lowest power rates.</Typography>
                        </Box>
                      </Box>
                    </Grid2>
                    <Grid2 id='bottom-left-img' size={12} sx={{height: '70%', width: '100%', zIndex: 3}}>
                      <Box id='bottom-right-img-1' sx={{width: '100%', height: '100%'}}>
                        <img src={racksImg} loading='lazy' style={{objectFit: 'cover', width: '100%', height:'100%'}}  alt="Satokie Racks Image" />
                      </Box>
                    </Grid2>
                  </Grid2>
                </Box>
              </Grid2>
              <Grid2 id='gallery-right-column' size={6} sx={{height: '100%'}}>
              <Box id='collumn-box-container' width={'100%'} height={'100%'}>
                <Grid2 id='gallery-left-column-container' container rowSpacing={7.5} width={'100%'} height={'100%'}>
                  <Grid2 id='top-right-img' size={12} sx={{ height: '30%', width:'100%', zIndex: 3}}>
                    <Box id='bottom-left-img-container' sx={{ height: '100%', width: '100%', zIndex: 4}}>
                      <img src={teamImg} loading='lazy' style={{objectFit: 'cover', width: '100%', height:'100%'}}  alt="Satokie Team Image" />
                    </Box>
                  </Grid2>
                  <Grid2 id='bottom-right-img' size={12} sx={{ height: '70%', width: '100%', zIndex: 3}}>
                    <Box sx={{height: '100%', width: '100%'}}>
                      <Grid2 container spacing={6} id='bottom-right-img-flex-container' sx={{width: '100%', height: '100%',}}>
                          <Grid2 size={12} sx={{width: '100%', height: '47%' }}>
                            <Box id='bottom-right-img-1' sx={{width: '100%', height: '100%'}}>
                              <img src={teamInspectionImg} loading='lazy' style={{objectFit: 'cover', width: '100%', height:'100%'}}  alt="Satokie Techs Image" />
                            </Box>
                          </Grid2>
                          <Grid2 size={12} sx={{width: '100%', height: '47%'}}>
                            <Box id='bottom-right-img-2' sx={{width: '100%', height: '100%'}}>
                              <img src={siteRowsImg} loading='lazy' style={{objectFit: 'cover', width: '100%', height:'100%'}}  alt="Satokie Site Rows Image" />
                            </Box>
                          </Grid2>                        
                      </Grid2>
                    </Box>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Paper>
      <Paper id='footer-contact' elevation={0} sx={{backgroundColor: '#062e60', width: '100vw', height: '90vh', borderRadius: '0', marginTop: '2cqw', overflow: 'hidden'}}>
        <Box id='footer-img-container' sx={{width: '100%', height: '80%', position: 'relative'}}>
          <Box id='background-img' sx={{width: '100%', height: '100%', position: 'absolute'}}>
            <img src={poloImg} style={{objectFit: 'cover', height: '100%', width: '100%'}} alt="Satokie Logo on Polo Shirt" />
          </Box>
          {/* <Box id='footer-overlay' sx={{width: '100%', height: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, .3)'}}>
            <Box id='copy-box' sx={{width: '80%', height: '80%'}}>
              <Typography variant='h3' sx={{color: 'white', fontWeight: 'bold', textShadow: '0em .2em .4em rgba(250, 250, 250, 0.3) !important'}}>CONTACT US</Typography>
              <Typography variant='subtitle1' sx={{color: 'white', textShadow: '0em .2em .4em rgba(250, 250, 250, 0.3) !important'}}>BITCOIN MINING SOLUTIONS</Typography>
            </Box>
          </Box> */}
        </Box>
        <Box id='subfooter-container' sx={{height: '20%', width: '100%', position: 'relative'}}>
          <Box id='subfooter-background-img' sx={{height: '100%', width: '100%', position: 'absolute'}}>
              <img src={terralinesSvg} style={{width: '100%', height: '200%', objectFit: 'cover'}} alt="terralines background svg" />
          </Box>
          <Box id='subfooter-overlay' sx={{height: '100%', width: '90%', marginLeft: '3cqw', position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Box sx={{textAlign: 'center'}}>
              <Typography variant='h6' sx={{ fontSize: '1.5cqw', color: 'white', textShadow: '0em .4em .5em rgba(0,0,0, .8) !important', textDecoration: 'underline'}}>contact@satokiemining.io</Typography>
            </Box>
            <Box>
              <Link href="https://x.com/SatokieMining">
                <XIcon sx={{ fontSize: '1.9cqw', marginTop: 'calc(.65vw + .65vh)', marginRight: '.5cqw', marginLeft: '1.5rem', color: 'white', textDecoration: 'none', textWrap: 'nowrap'}}/>
              </Link>
              <Link href="https://www.linkedin.com/company/satokie-mining">
                <LinkedInIcon sx={{ fontSize: '2cqw', marginTop: '1cqh', color: 'white', textDecoration: 'none', textWrap: 'nowrap'}} />
              </Link> 
            </Box>
          </Box>
        </Box>
      </Paper>
    </Paper>
  );
}
