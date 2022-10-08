import Box from '@mui/material/Box'
import styled from '@emotion/styled';
import Image from 'next/image'
import { Button, Typography } from '@mui/material';
const Base = styled.div`
  background: white;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`

const Sheet = styled.div`
  position: relative;
  z-index: 555;
  width: 100%;
  display: flex;
  padding: 50px 90px
`
const Tribe = () => (
  <Base>
    <Sheet>
      <Box width='100%'>
        <Typography variant='h3' align='center'>
          Join the Tribe
        </Typography>
        <Box display='flex' justifyContent='space-around'>
          <Box>
            <Typography mt={3} mb={5} variant='h4' align='left'>
              It’s never been easier to join <br/> the millions of pet parents 
              <br/> that feed homemade  <br/> nation-wide 
            </Typography>          
            <Button variant='contained' sx={{ borderRadius: '60px'}}>Download The App</Button>
          </Box>
          <Box display='flex'>
            <Box >
              <img width='300px' src='/phone1.png' alt='iphone' />
            </Box>
            <Box>
              <img width='300px' src='/phone1.png' alt='iphone' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Sheet>
    <Box sx={{ background: '#1C1B34', color: 'white' }}>
      <Typography sx={{padding: '30px 112px'}} variant='h4'> Homemade Feeding <br /> Done Right.</Typography>
      <Box display='flex' flexDirection='row' width='100%' alignItems='center' px={10}>
        <Box flexBasis={0} flexGrow={0.5} variant='p'>
          MyFurTribe’s “Nutrition Pro” is veterinary nutritionist approved. In short, any recipe that you create using our app will be as nutritionally complete & balanced as anything you are going to find at the pet store.
        </Box>
        <Box flexGrow={1} display='flex' >
          <Box flexGrow={1} height='360px' sx={{ position: 'relative' }}>
            <Image layout='fill' src='/phone2.png' alt='iphone' />
          </Box>
          <Box flexGrow={1} height='360px' sx={{ position: 'relative' }}>
            <Image layout='fill' src='/phone2.png' alt='iphone' />
          </Box>
          <Box flexGrow={1} height='360px' sx={{ position: 'relative' }}>
            <Image layout='fill' src='/phone2.png' alt='iphone' />
          </Box>
        </Box>
      </Box>
    </Box>
  </Base>
)

export default Tribe