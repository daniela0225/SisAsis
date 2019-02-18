import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class BuscarC extends Component {


  render() {
	return (
	  <div className="animated fadeIn">
	   <Card>
			  <CardHeader>
				 Buscar  Alumno
			  </CardHeader>
			  <CardBody>
				<Table responsive bordered>
				  <thead>
				  <tr>
					  <th colSpan="2"><center>Padre de Familia</center></th>
					  <th colSpan="7"><center>Alumno</center></th>
					
				  </tr>
				  <tr>
				  <th>Nombre</th>
				  <th>Celular</th> 

				  <th>Nombre y Apellidos</th>
				   
				   <th>DNI</th>
				   <th>Año</th>
				   <th>Seccion</th>
				   
				   <th>Profesor</th> 
				   <th>Acciones</th>                    
					
				  </tr>        
				  
				  </thead>
				  <tbody>
				
				  
				  </tbody>
				  
				</Table>
				
			  </CardBody>
			</Card>
	   

	  </div>

	);
  }
}

export default BuscarC;
