import React, { useState, useEffect } from 'react';
import { SEFIROT } from '../data';
import { getDailyGuidance } from '../services/geminiService';

const DailyPractice: React.FC = () => {
  const [dailySefira, setDailySefira] = useState(SEFIROT[0]);
  const [guidance, setGuidance] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Determine Sefira based on day of week or random seed
    const day = new Date().getDay(); 
    const map: Record<number, string> = { 0: 'tiferet', 1: 'yesod', 2: 'gevurah', 3: 'hod', 4: 'chesed', 5: 'netzach', 6: 'malkuth' };
    const sefiraId = map[day] || 'malkuth';
    const sefira = SEFIROT.find(s => s.id === sefiraId) || SEFIROT[9];
    setDailySefira(sefira);

    const fetchGuidance = async () => {
        setLoading(true);
        const g = await getDailyGuidance(sefira.name);
        setGuidance(g);
        setLoading(false);
    }
    fetchGuidance();
  }, []);

  return (
    <div className="w-full bg-[#1D1B20] rounded-[24px] overflow-hidden shadow-sm border border-[#49454F] max-w-full md:max-w-md mx-auto mb-20 md:mb-0 flex flex-col">
      {/* Hero Image / Color bar */}
      <div className={`h-24 md:h-28 w-full relative ${dailySefira.colors.Yetzirah.replace('text-', 'bg-')} opacity-80 shrink-0`}>
         <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B20] to-transparent"></div>
         <div className="absolute bottom-2 left-6">
            <span className="text-xs font-medium uppercase tracking-widest text-[#E6E1E5] bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
              {new Date().toLocaleDateString('es-ES', { weekday: 'long' })}
            </span>
         </div>
      </div>

      <div className="p-5 md:p-6 pt-2 flex-grow">
        <div className="flex justify-between items-end mb-6 relative">
            <div>
              <div className="text-5xl md:text-6xl hebrew text-[#E6E1E5] opacity-20 absolute top-0 right-0 pointer-events-none select-none">{dailySefira.hebrewName}</div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#E6E1E5]">{dailySefira.name}</h2>
              <p className="text-[#CAC4D0] text-sm md:text-base mt-1">{dailySefira.meaning}</p>
            </div>
        </div>

        <div className="space-y-4">
            <div className="bg-[#2B2930] p-4 md:p-5 rounded-2xl">
                <h4 className="text-[#FFDDA2] text-xs font-bold uppercase mb-2 flex items-center gap-2">
                   <span className="material-symbols-rounded text-sm">quiz</span> Pregunta Clave
                </h4>
                <p className="text-[#E6E1E5] text-base md:text-lg font-medium leading-relaxed">¿{dailySefira.question}</p>
            </div>

            <div className="bg-[#2B2930] p-4 md:p-5 rounded-2xl">
                 <h4 className="text-[#D0BCFF] text-xs font-bold uppercase mb-2 flex items-center gap-2">
                    <span className="material-symbols-rounded text-sm">smart_toy</span> Consejo de la IA
                 </h4>
                 {loading ? <p className="text-[#938F99] animate-pulse text-sm">Sintonizando...</p> : <p className="text-[#E6E1E5] text-sm italic leading-relaxed">"{guidance}"</p>}
            </div>

            <div className="mt-6">
                <h4 className="text-xs md:text-sm font-bold text-[#CAC4D0] mb-3 uppercase tracking-wider">Práctica Sugerida</h4>
                <ul className="space-y-3">
                    {dailySefira.practices.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#E6E1E5]">
                        <span className="material-symbols-rounded text-[#FFDDA2] text-lg shrink-0">check_circle</span>
                        <span className="mt-0.5 leading-relaxed">{p}</span>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
      
      <div className="p-5 md:p-6 pt-0 mt-auto">
        <button className="w-full py-4 md:py-3.5 bg-[#FFDDA2] hover:bg-[#FFDDA2]/90 text-[#251A00] rounded-full text-sm font-bold tracking-wide transition-colors flex items-center justify-center gap-2 touch-manipulation active:scale-95 transition-transform">
           <span className="material-symbols-rounded">done_all</span>
           COMPLETAR PRÁCTICA
        </button>
      </div>
    </div>
  );
};

export default DailyPractice;