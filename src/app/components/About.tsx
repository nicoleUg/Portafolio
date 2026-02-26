export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Sobre Mí
        </h2>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-blue-950">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Estudiante de Ingeniería de Software en la Universidad Católica Boliviana. 
            Me gusta desarrollar soluciones tecnológicas funcionales y escalables. 
            Me distingo por combinar una sólida lógica de programación con excelentes 
            habilidades blandas y capacidad de trabajo en equipo.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Busco una oportunidad para aplicar mis conocimientos en desarrollo (Frontend) 
            y aseguramiento de calidad, aportando no solo código limpio, sino también una 
            comunicación fluida y una visión colaborativa para potenciar el trabajo en equipo.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-950 mb-1">Trabajo</p>
              <p className="text-sm text-gray-600">Colaborativo</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-950 mb-1">Alta</p>
              <p className="text-sm text-gray-600">Adaptabilidad</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-950 mb-1">Liderazgo</p>
              <p className="text-sm text-gray-600">de Equipo</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-950 mb-1">Comunicación</p>
              <p className="text-sm text-gray-600">Asertiva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}