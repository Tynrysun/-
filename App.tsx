import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { curriculumData } from './data';
import { CategoryType } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>(CategoryType.POINT);

  const activeData = curriculumData.find(section => section.id === activeCategory) || curriculumData[0];

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-slate-50 overflow-hidden">
      <Sidebar 
        sections={curriculumData} 
        activeId={activeCategory} 
        onSelect={setActiveCategory} 
      />
      <ContentArea data={activeData} />
    </div>
  );
}