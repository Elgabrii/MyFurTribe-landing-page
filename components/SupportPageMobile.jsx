import NavBar from '../components/Navbar'
import Box from '@mui/material/Box'
import { Divider, Typography, TextField, FormLabel, FormControl, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import SubscribeToNewsLetter from '../components/SubscribeToNewsLetter';
import Footer from '../components/Footer';

const StyledInputField = styled(TextField)({
  '& label': {
    // display: 'none',
    color: '#8D8D99',
  },
  '& label.Mui-focused': {
    display: 'none',
    // color: '#8D8D99',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      borderRadius: '16px',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      // border: '1px'
    },
  },
});

const SupportPageMobile = () => (
  <>
    <NavBar isMobile />
    <Box display='flex' sx={{ background: '#F8F8F9'}} flexDirection='column' py={1}>
      <Box flexGrow={1} px={2} mb={2}>
        <Typography color='#5779EF' variant='h4' fontWeight={600} align='left'>
          Whether you’re an MFT partner using our dashboard, or a pet parent using our mobile app, we’re here to help! 
        </Typography>
        <Typography color='#5779EF' variant='h5' fontWeight={500} pt={0}>
          Simply fill in a support request and we’ll be in touch ASAP
        </Typography>
      </Box>
      <Box flexGrow={1}>
        <Box width='100%' flexDirection='column' sx={{ background: '#1C1B34', borderRadius: '16px'}} padding='40px'>
          <Typography color='white' fontSize='26px' fontWeight='700' mb={3} align='center'>
            Support Request
          </Typography>
          <FormControl fullWidth>
            <Box display='flex' flexDirection='column' flexGrow={1} mb={3}>
              <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                First Name
              </FormLabel>
              <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Write first name" variant="outlined" />
            </Box>
            <Box display='flex' flexDirection='column' flexGrow={1} mb={2}>
              <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                last Name
              </FormLabel>
              <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Write last name" variant="outlined" />
            </Box>
            <Box display='flex' flexDirection='column' flexGrow={1} mb={2}>
              <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                Email
              </FormLabel>
              <StyledInputField label='example@example.com' />
            </Box>
            <Box display='flex' flexDirection='column'>
              <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                Message
              </FormLabel>
              <StyledInputField fullWidth label='example@example.com' />
            </Box>
            <Box display='flex' justifyContent='center' mt={5}>
            <Button variant='contained' sx={{ borderRadius: '16px', fontSize: '16px', width: '140px' }}>
              Submit
            </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
    <SubscribeToNewsLetter isMobile />
    {/* <Footer /> */}
  </>
)

export default SupportPageMobile