import { NavItem } from "reactstrap";
import Link from "next/link";

const HeaderLink = ({ to, title, className = "nav-link" }) => {
  return (
    <NavItem>
      <Link href={to}>
        <a className={className}>{title}</a>
      </Link>
    </NavItem>
  );
};

export default HeaderLink;
