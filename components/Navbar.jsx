
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Button';
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';

const NavBar = (props) => {
  const theme = useTheme()
  return <Box 
    display='flex' 
    height='60px' 
    justifyContent='space-between' 
    width='100%'
    flexDirection='row'
    alignItems='center'  
    px='64px'
    pt='24px'
    sx={{ position: 'absolute', width: '100%' }}
  >
    <Box justifyContent='center'>
      <Image src='/tribelogo.png' width='210px' height='40px' alt='logo' />
    </Box>
    <Box direction="row" justifyContent='space-around' alignSelf='center' >
      <Link component='text' fontWeight='500' pr={8} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>Pet Parent</Link>
      <Link component='text' fontWeight='500' pr={8} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>Veterinarians</Link>
      <Link component='text' fontWeight='500' pr={8} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>Become A Partner</Link>
      <Link component='text' fontWeight='500' pr={8} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>Support</Link>
    </Box>
    <Button variant='contained' sx={{
      minWidth: '128px',
      height: '40px',
      borderRadius: 50,
      padding: '8px 46px',
      alignSelf: 'flex-end'
    }}>
      <Typography variant='h4' sx={{ fontsize: 14, textTransform: 'capitalize', fontFamily: 'Hellix' }} color='inherit'>
        Login
      </Typography>
    </Button>
  </Box>
}

export default NavBar