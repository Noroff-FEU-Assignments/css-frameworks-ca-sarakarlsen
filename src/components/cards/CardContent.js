import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import NewsImage1 from "../images/newsImages/news-1.jpg";
import NewsImage2 from "../images/newsImages/news-2.jpg";
import NewsImage3 from "../images/newsImages/news-3.jpg";
import NewsImage4 from "../images/newsImages/news-4.jpg";
import NewsImage5 from "../images/newsImages/news-5.jpg";
import NewsImage6 from "../images/newsImages/news-6.jpg";
import NewsImage7 from "../images/newsImages/news-7.jpg";
import NewsImage8 from "../images/newsImages/news-8.jpg";
import Paragraph from "../headings/Paragraph";

function CardContent() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={NewsImage1} />
          <Card.Body>
            <Paragraph content="Nunc porttitor vel" weight="bold" />
            <Paragraph content="Nunc malesuada eget est fringilla dapibus." />
          </Card.Body>
          <Card.Footer>
            <Button>MORE</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={NewsImage2} />
          <Card.Body>
            <Paragraph content="Nunc porttitor vel" weight="bold" />
            <Paragraph content="Nunc malesuada eget est fringilla dapibus." />
          </Card.Body>
          <Card.Footer>
            <Button>View</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={NewsImage3} />
          <Card.Body>
            <Paragraph content="Nunc porttitor vel" weight="bold" />
            <Paragraph content="Nunc malesuada eget est fringilla dapibus." />
          </Card.Body>
          <Card.Footer>
            <Button>View</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={NewsImage4} />
          <Card.Body>
            <Paragraph content="Nunc porttitor vel" weight="bold" />
            <Paragraph content="Nunc malesuada eget est fringilla dapibus." />
          </Card.Body>
          <Card.Footer>
            <Button>View</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={NewsImage5} />
          <Card.Body>
            <Paragraph content="Nunc porttitor vel" weight="bold" />
            <Paragraph content="Nunc malesuada eget est fringilla dapibus." />
          </Card.Body>
          <Card.Footer>
            <Button>View</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={NewsImage6} />
          <Card.Body>
            <Paragraph content="Nunc porttitor vel" weight="bold" />
            <Paragraph content="Nunc malesuada eget est fringilla dapibus." />
          </Card.Body>
          <Card.Footer>
            <Button>View</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={NewsImage7} />
          <Card.Body>
            <Paragraph content="Nunc porttitor vel" weight="bold" />
            <Paragraph content="Nunc malesuada eget est fringilla dapibus." />
          </Card.Body>
          <Card.Footer>
            <Button>View</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={NewsImage8} />
          <Card.Body>
            <Paragraph content="Nunc porttitor vel" weight="bold" />
            <Paragraph content="Nunc malesuada eget est fringilla dapibus." />
          </Card.Body>
          <Card.Footer>
            <Button>View</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default CardContent;
