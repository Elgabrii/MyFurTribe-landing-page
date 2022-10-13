import { Box } from "@mui/system"
import { Button, Typography } from "@mui/material"

const StatisticsMobile = () => (
  <Box px={3}>
    <Typography variant='h4' align="center" color='primary' mb={1}>
      Why Feed Homemade?
    </Typography>
    <Typography variant='h6' fontWeight={700} mb={2}>
      Get Research-Backed Peace of Mind
    </Typography>
    <Box p={0.5} flexGrow={1} flexBasis={0} mb={2}>
      <Typography variant='h4' fontWeight='bold' color='primary'>+2.3 years</Typography>
      <Typography>
        Added in life span for dogs fed a fresh food diet compared to those fed commercial food
      </Typography>
    </Box>
    <Box p={0.5} flexGrow={1} flexBasis={0} mb={2}>
      <Typography variant='h4' fontWeight='bold' color='primary'>90%</Typography>
      <Typography>
        Reduction in cancer rates for dogs simply fed fresh vegetables thrice weekly
      </Typography>
    </Box>
    <Box p={0.5} flexGrow={1} flexBasis={0} mb={2}>
      <Typography variant='h4' fontWeight='bold' color='primary'>2.8x</Typography>
      <Typography>
      Increased risk of death in obese cats as opposed to lean cats
      </Typography>
    </Box>
    <Box p={0.5} flexGrow={1} flexBasis={0}>
      <Typography variant='h4' fontWeight='bold' color='primary'>0</Typography>
      <Typography>
      Scary recalls or outbreaks, ever. You choose the ingredients that match your budget and ethics
      </Typography>
    </Box>
  </Box>
)

export default StatisticsMobile