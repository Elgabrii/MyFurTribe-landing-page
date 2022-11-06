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
  padding: 20px 90px;
  background-color: #1C1B34;
`
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

const Tribe = () => (
  <Base>
    <Sheet>
      <Box width='100%'>
        <Typography variant='h3' align='center' fontWeight='bold' mb={1}>
          Join the Tribe
        </Typography>
        <Box display='flex' justifyContent='space-around'>
          <Box flexBasis={0} flexGrow={1}> 
            <Typography mt={3} mb={4} fontSize='3.1vw' fontWeight={600} align='left'>
              It’s never been easier to join the
                <Typography pl={1} display='inline' fontSize='3.1vw' fontWeight='600' color='primary'>
                   millions of pet parents that feed homemade  <br/>
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
          <Box display='flex' flexBasis={0} flexGrow={1} sx={{ position: 'relative', bottom: '90px'}}>
            <ImageContainer>
              <Image src='/twoiphonepets.png' layout='fill' className='image' alt='iphone' />
            </ImageContainer>
          </Box>
        </Box>
        <Box display='flex' justifyContent='space-around' pb={4} sx={{ position: 'relative', bottom: 100}}>
        <Box flexBasis={0} flexGrow={0.5} sx={{ color: 'white' }}>
          <Typography display='flex' flexDirection='column' fontSize='3vw' fontWeight='600' variant='h4'> Homemade Feeding <br /> <Typography color='primary' fontSize='inherit' fontWeight='inherit'> Done Right.</Typography></Typography>
          <Box display='flex' flexDirection='row' width='100%' alignItems='flex-start'>
            <Box variant='p' fontWeight='500'>
              MyFurTribe’s “Nutrition Pro” is veterinary nutritionist approved. In short, any recipe that you create using our app will be as nutritionally complete & balanced as anything you are going to find at the pet store.
            </Box>
          </Box>
        </Box>
        <Box flexBasis={0} flexGrow={1} display='flex'>
            <Box px={2}>
              <ImageContainer>
                <Image className='image' layout='fill' src='/phone2.png' alt='iphone' />
              </ImageContainer>
            </Box>
            <Box px={2}>
              <ImageContainer>
                <Image className='image' layout='fill' src='/phone3.png' alt='iphone' />
              </ImageContainer>
            </Box>
            <Box px={2}>
              <ImageContainer>
                <Image className='image' layout='fill' src='/phone4.png' alt='iphone' />
              </ImageContainer>
            </Box>
          </Box>
      </Box>
      </Box>
    </Sheet>
  </Base>
)

export default Tribe