import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { withRouter } from "next/router";
import { useGetData } from "@/helpers/actions";

const Post = ({ router }) => {
  const { data: post, error, loading } = useGetData(
    `/api/posts/${router.query.id}`
  );
  console.log(post);
  return (
    <BaseLayout>
      <BasePage>
        <h1>{`Eu sou a página Festas`}</h1>
        {post && (
          <ul>
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </ul>
        )}
        {error && <div className="alert alert-danger">Ocorreu um erro!</div>}
        {loading && <div className="alert alert-info">Carregando...</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default withRouter(Post);
