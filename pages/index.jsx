import Box from '@mui/material/Box';
import Partners from '../components/Partners';
import Tribe from '../components/Tribe';
import styled from '@emotion/styled';
import NavBar from '../components/Navbar';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import Vision from '../components/Vision'
import FAQs from '../components/FAQs'
import SubscribeToNewsLetter from '../components/SubscribeToNewsLetter';
import Footer from '../components/Footer';
import HomePageMobile from '../components/HomePageMobile';
import { Button, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const HomeBanner = styled.div`
  background-image:  url('/homepage-background.png');
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`

export const DashedBox = styled.div`
  display: flex;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%235466F9FF' stroke-width='4' stroke-dasharray='22' stroke-dashoffset='9' stroke-linecap='square'/%3e%3c/svg%3e");
  padding: 26px;
  border-radius: 20px;
  ${props => (props.isMobile ? `
    flex-direction: column;
    align-items: center;
  ` : `
    max-width: 75%;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%235466F9FF' stroke-width='4' stroke-dasharray='22' stroke-dashoffset='9' stroke-linecap='square'/%3e%3c/svg%3e");
  `)}
`

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 1024px')
  return isMobile ? <HomePageMobile /> :
  <Box width='100%'>
    <Box width='inherit'>
      <NavBar />
      <HomeBanner>
        <Box display='flex' flexDirection='column' px={13.5} width='70%' height='800px' justifyContent='center'>
          <Typography variant='h3' color='primary' fontWeight='bold'>Simplified Pet Nutrition</Typography>
          <Typography variant='h6' color='black' fontWeight='500' mb={8}>
            AI-Powered personalized pet nutrition, approved by leading <br /> 
            veterinarians & veterinary nutritionists
          </Typography>
          <DashedBox display='flex' width='70%' p={2} justifyContent='space-evenly' sx={{ }}>
            <Typography flexBasis={0} flexGrow={1} variant='body' color='primary' fontWeight='600' pr={0.5}>
              95% of online pet recipes aren’t nutritionally balanced, we’re putting an end to them once and for all. 
            </Typography>
            <Button variant='contained' sx={{ flexGrow: 0.8, flexBasis: 0, borderRadius: 60, textTransform: 'capitalize', margin: 1, fontWeight: 600, fontFamily: 'Hellix' }}>
              Download The App
            </Button>
          </DashedBox>
        </Box>
      </HomeBanner>
      <Partners />
      <Tribe />
      <Features />
      <Statistics />
      <Vision />
      <FAQs />
      <SubscribeToNewsLetter />
      <Footer />
    </Box>
  </Box>
}