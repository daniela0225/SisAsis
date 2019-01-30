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

      
      id: props.match.params.id,
      student:'',
      date:'',
      school:'',
      type:'',
      students:[],
      schools:[],
      
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
    this.handleAttribute = this.handleAttribute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRecord = this.getRecord.bind(this);
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

  getRecord = (id) => {
    axios.get('anuncios/find?anuncioId=' + id,
        {headers: { "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken') }})
      .then((response) => {
        const data = response.data.anuncio;

        this.setState({
          _id: data._id,
        id_cat: data.categoria._id,
        nom_cat: data.categoria.nombre,
        fec_pub: data.fec_pub,
        imagenUrl: data.imagen,
        imagenUrlPreviews: [],
        precio: data.precio,
        sub_cat: data.subcategoria,
        titulo: data.titulo,
        descripcion: data.descripcion,
        usuario: data.usuario._id,
        nombres: data.usuario.nombres,
        cambiarImagen: false
        });
        let array = [];
        for(let i=0, l=this.state.imagenUrl.length;i < l; i++){
          array.push(<img src={localStorage.getItem('path') + this.state.imagenUrl[i]} />);
        }
        this.setState({
          imagenUrlPreviews: array,
          load:true
        });
      })
      .catch((response) => {
        console.log("Error");
      });   
  }
  componentWillMount = () => {
   
      this.getRecord(this.props.match.params.id);

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


      axios.get('alumnos', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const dataa = res.data.students;
        let students = this.state.students;
        console.log("students");
        console.log(dataa);
        students.push(<option key="4" >Opciones...</option>);

        for(let i = 0; i < dataa.length ; i++){
          console.log(dataa[i]);
          students.push(
            

              <option  key={dataa[i]._id} value={dataa[i]._id}>{dataa[i].name}</option>
                       
          );
        }

        this.setState({ students: students });

      })
      .catch( res => {
        console.log("ERROR STUDENTS");
       
        console.log(res);
      })

       axios.get('registros', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const dataa = res.data.students;
        let students = this.state.students;
        console.log("students");
        console.log(dataa);
        students.push(<option key="4" >Opciones...</option>);

        for(let i = 0; i < dataa.length ; i++){
          console.log(dataa[i]);
          students.push(
            

              <option  key={dataa[i]._id} value={dataa[i]._id}>{dataa[i].name}</option>
                       
          );
        }

        this.setState({ students: students });

      })
      .catch( res => {
        console.log("ERROR STUDENTS");
       
        console.log(res);
      })


  }
handleSubmit = (e) => {   

  e.preventDefault(); 

    const data = this.state;

    let url = 'registros/';
    const fecha = Date.now();

    const params = {
      method: 'post',
      url: url,
      data: {
        name: data.name ,
        student:data.student,
        date:fecha,
        school:data.school,
        type:data.type,
      },
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      //handle success
      let redirect = <Redirect to="/Home/Registros" />;
      this.setState({
        redirect: redirect
      });

      alert("Se Registro correctamente la asistencias");
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
                <strong>Registro de asistencia</strong> 
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.onSubmit} method="post"  className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Estudiante</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="student" id="student" bsSize="lg" onChange={this.handleAttribute} value={this.state.student}>
                         { (this.state.students !== null)?this.state.students:( <option>No se ecnuentran colegios</option>) }
                        
                      </Input>
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
                      <Label htmlFor="selectLg">Tipo de Registro</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="type" id="type" bsSize="lg" onChange={this.handleAttribute} value={this.state.type}>
                        <option >Opciones..</option>
                        <option value="CHECK_IN">Entrada</option>
                        <option value="CHECK_OUT">Salida</option>
                        
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  
                  
                 
                  
                  

                </Form>

              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"></i> Crear registro</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            
          
          
       
      </div>

    );
  }
}

export default Editar;