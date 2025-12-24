import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "7801835a-1a95-48e2-95d2-306368eaced1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully ✅");
      e.target.reset();
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <Container fluid className="contact-section" style={{ marginTop: "120px" }}>
      <Particle />

      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="project-heading text-center mb-4">
              Contact <strong className="purple">Me</strong>
            </h1>

            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="btn btn-primary px-4">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
