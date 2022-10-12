import { useState } from 'react'
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const FAQ = ({question, answer, open = false,}) => {
  const [expanded, setExpanded] = useState(false)
  const toggleFAQ = () => setExpanded(!expanded)
  return <Box borderRadius='16px' my={4}  p={4} width='inherit' sx={{ background: 'white', boxShadow: '0px 1px 20px rgba(28, 27, 52, 0.05);'}}>
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Typography variant='body1' color='primary' fontWeight={expanded || open ? 700 : 400}>
        {question}
      </Typography>
      {
        !open && (!expanded && <Button sx={{borderRadius: 16}} onClick={toggleFAQ}>
          { !expanded && <ExpandMoreIcon fontSize="large" color="primary" />}
          </Button>)
      }
    </Box>

    { open ?  <Box display='flex' mt={2} justifyContent='space-between'>
      <Typography variant='body2' fontWeight='300' flexBasis={0} flexGrow={0.9}>
        {answer}
      </Typography>
      <Button sx={{borderRadius: 16}} onClick={toggleFAQ}>
        <ExpandLessIcon fontSize="large" color="primary" />
      </Button>
    </Box> : expanded ?  <Box display='flex' mt={2} justifyContent='space-between'>
      <Typography variant='body2' fontWeight='300' flexBasis={0} flexGrow={0.9}>
        {answer}
      </Typography>
      <Button sx={{borderRadius: 16}} onClick={toggleFAQ}>
        <ExpandLessIcon fontSize="large" color="primary" />
      </Button>
    </Box> : ''
    }
  </Box>
}

export default FAQ