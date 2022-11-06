import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"

const Statistics = () => (
  <Box display='flex' flexDirection='column' width='100%' height='300px' px={10} sx={{ position: 'relative', bottom: 150}}>
    <Box width='100%' display='flex' alignItems='center'>
      <Box flexGrow={1} display='flex' flexDirection='column' mr={5}>
        <Typography variant='h4' color='primary' mb={4} align='center' fontWeight='500'>
          MyFurTribe Mobile App
        </Typography>
        <iframe src="https://www.youtube.com/embed/HJ8wydj3m6s" height={250} ></iframe>
      </Box>
      <Box flexGrow={3} flexBasis={0}>
        <Typography variant='h4' align="left" color='primary' fontWeight={500} mb={4}>
          Why Feed Homemade?
        </Typography>
        <Typography variant='h5' fontWeight={600}>
          Get Research-Backed Peace of Mind
        </Typography>
        <Box display='flex' width='100%' pt={2}>
          <Box p={0.5} flexGrow={1} flexBasis={0}>
            <Typography variant='h4' fontWeight='bold' color='primary' mb={2}>+2.3 years</Typography>
            <Typography fontWeight={500}>
              Added in life span for dogs fed a fresh food diet compared to those fed commercial food
            </Typography>
          </Box>
          <Box p={0.5} flexGrow={1} flexBasis={0}>
            <Typography variant='h4' fontWeight='bold' color='primary' mb={2}>90%</Typography>
            <Typography fontWeight={500}>
              Reduction in cancer rates for dogs simply fed fresh vegetables thrice weekly
            </Typography>
          </Box>
        </Box>
        <Box display='flex' width='100%'>
          <Box p={0.5} flexGrow={1} flexBasis={0}>
            <Typography variant='h4' fontWeight='bold' color='primary' mb={2}>2.8x</Typography>
            <Typography fontWeight={500}>
              Increased risk of death in obese cats as opposed to lean cats
            </Typography>
          </Box>
          <Box p={0.5} flexGrow={1} flexBasis={0}>
            <Typography variant='h4' fontWeight='bold' color='primary' mb={2}>0</Typography>
            <Typography fontWeight={500}>
              Scary recalls or outbreaks, ever. You choose the ingredients that match your budget and ethics
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box display='flex' justifyContent='center'>
      <Button variant='contained' color='primary' sx={{ borderRadius: 60, width: 180, height: 40, textTransform: 'capitalize' }}>
        <Typography fontSize={12}>
          Download The App
        </Typography>
      </Button>
    </Box>
  </Box>
)

export default Statistics