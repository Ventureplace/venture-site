import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    // Add your own logic to submit the email address to your backend or store it in state
  };

  return (
    <div>
      <Typography variant="h4" fontFamily="'Roboto', sans-serif">
        Sign Up For Our Newsletter
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Ready to Earn Your Stake?"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          sx={{ my: 1 }}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default EmailForm;
