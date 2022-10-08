
import React from 'react';
// import {Text, Nav, Anchor, Button} from 'grommet';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Button';
// #5466F9
const NavBar = (props) => (
  <Box display='flex' height='60px' justifyContent='space-around' alignItems='center' background='white' flexDirection='row' >
    <Typography>MyFurTribe</Typography>
    <Box direction="row" justifyContent='space-around' background="brand" >
      <Link>Pet Parents</Link>
      <Link>Veterinarians</Link>
      <Link>Become A Partner</Link>
      <Link>Support</Link>
      {/* <Anchor icon={<Home />} hoverIndicator /> */}
      {/* <Anchor icon={<Notification />} hoverIndicator />
      <Anchor icon={<ChatOption />} hoverIndicator /> */}
    </Box>
    <Button>Login</Button>
  </Box>
);

export default NavBar