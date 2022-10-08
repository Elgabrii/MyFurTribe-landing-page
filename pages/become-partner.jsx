import NavBar from "../components/Navbar";
import PartnerForm from "../components/PartnerForm";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
export default function BecomePartner() {
  return <> 
    <NavBar />
    <Box display='flex' sx={{ backgroundColor: '#F8F8F9' }} justifyContent='space-around' pt={10}>
      <Box display='flex' flexDirection='column' >
        <Typography variant="h4" alignSelf='center' >
          How it Works
        </Typography>
        <Typography py={3} alignSelf='flex-start' variant="h4" color='#5466F9'>
          1. Enter your information
        </Typography>
        <Typography py={3} alignSelf='flex-start' variant="h4" color='#5466F9'>
          2. Take Our Quick Demo + Onboarding
        </Typography>
        <Typography py={3} alignSelf='flex-start' variant="h4" color='#5466F9'>
          3. Get Started!
        </Typography>
      </Box>
      <Box justifyContent='center'>
          <PartnerForm />
        {/* <Typography>
        </Typography> */}
      </Box>
    </Box>
  </>
}