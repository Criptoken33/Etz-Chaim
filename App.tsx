import React, { useState } from 'react';
import TreeVisualizer from './components/TreeVisualizer';
import DecisionSimulator from './components/DecisionSimulator';
import DailyPractice from './components/DailyPractice';
import { SEFIROT, PATHS } from './data';
import { ViewMode, World } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('tree');
  const [selectedSefiraId, setSelectedSefiraId] = useState<string | null>(null);
  const [selectedPathId, setSelectedPathId] = useState<string | null>(null);
  const [world, setWorld] = useState<World>('Yetzirah');

  const activeSefira = selectedSefiraId ? SEFIROT.find(s => s.id === selectedSefiraId) : null;
  const activePath = selectedPathId ? PATHS.find(p => p.id === selectedPathId) : null;

  const closeModal = () => {
    setSelectedSefiraId(null);
    setSelectedPathId(null);
  };

  const worlds: { id: World; label: string; desc: string }[] = [
    { id: 'Atziluth', label: 'Atziluth', desc: 'Emanación' },
    { id: 'Briah', label: 'Briah', desc: 'Creación' },
    { id: 'Yetzirah', label: 'Yetzirah', desc: 'Formación' },
    { id: 'Assiah', label: 'Assiah', desc: 'Acción' },
  ];

  const views: { id: ViewMode; label: string; icon: string }[] = [
    { id: 'tree', label: 'Árbol', icon: 'account_tree' },
    { id: 'practice', label: 'Práctica', icon: 'self_improvement' },
    { id: 'simulator', label: 'Oráculo', icon: 'psychology_alt' },
  ];

  return (
    // Use 100dvh for mobile browsers to handle address bar resizing correctly
    <div className="h-screen w-full bg-[#141218] text-[#E6E1E5] flex flex-col md:flex-row font-sans overflow-hidden supports-[height:100dvh]:h-[100dvh]">
      
      {/* MD3 Background Ambient Effect - Responsive positioning */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden transition-colors duration-1000 z-0">
          <div className={`absolute top-[-10%] left-[-10%] md:top-[-20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] transition-all duration-1000 opacity-40 ${
            world === 'Atziluth' ? 'bg-white' :
            world === 'Briah' ? 'bg-sky-400' :
            world === 'Assiah' ? 'bg-stone-600' :
            'bg-indigo-600'
          }`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] md:bottom-[-20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] transition-all duration-1000 opacity-30 ${
            world === 'Atziluth' ? 'bg-amber-100' :
            world === 'Briah' ? 'bg-cyan-400' :
            world === 'Assiah' ? 'bg-amber-800' :
            'bg-amber-700'
          }`}></div>
      </div>

      {/* Desktop Navigation Rail (Visible on md+) */}
      <nav className="hidden md:flex flex-col w-24 bg-[#1D1B20] h-full items-center py-8 z-20 border-r border-[#49454F] shrink-0">
         <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-[#141218] font-bold font-serif text-2xl mb-8 shadow-lg">ע</div>
         <div className="flex flex-col gap-4 w-full px-2">
            {views.map((v) => (
              <button
                key={v.id}
                onClick={() => setCurrentView(v.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all group ${
                  currentView === v.id ? 'text-[#1D1B20]' : 'text-[#CAC4D0] hover:bg-[#49454F]/20'
                }`}
              >
                <div className={`w-14 h-8 rounded-full flex items-center justify-center transition-all ${
                  currentView === v.id ? 'bg-[#FFDDA2]' : 'group-hover:bg-[#49454F]/20'
                }`}>
                  <span className={`material-symbols-rounded ${currentView === v.id ? 'filled' : ''}`}>{v.icon}</span>
                </div>
                <span className="text-[11px] font-medium tracking-wide">{v.label}</span>
              </button>
            ))}
         </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow relative flex flex-col h-full overflow-hidden z-10 w-full">
        
        {/* Top App Bar (Mobile & Desktop) */}
        <header className="h-16 md:h-20 flex items-center justify-between px-4 md:px-8 bg-[#141218]/80 backdrop-blur-md sticky top-0 z-30 border-b border-[#49454F]/30 md:border-none transition-all shrink-0">
           {/* Logo Area: Hidden on mobile when Tree view is active to give space to Selector */}
           <div className={`flex items-center gap-3 ${currentView === 'tree' ? 'hidden md:flex' : 'flex'} min-w-0`}>
              <div className="md:hidden w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-[#141218] font-bold font-serif shrink-0">ע</div>
              <h1 className="text-xl md:text-2xl font-serif text-[#E6E1E5] truncate">
                Etz Chaim 
                {currentView !== 'tree' && <span className="text-[#CAC4D0] text-lg font-sans ml-2 opacity-70 hidden sm:inline">| {views.find(v => v.id === currentView)?.label}</span>}
              </h1>
           </div>

           {/* Mobile Compact Logo (Only when Tree view is active) */}
           {currentView === 'tree' && (
             <div className="md:hidden flex items-center mr-2 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-[#2B2930] border border-[#49454F] flex items-center justify-center text-amber-500 font-bold font-serif shadow-sm">ע</div>
             </div>
           )}

           {/* World Selector (Segmented Button Style - Professional & Scroll-free) */}
           {currentView === 'tree' && (
             <div className="flex bg-[#1D1B20] rounded-full p-1 border border-[#49454F] shadow-inner items-center ml-auto md:ml-0 overflow-hidden max-w-full">
                {worlds.map((w) => {
                  const isActive = world === w.id;
                  return (
                    <button
                      key={w.id}
                      onClick={() => setWorld(w.id)}
                      className={`
                        relative px-2 md:px-5 py-1.5 md:py-1.5 text-[10px] md:text-xs font-medium rounded-full transition-all duration-300 flex-1 md:flex-none text-center whitespace-nowrap
                        ${isActive 
                          ? 'bg-[#4B4336] text-[#FFDDA2] shadow-md ring-1 ring-[#FFDDA2]/20' 
                          : 'text-[#938F99] hover:text-[#E6E1E5] hover:bg-[#E6E1E5]/5'
                        }
                      `}
                    >
                      {isActive && (
                        <span className="material-symbols-rounded text-[10px] md:text-[12px] align-middle mr-1 animate-fade-in hidden sm:inline-block">
                          public
                        </span>
                      )}
                      {w.label}
                    </button>
                  );
                })}
             </div>
           )}
        </header>

        {/* Content Scrollable Area */}
        <div className="flex-grow overflow-y-auto overflow-x-hidden p-4 md:p-6 flex justify-center pb-24 md:pb-6 w-full">
          <div className="w-full max-w-lg md:max-w-4xl animate-fade-in flex flex-col items-center">
            {currentView === 'tree' && (
              <TreeVisualizer 
                onSelectSefira={setSelectedSefiraId} 
                onSelectPath={setSelectedPathId} 
                activeSefira={selectedSefiraId}
                world={world}
              />
            )}
            {currentView === 'simulator' && <DecisionSimulator />}
            {currentView === 'practice' && <DailyPractice />}
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation Bar (Fixed) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1D1B20] border-t border-[#49454F] z-50 pb-[env(safe-area-inset-bottom)] bg-opacity-95 backdrop-blur-md">
        <div className="flex justify-around items-center h-16 sm:h-20">
          {views.map((v) => (
             <button
               key={v.id}
               onClick={() => setCurrentView(v.id)}
               className={`flex flex-col items-center gap-1 w-full py-1 sm:py-2 group ${
                 currentView === v.id ? 'text-[#E6E1E5]' : 'text-[#CAC4D0]'
               }`}
             >
               <div className={`px-4 sm:px-5 py-0.5 sm:py-1 rounded-full transition-all ${
                  currentView === v.id ? 'bg-[#4A4458]' : 'bg-transparent'
               }`}>
                 <span className={`material-symbols-rounded text-xl sm:text-2xl ${currentView === v.id ? 'filled' : ''}`}>{v.icon}</span>
               </div>
               <span className={`text-[10px] sm:text-xs font-medium ${currentView === v.id ? 'font-bold' : ''}`}>{v.label}</span>
             </button>
          ))}
        </div>
      </nav>

      {/* Modals for Details (Using MD3 Dialog/Full-screen styles) */}
      {(activeSefira || activePath) && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div 
            className="bg-[#1D1B20] w-full h-full md:h-auto md:w-full md:max-w-lg md:max-h-[85vh] md:rounded-[28px] shadow-2xl relative flex flex-col overflow-hidden animate-slide-up md:animate-zoom-in border border-[#49454F]/50" 
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button - Responsive Position */}
            <button onClick={closeModal} className="absolute top-4 right-4 text-[#CAC4D0] hover:text-[#E6E1E5] z-30 bg-black/40 rounded-full p-2 backdrop-blur-md hover:bg-black/60 transition-colors">
              <span className="material-symbols-rounded">close</span>
            </button>
            
            {activeSefira && (
              <>
                {/* Header with Color */}
                <div className={`p-6 md:p-8 pb-6 relative overflow-hidden shrink-0`}>
                   <div className={`absolute inset-0 opacity-20 ${activeSefira.colors[world].replace('text-', 'bg-')}`}></div>
                   <div className="relative z-10 text-center mt-4 md:mt-0">
                      <div className="flex justify-center mb-3">
                         <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#E6E1E5] border border-[#938F99] px-3 py-1 rounded-full bg-[#141218]/50 backdrop-blur-sm">{world}</span>
                      </div>
                      <div className="text-5xl md:text-6xl hebrew mb-2 font-serif opacity-90">{activeSefira.hebrewName}</div>
                      <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#E6E1E5]">{activeSefira.name}</h2>
                      <p className="text-[#CAC4D0] uppercase tracking-widest text-xs mt-2 font-medium">{activeSefira.meaning}</p>
                   </div>
                </div>

                <div className="flex-grow overflow-y-auto p-4 md:p-8 space-y-5 md:space-y-6 scrollbar-hide">
                   {/* Essence */}
                   <section>
                     <p className="text-[#E6E1E5] leading-relaxed text-sm md:text-base italic border-l-4 border-[#FFDDA2] pl-4 py-1">
                       "{activeSefira.description}"
                     </p>
                   </section>

                   {/* Attributes Grid */}
                   <div className="grid grid-cols-2 gap-3 md:gap-4 text-sm">
                      <div className="bg-[#2B2930] p-3 md:p-4 rounded-2xl">
                        <span className="block text-[10px] md:text-xs text-[#CAC4D0] uppercase font-bold mb-1">Virtud</span>
                        <span className="text-emerald-300 font-medium text-sm md:text-base">{activeSefira.virtue}</span>
                      </div>
                      <div className="bg-[#2B2930] p-3 md:p-4 rounded-2xl">
                        <span className="block text-[10px] md:text-xs text-[#CAC4D0] uppercase font-bold mb-1">Vicio</span>
                        <span className="text-rose-300 font-medium text-sm md:text-base">{activeSefira.vice}</span>
                      </div>
                      <div className="bg-[#2B2930] p-3 md:p-4 rounded-2xl">
                        <span className="block text-[10px] md:text-xs text-[#CAC4D0] uppercase font-bold mb-1">Planeta</span>
                        <span className="text-indigo-300 font-medium text-sm md:text-base">{activeSefira.planet}</span>
                      </div>
                      <div className="bg-[#2B2930] p-3 md:p-4 rounded-2xl">
                        <span className="block text-[10px] md:text-xs text-[#CAC4D0] uppercase font-bold mb-1">Pilar</span>
                        <span className="text-amber-300 font-medium text-sm md:text-base">{activeSefira.pillar}</span>
                      </div>
                      <div className="bg-[#2B2930] p-3 md:p-4 rounded-2xl col-span-2 md:col-span-2">
                        <span className="block text-[10px] md:text-xs text-[#CAC4D0] uppercase font-bold mb-1">Arquetipo</span>
                        <span className="text-purple-200 font-medium text-sm md:text-base">{activeSefira.archetype}</span>
                      </div>
                   </div>

                   {/* Practice Section */}
                   <section className="bg-[#2B2930] rounded-[24px] p-4 md:p-6 mb-4">
                     <h3 className="text-base md:text-lg font-serif text-[#FFDDA2] mb-4 flex items-center gap-2">
                        <span className="material-symbols-rounded text-[#FFDDA2]">self_improvement</span>
                        <span>Práctica</span>
                     </h3>
                     <div className="mb-5">
                        <p className="text-[10px] md:text-xs text-[#CAC4D0] uppercase font-bold mb-2">Pregunta Clave</p>
                        <p className="text-[#E6E1E5] font-medium text-base md:text-lg leading-snug">¿{activeSefira.question}</p>
                     </div>
                     <div className="mb-5">
                        <p className="text-[10px] md:text-xs text-[#CAC4D0] uppercase font-bold mb-2">Ejercicios</p>
                        <ul className="list-disc list-inside text-[#E6E1E5] text-xs md:text-sm space-y-2 marker:text-[#FFDDA2]">
                          {activeSefira.practices.map(p => <li key={p}>{p}</li>)}
                        </ul>
                     </div>
                     <div className="bg-[#141218] p-4 rounded-xl text-center border border-[#49454F]">
                        <p className="text-[10px] text-[#938F99] uppercase mb-2 font-bold tracking-widest">Afirmación</p>
                        <p className="text-[#FFDDA2] italic font-serif text-base md:text-lg">"{activeSefira.affirmation}"</p>
                     </div>
                   </section>
                </div>
              </>
            )}

            {activePath && (
              <>
                <div className="p-8 pb-0 text-center border-b border-[#49454F]/50 bg-[#2B2930] pt-16 md:pt-8 shrink-0">
                    <div className="inline-flex bg-[#141218] rounded-full w-20 h-20 items-center justify-center border border-[#49454F] mb-4 shadow-inner">
                        <span className="text-4xl hebrew text-[#E6E1E5]">{activePath.letter}</span>
                    </div>
                    <h2 className="text-3xl font-serif text-[#E6E1E5] mb-1">{activePath.letterName}</h2>
                    <p className="text-[#FFDDA2] text-sm font-medium uppercase tracking-wider mb-6">{activePath.meaning}</p>
                </div>

                <div className="flex-grow overflow-y-auto p-4 md:p-8 space-y-5 scrollbar-hide">
                     <div className="flex justify-between text-xs md:text-sm bg-[#2B2930] p-4 rounded-2xl">
                        <span className="text-[#CAC4D0]">Gematría: <span className="text-[#E6E1E5] font-medium ml-1">{activePath.gematria}</span></span>
                        <span className="text-[#CAC4D0]">Tipo: <span className="text-[#E6E1E5] font-medium ml-1">{activePath.type}</span></span>
                        <span className="text-[#CAC4D0]">Tarot: <span className="text-[#E6E1E5] font-medium ml-1">{activePath.tarotCard}</span></span>
                     </div>
                     
                     <div className="bg-[#1D1B20] p-2 rounded-lg">
                        <h3 className="text-xs md:text-sm font-bold text-[#CAC4D0] uppercase mb-2">Significado</h3>
                        <p className="text-[#E6E1E5] text-sm md:text-base leading-relaxed">{activePath.description}</p>
                     </div>

                     <div className="bg-[#4F378B]/20 border border-[#4F378B] p-5 rounded-2xl mb-4">
                        <h3 className="text-xs md:text-sm font-bold text-[#D0BCFF] uppercase mb-2 flex items-center gap-2">
                          <span className="material-symbols-rounded text-sm">psychology</span> Integración
                        </h3>
                        <p className="text-[#E6E1E5] text-sm md:text-base mb-4">{activePath.practice}</p>
                        
                        {/* New Mystical Phrase Section */}
                        <div className="bg-[#141218] p-4 rounded-xl border border-[#49454F] relative overflow-hidden">
                           <div className="absolute top-0 left-0 w-1 h-full bg-[#FFDDA2]"></div>
                           <p className="text-[#FFDDA2] text-sm italic font-serif leading-relaxed pl-2">
                              "{activePath.mysticalPhrase}"
                           </p>
                        </div>
                     </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;