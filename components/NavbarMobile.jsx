import { useState } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import NextLink from 'next/link'
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const NavigationMenuMobile = () => {
  const theme = useTheme()
  return <Box 
  width='100%' 
  display='flex' 
  flexDirection='column' 
  height='100vh' 
  sx={{ position: 'absolute', top: 60 , background: 'white', zIndex: 999 }}
  >
    <NextLink href='/' passHref legacyBehavior>
      <Link component='text' fontWeight='500' align='center' py={2} underline='none' sx={{ cursor: 'pointer', color: theme?.palette?.primary?.main}} variant='body'>Pet Parent</Link>
    </NextLink>
    <NextLink href='/vets'  passHref legacyBehavior>
      <Link component='text' fontWeight='500' align='center' py={2} underline='none' sx={{ cursor: 'pointer', color: theme?.palette?.primary?.main}} variant='body'>Veterinarians</Link>
    </NextLink>
    <NextLink href='/become-partner'  passHref legacyBehavior>
      <Link component='text' fontWeight='500' align='center' py={2} underline='none' sx={{ cursor: 'pointer', color: theme?.palette?.primary?.main}} variant='body'>Become A Partner</Link>
    </NextLink>
    <NextLink href='/support' passHref legacyBehavior>
      <Link component='text' fontWeight='500' align='center' py={2} underline='none' sx={{ cursor: 'pointer', color: theme?.palette?.primary?.main}} variant='body'>Support</Link>
    </NextLink>
</Box>
}

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return <Box
    height={60}
    width='100%'
    display='flex'
    flexDirection='row'
    justifyContent='space-between'
    alignItems='center'
    py={1}
    px={1}
    sx={{
      borderBottom: '1px solid #1C1B3433',
      position: 'relative',
      zIndex: 999,
    }}
  >
    <Box>
      <Image src='/tribelogo.png' width='160px' height='30px' alt='logo' />
    </Box>
    <Button onClick={toggleMenu}>
      {
        isMenuOpen ? <CloseIcon /> : <MenuIcon fontSize='large' />
      }
    </Button>
    {
      isMenuOpen && <NavigationMenuMobile />
    }
  </Box>
}

export default NavBarMobile