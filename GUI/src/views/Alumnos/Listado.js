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
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Sexo</th>
                    <th>DNI</th>
                    <th>Fecha Nac.</th>
                    <th>Año</th>
                    <th>Seccion</th>
                    <th>Huella Digital</th>
                    <th>Codigo Alumno</th>
                    <th>Nro. Orden</th>
                    <th>Colegio </th>
                    <th>Tutor</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Jerson Bryan</td>
                    <td>Huayta Carpio</td>
                    <td>Masculino</td>
                    <td>73051791</td>
                    <th>05/09/1998 00:00:00</th>
                    <th>Cuarto Año</th>
                    <th>A</th>
                    <th>2345773269843</th>
                    <th>8</th>
                    <th>3</th>
                    <th>45</th>
                     <th>7</th>
                   
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
                    <td>Jerson Bryan</td>
                    <td>Huayta Carpio</td>
                    <td>Masculino</td>
                    <td>73051791</td>
                    <th>05/09/1998 00:00:00</th>
                    <th>Cuarto Año</th>
                    <th>A</th>
                    <th>2345773269843</th>
                    <th>8</th>
                    <th>3</th>
                    <th>45</th>
                     <th>7</th>
                   
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
                    <td>Jerson Bryan</td>
                    <td>Huayta Carpio</td>
                    <td>Masculino</td>
                    <td>73051791</td>
                    <th>05/09/1998 00:00:00</th>
                    <th>Cuarto Año</th>
                    <th>A</th>
                    <th>2345773269843</th>
                    <th>8</th>
                    <th>3</th>
                    <th>45</th>
                     <th>7</th>
                   
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
                    <td>Jerson Bryan</td>
                    <td>Huayta Carpio</td>
                    <td>Masculino</td>
                    <td>73051791</td>
                    <th>05/09/1998 00:00:00</th>
                    <th>Cuarto Año</th>
                    <th>A</th>
                    <th>2345773269843</th>
                    <th>8</th>
                    <th>3</th>
                    <th>45</th>
                     <th>7</th>
                   
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
                    <td>Jerson Bryan</td>
                    <td>Huayta Carpio</td>
                    <td>Masculino</td>
                    <td>73051791</td>
                    <th>05/09/1998 00:00:00</th>
                    <th>Cuarto Año</th>
                    <th>A</th>
                    <th>2345773269843</th>
                    <th>8</th>
                    <th>3</th>
                    <th>45</th>
                    <th>7</th>
                   
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
