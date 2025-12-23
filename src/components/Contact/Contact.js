import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "7801835a-1a95-48e2-95d2-306368eaced1");
    formData.append("subject", "New Portfolio Contact Message");
    formData.append("from_name", "Manikanta Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully ✅");
        e.target.reset();
      } else {
        alert("Submission failed ❌");
      }
    } catch (error) {
      alert("Network error ❌");
    }
  };

  return (
    <Container fluid className="contact-section">
      {/* 🔥 Particle MUST stay behind */}
      <Particle style={{ position: "fixed", zIndex: -1 }} />

      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="project-heading text-center mb-4">
              Contact <span className="purple">Me</span>
            </h1>

            <div className="contact-card">
              <Form onSubmit={handleSubmit}>
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
                  <Button type="submit" className="contact-btn">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
