import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Manikanta Swamy Pamarthi</span> from{" "}
            <span className="purple">Andhra Pradesh, India</span>.
            <br />
            I’m currently pursuing my{" "}
            <span className="purple">
              B.Tech in Information Technology
            </span>{" "}
            and actively building my career as a{" "}
            <span className="purple">Cloud & Full-Stack Engineer</span>.
            <br />
            <br />
            I have hands-on experience working with{" "}
            <span className="purple">
              AWS, Python, JavaScript, Node.js, React, and MySQL
            </span>
            , and I enjoy designing scalable applications and cloud-based
            solutions.
            <br />
            <br />
            I’ve worked on projects involving{" "}
            <span className="purple">
              Full-Stack Web Development, Cloud Deployment, and Machine Learning
            </span>
            , and I’m always eager to learn new technologies and improve my
            problem-solving skills.
            <br />
            <br />
            Outside of coding, I enjoy activities that help me stay focused and
            creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning Cloud & New Technologies ☁️
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Personal Projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech & Career Growth 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistently learning and building solutions that create real
            impact."
          </p>
          <footer className="blockquote-footer">Manikanta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
