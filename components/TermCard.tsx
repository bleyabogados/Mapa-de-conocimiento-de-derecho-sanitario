import React from 'react';
import type { LexiconTerm } from '../types';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface TermCardProps {
  term: LexiconTerm;
}

const TermCard: React.FC<TermCardProps> = ({ term }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <h2 className="text-xl font-bold text-brand-primary mb-2 sm:mb-0">{term.term}</h2>
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
            {term.juridical_area}
          </span>
        </div>

        <p className="text-brand-muted font-serif leading-relaxed mb-6">{term.definition}</p>

        <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
          <p className="text-gray-500 mb-2 sm:mb-0">
            Fuente: <span className="font-medium text-gray-700">{term.definition_source}</span>
          </p>
          <a
            href={term.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-brand-secondary hover:text-brand-primary transition-colors duration-200"
          >
            Consultar fuente
            <ExternalLinkIcon className="ml-1.5 h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default TermCard;
