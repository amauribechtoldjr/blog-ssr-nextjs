import { NavItem } from "reactstrap";
import Link from "next/link";

const HeaderLink = ({ to, title, className }) => {
  return (
    <NavItem className={className}>
      <Link href={to}>
        <a className="nav-link port-navbar-link">{title}</a>
      </Link>
    </NavItem>
  );
};

export default HeaderLink;
