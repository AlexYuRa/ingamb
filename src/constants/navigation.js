/**
 * Fuente ÚNICA de navegación del sitio.
 * Alimenta tanto el Navbar (menú principal + desplegables) como la barra de
 * pestañas de cada sección (SectionTabs) y los Breadcrumbs, para que jamás se
 * desincronicen. Cada subsección es una ruta real, enlazable e indexable.
 */
export const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  {
    name: 'Nosotros',
    path: '/nosotros',
    sublinks: [
      { name: 'Misión y Visión', path: '/nosotros/mision-vision' },
      { name: 'Historia', path: '/nosotros/historia' },
      { name: 'Colegios Aliados', path: '/nosotros/convenios-escuelas' },
    ],
  },
  {
    name: 'Académico',
    path: '/academico',
    sublinks: [
      { name: 'Perfil del Ingresante', path: '/academico/perfil-ingresante' },
      { name: 'Perfil del Egresado', path: '/academico/perfil-egresado' },
      { name: 'Plan de Estudios', path: '/academico/plan-estudios' },
      { name: 'Titulación', path: '/academico/titulacion' },
    ],
  },
  {
    name: 'Autoridades',
    path: '/autoridades',
    sublinks: [
      { name: 'Dirección', path: '/autoridades/direccion' },
      { name: 'Docentes', path: '/autoridades/docentes' },
      { name: 'Organigrama', path: '/autoridades/organigrama' },
    ],
  },
  {
    name: 'Investigación',
    path: '/investigacion',
    sublinks: [
      { name: 'Líneas', path: '/investigacion/lineas' },
      { name: 'Proyectos', path: '/investigacion/proyectos' },
      { name: 'Publicaciones', path: '/investigacion/publicaciones' },
      { name: 'Convenios', path: '/investigacion/convenios' },
    ],
  },
  { name: 'Contacto', path: '/contacto' },
];

/** Devuelve la entrada de sección (con sus sublinks) a partir de su ruta base. */
export const getSection = (basePath) =>
  NAV_LINKS.find((link) => link.path === basePath);
