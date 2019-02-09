import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter, ModalHeader,Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class UsuarioDetalleC extends Component {



 constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {

      
      id:props.match.params.id,
      email:'',
      type:'',
     
      school:'',
      
      modal: false



    
    };
    
    this.getsuser = this.getsuser.bind(this);
  }
  componentWillMount(){

    this.getsuser();
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
getsuser = () =>{



    const data = this.state;

    let url = 'usuarios/edit';

    const params = {
      method: 'post',
      url: url,
     data:{userId:data.id},
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      
    const data = response.data.usuario;
    if(response.data.usuario.school != null){

      
      this.setState({
      email:data.email,
      type:data.type,    
      school:data.school.name
         });
    }else{
      this.setState({
      email:data.email,
      type:data.type,    
      school:'NULL'
         });

    }

      
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
                <h3>{this.state.email}</h3>
               </Col>
               <Col>
                <div align="right">
                <Row>
                		<Col>
                		<Button block color="warning"  href={'/#/Home/Users/Edit/'+this.state.id} >Editar</Button>
                		</Col>
                		<Col>
                		<Button block color="danger" onClick={this.toggle} >Eliminar</Button>
                     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Confirmacion</ModalHeader>
                  <ModalBody>
                    <center>
                        ¿Seguro que desea eliminar al usuario {this.state.email}  ?
                        <br/>
                        <br/>
                        <br/>
                    
                    <Button color="danger"  onClick={() => {


                                    let url = 'usuarios/delete?userId='+this.state.id;
                                    

                                    const params = {
                                      method: 'get',
                                      url: url,                                
                                      headers: {
                                        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
                                      }
                                    };

                                    axios(params) 
                                    .then( (response) => {                                     
                                      console.log("Error");
                                      console.log(response);
                                    })
                                    .catch( (response) => {
                                     
                                      console.log(response);
                                    });
                                                 }} href="#/Home">Eliminar Usuario </Button>
                                       
                    
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
                     		<td><strong>Tipo</strong></td>
                     		<td>{this.state.type}</td> 
                      </tr>
                      
                      

                    </tbody>
                  </Table>
                 </Col>
                 
              	<Col lg={6}>
                  <Table responsive striped hover>
                    <tbody>
                      
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

export default UsuarioDetalleC;
