import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter, ModalHeader,Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class TutorDetalleC extends Component {



 constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {

      
      id:props.match.params.id,
      name:'',
      last_name:'',
     
      DNI:'',
      address:'',
      cellphone:'',
      telephone:'',
      email:'',
      school:'',
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

    let url = 'tutores/find?tutorId='+ data.id;

    const params = {
      method: 'get',
      url: url,
     
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      
          const data = response.data.tutor;
         
      
      this.setState({
        name:data.name,
      last_name:data.last_name,
    
      DNI:data.DNI,
      address:data.address,
      cellphone:data.cellphone,
      telephone:data.telephone,
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
                		<Button block color="warning"  href={'/#/Home/Tutors/Edit/'+this.state.id} >Editar</Button>
                		</Col>
                		<Col>
                		<Button block color="danger" onClick={this.toggle} >Eliminar</Button>
                     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Confirmacion</ModalHeader>
                  <ModalBody>
                    <center>
                        ¿Seguro que desea eliminar al tutor {this.state.name} {this.state.last_name} ?
                        <br/>
                        <br/>
                        <br/>
                    
                    <Button color="danger"  onClick={() => {


                          let url = 'tutores/delete';
                          

                          const params = {
                            method: 'post',
                            url: url,
                            data: {
                              tutorId: this.state.id ,
                              
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
                     }}  href="#/Home/Tutors">Eliminar Tutor </Button>
                                       
                    
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
                     		<td><strong>DNI</strong></td>
                     		<td>{this.state.DNI}</td> 
                      </tr>
                      <tr>
                     		<td><strong>Celular</strong></td>
                     		<td>{this.state.cellphone}</td> 
                      </tr>
                      <tr>
                     		<td><strong>Email</strong></td>
                     		<td><a href={'mailto:'+this.state.email}>{this.state.email}</a></td>
                      </tr>
                      

                    </tbody>
                  </Table>
                 </Col>
                 
              	<Col lg={6}>
                  <Table responsive striped hover>
                    <tbody>
                      
                      <tr>
                     		<td><strong>Direccion</strong></td>
                     		<td>{this.state.address}</td>
                     </tr>
                     <tr>
                     		<td><strong>Telefono</strong></td>
                     		<td>{this.state.telephone}</td> 
                     </tr>
                     <tr>
                        <td><strong>Colegio</strong></td>
                        <td>{this.state.school}</td> 
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

export default TutorDetalleC;
