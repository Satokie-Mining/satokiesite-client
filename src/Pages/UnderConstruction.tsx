import React from "react"
import {Paper, Grid2, Typography, Link, Box} from '@mui/material';



export default function UnderConstruction(): React.JSX.Element {


  return (
    <Paper  sx={{position: 'relative', flexGrow: 1, overflowX: 'hidden'}}>
      <Paper id='under-construction-1' sx={{backgroundColor: 'darkblue', width: '100vw', height: '90vh', borderRadius: '0'}}>
        <Grid2 container spacing={0} sx={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Grid2 container spacing={0}>
            <Grid2 sx={{
                width: '100vw', 
                height: '90vh', 
                overflow: 'hidden', 
                boxShadow: '0px 16px 16px rgba(0,0,0, .5)',
                backgroundColor: 'rgba(0,0,0,.3)',
                zIndex: 2}}>
                <Box sx={{ height: '100%', textAlign:'center', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                  <Typography variant='h4' color="white">404 - Pardon Our Dust - 404</Typography>
                  <Typography variant='subtitle1' color="white">This page is still under construction.</Typography>
                  <Link href='/'><Typography variant="subtitle2" color="white">Return</Typography></Link>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </Paper>
    </Paper>
  )
}