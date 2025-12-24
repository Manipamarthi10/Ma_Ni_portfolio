import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" onClick={() => setExpand(false)}>
          <h3 className="logo-text">MaNi</h3>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">

            <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
              <AiOutlineHome /> Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
              <AiOutlineUser /> About
            </Nav.Link>

            <Nav.Link as={Link} to="/project" onClick={() => setExpand(false)}>
              <AiOutlineFundProjectionScreen /> Projects
            </Nav.Link>

            <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
              <CgFileDocument /> Resume
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" onClick={() => setExpand(false)}>
              <MdEmail /> Contact
            </Nav.Link>

            {/* LEETCODE – FIXED ALIGNMENT */}
            <Nav.Item className="leetcode-wrapper">
              <Button
                href="https://leetcode.com/u/Ma_Ni/"
                target="_blank"
                className="leetcode-btn"
              >
                <SiLeetcode className="me-1" /> LeetCode
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
