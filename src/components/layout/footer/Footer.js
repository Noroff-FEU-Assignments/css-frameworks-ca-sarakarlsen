import React from "react";
import { FaVimeoV, FaYoutube } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <Row>
        <Col xs={12} md={4} xs={{span: 6, offset: 4}} md={{offset: 0}}>
          <FaVimeoV />
          <FaYoutube />
        </Col>
        <Col>hello@yay.com</Col>
        <Col>Copyright 2020</Col>
      </Row>
    </footer>
  );
}

export default Footer;
