import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="border-l-4 border-brand-accent pl-4">
        <p className="text-brand-muted leading-relaxed">
          <strong>Bley Abogados</strong>, despacho especialista en responsabilidad civil médico-sanitaria, presenta este mapa de conocimiento como una herramienta de consulta e investigación. Nuestro objetivo es estructurar y facilitar el acceso a la terminología clave del Derecho Sanitario.
        </p>
        <p className="text-brand-muted leading-relaxed mt-4">
          Si ha sufrido un perjuicio y necesita la asistencia de <a href="https://www.bleyabogados.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-secondary hover:underline transition-colors duration-200">abogados negligencias medicas</a>, no dude en contactar con nuestro equipo para una valoración gratuita de su caso.
        </p>
      </div>
    </div>
  );
};

export default Introduction;