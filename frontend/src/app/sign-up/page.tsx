"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMutation, gql } from "@apollo/client";
import client from "../../../apollo.config";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Created By "}
      <Link color="inherit" href="https://saphalsapkota.com.np">
        Saphal Sakota
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const SIGN_UP = gql`
  mutation Register(
    $username: String!
    $role: String!
    $email: String!
    $password: String!
  ) {
    register(
      username: $username
      role: $role
      email: $email
      password: $password
    ) {
      _id
      username
      role
      email
    }
  }
`;

export default function SignInSide() {
  const [userData, setUserData] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    client
      .mutate({
        mutation: SIGN_UP,
        variables: userData,
      })
      .then((response) => {
        console.log("User added:", response.data.register);
        setUserData({
          username: "",
          role: "",
          email: "",
          password: "",
        });
        setSuccessMessage("✅✅ User Added Successfully");
      })
      .catch((error) => {
        console.error("Error creating:", error);
      });
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
                value={userData.username}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="username"
                onChange={handleChange}
                autoComplete="name"
                autoFocus
              />
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="role"
                  value={userData.role}
                  label="role"
                  onChange={handleChange}
                >
                  <MenuItem value={"Jobseeker"}>Jobseeker</MenuItem>
                  <MenuItem value={"Employer"}>Employer</MenuItem>
                </Select>
              </FormControl>
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
                autoFocus
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
              {successMessage && <Typography>{successMessage}</Typography>}{" "}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
