import React from 'react';
import { ProfileCard } from './ProfileCard';

const TeamProfiles: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
      <h2 className="text-2xl font-bold text-brand-primary mb-6 text-center border-b pb-4">
        Redactado por nuestro equipo jurídico
      </h2>
      <div className="space-y-8 pt-6">
        <ProfileCard
          imageUrl="https://bleyabogados.es/wp-content/uploads/2020/09/Isabel-Bonilla-Abogada.jpg"
          name="Isabel Bonilla Sánchez"
          title="Abogada Socia Fundadora. Experta en Derecho Sanitario"
          description="Dedicación exclusiva a litigios de responsabilidad civil médico-sanitaria y asuntos de negligencia médica."
        />
        <ProfileCard
          imageUrl="https://bleyabogados.es/wp-content/uploads/2020/09/Clara-Lozano-Abogada.jpg"
          name="Clara Lozano Gallego"
          title="Abogada Socia Fundadora. Experta en Derecho Sanitario"
          description="Especialista en la defensa del paciente y la tramitación de reclamaciones por daños derivados de la asistencia sanitaria."
        />
      </div>
    </div>
  );
};

export default TeamProfiles;