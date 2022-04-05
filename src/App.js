import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Contactme from "./Contactme";
import Background from "./Background";
import Home from "./Home";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import logo from "./Images/logo.svg";

function App() {
  return (
    <div className="whole text-center" style={{ fontFamily: "VT323" }}>
      <BrowserRouter>
        <>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand as={Link} to="/home">
                Home
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/background">
                  Background
                </Nav.Link>
                <Nav.Link as={Link} to="/contactme">
                  Contact Me
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/My-Portfolio-Website/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contactme" element={<Contactme />} />
            <Route path="/background" element={<Background />} />
          </Routes>
        </div>
      </BrowserRouter>
      <div className="fltbtn">
        <Button
          href="https://www.linkedin.com/in/cymonpereira/"
          variant="danger"
          className="hireme"
        >
          Connect
        </Button>
      </div>
    </div>
  );
}

export default App;
