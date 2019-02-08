import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class ListadoC extends Component {


constructor(props) {
    super(props);


    
    this.state = {

      users:[],
      school:''
      
    }

    

    
  }

componentWillMount(){
  this.getschool();
}
 getschool(){
    axios.get('usuarios/headers', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const dat = res.data.usuario;       
        
        console.log('Reconocio school')
        console.log(dat);     

        this.setState({ school: res.data.usuario.school._id });
        console.log(this.state.school);
       this.getUsers();

        

      })
      .catch( res => {
        console.log("ERROR SCHOOL");
       
        console.log(res);
      })


  }



getUsers(){

  
   const url ='usuarios/usersBySchool?schoolId='+this.state.school;
  
    axios.get(url , {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const data = res.data.users;
        let users = this.state.users;
        console.log(data);

        for(let i = 0; i < data.length ; i++){
          
          console.log(data[i]);
          let editar = "/#/Home/Users/Edit/"+data[i]._id;
          users.push(
            
              

              

                <tr key={data[i]._id}>
                    <td><a href={'/#/Home/Users/Detail/'+data[i]._id}>{data[i].email}</a></td>
                  
                    <td>{data[i].type}</td>
                    
                     <td>
                     <Row>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning" href={editar}>Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger"  onClick={() => {


                                    let url = 'usuarios/delete?userId='+data[i]._id;
                                    

                                    const params = {
                                      method: 'get',
                                      url: url,
                                      
                                        
                                        
                                      
                                      headers: {
                                        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
                                      }
                                    };

                                    axios(params) 
                                    .then( (response) => {
                                      //handle success
                                     window.location.reload();   

                                      
                                      console.log(response);
                                    })
                                    .catch( (response) => {
                                     
                                      console.log(response);
                                    });
                                                 }} >Eliminar</Button>
                     </Col>
                     </Row>
                    </td>
                   
                  </tr>
          );
        
        }

        this.setState({ users: users });

      })
      .catch( res => {
     
        console.log(res);
        console.log(url);
      })
  }
  
 

  render() {
    return (
      <div className="animated fadeIn">
       <Card>
              <CardHeader>
                  
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <a href="/#/Home/Users/Form"> <Button block color="success">Nuevo Usuario</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Email</th>
                  
                    <th>Tipo de usuario</th>
                   
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                  
                  { (this.state.users !== null)?this.state.users:(<tr><td></td></tr>) }
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
       

      </div>

    );
  }
}

export default ListadoC;
