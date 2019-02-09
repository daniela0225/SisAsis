import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class ListadoC extends Component {
constructor(props) {
    super(props);


    
    this.state = {

      students:[],
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

        this.getStudents();
      })
      .catch( res => {
        console.log("ERROR SCHOOL");
       
        console.log(res);
      })


  }

getStudents = () => {
	 const url ='alumnos/studentsBySchool?schoolId='+this.state.school
	axios.get(url, {
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
		  let editar = "/#/Home/Students/Edit/"+data[i]._id;
		  let date = new Date(data[i].birthdate);
		  let day = date.getDate();
		  let month = date.getMonth();
		  let year = date.getFullYear();
		  let fec = day+"/"+month+"/"+year;

		  let fecv = new Date(fec);

		  console.log(data[i]);
		  students.push(
			
			  

			  <tr key={data[i]._id}>
					<td><a href={'/#/Home/Tutors/Detail/'+data[i].tutor._id}>{data[i].tutor.name} {data[i].tutor.last_name} </a></td>
					<td>{data[i].tutor.cellphone} </td>
					<td><a href={'/#/Home/Students/Detail/'+data[i]._id}>{data[i].name} {data[i].last_name}</a></td>
					
					
					<td>{data[i].DNI}</td>
					
					<td>{data[i].year}</td>
					<td>{data[i].section}</td>
					<td>{data[i].teacher.name} {data[i].teacher.last_name} </td>

				   
					<td>
					<Row>
					<Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
					 <Button block color="warning" href={editar}>Editar</Button>
					</Col>
					
					<Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
					 <Button block color="danger" onClick={() => {


						  let url = 'alumnos/delete';
						  

						  const params = {
							method: 'post',
							url: url,
							data: {
							  studentId: data[i]._id ,
							  
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
					 }}>Eliminar</Button>
					 </Col>
					 </Row>
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
			   <a href="/#/Home/Students/Form"> <Button block color="success">Nuevo Alumno</Button></a>
				</Col>
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
				   { (this.state.students !== null)?this.state.students:(<tr><td></td></tr>) }
				  
				  </tbody>
				  
				</Table>
				
			  </CardBody>
			</Card>
	   

	  </div>

	);
  }
}

export default ListadoC;
