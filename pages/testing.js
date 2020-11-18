import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Redirect from "@/components/shared/Redirect";
import { useGetUser } from "@/helpers/actions/user";

export default function Testing() {
  const { data: user, loading: userLoading } = useGetUser();

  if (userLoading) return <div>Loading..</div>;

  if (!user) {
    return <Redirect to="/api/login" />;
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage>
        <h1>{`Eu sou a página Secret`}</h1>
      </BasePage>
    </BaseLayout>
  );
}
