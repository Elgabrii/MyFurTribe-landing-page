import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select';
import { FormControl, MenuItem, InputLabel, FormLabel, TextField, Button } from '@mui/material';
import {useState} from 'react';
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

const PartnerForm = () => {
  const [age, setAge] = useState('');
  
  return (
    <Box width='624px' borderRadius='16px' sx={{ background: '#1C1B34'}} padding='40px'>
      <Typography color='white' fontSize='26px' fontWeight='700' mb={3}>
        Request a 10 minute demo to see just how easily we can add value to your practice!
      </Typography>
      <Typography fontSize='14px' mb={1} color='white'>
        I am a...
      </Typography>
      <FormControl fullWidth>
        <InputLabel sx={{ color: 'white '}} id="demo-simple-select-label">
          Employee/Owner of a veterinary practice
        </InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={() => {}}
          sx={{color : 'white', 
            width: '100%', 
            borderRadius: '16px', 
            border: '1px solid white',
            marginBottom: '32px',
          }} 
          mt={6}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
          <Box display='flex' >
            <Box display='flex' flexDirection='column' flexGrow={1} pr={5} mb={3}>
              <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                First Name
              </FormLabel>
              <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Write first name" variant="outlined" />
            </Box>
            <Box display='flex' flexDirection='column' flexGrow={1}>
              <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                last Name
              </FormLabel>
              <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Write last name" variant="outlined" />
            </Box>
          </Box>
          <Box display='flex' flexDirection='column' mb={2}>
            <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
              Select Your Practice
            </FormLabel>
            <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Practice Name" variant="outlined" />
          </Box>
        <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Which Best Describes Your Role At The Practice</FormLabel>
        <InputLabel sx={{ color: 'white '}} id="described-practice">
          {/* Please select */}
        </InputLabel>
        <Select 
          labelId="described-practice"
          id="demo-practice-select"
          value={age}
          label="Age"
          onChange={() => {}}
          sx={{color : 'white', 
            width: '100%', 
            borderRadius: '16px', 
            border: '1px solid white',
            marginBottom: '32px',
          }} 
          mt={6}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
        </Select>
        <Box display='flex' flexDirection='column' mb={2}>
          <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
            How Did You Hear About MyFurTribe?
          </FormLabel>
          <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Practice Name" variant="outlined" />
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' pt={3}>
          <Button variant='contained' sx={{ borderRadius: '16px', fontSize: '16px', width: '140px' }}>
            Submit
          </Button>
          <Typography sx={{ opacity: 0.5 }} fontSize='11px' align='center' mt={2} color='#FFFFFF'>
            This confidential demo request is for veterinary professionals looking to offer MyFurTribe as a service to their practice clients. If you are a pet parent looking for more information about the MFT Mobile App, please visit the “Pet Parents” page.
          </Typography>
        </Box>
      </FormControl>
    </Box>
  )
}

export default PartnerForm