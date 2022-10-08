import Box from '@mui/material/Box';
import Partners from '../components/Partners';
import Tribe from '../components/Tribe';
import styled from '@emotion/styled';
import NavBar from '../components/Navbar';
import Features from '../components/Features';
// import bg from '../public/image14.png '
const Img = styled.div`
  background-image: linear-gradient(to left, rgba(245, 246, 252, 0), rgba(252, 252, 252, 1)),
  url('/image14.png');
  width: 100%;
  height: 1000px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`
export default function Home() {
  return <Box>
    <NavBar />
    <Box>
      <Img />
      <Partners />
      <Tribe />
      <Features />
    </Box>
  </Box>
}