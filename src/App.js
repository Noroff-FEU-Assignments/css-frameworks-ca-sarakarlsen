import React from "react";
import "./sass/style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import PageHeading from "./components/headings/PageHeading";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import News from "./components/pages/News";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <PageHeading content="The YAY Company" style="italic" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/news" className="nav-link">
                  News
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </Nav>
              <Form inline>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="primary">Go</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
