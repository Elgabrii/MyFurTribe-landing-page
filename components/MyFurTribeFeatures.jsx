import { Divider, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from 'next/image'
import RedeemIcon from '@mui/icons-material/Redeem';
import CheckIcon from '@mui/icons-material/Check';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

const Circle = styled.div`
  width: 45px;
  height: 45px;
  padding: 22.5px;
  background: rgba(84, 102, 249, 0.08);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const FeaturesBanner = styled.div`
  background-image: url('/featuresbackground.png');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`

export const SecondBanner = styled.div`
  background-image: url('/FeaturesSection.png');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`


const MyFurTribeFeatures = ({ isMobile }) => {
  const theme = useTheme()
  return !isMobile ? <>
    <FeaturesBanner>
      <Box pl={14} pr={10.5} pt={18} display='flex' justifyContent='space-between'>
        <Box flexBasis={0} flexGrow={1}>
          <Typography variant='h4' color='secondary' fontWeight={700}>
            Why Add MyFurTribe To Your Practice?
          </Typography>
          <Box display='flex' my={3} alignItems='center'>
            <Circle>
              <RedeemIcon />
            </Circle>
            <Typography variant='body1' fontWeight={500}>
              Reward your dedicated clients with an exciting and exclusive solution to feeding fresh food at home
            </Typography>
          </Box>
          <Box display='flex' my={3} alignItems='center'>
            <Circle>
              <CheckIcon />
            </Circle>
            <Typography variant='body1' fontWeight={500}>
              Gain access to the only vet & vet nutritionist-approved pet nutrition software available
            </Typography>
          </Box>
          <Box display='flex' my={3} alignItems='center'>
            <Circle>
              <CreditCardIcon />
            </Circle>
            <Typography variant='body1' fontWeight={500}>
              Receive direct monthly payments
            </Typography>
          </Box>
          <Box display='flex' my={3} alignItems='center'>
            <Circle>
              <EmojiEventsIcon />
            </Circle>
            <Typography variant='body1' fontWeight={500}>
              All for a low-cost annual fee
            </Typography>
          </Box>
        </Box>
        <Box flexBasis={0} flexGrow={1} sx={{ position: 'relative', bottom: 70}}>
          <Image src='/dashboard.png' width={525} height={500} alt='dashboard-image'/>
        </Box>
      </Box>
    </FeaturesBanner>
    <SecondBanner>
      <Box px={16} pt={8} pb={6} display='flex' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <LocalFireDepartmentIcon color='primary' sx={{ fontSize: 40}} />
          <Typography variant='h6' fontWeight={500} color='white' mt={5} align='center'>
            Setup & deploy in <br />
            less than 30 minutes
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <EmailIcon sx={{ fontSize: 40, color: 'white'}} />
          <Typography variant='h6' fontWeight={500} color='white' mt={5} align='center'>
            2 hours/month <br /> to promote
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <AttachMoneyIcon color='primary' sx={{ fontSize: 40}} />
          <Typography variant='h6' fontWeight={500} color='white' mt={5} align='center'>
            24X Return on <br /> Annual Fee*
          </Typography>
        </Box>
      </Box>
    </SecondBanner>
  </>
  :
  <>
    <Divider />
    <Box flexBasis={0} flexGrow={1} pt={3} px={2}>
      <Typography variant='h5' color='secondary' fontWeight={700}>
        Why Add MyFurTribe To Your Practice?
      </Typography>
      <Box display='flex' my={3} alignItems='center'>
        <Circle>
          <RedeemIcon />
        </Circle>
        <Typography variant='body1' fontWeight={500}>
          Reward your dedicated clients with an exciting and exclusive solution to feeding fresh food at home
        </Typography>
      </Box>
      <Box display='flex' my={3} alignItems='center'>
        <Circle>
          <CheckIcon />
        </Circle>
        <Typography variant='body1' fontWeight={500}>
          Gain access to the only vet & vet nutritionist-approved pet nutrition software available
        </Typography>
      </Box>
      <Box display='flex' my={3} alignItems='center'>
        <Circle>
          <CreditCardIcon />
        </Circle>
        <Typography variant='body1' fontWeight={500}>
          Receive direct monthly payments
        </Typography>
      </Box>
      <Box display='flex' my={3} alignItems='center'>
        <Circle>
          <EmojiEventsIcon />
        </Circle>
        <Typography variant='body1' fontWeight={500}>
          All for a low-cost annual fee
        </Typography>
      </Box>
    </Box>
    <Box px={3} pt={5} pb={6} display='flex' flexDirection='column' sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <LocalFireDepartmentIcon color='primary' sx={{ fontSize: 40}} />
          <Typography variant='h6' fontWeight={500} color='white' mt={0} mb={6} align='center'>
            Setup & deploy in <br />
            less than 30 minutes
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <EmailIcon sx={{ fontSize: 40, color: 'white'}} />
          <Typography variant='h6' fontWeight={500} color='white' mt={0} mb={6} align='center'>
            2 hours/month <br /> to promote
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <AttachMoneyIcon color='primary' sx={{ fontSize: 40}} />
          <Typography variant='h6' fontWeight={500} color='white' mt={0} align='center'>
            24X Return on <br /> Annual Fee*
          </Typography>
        </Box>
      </Box>
  </>
}

export default MyFurTribeFeatures