import axios from "axios";

export const createJoke = async (jokeData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/createJoke",
      jokeData
    );
    console.log("Joke submitted successfully...", response.data);
  } catch (error) {
    console.error("Error submitting joke:", error);
  }
};

export const getJokeByTitle = async (jokeData) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/getRandomJokeByType/${jokeData}`
    );
    console.log("Joke submitted successfully...", response.data);
    return response.data;
  } catch (error) {
    console.error("Error submitting joke:", error);
    return null;
  }
};

export const getActiveTypes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/getActiveTypes"
    );
    return response.data;
  } catch (error) {
    console.error("Error getting joke types:", error);
    return null;
  }
};
