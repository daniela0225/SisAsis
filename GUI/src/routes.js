import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import AdminLayout from './containers/AdminLayout';
import DirectorLayout from './containers/DirectorLayout';
import PadreLayout from './containers/PadreLayout';
import PorteroLayout from './containers/PorteroLayout';
import InicioLayout from './containers';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));


const Sisasis = React.lazy(() => import('./views/Pages/sisasis/sisasis'));
const Home = React.lazy(() => import('./views/Home/Home'));
const HomeAdmin = React.lazy(() => import('./views/Home/HomeAdmin'));
const ListadoRegistros = React.lazy(() => import('./views/Registros/Listado'));
const ListadoColegios = React.lazy(() => import('./views/Colegios/Listado'));
const ListadoAlumnos = React.lazy(() => import('./views/Alumnos/Listado'));
const ListadoUsuarios = React.lazy(() => import('./views/Usuarios/Listado'));
const ListadoTutores = React.lazy(() => import('./views/Tutores/Listado'));
const FormularioColegio = React.lazy(() => import('./views/Colegios/Formulario'));
const FormularioRegistro = React.lazy(() => import('./views/Registros/Formulario'));
const FormularioAlumno = React.lazy(() => import('./views/Alumnos/Formulario'));
const FormularioUsuario = React.lazy(() => import('./views/Usuarios/Formulario'));
const FormularioTutor = React.lazy(() => import('./views/Tutores/Formulario'));
const EditarRegistro = React.lazy(() => import('./views/Registros/Editar'));











// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  //{ path: '/', exact: true, name: 'Sistema de asistencias', component: Sisasis },
  { path: '/Director', exact: true, name: 'Sistema de asistencias', component: DirectorLayout },
  { path: '/Portero', exact: true, name: 'Sistema de asistencias', component: PorteroLayout },
  { path: '/Padre', exact: true, name: 'Sistema de asistencias', component: PadreLayout },
  { path: '/Home', name: 'Home', component: Home, exact:true },
  { path: '/Admin', name: 'Home', component: HomeAdmin, exact:true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Data', name: 'Data', exact: true, component: ListadoRegistros },
  { path: '/Home/Registros', exact:true, name: 'Registros', component: ListadoRegistros },
  { path: '/Home/Registros/Formulario', name: 'Nuevo Registro', component: FormularioRegistro },
  { path: '/Home/Registros/Editar', name: 'Editar Registro', component: EditarRegistro },
  { path: '/Home/Colegios',exact:true, name: 'Colegios', component: ListadoColegios },
  { path: '/Home/Colegios/Formulario', name: 'Formulario Colegio', component: FormularioColegio },
  { path: '/Home/Alumnos',exact:true, name: 'Alumnos', component: ListadoAlumnos },
  { path: '/Home/Alumnos/Formulario', name: 'Formulario Alumno', component: FormularioAlumno },
  { path: '/Home/Usuarios',exact:true, name: 'Usuarios', component: ListadoUsuarios },
  { path: '/Home/Usuarios/Formulario', name: 'Formulario Usuario', component: FormularioUsuario },
  { path: '/Home/Tutores',exact:true, name: 'Tutores', component: ListadoTutores },
  { path: '/Home/Tutores/Formulario', name: 'Formulario Tutor', component: FormularioTutor },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
