import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Festa online</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <HeaderLink to="/" title="Início" />
            <HeaderLink to="/festas" title="Festas" />
            <HeaderLink to="/blog" title="Blog" />
            <HeaderLink to="/sobre" title="Sobre" />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
