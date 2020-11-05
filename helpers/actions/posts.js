import useSWR from "swr";
import { fetcher } from "@/helpers/actions/fetcher";

export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR("/api/posts", fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
export const useGetPost = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/posts/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};
