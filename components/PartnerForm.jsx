import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select';
import { FormControl, MenuItem, InputLabel, FormLabel, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
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

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required'
  }

  if (!values.clinicRequestTypeId) {
    errors.clinicRequestTypeId = 'Please select your entity'
  }

  return errors;
};
const FormTypes = Object.freeze({
  EMPLOYER: 'employer',
  SAAS: 'saas',
  INFLUENCER: 'influencer'
})
const PartnerForm = ({ isMobile }) => {
  const [requestTypes, setRequestTypes] = useState([])
  const [requestTypesLoading, setRequestTypesLoading] = useState(true)
  const [practiceRoles, setPracticeRoles] = useState([])
  const [distributionMethods, setDistributionMethods] = useState([])
  const [formType, setFormType] = useState(FormTypes.EMPLOYER)
  const [requestTypeSelectText, setRequestTypeSelectText] = useState('Select your entity')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmissionLoading, setFormSubmissionLoading] = useState(false)
  useEffect(() => {
    let unmounted = false
    const controller = new AbortController()
    if (!unmounted) {
      async function fetchClinicTypes() {
        try {
          const req = await axios.get('https://furtrip.onrender.com/api/resource/clinic-request-types')
          const result = req.data.data
          setRequestTypes(result)
          setRequestTypesLoading(false)
        } catch (err) {
          console.log(err)
        }
      }
      async function fetchPracticeRoles() {
        try{
          const req = await axios.get('https://furtrip.onrender.com/api/resource/practice-roles')
          const result = req.data.data
          setPracticeRoles(result)
        } catch (err) {
          console.log(err)
        }
      }
      async function fetchDistributionMethods() {
        try {
          const req = await axios.get('https://furtrip.onrender.com/api/resource/distribution-methods')
          const result = req.data.data
          setDistributionMethods(result)
        } catch (err) {
          console.log(err)
        }
      }

      fetchClinicTypes()
      fetchPracticeRoles()
      fetchDistributionMethods()
    }
    return () => {
      unmounted = true
      controller.abort()
    };
  }, []);


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      clinicRequestTypeId: '',
      practiceRoleId: '',
      practiceName: '',
      reachWay:'',
      linkedIn:'',
      distributionMethodId: [],
      hasNewsLetter: '',
      platforms: [],
      handles: [],
      platform: '',
      handle: '',
    },
    validate,
    onSubmit: async(values, { resetForm }) => {
      setFormSubmissionLoading(true)
      const req = await axios.post('https://furtrip.onrender.com/api/clinic-requests',{
        "clinic_request_type_id": values.clinicRequestTypeId,
        "first_name": values.firstName,
        "last_name": values.lastName,
        "email": values.email,
        "phone": values.phoneNumber,
        "practice_name": values.practiceName,
        "practice_role_id": values.practiceRoleId,
        "reach_way": values.reachWay,
        "linkedin": values.linkedIn,
        "distribution_method_id": 'a1e34ae0-f6d8-4bbd-b446-0b4363705b25',
        "has_newsletter": values.hasNewsLetter,
        "platforms": [values.platform],
        "handles": [values.handle]
      })
      setFormSubmitted(true)
      resetForm()
      console.log(req.data, 'successfully submitted')
    }
  })
  
  return (
    <Box width={isMobile ? '100%' : '624px'} borderRadius='16px' sx={{ background: '#1C1B34', zIndex: 999}} padding='40px'>
      { !formSubmitted ?
      <>
        <Typography color='white' fontSize='26px' fontWeight='700' mb={3}>
          Request a 10 minute demo to see just how easily we can add value to your practice!
        </Typography>
        <Typography fontSize='14px' mb={1} color='white'>
          I am a...
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          {
            requestTypesLoading ? <CircularProgress color='primary' /> : <FormControl fullWidth>
            <InputLabel shrink={false} sx={{ color: 'white',}} id="demo-simple-select-label">
              {requestTypeSelectText}
            </InputLabel>
            <Select 
              labelId='demo-simple-select-label'
              id="clinicRequestTypeId"
              name='clinicRequestTypeId'
              onChange={(e) => {
                setRequestTypeSelectText('')
                const type = requestTypes.find(req => req.id === e.target.value);
                setFormType(type.code)
                formik.handleChange(e)
              }}
              onBlur={formik.handleBlur}
              value={formik.values.clinicRequestTypeId}
              sx={{color : 'white', 
                width: '100%', 
                borderRadius: '16px', 
                border: '1px solid white',
                marginBottom: formik.errors.clinicRequestTypeId ? '0' : '32px',
              }} 
              mt={6}
              >
                {
                  requestTypes&&requestTypes.map(request => <MenuItem key={request.code} value={request&&request.id}>{request.name}</MenuItem>)
                }
              </Select>
              {formik.touched.clinicRequestTypeId && formik.errors.clinicRequestTypeId ? <Typography color='red'>{formik.errors.clinicRequestTypeId}</Typography> : null}
            </FormControl>
          }
            <FormControl fullWidth>
              <Box display='flex' flexDirection={ isMobile ? 'column' : 'row'} >
                <Box display='flex' flexDirection='column' flexGrow={1} pr={isMobile? 0 : 5} mb={3}>
                  <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required>
                    First Name
                  </FormLabel>
                  <StyledInputField 
                    sx={{ color: 'white', borderRadius: '16px'}}
                    label={formik.values.firstName ? '' : 'Write first name'} 
                    variant="outlined" 
                    id='firstName'
                    name='firstName'
                    InputLabelProps={{ shrink: false }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                {formik.touched.firstName && formik.errors.firstName ? <Typography color='red'>{formik.errors.firstName}</Typography> : null}
                </Box>
                <Box display='flex' flexDirection='column' flexGrow={1}>
                  <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    last Name
                  </FormLabel>
                  <StyledInputField 
                    sx={{ color: 'white', borderRadius: '16px'}} 
                    id='lastName'
                    name='lastName'
                    label={formik.values.lastName ? '' : 'Write last name'}
                    InputLabelProps={{ shrink: false }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? <Typography color='red'>{formik.errors.lastName}</Typography> : null}
                </Box>
              </Box>
            </FormControl> 
            <FormControl fullWidth>
              <Box display='flex' flexDirection={ isMobile ? 'column' : ' row'} >
                <Box display='flex' flexDirection='column' flexGrow={1} pr={isMobile ? 0 : 5} mb={3}>
                  <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    Email
                  </FormLabel>
                  <StyledInputField 
                    sx={{ color: 'white', borderRadius: '16px'}} 
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
                  {formik.touched.email && formik.errors.email ? <Typography color='red'>{formik.errors.email}</Typography> : null}
                </Box>
                <Box display='flex' flexDirection='column' flexGrow={1}>
                  <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    Phone Number
                  </FormLabel>
                  <StyledInputField 
                    sx={{ color: 'white', borderRadius: '16px'}} 
                    id='phoneNumber'
                    name='phoneNumber'
                    type='tel'
                    InputLabelProps={{ shrink: false }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    label={formik.values.phoneNumber ? '' : 'Write phone Number'}
                    variant="outlined" 
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? <Typography color='red'>{formik.errors.phoneNumber}</Typography> : null}
                </Box>
              </Box>
            </FormControl>
              {formType===FormTypes.EMPLOYER && (
                <>
                  <Box display='flex' flexDirection='column' mb={2}>
                  <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    Select Your Practice
                  </FormLabel>
                  <StyledInputField 
                    sx={{ color: 'white', borderRadius: '16px'}} 
                    id='practiceName'
                    name='practiceName'
                    InputLabelProps={{ shrink: false }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.practiceName}
                    label={formik.values.practiceName ? '' : 'Practice Name'} 
                    variant="outlined"
                  />
                </Box>
                <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Which Best Describes Your Role At The Practice</FormLabel>
                <FormControl fullWidth>
                  <InputLabel shrink={false} sx={{ color: '#8B8B98'}} id="select-practice-role">
                    {formik.values.practiceRoleId ? '': 'Please Select'}
                  </InputLabel>
                  <Select 
                    labelId='select-practice-role'
                    id="practiceRoleId"
                    name="practiceRoleId"
                    value={formik.values.practiceRoleId}
                    label="Practice"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                </FormControl>
                <Box display='flex' flexDirection='column' mb={2}>
                  <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    How Did You Hear About MyFurTribe?
                  </FormLabel>
                  <StyledInputField 
                    sx={{ color: 'white', borderRadius: '16px'}} 
                    id="reachWay"
                    name='reachWay'
                    InputLabelProps={{ shrink: false }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.reachWay}
                    label={formik.values.reachWay? '' : 'Please write your message'}
                    variant="outlined" 
                  />
                </Box>
                </>)}
                {
                formType===FormTypes.SAAS && <>
                    <Box display='flex' flexDirection='column' mb={2}>
                      <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                        LinkedIn
                      </FormLabel>
                      <StyledInputField 
                        sx={{ color: 'white', borderRadius: '16px'}} 
                        InputLabelProps={{ shrink: false }}
                        id='linkedIn'
                        name='linkedIn'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.linkedIn}
                        label={formik.values.linkedIn ? '' : 'linkedIn profile'} 
                        variant="outlined"
                      />
                    </Box>
                    <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Distribution Methods - Select All That Apply*</FormLabel>
                    <FormControl fullWidth>
                      <InputLabel shrink={false} sx={{ color: '#8B8B98'}} id="select-distribution-method">
                        {formik.values.distributionMethodId.length ? '': 'Please Select'}
                      </InputLabel>
                      <Select 
                        labelId='select-distribution-method'
                        id="distributionMethodId"
                        name="distributionMethodId"
                        value={formik.values.distributionMethodId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          color : 'white', 
                          width: '100%', 
                          borderRadius: '16px', 
                          border: '1px solid white',
                          marginBottom: '32px',
                        }} 
                        mt={6}
                        multiple
                        >
                          {distributionMethods&&distributionMethods.map(method => <MenuItem key={method.code} value={method&&method.id}>{method.name}</MenuItem>) }
                      </Select>
                    </FormControl>
                    <Box display='flex' flexDirection='column' mb={2}>
                  <FormLabel sx= {{color: 'white', fontSize: '14px', marginBottom: 1}} required >
                    How Did You Hear About MyFurTribe?
                  </FormLabel>
                  <StyledInputField 
                    InputLabelProps={{ shrink: false }}
                    sx={{ color: 'white', borderRadius: '16px'}} 
                    id='reachWay'
                    name='reachWay'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.reachWay}
                    label={formik.values.reachWay ? '' : 'Please write your message'}
                    variant="outlined" 
                  />
                </Box>
                  </>
                }
                {
                  formType === FormTypes.INFLUENCER && <FormControl fullWidth>
                    <FormLabel sx={{color: 'white', fontSize: '14px', marginBottom: 1}} required>Do you have An Active Newsletter?</FormLabel>
                    <Select 
                      // labelId="described-practice"
                      id="hasNewsLetter"
                      name="hasNewsLetter"
                      value={formik.values.hasNewsLetter}
                      label=""
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
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
                      id="platform"
                      name="platform"
                      value={formik.values.platform}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label=""
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
                    <StyledInputField 
                      sx={{ color: 'white', borderRadius: '16px'}}
                      InputLabelProps={{ shrink: false }}
                      id="handle"
                      name="handle"
                      value={formik.values.handle}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label={formik.values.handle ? '' : '@'} 
                      variant="outlined" 

                    />

                  </FormControl>
                }
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' pt={3}>
              <Button type='submit' variant='contained' sx={{ borderRadius: '16px', fontSize: '16px', width: '140px', fontFamily: 'Hellix' }}>
              {formSubmissionLoading ? <CircularProgress color='secondary' size={28} /> : 'Submit'}
              </Button>
              <Typography sx={{ opacity: 0.5 }} fontSize='11px' align='center' mt={2} color='#FFFFFF'>
                This confidential demo request is for veterinary professionals looking to offer MyFurTribe as a service to their practice clients. If you are a pet parent looking for more information about the MFT Mobile App, please visit the “Pet Parents” page.
              </Typography>
            </Box>
        </form>
      </>
      :
      <Box variant='h5' color='white'>
        We Will contact you soon.
      </Box>
      }
    </Box>
  )
}

export default PartnerForm