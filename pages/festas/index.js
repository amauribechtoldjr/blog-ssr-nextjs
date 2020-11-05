import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import Link from "next/link";
import axios from "axios";

const Festas = ({ posts }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>{`Eu sou a página Festas`}</h1>
        <ul>
          {posts.map((p) => (
            <li key={p.id} style={{ color: "#fff" }}>
              <Link href={`/festas/${p.id}`}>
                <a style={{ color: "#fff" }}>{p.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </BasePage>
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
