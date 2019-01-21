import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Listado extends Component {



  state = {
    users: []
  }


componentDidMount() {
    axios.get('usuarios', {
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
          users.push(
            
              

              

                <tr key={data[i]._id}>
                    <td>{data[i].email}</td>
                  
                    <td>{data[i].type}</td>
                    <td>{data[i].school}</td>
                     <td>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="warning">Editar</Button>
                    </Col>
                    <br/>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                     <Button block color="danger">Eliminar</Button>
                     </Col>
                    </td>
                   
                  </tr>
          );
        }

        this.setState({ users: users });

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
                <a href="/#/Home/Usuarios/Formulario"> <Button block color="success">Nuevo Usuario</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Nickname</th>
                  
                    <th>Tipo de usuario</th>
                    <th>Colegio</th>
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

export default Listado;
