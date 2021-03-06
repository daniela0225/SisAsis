import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';
import axios from './AxiosFiles/axios.js';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});
const AdminLayout = Loadable({
  loader: () => import('./containers/AdminLayout'),
  loading
});
const PadreLayout = Loadable({
  loader: () => import('./containers/PadreLayout'),
  loading
});

const DirectorLayout = Loadable({
  loader: () => import('./containers/DirectorLayout'),
  loading
});
const PorteroLayout = Loadable({
  loader: () => import('./containers/PorteroLayout'),
  loading
});
const ProfesorLayout = Loadable({
  loader: () => import('./containers/ProfesorLayout'),
  loading
});


// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Sisasis = Loadable({
  loader: () => import('./views/Pages/sisasis'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: sessionStorage.getItem('jwtToken'),
      type: '',
      showSideDrawer: false
    }
    //localStorage.setItem('path','http://35.238.122.18/');
    localStorage.setItem('path','http://localhost:3000/');
    this.UserLogged = this.UserLogged.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentWillMount(){
    if(sessionStorage.getItem('jwtToken')==null || sessionStorage.getItem('jwtToken')==''){
      sessionStorage.setItem('jwtToken','null');
    }
    this.setState({
      token: sessionStorage.getItem('jwtToken')
    });
    this.getUser();
  }

  UserLogged = () => {
    this.setState({
      token: sessionStorage.getItem('jwtToken')
    });
  }

  componentWillUpdate = () => {
    window.scrollTo(0, 0)
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
      
      this.setState({
        type: data.type,
        
      });

    }).catch(response => {
      console.log(response);
    });
  }
  render() {
   
    return (

      <HashRouter>


        {



          (this.state.type === "ADMIN")?(
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            //<Route exact path="/sisasis" name="Home" component={AdminLayout} />
            <Route  path="/" name="Sistema de asistencias" component={AdminLayout} />
          </Switch>
                      ):(this.state.type === "DIRECTOR")?

                        (
                          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            //<Route exact path="/sisasis" name="Home" component={AdminLayout} />
            <Route  path="/" name="Sistema de asistencias" component={DirectorLayout} />
          </Switch>

          ):(this.state.type === "TEACHER")?(
                       <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            //<Route exact path="/sisasis" name="Home" component={AdminLayout} />
            <Route  path="/" name="Sistema de asistencias" component={ProfesorLayout} />
          </Switch>


                      ):(this.state.type === "TUTOR")?(
                        <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            //<Route exact path="/sisasis" name="Home" component={AdminLayout} />
            <Route  path="/" name="Sistema de asistencias" component={PadreLayout} />
          </Switch>


                        ):(this.state.type === "DOORMAN")?(

                      <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            //<Route exact path="/sisasis" name="Home" component={AdminLayout} />
            <Route  path="/" name="Sistema de asistencias" component={PorteroLayout} />
          </Switch>

                      ):(

    
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
           // <Route exact path="/sisasis" name="Home" component={Login} />
            <Route path="/" name="Home" component={Login} />
          </Switch>
          )} 
      </HashRouter>



      
    );
  

  }
}

export default App;
