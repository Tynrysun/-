import React, { useState } from 'react';
import { RulePoint } from '../types';
import { ShapeRenderer } from './ShapeRenderer';

interface RuleCardProps {
  rule: RulePoint;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export const RuleCard: React.FC<RuleCardProps> = ({ rule, index, isExpanded, onToggle }) => {
  const [activeTab, setActiveTab] = useState<'examples' | 'real'>('examples');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when tab changes
  const handleTabChange = (tab: 'examples' | 'real') => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const currentItems = activeTab === 'examples' ? rule.examples : (rule.realQuestions || []);
  const hasRealQuestions = rule.realQuestions && rule.realQuestions.length > 0;

  const nextItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentItems.length > 1) {
        setCurrentIndex((prev) => (prev + 1) % currentItems.length);
    }
  };

  const prevItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentItems.length > 1) {
        setCurrentIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
      <div 
          className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between cursor-pointer select-none"
          onClick={onToggle}
      >
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex-shrink-0">
                {index + 1}
            </span>
            {rule.title}
          </h3>
          <div className={`transform transition-transform duration-200 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </div>
      </div>
      
      {isExpanded && (
          <div className="p-6 flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Left Column: Theory */}
              <div className="flex-1 space-y-5">
                <p className="text-slate-700 leading-relaxed text-lg">{rule.content}</p>
                
                {rule.tips && rule.tips.length > 0 && (
                    <div className="bg-indigo-50/50 rounded-lg p-5 border border-indigo-100/50">
                    <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-3 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        解题技巧 / 细化考法
                    </h4>
                    <ul className="space-y-3">
                        {rule.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 shadow-sm"></span>
                            <span>{tip}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
              </div>

              {/* Right Column: Visuals & Real Exam */}
              <div className="w-full lg:w-[320px] flex flex-col gap-3">
                 {/* Tabs */}
                 <div className="flex p-1 bg-slate-100 rounded-lg">
                    <button 
                        className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'examples' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        onClick={() => handleTabChange('examples')}
                    >
                        典型示例
                    </button>
                    {hasRealQuestions && (
                        <button 
                            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'real' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => handleTabChange('real')}
                        >
                            真题演示
                        </button>
                    )}
                 </div>

                 {/* Display Area */}
                 <div className="relative group/display">
                    <div className="bg-white border-2 border-slate-100 rounded-xl overflow-hidden min-h-[240px] flex flex-col">
                        
                        {/* Image Viewer */}
                        <div className="flex-1 bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:12px_12px] p-6 flex items-center justify-center relative">
                             {currentItems.length > 0 ? (
                                <>
                                    <div className="transition-all duration-300 transform">
                                        <ShapeRenderer 
                                            type={activeTab === 'examples' ? (currentItems[currentIndex] as any).type : (currentItems[currentIndex] as any).imageType} 
                                            className="w-32 h-32" 
                                        />
                                    </div>
                                    
                                    {/* Navigation Arrows */}
                                    {currentItems.length > 1 && (
                                        <>
                                            <button 
                                                onClick={prevItem}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 shadow-sm text-slate-400 hover:text-indigo-600 hover:bg-white transition-all opacity-0 group-hover/display:opacity-100"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                            </button>
                                            <button 
                                                onClick={nextItem}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 shadow-sm text-slate-400 hover:text-indigo-600 hover:bg-white transition-all opacity-0 group-hover/display:opacity-100"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </button>
                                        </>
                                    )}

                                    {/* Indicators */}
                                    {currentItems.length > 1 && (
                                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                                            {currentItems.map((_, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-indigo-500 w-3' : 'bg-slate-300'}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </>
                             ) : (
                                 <div className="text-slate-400 text-sm">暂无示例</div>
                             )}
                        </div>

                        {/* Info Section */}
                        <div className="bg-slate-50 p-3 border-t border-slate-100">
                             {activeTab === 'examples' && currentItems[currentIndex] && (
                                 <div className="text-center animate-in fade-in duration-200">
                                     <p className="font-bold text-slate-700">{(currentItems[currentIndex] as any).label}</p>
                                     <p className="text-xs text-slate-500 mt-1">{(currentItems[currentIndex] as any).description}</p>
                                 </div>
                             )}
                             {activeTab === 'real' && currentItems[currentIndex] && (
                                 <div className="animate-in fade-in duration-200">
                                     <div className="flex items-center justify-between mb-1">
                                         <span className="text-[10px] font-bold bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded">
                                             {(currentItems[currentIndex] as any).year}
                                         </span>
                                         <span className="text-[10px] text-slate-400">真题解析</span>
                                     </div>
                                     <p className="text-xs text-slate-600 leading-snug">
                                         {(currentItems[currentIndex] as any).analysis}
                                     </p>
                                 </div>
                             )}
                        </div>
                    </div>
                 </div>
              </div>
          </div>
      )}
    </div>
  );
};