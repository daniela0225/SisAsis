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
                    <th>Nickname</th>
                    <th>Contraseña</th>
                    <th>Tipo de usuario</th>
                    <th>Colegio</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>jhuayta</td>
                    <td>af4dada562dgbvg2ghhjhcfg</td>
                    <td>ADMINISTRADOR</td>
                    <td>7</td>
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
                    <td>jhuayta</td>
                    <td>af4dada562dgbvg2ghhjhcfg</td>
                    <td>ADMINISTRADOR</td>
                    <td>7</td>
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
                    <td>jhuayta</td>
                    <td>af4dada562dgbvg2ghhjhcfg</td>
                    <td>ADMINISTRADOR</td>
                    <td>7</td>
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
                    <td>jhuayta</td>
                    <td>af4dada562dgbvg2ghhjhcfg</td>
                    <td>ADMINISTRADOR</td>
                    <td>7</td>
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
                    <td>jhuayta</td>
                    <td>af4dada562dgbvg2ghhjhcfg</td>
                    <td>ADMINISTRADOR</td>
                    <td>7</td>
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
