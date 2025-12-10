import React, { useState } from 'react';
import { Section, CategoryType } from '../types';

interface SidebarProps {
  sections: Section[];
  activeId: CategoryType;
  onSelect: (id: CategoryType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeId, onSelect }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-full md:w-64'} bg-slate-900 text-slate-100 flex-shrink-0 md:min-h-screen transition-all duration-300 flex flex-col z-20`}>
      <div className="p-4 border-b border-slate-800 flex items-center justify-between h-16">
        {!isCollapsed && (
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 truncate">
            <svg className="w-6 h-6 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="truncate">图形推理</span>
          </h1>
        )}
        {isCollapsed && (
             <svg className="w-8 h-8 text-indigo-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 hidden md:block"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
           {isCollapsed ? (
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
           ) : (
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
           )}
        </button>
      </div>
      
      <nav className="p-2 md:p-4 space-y-1 flex-1 overflow-y-auto">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            title={isCollapsed ? section.title : ''}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-4'} py-3 text-sm font-medium rounded-lg transition-all duration-200
              ${activeId === section.id 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
          >
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${activeId === section.id ? 'bg-white' : 'bg-slate-600'}`}></span>
            {!isCollapsed && <span className="truncate">{section.title.split(' - ')[1] || section.title}</span>}
          </button>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="p-6 mt-auto">
          <div className="bg-slate-800 rounded-lg p-4 text-xs text-slate-400">
            <p className="font-semibold text-slate-200 mb-1">优先规律口诀：</p>
            <p>面 — 笔画 — 点 — 线</p>
            <p className="mt-2 text-slate-500">先看整体，再看局部</p>
          </div>
        </div>
      )}
    </aside>
  );
};