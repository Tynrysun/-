import React from 'react';

interface ShapeRendererProps {
  type: string;
  className?: string;
}

// This component programmatically draws the examples seen in the PDF
// to ensure they are crisp and match the "Graphic Reasoning" style.
export const ShapeRenderer: React.FC<ShapeRendererProps> = ({ type, className = "w-24 h-24" }) => {
  const commonStroke = "stroke-slate-800 stroke-2 fill-none stroke-linecap-round stroke-linejoin-round";
  const redDot = "fill-red-500 stroke-none";
  const fillBlack = "fill-slate-800 stroke-none";
  const dashedStroke = "stroke-indigo-400 stroke-1 dashed fill-none";
  
  const renderShape = () => {
    switch (type) {
      // --- POINTS (点) ---
      case 'cross-lines': // 乱七八糟一团线
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <path d="M15,25 L85,75 M25,75 L75,25 M50,15 L50,85 M15,50 L85,50" className={commonStroke} />
            <circle cx="50" cy="50" r="3" className={redDot} />
            <circle cx="32" cy="38" r="3" className={redDot} />
          </svg>
        );
      case 'tangent': // 切点
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <rect x="15" y="15" width="70" height="70" className={commonStroke} />
            <circle cx="50" cy="50" r="35" className={commonStroke} />
            <circle cx="50" cy="15" r="3" className={redDot} />
            <circle cx="50" cy="85" r="3" className={redDot} />
          </svg>
        );
      case 'curve-straight-intersect': // 曲直交点
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <polygon points="50,15 15,85 85,85" className={commonStroke} />
            <circle cx="50" cy="60" r="28" className={commonStroke} />
            <circle cx="25" cy="72" r="3" className={redDot} />
            <circle cx="75" cy="72" r="3" className={redDot} />
          </svg>
        );
      case 'frame-intersect': // 框上交点
         return (
          <svg viewBox="0 0 100 100" className={className}>
            <rect x="20" y="20" width="60" height="60" className={commonStroke} />
            <line x1="20" y1="50" x2="80" y2="50" className={commonStroke} />
            <line x1="50" y1="20" x2="50" y2="80" className={commonStroke} />
            <circle cx="20" cy="50" r="3" className={redDot} />
            <circle cx="80" cy="50" r="3" className={redDot} />
            <circle cx="50" cy="20" r="3" className={redDot} />
            <circle cx="50" cy="80" r="3" className={redDot} />
          </svg>
        );
      
      // --- LINES (线) ---
      case 'polygon-lines': // 多边形
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <polygon points="20,30 80,30 90,60 70,85 30,85 10,60" className={commonStroke} />
            <line x1="20" y1="30" x2="70" y2="85" className={commonStroke} />
          </svg>
        );
      case 'curve-lines': // 曲线
        return (
          <svg viewBox="0 0 100 100" className={className}>
             <path d="M10,50 Q30,10 50,50 T90,50" className={commonStroke} />
             <ellipse cx="50" cy="50" rx="30" ry="20" className={commonStroke} />
          </svg>
        );
      case 'parallel': // 平行线
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <path d="M15,35 L65,35 M25,55 L75,55 M35,75 L85,75" className={commonStroke} />
            <path d="M70,25 L85,80" className={commonStroke} />
          </svg>
        );
      case 'snake': // 贪吃蛇
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <path d="M20,20 H80 V40 H20 V60 H80 V80 H20" className={commonStroke} />
            <circle cx="20" cy="80" r="3" className="fill-indigo-500 stroke-none"/>
          </svg>
        );

      // --- FACES (面) ---
      case 'faces-divided': // 图形被分割
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="50" r="38" className={commonStroke} />
            <line x1="50" y1="12" x2="50" y2="88" className={commonStroke} />
            <line x1="12" y1="50" x2="88" y2="50" className={commonStroke} />
            <text x="30" y="40" className="text-[10px] fill-slate-400 font-sans">1</text>
            <text x="70" y="40" className="text-[10px] fill-slate-400 font-sans">2</text>
            <text x="30" y="70" className="text-[10px] fill-slate-400 font-sans">3</text>
            <text x="70" y="70" className="text-[10px] fill-slate-400 font-sans">4</text>
          </svg>
        );
      case 'faces-enclosed': // 白色窟窿
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <path d="M15,20 L45,20 L45,50 L15,50 Z" className={commonStroke} />
            <path d="M55,30 L85,30 L70,70 Z" className={commonStroke} />
            <circle cx="40" cy="75" r="15" className={commonStroke} />
          </svg>
        );
      case 'max-face-feature': // 最大面
        return (
           <svg viewBox="0 0 100 100" className={className}>
             <rect x="15" y="15" width="70" height="70" className={commonStroke} />
             <line x1="15" y1="15" x2="50" y2="50" className={commonStroke} />
             <line x1="85" y1="15" x2="50" y2="50" className={commonStroke} />
             {/* The large bottom triangle is the "max face" */}
             <text x="50" y="70" textAnchor="middle" className="text-[10px] fill-indigo-400 font-sans">Max</text>
           </svg>
        );
      
      // --- STROKES (笔画) ---
      case 'one-stroke-star': // 五角星
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <polygon points="50,10 63,38 95,38 69,58 79,88 50,68 21,88 31,58 5,38 37,38" className={commonStroke} />
          </svg>
        );
      case 'tian': // 田字
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <rect x="20" y="20" width="60" height="60" className={commonStroke} />
            <line x1="50" y1="20" x2="50" y2="80" className={commonStroke} />
            <line x1="20" y1="50" x2="80" y2="50" className={commonStroke} />
          </svg>
        );
      case 'ri': // 日字
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <rect x="25" y="15" width="50" height="70" className={commonStroke} />
            <line x1="25" y1="50" x2="75" y2="50" className={commonStroke} />
          </svg>
        );
      
      // --- ANGLES (角) ---
      case 'right-angle': // 直角
        return (
          <svg viewBox="0 0 100 100" className={className}>
             <line x1="20" y1="80" x2="80" y2="80" className={commonStroke} />
             <line x1="50" y1="20" x2="50" y2="80" className={commonStroke} />
             {/* Right angle marker */}
             <polyline points="50,70 60,70 60,80" className={commonStroke} /> 
          </svg>
        );
      case 'acute-angle': // 锐角
        return (
           <svg viewBox="0 0 100 100" className={className}>
              <polygon points="20,80 50,20 80,80" className={commonStroke} />
              <line x1="20" y1="80" x2="80" y2="50" className={commonStroke} />
           </svg>
        );

       // --- ELEMENTS (素) ---
       case 'elements-distinct': // 独立小图形
        return (
          <svg viewBox="0 0 100 100" className={className}>
             <circle cx="25" cy="25" r="10" className={commonStroke} />
             <rect x="55" y="15" width="20" height="20" className={commonStroke} />
             <polygon points="85,45 95,65 75,65" className={commonStroke} />
             <path d="M25,65 L45,85" className={commonStroke} />
          </svg>
        );
       case 'multi-part': // 部分数
        return (
           <svg viewBox="0 0 100 100" className={className}>
              <circle cx="30" cy="30" r="15" className={commonStroke} />
              <rect x="60" y="60" width="25" height="25" className={commonStroke} />
              <line x1="70" y1="20" x2="20" y2="70" className={commonStroke} />
           </svg>
        );

       // --- POSITION (位置) ---
       case 'pos-trans': // 平移
         return (
            <svg viewBox="0 0 100 100" className={className}>
               <rect x="20" y="30" width="20" height="20" className={fillBlack} />
               <rect x="60" y="30" width="20" height="20" className="fill-slate-300 stroke-none" />
               <path d="M42,40 L58,40" className="stroke-indigo-500 stroke-2" markerEnd="url(#arrow)" />
               <defs>
                 <marker id="arrow" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
                   <path d="M0,0 L0,6 L6,3 z" className="fill-indigo-500" />
                 </marker>
               </defs>
            </svg>
         );
        case 'pos-rot': // 旋转
          return (
             <svg viewBox="0 0 100 100" className={className}>
                <path d="M50,20 L50,50 L80,50" className={commonStroke} />
                <path d="M60,30 A 20 20 0 0 1 70 40" className="stroke-indigo-500 stroke-2" markerEnd="url(#arrow)" />
             </svg>
          );
        case 'pos-connect': // 连接性 (点连接/线连接)
           return (
              <svg viewBox="0 0 100 100" className={className}>
                 <rect x="20" y="40" width="30" height="30" className={commonStroke} />
                 <rect x="50" y="20" width="30" height="30" className={commonStroke} />
                 <circle cx="50" cy="50" r="3" className={redDot} /> {/* Connection point */}
              </svg>
           );
        case 'pos-struct': // 结构 (相离/相交)
           return (
              <svg viewBox="0 0 100 100" className={className}>
                 <circle cx="35" cy="50" r="20" className={commonStroke} />
                 <circle cx="65" cy="50" r="20" className={commonStroke} />
              </svg>
           );

       // --- CLASSIC (经典 Top 100) ---
       case 'classic-sym-overall': // Classic 1: Overall Symmetry
         return (
            <svg viewBox="0 0 100 100" className={className}>
               <path d="M20,30 L40,50 L20,70" className={commonStroke} />
               <path d="M80,30 L60,50 L80,70" className={commonStroke} />
               <line x1="50" y1="20" x2="50" y2="80" className={dashedStroke}/>
            </svg>
         );
       case 'classic-sym-partial': // Classic 2: Partial Symmetry
         return (
            <svg viewBox="0 0 100 100" className={className}>
               <path d="M20,50 L40,30 L60,50 L40,70 Z" className={commonStroke} />
               <path d="M60,50 L80,30 L80,70 Z" className={commonStroke} />
               <line x1="40" y1="20" x2="40" y2="80" className={dashedStroke}/>
            </svg>
         );
        case 'classic-sym-shadow': // Classic 3: Shadow Symmetry
          return (
             <svg viewBox="0 0 100 100" className={className}>
                <rect x="30" y="30" width="40" height="40" className={commonStroke} />
                <polygon points="30,30 70,70 30,70" className={fillBlack} />
             </svg>
          );
       case 'classic-protrusion-cross': // Classic 6: Protrusion
         return (
            <svg viewBox="0 0 100 100" className={className}>
               <rect x="30" y="30" width="40" height="40" className={commonStroke} />
               <line x1="50" y1="30" x2="50" y2="10" className={commonStroke} />
               <line x1="30" y1="50" x2="10" y2="50" className={commonStroke} />
               <line x1="70" y1="50" x2="90" y2="50" className={commonStroke} />
               <line x1="50" y1="70" x2="50" y2="90" className={commonStroke} />
            </svg>
         );
       case 'classic-protrusion-curve': // Classic 7: Curve Protrusion
          return (
             <svg viewBox="0 0 100 100" className={className}>
                <circle cx="50" cy="50" r="30" className={commonStroke} />
                <line x1="50" y1="20" x2="50" y2="5" className={commonStroke} />
             </svg>
          );
       case 'classic-protrusion-through': // Classic 8: Through Protrusion
          return (
             <svg viewBox="0 0 100 100" className={className}>
                <circle cx="50" cy="50" r="30" className={commonStroke} />
                <line x1="20" y1="50" x2="80" y2="50" className={commonStroke} />
             </svg>
          );
       case 'classic-intersecting-circles': // Classic 16: Intersecting circles
         return (
             <svg viewBox="0 0 100 100" className={className}>
                <circle cx="40" cy="50" r="25" className={commonStroke} />
                <circle cx="60" cy="50" r="25" className={commonStroke} />
             </svg>
         );
       case 'classic-grid-4': // Classic 26: 4-Grid
          return (
             <svg viewBox="0 0 100 100" className={className}>
                <rect x="20" y="20" width="60" height="60" className={commonStroke} />
                <line x1="50" y1="20" x2="50" y2="80" className={commonStroke} />
                <line x1="20" y1="50" x2="80" y2="50" className={commonStroke} />
                <rect x="25" y="25" width="20" height="20" className={fillBlack} />
             </svg>
          );
        case 'classic-grid-9': // Classic 27: 9-Grid
           return (
               <svg viewBox="0 0 100 100" className={className}>
                  <rect x="20" y="20" width="60" height="60" className={commonStroke} />
                  <path d="M40,20 L40,80 M60,20 L60,80 M20,40 L80,40 M20,60 L80,60" className={commonStroke} />
                  <rect x="40" y="40" width="20" height="20" className={fillBlack} />
               </svg>
           );
        case 'classic-grid-target': // Classic 30: Target
           return (
              <svg viewBox="0 0 100 100" className={className}>
                 <circle cx="50" cy="50" r="35" className={commonStroke} />
                 <line x1="50" y1="15" x2="50" y2="85" className={commonStroke} />
                 <line x1="15" y1="50" x2="85" y2="50" className={commonStroke} />
                 <path d="M50,50 L75,25" className={commonStroke} />
                 <path d="M50,50 L25,75" className={commonStroke} />
              </svg>
           );
        case 'classic-bw-grid': // Classic 41: BW Grid
           return (
               <svg viewBox="0 0 100 100" className={className}>
                  <rect x="20" y="20" width="60" height="60" className={commonStroke} />
                  <path d="M40,20 L40,80 M60,20 L60,80 M20,40 L80,40 M20,60 L80,60" className={commonStroke} />
                  <rect x="20" y="20" width="20" height="20" className={fillBlack} />
                  <rect x="40" y="40" width="20" height="20" className={fillBlack} />
                  <rect x="60" y="60" width="20" height="20" className={fillBlack} />
               </svg>
           );
        case 'classic-char-cn': // Classic 51: Chinese Char
           return (
              <svg viewBox="0 0 100 100" className={className}>
                 <text x="50" y="70" textAnchor="middle" fontSize="50" fontWeight="bold" className="fill-slate-800">中</text>
              </svg>
           );
        case 'classic-char-en': // Classic 52: English Char
           return (
              <svg viewBox="0 0 100 100" className={className}>
                 <text x="50" y="70" textAnchor="middle" fontSize="60" fontWeight="bold" className="fill-slate-800">B</text>
              </svg>
           );
        case 'classic-fix-double-circle': // Classic 71: Double Circle
           return (
              <svg viewBox="0 0 100 100" className={className}>
                 <circle cx="35" cy="50" r="25" className={commonStroke} />
                 <circle cx="65" cy="50" r="25" className={commonStroke} />
              </svg>
           );
        case 'classic-fix-tian': // Classic 73: Tian
          return (
             <svg viewBox="0 0 100 100" className={className}>
                <rect x="20" y="20" width="60" height="60" rx="2" className={commonStroke} />
                <line x1="50" y1="20" x2="50" y2="80" className={commonStroke} />
                <line x1="20" y1="50" x2="80" y2="50" className={commonStroke} />
             </svg>
          );
        case 'classic-fix-star': // Classic 82: Star
           return (
             <svg viewBox="0 0 100 100" className={className}>
               <polygon points="50,10 63,38 95,38 69,58 79,88 50,68 21,88 31,58 5,38 37,38" className={commonStroke} />
             </svg>
           );
        case 'classic-spiral': // Classic 59/60 Spiral
           return (
             <svg viewBox="0 0 100 100" className={className}>
                <path d="M50,50 m-5,0 a 5,5 0 1,0 10,0 a 10,10 0 1,0 -20,0 a 15,15 0 1,0 30,0 a 20,20 0 1,0 -40,0" className={commonStroke} />
             </svg>
           );
        case 'classic-overlay': // Classic 49/50 Overlay
           return (
             <svg viewBox="0 0 100 100" className={className}>
                <rect x="30" y="30" width="40" height="40" className={commonStroke} />
                <circle cx="65" cy="65" r="20" className="stroke-indigo-500 stroke-2 fill-indigo-100 mix-blend-multiply" />
             </svg>
           );
        case 'classic-concentric': // Classic 96 Concentric
           return (
             <svg viewBox="0 0 100 100" className={className}>
                <circle cx="50" cy="50" r="35" className={commonStroke} />
                <circle cx="50" cy="50" r="20" className={commonStroke} />
                <circle cx="50" cy="50" r="8" className={commonStroke} />
             </svg>
           );
        case 'classic-fix-sun': // Classic 97 Sun (日)
           return (
             <svg viewBox="0 0 100 100" className={className}>
                <rect x="30" y="20" width="40" height="60" className={commonStroke} />
                <line x1="30" y1="50" x2="70" y2="50" className={commonStroke} />
             </svg>
           );
        case 'classic-fix-well': // Classic 83 Well (井)
           return (
             <svg viewBox="0 0 100 100" className={className}>
                <line x1="35" y1="20" x2="35" y2="80" className={commonStroke} />
                <line x1="65" y1="20" x2="65" y2="80" className={commonStroke} />
                <line x1="20" y1="35" x2="80" y2="35" className={commonStroke} />
                <line x1="20" y1="65" x2="80" y2="65" className={commonStroke} />
             </svg>
           );
        case 'classic-arrow': // Classic 85 Arrow
            return (
                <svg viewBox="0 0 100 100" className={className}>
                    <line x1="20" y1="50" x2="80" y2="50" className={commonStroke} />
                    <polyline points="60,30 80,50 60,70" className={commonStroke} />
                </svg>
            );
        case 'classic-triangle-mult': // Classic Triangle
            return (
                <svg viewBox="0 0 100 100" className={className}>
                    <polygon points="50,20 20,80 80,80" className={commonStroke} />
                    <line x1="50" y1="20" x2="50" y2="80" className={commonStroke} />
                </svg>
            );
        case 'classic-cube': // Classic 99 Cube
            return (
                <svg viewBox="0 0 100 100" className={className}>
                 <path d="M25,35 L55,35 L75,15 L45,15 Z" className={commonStroke} />
                 <path d="M25,35 L25,75 L55,75 L55,35 Z" className={commonStroke} />
                 <path d="M55,75 L75,55 L75,15 L55,35 Z" className={commonStroke} />
              </svg>
            );

      default:
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <rect x="10" y="10" width="80" height="80" rx="10" className="stroke-slate-300 fill-none stroke-2 dashed" />
            <text x="50" y="55" textAnchor="middle" className="text-slate-400 text-xs">IMG</text>
          </svg>
        );
    }
  };

  return (
    <div className={`bg-white rounded-lg p-2 shadow-sm border border-slate-100 flex items-center justify-center ${className}`}>
      {renderShape()}
    </div>
  );
};