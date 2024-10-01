import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import XIcon from '@mui/icons-material/X';
import Icon from '@mui/material/Icon';
import videoUrl from './tour.mp4'


const VideoItem = () => <video style={{width: '100vw'}} autoPlay loop muted><source src={videoUrl} type='video/mp4' /></video>

export default function App() {
  return (
    <Paper  sx={{position: 'relative', flexGrow: 1, overflowX: 'hidden'}}>
      <Paper sx={{backgroundColor: 'black', width: '100vw', height: '90vh', borderRadius: '0'}}>
        <Grid2 container spacing={0} sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Grid2 size={6} sx={{display: 'flex', justifyContent:' flex-end', position: 'absolute', zIndex: 2, margin: '2.0rem'}}>
            <Link sx={{margin: '1.2rem', color: 'white', textDecoration: 'none'}}><Typography variant='h5'>About</Typography></Link>
            <Link sx={{margin: '1.2rem', color: 'white', textDecoration: 'none'}}><Typography variant='h5'>Services</Typography></Link>
            <Link sx={{margin: '1.2rem', color: 'white', textDecoration: 'none'}}><Typography variant='h5'>Satokie Midstream</Typography></Link>
            <Link sx={{margin: '1.2rem', color: 'white', textDecoration: 'none'}}><Typography variant='h5'>FAQ</Typography></Link>
            <Link sx={{margin: '1.2rem', color: 'white', textDecoration: 'none'}}><Typography variant='h5'>Contact</Typography></Link>
            <XIcon sx={{margin: '1.2rem', color: 'white'}}/>
            <Icon></Icon>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={0} sx={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Grid2 size={10} sx={{border: 'red solid 1px', padding: '1.0rem', position: 'absolute'}}>
            <Typography variant='h1' sx={{color: 'white', textAlign: 'center'}}>
              Satokie
            </Typography>
            <Typography variant='h1'gutterBottom={true} sx={{color: 'white', textAlign: 'center'}}>
              Mining
            </Typography>
          </Grid2>
          <Grid2 container spacing={0}>
            <Grid2 sx={{width: '100vw', height: '90vh', border: 'green solid 1px', overflow: 'hidden'}}>
              <VideoItem />
            </Grid2>
          </Grid2>
        </Grid2>
      </Paper>
      <Paper sx={{backgroundColor: 'blue', width: '100vw', height: '100vh', borderRadius: '0'}}>

      </Paper>
    </Paper>
  );
}
