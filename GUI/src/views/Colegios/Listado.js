import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Listado extends Component {

  
   // axios.get('colegios/',
     //   {headers: { "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken') }})
     state = {
    schools: []
  }


  componentDidMount() {
    axios.get('colegios', {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const data = res.data.orders;
        let schools = this.state.schools;
        console.log(data);

        for(let i = 0; i < data.length ; i++){
          console.log(data[i]);
          schools.push(
            <tr key={data[i]._id}>
                    <td>{data[i].name}</td>
                    <td>{(data[i].kinder)?"SI":"NO" }</td>
                    <td>{(data[i].prmary)?"SI":"NO" }</td>
                    <td>{(data[i].highschool)?"SI":"NO" }</td>
                    
                    <td>
                    <center>
                    <img src={data[i].logo} height="15%" width="15%"  />
                    </center>
                    </td>
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

        this.setState({ schools: schools });

      })
      .catch( res => {
       // console.log("esta jodido");
        console.log(res);
      })
  }





  render() {

   //let contenedor = this.state.vistas;



    return (
      <div className="animated fadeIn">
       <Card>
              <CardHeader>
                  
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <a href="/#/Home/Colegios/Formulario"> <Button block color="success">Nuevo Colegio</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Inicial</th>
                    <th>Primaria</th>
                    <th>Secundaria</th>
                    <th>Foto</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>
                  <tbody>
                  { (this.state.schools !== null)?this.state.schools:(<tr><td></td></tr>) }
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
       

      </div>

    );
  }
}

export default Listado;