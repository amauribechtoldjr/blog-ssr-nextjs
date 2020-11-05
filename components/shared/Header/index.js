import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import HeaderLink from "@/components/shared/Header/HeaderLink";
import HeaderBrand from "@/components/shared/Header/HeaderBrand";
import HeaderButton from "@/components/shared/Header/HeaderButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        light
        expand="md"
      >
        <HeaderBrand title="FEST.ON" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <HeaderLink to="/" title="Início" className="port-navbar-item" />
            <HeaderLink
              to="/festas"
              title="Festas"
              className="port-navbar-item"
            />
            <HeaderLink to="/blog" title="Blog" className="port-navbar-item" />
            <HeaderLink
              to="/sobre"
              title="Sobre"
              className="port-navbar-item"
            />
          </Nav>
          <Nav navbar>
            <NavItem className="port-navbar-item">
              <HeaderButton title="Entrar" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <HeaderButton title="Sair" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
