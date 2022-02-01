import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useProjects = (
  top: number,
  skip: number,
  shouldFetch: boolean
) => {
  const { data, error } = useSWR(
    shouldFetch
      ? `http://localhost:5000/api/projects?top=${top}&skip=${skip}`
      : null,
    fetcher
  );

  return {
    projects: data,
    isLoading: !error && !data,
    isError: error,
  };
};
