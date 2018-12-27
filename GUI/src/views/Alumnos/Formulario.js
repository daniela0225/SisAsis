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
                <strong>Formulario de Alumno</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nombres</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Apellidos</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input"  />
                      
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Sexo</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">DNI</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input"  />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Fecha de Nacimiento </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input"  />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Año</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">Primero Secundaria</option>
                        <option value="2">Segundo Secundaria</option>
                        <option value="2">Tercero Secundaria</option>
                        <option value="2">Cuarto Secundaria</option>
                        <option value="2">Quinto Secundaria</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Seccion</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="2">C</option>
                        <option value="2">U</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Huella Digital</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Codigo Alumno</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input"  />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nro. Orden</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input"  />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Colegio</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">Colegio Internacional</option>
                        <option value="2">Colegio Juventus</option>
                        <option value="2">Colegio San Jose</option>
                        <option value="2">Colegio Dunasltair</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Tutor</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">Crear Tutor</option>
                        <option value="2">Juan Pino</option>
                        <option value="2">Ronaldo Monje</option>
                        <option value="2">Joshua Miranda</option>
                        
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
