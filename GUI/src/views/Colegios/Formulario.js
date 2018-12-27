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
                <strong>Formulario de Colegio</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nombre</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input"/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Inicial</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">TRUE</option>
                        <option value="2">FALSE</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Primaria</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">TRUE</option>
                        <option value="2">FALSE</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Secundaria</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Opciones..</option>
                        <option value="1">TRUE</option>
                        <option value="2">FALSE</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Logo Institucional</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
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
