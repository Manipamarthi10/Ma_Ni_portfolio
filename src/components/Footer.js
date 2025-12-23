import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Manikanta Swamy Pamarthi</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MSP</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/Manipamarthi10"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/manikantaswamyp/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* LeetCode */}
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/Ma_Ni/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <SiLeetcode />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
