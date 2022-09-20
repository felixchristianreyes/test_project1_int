// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Import other React Component
import CreateTutorial from "./Components/create-tutorial.component";
import EditTutorial from "./Components/edit-tutorial.component";
import TutorialList from "./Components/tutorial-list.component";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  React SERN Stack Sample
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/tutorials"} className="nav-link">
                    Create Tutorial
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/tutorials-list"} className="nav-link">
                    Tutorial List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route index element={<CreateTutorial />} />
                  <Route path="/tutorials" element={<CreateTutorial />} />
                  <Route path="/api/tutorials/:id" element={<EditTutorial />} />
                  <Route path="/tutorials-list" element={<TutorialList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
