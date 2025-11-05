import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-primary mt-12">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400">
          &copy; {currentYear} Bley Abogados SLP. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;