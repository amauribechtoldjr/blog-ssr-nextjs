import Header from "../shared/Header";
import { Container } from "reactstrap";

export default function (props) {
  return (
    <Container className="my-4">
      <Header />
      {props.children}
    </Container>
  );
}
