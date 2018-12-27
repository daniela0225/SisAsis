import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Home extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Colegio Internacional</h1>
                  <p className="lead">Bienvenido a su Sistema de asistencias  .</p>
                  <hr className="my-2" />
                 
                  <center>
                   <img src={'../../assets/img/avatars/instd.png'} height="20%" width="20%"  />
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

export default Home;
