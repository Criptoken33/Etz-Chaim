import React from 'react';
import { SEFIROT, PATHS } from '../data';
import { Sefira, Path, World } from '../types';

interface TreeVisualizerProps {
  onSelectSefira: (id: string) => void;
  onSelectPath: (id: string) => void;
  activeSefira: string | null;
  world: World;
}

const TreeVisualizer: React.FC<TreeVisualizerProps> = ({ onSelectSefira, onSelectPath, activeSefira, world }) => {
  // SVG Viewbox logic
  const width = 400;
  const height = 600;
  
  // Helper to get coordinates
  const getCoords = (id: string) => {
    const s = SEFIROT.find(sef => sef.id === id);
    if (!s) return { x: 0, y: 0 };
    return { 
      x: (s.position.x / 100) * width, 
      y: (s.position.y / 100) * height 
    };
  };

  return (
    <div className="w-full h-full flex justify-center items-center overflow-visible p-2 md:p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-h-[80vh] max-w-lg md:max-w-2xl drop-shadow-2xl touch-manipulation">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Paths */}
        {PATHS.map((path) => {
          const start = getCoords(path.sourceId);
          const end = getCoords(path.targetId);
          return (
            <g key={path.id} 
               onClick={() => onSelectPath(path.id)} 
               className="cursor-pointer group hover:opacity-100 opacity-80 transition-opacity duration-300">
              
              {/* Invisible wide stroke for better touch target */}
              <line 
                x1={start.x} y1={start.y} 
                x2={end.x} y2={end.y} 
                stroke="transparent"
                strokeWidth="24"
                className="cursor-pointer"
              />
              
              <line 
                x1={start.x} y1={start.y} 
                x2={end.x} y2={end.y} 
                stroke={path.color}
                strokeWidth="4"
                strokeOpacity="0.8"
                className="transition-all duration-300 group-hover:stroke-width-6 group-hover:stroke-opacity-100"
              />
              {/* Path Letter Badge */}
              <circle cx={(start.x + end.x)/2} cy={(start.y + end.y)/2} r="10" fill="#0f172a" stroke={path.color} strokeWidth="1" />
              <text 
                x={(start.x + end.x)/2} 
                y={(start.y + end.y)/2} 
                dy="4" 
                textAnchor="middle" 
                fill="#e2e8f0" 
                className="text-[10px] hebrew font-bold select-none pointer-events-none"
              >
                {path.letter}
              </text>
            </g>
          );
        })}

        {/* Sefirot */}
        {SEFIROT.map((sefira) => {
          const { x, y } = getCoords(sefira.id);
          const isActive = activeSefira === sefira.id;
          const currentColor = sefira.colors[world];
          
          return (
            <g 
              key={sefira.id} 
              onClick={() => onSelectSefira(sefira.id)} 
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              {/* Invisible large circle for better touch target */}
              <circle cx={x} cy={y} r="45" fill="transparent" />

              {/* Outer Glow for Active */}
              {isActive && (
                <circle cx={x} cy={y} r="35" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="2">
                   <animate attributeName="r" from="30" to="40" dur="1.5s" repeatCount="indefinite" />
                   <animate attributeName="stroke-opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                </circle>
              )}

              {/* Main Sphere */}
              <circle 
                cx={x} cy={y} r="28" 
                className={`${currentColor.includes('text-white') ? 'fill-white' : 'fill-current'} ${currentColor.replace('text-', 'text-')}`} 
                fillOpacity="0.9"
                stroke="#e2e8f0"
                strokeWidth="2"
                filter={isActive || world === 'Atziluth' ? "url(#glow)" : ""}
              />
              
              {/* Hebrew Name */}
              <text 
                x={x} y={y} dy="-2" 
                textAnchor="middle" 
                className={`hebrew text-sm font-bold select-none pointer-events-none ${currentColor.includes('text-white') ? 'fill-black' : 'fill-white'}`}
              >
                {sefira.hebrewName}
              </text>

              {/* Transliteration */}
              <text 
                x={x} y={y} dy="10" 
                textAnchor="middle" 
                className={`text-[9px] font-sans font-semibold tracking-wide select-none pointer-events-none uppercase ${currentColor.includes('text-white') ? 'fill-slate-800' : 'fill-white/90'}`}
              >
                {sefira.transliteration}
              </text>

              {/* Number Badge */}
              <circle cx={x} cy={y - 20} r="8" fill="#0f172a" stroke="none" />
              <text x={x} y={y - 17} textAnchor="middle" fill="white" fontSize="9" className="select-none font-bold">
                {sefira.number}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default TreeVisualizer;