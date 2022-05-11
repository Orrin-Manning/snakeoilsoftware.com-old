import Link from "next/link";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function SiteNav() {
  let [expanded, setExpanded] = useState(false);

  const handleShow = () => setExpanded(true);
  const handleHide = () => setExpanded(false);

  const siteMap = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      collapseOnSelect
      variant="dark"
      bg="dark"
      className="p-3"
    >
      <Link href="/" passHref>
        <Navbar.Brand onClick={handleHide}>Snake Oil Software</Navbar.Brand>
      </Link>
      <NavbarToggle onClick={handleShow} />
      <Navbar.Collapse>
        <Nav onSelect={handleHide} className="justify-content-end flex-grow-1">
          {siteMap.map((link) => {
            return (
              <Link href={link.path} passHref key={link.name}>
                <Nav.Link>{link.name}</Nav.Link>
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
