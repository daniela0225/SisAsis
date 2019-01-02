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
      name: 'Colegios',
      url: '/Home/Colegios',
      icon: 'icon-pencil',
    },
    {
      name: 'Alumnos',
      url: '/Home/Alumnos',
      icon: 'icon-pencil',
    },
    {
      name: 'Usuarios',
      url: '/Home/Usuarios',
      icon: 'icon-pencil',
    },
    {
      name: 'Tutores',
      url: '/Home/Tutores',
      icon: 'icon-pencil',
    },
    
    
    
  ],
};
