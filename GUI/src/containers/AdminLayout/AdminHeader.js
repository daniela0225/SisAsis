import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/instd.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class AdminHeader extends Component {



  endsession() {
     
     
  }
  render() {
   

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (

      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <AppNavbarBrand>
          
          <h1>SISASIS</h1>
          
        </AppNavbarBrand>
        

        
        

        <Nav className="ml-auto" navbar>

        
          
         
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/instd.png'} className="img-avatar"  />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              
              <DropdownItem  onClick={
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
