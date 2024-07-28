import axios from "axios";
const BASE_URL = "https://localhost:3001/api/";
const POST_URL = `${BASE_URL}createJoke`;
const GET_ALL_URL = `${BASE_URL}getAllJokes`;
const GET_BY_ID_URL = `${BASE_URL}getJokeById:id`;

export const createJoke = async (formData) => {
  try {
    const response = await axios.post("http://localhost:3001/api/createJoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jokeData),
    });
    if (response.ok) {
      console.log("Joke submitted successfully");
    } else {
      console.error("Failed to submit joke");
    }
  } catch (error) {
    console.error("Error submitting joke:", error);
  }
};
