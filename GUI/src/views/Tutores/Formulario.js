import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Redirect } from 'react-router-dom';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Formulario extends Component {
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {

      
      name:'',
      last_name:'',
      DNI:'',
      address:'',
      cellphone:'',
      telephone:'',
      email:'',
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
    this.handleAttribute = this.handleAttribute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  handleAttribute(e){
    var attr = e.target.value;
    var attrName = e.target.id;
    this.setState({ [attrName]: attr });
  }



 
handleSubmit = (e) => {   

  e.preventDefault(); 

    const data = this.state;

    let url = 'tutores/';

    const params = {
      method: 'post',
      url: url,
      data: {
        name: data.name ,
        last_name: data.last_name ,
        DNI: data.DNI ,
        cellphone: data.cellphone,
        telephone: data.telephone,
        address: data.address,
        email: data.email
      },
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      //handle success
      let redirect = <Redirect to="/Home/Tutores" />;
      this.setState({
        redirect: redirect
      });

      alert("Se creo correctamente el tutor");
      console.log(response);
    })
    .catch( (response) => {
      //handle error
      alert("Error");
      console.log(response);
    });
  }


  render() {
    return (
      <div className="animated fadeIn">
        
        {this.state.redirect}
         
            <Card>
              <CardHeader>
                <strong>Formulario de Tutor</strong> 
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.onSubmit} method="post"  className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nombres</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" onChange={this.handleAttribute} value={this.state.name}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Apellidos</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="last_name" name="last_name" onChange={this.handleAttribute} value={this.state.last_name}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">DNI</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="DNI" name="DNI" onChange={this.handleAttribute} value={this.state.DNI}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Direccion</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="address" name="address" onChange={this.handleAttribute} value={this.state.address}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Celular</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="cellphone" name="cellphone" onChange={this.handleAttribute} value={this.state.cellphone}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Telefono</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="telephone" name="telephone" onChange={this.handleAttribute} value={this.state.telephone}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" onChange={this.handleAttribute} value={this.state.email}/>
                      
                    </Col>
                  </FormGroup>
                 
                  
                  

                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"></i> Crear nuevo tutor</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            
          
          
       
      </div>

    );
  }
}

export default Formulario;
