import { useEffect, useState } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import axios from "axios";

const Festas = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("/api/v1/posts");
      console.log(res);
      setPosts(res.data);
    }

    getPosts();
  }, []);

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
        </ul>
      </BasePage>
    </BaseLayout>
  );
};

export default Festas;
