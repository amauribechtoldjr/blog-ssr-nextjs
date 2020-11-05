import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useRouter } from "next/router";
import { useGetPost } from "@/helpers/actions/posts";
import { useGetUser } from "@/helpers/actions/user";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, loading } = useGetPost(id);
  const { data: userData, loading: userLoading } = useGetUser();

  return (
    <BaseLayout user={userData} loading={userLoading}>
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

export default Post;
