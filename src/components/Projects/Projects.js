import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I’ve worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* E-Commerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="E-Commerce Website"
              description="A full-stack shopping platform with product management, authentication, and secure checkout."
              ghLink="https://github.com/Manipamarthi10/Ecommerce_website"
            />
          </Col>

          {/* Signature Forgery (NO LINK FOR NOW) */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Signature Forgery Detection"
              description="A cloud-based machine learning application deployed using AWS services to detect forged signatures."
            />
          </Col>

          {/* Insurance Prediction */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Insurance Charges Prediction"
              description="A machine learning project that predicts insurance charges using regression models."
              ghLink="https://github.com/Manipamarthi10/Insurance_charges_prediction"
            />
          </Col>

          {/* Heritage Tableau (GitHub ONLY) */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Heritage Treasures – Tableau Dashboard"
              description="An interactive Tableau dashboard analyzing UNESCO World Heritage Sites globally, built during my SmartBridge internship."
              ghLink="https://github.com/Manipamarthi10/heritage-treasures-tableau"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
