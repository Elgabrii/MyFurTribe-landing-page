import NavBar from '../components/Navbar'
import Box from '@mui/material/Box'
import { Divider, Typography, TextField, FormLabel, FormControl, Button } from '@mui/material'
import { styled } from '@mui/material/styles';

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
const Support = () => {
  return (
    <>
    <NavBar />
    <Box display='flex' sx={{ background: '#F8F8F9'}} justifyContent='space-around' padding={10}>
      <Box flexGrow={1} pr={5}>
        <Typography color='#5779EF' variant='h3'>
          Whether you’re an MFT partner using our dashboard, or a pet parent using our mobile app, we’re here to help! 
        </Typography>
        <Divider sx={{ color: '#5779EF', border: '7px dotted #5779EF'}} />
        <Typography color='#5779EF' variant='h5' fontWeight='700' pt={15}>
          Whether you’re an MFT partner using our dashboard, or a pet parent using our mobile app, we’re here to help! 
        </Typography>
      </Box>
      <Box flexGrow={1}>
        <Box width='624px' sx={{ background: '#1C1B34', borderRadius: '16px'}} padding='40px'>
          <Typography color='white' fontSize='26px' fontWeight='700' mb={3} align='center'>
            Support Request
          </Typography>
          <FormControl fullWidth>
            <Box display='flex' flexDiretion='row' >
              <Box display='flex' flexDirection='column' flexGrow={1} pr={5} mb={3}>
                <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                  First Name
                </FormLabel>
                <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Write first name" variant="outlined" />
              </Box>
              <Box display='flex' flexDirection='column' flexGrow={1}>
                <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                  last Name
                </FormLabel>
                <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Write last name" variant="outlined" />
              </Box>
            </Box>
            <Box display='flex' flexDirection='column' mb={2}>
              <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                Email
              </FormLabel>
              <StyledInputField sx={{width: '50%'}} label='example@example.com' />
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
    </>
  )
}

export default Support