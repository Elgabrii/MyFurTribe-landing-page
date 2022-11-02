
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Button';
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import NavbarMobile from './NavbarMobile';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  > span {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

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
  <Box display='flex'>
    <ImageContainer justifyContent='center'>
      <Image src='/tribelogo.png' className='image' height={0} width={180} alt='logo' />
    </ImageContainer>
  </Box>
  <Box direction="row" justifyContent='space-between' alignSelf='center' pl={2} >
    <NextLink href='/' passHref>
      <a>
        <Link component='text' fontWeight='500' pr={4} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>
          Pet Parent
        </Link>
      </a>
    </NextLink>
    <NextLink href='/vets' passHref>
      <a>
        Veterinarians
      </a>
    </NextLink>
    <NextLink href='/become-partner' passHref>
      <a>
        <Link component='text' fontWeight='500' pr={4} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>
          Become A Partner
        </Link>
      </a>
    </NextLink>
    <NextLink href='/support' passHref>
      <a>
        <Link component='text' fontWeight='500' pr={4} underline='none' sx={{ cursor: 'pointer', color: 'black', '&: hover': { color: theme?.palette?.primary?.main} }} variant='body'>
          Support
        </Link>
      </a>
    </NextLink>
  </Box>
  <Button variant='contained' sx={{
    minWidth: '128px',
    height: '40px',
    borderRadius: 50,
    padding: '8px 46px',
    alignSelf: 'flex-end',
    flexBasis: 0,
    // flexGrow: 0,
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