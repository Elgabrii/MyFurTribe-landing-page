import NavBar from '../components/Navbar'
import Box from '@mui/material/Box'
import { Divider, Typography, TextField, FormLabel, FormControl, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import SubscribeToNewsLetter from '../components/SubscribeToNewsLetter';
import Footer from '../components/Footer';
import SupportPageMobile from '../components/SupportPageMobile';
import { useFormik } from 'formik';
import axios from 'axios';
const StyledInputField = styled(TextField)({
  '& input': {
    color: 'white',
    outline: 'none',
  },
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
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: async(values) => {
      try {
        const req = await axios.post('https://furtrip.onrender.com/api/support-requests', {
          "first_name": values.firstName,
          "last_name": values.lastName,
          "email": values.email,
          "message": values.message,
        })
        console.log(req.data, 'form submitted!!')
      }
      catch (err) {
        console.log(err)
      }
    }
  })
  return (
    <>
    <Box className='activeOnDesktop'>
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
        <form onSubmit={formik.handleSubmit}>
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
                    <StyledInputField 
                      sx={{ color: 'white', borderRadius: '16px'}} 
                      InputLabelProps={{ shrink: false }}
                      label={formik.values.firstName ? '' : 'Write first name'} 
                      variant="outlined" 
                      id='firstName'
                      name='firstName'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                  </Box>
                  <Box display='flex' flexDirection='column' flexGrow={1}>
                    <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                      last Name
                    </FormLabel>
                    <StyledInputField 
                      sx={{ color: 'white', borderRadius: '16px'}} 
                      label={formik.values.lastName ? '' : 'Write last name'}
                      variant="outlined" 
                      id='lastName'
                      name='lastName'
                      InputLabelProps={{ shrink: false }}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                  </Box>
                </Box>
                <Box display='flex' flexDirection='column' mb={2}>
                <FormControl fullWidth></FormControl>
                  <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    Email
                  </FormLabel>
                  <StyledInputField 
                    sx={{color: 'white', width: '50%'}}
                    id='email'
                    name='email'
                    label={formik.values.email ? '' : 'Write email'}
                    InputLabelProps={{ shrink: false }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type='email' 
                    variant="outlined"                    
                  />
                </Box>
                <Box display='flex' flexDirection='column'>
                  <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    Message
                  </FormLabel>
                  <StyledInputField 
                    fullWidth
                    id='message'
                    name='message'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    label={formik.values.message ? '' : 'Please tell us how we can help!'}
                  />
                </Box>
                <Box display='flex' justifyContent='center' mt={5}>
                <Button type='submit' variant='contained' sx={{ borderRadius: '16px', fontSize: '16px', width: '140px' }}>
                  Submit
                </Button>
                </Box>
              </FormControl>
            </Box>
          </Box>
        </form>
      </Box>
      <SubscribeToNewsLetter />
      <Footer />
    </Box>
    <Box className='activeOnMobile'>
    <NavBar isMobile/>
    <Box display='flex' flexDirection='column' sx={{ background: '#F8F8F9'}} justifyContent='space-around' padding={2}>
        <Box p={2}>
          <Typography color='#5779EF' variant='h3'>
            Whether you’re an MFT partner using our dashboard, or a pet parent using our mobile app, we’re here to help! 
          </Typography>
          <Divider sx={{ color: '#5779EF', border: '7px dotted #5779EF'}} />
          <Typography color='#5779EF' variant='h5' fontWeight='700' pt={5}>
            Whether you’re an MFT partner using our dashboard, or a pet parent using our mobile app, we’re here to help! 
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box >
            <Box width='100%' sx={{ background: '#1C1B34', borderRadius: '16px'}} padding='40px'>
              <Typography color='white' fontSize='26px' fontWeight='700' mb={3} align='center'>
                Support Request
              </Typography>
              <FormControl fullWidth>
                <Box display='flex' flexDirection='column' mb={2}>
                  <Box display='flex' flexDirection='column' mb={3}>
                    <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                      First Name
                    </FormLabel>
                    <StyledInputField 
                      sx={{ color: 'white', borderRadius: '16px'}} 
                      InputLabelProps={{ shrink: false }}
                      label={formik.values.firstName ? '' : 'Write first name'} 
                      variant="outlined" 
                      id='firstName'
                      name='firstName'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                  </Box>
                  <Box display='flex' flexDirection='column'>
                    <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                      last Name
                    </FormLabel>
                    <StyledInputField 
                      sx={{ color: 'white', borderRadius: '16px'}} 
                      label={formik.values.lastName ? '' : 'Write last name'}
                      variant="outlined" 
                      id='lastName'
                      name='lastName'
                      InputLabelProps={{ shrink: false }}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                  </Box>
                </Box>
                <Box display='flex' flexDirection='column' mb={2}>
                <FormControl fullWidth></FormControl>
                  <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    Email
                  </FormLabel>
                  <StyledInputField 
                    sx={{color: 'white'}}
                    id='email'
                    name='email'
                    label={formik.values.email ? '' : 'Write email'}
                    InputLabelProps={{ shrink: false }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type='email' 
                    variant="outlined"                    
                  />
                </Box>
                <Box display='flex' flexDirection='column'>
                  <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    Message
                  </FormLabel>
                  <StyledInputField 
                    fullWidth
                    id='message'
                    name='message'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    label={formik.values.message ? '' : 'Please tell us how we can help!'}
                  />
                </Box>
                <Box display='flex' justifyContent='center' mt={5}>
                <Button type='submit' variant='contained' sx={{ borderRadius: '16px', fontSize: '16px', width: '140px' }}>
                  Submit
                </Button>
                </Box>
              </FormControl>
            </Box>
          </Box>
        </form>
        <SubscribeToNewsLetter isMobile />
      </Box>
      <Footer isMobile />
    </Box>
    </>
  )
}

export default Support