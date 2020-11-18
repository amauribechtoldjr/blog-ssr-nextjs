import useSWR from "swr";
import { fetcher } from "@/helpers/actions/fetcher";

export const useGetUser = () => {
  const { data, error, ...rest } = useSWR("/api/me", fetcher);

  return { data, error, loading: !error && !data, ...rest };
};
