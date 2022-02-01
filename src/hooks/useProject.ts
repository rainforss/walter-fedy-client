import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useProject = (projectNumber: string, shouldFetch: boolean) => {
  const { data, error } = useSWR(
    shouldFetch ? `http://localhost:5000/api/projects/${projectNumber}` : null,
    fetcher
  );

  return {
    project: data,
    isLoading: !error && !data,
    isError: error,
  };
};
