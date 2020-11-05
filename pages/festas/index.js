import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/helpers/actions";

const Festas = () => {
  const { posts, error } = useGetPosts();

  return (
    <BaseLayout>
      <BasePage>
        <h1>{`Eu sou a página Festas`}</h1>
        <ul>
          {posts.length > 0 &&
            posts.map((p) => (
              <li key={p.id} style={{ color: "#fff" }}>
                <Link href={`/festas/${p.id}`}>
                  <a style={{ color: "#fff" }}>{p.title}</a>
                </Link>
              </li>
            ))}
          {error && <span>{error}</span>}
        </ul>
      </BasePage>
    </BaseLayout>
  );
};

export default Festas;
