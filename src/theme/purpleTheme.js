import { createTheme } from '@mui/material/styles';
import { red, } from '@mui/material/colors';

// Create a theme instance.
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#94ccf0',
    },
    secondary: {
      main: '#a9c7dd',
    },
    error: {
      main: red.A400,
    },
  },
});

