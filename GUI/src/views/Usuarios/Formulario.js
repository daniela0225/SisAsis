import React, { Component } from 'react';
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
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        
        
         
            <Card>
              <CardHeader>
                <strong>Formulario de Usuario</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nickname</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input"/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Contraseña</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="text-input" name="text-input"/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Tipo de Usuario</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">ADMINISTRADOR</option>
                        <option value="2">DIRECTOR</option>
                        <option value="2">PORTERO</option>
                        <option value="2">TUTOR</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Colegio</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">Internacional</option>
                        <option value="2">San Jose</option>
                        <option value="2">Domingo Savio</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  
                  

                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            
          
          
       
      </div>

    );
  }
}

export default Formulario;
