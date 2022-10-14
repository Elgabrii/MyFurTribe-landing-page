import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from 'next/image'
import RedeemIcon from '@mui/icons-material/Redeem';
import CheckIcon from '@mui/icons-material/Check';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import styled from '@emotion/styled';

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


const MyFurTribeFeatures = () => (
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
    <Box sx={{ position: 'relative', bottom: 70}}>
      <Image src='/dashboard.png' width={525} height={500} alt='dashboard-image'/>
    </Box>
  </Box>
)

export default MyFurTribeFeatures