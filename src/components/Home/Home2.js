import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m <span className="purple">Manikanta Swamy Pamarthi</span>, a
              passionate Cloud and Full-Stack Engineer who enjoys turning ideas
              into reliable, scalable applications.
              <br />
              <br />
              I have hands-on experience working with
              <i>
                <b className="purple">
                  {" "}
                  AWS, Python, JavaScript, Node.js, and React{" "}
                </b>
              </i>
              and I enjoy building systems that are efficient, secure, and easy
              to use.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Cloud-Native Applications, Web Applications,{" "}
                </b>
              </i>
              and exploring how cloud platforms can be used to deploy scalable
              ML and backend solutions.
              <br />
              <br />
              Whenever possible, I love building projects using
              <b className="purple"> AWS services </b>
              and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Node.js</b>.
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
