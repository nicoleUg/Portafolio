import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors shadow-lg"
      aria-label="Siguiente"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors shadow-lg"
      aria-label="Anterior"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'PetMatch',
      description: 'Desarrollé el módulo de búsqueda de mascotas, integrando la interfaz con la lógica de negocio. Apliqué el patrón Presenter para mantener el código ordenado y colaboré en la corrección de errores junto al equipo.',
      technologies: ['Frontend', 'Patrón Presenter', 'Trabajo en Equipo'],
      github: 'https://github.com/nicoleUg/ProyectoIngSoftPerritos.git',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=500&fit=crop'
    },
    {
      title: 'Sistema de Gestión de Biblioteca',
      description: 'Sistema de biblioteca en C#, enfocándome en la lógica de negocio, gestión de libros, usuarios y préstamos. Asumí un rol completamente backend en este proyecto.',
      technologies: ['C#', 'Backend', 'Gestión de Datos'],
      github: 'https://github.com/nicoleUg/Biblioteca.git',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop'
    },
    {
      title: 'Bossguer - App de Hamburgueseria',
      description: 'Sistema de delivery y tracking con Firebase Realtime Database para monitoreo de pedidos en tiempo real, ademas del menu y los pedidos del restaurante.',
      technologies: ['Kotlin', 'Firebase'],
      github: 'https://github.com/nicoleUg/ProyectoBossguer.git',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=500&fit=crop'
    },
    {
      title: 'Salud Total Bolivia',
      description: 'Desarrollé interfaces para una plataforma de salud, enfocándome en la experiencia de usuario, maquetación y correcta interacción entre vistas.',
      technologies: ['Frontend', 'UX/UI', 'Maquetación'],
      github: 'https://github.com/nicoleUg/frontend-SaludTotalBolivia.git',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendDots: (dots: any) => (
      <div style={{ bottom: '-50px' }}>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-950 transition-colors" />
    )
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Proyectos
        </h2>
        
        <div className="relative px-12">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.title} className="px-4 pb-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col h-[520px]">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-950 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-950 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-medium">Código</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}