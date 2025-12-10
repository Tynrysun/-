import React, { useState, useEffect, useMemo } from 'react';
import { Section, RulePoint } from '../types';
import { RuleCard } from './RuleCard';

interface ContentAreaProps {
  data: Section;
  onOpenMenu: () => void;
}

interface GroupedRule {
  name: string;
  rules: (RulePoint & { originalIndex: number })[];
}

export const ContentArea: React.FC<ContentAreaProps> = ({ data, onOpenMenu }) => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [collapsedGroups, setCollapsedGroups] = useState<string[]>([]);

  // Grouping logic
  const groupedRules = useMemo(() => {
    const groups: GroupedRule[] = [];
    let currentGroup: GroupedRule | null = null;

    data.rules.forEach((rule, index) => {
      const groupName = rule.group || "其他知识点";
      if (!currentGroup || currentGroup.name !== groupName) {
        currentGroup = { name: groupName, rules: [] };
        groups.push(currentGroup);
      }
      currentGroup.rules.push({ ...rule, originalIndex: index });
    });
    return groups;
  }, [data]);

  // Reset states when data changes
  useEffect(() => {
    if (data && data.rules) {
      setExpandedIndices(data.rules.map((_, i) => i));
      setCollapsedGroups([]); // Expand all groups by default
    }
  }, [data]);

  const toggleRule = (index: number) => {
    setExpandedIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const toggleGroup = (groupName: string) => {
    setCollapsedGroups(prev => 
      prev.includes(groupName)
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };

  const toggleAll = () => {
    if (expandedIndices.length === data.rules.length) {
      setExpandedIndices([]);
      setCollapsedGroups(groupedRules.map(g => g.name));
    } else {
      setExpandedIndices(data.rules.map((_, i) => i));
      setCollapsedGroups([]);
    }
  };

  const isAllExpanded = expandedIndices.length === data.rules.length;

  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50 relative">
      
      {/* Mobile Header - Sticky */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between flex-shrink-0 z-20 sticky top-0">
         <button onClick={onOpenMenu} className="text-slate-600 hover:bg-slate-100 p-2 -ml-2 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
         </button>
         <h1 className="font-bold text-slate-800 text-lg truncate flex-1 text-center pr-8">{data.title.split(' - ')[1] || data.title}</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Header Section */}
          <header className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-4">
                  {data.title.split(' - ')[0]}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{data.title.split(' - ')[1] || data.title}</h2>
                <h3 className="text-lg text-slate-500 font-medium mb-4">{data.subtitle}</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{data.description}</p>
              </div>
              
              {data.priorityRule && (
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg max-w-xs md:w-64 flex-shrink-0">
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">识别特征</p>
                  <p className="text-sm text-amber-900 font-medium">{data.priorityRule}</p>
                </div>
              )}
            </div>
          </header>

          {/* Toolbar */}
          <div className="flex justify-between items-center px-2">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide">知识点详解</h3>
              <button 
                  onClick={toggleAll} 
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-indigo-50 transition-colors"
              >
                  {isAllExpanded ? (
                      <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                          收起全部
                      </>
                  ) : (
                      <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          展开全部
                      </>
                  )}
              </button>
          </div>

          {/* Grouped Rules Grid */}
          <div className="space-y-8 pb-20 md:pb-0">
            {groupedRules.map((group, groupIndex) => {
              const isGroupCollapsed = collapsedGroups.includes(group.name);
              
              return (
                <div key={groupIndex} className="space-y-4">
                  {/* Group Header */}
                  <div 
                    className="flex items-center gap-3 cursor-pointer group select-none sticky top-0 md:top-0 bg-slate-50/95 backdrop-blur-sm py-2 z-10 rounded-lg pl-2 transition-colors hover:bg-slate-100/50"
                    onClick={() => toggleGroup(group.name)}
                  >
                    <div className={`w-6 h-6 rounded flex items-center justify-center bg-indigo-100 text-indigo-600 transition-transform duration-200 ${isGroupCollapsed ? '-rotate-90' : 'rotate-0'}`}>
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">{group.name}</h3>
                    <div className="h-px flex-1 bg-slate-200 group-hover:bg-indigo-100 transition-colors mr-2"></div>
                  </div>

                  {/* Rules Container */}
                  {!isGroupCollapsed && (
                    <div className="grid gap-6 animate-in fade-in slide-in-from-top-1 duration-300">
                      {group.rules.map((rule) => (
                        <RuleCard 
                          key={rule.originalIndex}
                          rule={rule}
                          index={rule.originalIndex}
                          isExpanded={expandedIndices.includes(rule.originalIndex)}
                          onToggle={() => toggleRule(rule.originalIndex)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </main>
  );
};