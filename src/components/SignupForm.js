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
