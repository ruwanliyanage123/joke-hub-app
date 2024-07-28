import Head from "next/head";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Button, Container, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });

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
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter, Arial",
  },
});

export default function Home() {
  const router = useRouter();

  const navigateToCreateJoke = () => {
    router.push("/create-joke");
  };

  const navigateToReadJoke = () => {
    router.push("/read-joke");
  };

  return (
    <>
      <Head>
        <title>Get a Joke</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Get a Joke
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Choose an option below
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: 2 }}
              onClick={navigateToReadJoke}
            >
              Read Joke
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={navigateToCreateJoke}
            >
              Create Joke
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
