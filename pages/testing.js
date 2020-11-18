import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/helpers/actions/user";
import {useRouter} from 'next/router';

export default function Testing() {
  const { data: user, loading: userLoading } = useGetUser();
  const router = useRouter();

  if (userLoading) return <div>Loading..</div>;

  if (!user) {
    //TODO: improve return
    router.push('/api/login');
    return null;
  }

  console.log(user);

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage>
        <h1>{`Eu sou a página Secret`}</h1>
      </BasePage>
    </BaseLayout>
  );
}
