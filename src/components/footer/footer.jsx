import React from 'react';
import { Grid, Box } from '@mui/material';

function Footer() {
  return (
    <Grid item>
      <Box
        component={'footer'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        py={'1.5rem'}
        sx={{
          opacity: 0.7,
          width: '100%',
          padding: '10px 0',
          textAlign: 'center',
        }}
      >
        <p>created with &hearts; by Dedee Phonnatcha &copy; 2024</p>
      </Box>
    </Grid>
  );
}

export default Footer;