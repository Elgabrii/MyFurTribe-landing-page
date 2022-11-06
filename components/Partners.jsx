import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import styled from '@emotion/styled';


const Container = styled.div`
  width: 100%;
  // padding: 24px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content:
`
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  > span {
    position: unset !important;
    width: inherit !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`
const Partners = ({ isMobile }) => (
  !isMobile ?
  <Box padding='68px 60px' display='flex' flexDirection="column" alignItems="center" sx={{ backgroundColor: '#F9FAFB' }}>
      <Typography justifyContent='center' variant='h3' fontWeight={600}>Our Partners</Typography>
    <Container>
      <Box flexBasis={0} flexGrow={1} p={5} pt={9}>
        <ImageContainer>
          <Image className='image' layout='fill' src='/amazon.png' alt='amazon'/>
        </ImageContainer>
      </Box>
      <Box flexBasis={0} flexGrow={1.5} p={5}>
        <ImageContainer>
          <Image className='image' layout='fill' src='/instacart.png' alt='walmart'/>
        </ImageContainer>
      </Box>
      <Box flexBasis={0} flexGrow={0.5} p={5}>
        <ImageContainer>
          <Image className='image' layout='fill' src='/rawfeedmiami.png' alt='rawfeedmiami' />
        </ImageContainer>
      </Box>
      <Box flexBasis={0} flexGrow={1} p={2}>
        <ImageContainer>
          <Image className='image' layout='fill' src='/HareToday.png' alt='haretoday' />
        </ImageContainer>
      </Box>
    </Container>
  </Box>
  :
  <Box 
    width='100%'
    display='flex'
    flexDirection='column' 
    alignItems='center' 
    px={2} 
    py={3} 
    sx={{ background: '#E5E5E5'}}>  
    <Typography justifyContent='center' variant='h4' fontWeight='600' align='center' mb={4}>Our Partners</Typography>
    <Image width={300} height={107} src='/amazon.png' alt='amazon'/>
    <Image width={300} height={65} src='/instacart.png' alt='amazon'/>
    <Box display='flex' flexDirection='row' alignItems='center'>
      <Image width={200} height={206} src='/rawfeedmiami.png' alt='rawfeedmiami' />
      <Image width={200} height={150} src='/HareToday.png' alt='haretoday' />
    </Box>
  </Box>
)

export default Partners