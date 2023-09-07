
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


const AdminPage = () => {





  return (
    <>
      <h1>PAGINA DEL AMINISTRADOR</h1>
      <div className="conteiner">
       
      <div>
            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="turnos" title="TURNOS">
                <TabDailyDoc1 />
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
              <Tab eventKey="product" title="PRODUCTOS">
                <TabProduct />
              </Tab>
              <Tab eventKey="users" title="USUARIOS">
                <TabUsers />
              </Tab>
            </Tabs>
          </div>
        
      </div>
    


    </>
  )
}

export default AdminPage