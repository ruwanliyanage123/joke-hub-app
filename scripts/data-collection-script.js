const config = require("../config");
const fetch = require("node-fetch");
const jokes = require("./jokes-collections");
const SUBMIT_URL = `${config.SUBMIT_PROTOCOL}://${config.SUBMIT_HOST}:${config.SUBMIT_PORT}/joke-submit`;

const submitJoke = async (joke) => {
  try {
    const response = await fetch(`${SUBMIT_URL}/createJoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joke),
    });
    const data = await response.json();
    console.log("Successfully submitted:", data);
  } catch (error) {
    console.error("Error submitting joke:", error);
  }
};

const submitJokes = async () => {
  for (const joke of jokes) {
    await submitJoke(joke);
  }
};

submitJokes();
