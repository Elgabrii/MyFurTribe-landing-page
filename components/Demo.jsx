import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Demo = ({ isMobile }) => (
  !isMobile ? <Box px={30} pb={15} pt={2} width='100%'>
    <Typography variant='h4' mb={3} fontWeight={600} align='center'>
      Watch Our Demo
    </Typography>
    <iframe src="https://www.youtube.com/embed/BPspiDiiIPo" title='youtube-video-player' width='100%' height={410} ></iframe>
  </Box>
  :
  <Box  pb={0} pt={2} width='100%'>
    <Typography variant='h4' mb={3} fontWeight={600} align='center'>
      Watch Our Demo
    </Typography>
    <iframe src="https://www.youtube.com/embed/BPspiDiiIPo" title='youtube-video-player' width='100%' height={370} ></iframe>
  </Box>

)

export default Demo