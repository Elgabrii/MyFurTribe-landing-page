
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Button';
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import NavbarMobile from './NavbarMobile';
const NavBar = ({ isMobile }) => {
  const theme = useTheme()
  return !isMobile? <Box 
  display='flex' 
  justifyContent='space-between' 
  width='100%'
  flexDirection='row'
  alignItems='center'  
  px='64px'
  py='21px'
  sx={{ position: 'absolute', width: '100%', background: 'white' }}
>
  <Box justifyContent='center'>
    <Image src='/tribelogo.png' width='210px' height='40px' alt='logo' />
  </Box>
  <Box direction="row" justifyContent='space-around' alignSelf='center' >
    <NextLink href='/'>
      <Link component='text' fontWeight='500' pr={8} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>Pet Parent</Link>
    </NextLink>
    <NextLink href='/vets'>
      <Link component='text' fontWeight='500' pr={8} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>Veterinarians</Link>
    </NextLink>
    <NextLink href='/become-partner'>
      <Link component='text' fontWeight='500' pr={8} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>Become A Partner</Link>
    </NextLink>
    <NextLink href='/support'>
      <Link component='text' fontWeight='500' pr={8} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>Support</Link>
    </NextLink>
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
:
<NavbarMobile />
}

export default NavBar