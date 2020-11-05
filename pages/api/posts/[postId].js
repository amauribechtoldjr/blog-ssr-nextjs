import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.postId}`
    );
    const post = axiosRes.data;

    res.status(200).json(post);
  } catch (e) {
    res.statusCode = e.status || 400;
    res.end("API error!");
  }
};
