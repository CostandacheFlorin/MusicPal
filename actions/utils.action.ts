import { getApiHealth, getGenres } from "./fetchers/utilsClient";

export const getGenresList = async () => {
  const genresList = await getGenres();
  return genresList.data;
};
export const getApiStatus = async () => {
  const apiHealth = await getApiHealth();
  if (apiHealth.data.status !== "OK") {
    throw new Error("The API is down!");
  }
  return { success: true };
};
