import React, { Component } from 'react';
import axios from '../../AxiosFiles/axios.js';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
     
      colegio: '',
      colegioImg: ''
    }
    
    this.getUser = this.getUser.bind(this);
  }
  componentWillMount(){
    
    this.getUser();
  }
  getUser = () => {
    axios.get('usuarios/headers',{
      headers: { 
        "Authorization": 'Bearer ' + sessionStorage.getItem('jwtToken')
      }
    })
    .then(response => {
      const data = response.data.usuario.school;
      console.log(data);
      
      this.setState({
        colegio: data.name,
        colegioImg: data.logo
        
      });

    }).catch(response => {
      console.log(response);
    });
  }

  render() {
    const urlImg="http://localhost:3000/"+ this.state.colegioImg;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">{(this.state.colegio !==  '')?this.state.colegio:'No se encuentra su colegio'}</h1>
                  <p className="lead">Bienvenido a su Sistema de asistencias  .</p>
                  <hr className="my-2" />
                 
                  <center>
                   <img src={(this.state.colegioImg !==  '')?urlImg:'../../assets/img/avatars/huella.jpg'} height="20%" width="20%"  />
                  </center>
                  
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default Home;
