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
  background-image:  url('/2-3-4.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 90px;
`
const Tribe = () => (
  <Base>
    <Sheet>
      <Box width='100%'>
        <Typography variant='h3' align='center' fontWeight='bold' mb={1}>
          Join the Tribe
        </Typography>
        <Box display='flex' justifyContent='space-around'>
          <Box>
            <Typography mt={3} mb={4} fontSize='48px' fontWeight='600' align='left'>
              It’s never been easier to join <br/>the
                <Typography pl={1} display='inline' fontSize='48px' fontWeight='600' color='primary'>
                   millions of pet parents 
                <br/> that feed homemade  <br/>
                </Typography>
               nation-wide 
            </Typography>          
            <Button 
              variant='contained' 
              sx={{ 
                borderRadius: '60px', 
                fontFamily: 'Hellix', 
                padding: '16px 40px',
                fontSize: 16,
                textTransform: 'capitalize' 
              }}>Download The App</Button>
          </Box>
          <Box display='flex'>
            <Box >
              <Image width={500} height={600} src='/twoiphonepets.png' alt='iphone' />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display='flex' justifyContent='space-around'>
        <Box flexBasis={0} flexGrow={1} sx={{ color: 'white' }}>
          <Typography display='flex' flexDirection='column' sx={{padding: '30px', paddingTop: 0}} fontSize='42px' fontWeight='600' variant='h4'> Homemade Feeding <br /> <Typography color='primary' fontSize='inherit' fontWeight='inherit'> Done Right.</Typography></Typography>
          <Box display='flex' flexDirection='row' width='100%' alignItems='flex-start'>
            <Box variant='p' fontWeight='500'>
              MyFurTribe’s “Nutrition Pro” is veterinary nutritionist approved. In short, any recipe that you create using our app will be as nutritionally complete & balanced as anything you are going to find at the pet store.
            </Box>
          </Box>
        </Box>
        <Box flexGrow={0} display='flex' >
            <Box px={2}>
              <Image width='224' height='445' src='/phone2.png' alt='iphone' />
            </Box>
            <Box px={2}>
              <Image width='224' height='445' src='/phone2.png' alt='iphone' />
            </Box>
            <Box px={2}>
              <Image width='224' height='445' src='/phone2.png' alt='iphone' />
            </Box>
          </Box>
      </Box>
    </Sheet>
  </Base>
)

export default Tribe