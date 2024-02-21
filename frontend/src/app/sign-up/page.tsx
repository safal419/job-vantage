"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const defaultTheme = createTheme();

export default function SignInSide() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: any) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3009/auth/signup",
        userData
      );
      console.log(response.data);
      setSuccessMessage(response.data.message); // Assuming backend sends a success message
    } catch (error) {
      console.log(error);
      // setErrorMessage(error.response.data.message); // Assuming backend sends an error message
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: "90vh",
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(assets/man.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                value={userData.name}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                onChange={handleChange}
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                value={userData.email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                autoComplete="email"
              />
              <TextField
                value={userData.password}
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              {successMessage && <Typography>{successMessage}</Typography>}
              {errorMessage && (
                <Typography color="error">{errorMessage}</Typography>
              )}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Log in"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
