import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import SearchBar from './components/SearchBar';
import LexiconList from './components/LexiconList';
import Footer from './components/Footer';
import TeamProfiles from './components/TeamProfiles';
import { lexiconData } from './data/lexicon';
import type { LexiconTerm } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTerms, setFilteredTerms] = useState<LexiconTerm[]>(lexiconData);

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = lexiconData.filter(item => {
      return (
        item.term.toLowerCase().includes(lowercasedFilter) ||
        item.definition.toLowerCase().includes(lowercasedFilter) ||
        item.juridical_area.toLowerCase().includes(lowercasedFilter)
      );
    });
    setFilteredTerms(filteredData);
  }, [searchTerm]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-primary">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <Introduction />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <LexiconList terms={filteredTerms} />
          <TeamProfiles />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;