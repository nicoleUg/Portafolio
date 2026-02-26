import { Github, Linkedin, Mail, Heart, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nicole Ugarte</h3>
            <p className="text-blue-200 mb-3">
              Estudiante de Ingeniería de Software
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#skills" className="text-blue-200 hover:text-white transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projects" className="text-blue-200 hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com/nicoleUg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicole-ugarte-841b053aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <a
                href="mailto:nicoleleugarte@gmail.com"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                nicoleleugarte@gmail.com
              </a>
              <a
                href="tel:75460019"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                75460019
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}