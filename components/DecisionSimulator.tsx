import React, { useState } from 'react';
import { analyzeSituation } from '../services/geminiService';

const DecisionSimulator: React.FC = () => {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setAnalysis('');
    try {
      const result = await analyzeSituation(input);
      setAnalysis(result);
    } catch (e) {
      setAnalysis('Error al conectar con la sabiduría divina (API Error).');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#1D1B20] rounded-[24px] p-6 md:p-8 shadow-sm border border-[#49454F] md:max-w-2xl mx-auto">
      <div className="text-center mb-8">
         <div className="w-12 h-12 bg-[#4A4458] rounded-full flex items-center justify-center mx-auto mb-4 text-[#E6E1E5]">
            <span className="material-symbols-rounded text-2xl">psychology_alt</span>
         </div>
         <h2 className="text-2xl md:text-3xl font-serif text-[#E6E1E5] mb-2">Oráculo Cabalístico</h2>
         <p className="text-[#CAC4D0] text-sm md:text-base max-w-md mx-auto">
           Describe tu situación o dilema. La IA analizará los desequilibrios en el Árbol y sugerirá un camino de armonía.
         </p>
      </div>

      <div className="relative mb-6">
        <textarea
          className="peer w-full h-40 bg-[#2B2930] border-b-2 border-[#938F99] rounded-t-xl p-4 text-[#E6E1E5] focus:border-[#FFDDA2] focus:outline-none transition-colors resize-none placeholder-transparent"
          placeholder="Describe tu situación..."
          id="situationInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <label 
          htmlFor="situationInput"
          className="absolute left-4 top-4 text-[#CAC4D0] text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#FFDDA2] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#FFDDA2]"
        >
          Describe tu situación aquí...
        </label>
      </div>

      <button
        onClick={handleAnalyze}
        disabled={loading || !input}
        className={`w-full py-3.5 rounded-full font-bold tracking-wide transition-all flex items-center justify-center gap-2 ${
          loading || !input
            ? 'bg-[#1D1B20] text-[#49454F] border border-[#49454F] cursor-not-allowed'
            : 'bg-[#FFDDA2] text-[#251A00] hover:shadow-lg hover:bg-[#FFDDA2]/90'
        }`}
      >
        {loading ? (
          <>
            <span className="material-symbols-rounded animate-spin">progress_activity</span>
            Consultando...
          </>
        ) : (
          <>
            <span className="material-symbols-rounded">auto_awesome</span>
            Recibir Guía
          </>
        )}
      </button>

      {analysis && (
        <div className="mt-8 animate-fade-in bg-[#2B2930] p-6 rounded-2xl border border-[#49454F]">
          <h3 className="text-lg font-serif text-[#FFDDA2] mb-4 flex items-center gap-2 border-b border-[#49454F] pb-2">
             <span className="material-symbols-rounded">menu_book</span> Lectura del Árbol
          </h3>
          <div className="prose prose-invert prose-p:text-[#E6E1E5] prose-strong:text-[#FFDDA2] prose-sm max-w-none leading-relaxed">
             {/* Simple markdown rendering */}
             {analysis.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
             ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DecisionSimulator;