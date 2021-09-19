import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Paragraph from "../headings/Paragraph";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactInfo() {
  return (
    <>
      {" "}
      <Row className="contact">
        <Col xs={3} md={{ span: 2 }}>
          <FaRegEnvelope />
        </Col>
        <Col>
          <Paragraph content="mail" />
        </Col>
      </Row>
      <Row className="contact">
        <Col xs={3} md={{ span: 2 }}>
          <FaPhoneAlt />
        </Col>
        <Col>
          <Paragraph content="123 456 7890" />
        </Col>
      </Row>
      <Row className="contact">
        <Col xs={3} md={{ span: 2 }}>
          <FaMapMarkerAlt />
        </Col>
        <Col>
          <Paragraph content="123 Some street" />
          <Paragraph content="Somewhere" />
          <Paragraph content="Some City" />
          <Paragraph content="1000" />
        </Col>
      </Row>
    </>
  );
}

export default ContactInfo;
