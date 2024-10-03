import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import videoUrl from '../assets/tour.mp4';
import VideoItem from '../components/VideoItem';
import Nav from '../components/Nav';



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
      <Paper id='home-2' sx={{backgroundColor: 'blue', width: '100vw', height: '100vh', borderRadius: '0'}}>

      </Paper>
      <Paper id='home-3' sx={{backgroundColor: 'cream', width: '100vw', height: '100vh', borderRadius: '0'}}>

      </Paper>
    </Paper>
  );
}
