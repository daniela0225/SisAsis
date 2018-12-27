import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Jumbotrons extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Bienvenido</h1>
                  <p className="lead">Sistema de asistencias para la el colegio Internacional .</p>
                  <hr className="my-2" />
                  <p>En el menu de la izquierda encontrara los mantenimientos.</p>
                  
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default Jumbotrons;
