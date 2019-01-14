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

  getInitialState() {
            return {
                
                email: '',
                password: '',

            }
        }

  

  handleSubmit(e) {
            
            //var _this = this;
            this.serverRequest = axios
            //console.log(_this.ref.firstName)
            .post("usuarios/login", {
                
                email: 'juan17091998@gmail.com',
                password: 'ABCD@1234'
            })
            .then(function(response) {
                sessionStorage.setItem('jwtToken', response.data.token);
                alert(response.token);
                console.log(response);
            }) .catch(function (error) {
                alert("Error con la credenciales");
                console.log(error);

            });
  }



  render() {
let redirect = (sessionStorage.getItem('jwtToken')!="null")?<Redirect to="/" />:null;

     
    return (
      
 
 <section style={ sectionStyle }>
 {redirect}
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
                      <p className="text-muted">Sign In to your account</p>
                        

                      <Form onSubmit={this.onSubmit}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="email" ref={(input) => { this.uemail = input; }}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" ref={(input) => { this.upassword = input; }}  />
                      </InputGroup>
                      
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" type="submit"  onClick={this.handleSubmit}>Login</Button>
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
