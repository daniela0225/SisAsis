import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter, ModalHeader,Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class ProfesorDetalleC extends Component {



 constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {

      
      id:props.match.params.id,
      name:'',
      last_name:'',
      email:'',
      students:[],
     
      school:'',
      modal: false



    
    };
    
    this.getteacher = this.getteacher.bind(this);
    this.getStudents = this.getStudents.bind(this);
  }
  componentWillMount(){

    this.getteacher();
    this.getStudents();
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
getStudents = () => {
   const url ='alumnos/studentsByTeacher?teacherId='+this.state.id
  axios.get(url, {
      headers: {
      "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
      }
    }
    )
    .then( res => {
    
    const data = res.data.students;
    let students = this.state.students;
    console.log(data);

    for(let i = 0; i < data.length ; i++){
      

      

      console.log(data[i]);
      let date = new Date(data[i].birthdate);
      let day = date.getDate();
      let month = date.getMonth();
     
      let birthdate = "Dia : "+day+" Mes : "+month;
      students.push(

        <Col lg={6} key={data[i]._id}>
            <Card>

              <CardHeader>
               
                <h3>{data[i].name} {data[i].last_name}</h3>
                <a href={'/#/Home/Alumnos/Detalle/'+data[i]._id}>Ver detalles </a>              
                
              </CardHeader>
              <CardBody>
              <Row>
              <Col>
                
                <Table responsive striped hover>
                    <tbody>
                      
                      <tr>
                        <td><strong>DNI</strong></td>
                        <td>{data[i].DNI}</td> 
                      </tr>
                      <tr>
                        <td><strong>Cumpleaños</strong></td>
                        <td>{birthdate}</td> 
                      </tr>
                      <tr>
                        <td><strong>Nro. Orden</strong></td>
                        <td>{data[i].order_number}</td>
                      </tr>
                      

                    </tbody>
                  </Table>
                 </Col>
                 
                
                </Row>

              </CardBody>
            </Card>
            </Col>
      
        

        
      );
    }

    this.setState({ students: students });

    })
    .catch( res => {
   
    console.log(res);
    })
  }
getteacher = () =>{



    const data = this.state;

    let url = 'profesores/find';

    const params = {
      method: 'post',
      url: url,
      data: {teacherId: data.id},     
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      
          const data = response.data.teacher;
         
      
      this.setState({
        name:data.name,
      last_name:data.last_name,  
      email:data.email,  
      school:data.school.name
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
                		<Button block color="warning"  href={'/#/Home/Teachers/Edit/'+this.state.id} >Editar</Button>
                		</Col>
                		<Col>
                		<Button block color="danger" onClick={this.toggle} >Eliminar</Button>
                     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Confirmacion</ModalHeader>
                  <ModalBody>
                    <center>
                        ¿Seguro que desea eliminar al profesor {this.state.name} {this.state.last_name} ?
                        <br/>
                        <br/>
                        <br/>
                    
                    <Button color="danger"  onClick={() => {


                          let url = 'profesores/delete';
                          

                          const params = {
                            method: 'post',
                            url: url,
                            data: {
                              teacherId: this.state.id ,
                              
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
                     }}  href="#/Home/Teachers">Eliminar Profesor </Button>
                                       
                    
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
              <Col >
                
                <Table responsive striped hover>
                    <tbody>
                      
                      <tr>
                     		<td><strong>Colegio</strong></td>
                     		<td>{this.state.school}</td> 
                      </tr>
                      
                      

                    </tbody>
                  </Table>
                 </Col>
                 <Col >
                
                <Table responsive striped hover>
                    <tbody>
                      
                      <tr>
                        <td><strong>Email</strong></td>
                        <td><a href={'mailto:'+this.state.email}>{this.state.email}</a></td> 
                      </tr>
                      
                      

                    </tbody>
                  </Table>
                 </Col>
                 
              	
                </Row>

              </CardBody>
            </Card>
            <Card className="text-white bg-primary">
            <CardHeader>
            <h5>Alumnos</h5>
            </CardHeader>
            </Card>
             <Row>
            { (this.state.students !== null)?this.state.students:("No se encuentra alumnos") }
            </Row>
           
       

      </div>

    );
  }
}

export default ProfesorDetalleC;
