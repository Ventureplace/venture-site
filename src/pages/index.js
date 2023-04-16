import React from "react";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../theme";
import Header from "../components/Header";
import SignupForm from "../components/SignupForm";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "text.secondary",
        }}
      >
        <Header />
        <Typography
          variant="h1"
          sx={{ color: "text.primary", fontStyle: "italic", p: 2}}
        >
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
