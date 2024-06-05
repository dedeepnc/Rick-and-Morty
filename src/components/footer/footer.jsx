import React from 'react';
import { Grid, Box } from '@mui/material';
import Link from 'next/link';
import styles from './Footer.module.scss';

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
          position: 'relative', // Added to position the text link
        }}
      >
        <Link href="/" passHref legacyBehavior>
          <a className={styles.logo}>Rick and Morty</a>
        </Link>
        <p>created with &hearts; by Dedee Phonnatcha &copy; 2024</p>
      </Box>
    </Grid>
  );
}

export default Footer;
