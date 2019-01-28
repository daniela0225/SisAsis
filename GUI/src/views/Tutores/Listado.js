import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Listado extends Component {



  state = {
    tutors: []
  }


componentDidMount() {
    axios.get('tutores', {
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
          tutors.push(
            
              



                     <tr key={data[i]._id}>
                    <td>{data[i].name}</td>
                    <td>{data[i].last_name}</td>
                    <td>{data[i].DNI}</td>
                    <td>{data[i].address}</td>
                    <td>{data[i].cellphone}</td>
                    <td>{data[i].telephone}</td>
                    <td>{data[i].email}</td>

                    <td>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning">Editar</Button>
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
                <a href="/#/Home/Tutores/Formulario"> <Button block color="success">Nuevo Tutor</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                     <th>DNI</th>
                    <th>Direccion</th>
                     <th>Celular</th>
                    <th>Telefono</th>
                    <th>Email</th>
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

export default Listado;
