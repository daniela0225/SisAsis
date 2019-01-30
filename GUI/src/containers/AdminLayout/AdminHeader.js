import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/instd.png'
import sygnet from '../../assets/img/brand/sygnet.svg'
import axios from '../../AxiosFiles/axios.js';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class AdminHeader extends Component {


  constructor(props){
    super(props);
    this.state = {
     
      logo: '',
      email: '',
      schoolName: ''
     
    }
    //localStorage.setItem('path','http://35.238.122.18/');
    //localStorage.setItem('path','http://localhost:3000/');
    
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
      const data = response.data.usuario;
      console.log(data);
      console.log("si jalo img");
      if(response.data.usuario.school !== null){
      
      this.setState({
        logo: data.school.logo,
        email: data.email,
        schoolName: data.school.name
        
      });
    }else{
      this.setState({
        
        email: data.email,
       
        
      });

    }

    }).catch(response => {
      console.log(response);
    });
  }




  render() {
   

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const urlImg = 'http://localhost:3000/'+this.state.logo;

    return (

      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        
        <Nav className="d-md-down-none" navbar>
          <center>
          <h1>EDUCLOOCK</h1>
          </center>
        </Nav>

        

        
        

       <Nav className="ml-auto" navbar>

        
          <div align="right">
         <h7>{this.state.email}</h7>
         <br/>
          <h6>{(this.state.schoolName !== '')?this.state.schoolName:'Administrador'}</h6>
         </div>

          <AppHeaderDropdown direction="down">

            <DropdownToggle nav>
              <img src={(this.state.logo !== '')?urlImg:'../../assets/img/avatars/instd.png'} className="img-avatar"  />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              
              <DropdownItem onClick={
                        () => {
                                sessionStorage.setItem('jwtToken', null );
                                //props.action();
                                
                            }
            } href="/"><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        
      </React.Fragment>
    );
  }
}

AdminHeader.propTypes = propTypes;
AdminHeader.defaultProps = defaultProps;

export default AdminHeader;
