import config from "../config";
import axios from "axios";
const DELIVER_URL = `${config.DELIVER_PROTOCOL}://${config.DELIVER_HOST}:${config.DELIVER_PORT}/joke-deliver`;
const SUBMIT_URL = `${config.SUBMIT_PROTOCOL}://${config.SUBMIT_HOST}:${config.SUBMIT_PORT}/joke-submit`;

export const createJoke = async (jokeData) => {
  try {
    const response = await axios.post(`${SUBMIT_URL}/createJoke`, jokeData);
    console.log("Joke submitted successfully...", response.data);
  } catch (error) {
    console.error("Error submitting joke:", error);
  }
};

export const getJokeByTitle = async (jokeData) => {
  try {
    const response = await axios.get(
      `${DELIVER_URL}/getRandomJokeByType/${jokeData}`
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
    const response = await axios.get(`${SUBMIT_URL}/getActiveTypes`);
    return response.data;
  } catch (error) {
    console.error("Error getting joke types:", error);
    return null;
  }
};
