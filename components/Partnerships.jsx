import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Image from 'next/image'
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const PartnershipBanner = styled.div`
  background-image: url('/PartnershipBanner.png');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
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

const Partnerships = ({ isMobile }) => {
  const theme = useTheme()
  return !isMobile ? <Box>
    <PartnershipBanner>
      <Box px={9} pb={12} display='flex' width='100%' justifyContent='center' alignItems='center' flexDirection='column' pt={14}>
        <Button 
          variant='contained' 
          color='secondary'
          sx={{
            borderRadius: '60px',
            px: 5,
            py: 2,
            fontSize: '1rem'
          }}
          >
          Take The First Step
        </Button>
        <Typography variant='h4' align='center' mt={8} fontWeight={700}>
          Partner with MyFurTribe and add $12K+ to your bottom-line annually*
        </Typography>
        <Box display='flex' width='100%' flexDirection='row' justifyContent='space-between' mt={2}>
          <Box display='flex' flexDirection='column' justifyContent='flex-end' flexBasis={0} flexGrow={1} px={3}>
            <ImageContainer>
              <Image src='/an4.png' className='image' layout='fill' alt='pet-image' />
            </ImageContainer>
          </Box>
          <Box display='flex' flexDirection='column' justifyContent='flex-end' flexBasis={0} flexGrow={1} px={3}>
            <ImageContainer>
              <Image src='/an2.png' className='image' layout='fill' alt='pet-image' />
            </ImageContainer>
          </Box>
          <Box display='flex' flexDirection='column' justifyContent='flex-end' flexBasis={0} flexGrow={1} px={3}>
            <ImageContainer>
              <Image src='/an3.png' className='image' layout='fill' alt='pet-image' />
            </ImageContainer>
          </Box>
        </Box>
        <Box display='flex' width='100%' flexDirection='row' justifyContent='space-between' mt={2}>
          <Box flexBasis={0} flexGrow={1}>
            <Typography align='center' variant='h5' fontWeight={700}>
              1. Sign Up
            </Typography>
          </Box>
          <Box flexBasis={0} flexGrow={1}>
            <Typography align='center' variant='h5' fontWeight={700}>
              2. Promote the app to your clients via email & in-clinic
            </Typography>
          </Box>
          <Box flexBasis={0} flexGrow={1}>
            <Typography align='center' variant='h5' fontWeight={700}>
              3. Make a generous commission on every sale
            </Typography>
          </Box>
        </Box>
      </Box>
    </PartnershipBanner>
  </Box>
  :
  <Box py={4} px={2}>
    <Typography variant='h5' fontWeight={700} align='center'>
      Partner with MyFurTribe and add $12K+ to your bottom-line annually*
    </Typography>
    <Box display='flex' width='100%' flexDirection='column' mt={2}>
      <Box display='flex' flexDirection='column' justifyContent='flex-end' flexBasis={0} flexGrow={1} px={3}>
        <ImageContainer>
          <Image src='/an4.png' className='image' layout='fill' alt='pet-image' />
        </ImageContainer>
        <Typography variant='h5' align='center' mt={2} fontWeight={600}>
          1. Sign Up
        </Typography>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='flex-end' flexBasis={0} flexGrow={1} px={3}>
        <ImageContainer>
          <Image src='/an2.png' className='image' layout='fill' alt='pet-image' />
        </ImageContainer>
        <Typography variant='h5' align='center' mt={2} fontWeight={600}>
          2. Promote the app to your clients via email & in-clinic
        </Typography>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='flex-end' flexBasis={0} flexGrow={1} px={3}>
        <ImageContainer>
          <Image src='/an3.png' className='image' layout='fill' alt='pet-image' />
        </ImageContainer>
        <Typography variant='h5' align='center' mt={2} fontWeight={600}>
          3. Make a generous commission on every sale
        </Typography>
      </Box>
    </Box>
  </Box>
}

export default Partnerships