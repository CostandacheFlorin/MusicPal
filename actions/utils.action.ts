import { getGenres } from "./fetchers/utilsClient";

export const getGenresList = async () => {
  const genresList = await getGenres();
  return genresList.data;
};
