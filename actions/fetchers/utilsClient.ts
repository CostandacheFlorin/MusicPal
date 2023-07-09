import axios from "axios";

export const getGenres = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/utils/genres`);
};
