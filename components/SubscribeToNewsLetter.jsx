// import { TextField, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system"
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const SubscribeToNewsLetter = ({ isMobile }) => {
  const theme = useTheme()
  return (
    <Box display='flex' flexDirection={ isMobile ? 'column' : 'row' } justifyContent={isMobile? 'flex-start' : 'space-between'} px={isMobile ? 3 : 14} py={isMobile? 2 : 8}>
      <Box flexBasis={0} flexGrow={0.6}>
        <Typography variant={isMobile ? 'h5':'h4'} fontSize={isMobile ? '20px':'32px'} align={isMobile ? 'center' : 'left'} mb={isMobile? 2 : 0} fontWeight={600} color='primary'>
          Subscribe to our newsletter for 
          product updates & recipe ideas! 
        </Typography>
      </Box>
      <Box display='flex' flexDirection={ isMobile ? 'column' : 'row' } flexGrow={0.4} alignItems='center'>
        <Box 
          display= 'flex' 
          flexGrow={1} 
          justifyContent='center'
          mb={isMobile ? 2 : 0}
        >
          <TextField 
            label='Enter your Email' 
            variant={ isMobile ? 'outlined' : 'standard'} 
            sx={{ 
              maxWidth: '404px', 
              width: isMobile ? '100%' :'80%',
              '& .MuiInputBase-input': {
                paddingBottom: isMobile ? 0 : 3,
              },
              '& label': {
                color: theme.palette.primary.main,
                fontSize: isMobile ? '12px' :'20px',
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: theme.palette.primary.main,
              },
            }} 
          />
        </Box>
        <Box>
          <Button 
            variant='contained' 
            sx={{ 
              borderRadius: '16px', 
              fontSize: '16px', 
              fontFamily: 'Hellix', 
              textTransform: 'capitalize', 
              height: isMobile ? 'unset' : '48px', 
              width: isMobile ? 'unset' : '136px', 
              paddingX: 4, 
              borderRadius: 60 
            }}>
              Subscribe
            </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SubscribeToNewsLetter