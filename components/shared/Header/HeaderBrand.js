import Link from "next/link";

const HeaderBrand = ({ title }) => {
  return (
    <Link href="/">
      <a className="navbar-brand port-navbar-brand">{title}</a>
    </Link>
  );
};

export default HeaderBrand;
