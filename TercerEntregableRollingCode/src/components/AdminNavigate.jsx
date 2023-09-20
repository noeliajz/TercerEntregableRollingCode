import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AdminNavigate = () => {
  return (
    <Container >
    <Row >
      <Col className="bg-dark text-white vh-100">
        <Nav style={{ marginTop: "50px"}} defaultActiveKey="/" className="flex-column justify-content-center align-content-center ">
          <Nav.Link href="/adminPage">HOME</Nav.Link>
          <Nav.Link href="/ProductAdmin" eventKey="link-1">PRODUCTOS</Nav.Link>
          <Nav.Link href="/UserAdmin" eventKey="link-2">USUARIOS</Nav.Link>
          <Nav.Link href="/DailyAdmin" eventKey="link-2">TURNOS</Nav.Link>
          
        </Nav>
      </Col>
      </Row>
      </Container>
  )
}

export default AdminNavigate