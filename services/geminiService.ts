import { GoogleGenAI } from "@google/genai";

export const analyzeSituation = async (situation: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) throw new Error("API Key not found");

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Actúa como un sabio maestro de la Cábala. Analiza la siguiente situación descrita por un estudiante:
    "${situation}"

    1. Identifica qué Sefirot están en desequilibrio (exceso o defecto).
    2. Identifica qué Sefirot pueden ayudar a armonizar la situación.
    3. Sugiere una pregunta clave de reflexión basada en la Sefirá de equilibrio (usualmente Tiféret, o la complementaria).
    4. Propón un breve ejercicio práctico o visualización.
    
    Mantén el tono compasivo, profundo pero práctico. Usa formato Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "No se pudo generar una respuesta.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hubo un error al consultar al oráculo. Por favor intenta de nuevo.";
  }
};

export const getDailyGuidance = async (sefiraName: string): Promise<string> => {
   const apiKey = process.env.API_KEY;
   if (!apiKey) return "Enfócate en tu respiración y busca el equilibrio hoy.";

   const ai = new GoogleGenAI({ apiKey });
   const prompt = `Genera un breve consejo espiritual y práctico para el día de hoy, enfocado en la energía de la Sefirá: ${sefiraName}. Mantenlo en una frase o dos.`;
   
   try {
     const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
     });
     return response.text || "Medita en la luz hoy.";
   } catch (e) {
     return "Medita en la luz hoy.";
   }
}
