import { useEffect, useState } from "react";
import axios from "axios";

export const useGetData = (uri) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(uri);
        setData(res.data);
      } catch (e) {
        setError(e.message);
      }

      setLoading(false);
    }

    uri && getData();
  }, [uri]);

  return { data, error, loading };
};
