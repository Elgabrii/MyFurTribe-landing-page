import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AddIcon from '@mui/icons-material/Add';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import Image from 'next/image';
const Features = () => {
  const theme = useTheme()
  return <Box display='flex' width='100%' height={500} flexDirection='row' mt={theme.spacing(4)} pl={theme.spacing(10)}>
    <Box flexGrow={3}>
      <Typography variant='h4' fontWeight='600' color={theme.palette.primary.main}>Get Access To <span style={{ color: 'black'}}>AI-Powered</span> Pet Nutrition</Typography>
      <Box p={1}>
        <Box display='flex' alignItems='start' py={2}>
          <SmartphoneIcon sx={{ fontSize: 50, marginRight: 1.5 }} color='primary' />
          <Typography variant='h5' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
            Create unlimited nutritionally balanced recipes tailored to your pet’s individual needs
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' py={2}>
          <TurnedInNotIcon sx={{ fontSize: 50, marginRight: 1.5 }} color='primary' />
          <Typography variant='h5' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
          Save your favourite recipes in-app
          </Typography>
        </Box>
        <Box display='flex' alignItems='start' py={2}>
          <TextSnippetIcon sx={{ fontSize: 50, marginRight: 1.5 }} color='primary' />
          <Typography variant='h5' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
            View recipe nutrients against AAFCO & FEDIAF standards
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' py={2}>
          <AddIcon sx={{ fontSize: 50, marginRight: 1.5 }} color='primary' />
          <Typography variant='h5' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
            Instantly substitute ingredients from our database
          </Typography>
        </Box>
        <Box display='flex' alignItems='start' py={2}>
          <TakeoutDiningIcon sx={{ fontSize: 50, marginRight: 1.5 }} color='primary' />
          <Typography variant='h5' fontWeight='500' lineHeight={1.1} color={theme.palette.primary.main}>
            Get personalized instructions to easily create your recipe
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box flexGrow={0} height='inherit' flexDirection='column'>
      <Box width={700} height={393} sx={{ position: 'relative',  bottom: 150 }}>
        <Image src='/dog1.png' alt='dog-image' layout='fill' />
      </Box>
      <Box width={650} height={365} sx={{ position: 'relative', bottom: 240 }}>
        <Image src='/pug.png' alt='dog-image' layout='fill' />
      </Box>
    </Box>
  </Box>
}

export default Features