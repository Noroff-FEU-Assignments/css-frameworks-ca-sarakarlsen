import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ImageTab1 from "../images/tabImages/tab-1.jpg";
import ImageTab2 from "../images/tabImages/tab-2.jpg";
import ImageTab3 from "../images/tabImages/tab-3.jpg";
import Paragraph from "../headings/Paragraph";

function ContentTabs() {
  return (
    <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
      <Tab eventKey="one" title="First">
        <Container>
          <Row>
            <Col>
              <img src={ImageTab1} alt="First Tab" />
            </Col>
            <Col>
              <Paragraph
                content="
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus."
              />
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="two" title="Second">
        <Container>
          <Row>
            <Col>
              <img src={ImageTab2} alt="Second Tab" />
            </Col>
            <Col>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="three" title="Third">
        <Container>
          <Row>
            <Col>
              <img src={ImageTab3} alt="Third Tab" />
            </Col>
            <Col>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}

export default ContentTabs;
