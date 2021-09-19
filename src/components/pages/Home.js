import React from "react";
import ContentTabs from "../layout/ContentTabs";
import Container from "react-bootstrap/Container";
import PageHeading from "../headings/PageHeading";
import ImageSlider from "../images/ImageSlider";
import Paragraph from "../headings/Paragraph";
import Accordions from "../cards/Accordions";

function Home() {
  return (
    <>
      <ImageSlider />
      <Container>
        <PageHeading content="We do YAY things" fontStyle="italic" />
        <Paragraph
          padding="20"
          content="
          Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus
          urna. Suspendisse massa diam, efficitur eu massa euismod, pretium
          lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget
          massa."
        />
        <div className="d-none d-md-block">
          <ContentTabs />
        </div>
        <div className="d-md-none">
          <Accordions />
        </div>
      </Container>
    </>
  );
}

export default Home;
