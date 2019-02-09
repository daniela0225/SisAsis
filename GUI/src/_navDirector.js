export default {
  items: [
    
    {
      title: true,
      name: 'Mantenimientos',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Registros',
      url: '/Home/Registros',
      icon: 'icon-pencil',
    },
    
    {
      name: 'Alumnos',
      url: '/Home/Alumnos',
      icon: 'icon-pencil',
    },
    {
      name: 'Usuarios',
      url: '/Home/Users',
      icon: 'icon-pencil',
    },
    {
      name: 'Tutores',
      url: '/Home/Tutors',
      icon: 'icon-pencil',
    },
    {
      name: 'Profesores',
      url: '/Home/Teachers',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Reportes',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Reporte de alumno',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Por fecha',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Busqueda de alumno',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        
      ],
    },
    
  ],
};
