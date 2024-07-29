import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const DELIVER_URL = `${process.env.DELIVER_PROTOCOL}://${process.env.DELIVER_HOST}:${process.env.DELIVER_PORT}/joke-deliver`;
const SUBMIT_URL = `${process.env.SUBMIT_PROTOCOL}://${process.env.SUBMIT_HOST}:${process.env.SUBMIT_PORT}/joke-submit`;

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
      `${DELIVER_UR}/getRandomJokeByType/${jokeData}`
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
