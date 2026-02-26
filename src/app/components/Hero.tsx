import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent leading-tight pb-2">
          Nicole Ugarte
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Estudiante de Ingeniería de Software | Frontend Developer
        </p>
        
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          <a
            href="https://github.com/nicoleUg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-950 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicole-ugarte-841b053aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="mailto:nicoleleugarte@gmail.com"
            className="inline-flex items-center gap-2 border-2 border-blue-950 text-blue-950 px-6 py-3 rounded-lg hover:bg-blue-950 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}