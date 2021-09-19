import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function ContactForm() {
  return (
    <>
      <Container bg-light>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" />
          </Form.Group>
          <Form.Group controlId="formBasiEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="form-space">
            <Form.Label>Message</Form.Label>
            <Form.Control type="Message" id="Message" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Allow us to sell your personal details to whomever we want"
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ContactForm;
