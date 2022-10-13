import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { DashedBox } from '../pages/index';
import NavBar from './Navbar';
import Partners from './Partners';
import TribeMobile from './TribeMobile';
import FeaturesMobile from './FeaturesMobile';
import StatisticsMobile from './StatisticsMobile';
import VisionMobile from './VisionMobile';
import FAQs from './FAQs';
import SubscribeToNewsLetter from './SubscribeToNewsLetter';
const HomePageMobile = () => {
  return <Box width='100%'>
    <Box>
      <NavBar isMobile/>
      <Box display='flex' flexDirection='column' px={3} py={2} justifyContent='center'>
        <Typography variant='h4' color='primary' fontWeight='bold' align='center'>Simplified Pet Nutrition</Typography>
        <Typography variant='h6' color='black' fontWeight='500' mb={8} align='center'>
          AI-Powered personalized pet nutrition, approved by leading <br /> 
          veterinarians & veterinary nutritionists
        </Typography>
        <DashedBox display='flex' isMobile>
          <Typography flexBasis={0} flexGrow={1} variant='body' color='primary' fontWeight='600' pr={0.5} align='center'>
            95% of online pet recipes aren’t nutritionally balanced, we’re putting an end to them once and for all. 
          </Typography>
          <Button variant='contained' sx={{ width: '50%', borderRadius: 60, textTransform: 'capitalize', margin: 1, fontWeight: 600, fontFamily: 'Hellix' }}>
            Download The App
          </Button>
        </DashedBox>
      </Box>
      <Partners isMobile />
      <TribeMobile />
      <FeaturesMobile />
      <StatisticsMobile />
      <VisionMobile />
      <FAQs isMobile />
      <SubscribeToNewsLetter isMobile />
    </Box>
  </Box>
}
export default HomePageMobile