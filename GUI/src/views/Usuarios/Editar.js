import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Redirect } from 'react-router-dom';
import {
	Badge,
	Button,
	ButtonDropdown,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Col,
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Fade,
	Form,
	FormGroup,
	FormText,
	FormFeedback,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Label,
	Row,
} from 'reactstrap';

class Editar extends Component {
	constructor(props) {
		super(props);


		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {

			
			id:props.match.params.id,
			email:'',
			password:'',
			type:'',
			school:'',
			schools:[],

			collapse: true,
			fadeIn: true,
			timeout: 300
		};
		this.handleAttribute = this.handleAttribute.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getuser = this.getuser.bind(this);
	}

toggle() {
		this.setState({ collapse: !this.state.collapse });
}

toggleFade() {
		this.setState((prevState) => { return { fadeIn: !prevState }});
}
handleAttribute(e){
		var attr = e.target.value;
		var attrName = e.target.id;
		this.setState({ [attrName]: attr });
}
componentWillMount(){
  this.getuser();
}
getuser = () =>{



    const data = this.state;

    let url = 'usuarios/edit';

    const params = {
      method: 'post',
      url: url,
      data:{userId: data.id},
   
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    };

    axios(params) 
    .then( (response) => {

    if(response.data.usuario.school == null){
      
      this.setState({
        email: response.data.usuario.email,
        password:response.data.usuario.password,
        type:response.data.usuario.type,
        
        

      });
  }
      else{
      this.setState({
        email: response.data.usuario.email,
        password:response.data.usuario.password,
        type:response.data.usuario.type,
        school:response.data.usuario.school._id
        

      });
  }

      
      console.log(response);
    })
    .catch( (response) => {
      //handle error
      alert("Error");
      console.log(response);
    });
}

componentDidMount = () =>{
		axios.get('colegios', {
					headers: {
						"Authorization" : 'Bearer ' + sessionStorage.getItem('jwtToken') 
					}
				}
			)
			.then( res => {
				
				const dat = res.data.orders;
				let schools = this.state.schools;
				console.log("schools");
				console.log(dat);
				schools.push(<option key="4" >Opciones...</option>);

				for(let i = 0; i < dat.length ; i++){
					console.log(dat[i]);
					schools.push(
						

							<option  key={dat[i]._id} value={dat[i]._id}>{dat[i].name}</option>
											 
					);
				}

				this.setState({ schools: schools });

			})
			.catch( res => {
				console.log("ERROR SCHOOLS");
			 
				console.log(res);
			})


	}


 
handleSubmit = (e) => {		

	e.preventDefault();	

		const data = this.state;

		let url = 'usuarios/update';

		const params = {
			method: 'post',
			url: url,
			data: {userId: data.id ,email: data.email ,password: data.password ,type: data.type ,school: data.school},
			headers: {
				"Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
			}
		};

		axios(params)	
		.then( (response) => {
			//handle success
			let redirect = <Redirect to="/Home/Usuarios" />;
			this.setState({
				redirect: redirect
			});

			alert("Se edito correctamente el usuario");
			console.log(response);
		})
		.catch( (response) => {
			//handle error
			alert("Error");
			console.log(response);
		});
	}

	render() {
		return (
			<div className="animated fadeIn">
				
						{this.state.redirect}
				 
						<Card>
							<CardHeader>
								<strong>Editar Usuario</strong> 
							</CardHeader>
							<CardBody>
								<Form onSubmit={this.onSubmit} method="post" className="form-horizontal">
									
									<FormGroup row>
										<Col md="3">
											<Label htmlFor="text-input">Email</Label>
										</Col>
										<Col xs="12" md="9">
											<Input type="text" id="email" name="email" onChange={this.handleAttribute} value={this.state.email}/>
											
										</Col>
									</FormGroup>
									<FormGroup row>
										<Col md="3">
											<Label htmlFor="text-input">Contraseña</Label>
										</Col>
										<Col xs="12" md="9">
											<Input type="password" id="password" name="password" onChange={this.handleAttribute} value={this.state.password}/>
											
										</Col>
									</FormGroup>
									<FormGroup row>
										<Col md="3">
											<Label htmlFor="selectLg">Tipo de Usuario</Label>
										</Col>
										<Col xs="12" md="9" size="lg">
											<Input type="select" name="type" id="type" bsSize="lg" onChange={this.handleAttribute} value={this.state.type}>
												<option >Opciones..</option>
												<option value="ADMIN">Administrador</option>
												<option value="DIRECTOR">Director</option>
												<option value="DOORMAN">Portero</option>
												<option value="TUTOR">Tutor</option>
												<option value="TEACHER">Tutor</option>
												
											</Input>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Col md="3">
											<Label htmlFor="selectLg">Colegio</Label>
										</Col>
										<Col xs="12" md="9" size="lg">
											<Input type="select" name="school" id="school" bsSize="lg" onChange={this.handleAttribute} value={this.state.school}>
												 { (this.state.schools !== null)?this.state.schools:( <option>No se ecnuentran colegios</option>) }
												
											</Input>
										</Col>
									</FormGroup>
									
									

								</Form>
							</CardBody>
							<CardFooter>
								<Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"   ></i>Editar usuario</Button>
								<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
							</CardFooter>
						</Card>
						
					
					
			 
			</div>

		);
	}
}

export default Editar;
