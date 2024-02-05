import { getRepoFromApi } from "./personalData";

export const getRepositoriesFromApi = async () => {
  const response = await fetch(getRepoFromApi);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
