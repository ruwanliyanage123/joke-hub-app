const fetch = require("node-fetch");
const jokes = require("./jokes-collections");

const submitJoke = async (joke) => {
  try {
    const response = await fetch(
      "http://localhost:3001/joke-submit/createJoke",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(joke),
      }
    );
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
