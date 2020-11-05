import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from "../../components/BasePage";
import axios from "axios";
import { withRouter } from "next/router";

const Festas = ({ post }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>{`Eu sou a página Festas`}</h1>
        <ul>
          <li>{post.id}</li>
          <li>{post.title}</li>
          <li>{post.body}</li>
        </ul>
      </BasePage>
    </BaseLayout>
  );
};

Festas.getInitialProps = async ({ query: { id } }) => {
  let post = [];

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    post = res.data;
  } catch (e) {
    console.log(e);
  }

  return { post };
};

export default withRouter(Festas);
