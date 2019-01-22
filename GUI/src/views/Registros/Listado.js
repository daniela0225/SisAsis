import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Listado extends Component {
    state = {
    records: []
  }


  componentDidMount() {
    axios.get('registros', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const data = res.data.records;
        let records = this.state.records;
        console.log(data);

        for(let i = 0; i < data.length ; i++){
          console.log(data[i]);
          records.push(
            
              <tr key={data[i]._id}>
                    <td>{data[i].student.name} {data[i].student.last_name}</td>
                    <td>{data[i].date}</td>
                    <td>{data[i].school}</td>
                    <td>{data[i].type}</td>
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

        this.setState({ records: records });

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
                <Button block color="success">Nuevo Registro</Button>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Alumno</th>
                    <th>Fecha</th>
                    <th>Colegio</th>
                    <th>Tipo de registro</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                   { (this.state.records !== null)?this.state.records:(<tr><td></td></tr>) }
                 
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
       

      </div>

    );
  }
}

export default Listado;
