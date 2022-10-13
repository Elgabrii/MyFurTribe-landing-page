// import { TextField, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system"
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const SubscribeToNewsLetter = () => {
  const theme = useTheme()
  return (
    <Box display='flex' justifyContent='space-between' px={14} py={8}>
      <Box flexBasis={0} flexGrow={0.6}>
        <Typography variant='h4' fontSize='32px' fontWeight={600} color='primary'>
          Subscribe to our newsletter for 
          product updates & recipe ideas! 
        </Typography>
      </Box>
      <Box display='flex' flexGrow={0.4} alignItems='center'>
        <Box 
          display= 'flex' 
          flexGrow={1} 
          justifyContent='center'
        >
          <TextField 
            label='Enter your Email' 
            variant='standard' 
            sx={{ 
              maxWidth: '404px', 
              width: '80%',
              '& .MuiInputBase-input': {
                paddingBottom: 3,
              },
              '& label': {
                color: theme.palette.primary.main,
                fontSize: '20px',
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
              height: '48px', 
              width: '136px', 
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