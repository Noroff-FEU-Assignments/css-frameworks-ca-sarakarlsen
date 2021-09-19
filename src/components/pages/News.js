import React from "react";
import PaginationContent from "../layout/PaginationContent";
import CardContent from "../cards/CardContent";
import Container from "react-bootstrap/Container";
import PageHeading from "../headings/PageHeading";

function News() {
  return (
    <div>
      <Container>
        <PageHeading content="News" />
        <PaginationContent />
        <CardContent />
        <PaginationContent />
      </Container>
    </div>
  );
}

export default News;
