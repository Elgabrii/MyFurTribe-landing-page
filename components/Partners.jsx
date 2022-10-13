import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import styled from '@emotion/styled';

const Base = styled.div`
  position:relative;
  padding: 68px 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F9FAFB;
`

const Container = styled.div`
  width: 100%;
  padding: 24px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ImageContainer= styled.div`
  flex-basis: 100%;
  // background: green;
  // border: 1px solid;
  padding: 0px 20px;
`
const Partners = ({ isMobile }) => (
  !isMobile ?
  <Base padding='68px 10px' display='flex' flexDirection="column" alignItems="center">
      <Typography justifyContent='center' variant='h3'>Our Partners</Typography>
    <Container >
      <ImageContainer>
        <Image width="100%" height='40px' src='/amazon.png' alt='amazon'/>
      </ImageContainer>
      <ImageContainer>
        <Image width="100%" height='40px' src='/walmart.png' alt='walmart' />
      </ImageContainer>
      <ImageContainer>
        <Image width="100%" height='100px' src='/rawfeedmiami.png' alt='rawfeedmiami' />
      </ImageContainer>
      <ImageContainer>
        <Image width="100%" height='80px' src='/HareToday.png' alt='haretoday' />
      </ImageContainer>
    </Container>
  </Base>
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
    <Image width={300} height={71} src='/walmart.png' alt='amazon'/>
    <Box display='flex' flexDirection='row' alignItems='center'>
      <Image width={200} height={206} src='/rawfeedmiami.png' alt='rawfeedmiami' />
      <Image width={200} height={183} src='/HareToday.png' alt='haretoday' />
    </Box>
  </Box>
)

export default Partners