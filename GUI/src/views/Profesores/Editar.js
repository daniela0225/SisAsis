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

class Editar extends Component {
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {

      
      id:props.match.params.id,
      name:'',
      last_name:'',
      school:'',
      schools:[],

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
      school:response.data.teacher.school._id
        

      });
 

      
      console.log(response);
    })
    .catch( (response) => {
      //handle error
      alert("Error");
      console.log(response);
    });
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

    let url = 'profesores/update';

    const params = {
      method: 'post',
      url: url,
      data: {teacherId: data.id ,name: data.name ,last_name: data.last_name ,school: data.school},
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      //handle success
      let redirect = <Redirect to="/Home/Profesores" />;
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
                <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"   ></i>Editar profesor</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            
          
          
       
      </div>

    );
  }
}

export default Editar;
