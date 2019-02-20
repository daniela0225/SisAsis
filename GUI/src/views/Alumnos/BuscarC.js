import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Badge, Card, CardBody ,CardHeader,  Fade,  Form,  FormGroup,  FormText,  FormFeedback,  Input,  InputGroup,  InputGroupAddon,  InputGroupText,  Label,Col, Button ,Nav, NavItem, NavLink,  TabContent, TabPane, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
class BuscarC extends Component {
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
      apellidos:'',
      apellidos_pro:'',
      apellidos_pad:'',
      año:'',
      profesores:[],
      padres:[],
      students:[]
    };
    this.handleAttribute = this.handleAttribute.bind(this);
    this.getStudents = this.getStudents.bind(this);
    this.searchTeacher = this.searchTeacher.bind(this);
    this.studentsByTeacher = this.studentsByTeacher.bind(this);
    this.searchTutor = this.searchTutor.bind(this);
    this.studentsByTutor = this.studentsByTutor.bind(this);
  }
   handleAttribute = (e) =>{
    var attr = e.target.value;
    var attrName = e.target.id;
    this.setState({ [attrName]: attr });
  }
  getStudents = () => {
	 const data = this.state;

   // let url = 'usuarios/';

    const params = {
      method: 'post',
      url: 'alumnos/searchByLastName',
      data: {string: data.apellidos },
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {

      const dataa = response.data.students;
      let students = this.state.students;
       if(dataa.length > 0){
        
        console.log("students");
        console.log(dataa);
       

        for(let i = 0; i < dataa.length ; i++){
          console.log(dataa[i]);
          


          students.push(
            

              
               <tr  key={Math.random()}>
                    <td><a href={'/#/Home/Students/Detail/'+dataa[i]._id}>{dataa[i].name} {dataa[i].last_name}</a></td>
                    
                    <td>{dataa[i].DNI}</td>
                    <td>{dataa[i].year}</td>
                    <td>{dataa[i].section}</td>
                  </tr>
                       
          );
        }
      }
        this.setState({ students: students });
    })
    .catch( (response) => {
      //handle error
      alert("Error");

      console.log(response);
    });
  
  }
  searchTeacher = () => {

  	 const data = this.state;

   // let url = 'usuarios/';

    const params = {
      method: 'post',
      url: 'profesores/teachersBySchoolAndLastName',
      data: {string: data.apellidos_pro },
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {

      const dataa = response.data.teachers;
      let profesores = this.state.profesores;
       if(dataa.length > 0){
        
        console.log("teachers");
        console.log(dataa);
       

        for(let i = 0; i < dataa.length ; i++){
          console.log(dataa[i]);
          


          profesores.push(
                   <Button block color="link"  key={Math.random()}  onClick={() => {this.studentsByTeacher(dataa[i]._id)}}>{dataa[i].name} {dataa[i].last_name}</Button>

          );
        }
      }
        this.setState({ profesores: profesores });
    })
    .catch( (response) => {
      //handle error
      alert("Error");

      console.log(response);
    });

  }
  studentsByTeacher = (id) =>{
  	const url ='alumnos/studentsByTeacher?teacherId='+id
  axios.get(url, {
      headers: {
      "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
      }
    }
    )
    .then( res => {
    
    const data = res.data.students;
    let students = this.state.students;
    console.log(id);
    console.log(data);

    for(let i = 0; i < data.length ; i++){
      

      

      console.log(data[i]);
      
      students.push(

        
        <tr  key={Math.random()}>
                    <td><a href={'/#/Home/Students/Detail/'+data[i]._id}>{data[i].name} {data[i].last_name}</a></td>
                    
                    <td>{data[i].DNI}</td>
                    <td>{data[i].year}</td>
                    <td>{data[i].section}</td>
                  </tr>

        
      );
    }

    this.setState({ students: students });

    })
    .catch( res => {
   
    console.log(res);
    })
  }
   searchTutor = () => {

  	 const data = this.state;

   // let url = 'usuarios/';

    const params = {
      method: 'post',
      url: 'tutores/tutorsBySchoolAndLastName',
      data: {string: data.apellidos_pad },
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {

      const dataa = response.data.tutors;
      let padres = this.state.padres;
       if(dataa.length > 0){
        
        console.log("tutors");
        console.log(dataa);
       

        for(let i = 0; i < dataa.length ; i++){
          console.log(dataa[i]);
          


          padres.push(
                   <Button block color="link"  key={Math.random()}  onClick={() => {this.studentsByTutor(dataa[i]._id)}}>{dataa[i].name} {dataa[i].last_name}</Button>
                   
          );
        }
      }
        this.setState({ padres: padres });
    })
    .catch( (response) => {
      //handle error
      alert("Error");

      console.log(response);
    });

  }
  studentsByTutor = (id) =>{
  	const url ='alumnos/studentsByTutor?tutorId='+id
  axios.get(url, {
      headers: {
      "Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
      }
    }
    )
    .then( res => {
    
    const data = res.data.students;
    let students = this.state.students;
    console.log(id);
    console.log(data);

    for(let i = 0; i < data.length ; i++){
      

      

      console.log(data[i]);
      
      students.push(

        
        <tr  key={Math.random()}>
                    <td><a href={'/#/Home/Students/Detail/'+data[i]._id}>{data[i].name} {data[i].last_name}</a></td>
                    
                    <td>{data[i].DNI}</td>
                    <td>{data[i].year}</td>
                    <td>{data[i].section}</td>
                  </tr>

        
      );
    }

    this.setState({ students: students });

    })
    .catch( res => {
   
    console.log(res);
    })
  }

  

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }
tabPane() {
    return (
      <>
        <TabPane tabId="1">
           <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="text" id="apellidos" name="apellidos" placeholder="Apellidos del Alumno" onChange={this.handleAttribute} value={this.state.apellidos} />
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary" onClick={this.getStudents} ><i className="fa fa-search"></i> Buscar</Button>
                        </InputGroupAddon>
                        
                      </InputGroup>
                     
                      
                    </Col>
                  </FormGroup>
                  </Form>
        </TabPane>
        <TabPane tabId="2">
          <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="text" id="apellidos_pro" name="apellidos_pro" placeholder="Apellidos del Profesor" onChange={this.handleAttribute} value={this.state.apellidos_pro} />
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary" onClick={this.searchTeacher}><i className="fa fa-search"></i> Buscar</Button>
                        </InputGroupAddon>
                        
                      </InputGroup>
                     
                      
                    </Col>
                  </FormGroup>
                  </Form>
             
                  {this.state.profesores}
                 
        </TabPane>
        <TabPane tabId="3">
           <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="text" id="apellidos_pad" name="apellidos_pad" placeholder="Apellidos del Padre" onChange={this.handleAttribute} value={this.state.apellidos_pad} />
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary" onClick={this.searchTutor}><i className="fa fa-search"></i> Buscar</Button>
                        </InputGroupAddon>
                        
                      </InputGroup>
                     
                      
                    </Col>
                  </FormGroup>
                  </Form>
             
                  {this.state.padres}
        </TabPane>
         <TabPane tabId="4">
           <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="select" name="year" id="year" bsSize="lg"  onChange={this.handleAttribute} value={this.state.year}>
                       
                        <option >Opciones...</option>
                        <option value="1">Primero</option>
                        <option value="2">Segundo</option>
                        <option value="3">Tercero</option>
                        <option value="4">Cuarto</option>
                        <option value="5">Quinto</option>
                        
                      </Input>
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary" ><i className="fa fa-search"></i> Buscar</Button>
                        </InputGroupAddon>
                        
                      </InputGroup>
                     
                      
                    </Col>
                  </FormGroup>
                  </Form>
        </TabPane>
      </>
    );
  }


  render() {
	return (
	  <div className="animated fadeIn">
	   <Card>
			  <CardHeader>
				 <h3>Buscar  Alumno</h3>
			  </CardHeader>
			  <CardBody>
			  <Row>
			  <Col>
			  <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
               Por Apellidos 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Por profesor
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Por Padre de familia
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  Por Año 
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
			  </Col>

			  <Col>
				<Table responsive bordered>
				  <thead>
				  
				  <tr>
				  
				  <th>Nombre y Apellidos</th>
				   
				   <th>DNI</th>
				   <th>Año</th>
				   <th>Seccion</th>
				   
				                      
					
				  </tr>        
				  
				  </thead>
				  <tbody>
				 { (this.state.students !== null)?this.state.students:(<tr><td></td></tr>) }
				  </tbody>
				  
				</Table>
			</Col>	
				</Row>
			  </CardBody>
			</Card>
	   

	  </div>

	);
  }
}

export default BuscarC;
