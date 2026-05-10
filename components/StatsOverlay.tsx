import React, { useMemo } from 'react';
import { X, Trophy, Activity, AlertTriangle, BookOpen } from 'lucide-react';
import { Category, UserProgress, LearningItem } from '../types';

interface StatsOverlayProps {
  progressData: Record<string, UserProgress>;
  categories: Category[];
  onClose: () => void;
}

const StatsOverlay: React.FC<StatsOverlayProps> = ({ progressData, categories, onClose }) => {
  const { allItems, reviewedItems, greenItems, yellowItems, redItems } = useMemo(() => {
    const items = categories.flatMap(c => c.items);
    
    const reviewed: { item: LearningItem; status: 'green' | 'yellow' | 'red'; interval: number }[] = [];
    const greens: typeof reviewed = [];
    const yellows: typeof reviewed = [];
    const reds: typeof reviewed = [];

    items.forEach(item => {
      const p = progressData[item.id || item.term_zh];
      if (p) {
        let status: 'green' | 'yellow' | 'red' = 'red';
        if (p.interval > 3) status = 'green';
        else if (p.interval >= 0.5) status = 'yellow';

        const entry = { item, status, interval: p.interval };
        reviewed.push(entry);

        if (status === 'green') greens.push(entry);
        else if (status === 'yellow') yellows.push(entry);
        else reds.push(entry);
      }
    });

    // Sort by status (red first, then yellow, then green), then by interval ascending
    reviewed.sort((a, b) => {
      const statusWeight = { 'red': 0, 'yellow': 1, 'green': 2 };
      if (statusWeight[a.status] !== statusWeight[b.status]) {
        return statusWeight[a.status] - statusWeight[b.status];
      }
      return a.interval - b.interval;
    });

    return {
      allItems: items,
      reviewedItems: reviewed,
      greenItems: greens,
      yellowItems: yellows,
      redItems: reds,
    };
  }, [categories, progressData]);

  const accuracy = reviewedItems.length > 0 
    ? Math.round(((greenItems.length + yellowItems.length) / reviewedItems.length) * 100) 
    : 0;

  return (
    <div className="fixed inset-0 bg-gray-50/95 backdrop-blur-md z-[110] flex flex-col animate-in fade-in slide-in-from-bottom-10">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Activity className="text-emerald-500" /> 完整學習數據
        </h2>
        <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-6 max-w-2xl mx-auto w-full">
        
        {/* Overview Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <BookOpen className="text-blue-500 mb-2" size={28} />
            <div className="text-3xl font-black text-gray-800 tracking-tight">{reviewedItems.length} <span className="text-base text-gray-400 font-normal">/ {allItems.length}</span></div>
            <div className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wider">已學習句型</div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <Trophy className="text-emerald-500 mb-2" size={28} />
            <div className="text-3xl font-black text-gray-800 tracking-tight">{accuracy}<span className="text-xl">%</span></div>
            <div className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wider">總體生存指數</div>
          </div>
        </div>

        {/* Readiness Breakdown */}
        <h3 className="text-lg font-bold text-gray-800 mb-4 px-1">狀態分佈</h3>
        <div className="flex gap-3 mb-8">
          <div className="flex-1 bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col items-center">
            <span className="text-2xl mb-1">🟢</span>
            <span className="font-bold text-green-700 text-xl">{greenItems.length}</span>
            <span className="text-[10px] font-bold text-green-600/70 mt-1 uppercase">完美</span>
          </div>
          <div className="flex-1 bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex flex-col items-center">
            <span className="text-2xl mb-1">🟡</span>
            <span className="font-bold text-yellow-700 text-xl">{yellowItems.length}</span>
            <span className="text-[10px] font-bold text-yellow-600/70 mt-1 uppercase">還行</span>
          </div>
          <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col items-center relative overflow-hidden">
            {redItems.length > 0 && <div className="absolute top-0 right-0 w-2 h-full bg-red-400" />}
            <span className="text-2xl mb-1">🔴</span>
            <span className="font-bold text-red-700 text-xl">{redItems.length}</span>
            <span className="text-[10px] font-bold text-red-600/70 mt-1 uppercase">生疏</span>
          </div>
        </div>

        {/* All Items List */}
        <h3 className="text-lg font-bold text-gray-800 mb-4 px-1">句型清單</h3>
        {reviewedItems.length === 0 ? (
          <div className="text-center text-gray-400 py-10 bg-white rounded-2xl border border-dashed border-gray-200">
            尚未開始任何測驗
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {reviewedItems.map((entry, idx) => {
              let StatusIcon = null;
              let statusBg = '';
              let statusText = '';
              
              if (entry.status === 'green') {
                StatusIcon = <span className="text-xl">🟢</span>;
                statusBg = 'bg-white border-green-200';
                statusText = '✅ 完美';
              } else if (entry.status === 'yellow') {
                StatusIcon = <span className="text-xl">🟡</span>;
                statusBg = 'bg-white border-yellow-200';
                statusText = '🎒 還行';
              } else {
                StatusIcon = <span className="text-xl">🔴</span>;
                statusBg = 'bg-red-50 border-red-200';
                statusText = '🚨 落地前必看';
              }

              return (
                <div key={idx} className={`p-4 rounded-2xl border ${statusBg} flex items-center justify-between gap-3 shadow-sm`}>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-800 text-base sm:text-lg truncate">{entry.item.term_zh}</div>
                    <div className="text-gray-500 text-sm truncate">{entry.item.related_terms[0]?.term_target || ''}</div>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <div className="flex items-center gap-1 font-bold text-gray-700 bg-white/50 px-2 py-1 rounded-md">
                      {StatusIcon}
                      <span className="text-xs sm:text-sm whitespace-nowrap">{statusText}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsOverlay;
