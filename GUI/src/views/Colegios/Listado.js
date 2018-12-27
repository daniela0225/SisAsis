import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Listado extends Component {
  render() {
    return (
      <div className="animated fadeIn">
       <Card>
              <CardHeader>
                  
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="success">Nuevo Registro</Button>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Inicial</th>
                    <th>Primaria</th>
                    <th>Secundaria</th>
                    <th>Foto</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Colegio Internacional</td>
                    <td>true</td>
                    <td>true</td>
                    <td>true</td>
                    <td>
                    <center>
                    <img src={'../../assets/img/avatars/instd.png'} height="15%" width="15%"  />
                    </center>
                    </td>
                    <td>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning">Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger">Eliminar</Button>
                     </Col>
                    </td>
                   
                  </tr>
                  <tr>
                     <td>Colegio Internacional</td>
                    <td>true</td>
                    <td>true</td>
                    <td>true</td>
                    <td>
                    <center>
                    <img src={'../../assets/img/avatars/instd.png'} height="15%" width="15%"  />
                    </center>
                    </td>
                    <td>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning">Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger">Eliminar</Button>
                     </Col>
                    </td>
                   
                  </tr>
                  <tr>
                     <td>Colegio Internacional</td>
                    <td>true</td>
                    <td>true</td>
                    <td>true</td>
                    <td>
                    <center>
                    <img src={'../../assets/img/avatars/instd.png'} height="15%" width="15%"  />
                    </center>
                    </td>
                    <td>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning">Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger">Eliminar</Button>
                     </Col>
                    </td>
                   
                  </tr>
                  <tr>
                     <td>Colegio Internacional</td>
                    <td>true</td>
                    <td>true</td>
                    <td>true</td>
                    <td>
                    <center>
                    <img src={'../../assets/img/avatars/instd.png'} height="15%" width="15%"  />
                    </center>
                    </td>
                    <td>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning">Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger">Eliminar</Button>
                     </Col>
                    </td>
                   
                  </tr>
                  <tr>
                     <td>Colegio Internacional</td>
                    <td>true</td>
                    <td>true</td>
                    <td>true</td>
                    <td>
                    <center>
                    <img src={'../../assets/img/avatars/instd.png'} height="15%" width="15%"  />
                    </center>
                    </td>
                    <td>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning">Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger">Eliminar</Button>
                     </Col>
                    </td>
                   
                  </tr>
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
       

      </div>

    );
  }
}

export default Listado;
