import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class AlumnoDetalle extends Component {



 constructor(props) {
    super(props);


   
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
      tutor:''


    
    };
    
    this.getstudent = this.getstudent.bind(this);
  }
  componentWillMount(){

    this.getstudent();
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
      tutor:data.DNI,
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
                		<Button block color="warning" >Editar</Button>
                		</Col>
                		<Col>
                		<Button block color="danger" >Eliminar</Button>
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
                     		<td>{this.state.tutor} </td> 
                     		
                     		                             
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

export default AlumnoDetalle;
