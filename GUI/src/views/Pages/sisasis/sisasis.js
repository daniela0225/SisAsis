import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../../assets/img/brand/fondo.JPG';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from '../../../AxiosFiles/axios.js';
import { Redirect } from 'react-router-dom';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + { Background } + ")"
};
class Login extends Component {




  render() {


     
    return (
      
 
 <section style={ sectionStyle }>

      <div className="app flex-row align-items-center" >
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    
                    <center>
                      <h1>Bienvenido a SISASIS</h1>
                      <section style={ sectionStyle }/>
                      
                    </center>
                      
                        

                      
                    
                  </CardBody>
                </Card>
               
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    
    );
  }
}

export default Login;
