import axios from "axios";

export const getGenres = () => {
  return axios.get(`http://localhost:5000/utils/genres`);
};
