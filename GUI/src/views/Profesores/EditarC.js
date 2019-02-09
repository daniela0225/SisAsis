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

class EditarC extends Component {
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {

      
      id:props.match.params.id,
      name:'',
      last_name:'',
      email:'',
      school:'',
    

      collapse: true,
      fadeIn: true,
      timeout: 300
    };
    this.handleAttribute = this.handleAttribute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getteacher = this.getteacher.bind(this);
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
componentWillMount(){
  this.getteacher();
}
getteacher = () =>{



    const data = this.state;

    let url = 'profesores/find';

    const params = {
      method: 'post',
      url: url,
      data:{teacherId: data.id},  
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {

      
        
      
      this.setState({
        name:response.data.teacher.name,
      last_name:response.data.teacher.last_name,
      school:response.data.teacher.school._id,
      email:response.data.teacher.email,
        

      });
 

      
      console.log(response);
    })
    .catch( (response) => {
      //handle error
      alert("Error");
      console.log(response);
    });
}

 
handleSubmit = (e) => {   

  e.preventDefault(); 

    const data = this.state;

    let url = 'profesores/update';

    const params = {
      method: 'post',
      url: url,
      data: {teacherId: data.id ,name: data.name ,last_name: data.last_name ,school: data.school, email: data.email},
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      //handle success
      let redirect = <Redirect to="/Home/Teachers" />;
      this.setState({
        redirect: redirect
      });

      alert("Se edito correctamente el profesor");
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
                <strong>Editar Profesor</strong> 
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.onSubmit} method="post" className="form-horizontal">
                  
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
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" onChange={this.handleAttribute} value={this.state.email}/>
                      
                    </Col>
                  </FormGroup>
                  
                                   
                  

                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"   ></i>Editar profesor</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            
          
          
       
      </div>

    );
  }
}

export default EditarC;
