import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class ListadoC extends Component {


constructor(props) {
    super(props);


    
    this.state = {

      tutors:[],
      school:''
      
    }

    
this.getschool();
    
  }
getschool = () => {
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

        this.getTutors();
      })
      .catch( res => {
        console.log("ERROR SCHOOL");
       
        console.log(res);
      })


  }

getTutors = () => {
  const url ='tutores/tutorsBySchool?schoolId='+this.state.school
    axios.get(url, {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const data = res.data.tutors;
        let tutors = this.state.tutors;
        console.log(data);

        for(let i = 0; i < data.length ; i++){
          console.log(data[i]);
          let editar = "/#/Home/Tutors/Edit/"+data[i]._id;
          tutors.push(
            
              



                     <tr key={data[i]._id}>
                    <td> <a href={'/#/Home/Tutors/Detail/'+data[i]._id}>{data[i].name} {data[i].last_name}</a></td>
                    
                    <td>{data[i].DNI}</td>
                    <td>{data[i].address}</td>
                    <td>{data[i].cellphone}</td>
                   
                    <td>
                    <Row>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning" href={editar}>Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger" onClick={() => {


                          let url = 'tutores/delete';
                          

                          const params = {
                            method: 'post',
                            url: url,
                            data: {
                              tutorId: data[i]._id ,
                              
                            },
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

        this.setState({ tutors: tutors });

      })
      .catch( res => {
     
        console.log(res);
      })
  }






  render() {
    return (
      <div className="animated fadeIn">
       <Card>
              <CardHeader>
                  
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <a href="/#/Home/Tutors/Form"> <Button block color="success">Nuevo Tutor</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Nombres y Apellidos</th>
                    
                     <th>DNI</th>
                    <th>Direccion</th>
                     <th>Celular</th>
                    
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
               
                { (this.state.tutors !== null)?this.state.tutors:(<tr><td></td></tr>) }
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
       

      </div>

    );
  }
}

export default ListadoC;
