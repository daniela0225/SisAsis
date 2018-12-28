import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class HomeAdmin extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Panel de Administrador</h1>
                  <p className="lead">Bienvenido al sistema de asistencias SISASIS .</p>
                  <hr className="my-2" />
                 
                  <center>
                   <img src={'../../assets/img/avatars/huella.jpg'} height="40%" width="40%"  />
                  </center>
                  
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default HomeAdmin;