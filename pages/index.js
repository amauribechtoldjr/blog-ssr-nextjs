import BaseLayout from "../components/layouts/BaseLayout";
import { Button, Container } from "reactstrap";

export default function HomePage() {
  return (
    <BaseLayout>
      <Button color="danger">{`Hello world!`}</Button>
    </BaseLayout>
  );
}
