import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select';
import { FormControl, MenuItem, InputLabel, FormLabel, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Formik, useFormik, useFormikContext } from 'formik';
import axios from 'axios';

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

const FormTypes = Object.freeze({
  EMPLOYER: 'employer',
  SAAS: 'saas',
  INFLUENCER: 'influencer'
})

const PartnerFormDesktop = () => {
  const [formType, setFormType] = useState(FormTypes.EMPLOYER)
  return <>
  {props => (
    <form onSubmit={props.handleSubmit}>
    <FormControl fullWidth>
      <InputLabel sx={{ color: 'white '}} id="demo-simple-select-label">
        Employee/Owner of a veterinary practice
      </InputLabel>
      <Select 
        // labelId="demo-simple-select-label"
        id="clinicRequestTypeId"
        name='clinicRequestTypeId'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.clinicRequestTypeId}
        label="Age"
        sx={{color : 'white', 
          width: '100%', 
          borderRadius: '16px', 
          border: '1px solid white',
          marginBottom: '32px',
        }} 
        mt={6}
        >
          {
            requestTypes&&requestTypes.map(request => <MenuItem key={request.code} value={request&&request.id}>{request.name}</MenuItem>)
          }
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={10}>Ten</MenuItem> */}
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
        <Box display='flex' >
          <Box display='flex' flexDirection='column' flexGrow={1} pr={5} mb={3}>
            <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
              Email
            </FormLabel>
            <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Write first name" variant="outlined" />
          </Box>
          <Box display='flex' flexDirection='column' flexGrow={1}>
            <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
              Phone Number
            </FormLabel>
            <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Write last name" variant="outlined" />
          </Box>
        </Box>
        {formType===FormTypes.EMPLOYER && (
          <>
            <Box display='flex' flexDirection='column' mb={2}>
            <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
              Select Your Practice
            </FormLabel>
            <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Practice Name" variant="outlined" />
          </Box>
          <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Which Best Describes Your Role At The Practice</FormLabel>
          <Select 
            // labelId="described-practice"
            id="practiceRoleId"
            name="practiceRoleId"
            value={props.values.practiceRoleId}
            label="Practice"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            sx={{color : 'white', 
              width: '100%', 
              borderRadius: '16px', 
              border: '1px solid white',
              marginBottom: '32px',
            }} 
            mt={6}
            >
              {practiceRoles&&practiceRoles.map(role => <MenuItem key={role.code} value={role&&role.id}>{role.name}</MenuItem>) }
          </Select>
          <Box display='flex' flexDirection='column' mb={2}>
            <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
              How Did You Hear About MyFurTribe?
            </FormLabel>
            <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Practice Name" variant="outlined" />
          </Box>
          </>)}
          {
          formType===FormTypes.SAAS && <>
              <Box display='flex' flexDirection='column' mb={2}>
                <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                  LinkedIn
                </FormLabel>
                <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Practice Name" variant="outlined" />
              </Box>
              <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Distribution Methods - Select All That Apply*</FormLabel>
              <Select 
                // labelId="described-practice"
                multiple
                id="distributionMethodId"
                name="distributionMethodId"
                value={props.values.distributionMethodId}
                label="Practice"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                sx={{color : 'white', 
                  width: '100%', 
                  borderRadius: '16px', 
                  border: '1px solid white',
                  marginBottom: '32px',
                }} 
                mt={6}
                >
                  {distributionMethods&&distributionMethods.map(method => <MenuItem key={method.code} value={method&&method.id}>{method.name}</MenuItem>) }
              </Select>
              <Box display='flex' flexDirection='column' mb={2}>
            <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
              How Did You Hear About MyFurTribe?
            </FormLabel>
            <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="Practice Name" variant="outlined" />
          </Box>
            </>
          }
          {
            formType === FormTypes.INFLUENCER && <>
              <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Do you have An Active Newsletter?</FormLabel>
              <Select 
                // labelId="described-practice"
                id="hasNewsLetter"
                name="hasNewsLetter"
                value={props.values.hasNewsLetter}
                label=""
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                sx={{color : 'white', 
                  width: '100%', 
                  borderRadius: '16px', 
                  border: '1px solid white',
                  marginBottom: '32px',
                }} 
                mt={6}
                >
                  <MenuItem value='Yes'>Yes</MenuItem>
                  <MenuItem value='No'>No</MenuItem>
              </Select>
              <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Please Choose Your Current Platform </FormLabel>
              <Select 
                // labelId="described-practice"
                id="platform"
                name="platform"
                value={props.values.platform}
                label=""
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                sx={{color : 'white', 
                  width: '100%', 
                  borderRadius: '16px', 
                  border: '1px solid white',
                  marginBottom: '32px',
                }} 
                mt={6}
                >
                  <MenuItem value='facebook'>Facebook</MenuItem>
                  <MenuItem value='twitter'>Twitter</MenuItem>
                  <MenuItem value='instagram'>Instagram</MenuItem>
              </Select>
              <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Pleese right your handle below </FormLabel>
              <StyledInputField sx={{ color: 'white', borderRadius: '16px'}} id="outlined-basic" label="@" variant="outlined" />

            </>
          }
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' pt={3}>
        <Button type='submit' variant='contained' sx={{ borderRadius: '16px', fontSize: '16px', width: '140px' }}>
          Submit
        </Button>
        <Typography sx={{ opacity: 0.5 }} fontSize='11px' align='center' mt={2} color='#FFFFFF'>
          This confidential demo request is for veterinary professionals looking to offer MyFurTribe as a service to their practice clients. If you are a pet parent looking for more information about the MFT Mobile App, please visit the “Pet Parents” page.
        </Typography>
      </Box>
    </FormControl>
  </form>)}
</>

}

export default PartnerFormDesktop