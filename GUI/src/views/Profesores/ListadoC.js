import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Listado extends Component {

constructor(props) {
    super(props);


    
    this.state = {

      teachers:[],
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

        this.getTeachers();
      })
      .catch( res => {
        console.log("ERROR SCHOOL");
       
        console.log(res);
      })


  }
getTeachers = () => {
  const url ='profesores/teachersBySchool?schoolId='+this.state.school
    axios.get(url, {
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
          let editar = "/#/Home/Teachers/Edit/"+data[i]._id;
          teachers.push(
            
              



                     <tr key={data[i]._id}>
                    <td><a href={'/#/Home/Teachers/Detail/'+data[i]._id}>{data[i].name} {data[i].last_name}</a></td>
                   
                    <td>{data[i].school.name}</td>
                    <td>{data[i].email}</td>
                   

                    <td>
                    <Row>
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
                     </Row>
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
                <a href="/#/Home/Teachers/Form"> <Button block color="success">Nuevo Profesor</Button></a>
                </Col>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Nombres y Apellidos</th>
                    
                     <th>Colegio</th>
                     <th>Email</th>
                    
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
