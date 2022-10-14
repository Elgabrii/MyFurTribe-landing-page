import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
palette: {
   primary: {
      main: '#5466F9',
   },
   secondary: {
     main: '#1C1B34',
   },
   error: {
   main: red.A400,
   },
  },
});
export default theme;