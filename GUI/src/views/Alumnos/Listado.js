import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';



  



class Listado extends Component {



  state = {
    students: []
  }


componentDidMount() {
    axios.get('alumnos', {
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
          students.push(
            
              

              <tr key={data[i]._id}>
                    <td>{data[i].name}</td>
                    <td>{data[i].last_name}</td>
                    <td>{data[i].gender}</td>
                    <td>{data[i].DNI}</td>
                    <th>{data[i].birthdate}</th>
                    <th>{data[i].year}</th>
                    <th>{data[i].section}</th>
                    
                    <th>{data[i].fingerprint}</th>
                    <th>{data[i].code}</th>
                    <th>{data[i].order_number}</th>
                     <th>Colegio Juventus</th>
                     <th>jerson huayta</th>
                   
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

        this.setState({ students: students });

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
               <a href="/#/Home/Alumnos/Formulario"> <Button block color="success">Nuevo Alumno</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Sexo</th>
                    <th>DNI</th>
                    <th>Fecha Nac.</th>
                    <th>Año</th>
                    <th>Seccion</th>
                    <th>Huella Digital</th>
                    <th>Codigo Alumno</th>
                    <th>Nro. Orden</th>
                    <th>Colegio </th>
                    <th>Tutor</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                   { (this.state.students !== null)?this.state.students:(<tr><td></td></tr>) }
                  
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
       

      </div>

    );
  }
}

export default Listado;
