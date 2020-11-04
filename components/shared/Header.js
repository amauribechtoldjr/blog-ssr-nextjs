import Link from "next/link";

export default function () {
  return (
    <div>
      <Link href="/">
        <a>Inicial</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/festas">
        <a>Festas</a>
      </Link>
      <Link href="/sobre">
        <a>Sobre</a>
      </Link>
    </div>
  );
}
