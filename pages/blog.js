import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/helpers/actions/user";

export default function Blog() {
  const { data: userData, loading: userLoading } = useGetUser();
  return (
    <BaseLayout user={userData} loading={userLoading}>
      <BasePage>
        <h1>{`Eu sou a página Blog`}</h1>
      </BasePage>
    </BaseLayout>
  );
}
