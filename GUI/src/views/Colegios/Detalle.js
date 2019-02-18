import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody, CardHeader, Modal, ModalBody, ModalFooter, ModalHeader,Col, Button, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class ColegioDetalle extends Component {



 constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {

      
      id:props.match.params.id,
      name:'',
      kinder:'',
      primary:'',
      highschool:'',
      logo:'',
      users:[],
      userData:[],
      teachers:[],
      teacherData:[],
      tutors:[],
      tutorData:[],
      students:[],
      studentData:[],

      modal: false



    
    };
    
    this.getschool = this.getschool.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.seeMoreUsers = this.seeMoreUsers.bind(this);
    this.getTeachers = this.getTeachers.bind(this);
    this.seeMoreTeachers = this.seeMoreTeachers.bind(this);
    this.getTutors = this.getTutors.bind(this);
    this.seeMoreTutors = this.seeMoreTutors.bind(this);
    this.getStudents = this.getStudents.bind(this);
    this.seeMoreStudents = this.seeMoreStudents.bind(this);
  }
  componentWillMount(){

    this.getschool();
    this.getUsers();
    this.getTeachers();
    this.getTutors();
    this.getStudents();
  }
toggle() {
    this.setState({ collapse: !this.state.collapse });
    this.setState({
      modal: !this.state.modal,
    });
  }
  

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
getschool = () =>{



    const data = this.state;

    let url = 'colegios/find?schoolId='+this.state.id;

    const params = {
      method: 'get',
      url: url,
         
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {
      
          const data = response.data.school;
         
      
      this.setState({
        name:data.name,
      kinder:data.kinder,  
      primary:data.primary,  
      highschool:data.highschool,
      logo:data.logo
           });

      
      console.log(response);
    })
    .catch( (response) => {
      //handle error
      alert("Error");
      console.log(response);
    });
}

getUsers = () => {

  
   const url ='usuarios/usersBySchool?schoolId='+this.state.id;
  
    axios.get(url , {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const userData = res.data.users;
        let users = this.state.users;
        console.log(userData);
        for(let i=0,l=userData.length ;i < l && i < 6 ; i++){
        console.log(userData[i]);
        users.push(
          <tr key={Math.random()}>
            <td>{userData[i].email}</td>
            <td>{userData[i].type}</td>
          </tr>
         
        );
      }



        this.setState({ users: users, userData: userData });

      })
      .catch( res => {
     
        console.log(res);
        
      })
  }
  seeMoreUsers = () =>{
    let users = this.state.users;
    let data = this.state.userData;
    let cant = 6;

    for(let i = users.length; cant != 0 && i < data.length ; i++){
      console.log(data[i]);
      console.log("ss");
      users.push(
       <tr key={Math.random()}>
            <td>{data[i].email}</td>
            <td>{data[i].type}</td>
          </tr>
      );
      cant--;
    }

    this.setState({
      users: users
    });
  }
  getTeachers = () =>{
    const url ='profesores/teachersBySchool?schoolId='+this.state.id;
    axios.get(url, {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const teacherData = res.data.teachers;
        let teachers = this.state.teachers;
    
        for(let i=0,l=teacherData.length ;i < l && i < 6 ; i++){
        console.log(teacherData[i]);
        teachers.push(
          <tr key={Math.random()}>
            <td>{teacherData[i].name} {teacherData[i].last_name}</td>
            <td>{teacherData[i].email}</td>
          </tr>
         
        );
      }

        

        this.setState({ teachers: teachers , teacherData: teacherData });

      })
      .catch( res => {
     
        console.log(res);
      })
  }
  seeMoreTeachers = () =>{
    let teachers = this.state.teachers;
    let teacherData = this.state.teacherData;
    let cant = 6;

    for(let i = teachers.length; cant != 0 && i < teacherData.length ; i++){
      console.log(teacherData[i]);
      console.log("ss");
      teachers.push(
       <tr key={Math.random()}>
            <td>{teacherData[i].name} {teacherData[i].last_name}</td>
            <td>{teacherData[i].email}</td>
          </tr>
      );
      cant--;
    }

    this.setState({
      teachers: teachers
    });
  }
  getTutors = () =>{
    const url ='tutores/tutorsBySchool?schoolId='+this.state.id;
    axios.get(url, {
          headers: {
            "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
          }
        }
      )
      .then( res => {
        
        const tutorData = res.data.tutors;
        let tutors = this.state.tutors;
        console.log(tutorData);
        for(let i=0,l=tutorData.length ;i < l && i < 6 ; i++){
        console.log(tutorData[i]);
        tutors.push(
          <tr key={Math.random()}>
            <td>{tutorData[i].name} {tutorData[i].last_name}</td>
            <td>{tutorData[i].DNI}</td>
          </tr>
         
        );
      }


        this.setState({ tutors: tutors , tutorData: tutorData });

      })
      .catch( res => {
     
        console.log(res);
      })
  }
  seeMoreTutors = () =>{
    let tutors = this.state.tutors;
    let tutorData = this.state.tutorData;
    let cant = 6;

    for(let i = tutors.length; cant != 0 && i < tutorData.length ; i++){
      console.log(tutorData[i]);
      console.log("ss");
      tutors.push(
       <tr key={Math.random()}>
            <td>{tutorData[i].name} {tutorData[i].last_name}</td>
            <td>{tutorData[i].DNI}</td>
          </tr>
      );
      cant--;
    }

    this.setState({
      tutors: tutors
    });
  }
  getStudents = () => {
    const url ='alumnos/studentsBySchool?schoolId='+this.state.id
  axios.get(url, {
      headers: {
      "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
      }
    }
    )
    .then( res => {
    
    const studentData = res.data.students;
    let students = this.state.students;
    console.log(studentData);
    for(let i=0,l=studentData.length ;i < l && i < 6 ; i++){
        console.log(studentData[i]);
        students.push(
          <tr key={Math.random()}>
            <td>{studentData[i].name} {studentData[i].last_name}</td>
            <td>{studentData[i].DNI}</td>
          </tr>
         
        );
      }

    

    this.setState({ students: students, studentData:studentData });

    })
    .catch( res => {
   
    console.log(res);
    })
  }
  seeMoreStudents = () =>{
    let students = this.state.students;
    let studentData = this.state.studentData;
    let cant = 6;

    for(let i = students.length; cant != 0 && i < studentData.length ; i++){
      console.log(studentData[i]);
      console.log("ss");
      students.push(
       <tr key={Math.random()}>
            <td>{studentData[i].name} {studentData[i].last_name}</td>
            <td>{studentData[i].DNI}</td>
          </tr>
      );
      cant--;
    }

    this.setState({
      students: students
    });
  }



  render() {
    return (
      <div className="animated fadeIn">
      
       <Card>
              <CardHeader>
               <Row>
               <Col>
               <img src={'http://localhost:3000/'+this.state.logo} />
               <br/>
               <br/>
                <h3>{this.state.name}</h3>
               </Col>
               <Col>
                <div align="right">
                <Row>
                		<Col>
                		<Button block color="warning"  href={'/#/Home/Colegios/Editar/'+this.state.id} >Editar</Button>
                		<br/>
                		<Button block color="danger" onClick={this.toggle} >Eliminar</Button>
                     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Confirmacion</ModalHeader>
                  <ModalBody>
                    <center>
                        ¿Seguro que desea eliminar al  {this.state.name} ?
                        <br/>
                        <br/>
                        <br/>
                    
                    <Button color="danger"  onClick={() => {


                          let url = 'colegios/delete';
                          

                          const params = {
                            method: 'post',
                            url: url,
                            data: {
                              schoolId: this.state.id ,
                              
                            },
                            headers: {
                              "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
                            }
                          };

                          axios(params) 
                          .then( (response) => {
                            //handle success
                                                      
                            console.log(response);
                          })
                          .catch( (response) => {
                           
                            console.log(response);
                          });
                     }}  href="#/Home/Colegios">Eliminar Colegio </Button>
                                       
                    
                    </center>
                  </ModalBody>
                  
                </Modal>

                		</Col>
                </Row>		
                </div>
                </Col>
              </Row>
              </CardHeader>
              <CardBody>
              <Row>
              <Col >
                
                <Table responsive striped hover>
                    <tbody>
                      
                      <tr>
                     		<td><strong>Inicial</strong></td>
                     		<td>{(this.state.kinder)?"SI":"NO"}</td> 
                      </tr>
                      <tr>
                        <td><strong>Secundaria</strong></td>
                        <td>{(this.state.highschool)?"SI":"NO"}</td> 
                      </tr>
                      
                      

                    </tbody>
                  </Table>
                 </Col>
                 <Col >
                
                <Table responsive striped hover>
                    <tbody>
                      
                      <tr>
                        <td><strong>Primaria</strong></td>
                        <td>{(this.state.primary)?"SI":"NO"}</td> 
                      </tr>
                      
                      

                    </tbody>
                  </Table>
                 </Col>
                 
              	
                </Row>

              </CardBody>
            </Card>
            <Row>
            <Col>
            <Card className="text-white bg-primary">
            <CardHeader>
            <h5>Usuarios</h5>
            </CardHeader>
            </Card>
            <Card>
            <CardBody>
              
                
                <Table responsive striped hover>
                    <thead>
                    <tr>
                    <td><strong>Email</strong></td>
                    <td><strong>Tipo</strong></td>
                    </tr>
                    </thead>
                    <tbody>                     
                    { (this.state.users !== null)?this.state.users:("No se encuentra usuarios") }


                    </tbody>

                  </Table>
                  <Button block color="success" onClick={this.seeMoreUsers}  >Ver mas usuarios</Button>
                 

              </CardBody>
              </Card>
            </Col>
            <Col>
            <Card className="text-white bg-primary">
            <CardHeader>
            <h5>Profesores</h5>
            </CardHeader>
            </Card>
            <Card>
            <CardBody>
              
                
                <Table responsive striped hover>
                    <thead>
                    <tr>
                    <td><strong>Nombre y Apllidos</strong></td>
                    <td><strong>Email</strong></td>
                    </tr>
                    </thead>
                    <tbody>                     
                    { (this.state.teachers !== null)?this.state.teachers:("No se encuentra profesores") }


                    </tbody>

                  </Table>
                  <Button block color="success" onClick={this.seeMoreTeachers}  >Ver mas profesores</Button>
                 

              </CardBody>
              </Card>
            </Col>          
              
            </Row>
            <Row>
            <Col>
            <Card className="text-white bg-primary">
            <CardHeader>
            <h5>Tutores</h5>
            </CardHeader>
            </Card>
            <Card>
            <CardBody>
              
                
                <Table responsive striped hover>
                    <thead>
                    <tr>
                    <td><strong>Nombre y Apellidos</strong></td>
                    <td><strong>DNI</strong></td>
                    </tr>
                    </thead>
                    <tbody>                     
                    { (this.state.tutors !== null)?this.state.tutors:("No se encuentra tutores") }


                    </tbody>

                  </Table>
                  <Button block color="success" onClick={this.seeMoreTutors}  >Ver mas tutores</Button>
                 

              </CardBody>
              </Card>
            </Col>
            <Col>
            <Card className="text-white bg-primary">
            <CardHeader>
            <h5>Alumnos</h5>
            </CardHeader>
            </Card>
            <Card>
            <CardBody>
              
                
                <Table responsive striped hover>
                    <thead>
                    <tr>
                    <td><strong>Nombre y Apellidos</strong></td>
                    <td><strong>DNI</strong></td>
                    </tr>
                    </thead>
                    <tbody>                     
                    { (this.state.students !== null)?this.state.students:("No se encuentra alumnos") }


                    </tbody>

                  </Table>
                  <Button block color="success" onClick={this.seeMoreStudents}  >Ver mas alumnos</Button>
                 

              </CardBody>
              </Card>
            </Col>          
              
            </Row>
           
       

      </div>

    );
  }
}

export default ColegioDetalle;
