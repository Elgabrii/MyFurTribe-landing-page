import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled'
import Image from 'next/image'
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

const TribeMobile = () => (
  <Box>
    <Box px={3} py={2} sx={{ backgroundImage: "url('/1.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Typography variant='h4' align='center' fontWeight='bold' mb={1}>
        Join the Tribe
      </Typography>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography mt={3} mb={4} fontSize='24px' fontWeight='600' align='center'>
          It’s never been easier to join the
            <Typography pl={1} mr={1} display='inline' fontSize='24px' fontWeight='600' color='primary'>
                millions of pet parents 
            that feed homemade
            </Typography>
            nation-wide 
        </Typography>          
        <Button 
          variant='contained' 
          size='small'
          sx={{ 
            borderRadius: '60px', 
            fontFamily: 'Hellix', 
            padding: '8px 40px',
            fontSize: 14,
            textTransform: 'capitalize',
            width: '50%'
          }}
          >Download The App</Button>
          <Box>
            <ImageContainer>
              <Image src='/twoiphonepets.png' layout='fill' className='image' alt='iphone' />
            </ImageContainer>
          </Box>
      </Box>
    </Box>
    <Box py={2} px={3} display='flex' alignItems='center' flexDirection='column' sx={{ background: '#1C1B34'}}>
        <Typography color='white' variant='h5'>
          Homemade Feeding
        </Typography>
        <Typography color='primary' variant='h5'>
          Done Right.
        </Typography>
        <Typography color='white' variant='body1' pt={2} mb={3} fontWeight={500} align='center'>
          MyFurTribe’s “Nutrition Pro” is veterinary nutritionist approved. In short, any recipe that you create using our app will be as nutritionally complete & balanced as anything you&apos;re going to find at the pet store.
        </Typography>
        <Button 
          variant='contained' 
          size='small'
          sx={{ 
            borderRadius: '60px', 
            fontFamily: 'Hellix', 
            padding: '8px 40px',
            fontSize: 14,
            textTransform: 'capitalize' 
          }}
          >Download The App</Button>
    </Box>
  </Box>

)

export default TribeMobile