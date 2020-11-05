import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = axiosRes.data;

    res.statusCode = 200;
    res.end(JSON.stringify(posts.slice(0, 10)));
  } catch (e) {
    res.statusCode = e.status || 400;
    res.end("API error!");
  }
};
