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

class FormularioC extends Component {
	constructor(props) {
		super(props);


		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {

			
			email:'',
			password:'',
			type:'',
			school:'',
			

			collapse: true,
			fadeIn: true,
			timeout: 300
		};
		this.handleAttribute = this.handleAttribute.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

componentDidMount = () => {
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

				this.setState({ school: dat.school._id });

			})
			.catch( res => {
				console.log("ERROR SCHOOL");
			 
				console.log(res);
			})


	}


 
handleSubmit = (e) => {		

	e.preventDefault();	

		const data = this.state;

		let url = 'usuarios/';

		const params = {
			method: 'post',
			url: url,
			data: {email: data.email ,password: data.password ,type: data.type ,school: data.school},
			headers: {
				"Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
			}
		};
		console.log(params);

		axios(params)	
		.then( (response) => {
			//handle success
			let redirect = <Redirect to="/Home/Users" />;
			this.setState({
				redirect: redirect
			});

			alert("Se creo correctamente el usuario");
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
								<strong>Formulario de Usuario</strong> 
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
												
												
												<option value="DOORMAN">Portero</option>
												

												
											</Input>
										</Col>
									</FormGroup>
									
									
									

								</Form>
							</CardBody>
							<CardFooter>
								<Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"   ></i>Crear nuevo usuario</Button>
								<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
							</CardFooter>
						</Card>
						
					
					
			 
			</div>

		);
	}
}

export default FormularioC;
