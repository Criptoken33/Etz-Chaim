import { Sefira, Path } from './types';

export const SEFIROT: Sefira[] = [
  {
    id: 'keter',
    number: 1,
    name: 'Kéter',
    hebrewName: 'כֶּתֶר',
    transliteration: 'Keter',
    meaning: 'Corona',
    description: 'La voluntad pura, la nada infinita, el origen de todo.',
    colors: {
      Atziluth: 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]',
      Briah: 'text-slate-100',
      Yetzirah: 'text-white', // Standard
      Assiah: 'text-slate-400'
    },
    pillar: 'Equilibrio',
    virtue: 'Logro de la culminación de la Gran Obra',
    vice: 'Fatalismo',
    question: '¿Cuál es mi intención más pura y elevada en este momento?',
    planet: 'Neptuno / Primum Mobile',
    bodyPart: 'Sobre la cabeza',
    archetype: 'Adam Kadmon',
    practices: ['Meditación en silencio absoluto', 'Visualización de luz blanca pura', 'Rendición del ego a la voluntad divina'],
    affirmation: 'Soy uno con la Luz Infinita.',
    position: { x: 50, y: 10 }
  },
  {
    id: 'chokmah',
    number: 2,
    name: 'Jojmá',
    hebrewName: 'חָכְמָה',
    transliteration: 'Jojmá',
    meaning: 'Sabiduría',
    description: 'La chispa de inspiración, la fuerza masculina activa, el padre.',
    colors: {
      Atziluth: 'text-blue-50 drop-shadow-[0_0_10px_rgba(200,220,255,0.9)]',
      Briah: 'text-sky-200',
      Yetzirah: 'text-gray-400', // Standard (Grey/Silver)
      Assiah: 'text-slate-600'
    },
    pillar: 'Misericordia',
    virtue: 'Devoción',
    vice: 'Fanatismo',
    question: '¿Qué nueva idea o inspiración estoy recibiendo?',
    planet: 'Urano / Zodíaco',
    bodyPart: 'Hemisferio cerebral derecho',
    archetype: 'Adam',
    practices: ['Lluvia de ideas sin juicio', 'Contemplación del cielo estrellado', 'Estudio de textos sagrados'],
    affirmation: 'Me abro al flujo de la sabiduría divina.',
    position: { x: 85, y: 20 }
  },
  {
    id: 'binah',
    number: 3,
    name: 'Biná',
    hebrewName: 'בִּינָה',
    transliteration: 'Biná',
    meaning: 'Entendimiento',
    description: 'La forma, la estructura, la madre que da nacimiento a la idea.',
    colors: {
      Atziluth: 'text-slate-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]',
      Briah: 'text-gray-300',
      Yetzirah: 'text-slate-800 dark:text-slate-300', // Black/Dark
      Assiah: 'text-zinc-900'
    },
    pillar: 'Rigor',
    virtue: 'Silencio',
    vice: 'Avaricia',
    question: '¿Cómo puedo dar estructura a mis ideas?',
    planet: 'Saturno',
    bodyPart: 'Hemisferio cerebral izquierdo',
    archetype: 'Eva',
    practices: ['Planificación estratégica', 'Meditación en la forma y límites', 'Aceptación de la disciplina'],
    affirmation: 'En el silencio encuentro la comprensión.',
    position: { x: 15, y: 20 }
  },
  {
    id: 'chesed',
    number: 4,
    name: 'Jésed',
    hebrewName: 'חֶסֶד',
    transliteration: 'Jésed',
    meaning: 'Misericordia',
    description: 'Amor expansivo, bondad, abundancia sin límites.',
    colors: {
      Atziluth: 'text-blue-100 drop-shadow-[0_0_10px_rgba(100,150,255,0.8)]',
      Briah: 'text-blue-300',
      Yetzirah: 'text-blue-500', // Blue
      Assiah: 'text-blue-900'
    },
    pillar: 'Misericordia',
    virtue: 'Obediencia (al amor)',
    vice: 'Gula, Tiranía',
    question: '¿Dónde puedo ser más generoso hoy?',
    planet: 'Júpiter',
    bodyPart: 'Brazo derecho',
    archetype: 'Abraham',
    practices: ['Actos de bondad aleatoria', 'Filantropía', 'Perdón radical'],
    affirmation: 'El amor fluye a través de mí incondicionalmente.',
    position: { x: 85, y: 40 }
  },
  {
    id: 'gevurah',
    number: 5,
    name: 'Gevurá',
    hebrewName: 'גְּבוּרָה',
    transliteration: 'Gevurá',
    meaning: 'Fuerza / Severidad',
    description: 'Disciplina, juicio, restricción necesaria, el guerrero.',
    colors: {
      Atziluth: 'text-red-100 drop-shadow-[0_0_10px_rgba(255,100,100,0.8)]',
      Briah: 'text-red-300',
      Yetzirah: 'text-red-600', // Red
      Assiah: 'text-red-950'
    },
    pillar: 'Rigor',
    virtue: 'Energía, Valor',
    vice: 'Crueldad, Destrucción',
    question: '¿Qué necesito eliminar o limitar en mi vida?',
    planet: 'Marte',
    bodyPart: 'Brazo izquierdo',
    archetype: 'Isaac',
    practices: ['Establecer límites claros', 'Disciplina física', 'Discernimiento crítico'],
    affirmation: 'Tengo la fuerza para superar cualquier obstáculo.',
    position: { x: 15, y: 40 }
  },
  {
    id: 'tiferet',
    number: 6,
    name: 'Tiféret',
    hebrewName: 'תִּפְאֶרֶת',
    transliteration: 'Tiféret',
    meaning: 'Belleza',
    description: 'Armonía, equilibrio, el centro del corazón, el Sol.',
    colors: {
      Atziluth: 'text-yellow-100 drop-shadow-[0_0_15px_rgba(255,255,100,0.9)]',
      Briah: 'text-yellow-200',
      Yetzirah: 'text-yellow-400', // Gold/Yellow
      Assiah: 'text-amber-700'
    },
    pillar: 'Equilibrio',
    virtue: 'Devoción a la Gran Obra',
    vice: 'Orgullo',
    question: '¿Cómo puedo equilibrar mi compasión y mi disciplina?',
    planet: 'Sol',
    bodyPart: 'Corazón / Plexo Solar',
    archetype: 'Jacob',
    practices: ['Meditación en el corazón', 'Apreciación de la belleza', 'Liderazgo centrado'],
    affirmation: 'Soy el centro de paz y armonía en mi universo.',
    position: { x: 50, y: 50 }
  },
  {
    id: 'netzach',
    number: 7,
    name: 'Nétzaj',
    hebrewName: 'נֵצַח',
    transliteration: 'Nétzaj',
    meaning: 'Victoria',
    description: 'Persistencia, emociones, instinto, naturaleza, arte.',
    colors: {
      Atziluth: 'text-emerald-100 drop-shadow-[0_0_10px_rgba(100,255,150,0.8)]',
      Briah: 'text-green-300',
      Yetzirah: 'text-green-500', // Green
      Assiah: 'text-green-900'
    },
    pillar: 'Misericordia',
    virtue: 'Altruismo',
    vice: 'Lujuria, Impureza',
    question: '¿Qué pasión me impulsa a seguir adelante?',
    planet: 'Venus',
    bodyPart: 'Pierna derecha',
    archetype: 'Moisés',
    practices: ['Conexión con la naturaleza', 'Expresión artística libre', 'Danza extática'],
    affirmation: 'Sigo mi pasión con perseverancia y alegría.',
    position: { x: 85, y: 70 }
  },
  {
    id: 'hod',
    number: 8,
    name: 'Hod',
    hebrewName: 'הוֹד',
    transliteration: 'Hod',
    meaning: 'Esplendor',
    description: 'Intelecto, comunicación, lógica, magia ritual.',
    colors: {
      Atziluth: 'text-orange-100 drop-shadow-[0_0_10px_rgba(255,200,100,0.8)]',
      Briah: 'text-orange-300',
      Yetzirah: 'text-orange-500', // Orange
      Assiah: 'text-orange-900'
    },
    pillar: 'Rigor',
    virtue: 'Veracidad',
    vice: 'Deshonestidad',
    question: '¿Estoy comunicando mi verdad con claridad?',
    planet: 'Mercurio',
    bodyPart: 'Pierna izquierda',
    archetype: 'Aarón',
    practices: ['Escritura reflexiva', 'Estudio de ciencias', 'Comunicación asertiva'],
    affirmation: 'Mis pensamientos son claros y mis palabras verdaderas.',
    position: { x: 15, y: 70 }
  },
  {
    id: 'yesod',
    number: 9,
    name: 'Yesod',
    hebrewName: 'יְסוֹד',
    transliteration: 'Yesod',
    meaning: 'Fundamento',
    description: 'El subconsciente, los sueños, el espejo astral, la sexualidad.',
    colors: {
      Atziluth: 'text-purple-100 drop-shadow-[0_0_10px_rgba(200,100,255,0.8)]',
      Briah: 'text-violet-300',
      Yetzirah: 'text-purple-500', // Purple
      Assiah: 'text-indigo-950'
    },
    pillar: 'Equilibrio',
    virtue: 'Independencia',
    vice: 'Ociosidad',
    question: '¿Qué me revelan mis sueños e intuiciones?',
    planet: 'Luna',
    bodyPart: 'Órganos reproductores',
    archetype: 'José',
    practices: ['Interpretación de sueños', 'Visualización creativa', 'Revisión del día'],
    affirmation: 'Confío en mi intuición y en el flujo de la vida.',
    position: { x: 50, y: 80 }
  },
  {
    id: 'malkuth',
    number: 10,
    name: 'Maljut',
    hebrewName: 'מַלְכוּת',
    transliteration: 'Maljut',
    meaning: 'Reino',
    description: 'El mundo físico, la manifestación final, la Tierra.',
    colors: {
      Atziluth: 'text-yellow-50 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]',
      Briah: 'text-amber-200',
      Yetzirah: 'text-yellow-700', // Citrine/Russet/Olive/Black mix
      Assiah: 'text-stone-900'
    },
    pillar: 'Equilibrio',
    virtue: 'Discriminación',
    vice: 'Avaricia, Inercia',
    question: '¿Cómo estoy manifestando mi espiritualidad en lo cotidiano?',
    planet: 'Tierra / 4 Elementos',
    bodyPart: 'Pies',
    archetype: 'Rey David',
    practices: ['Jardinería o contacto con tierra', 'Gestión financiera consciente', 'Cuidado del cuerpo físico'],
    affirmation: 'Estoy enraizado y manifiesto la luz en la tierra.',
    position: { x: 50, y: 95 }
  }
];

// King's Scale colors applied to paths
export const PATHS: Path[] = [
  // Aleph (Air) - Bright Pale Yellow
  { 
    id: 'p11', letter: 'א', letterName: 'Alef', gematria: 1, sourceId: 'keter', targetId: 'chokmah', meaning: 'Unidad', tarotCard: 'El Loco', type: 'Madre', 
    description: 'El origen silencioso, la chispa divina, el "1".', 
    practice: 'Confía en el inicio.', color: '#FEF08A',
    mysticalPhrase: 'La Alef es el dibujo del silencio de donde nace todo el universo; es el puente que nos recuerda que, aunque somos materia, estamos conectados a lo infinito.'
  },
  // Beth (Mercury) - Yellow
  { 
    id: 'p12', letter: 'ב', letterName: 'Bet', gematria: 2, sourceId: 'keter', targetId: 'binah', meaning: 'Casa', tarotCard: 'El Mago', type: 'Doble', 
    description: 'El recipiente, la dualidad, la bendición (Berajá).', 
    practice: 'Define tu propósito.', color: '#FACC15',
    mysticalPhrase: "La Bet es el primer 'hogar' de la existencia; es la letra que transforma la energía infinita de la Alef en un recipiente donde la vida puede finalmente ocurrir."
  },
  // Gimel (Moon) - Blue
  { 
    id: 'p13', letter: 'ג', letterName: 'Guímel', gematria: 3, sourceId: 'keter', targetId: 'tiferet', meaning: 'Movimiento', tarotCard: 'La Sacerdotisa', type: 'Doble', 
    description: 'El puente, la generosidad, el equilibrio.', 
    practice: 'Recuerda tu origen.', color: '#3B82F6',
    mysticalPhrase: 'La Guímel es el pie que se pone en marcha; es la fuerza del movimiento y la generosidad que rompe el aislamiento para buscar al otro.'
  },
  // Dalet (Venus) - Emerald Green
  { 
    id: 'p14', letter: 'ד', letterName: 'Dálet', gematria: 4, sourceId: 'chokmah', targetId: 'binah', meaning: 'Puerta', tarotCard: 'La Emperatriz', type: 'Doble', 
    description: 'La humildad del pobre, el mundo físico.', 
    practice: 'Abre la puerta a la creatividad.', color: '#10B981',
    mysticalPhrase: 'La Dálet es la puerta de la humildad; es el espacio donde el ser humano reconoce su necesidad de los demás para poder abrirse a la luz.'
  },
  // He (Aries) - Scarlet
  { 
    id: 'p15', letter: 'ה', letterName: 'He', gematria: 5, sourceId: 'chokmah', targetId: 'tiferet', meaning: 'Aliento', tarotCard: 'El Emperador', type: 'Simple', 
    description: 'La ventana, la comunicación, la vida.', 
    practice: 'Observa sin juzgar.', color: '#EF4444',
    mysticalPhrase: 'La He es la ventana del alma; es el suave suspiro de la respiración que nos recuerda que Dios está presente en cada momento de nuestra existencia física.'
  },
  // Vav (Taurus) - Red Orange
  { 
    id: 'p16', letter: 'ו', letterName: 'Vav', gematria: 6, sourceId: 'chokmah', targetId: 'chesed', meaning: 'Conexión', tarotCard: 'El Hierofante', type: 'Simple', 
    description: 'El gancho, lo que une cielo y tierra, el hombre.', 
    practice: 'Une lo espiritual y lo material.', color: '#F97316',
    mysticalPhrase: 'La Vav es el gancho de la realidad; es la fuerza de conexión que une lo que está arriba con lo que está abajo, transformando fragmentos aislados en un todo unido.'
  },
  // Zayin (Gemini) - Orange
  { 
    id: 'p17', letter: 'ז', letterName: 'Zayin', gematria: 7, sourceId: 'binah', targetId: 'tiferet', meaning: 'Corona', tarotCard: 'Los Amantes', type: 'Simple', 
    description: 'El Shabat, el propósito, la espada protectora.', 
    practice: 'Decide con el corazón.', color: '#F59E0B',
    mysticalPhrase: 'La Zayin es la espada que protege lo sagrado; es el poder de detener la acción para encontrar el propósito, recordándonos que el verdadero descanso es una victoria espiritual.'
  },
  // Cheth (Cancer) - Amber
  { 
    id: 'p18', letter: 'ח', letterName: 'Jet', gematria: 8, sourceId: 'binah', targetId: 'gevurah', meaning: 'Vida', tarotCard: 'El Carro', type: 'Simple', 
    description: 'Lo trascendente, lo sobrenatural, el muro sagrado.', 
    practice: 'Define tus fronteras.', color: '#D97706',
    mysticalPhrase: 'La Jet es el recinto de la vida; es el equilibrio entre los límites que nos protegen y la vitalidad que fluye cuando superamos nuestra propia naturaleza.'
  },
  // Teth (Leo) - Yellow (Greenish)
  { 
    id: 'p19', letter: 'ט', letterName: 'Tet', gematria: 9, sourceId: 'chesed', targetId: 'gevurah', meaning: 'Bondad Oculta', tarotCard: 'La Fuerza', type: 'Simple', 
    description: 'El útero, la gestación, el bien que no se ve.', 
    practice: 'Domina tus instintos con suavidad.', color: '#84CC16',
    mysticalPhrase: 'La Tet es la vasija del bien oculto; es la semilla que debe estar bajo tierra para germinar, recordándonos que lo más valioso suele estar protegido del ojo ajeno.'
  },
  // Yod (Virgo) - Yellow Green
  { 
    id: 'p20', letter: 'י', letterName: 'Yod', gematria: 10, sourceId: 'chesed', targetId: 'tiferet', meaning: 'Punto', tarotCard: 'El Ermitaño', type: 'Simple', 
    description: 'La semilla, la mano de Dios, la mínima expresión.', 
    practice: 'Enfócate en lo esencial.', color: '#A3E635',
    mysticalPhrase: 'La Yod es la chispa divina en lo infinitesimal; es el punto de partida donde la nada se convierte en algo, recordándonos que las cosas más pequeñas contienen el poder de transformar el universo entero.'
  },
  // Kaph (Jupiter) - Violet
  { 
    id: 'p21', letter: 'כ', letterName: 'Caf', gematria: 20, sourceId: 'chesed', targetId: 'netzach', meaning: 'Molde', tarotCard: 'Rueda de la Fortuna', type: 'Doble', 
    description: 'La palma de la mano, el potencial hecho realidad.', 
    practice: 'Acepta los ciclos de la vida.', color: '#8B5CF6',
    mysticalPhrase: 'La Caf es el molde de la existencia; es la palma de la mano que recibe y da forma, recordándonos que tenemos el poder de materializar nuestro potencial en realidades tangibles.'
  },
  // Lamed (Libra) - Emerald
  { 
    id: 'p22', letter: 'ל', letterName: 'Lámed', gematria: 30, sourceId: 'gevurah', targetId: 'tiferet', meaning: 'Elevación', tarotCard: 'La Justicia', type: 'Simple', 
    description: 'El estudio, el corazón que aspira a lo alto.', 
    practice: 'Busca el equilibrio justo.', color: '#34D399',
    mysticalPhrase: 'La Lámed es la aspiración del corazón por aprender; es el puente entre el conocimiento y la acción, recordándonos que el verdadero aprendizaje es aquel que nos eleva por encima de nuestra naturaleza.'
  },
  // Mem (Water) - Deep Blue
  { 
    id: 'p23', letter: 'מ', letterName: 'Mem', gematria: 40, sourceId: 'gevurah', targetId: 'hod', meaning: 'Agua', tarotCard: 'El Colgado', type: 'Madre', 
    description: 'La matriz, la purificación, la sabiduría profunda.', 
    practice: 'Fluye y adáptate.', color: '#1E40AF',
    mysticalPhrase: 'La Mem es el flujo de las aguas de la creación; es la matriz que contiene todos los misterios de la vida, recordándonos que la sabiduría fluye mejor en el silencio y la profundidad.'
  },
  // Nun (Scorpio) - Green Blue
  { 
    id: 'p24', letter: 'נ', letterName: 'Nun', gematria: 50, sourceId: 'tiferet', targetId: 'netzach', meaning: 'Continuidad', tarotCard: 'La Muerte', type: 'Simple', 
    description: 'El pez, la fidelidad en la oscuridad.', 
    practice: 'Deja ir lo viejo.', color: '#06B6D4',
    mysticalPhrase: 'La Nun es la chispa que emerge de la profundidad; es el pez que nada contra la corriente, recordándonos que nuestra verdadera identidad brilla con más fuerza cuando somos fieles a nuestra esencia en medio de la adversidad.'
  },
  // Samekh (Sagittarius) - Blue
  { 
    id: 'p25', letter: 'ס', letterName: 'Sámej', gematria: 60, sourceId: 'tiferet', targetId: 'yesod', meaning: 'Sostén', tarotCard: 'La Templanza', type: 'Simple', 
    description: 'El círculo protector, la confianza absoluta.', 
    practice: 'Confía en tu base.', color: '#2563EB',
    mysticalPhrase: 'La Sámej es el círculo de protección infinita; es el abrazo que no tiene principio ni fin, recordándonos que siempre estamos sostenidos por una fuerza mayor, incluso cuando no la vemos.'
  },
  // Ayin (Capricorn) - Indigo
  { 
    id: 'p26', letter: 'ע', letterName: 'Ayin', gematria: 70, sourceId: 'tiferet', targetId: 'hod', meaning: 'Visión', tarotCard: 'El Diablo', type: 'Simple', 
    description: 'El ojo, el manantial, percibir lo espiritual.', 
    practice: 'Mira más allá de las apariencias.', color: '#4F46E5',
    mysticalPhrase: 'La Ayin es el ojo del alma que traspasa las apariencias; es la capacidad de ver la luz divina oculta en la materia, recordándonos que lo que percibimos depende siempre de la profundidad de nuestra mirada.'
  },
  // Pe (Mars) - Scarlet
  { 
    id: 'p27', letter: 'פ', letterName: 'Pe', gematria: 80, sourceId: 'netzach', targetId: 'hod', meaning: 'Boca', tarotCard: 'La Torre', type: 'Doble', 
    description: 'La palabra, la expresión, la libertad de hablar.', 
    practice: 'Habla con intención creadora.', color: '#DC2626',
    mysticalPhrase: 'La Pe es el portal de la palabra; es la fuerza que transforma el pensamiento en realidad audible, recordándonos que nuestra boca tiene el poder de crear mundos o de destruirlos.'
  },
  // Tzaddi (Aquarius) - Violet
  { 
    id: 'p28', letter: 'צ', letterName: 'Tsadi', gematria: 90, sourceId: 'netzach', targetId: 'yesod', meaning: 'Justicia', tarotCard: 'La Estrella', type: 'Simple', 
    description: 'El justo (Tzadik), la integridad, el anzuelo.', 
    practice: 'Pesca la verdad interior.', color: '#7C3AED',
    mysticalPhrase: 'La Tsadi es el faro de la rectitud; es la figura del justo que mantiene sus pies en la tierra mientras su alma se eleva al cielo, recordándonos que la verdadera espiritualidad se demuestra en la integridad de nuestras acciones.'
  },
  // Qoph (Pisces) - Crimson (Ultra-violet)
  { 
    id: 'p29', letter: 'ק', letterName: 'Kof', gematria: 100, sourceId: 'netzach', targetId: 'malkuth', meaning: 'Santidad', tarotCard: 'La Luna', type: 'Simple', 
    description: 'El descenso a la oscuridad para rescatar luz.', 
    practice: 'Honra tu cuerpo como templo.', color: '#9F1239',
    mysticalPhrase: 'La Kof es el puente hacia la redención; es la capacidad de descender a lo más profundo para rescatar la luz, recordándonos que no hay lugar tan oscuro donde la santidad no pueda penetrar.'
  },
  // Resh (Sun) - Orange
  { 
    id: 'p30', letter: 'ר', letterName: 'Resh', gematria: 200, sourceId: 'hod', targetId: 'yesod', meaning: 'Cabeza', tarotCard: 'El Sol', type: 'Doble', 
    description: 'El intelecto, el comienzo, la intención mental.', 
    practice: 'Ilumina tus pensamientos.', color: '#FB923C',
    mysticalPhrase: 'La Resh es la cabeza que elige su destino; es el punto donde la mente decide si quiere ser el principio de algo grande o simplemente un recipiente vacío, recordándonos que nuestra mentalidad define nuestra realidad.'
  },
  // Shin (Fire) - Glowing Orange Scarlet
  { 
    id: 'p31', letter: 'ש', letterName: 'Shin', gematria: 300, sourceId: 'hod', targetId: 'malkuth', meaning: 'Fuego', tarotCard: 'El Juicio', type: 'Madre', 
    description: 'La transformación, la paz (Shalom), el espíritu.', 
    practice: 'Aviva tu chispa divina.', color: '#EA580C',
    mysticalPhrase: 'La Shin es el fuego de la transformación; es la llama que baila entre la pasión y la paz, recordándonos que cuando equilibramos nuestras fuerzas internas, nos convertimos en un canal de luz divina.'
  },
  // Tav (Saturn) - Indigo/Black
  { 
    id: 'p32', letter: 'ת', letterName: 'Tav', gematria: 400, sourceId: 'yesod', targetId: 'malkuth', meaning: 'Sello', tarotCard: 'El Mundo', type: 'Doble', 
    description: 'La verdad absoluta, el final que es principio.', 
    practice: 'Integra todo lo aprendido.', color: '#312E81',
    mysticalPhrase: 'La Tav es el sello de la verdad absoluta; es el final que le da sentido a todo el camino, recordándonos que el propósito de nuestra vida es convertirnos en un testimonio vivo de la integridad.'
  },
];