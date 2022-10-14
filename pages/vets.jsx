import NavBar from "../components/Navbar"
import MyFurTribeFeatures from "../components/MyFurTribeFeatures"
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { Button, Typography } from "@mui/material";
import FAQs from "../components/FAQs";
import SubscribeToNewsLetter from "../components/SubscribeToNewsLetter";
import Footer from "../components/Footer";
export const HomeBanner = styled.div`
  background-image: url('/vet.png');
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`

const Vets = () => <>
  <NavBar />
  <HomeBanner>
    <Box py={4} px={8} display='flex' justifyContent='flex-end' alignItems='center' width='100%' height='inherit'>
      <Box display='flex' flexDirection='column' width='50%'>
        <Typography fontSize={44} color='secondary' fontWeight={700}>
          Offer A Cutting-Edge <br/> Pet Nutrition Solution
        </Typography>
        <Typography fontSize={20} lineHeight={1.3} color='secondary' fontWeight={600}>
          Effortlessly boost practice revenue and help devoted pet parents with a value-added service in a class of it’s own.
        </Typography>
        <Button 
          variant='contained' 
          color='secondary'
          sx={{
            fontFamily: 'Hellix',
            width: 215,
            height: 56,
            padding: '16px 40px',
            marginTop: 4,
            borderRadius: 12,
            textTransform: 'capitalize',
          }}
        >
          Take the First Step
        </Button>
      </Box>
    </Box>
  </HomeBanner>
  <MyFurTribeFeatures />
  <FAQs />
  <SubscribeToNewsLetter />
  <Footer />
</>

export default Vets