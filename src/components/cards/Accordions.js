import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ContentTabs from "../layout/ContentTabs";
import ImageTab1 from "../images/tabImages/tab-1.jpg";

function Accordions() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          First
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <img src={ImageTab1}></img>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Second
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Third
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Accordions;
