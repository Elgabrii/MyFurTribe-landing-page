import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AddIcon from '@mui/icons-material/Add';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import Image from 'next/image';
import styled from '@emotion/styled'

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

const FeaturesMobile = () => {
  const theme = useTheme()
 return <Box py={2} sx={{ backgroundImage: "url('/2.png')", backgroundSize:'cover', backgroundPosition: 'top'}}>
  <Box width='100%' display='flex' justifyContent='center'>
    <Box width='60%'>
      <ImageContainer>
        <Image src='/phone2.png' layout='fill' className='image' alt='iphone' />
      </ImageContainer>
    </Box>
  </Box>
  <Box width='100%' display='flex' justifyContent='center'>
    <Box width='60%'>
      <ImageContainer>
        <Image src='/phone3.png' layout='fill' className='image' alt='iphone' />
      </ImageContainer>
    </Box>
  </Box>
  <Box width='100%' display='flex' justifyContent='center'>
    <Box width='60%'>
      <ImageContainer>
        <Image src='/phone4.png' layout='fill' className='image' alt='iphone' />
      </ImageContainer>
    </Box>
  </Box>
  <Typography fontSize={24} fontWeight='600' align='center' color={theme.palette.primary.main}>Get Access To <span style={{ color: 'black'}}>AI-Powered</span> Pet Nutrition</Typography>
  <Box p={1}>
    <Box display='flex' alignItems='start' py={2}>
      <SmartphoneIcon sx={{ fontSize: 40, marginRight: 1.5 }} color='primary' />
      <Typography variant='body1' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
        Create unlimited nutritionally balanced recipes tailored to your pet’s individual needs
      </Typography>
    </Box>
    <Box display='flex' alignItems='center' py={2}>
      <TurnedInNotIcon sx={{ fontSize: 40, marginRight: 1.5 }} color='primary' />
      <Typography variant='body1' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
      Save your favourite recipes in-app
      </Typography>
    </Box>
    <Box display='flex' alignItems='start' py={2}>
      <TextSnippetIcon sx={{ fontSize: 40, marginRight: 1.5 }} color='primary' />
      <Typography variant='body1' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
        View recipe nutrients against AAFCO & FEDIAF standards
      </Typography>
    </Box>
    <Box display='flex' alignItems='center' py={2}>
      <AddIcon sx={{ fontSize: 40, marginRight: 1.5 }} color='primary' />
      <Typography variant='body1' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
        Instantly substitute ingredients from our database
      </Typography>
    </Box>
    <Box display='flex' alignItems='start' py={2}>
      <TakeoutDiningIcon sx={{ fontSize: 40, marginRight: 1.5 }} color='primary' />
      <Typography variant='body1' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
        Get personalized instructions to easily create your recipe
      </Typography>
    </Box>
  </Box>
  <Box flexGrow={1} display='flex' flexDirection='column'>
    <Typography variant='h5' color='primary' mb={4} align='center' fontWeight='600'>
      MyFurTribe Mobile App
    </Typography>
    <iframe src="https://www.youtube.com/embed/HJ8wydj3m6s" height={250} ></iframe>
    </Box>
</Box>
}

export default FeaturesMobile