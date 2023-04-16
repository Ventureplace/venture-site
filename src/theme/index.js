import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#000000',
    },
    text: {
      primary: '#1f0',
      secondary: '#cdd3d2',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontWeight: 900,
      fontSize: '2.5rem',
    },
    subtitle1: {
      fontSize: '1.25rem',
    },
  },
});

export default theme;
