import axios from "axios";

const BASE_URL = "https://localhost:3001/api/";
const POST_URL = `${BASE_URL}createJoke`;
const GET_ALL_URL = `${BASE_URL}getAllJokes`;
const GET_BY_ID_URL = `${BASE_URL}getJokeById:id`;

export const createJoke = async (formData) => {
  try {
    const response = await axios.post(POST_URL, {
      methd: "POST",
      body: JSON.stringify(formData),
    });
    return response.data;
  } catch (error) {
    console.error("Error creating joke:", error);
    throw error;
  }
};
