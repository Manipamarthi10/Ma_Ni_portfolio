import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    title: "E-Commerce Website",
    desc: "Full-stack shopping platform with authentication and cart system.",
    tech: ["React", "MongoDB", "Express"],
    github: "https://github.com/Manipamarthi10/Ecommerce_website",
  },
  {
    title: "Insurance Charges Prediction",
    desc: "Machine learning model to predict medical insurance cost.",
    tech: ["Python", "ML", "Pandas"],
    github: "https://github.com/Manipamarthi10/Insurance_charges_prediction",
  },
  {
    title: "Heritage Treasures (Tableau)",
    desc: "Interactive Tableau dashboard on UNESCO World Heritage sites.",
    tech: ["Tableau", "Data Analysis"],
    github: "https://github.com/Manipamarthi10/heritage-treasures-tableau",
  },
  {
    title: "AWS Cloud Project",
    desc: "Cloud project built and deployed using AWS services.",
    tech: ["AWS", "EC2", "S3"],
    
  },
  {
    title: "Memory Web App",
    desc: "A web application to store, manage, and revisit personal memories.",
    tech: ["Flask", "JavaScript", "CSS"],
    github: "https://github.com/Manipamarthi10/memory_web_app",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading text-center mb-5">
          My <span className="purple">Projects</span>
        </h1>

        <Row>
          {projects.map((p, i) => (
            <Col md={6} lg={4} className="mb-4" key={i}>
              <div className="project-card">
                <div className="project-front">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>

                <div className="project-hover">
                  <div className="tech-stack">
                    {p.tech.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
