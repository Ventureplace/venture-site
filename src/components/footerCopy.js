import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FooterCopy = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
      color: '#ffffff',
    },
    palette: {
      text: {
        primary: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'green' }}>
        <Typography variant="h1" align="center" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 4 }}>HOW IT WORKS</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ffffff' }}>ECOSYSTEM</Typography>
            <Typography sx={{ color: '#ffffff' }}>We're on a mission to connect innovative startups with the best and brightest talent in the market.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ffffff' }}>EQUITY</Typography>
            <Typography sx={{ color: '#ffffff' }}>Through our platform, workers can earn equity in the companies they're helping to build and scale.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ffffff' }}>EXPERIENCE</Typography>
            <Typography sx={{ color: '#ffffff' }}>We provide a seamless experience for workers to gain valuable tech skills and build their resumes with ease.</Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default FooterCopy;
