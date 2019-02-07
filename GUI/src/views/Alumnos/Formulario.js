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
  Modal, 
  ModalBody,
  ModalFooter,
  ModalHeader,
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
  Table,
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
      gender:'',
      DNI:'',
      birthdate:'',
      year:'',
      section:'',
      fingerprint:'',
      code:'',
      order_number:'',
      school:'',
      tutor:'',
      DNIT:'',
      DNIV:'',
      schools:[],
      tutors:[],
      teachers:[],


      modal: false,
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
    this.handleAttribute = this.handleAttribute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
    this.setState({
      modal: !this.state.modal,
    });
  }
  

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  handleAttribute = (e) =>{
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




   axios.get('profesores', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const dataa = res.data.teachers;
        let teachers = this.state.teachers;
        console.log("teachers");
        console.log(dataa);
        teachers.push(<option key="4" >Opciones...</option>);

        for(let i = 0; i < dataa.length ; i++){
          console.log(dataa[i]);
          teachers.push(
            

              <option  key={dataa[i]._id} value={dataa[i]._id}>{dataa[i].name} {dataa[i].last_name}</option>
                       
          );
        }

        this.setState({ teachers: teachers });

      })
      .catch( res => {
        console.log("ERROR TEACHERS");
       
        console.log(res);
      })


        }

 
searchByDNI = (e) => {

  e.preventDefault(); 

    const data = this.state;

   // let url = 'usuarios/';

    const params = {
      method: 'post',
      url: 'tutores/searchByDNI',
      data: {string: data.DNIT },
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {

      const dataa = response.data.tutor;
      let tutors = this.state.tutors;
      if(dataa.length > 0){
        
        console.log("tutors");
        console.log(dataa);
       

        for(let i = 0; i < dataa.length ; i++){
          console.log(dataa[i]);
          


          tutors.push(
            

              
               <tr  key={Math.random()}>
                    <td>{dataa[i].name} {dataa[i].last_name}</td>
                    
                    <td>{dataa[i].DNI}</td>
                   

                    <td>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="dark" id="tutor" name="tutor" value={dataa[i]._id} onClick={ () => {
                                this.setState({ collapse: !this.state.collapse });
                                this.setState({
                                   modal: !this.state.modal,
                                  });
                                this.state.tutor =dataa[i]._id;
                                this.state.DNIV =dataa[i].DNI;

                                
                            }} >Seleccionar Tutor</Button>
                    </Col>
                    
                    </td>
                   
                  </tr>
                       
          );
        }
      }else{

      tutors.push(<tr  key={Math.random()}><td>No hay tutores que coincidan con la busqueda</td><td>-</td><td>-</td></tr>);

    }
      
      

        this.setState({ tutors: tutors });
    })
    .catch( (response) => {
      //handle error
      alert("Error");
      console.log(data.DNIT);
      console.log(response);
    });
  
    }
handleSubmit = () =>{
  const data = this.state;

   // let url = 'usuarios/';

    const params = {
      method: 'post',
      url: 'alumnos/',
      data: {
            name: data.name,
            last_name: data.last_name,
            gender: data.gender,
            DNI: data.DNI,
            birthdate: data.birthdate,
            year: data.year,
            section: data.section,
            fingerprint: data.fingerprint,
            code: data.code,
            order_number: data.order_number,
            school: data.school,
            tutor: data.tutor,
            teacher: data.teacher },
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      //handle success
      let redirect = <Redirect to="/Home/Alumnos" />;
      this.setState({
        redirect: redirect
      });

      alert("Se creo correctamente al alumno");
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
                <strong>Formulario de Alumno</strong> 
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.onSubmit}  className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nombres</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name"  onChange={this.handleAttribute} value={this.state.name} />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Apellidos</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="last_name" name="last_name"  onChange={this.handleAttribute} value={this.state.last_name} />
                      
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Sexo</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="gender" id="gender" bsSize="lg"  onChange={this.handleAttribute} value={this.state.gender}>
                       
                        <option >Opciones...</option>
                        <option value="MALE">Masculino</option>
                        <option value="FEMALE">Femenino</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">DNI</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="DNI" name="DNI"  onChange={this.handleAttribute} value={this.state.DNI} />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Fecha de Nacimiento </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="birthdate" name="birthdate"  onChange={this.handleAttribute} value={this.state.birthdate} />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                   <Col md="3">
                      <Label htmlFor="text-input">Año:</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="year" name="year"  onChange={this.handleAttribute} value={this.state.year} />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Seccion</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="section" id="section" bsSize="lg" onChange={this.handleAttribute} value={this.state.section}>
                        <option >Opciones...</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Huella Digital</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="fingerprint" name="fingerprint" onChange={this.handleAttribute} value={this.state.fingerprint} />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Codigo Alumno</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="code" name="code" onChange={this.handleAttribute} value={this.state.code} />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nro. Orden</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" id="order_number" name="order_number" onChange={this.handleAttribute} value={this.order_number} />
                      
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
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Profesor</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="teacher" id="teacher" bsSize="lg" onChange={this.handleAttribute} value={this.state.teacher}>
                         
                         { (this.state.teachers !== null)?this.state.teachers:( <option>No se ecnuentran profesores</option>) }
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Tutor</Label>
                    </Col>
                    


                     <Col col="6" sm="4" md="3" xl className="mb-3 mb-xl-0">
                     <Button block color="secondary" onClick={this.toggle}>Seleccionar Tutor</Button>
                     </Col>
                      <Col col="6" sm="4" md="3" xl className="mb-3 mb-xl-0">
                     <h4>{this.state.DNIV}</h4>
                     </Col>
                     
                      
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Seleccionar Tutor</ModalHeader>
                  <ModalBody>
                    <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="text" id="DNIT" name="DNIT" placeholder="DNI del tutor" onChange={this.handleAttribute} value={this.state.DNIT} />
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary" onClick={this.searchByDNI}><i className="fa fa-search"></i> Buscar</Button>
                        </InputGroupAddon>
                        
                      </InputGroup>
                      <br/>
                      <Table responsive bordered>
                      <thead>
                      <tr>
                       <th>Nombre</th>
                      <th>DNI</th>
                       <th>Accion</th>
                      
                      </tr>
                      </thead>
                      <tbody>
                      { (this.state.tutors.length > 0 )?this.state.tutors:(<tr key={Math.random()}><td>No hay tutores que coincidan con la busqueda</td><td>-</td><td>-</td></tr>) }
                      </tbody>
                      </Table>
                    </Col>
                  </FormGroup>
                  </Form>
                  </ModalBody>
                  <ModalFooter>
                    {' '}
                    <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                  </ModalFooter>
                </Modal>
                   
                  </FormGroup>
                  

                </Form>
              </CardBody>
              <CardFooter>
              <center>
                <Button type="submit" size="sm" color="primary"  onClick={this.handleSubmit} ><i className="fa fa-dot-circle-o"></i> Crear nuevo Alumno</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </center>
              </CardFooter>
            </Card>
            
          
          
       
      </div>

    );
  }
}

export default Formulario;
