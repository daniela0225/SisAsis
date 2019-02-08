import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter, ModalHeader,Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class ProfesorDetalle extends Component {



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
      modal: false



    
    };
    
    this.getteacher = this.getteacher.bind(this);
  }
  componentWillMount(){

    this.getteacher();
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
                		<Button block color="warning"  href={'/#/Home/Profesores/Editar/'+this.state.id} >Editar</Button>
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
                     }}  href="#/Home/Profesores">Eliminar Profesor </Button>
                                       
                    
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
           
       

      </div>

    );
  }
}

export default ProfesorDetalle;
