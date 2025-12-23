import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGooglecolab } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiChrome } from "react-icons/di";
import { VscCode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <VscCode size={50} />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab size={50} />
        <div className="tech-icons-text">Google Colab</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiChrome size={50} />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt size={50} />
        <div className="tech-icons-text">Git</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
