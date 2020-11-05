import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/helpers/actions";

const Festas = () => {
  const { data: posts, error, loading } = useGetPosts();

  return (
    <BaseLayout>
      <BasePage>
        <h1>{`Eu sou a página Festas`}</h1>
        <ul>
          {posts &&
            posts.length > 0 &&
            posts.map((p) => (
              <li key={p.id} style={{ color: "#fff" }}>
                <Link href={`/festas/${p.id}`}>
                  <a style={{ color: "#fff" }}>{p.title}</a>
                </Link>
              </li>
            ))}
        </ul>
        {error && <div className="alert alert-danger">{error.message}</div>}
        {loading && <div className="alert alert-info">Carregando...</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Festas;
