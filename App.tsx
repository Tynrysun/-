import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { curriculumData } from './data';
import { CategoryType } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>(CategoryType.POINT);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeData = curriculumData.find(section => section.id === activeCategory) || curriculumData[0];

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <Sidebar 
        sections={curriculumData} 
        activeId={activeCategory} 
        onSelect={(id) => {
          setActiveCategory(id);
          setIsMobileMenuOpen(false);
        }}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <ContentArea 
        data={activeData} 
        onOpenMenu={() => setIsMobileMenuOpen(true)}
      />
    </div>
  );
}