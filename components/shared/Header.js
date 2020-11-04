import Link from "next/link";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function () {
  return (
    <ListGroup horizontal className="mb-2">
      <ListGroupItem>
        <Link href="/">
          <a>Inicial</a>
        </Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link href="/festas">
          <a>Festas</a>
        </Link>
      </ListGroupItem>
      <ListGroupItem>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
