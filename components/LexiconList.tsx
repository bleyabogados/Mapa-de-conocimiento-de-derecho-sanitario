import React from 'react';
import TermCard from './TermCard';
import type { LexiconTerm } from '../types';

interface LexiconListProps {
  terms: LexiconTerm[];
}

const LexiconList: React.FC<LexiconListProps> = ({ terms }) => {
  if (terms.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-medium text-brand-primary">No se encontraron resultados</h3>
        <p className="mt-1 text-sm text-brand-muted">Intente ajustar los términos de búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {terms.map((term, index) => (
        <TermCard key={index} term={term} />
      ))}
    </div>
  );
};

export default LexiconList;
