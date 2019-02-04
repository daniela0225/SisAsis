import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Listado extends Component {



  state = {
    teachers: []
  }


componentDidMount() {
    axios.get('profesores', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const data = res.data.teachers;
        let teachers = this.state.teachers;
        console.log(data);

        for(let i = 0; i < data.length ; i++){
          console.log(data[i]);
          let editar = "/#/Home/Profesores/Editar/"+data[i]._id;
          teachers.push(
            
              



                     <tr key={data[i]._id}>
                    <td>{data[i].name}</td>
                    <td>{data[i].last_name}</td>
                    <td>{data[i].school.name}</td>
                   

                    <td>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning" href={editar}>Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger" onClick={() => {


                          let url = 'profesores/delete';
                          

                          const params = {
                            method: 'post',
                            url: url,
                            data: {
                              teacherId: data[i]._id ,
                              
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
                    </td>
                   
                  </tr>
          );
        }

        this.setState({ teachers: teachers });

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
                <a href="/#/Home/Profesores/Formulario"> <Button block color="success">Nuevo Tutor</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                     <th>Colegio</th>
                    
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
               
                { (this.state.teachers !== null)?this.state.teachers:(<tr><td></td></tr>) }
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
       

      </div>

    );
  }
}

export default Listado;
