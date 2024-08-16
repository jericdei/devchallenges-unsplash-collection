import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_UNSPLASH_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Client-ID ${process.env.UNSPLASH_API_ACCESS_KEY}`,
  },
});

export default axios;
