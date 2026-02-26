import { Code2, Layout, Database, Globe, Languages, GraduationCap } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: 'Frontend',
      icon: Code2,
      items: ['JavaScript', 'TypeScript', 'HTML', 'Angular', 'React']
    },
    {
      category: 'Backend',
      icon: Database,
      items: ['C#', 'C++', 'Python', 'Java', 'Kotlin']
    },
    {
      category: 'Bases de Datos',
      icon: Database,
      items: ['MySQL', 'Azure DB', 'Firebase']
    },
    {
      category: 'Idiomas',
      icon: Languages,
      items: ['Español (Nativo)', 'Inglés (B2)']
    },
    {
      category: 'Educación',
      icon: GraduationCap,
      items: ['Ingeniería de Software - UCB', 'Ciberseguridad Cisco', 'Colegio San Agustin Cochabamba']
    },
    {
      category: 'Herramientas',
      icon: Globe,
      items: ['Git & GitHub', 'Firebase Realtime', 'Azure', 'Kotlin Android']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Habilidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-950"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-950 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-950 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}