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
      kinder:'',
      primary:'',
      highschool:'',
      logo:'',

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

 
handleSubmit(e) {
      

      let obj ={}
    obj.name = this.state.name;
    obj.kinder = this.state.kinder;
    obj.primary = this.state.primary;
    obj.highschool = this.state.highschool;
      const file = this.state.logo;

      const formData = new FormData();
      formData.append("name",obj.name);
      formData.append("kinder",obj.kinder);
      formData.append("primary",obj.primary);
      formData.append("highschool",obj.highschool);
      
      
      if(file){
        formData.append("logo",file,file.name);
      }

      let url = 'colegios/';

      

      const params = {
        method: 'post',
        url: url,
        data: formData,
        headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
      };

      axios(params)
      .then( (response) => {
        //handle success
        let redirect = <Redirect to="/Home/Colegios" />;
        this.setState({
          redirect: redirect
        });

        alert("Se creo correctamente el colegio");
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
                <strong>Formulario de Colegio</strong> 
              </CardHeader>
              
              <CardBody>
               
                   <Form onSubmit={this.onSubmit}  encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nombre</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"  name="name" id="name" onChange={this.handleAttribute} value={this.state.name}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Inicial</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="kinder" id="kinder" bsSize="lg" onChange={this.handleAttribute} value={this.state.kinder}>
                        
                        <option value="true">SI</option>
                        <option value="false">NO</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Primaria</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="primary" id="primary" bsSize="lg" onChange={this.handleAttribute} value={this.state.primary}>
                        
                        <option value="true">SI</option>
                        <option value="false">NO</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Secundaria</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="highschool" id="highschool" bsSize="lg" onChange={this.handleAttribute} value={this.state.highschool}>
                        
                        <option value="true">SI</option>
                        <option value="false">NO</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Logo Institucional</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="logo" name="logo" onChange={this.handleAttribute} value={this.state.logo}/>
                    </Col>
                  </FormGroup>
                   

                 </Form>
              </CardBody>
             <CardFooter>
                   <center>
                <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"  ></i> Crear nuevo colegio</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </center>
              </CardFooter>
             
            </Card>
            
          
          
       
      </div>

    );
  }
}

export default Formulario;
