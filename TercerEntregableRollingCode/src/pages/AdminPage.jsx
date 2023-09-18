
import React from 'react'
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { arrayUsers } from '../data/usurarios';
import { arrayProductos } from '../data/product';
import TabProduct from '../components/TabProduct';
import TabUsers from '../components/TabUsers';
import TabDailyDoc1 from '../components/TabDailyDoc1';
import TabDailyDoc2 from '../components/TabDailyDoc2';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AdminPage = () => {





  return (


    <>

      <Container style={{ marginTop: "50px", height: "500px", marginInline: "0px",  width:"100%" }}>
        <Row style={{ height: "100%"}}>
          <Col className="bg-dark text-white" xs={6} md={4} >
            <Nav style={{ marginTop: "50px"}} defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link eventKey="link-1">PRODUCTOS</Nav.Link>
              <Nav.Link eventKey="link-2">USUARIOS</Nav.Link>
              <Nav.Link eventKey="link-2">TURNOS</Nav.Link>
              
            </Nav>
          </Col>
          <Col xs={12} md={8} style={{ marginTop: "50px"}}>
            <h1>PAGINA DEL AMINISTRADOR</h1>
            <div className="conteiner">

              <div>
                <Tabs
                  defaultActiveKey="profile"
                  id="justify-tab-example"
                  className="mb-3"
                  justify
                >
                  <Tab eventKey="link-1" title="TURNOS">

                    <TabDailyDoc2 />
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="conteiner">


              <div>
                <Tabs
                  defaultActiveKey="profile"
                  id="justify-tab-example"
                  className="mb-3"
                  justify
                >
                  <Tab eventKey="link-1" title="PRODUCTOS">
                    <TabProduct />
                  </Tab>
                  <Tab eventKey="users" title="USUARIOS">
                    <TabUsers />
                  </Tab>
                </Tabs>
              </div>

            </div>



          </Col>
        </Row>

      </Container>






    </>
  )
}

export default AdminPage