import BaseLayout from "../components/layouts/BaseLayout";
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";

export default function HomePage() {
  return (
    <BaseLayout>
      <Header />
      {`Hello world!`}
    </BaseLayout>
  );
}
