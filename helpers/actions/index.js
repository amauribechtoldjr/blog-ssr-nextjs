import { useEffect, useState } from "react";
import axios from "axios";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await axios.get("/api/v1/posts");
        console.log(res);
        const result = res.data;
        setPosts(result);
      } catch (e) {
        setError(e.message);
      }
    }

    getPosts();
  }, []);

  return { posts, error };
};
