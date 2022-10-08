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
const Partners = () => (
  <Base padding='68px 10px' display='flex' flexDirection="column" alignItems="center">
      <Typography justifyContent='center' variant='h3'>Our Partners</Typography>
    <Container >
      <ImageContainer>
        {/* hello */}
        <Image width="100%" height='40px' src='/amazon.png' alt='amazon'/>
      </ImageContainer>
      <ImageContainer>
        {/* tesss */}
        <Image width="100%" height='40px' src='/walmart.png' alt='walmart' />
      </ImageContainer>
      <ImageContainer>
        {/* owaww */}
        <Image width="100%" height='100px' src='/rawfeedmiami.png' alt='rawfeedmiami' />
      </ImageContainer>
      <ImageContainer>
        {/* bla */}
        <Image width="100%" height='80px' src='/HareToday.png' alt='haretoday' />
      </ImageContainer>
    </Container>
  </Base>
)

export default Partners