import axios from "axios";

export const makeRequest = axios.create({
  // fetching url from .env file
  // baseURL: process.env.REACT_APP_API_URL,

  // Update the baseURL to the Netlify Functions endpoint
  baseURL: "/.netlify/functions/fetch-data",
  // important have to send this otherwise api wont allow to use items
  headers: {
    // fetching api token from .env file
    Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
  },
});
