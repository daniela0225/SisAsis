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
      password:'',
      type:'TUTOR',
      school:'',
      schools:[],
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
componentDidMount = () =>{
    axios.get('colegios', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const dat = res.data.orders;
        let schools = this.state.schools;
        console.log("schools");
        console.log(dat);
        schools.push(<option key="4" >Opciones...</option>);

        for(let i = 0; i < dat.length ; i++){
          console.log(dat[i]);
          schools.push(
            

              <option  key={dat[i]._id} value={dat[i]._id}>{dat[i].name}</option>
                       
          );
        }

        this.setState({ schools: schools });

      })
      .catch( res => {
        console.log("ERROR SCHOOLS");
       
        console.log(res);
      })




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
        email: data.email,
        school: data.school
      },
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      //handle 

          const paramss = {
            method: 'post',
            url: 'usuarios/',
            data: {
                  email: data.email,
                  password: data.password,
                  type: data.type,
                  school: data.school },
            headers: {
              "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
          };
          axios(paramss) 
          .then( (response) => {

            console.log("User created")
          })
          .catch( (response) => {
            alert("Error");
      
          });



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
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password" name="password" onChange={this.handleAttribute} value={this.state.password}/>
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Colegio</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="school" id="school" bsSize="lg" onChange={this.handleAttribute} value={this.state.school}>
                         
                         { (this.state.schools !== null)?this.state.schools:( <option>No se ecnuentran colegios</option>) }
                        
                      </Input>
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
