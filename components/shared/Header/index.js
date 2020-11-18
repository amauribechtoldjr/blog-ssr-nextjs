import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import HeaderLink from "@/components/shared/Header/HeaderLink";
import HeaderBrand from "@/components/shared/Header/HeaderBrand";
import HeaderButton from "@/components/shared/Header/HeaderButton";
import { useRouter } from "next/router";

const Header = ({ user, loading }) => {
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
            <HeaderLink
              to="/testing"
              title="Secret"
              className="port-navbar-item"
            />
          </Nav>
          <Nav navbar>
            {!loading && !user && (
              <a href="/api/login" className="nav-link port-navbar-link">
                Entrar
              </a>
            )}
            {!loading && user && (
              <a href="/api/logout" className="nav-link port-navbar-link">
                Sair
              </a>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
