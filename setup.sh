#!/bin/zsh

# Create necessary directories
mkdir -p src/components src/pages src/theme

# Create necessary files
touch src/components/Header.js \
      src/components/SignupForm.js \
      src/pages/index.js \
      src/theme/index.js

# Add content to files
cat <<EOT > src/theme/index.js
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
EOT

cat <<EOT > src/components/Header.js
import React from 'react';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ width: '100%', height: '200px', backgroundImage: 'url(placeholder.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
  );
};

export default Header;
EOT

cat <<EOT > src/components/SignupForm.js
import React from 'react';
import { Box, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

const SignupForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        InputProps={{ style: { borderColor: '#cdd3d2' } }}
      />
      <TextField
        label="Name"
        type="text"
        variant="outlined"
        InputProps={{ style: { borderColor: '#cdd3d2' } }}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="I agree to terms"
        sx={{ color: '#cdd3d2' }}
      />
      <Button
        variant="outlined"
        type="submit"
        sx={{ borderColor: '#cdd3d2', color: '#cdd3d2', backgroundColor: 'background.default' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SignupForm;
EOT

cat <<EOT > src/pages/index.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from '../theme';
import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: 'background.default',
         color: 'text.secondary',
}}
>
<Header />
<Typography variant="h1" sx={{ color: 'text.primary' }}>
Earn Your Stake
</Typography>
<Typography variant="subtitle1">
More coming soon...
</Typography>
<SignupForm />
</Box>
</ThemeProvider>
);
};

export default IndexPage;
EOT
