import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-primary shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Bley Abogados
            </h1>
            <p className="text-lg text-gray-300 mt-1">
              Mapa de Conocimiento sobre Derecho Sanitario
            </p>
        </div>
      </div>
    </header>
  );
};

export default Header;