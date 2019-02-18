import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import AdminLayout from './containers/AdminLayout';
import DirectorLayout from './containers/DirectorLayout';
import PadreLayout from './containers/PadreLayout';
import ProfesorLayout from './containers/PadreLayout';
import PorteroLayout from './containers/PorteroLayout';
import InicioLayout from './containers';




const Sisasis = React.lazy(() => import('./views/Pages/sisasis/sisasis'));
const Home = React.lazy(() => import('./views/Home/Home'));
const HomeAdmin = React.lazy(() => import('./views/Home/HomeAdmin'));
const DetalleColegio = React.lazy(() => import('./views/Colegios/Detalle'));
const DetalleAlumno = React.lazy(() => import('./views/Alumnos/Detalle'));
const DetalleAlumnoC = React.lazy(() => import('./views/Alumnos/DetalleC'));
const DetalleTutor = React.lazy(() => import('./views/Tutores/Detalle'));
const DetalleTutorC = React.lazy(() => import('./views/Tutores/DetalleC'));
const DetalleUsuario = React.lazy(() => import('./views/Usuarios/Detalle'));
const DetalleUsuarioC = React.lazy(() => import('./views/Usuarios/DetalleC'));
const DetalleProfesor = React.lazy(() => import('./views/Profesores/Detalle'));
const DetalleProfesorC = React.lazy(() => import('./views/Profesores/DetalleC'));
const ListadoRegistros = React.lazy(() => import('./views/Registros/Listado'));
const ListadoRegistrosC = React.lazy(() => import('./views/Registros/ListadoC'));
const ListadoColegios = React.lazy(() => import('./views/Colegios/Listado'));
//const ListadoAlumnos = React.lazy(() => import('./views/Alumnos/Listado'));
const ListadoAlumnos = React.lazy(() => import('./views/Alumnos/AlumnosTutores'));
const ListadoAlumnosC = React.lazy(() => import('./views/Alumnos/ListadoC'));
const ListadoUsuarios = React.lazy(() => import('./views/Usuarios/Listado'));
const ListadoUsuariosC = React.lazy(() => import('./views/Usuarios/ListadoC'));
const ListadoTutores = React.lazy(() => import('./views/Tutores/Listado'));
const ListadoTutoresC = React.lazy(() => import('./views/Tutores/ListadoC'));
const ListadoProfesores = React.lazy(() => import('./views/Profesores/Listado'));
const ListadoProfesoresC = React.lazy(() => import('./views/Profesores/ListadoC'));
const FormularioColegio = React.lazy(() => import('./views/Colegios/Formulario'));
const FormularioRegistro = React.lazy(() => import('./views/Registros/Formulario'));
const FormularioAlumno = React.lazy(() => import('./views/Alumnos/Formulario'));
const FormularioAlumnoC = React.lazy(() => import('./views/Alumnos/FormularioC'));
const FormularioUsuario = React.lazy(() => import('./views/Usuarios/Formulario'));
const FormularioUsuarioC = React.lazy(() => import('./views/Usuarios/FormularioC'));
const FormularioTutor = React.lazy(() => import('./views/Tutores/Formulario'));
const FormularioTutorC = React.lazy(() => import('./views/Tutores/FormularioC'));
const FormularioProfesor = React.lazy(() => import('./views/Profesores/Formulario'));
const FormularioProfesorC = React.lazy(() => import('./views/Profesores/FormularioC'));
const EditarColegio = React.lazy(() => import('./views/Colegios/Editar'));
const EditarAlumno = React.lazy(() => import('./views/Alumnos/Editar'));
const EditarAlumnoC = React.lazy(() => import('./views/Alumnos/EditarC'));
const EditarUsuario = React.lazy(() => import('./views/Usuarios/Editar'));
const EditarUsuarioC = React.lazy(() => import('./views/Usuarios/EditarC'));
const EditarTutor = React.lazy(() => import('./views/Tutores/Editar'));
const EditarTutorC = React.lazy(() => import('./views/Tutores/EditarC'));
const EditarProfesor = React.lazy(() => import('./views/Profesores/Editar'));
const EditarProfesorC = React.lazy(() => import('./views/Profesores/EditarC'));
const BuscarAlumnoC = React.lazy(() => import('./views/Alumnos/BuscarC'));











// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  //{ path: '/', exact: true, name: 'Sistema de asistencias', component: Sisasis },
  { path: '/Director', exact: true, name: 'Sistema de asistencias', component: DirectorLayout },
    { path: '/Profesor', exact: true, name: 'Sistema de asistencias', component: ProfesorLayout },
  { path: '/Portero', exact: true, name: 'Sistema de asistencias', component: PorteroLayout },
  { path: '/Padre', exact: true, name: 'Sistema de asistencias', component: PadreLayout },
  { path: '/Home', name: 'Home', component: Home, exact:true },
  { path: '/Admin', name: 'Home', component: HomeAdmin, exact:true },
  { path: '/Home/Registros', exact:true, name: 'Registros', component: ListadoRegistros },
  { path: '/Home/Records', exact:true, name: 'Registros', component: ListadoRegistrosC },
  { path: '/Home/Registros/Formulario', name: 'Nuevo Registro', component: FormularioRegistro },
  //{ path: '/Home/Registros/Editar/:id', name: 'Editar Registro', component: EditarRegistro },
  { path: '/Home/Colegios',exact:true, name: 'Colegios', component: ListadoColegios },
  { path: '/Home/Colegios/Formulario', exact:true, name: 'Formulario Colegio', component: FormularioColegio },
  { path: '/Home/Colegios/Editar/:id', exact:true,name: 'Editar Colegio', component: EditarColegio },
  { path: '/Home/Colegios/Detalle/:id', exact:true,name: 'Info Colegio', component: DetalleColegio },
  { path: '/Home/Alumnos',exact:true, name: 'Alumnos', component: ListadoAlumnos },
  { path: '/Home/Students',exact:true, name: 'Alumnos', component: ListadoAlumnosC },
  { path: '/Home/Students/Search',exact:true, name: 'Busqueda de Alumno', component: BuscarAlumnoC },
  //{ path: '/Home/AlumnosTutores',exact:true, name: 'Alumnos', component: ListadoAlumnosTutores },
  { path: '/Home/Alumnos/Detalle/:id',exact:true, name: 'Alumno Info', component: DetalleAlumno },
  { path: '/Home/Students/Detail/:id',exact:true, name: 'Alumno Info', component: DetalleAlumnoC },
  { path: '/Home/Alumnos/Formulario', name: 'Formulario Alumno', component: FormularioAlumno },
  { path: '/Home/Students/Form', name: 'Formulario Alumno', component: FormularioAlumnoC },
  { path: '/Home/Alumnos/Editar/:id', exact:true,name: 'Editar Alumno', component: EditarAlumno },
  { path: '/Home/Students/Edit/:id', exact:true,name: 'Editar Alumno', component: EditarAlumnoC },
  { path: '/Home/Usuarios',exact:true, name: 'Usuarios', component: ListadoUsuarios },
  { path: '/Home/Users',exact:true, name: 'Usuarios', component: ListadoUsuariosC },
  { path: '/Home/Usuarios/Detalle/:id',exact:true, name: 'Usuario Info', component: DetalleUsuario },
  { path: '/Home/Users/Detail/:id',exact:true, name: 'Usuario Info', component: DetalleUsuarioC },
  { path: '/Home/Usuarios/Formulario', name: 'Formulario Usuario', component: FormularioUsuario },
  { path: '/Home/Users/Form', name: 'Formulario Usuario', component: FormularioUsuarioC },
  { path: '/Home/Usuarios/Editar/:id', exact:true,name: 'Editar Usuario', component: EditarUsuario },
  { path: '/Home/Users/Edit/:id', exact:true,name: 'Editar Usuario', component: EditarUsuarioC },
  { path: '/Home/Tutores',exact:true, name: 'Tutores', component: ListadoTutores },
  { path: '/Home/Tutors',exact:true, name: 'Tutores', component: ListadoTutoresC },
  { path: '/Home/Tutores/Detalle/:id',exact:true, name: 'Tutor Info', component: DetalleTutor },
  { path: '/Home/Tutors/Detail/:id',exact:true, name: 'Tutor Info', component: DetalleTutorC },
  { path: '/Home/Tutores/Formulario', name: 'Formulario Tutor', component: FormularioTutor },
  { path: '/Home/Tutors/Form', name: 'Formulario Tutor', component: FormularioTutorC },
  { path: '/Home/Tutores/Editar/:id', exact:true,name: 'Editar Tutor', component: EditarTutor },
  { path: '/Home/Tutors/Edit/:id', exact:true,name: 'Editar Tutor', component: EditarTutorC },
  { path: '/Home/Teachers',exact:true, name: 'Profesores', component: ListadoProfesoresC },
  { path: '/Home/Profesores',exact:true, name: 'Profesores', component: ListadoProfesores },
  { path: '/Home/Profesores/Detalle/:id',exact:true, name: 'Profesor Info', component: DetalleProfesor },
  { path: '/Home/Teachers/Detail/:id',exact:true, name: 'Profesor Info', component: DetalleProfesorC },
  { path: '/Home/Profesores/Formulario', name: 'Formulario Profesor', component: FormularioProfesor },
  { path: '/Home/Teachers/Form', name: 'Formulario Profesor', component: FormularioProfesorC },
  { path: '/Home/Profesores/Editar/:id', exact:true,name: 'Editar Profesor', component: EditarProfesor },
  { path: '/Home/Teachers/Edit/:id', exact:true,name: 'Editar Profesor', component: EditarProfesorC },

];

export default routes;
