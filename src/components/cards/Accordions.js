import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ImageTab1 from "../images/tabImages/tab-1.jpg";
import ImageTab2 from "../images/tabImages/tab-2.jpg";
import ImageTab3 from "../images/tabImages/tab-3.jpg";
import Image from "react-bootstrap/Image";

function Accordions() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          First
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Image src={ImageTab1} fluid />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Second
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Image src={ImageTab2} fluid />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Third
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Image src={ImageTab3} fluid />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Accordions;
