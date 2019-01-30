import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../../assets/img/brand/fondo.JPG';
import { Button, Card, CardBody, CardImg, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from '../../../AxiosFiles/axios.js';
import { Redirect } from 'react-router-dom';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + { Background } + ")"
};
class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    };

    this.handleAttribute = this.handleAttribute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleAttribute(e){
    var attr = e.target.value;
    var attrName = e.target.id;
    this.setState({ [attrName]: attr });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let obj ={}
    obj.email = this.state.email;
    obj.password = this.state.password;

  axios.post("usuarios/login", {
            email: obj.email,
            password: obj.password
           
  })
  .then((response) => {
          sessionStorage.setItem('jwtToken', response.data.token);
          window.location.reload();
          alert("Verificado")
            console.log(response);
  }) .catch((error) => {
          alert("Error")
            console.log(error);
        });
  }


 
  render() {


     
    return (
      
 
 <section >

      <div className="app flex-row align-items-center" >
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    
                    <center>
                      <h1>Login</h1>
                      <section style={ sectionStyle }/>
                      
                    </center>
                      <p className="text-muted">Inice sesion con su cuenta</p>

                      <Form onSubmit={this.onSubmit}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" autoComplete="username" id="email" name="email" onChange={this.handleAttribute} value={this.state.email} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" id="password" name="password" onChange={this.handleAttribute} value={this.state.password} />
                      </InputGroup>
                      
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" type="submit" onClick={this.handleSubmit} >Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                         
                        </Col>
                      </Row>
                    </Form>
                    
                  </CardBody>

                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }} color="warning">
                  <CardBody className="text-center">
                    <div>
                      
                      <img src={'./logo.png'} height="100%" width="100%"/>
                      
                    </div>
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