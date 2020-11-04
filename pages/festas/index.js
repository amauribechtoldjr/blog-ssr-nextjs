import BaseLayout from "../../components/layouts/BaseLayout";
import Link from "next/link";
import axios from "axios";

const Festas = ({ posts }) => {
  return (
    <BaseLayout>
      <h1>{`Eu sou a página Festas`}</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/festas/${p.id}`}>
              <a>{p.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};

Festas.getInitialProps = async () => {
  let posts = [];

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    console.log(e);
  }

  return { posts: posts.slice(0, 10) };
};

export default Festas;
