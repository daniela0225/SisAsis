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
	Modal, 
	ModalBody,
	ModalFooter,
	ModalHeader,
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
	Table,
	Row,
} from 'reactstrap';

class FormularioC extends Component {
 constructor(props) {
		super(props);


		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {

			
			name:'',
			last_name:'',
			email:'',
			password:'',
			type:'TEACHER',
			school:'',
			
		 


			modal: false,
			collapse: true,
			fadeIn: true,
			timeout: 300
		};
		this.handleAttribute = this.handleAttribute.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
	handleAttribute = (e) =>{
		var attr = e.target.value;
		var attrName = e.target.id;
		this.setState({ [attrName]: attr });
	}


 componentDidMount = () =>{
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

 
handleSubmit = () =>{
	const data = this.state;

	 // let url = 'usuarios/';

		const params = {
			method: 'post',
			url: 'profesores/',
			data: {
						name: data.name,
						last_name: data.last_name,
						school: data.school,
						email: data.email },
			headers: {
				"Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
			}
		};

		axios(params) 
		.then( (response) => {
			//handle success
						

				 // let url = 'usuarios/';

					const paramss = {
						method: 'post',
						url: 'usuarios/',
						data: {
									email: data.email,
									password: data.password,
									type: data.type,
									school: data.school },
						headers: {
							"Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
						}
					};
					axios(paramss) 
					.then( (response) => {

						console.log("User created")
					})
					.catch( (response) => {
						alert("Error");
			
					});



			
			let redirect = <Redirect to="/Home/Teachers" />;
			this.setState({
				redirect: redirect
			});

			alert("Se creo correctamente al profesor");
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
								<strong>Formulario de Profesor</strong> 
							</CardHeader>
							<CardBody>
								<Form onSubmit={this.onSubmit}  className="form-horizontal">
									
									<FormGroup row>
										<Col md="3">
											<Label htmlFor="text-input">Nombres</Label>
										</Col>
										<Col xs="12" md="9">
											<Input type="text" id="name" name="name"  onChange={this.handleAttribute} value={this.state.name} />
											
										</Col>
									</FormGroup>
									<FormGroup row>
										<Col md="3">
											<Label htmlFor="text-input">Apellidos</Label>
										</Col>
										<Col xs="12" md="9">
											<Input type="text" id="last_name" name="last_name"  onChange={this.handleAttribute} value={this.state.last_name} />
											
										</Col>
									</FormGroup>
									<FormGroup row>
										<Col md="3">
											<Label htmlFor="text-input">Email</Label>
										</Col>
										<Col xs="12" md="9">
											<Input type="email" id="email" name="email"  onChange={this.handleAttribute} value={this.state.email} />
											
										</Col>
									</FormGroup>
									<FormGroup row>
										<Col md="3">
											<Label htmlFor="text-input">Contraseña</Label>
										</Col>
										<Col xs="12" md="9">
											<Input type="password" id="password" name="password"  onChange={this.handleAttribute} value={this.state.password} />
											
										</Col>
									</FormGroup>

									
									
									
									
									

								</Form>
							</CardBody>
							<CardFooter>
							<center>
								<Button type="submit" size="sm" color="primary"  onClick={this.handleSubmit} ><i className="fa fa-dot-circle-o"></i> Crear nuevo Profesor</Button>
								<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
							</center>
							</CardFooter>
						</Card>
						
					
					
			 
			</div>

		);
	}
}

export default FormularioC;
