import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddApp from "./components/AddApp";
import AppList from "./components/AppList";
import "./App.css";

function App() {
  const [appId, setAppId] = useState("");

  const getAppIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setAppId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Appointment System - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddApp id={appId} setAppId={setAppId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <AppList setAppId={getAppIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
