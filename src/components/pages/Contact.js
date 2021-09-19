import React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "../form/ContactForm";
import PageHeading from "../headings/PageHeading";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactInfo from "../form/ContactInfo";

function Contact() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} lg={{ order: "first" }} xs={12}>
            <Container>
              <PageHeading content="Submit your details" />
            </Container>
          </Col>

          <Col md={6} xs={12} xs={{ order: "last" }} md={{ order: "first" }}>
            <ContactForm />
          </Col>
          <Col md={6} xs={12} xs={{ order: "first" }}>
            <Container>
              <ContactInfo />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
