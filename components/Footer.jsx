import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from 'next/image'
import Link from 'next/link';
const Footer = ({ isMobile }) => (
  <Box display='flex' flexDirection={ isMobile ? 'column' : 'row'} justifyContent='space-between' px={isMobile ? 3 : 14} py={ isMobile ? 2 : 8} sx={{ borderTop: '1px solid #1C1B3433' }}>
    <Box display='flex' flexDirection='column'>
      <Box justifyContent='center'>
        <Image src='/tribelogo.png' width={isMobile? 150: '242px'} height={isMobile ? '26px' : '42px'} alt='logo' />
      </Box>
      <Typography variant='body2' color='#8D8D99'>
        © 2022 My Furtribe. All rights reserved.
      </Typography>
    </Box>
    <Box display='flex' flexDirection={ isMobile ? 'column' : 'row'} flexGrow={1} justifyContent='center'>
      <Box display='flex' flexDirection='column' px={isMobile ? 1 : 4}>
        <Typography color='#1C1B34' fontWeight={600} variant='body2' mb={1}>
          Product
        </Typography>
        <Typography color='primary' fontWeight={600} variant='body'>
          <Link href='/vets'>
            How It works
          </Link>
        </Typography>
        <Typography color='primary' fontWeight={600} variant='body'>
          Story
        </Typography>
      </Box>
      <Box display='flex' flexDirection='column' px={isMobile ? 1 : 4}>
        <Typography color='#1C1B34' fontWeight={600} variant='body2' mb={1}>
          Company
        </Typography>
        <Typography color='primary' fontWeight={600} variant='body'>
          Contact us
        </Typography>
        <Typography color='primary' fontWeight={600} variant='body'>
          Become a partner
        </Typography>
        <Typography color='primary' fontWeight={600} variant='body'>
          Support
        </Typography>
      </Box>
      <Box display='flex' flexDirection='column' px={isMobile ? 1 : 4}>
        <Typography color='#1C1B34' fontWeight={600} variant='body2' mb={1}>
          Support
        </Typography>
        <Typography color='primary' fontWeight={600} variant='body'>
          Terms of Service
        </Typography>
        <Typography color='primary' fontWeight={600} variant='body'>
          Disclaimer
        </Typography>
        <Typography color='primary' fontWeight={600} variant='body'>
          Privacy Policy
        </Typography>
      </Box>
    </Box>
    <Box flexGrow={1}>
      <Typography fontWeight={600} variant='body2' mb={2}>
        Download The app
      </Typography>
      <Box>
        <Box>
          <Image />
        </Box>
        <Box>
          <Image />
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Footer