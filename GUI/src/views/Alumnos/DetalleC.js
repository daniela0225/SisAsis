import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter, ModalHeader,Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class AlumnoDetalleC extends Component {



 constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {

      
      id:props.match.params.id,
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
      tutorln:'',
      tutorid:'',
      teacher:'',
      teacherln:'',
      teacherid:'',
      modal: false



    
    };
    
    this.getstudent = this.getstudent.bind(this);
  }
  componentWillMount(){

    this.getstudent();
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
getstudent = () =>{



    const data = this.state;

    let url = 'alumnos/find';

    const params = {
      method: 'post',
      url: url,
      data:{studentId: this.state.id},
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      let date = new Date(response.data.student.birthdate);
          let day = date.getDate();
          let month = date.getMonth();
          if (month < 9) {
             month = '0'+date.getMonth();
           }else{
             month = '1'+date.getMonth();
           }
         
          let year = date.getFullYear();
          let fec = year+"-"+month+"-"+day;
          const data = response.data.student;
         
      
      this.setState({
        name:data.name,
      last_name:data.last_name,
      gender:data.gender,
      DNI:data.DNI,
      birthdate:fec,
      year:data.year,
      section:data.section,
      fingerprint:data.fingerprint,
      code:data.code,
      order_number:data.order_number,
      school:data.school.name,
      tutor:data.tutor.name,
      tutorln:data.tutor.last_name,
      tutorid:data.tutor._id,
      teacher:data.teacher.name,
      teacherln:data.teacher.last_name,
      teacherid:data.teacher._id,
      DNIV:data.tutor.DNI
        

      });

      
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
      
       <Card>
              <CardHeader>
               <Row>
               <Col>
                <h3>{this.state.name} {this.state.last_name}</h3>
               </Col>
               <Col>
                <div align="right">
                <Row>
                		<Col>
                		<Button block color="warning"  href={'/#/Home/Students/Edit/'+this.state.id} >Editar</Button>
                		</Col>
                		<Col>
                		<Button block color="danger" onClick={this.toggle} >Eliminar</Button>
                     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Confirmacion</ModalHeader>
                  <ModalBody>
                    <center>
                        ¿Seguro que desea eliminar al alumno {this.state.name} {this.state.last_name} ?
                        <br/>
                        <br/>
                        <br/>
                    
                    <Button color="danger"  onClick={() => {


                          let url = 'alumnos/delete';
                          

                          const params = {
                            method: 'post',
                            url: url,
                            data: {
                              studentId: this.state.id ,
                              
                            },
                            headers: {
                              "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
                            }
                          };

                          axios(params) 
                          .then( (response) => {
                            //handle success
                                                      
                            console.log(response);
                          })
                          .catch( (response) => {
                           
                            console.log(response);
                          });
                     }}  href="#/Home/Students">Eliminar Alumno </Button>
                                       
                    
                    </center>
                  </ModalBody>
                  
                </Modal>

                		</Col>
                </Row>		
                </div>
                </Col>
              </Row>
              </CardHeader>
              <CardBody>
              <Row>
              <Col lg={6}>
                
                <Table responsive striped hover>
                    <tbody>
                      
                      <tr>
                     		<td><strong>Genero</strong></td>
                     		<td>{this.state.gender}</td> 
                      </tr>
                      <tr>
                     		<td><strong>Fecha de nacimiento</strong></td>
                     		<td>{this.state.birthdate}</td> 
                      </tr>
                      <tr>
                     		<td><strong>Seccion</strong></td>
                     		<td>{this.state.section}</td>
                      </tr>
                      <tr>
                     		<td><strong>Codigo de alumno</strong></td>
                     		<td>{this.state.code}</td>  
                      </tr>
                      <tr>		
                     		<td><strong>Colegio</strong></td>
                     		<td>{this.state.school}</td> 
                     		
                     		                             
                      </tr>
                      <tr>    
                        <td><strong>Profesor</strong></td>
                        <td><a href={'/#/Home/Teachers/Detail/'+this.state.teacherid}>{this.state.teacher} {this.state.teacherln}</a></td> 
                        
                                                     
                      </tr>

                    </tbody>
                  </Table>
                 </Col>
                 
              	<Col lg={6}>
                  <Table responsive striped hover>
                    <tbody>
                      
                      <tr>
                     		<td><strong>DNI</strong></td>
                     		<td>{this.state.DNI}</td>
                     </tr>
                     <tr>
                     		<td><strong>Año</strong></td>
                     		<td>{this.state.year}</td> 
                     </tr>
                     <tr>
                     		<td><strong>Codigo de huella</strong></td>
                     		<td>{this.state.fingerprint}</td> 
                     </tr>
                     <tr> 
                     		<td><strong>Numero de orden</strong></td>
                     		<td>{this.state.order_number}</td> 
                     </tr>
                     <tr>
                     		<td><strong>Padre de Familia</strong></td>
                     		<td><a href={'/#/Home/Tutors/Detail/'+this.state.tutorid}>{this.state.tutor} {this.state.tutorln}</a></td> 
                     		
                     		                             
                      </tr>

                    </tbody>
                  </Table>
                </Col>
                </Row>

              </CardBody>
            </Card>
           
       

      </div>

    );
  }
}

export default AlumnoDetalleC;
