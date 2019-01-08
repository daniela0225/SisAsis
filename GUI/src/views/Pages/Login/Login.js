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

 componentClick = () => console.log("clicked");

  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      //newPassForm: false
    };


 
  }

SubmitHandler = (e) => {
    e.preventDefault();
    const data = this.state;

    let url = 'usuarios/login';

    
    axios({
      method: 'post',
      url: url,
      data: data,
      config: { headers: {'Content-Type': 'multipart/form-data',  }}
    })
    .then((response) => {
      //handle success
      
        sessionStorage.setItem('jwtToken', response.data.token);
    })
    .catch((response) => {
      //handle error
      //this.props.action();
     
        alert("Usuario o contraseña incorrectos.");
   
        //alert("Usuario no encontrado.");
      
      //console.log(response);
    });
  }




  render() {

     let redirect = (sessionStorage.getItem('jwtToken')!="null")?<Redirect to="/" />:null;

    return (
      //{redirect}
 <section style={ sectionStyle }>
      <div className="app flex-row align-items-center" >
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                    <center>
                      <h1>Login</h1>
                      <section style={ sectionStyle }/>
                      
                    </center>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="email"/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.SubmitHandler}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
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
