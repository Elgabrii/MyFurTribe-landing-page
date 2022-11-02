import Box from '@mui/material/Box';
import NavBar from './Navbar';
import { Button, Typography } from "@mui/material";
import FAQs from './FAQs';
import SubscribeToNewsLetter from './SubscribeToNewsLetter';
import MyFurTribeFeatures from './MyFurTribeFeatures';
import Partnerships from './Partnerships';
import Demo from './Demo';
import Footer from "../components/Footer";

const VetsPageMobile = () => (
  <Box>
    <NavBar isMobile/>
    <Box py={4} width='100%' display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='h4' align='center' fontWeight={700}>
        Offer A Cutting-Edge Pet Nutrition Solution
      </Typography>
      <Typography variant='body1' align='center' fontWeight={500} mt={2}>
        Effortlessly boost practice revenue and help devoted pet parents with a value-added service in a class of it’s own.
      </Typography>
      <Button 
        variant='contained' 
        color='secondary'
        sx={{
          fontFamily: 'Hellix',
          textTransform: 'capitalize',
          fontWeight: 600,
          borderRadius: 16,
          px:3,
          py:1,
          mt:3,
        }}
        >
        Take The First Step
      </Button>
    </Box>
    <MyFurTribeFeatures isMobile />
    <Partnerships isMobile />
    <Demo isMobile />
    <FAQs isMobile />
    <SubscribeToNewsLetter isMobile />
    <Footer isMobile />
  </Box>
)

export default VetsPageMobile