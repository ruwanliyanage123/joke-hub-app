import React, { useState } from "react";
import Head from "next/head";
import { createJoke } from "@/services/joke-service";
import {
  Container,
  Typography,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff4400",
    },
    background: {
      default: "#f0f0f0",
    },
  },
  typography: {
    fontFamily: "Inter, Arial",
  },
});

export default function CreateJoke() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const jokeData = {
      jokeTitle: title,
      jokeType: type,
      jokeDescription: description,
    };
    await createJoke(jokeData);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setType("");
    setDescription("");
  };

  return (
    <>
      <Head>
        <title>Create a New Joke</title>
        <meta
          name="description"
          content="Create a new joke and share it with the world!"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: "url(/createjoke.jpg)", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.6)", // White background with opacity
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for better look
              backdropFilter: "blur(5px)", // Apply blur to the container
              position: "relative",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Create a New Joke
            </Typography>
            <form onSubmit={handlerSubmit}>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Joke Title"
                  variant="outlined"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel id="jokeType-label">Joke Category</InputLabel>
                <Select
                  labelId="jokeType-label"
                  id="jokeType"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  label="Joke Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="political">Political</MenuItem>
                  <MenuItem value="cricket">Cricket</MenuItem>
                  <MenuItem value="film">Film</MenuItem>
                  <MenuItem value="it">IT</MenuItem>
                  <MenuItem value="kids">Kids</MenuItem>
                  <MenuItem value="office">Office</MenuItem>
                  <MenuItem value="home">Home</MenuItem>
                  <MenuItem value="gym">Gym</MenuItem>
                  <MenuItem value="school">School</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField
                  id="jokeDescription"
                  label="Description"
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ borderRadius: "80px", backgroundColor: "black" }}
              >
                Create
              </Button>
            </form>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
