'use strict';

/* ==========================================================================
   SUMA — Application Engine
   Robust, Modular, Interactive & Feature-Rich with Offline LocalStorage
   ========================================================================== */

// --- 1. SVG ICONS REPOSITORY ---
const ICONS = {
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/>',
  paw: '<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v2.5a3.5 3.5 0 0 1-6.8 1.2A4 4 0 0 1 5 15v-1a4 4 0 0 1 4-4Z"/>',
  sparkle: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  'check-square': '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="22" x2="15" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="4" y1="14" x2="20" y2="14"/><line x1="4" y1="18" x2="20" y2="18"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  play: '<polygon points="5 3 19 12 5 21 5 3"/>',
  printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  'file-text': '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  twitter: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'
};

const CATEGORIES = [
  'Todas',
  'Medio Ambiente',
  'Comunidad y Alimentos',
  'Educación y Mentoría',
  'Bienestar Animal',
  'Salud & Bienestar',
  'Arte, Cultura & Espacios',
  'Tecnología & Inclusión'
];

const CATEGORY_ICONS = {
  Todas: 'sparkle',
  'Medio Ambiente': 'leaf',
  'Comunidad y Alimentos': 'people',
  'Educación y Mentoría': 'book',
  'Bienestar Animal': 'paw',
  'Salud & Bienestar': 'shield',
  'Arte, Cultura & Espacios': 'sparkle',
  'Tecnología & Inclusión': 'monitor'
};

// Helper utilities
const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.sparkle}</svg>`;
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));

// Date helpers for generating realistic upcoming dates
const baseDate = new Date();
function getNextDayOfWeek(dayIndex, offsetWeeks = 0) {
  const d = new Date(baseDate);
  const diff = (dayIndex + 7 - d.getDay()) % 7 || 7;
  d.setDate(d.getDate() + diff + (offsetWeeks * 7));
  return d.toISOString().slice(0, 10);
}

// Generate friendly date label
function formatDate(dateStr) {
  try {
    const d = new Date(`${dateStr}T12:00:00Z`);
    return new Intl.DateTimeFormat('es-MX', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      timeZone: 'UTC'
    }).format(d);
  } catch {
    return dateStr;
  }
}

// --- 2. SEED CATALOG (18 High-Impact Causes) ---
const SEED_ACTIVITIES = [
  {
    id: 'la-huasteca-reforesta',
    title: 'Reforestación y Restauración Ecológica en La Huasteca',
    org: 'Pronatura Noreste A.C.',
    verified: true,
    category: 'Medio Ambiente',
    city: 'Santa Catarina, NL',
    address: 'Entrada al Parque Ecológico La Huasteca, Santa Catarina',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 0), // Saturday
    time: '08:30',
    hours: 4,
    spotsTotal: 20,
    spotsFilled: 14,
    artType: 'forest',
    description: 'Ayuda a sembrar más de 120 encinos y anacahuitas nativas en zonas erosionadas de la cordillera. Aprenderás técnicas de conservación de suelo, retención de agua y biodiversidad con biólogos expertos.',
    requirements: 'Calzado cerrado con buena suela, gorra, ropa cómoda que puedas ensuciar y termo para agua.',
    included: 'Seguro médico de accidentes, herramientas de siembra, guantes, refrigerio ligero y constancia de horas oficial.',
    socialServiceValid: true,
    coordinator: 'Biól. Fernando Torres',
    coordinatorPhone: '+528182736451',
    lat: 25.648,
    lng: -100.457,
    schedule: [
      { time: '08:30', text: 'Bienvenida, entrega de kits de seguridad y charla técnica' },
      { time: '09:15', text: 'Preparación de cepas y distribución de árboles nativos' },
      { time: '11:30', text: 'Riego profundo e instalación de protectores biodegradables' },
      { time: '12:30', text: 'Almuerzo ligero comunitario y cierre de jornada' }
    ]
  },
  {
    id: 'banco-alimentos-guadalupe',
    title: 'Rescate de Alimentos y Armado de Paquetes Nutricionales',
    org: 'Banco de Alimentos de Monterrey',
    verified: true,
    category: 'Comunidad y Alimentos',
    city: 'Guadalupe, NL',
    address: 'Av. Bonifacio Salinas 100, Las Américas, Guadalupe, NL',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 0),
    time: '09:00',
    hours: 3,
    spotsTotal: 15,
    spotsFilled: 11,
    artType: 'food',
    description: 'Clasificación y selección de frutas, verduras y granos rescatados del mercado de abastos. Prepararás más de 300 despensas que serán entregadas a familias en vulnerabilidad nutricional.',
    requirements: 'Pantalón largo, calzado cerrado antideslizante, cabello recogido y excelente actitud de trabajo en equipo.',
    included: 'Cofia, mandil protector, agua purificada, constancia oficial de horas para tu universidad.',
    socialServiceValid: true,
    coordinator: 'Lic. Mariana Soto',
    coordinatorPhone: '+528114529871',
    lat: 25.686,
    lng: -100.243,
    schedule: [
      { time: '09:00', text: 'Registro, entrega de equipo higiénico y asignación de mesas' },
      { time: '09:20', text: 'Control de calidad y selección de productos frescos' },
      { time: '11:00', text: 'Empaque balanceado y pesado de paquetes' },
      { time: '12:00', text: 'Resumen de toneladas rescatadas y constancias' }
    ]
  },
  {
    id: 'lectura-barrio-monterrey',
    title: 'Círculo de Lectura y Biblioteca Comunitaria',
    org: 'Fundación Páginas con Futuro',
    verified: true,
    category: 'Educación y Mentoría',
    city: 'Monterrey, NL',
    address: 'Centro Comunitario Independencia, Monterrey, NL',
    mode: 'Presencial',
    date: getNextDayOfWeek(0, 1), // Sunday
    time: '10:00',
    hours: 3,
    spotsTotal: 10,
    spotsFilled: 6,
    artType: 'books',
    description: 'Participa como facilitador en dinámicas de lectura en voz alta para niñas y niños de primaria, y ayuda a catalogar y organizar más de 200 libros infantiles recién donados.',
    requirements: 'Ganas de convivir con niños, paciencia y gusto por contar historias. No se requiere experiencia previa en docencia.',
    included: 'Materiales didácticos, refrigerio, gafete conmemorativo y acreditación institucional.',
    socialServiceValid: true,
    coordinator: 'Mtra. Elena Garza',
    coordinatorPhone: '+528120394857',
    lat: 25.662,
    lng: -100.316,
    schedule: [
      { time: '10:00', text: 'Integración y preparación de dinámicas lúdicas' },
      { time: '10:30', text: 'Círculo de lectura compartida y juegos de comprensión' },
      { time: '12:00', text: 'Organización temática de la biblioteca infantil' },
      { time: '13:00', text: 'Reflexión y registro de asistencia' }
    ]
  },
  {
    id: 'rescate-animal-san-pedro',
    title: 'Rehabilitación y Socialización de Perros Rescatados',
    org: 'Patitas en Comunidad San Pedro',
    verified: true,
    category: 'Bienestar Animal',
    city: 'San Pedro Garza García, NL',
    address: 'Refugio Bosque Animal, Calzada del Valle, San Pedro',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 1),
    time: '08:30',
    hours: 4,
    spotsTotal: 10,
    spotsFilled: 7,
    artType: 'animals',
    description: 'Apoya en los paseos supervisados, cepillado, enriquecimiento ambiental y dinámicas de confianza para perritos en proceso de adopción. Les brindarás amor y preparación para encontrar su familia definitiva.',
    requirements: 'Pantalón de mezclilla, tenis cerrados, no temerle a los perros grandes y seguir las pautas de manejo del etólogo.',
    included: 'Correas seguras, premios para entrenamiento, hidratación y carta de participación comunitaria.',
    socialServiceValid: true,
    coordinator: 'Dra. Andrea Luján',
    coordinatorPhone: '+528189402918',
    lat: 25.656,
    lng: -100.368,
    schedule: [
      { time: '08:30', text: 'Charla de seguridad canina y asignación de parejas' },
      { time: '09:00', text: 'Paseo guiado y ejercicios de sociabilización' },
      { time: '11:00', text: 'Aseo básico y juegos sensoriales en jardín' },
      { time: '12:30', text: 'Retroalimentación de fichas de adopción' }
    ]
  },
  {
    id: 'mentoria-digital-remota',
    title: 'Mentoría Digital: Alfabetización para Adultos Mayores',
    org: 'Conexión Mayor Global',
    verified: true,
    category: 'Tecnología & Inclusión',
    city: 'En línea',
    address: 'Sesión virtual interactiva por Zoom',
    mode: 'En línea',
    date: getNextDayOfWeek(4, 0), // Thursday
    time: '18:00',
    hours: 2,
    spotsTotal: 25,
    spotsFilled: 18,
    artType: 'tech',
    description: 'Acompaña 1 a 1 a una persona adulta mayor en el uso práctico de herramientas tecnológicas: realizar videollamadas con sus familiares, gestionar fotos, evitar fraudes y navegar en internet de forma segura.',
    requirements: 'Computadora con micrófono y cámara estables, conexión a internet y mucha paciencia y empatía.',
    included: 'Manual pedagógico previo, sala Zoom supervisada y constancia de impacto digital.',
    socialServiceValid: true,
    coordinator: 'Ing. Carlos Medina',
    coordinatorPhone: '+525540392817',
    lat: 19.432,
    lng: -99.133,
    schedule: [
      { time: '18:00', text: 'Briefing técnico de coordinadores y emparejamiento' },
      { time: '18:15', text: 'Tutoría personalizada en salas de grupos' },
      { time: '19:40', text: 'Reunión plenaria y despedida grupal' }
    ]
  },
  {
    id: 'limpieza-rio-santa-catarina',
    title: 'Conservación y Retiro de Residuos en el Río Santa Catarina',
    org: 'Ríos Limpios México',
    verified: true,
    category: 'Medio Ambiente',
    city: 'Monterrey, NL',
    address: 'Bajo el puente Félix U. Gómez, Monterrey, NL',
    mode: 'Presencial',
    date: getNextDayOfWeek(0, 0),
    time: '08:00',
    hours: 3,
    spotsTotal: 30,
    spotsFilled: 23,
    artType: 'forest',
    description: 'Únete a una gran brigada metropolitana para retirar plásticos y escombros del cauce del río, protegiendo las aves migratorias y la flora de este ecosistema fluvial vital.',
    requirements: 'Botas o tenis resistentes, pantalón largo, protector solar y termo personal.',
    included: 'Guantes de carnaza, costales de yute reciclables, hidratación constante y constancia oficial.',
    socialServiceValid: true,
    coordinator: 'Lic. Rodrigo Saldaña',
    coordinatorPhone: '+528117625340',
    lat: 25.671,
    lng: -100.309,
    schedule: [
      { time: '08:00', text: 'Recepción, delimitación de cuadrantes y seguridad' },
      { time: '08:30', text: 'Recolección selectiva de plásticos y metales' },
      { time: '10:30', text: 'Pesaje, separación para reciclaje y agradecimiento' }
    ]
  },
  {
    id: 'robotica-ninas-cdmx',
    title: 'Taller de Código y Robótica con Enfoque Social',
    org: 'Tecnología con Alma A.C.',
    verified: true,
    category: 'Educación y Mentoría',
    city: 'Ciudad de México',
    address: 'Fábrica de Artes y Oficios (FARO) Oriente, Iztapalapa, CDMX',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 1),
    time: '10:00',
    hours: 4,
    spotsTotal: 12,
    spotsFilled: 8,
    artType: 'tech',
    description: 'Guía a adolescentes en el armado de sus primeros robots con sensores y programación en bloques Scratch. Despierta vocaciones STEM en comunidades con menor acceso tecnológico.',
    requirements: 'Conocimientos básicos de computación o programación (Scratch, Python, Arduino o similares).',
    included: 'Kits Arduino para la clase, almuerzo, constancia avalada por la Secretaría de Innovación.',
    socialServiceValid: true,
    coordinator: 'Dra. Ximena Peralta',
    coordinatorPhone: '+525539281740',
    lat: 19.362,
    lng: -99.014,
    schedule: [
      { time: '10:00', text: 'Prueba de placas electrónicas y dinámicas rompehielos' },
      { time: '10:45', text: 'Construcción mecánica de autos robot seguidores de luz' },
      { time: '12:30', text: 'Programación de algoritmos de evasión de obstáculos' },
      { time: '13:40', text: 'Demostración abierta a los padres y entrega de diplomas' }
    ]
  },
  {
    id: 'comedor-solidario-cdmx',
    title: 'Preparación y Reparto de Comida Caliente en Comedor Social',
    org: 'Comedores con Dignidad México',
    verified: true,
    category: 'Comunidad y Alimentos',
    city: 'Ciudad de México',
    address: 'Calle Mesones 42, Centro Histórico, Cuauhtémoc, CDMX',
    mode: 'Presencial',
    date: getNextDayOfWeek(5, 0), // Friday
    time: '11:00',
    hours: 4,
    spotsTotal: 12,
    spotsFilled: 9,
    artType: 'food',
    description: 'Cocina en equipo, porciona y sirve alimentos nutritivos a personas en situación de calle y migrantes en el corazón de la Ciudad de México con calidez y trato humano.',
    requirements: 'Uña corta y sin esmalte, mandil, calzado cerrado y empatía profunda hacia cada comensal.',
    included: 'Cubrebocas, redes de cabello, comida del día para el voluntario y firma de cartas de servicio.',
    socialServiceValid: true,
    coordinator: 'Chef Daniel Morales',
    coordinatorPhone: '+525512839475',
    lat: 19.429,
    lng: -99.135,
    schedule: [
      { time: '11:00', text: 'Lavado, picado y preparación del menú diario' },
      { time: '12:30', text: 'Montaje de comedor y bienvenida a comensales' },
      { time: '14:00', text: 'Limpieza general del área y retroalimentación' }
    ]
  },
  {
    id: 'bosque-urbano-gdl',
    title: 'Acondicionamiento y Plantación en Bosque Urbano',
    org: 'Colectivo Bosques de Guadalajara',
    verified: true,
    category: 'Medio Ambiente',
    city: 'Guadalajara, Jalisco',
    address: 'Bosque Los Colomos, Entrada Paseo Torreón, Guadalajara',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 1),
    time: '09:00',
    hours: 4,
    spotsTotal: 18,
    spotsFilled: 13,
    artType: 'forest',
    description: 'Siembra de árboles endémicos de la meseta jalisciense, acondicionamiento de senderos de grava y colocación de señalética educativa sobre aves polinizadoras.',
    requirements: 'Ropa resistente de manga larga, calzado de campo, gorra y termo con agua.',
    included: 'Palas, carretillas, hidratación con electrólitos, refrigerio tapatío y constancia oficial.',
    socialServiceValid: true,
    coordinator: 'Ing. Pablo Alatorre',
    coordinatorPhone: '+523319283746',
    lat: 20.707,
    lng: -103.391,
    schedule: [
      { time: '09:00', text: 'Charla sobre ecosistemas templados y entrega de equipo' },
      { time: '09:30', text: 'Apertura de cepas y distribución de composta' },
      { time: '12:00', text: 'Tendido de grava en sendero de interpretación ambiental' }
    ]
  },
  {
    id: 'salud-comunitaria-puebla',
    title: 'Brigada Comunitaria de Salud y Primeros Auxilios',
    org: 'Salud y Esperanza A.C.',
    verified: true,
    category: 'Salud & Bienestar',
    city: 'Puebla, México',
    address: 'Explanada de San Jerónimo Caleras, Puebla',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 0),
    time: '08:30',
    hours: 5,
    spotsTotal: 14,
    spotsFilled: 10,
    artType: 'health',
    description: 'Apoya en módulos de registro, toma de signos vitales (presión, glucosa) y talleres de hábitos saludables para familias en colonias periféricas junto a médicos y enfermeros voluntarios.',
    requirements: 'Aptitud para atención al público. Ideal para estudiantes de medicina, enfermería, nutrición o psicología (abierto también a no especialistas para logística).',
    included: 'Bata institucional, insumos médicos, refrigerio y constancia de brigada médica.',
    socialServiceValid: true,
    coordinator: 'Dra. Patricia Armenta',
    coordinatorPhone: '+522228394857',
    lat: 19.083,
    lng: -98.225,
    schedule: [
      { time: '08:30', text: 'Montaje de carpas y calibración de instrumentos' },
      { time: '09:00', text: 'Atención a vecinos y registro de historiales clínicos' },
      { time: '12:30', text: 'Pláticas de nutrición y entrega de kits dentales' }
    ]
  },
  {
    id: 'murales-comunitarios-oaxaca',
    title: 'Revitalización de Espacios Públicos con Murales Colectivos',
    org: 'Color y Memoria Oaxaca',
    verified: true,
    category: 'Arte, Cultura & Espacios',
    city: 'Oaxaca, México',
    address: 'Plaza del Barrio de Jalatlaco, Oaxaca de Juárez',
    mode: 'Presencial',
    date: getNextDayOfWeek(0, 1),
    time: '09:30',
    hours: 5,
    spotsTotal: 12,
    spotsFilled: 8,
    artType: 'art',
    description: 'Transforma una barda deteriorada en una obra de arte comunitaria guiado por muralistas oaxaqueños. Plasmaremos la flora nativa y las tradiciones locales para embellecer el barrio.',
    requirements: 'Ropa que puedas manchar de pintura, sombrero para el sol y ganas de pintar en colectivo.',
    included: 'Pinturas acrílicas de primera, brochas, hidratación, tejate tradicional y constancia artística.',
    socialServiceValid: true,
    coordinator: 'Mtro. Tizoc Canseco',
    coordinatorPhone: '+529512039485',
    lat: 17.067,
    lng: -96.716,
    schedule: [
      { time: '09:30', text: 'Bocetaje en muro y fondeado con sellador' },
      { time: '11:00', text: 'Aplicación de paleta de colores y detalles florales' },
      { time: '13:30', text: 'Toques finales, firma colectiva y convivencia' }
    ]
  },
  {
    id: 'cusco-huertos-andinos',
    title: 'Agroecología Ancestral y Huertos en el Valle Sagrado',
    org: 'Kawsay Pachamama Perú',
    verified: true,
    category: 'Medio Ambiente',
    city: 'Cusco, Perú',
    address: 'Comunidad de Pisac, Valle Sagrado, Cusco',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 2),
    time: '09:00',
    hours: 5,
    spotsTotal: 10,
    spotsFilled: 6,
    artType: 'forest',
    description: 'Colabora en la siembra tradicional de maíz blanco y papas nativas utilizando terrazas andinas incaicas. Aprende de comuneros quechuas sobre agricultura resiliente y respeto a la Pachamama.',
    requirements: 'Buena condición física para caminar en altura (2,900 msnm), calzado de montaña, agua y protección solar.',
    included: 'Transporte desde Cusco ida y vuelta, almuerzo típico tradicional, guiado quechua y certificado internacional de voluntariado.',
    socialServiceValid: true,
    coordinator: 'Yachachiq Inti Quispe',
    coordinatorPhone: '+51984123456',
    lat: -13.531,
    lng: -71.967,
    schedule: [
      { time: '09:00', text: 'Ayni (trabajo recíproco) y pago simbólico a la tierra' },
      { time: '10:00', text: 'Labranza con chaquitaclla y selección de semillas' },
      { time: '13:00', text: 'Merienda andina comunitaria (Pachamanca) y diálogo' }
    ]
  },
  {
    id: 'quito-pulmon-pichincha',
    title: 'Reforestación en las Laderas del Volcán Pichincha',
    org: 'Quito Verde Resiliente',
    verified: true,
    category: 'Medio Ambiente',
    city: 'Quito, Ecuador',
    address: 'Parque Metropolitano Guangüiltagua, Quito',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 2),
    time: '08:30',
    hours: 4,
    spotsTotal: 16,
    spotsFilled: 11,
    artType: 'forest',
    description: 'Siembra de árboles de pumamaqui y arrayanes en las laderas que protegen a la ciudad de Quito de deslaves y purifican el aire de los valles andinos.',
    requirements: 'Calzado para senderismo, impermeable liviano (clima andino variable) y protección UV.',
    included: 'Herramientas agrícolas, guantes, refrigerio andino y certificado institucional.',
    socialServiceValid: true,
    coordinator: 'Ing. Estefanía Noboa',
    coordinatorPhone: '+593991234567',
    lat: -0.180,
    lng: -78.467,
    schedule: [
      { time: '08:30', text: 'Caminata de ascenso al sector de plantación' },
      { time: '09:15', text: 'Plantación en pendientes y fijación de tutores' },
      { time: '12:00', text: 'Convivencia, refrigerio y entrega de credenciales' }
    ]
  },
  {
    id: 'lisboa-costa-cascais',
    title: 'Conservación Marina y Limpieza Costera de Cascaes',
    org: 'Oceano Vivo Portugal',
    verified: true,
    category: 'Medio Ambiente',
    city: 'Lisboa, Portugal',
    address: 'Praia do Guincho, Cascais / Lisboa',
    mode: 'Presencial',
    date: getNextDayOfWeek(6, 3),
    time: '09:30',
    hours: 4,
    spotsTotal: 20,
    spotsFilled: 14,
    artType: 'ocean',
    description: 'Campaña internacional de recolección de microplásticos y redes fantasma en la costa atlántica de Cascais. Conocerás el impacto del plástico en el ecosistema marino europeo con biólogos marinos.',
    requirements: 'Ropa cortavientos, calzado deportivo para arena y disposición para caminar en playa.',
    included: 'Pinzas de recolección, tamices para microplásticos, bolsas biodegradables y Youthpass / Certificado Europeo de Voluntariado.',
    socialServiceValid: true,
    coordinator: 'Duarte Mendonça',
    coordinatorPhone: '+351912345678',
    lat: 38.722,
    lng: -9.139,
    schedule: [
      { time: '09:30', text: 'Taller breve sobre corrientes del Atlántico y microplásticos' },
      { time: '10:15', text: 'Limpieza y muestreo científico en línea de marea' },
      { time: '12:45', text: 'Pesaje, auditoría de marcas y entrega de certificados' }
    ]
  },
  {
    id: 'madrid-apoyo-escolar',
    title: 'Apoyo Escolar a Niñas y Niños Refugiados y Migrantes',
    org: 'Red Solidaria Bienvenida Madrid',
    verified: true,
    category: 'Educación y Mentoría',
    city: 'Madrid, España',
    address: 'Centro Intercultural Lavapiés, Madrid',
    mode: 'Presencial',
    date: getNextDayOfWeek(3, 1), // Wednesday
    time: '17:00',
    hours: 3,
    spotsTotal: 10,
    spotsFilled: 7,
    artType: 'books',
    description: 'Brinda refuerzo en matemáticas, lectoescritura en español y resolución de tareas a niños en proceso de integración escolar en el barrio multicultural de Lavapiés.',
    requirements: 'Habilidades pedagógicas básicas, paciencia y empatía intercultural.',
    included: 'Materiales didácticos, merienda para voluntarios y constancia oficial de voluntariado en España.',
    socialServiceValid: true,
    coordinator: 'Clara Domínguez',
    coordinatorPhone: '+34612345678',
    lat: 40.416,
    lng: -3.703,
    schedule: [
      { time: '17:00', text: 'Coordinación pedagógica y revisión de cuadernos' },
      { time: '17:30', text: 'Sesión de tareas 1 a 1 y dinámicas de lectura' },
      { time: '19:30', text: 'Juegos de mesa y cierre con las familias' }
    ]
  },
  {
    id: 'subtitulos-accesibles-remoto',
    title: 'Creación de Subtítulos y Contenido Accesible para Personas Sordas',
    org: 'Accesibilidad Digital Sin Barreras',
    verified: true,
    category: 'Tecnología & Inclusión',
    city: 'En línea',
    address: 'Plataforma web colaborativa en línea',
    mode: 'En línea',
    date: getNextDayOfWeek(2, 0), // Tuesday
    time: '19:00',
    hours: 3,
    spotsTotal: 20,
    spotsFilled: 12,
    artType: 'tech',
    description: 'Subtitula cursos educativos abiertos y conferencias científicas para que personas con discapacidad auditiva puedan acceder a educación gratuita de alta calidad.',
    requirements: 'Buena ortografía y redacción en español, computadora personal y audífonos.',
    included: 'Acceso a software de sincronización de subtítulos y constancia de impacto digital.',
    socialServiceValid: true,
    coordinator: 'Lic. Mateo Valdivia',
    coordinatorPhone: '+525588392019',
    lat: 25.686,
    lng: -100.316,
    schedule: [
      { time: '19:00', text: 'Capacitación en normas de accesibilidad WCAG y subtitulado' },
      { time: '19:30', text: 'Transcripción y sincronización de cápsulas educativas' },
      { time: '21:30', text: 'Revisión por pares y publicación abierta' }
    ]
  }
];

// --- 3. STORAGE & STATE MANAGEMENT ---
const STORAGE_KEY = 'suma_voluntariado_production_v2';

const defaultState = {
  saved: ['la-huasteca-reforesta', 'rescate-animal-san-pedro'],
  applications: [
    {
      id: 'app-init-1',
      activityId: 'banco-alimentos-guadalupe',
      applicantName: 'Pablo Velázquez Bremont',
      applicantEmail: 'pablovelazquezbremont@gmail.com',
      applicantPhone: '+52 81 1234 5678',
      applicantSchool: 'Tec de Monterrey · Ingeniería',
      socialService: 'si',
      motivation: 'Me apasiona contribuir a la seguridad alimentaria en mi comunidad y compartir tiempo con quienes más lo necesitan.',
      medical: 'Ninguna',
      status: 'confirmada',
      folio: 'SUMA-VOL-2026-4821',
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString()
    },
    {
      id: 'app-init-2',
      activityId: 'limpieza-rio-santa-catarina',
      applicantName: 'Pablo Velázquez Bremont',
      applicantEmail: 'pablovelazquezbremont@gmail.com',
      applicantPhone: '+52 81 1234 5678',
      applicantSchool: 'Tec de Monterrey · Ingeniería',
      socialService: 'si',
      motivation: 'El río es el pulmón de nuestra ciudad y quiero ser parte activa de su conservación.',
      medical: 'Ninguna',
      status: 'confirmada',
      folio: 'SUMA-VOL-2026-9214',
      createdAt: new Date(Date.now() - 86400000 * 1).toISOString()
    }
  ],
  published: [],
  user: {
    name: 'Pablo Velázquez Bremont',
    email: 'pablovelazquezbremont@gmail.com',
    school: 'Tec de Monterrey · Servicio Social Activo',
    city: 'Monterrey, NL',
    avatar: 'PV'
  },
  theme: 'light',
  viewMode: 'grid'
};

let state = { ...defaultState };

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = {
        ...defaultState,
        ...parsed,
        user: { ...defaultState.user, ...(parsed.user || {}) },
        saved: Array.isArray(parsed.saved) ? parsed.saved : defaultState.saved,
        applications: Array.isArray(parsed.applications) ? parsed.applications : defaultState.applications,
        published: Array.isArray(parsed.published) ? parsed.published : defaultState.published
      };
    }
  } catch {
    state = { ...defaultState };
  }
}

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (err) {
    console.error('Storage error:', err);
    return false;
  }
}

// Global active filters
let activeCategory = 'Todas';
let activeView = 'explorar';
let currentDetailActivity = null;
let currentPassApplication = null;
let toastTimeout;

const getAllActivities = () => [...SEED_ACTIVITIES, ...state.published];
const getActivityById = id => getAllActivities().find(a => a.id === id);
const isSaved = id => state.saved.includes(id);
const isApplied = id => state.applications.some(a => a.activityId === id);

// --- 4. ARTWORK GENERATOR (Rich SVG Scenes) ---
function renderArt(kind = 'forest', category = 'Medio Ambiente') {
  const scenes = {
    forest: {
      bg: '#d7e7d6',
      svg: `
        <circle cx="260" cy="70" r="42" fill="#edf5e1"/>
        <path d="M0 180c70-30 140-5 210-20s100-30 150-15v75H0" fill="#b8d3b2"/>
        <path d="m60 170 30-70 30 70Z" fill="#32633e"/>
        <path d="m80 180 35-85 35 85Z" fill="#244d2f"/>
        <path d="m140 180 30-75 30 75Z" fill="#387447"/>
        <path d="m200 185 25-60 25 60Z" fill="#244d2f"/>
        <circle cx="280" cy="130" r="30" fill="#528e5f"/>
        <circle cx="310" cy="120" r="26" fill="#387447"/>
        <rect x="290" y="140" width="10" height="40" fill="#6a5241"/>
      `
    },
    food: {
      bg: '#fceddc',
      svg: `
        <circle cx="90" cy="80" r="45" fill="#fef5ea"/>
        <path d="M0 190c100-25 220-25 360 0v30H0" fill="#edd0b4"/>
        <path d="m120 135 15 65h90l15-65Z" fill="#c0784d"/>
        <path d="M140 135V105a30 30 0 0 1 60 0v30" stroke="#874f2d" stroke-width="7" fill="none"/>
        <ellipse cx="145" cy="120" rx="22" ry="18" fill="#d14d36"/>
        <path d="m175 125 10-50c4-15 18-12 18 1l-5 49" fill="#e8b159"/>
        <ellipse cx="205" cy="125" rx="18" ry="15" fill="#589e47"/>
      `
    },
    books: {
      bg: '#e6ded3',
      svg: `
        <circle cx="270" cy="70" r="35" fill="#f5ede3"/>
        <path d="M50 195V80a55 55 0 0 1 110 0v115" fill="#f7f2ea"/>
        <rect x="80" y="150" width="150" height="30" rx="4" fill="#366551"/>
        <rect x="90" y="118" width="135" height="26" rx="4" fill="#c76d49"/>
        <rect x="98" y="90" width="120" height="22" rx="4" fill="#4d718a"/>
        <path d="m115 88 25-35 25 35 25-35" stroke="#fefefe" stroke-width="3" fill="none"/>
      `
    },
    animals: {
      bg: '#f2e6d6',
      svg: `
        <circle cx="250" cy="80" r="40" fill="#fbf4ec"/>
        <path d="M0 195c100-30 220-20 360 0v25H0" fill="#decab2"/>
        <ellipse cx="180" cy="170" rx="55" ry="22" fill="#c99f78"/>
        <rect x="135" y="60" width="85" height="85" rx="36" fill="#af8157"/>
        <circle cx="155" cy="95" r="5" fill="#2d1c10"/>
        <circle cx="200" cy="95" r="5" fill="#2d1c10"/>
        <ellipse cx="178" cy="115" rx="22" ry="16" fill="#e8d5be"/>
        <polygon points="172,110 184,110 178,118" fill="#2d1c10"/>
      `
    },
    health: {
      bg: '#e2edf0',
      svg: `
        <circle cx="270" cy="80" r="40" fill="#f0f7f9"/>
        <rect x="120" y="70" width="120" height="110" rx="20" fill="#ffffff" stroke="#c0d7de" stroke-width="4"/>
        <path d="M180 95v60M150 125h60" stroke="#e04f36" stroke-width="12" stroke-linecap="round"/>
      `
    },
    art: {
      bg: '#faeade',
      svg: `
        <circle cx="100" cy="80" r="45" fill="#fff5ec"/>
        <path d="M110 190c-30-50 40-120 120-100 50 12 70 80 30 110-30 20-120 20-150-10Z" fill="#eed1ba"/>
        <circle cx="150" cy="130" r="12" fill="#d14d36"/>
        <circle cx="190" cy="115" r="12" fill="#2bb375"/>
        <circle cx="220" cy="145" r="12" fill="#3b82f6"/>
        <circle cx="170" cy="165" r="12" fill="#f59e0b"/>
      `
    },
    tech: {
      bg: '#dee8e6',
      svg: `
        <rect x="90" y="60" width="180" height="120" rx="10" fill="#1b392f"/>
        <rect x="100" y="70" width="160" height="100" rx="6" fill="#f7faf8"/>
        <path d="m80 180 200 0-20 18-160 0Z" fill="#718d83"/>
        <circle cx="140" cy="110" r="16" fill="#2ecc71"/>
        <rect x="170" y="100" width="60" height="8" rx="4" fill="#a4c2b8"/>
        <rect x="170" y="115" width="40" height="8" rx="4" fill="#a4c2b8"/>
      `
    },
    ocean: {
      bg: '#d6ecf2',
      svg: `
        <circle cx="280" cy="70" r="40" fill="#fef6dc"/>
        <path d="M0 160c60-15 120 15 180 0s120-20 180-5v65H0" fill="#7ec0d4"/>
        <path d="M0 180c70-10 130 10 200-5s100-15 160 0v45H0" fill="#3b96b3"/>
      `
    }
  };

  const selected = scenes[kind] || scenes.forest;
  return `<svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="360" height="220" fill="${selected.bg}"/>
    ${selected.svg}
  </svg>`;
}

// Generate simple SVG QR Code matrix representation
function renderQRCodeSVG(text = 'SUMA-VOL-2026') {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  const size = 15;
  let rects = '';
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      // Corner squares
      const isCorner1 = r < 4 && c < 4;
      const isCorner2 = r < 4 && c >= size - 4;
      const isCorner3 = r >= size - 4 && c < 4;
      const isPattern = ((hash >> ((r * c) % 24)) & 1) === 1 || (r + c) % 3 === 0;

      if (isCorner1 || isCorner2 || isCorner3 || isPattern) {
        rects += `<rect x="${c * 5}" y="${r * 5}" width="5" height="5" fill="#123d2b"/>`;
      }
    }
  }
  return `<svg viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg" aria-label="Código QR: ${esc(text)}">${rects}</svg>`;
}

// --- 5. CONFETTI CELEBRATION ENGINE ---
function launchConfetti() {
  const canvas = $('#confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#2ecc71', '#27ae60', '#f39c12', '#e74c3c', '#3498db', '#f1c40f', '#9b59b6'];

  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height * 0.4,
      w: Math.random() * 8 + 6,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -14 - 4,
      gravity: 0.35,
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 12,
      alpha: 1
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;

    for (let p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRotation;
      p.vx *= 0.98;

      if (p.y > canvas.height * 0.7) {
        p.alpha -= 0.02;
      }

      if (p.alpha > 0) {
        alive++;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    }

    if (alive > 0) {
      animationFrame = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationFrame);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  update();
}

// --- 6. TOAST NOTIFICATIONS ---
function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 4000);
}

// --- 7. FILTERING & RENDERING LOGIC ---
function normalizeStr(str = '') {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function getFilteredActivities() {
  const query = normalizeStr($('#query') ? $('#query').value : '');
  const city = $('#city') ? $('#city').value : '';
  const mode = $('#mode') ? $('#mode').value : '';
  const duration = $('#duration') ? $('#duration').value : '';
  const weekendOnly = $('#weekend') ? $('#weekend').checked : false;
  const socialServiceOnly = $('#social-service') ? $('#social-service').checked : false;
  const noExpOnly = $('#no-experience') ? $('#no-experience').checked : false;
  const sort = $('#sort') ? $('#sort').value : 'date';

  return getAllActivities().filter(a => {
    // Category filter
    if (activeCategory !== 'Todas' && a.category !== activeCategory) return false;

    // Search query
    if (query) {
      const matchText = normalizeStr(`${a.title} ${a.org} ${a.category} ${a.city} ${a.description} ${a.address}`);
      if (!matchText.includes(query)) return false;
    }

    // City
    if (city && a.city !== city) return false;

    // Mode
    if (mode && a.mode !== mode) return false;

    // Duration
    if (duration) {
      if (duration === 'short' && a.hours > 3) return false;
      if (duration === 'medium' && (a.hours < 4 || a.hours > 5)) return false;
      if (duration === 'long' && a.hours < 6) return false;
    }

    // Weekend
    if (weekendOnly) {
      const day = new Date(`${a.date}T12:00:00Z`).getUTCDay();
      if (day !== 0 && day !== 6) return false;
    }

    // Social Service
    if (socialServiceOnly && !a.socialServiceValid) return false;

    return true;
  }).sort((a, b) => {
    if (sort === 'hours') return a.hours - b.hours;
    if (sort === 'spots') return (b.spotsTotal - b.spotsFilled) - (a.spotsTotal - a.spotsFilled);
    if (sort === 'impact') return b.hours * b.spotsTotal - a.hours * a.spotsTotal;
    return a.date.localeCompare(b.date) || a.time.localeCompare(b.time);
  });
}

// Render Category Pills
function renderCategoryPills() {
  const container = $('#categories');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const isActive = cat === activeCategory;
    return `
      <button class="category-btn${isActive ? ' active' : ''}" type="button" data-category="${esc(cat)}" aria-pressed="${isActive}">
        ${icon(CATEGORY_ICONS[cat] || 'sparkle')}
        <span>${esc(cat)}</span>
      </button>
    `;
  }).join('');
}

// Render Single Opportunity Card HTML
function renderCardHTML(activity) {
  const saved = isSaved(activity.id);
  const applied = isApplied(activity.id);
  const spotsLeft = Math.max(0, activity.spotsTotal - activity.spotsFilled);
  const percentFilled = Math.min(100, Math.round((activity.spotsFilled / activity.spotsTotal) * 100));

  return `
    <article class="opportunity-card" data-id="${esc(activity.id)}">
      <div class="card-visual">
        ${renderArt(activity.artType, activity.category)}
        <span class="visual-category-badge">${esc(activity.category)}</span>
        <button class="save-btn" data-save="${esc(activity.id)}" type="button" aria-pressed="${saved}" aria-label="${saved ? 'Quitar de guardados' : 'Guardar actividad'}">
          ${icon('heart')}
        </button>
      </div>

      <div class="card-content">
        <div class="card-org-row">
          <span class="verified-icon">${icon('check-circle')}</span>
          <span>${esc(activity.org)}</span>
        </div>

        <h3 class="card-title">
          <button type="button" data-open="${esc(activity.id)}">${esc(activity.title)}</button>
        </h3>

        <div class="card-info-item">
          ${icon(activity.mode === 'En línea' ? 'monitor' : 'pin')}
          <span>${esc(activity.city)} · ${esc(activity.mode)}</span>
        </div>

        <div class="card-info-item">
          ${icon('calendar')}
          <span>${formatDate(activity.date)} · ${esc(activity.time)} h</span>
        </div>

        <!-- Spots Meter -->
        <div class="spots-meter-box">
          <div class="meter-label-row">
            <span class="meter-spots-left">${spotsLeft} lugares disponibles</span>
            <span class="meter-spots-total">${activity.spotsFilled}/${activity.spotsTotal} cubiertos</span>
          </div>
          <div class="meter-track">
            <div class="meter-fill" style="width: ${percentFilled}%;"></div>
          </div>
        </div>

        <div class="card-footer">
          <span class="duration-pill">${icon('clock')} ${activity.hours}h de servicio</span>
          <button class="card-apply-link" type="button" data-open="${esc(activity.id)}">
            ${applied ? 'Ver mi pase ✓' : 'Ver y sumarme →'}
          </button>
        </div>
      </div>
    </article>
  `;
}

// Render Explore Grid
function renderExploreGrid() {
  const grid = $('#opportunity-grid');
  if (!grid) return;

  const activities = getFilteredActivities();
  const countEl = $('#results-count');
  if (countEl) {
    countEl.textContent = `${activities.length} ${activities.length === 1 ? 'causa disponible para sumar' : 'causas disponibles para sumar'}`;
  }

  if (activities.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${icon('search')}</div>
        <h3>No encontramos actividades con estos filtros</h3>
        <p>Intenta buscando con otros términos, seleccionando "Todas las causas" o limpiando los filtros de duración y modalidad.</p>
        <button class="button primary" id="empty-clear-btn" type="button">Restablecer filtros</button>
      </div>
    `;
    const clearBtn = $('#empty-clear-btn');
    if (clearBtn) clearBtn.addEventListener('click', resetFilters);
    return;
  }

  grid.innerHTML = activities.map(renderCardHTML).join('');
}

// --- LEAFLET MAP ENGINE ---
let exploreMapInstance = null;
let fullMapInstance = null;
let exploreMarkersLayer = null;
let fullMarkersLayer = null;
let exploreMapMarkers = {};
let fullMapMarkers = {};

const CITY_PRESETS = {
  mexico: { center: [23.6345, -102.5528], zoom: 5 },
  monterrey: { center: [25.6650, -100.3500], zoom: 11 },
  cdmx: { center: [19.4100, -99.1100], zoom: 12 },
  guadalajara: { center: [20.6900, -103.3700], zoom: 12 },
  'puebla-oaxaca': { center: [18.0000, -97.5000], zoom: 7 },
  'latam-eu': { center: [18.0000, -45.0000], zoom: 3 }
};

const CATEGORY_COLORS = {
  'Medio Ambiente': '#1fa463',
  'Comunidad y Alimentos': '#f59e0b',
  'Educación y Mentoría': '#3b82f6',
  'Bienestar Animal': '#8b5cf6',
  'Salud & Bienestar': '#ef4444',
  'Arte, Cultura & Espacios': '#f97316',
  'Tecnología & Inclusión': '#06b6d4'
};

const CATEGORY_EMOJIS = {
  'Medio Ambiente': '🌿',
  'Comunidad y Alimentos': '🍲',
  'Educación y Mentoría': '📚',
  'Bienestar Animal': '🐾',
  'Salud & Bienestar': '🏥',
  'Arte, Cultura & Espacios': '🎨',
  'Tecnología & Inclusión': '💻'
};

function createCustomMarkerIcon(category) {
  const color = CATEGORY_COLORS[category] || '#1fa463';
  const emoji = CATEGORY_EMOJIS[category] || '✳';
  return L.divIcon({
    className: 'custom-map-marker',
    html: `
      <div class="map-marker-pin" style="background: ${color};">
        <span class="marker-icon">${emoji}</span>
      </div>
      <div class="marker-pulse" style="background: ${color};"></div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  });
}

function createPopupHTML(activity) {
  const spotsLeft = Math.max(0, activity.spotsTotal - activity.spotsFilled);
  return `
    <div class="map-popup-card">
      <span class="map-popup-badge">${esc(activity.category)}</span>
      <div class="map-popup-title">${esc(activity.title)}</div>
      <div class="map-popup-org">${esc(activity.org)} · ${esc(activity.city)}</div>
      <div class="map-popup-meta">
        <span>📅 <strong>${formatDate(activity.date)}</strong> · ${esc(activity.time)} h</span>
        <span>⏱️ <strong>${activity.hours} horas</strong> de servicio</span>
        <span>📍 ${esc(activity.address)}</span>
        <span>👥 Quedan ${spotsLeft} de ${activity.spotsTotal} lugares</span>
      </div>
      <button class="button small-button primary full" type="button" data-open="${esc(activity.id)}">
        Ver Detalles y Postularme →
      </button>
    </div>
  `;
}

function renderMapSidebar(activities) {
  const listEl = $('#map-sidebar-list');
  const countEl = $('#map-sidebar-count');
  if (!listEl) return;

  const validActivities = activities.filter(a => a.mode !== 'En línea' && Number.isFinite(a.lat));
  if (countEl) countEl.textContent = validActivities.length;

  if (validActivities.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state" style="padding: 20px;">
        <p style="font-size: 13px;">No hay causas presenciales registradas en esta selección.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = validActivities.map(a => `
    <div class="map-sidebar-card" data-focus-act="${esc(a.id)}">
      <span class="map-sidebar-card-org">${esc(a.category)} · ${esc(a.org)}</span>
      <h4>${esc(a.title)}</h4>
      <div class="map-sidebar-card-meta">
        <span>📍 ${esc(a.city.split(',')[0])}</span>
        <span>📅 ${formatDate(a.date)}</span>
        <span>⏰ ${a.hours}h</span>
      </div>
    </div>
  `).join('');
}

function initOrUpdateMap(containerId, isExplore = false) {
  const container = $(`#${containerId}`);
  if (!container) return;

  const activities = getAllActivities().filter(a => Number.isFinite(a.lat) && Number.isFinite(a.lng));

  // Check if Leaflet L is available
  if (typeof L === 'undefined') {
    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--bg-subtle);color:var(--text-muted);padding:24px;text-align:center;">
        <div>
          <p style="font-size:16px;font-weight:700;margin-bottom:8px;">🗺️ Inicializando mapa interactivo...</p>
          <p style="font-size:13px;">Si los mapas no cargan de inmediato, verifica tu conexión a internet o explora en la vista de tarjetas.</p>
        </div>
      </div>
    `;
    return;
  }

  if (isExplore) {
    if (!exploreMapInstance) {
      exploreMapInstance = L.map(containerId, {
        center: [23.6345, -102.5528],
        zoom: 5,
        scrollWheelZoom: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(exploreMapInstance);

      exploreMarkersLayer = L.layerGroup().addTo(exploreMapInstance);
    }

    if (exploreMarkersLayer) {
      exploreMarkersLayer.clearLayers();
      exploreMapMarkers = {};
      activities.forEach(a => {
        const marker = L.marker([a.lat, a.lng], { icon: createCustomMarkerIcon(a.category) });
        marker.bindPopup(createPopupHTML(a));
        exploreMarkersLayer.addLayer(marker);
        exploreMapMarkers[a.id] = marker;
      });
    }

    setTimeout(() => {
      if (exploreMapInstance) exploreMapInstance.invalidateSize();
    }, 120);
    setTimeout(() => {
      if (exploreMapInstance) exploreMapInstance.invalidateSize();
    }, 350);

  } else {
    // Full map in #map-view
    if (!fullMapInstance) {
      fullMapInstance = L.map(containerId, {
        center: [23.6345, -102.5528],
        zoom: 5,
        scrollWheelZoom: true
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(fullMapInstance);

      fullMarkersLayer = L.layerGroup().addTo(fullMapInstance);
    }

    if (fullMarkersLayer) {
      fullMarkersLayer.clearLayers();
      fullMapMarkers = {};
      activities.forEach(a => {
        const marker = L.marker([a.lat, a.lng], { icon: createCustomMarkerIcon(a.category) });
        marker.bindPopup(createPopupHTML(a));

        marker.on('click', () => {
          $$('.map-sidebar-card').forEach(c => c.classList.toggle('selected', c.dataset.focusAct === a.id));
          const targetCard = $(`[data-focus-act="${a.id}"]`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        });

        fullMarkersLayer.addLayer(marker);
        fullMapMarkers[a.id] = marker;
      });
    }

    renderMapSidebar(activities);

    setTimeout(() => {
      if (fullMapInstance) fullMapInstance.invalidateSize();
    }, 120);
    setTimeout(() => {
      if (fullMapInstance) fullMapInstance.invalidateSize();
    }, 350);
  }
}

function renderMapView() {
  if (activeView === 'mapa') {
    setTimeout(() => {
      initOrUpdateMap('full-interactive-map', false);
      if (fullMapInstance) fullMapInstance.invalidateSize();
    }, 100);
  } else {
    const mapContainer = $('#map-view-container');
    if (mapContainer && !mapContainer.hidden) {
      setTimeout(() => {
        initOrUpdateMap('interactive-map', true);
        if (exploreMapInstance) exploreMapInstance.invalidateSize();
      }, 100);
    }
  }
}

// Render Calendar View
function renderCalendarView() {
  const container = $('#calendar-events-list');
  if (!container) return;

  const activities = getAllActivities().sort((a, b) => a.date.localeCompare(b.date));

  // Group by date
  const groups = {};
  activities.forEach(a => {
    if (!groups[a.date]) groups[a.date] = [];
    groups[a.date].push(a);
  });

  container.innerHTML = Object.keys(groups).slice(0, 8).map(dateKey => {
    const list = groups[dateKey];
    return `
      <div class="calendar-day-card">
        <span class="cal-date-badge">${formatDate(dateKey)}</span>
        ${list.map(item => `
          <div style="margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-subtle);">
            <div class="cal-event-title">${esc(item.title)}</div>
            <div class="cal-event-meta">${esc(item.city)} · ${esc(item.time)} h (${item.hours}h)</div>
            <button class="button small-button primary" type="button" data-open="${esc(item.id)}">Ver jornada →</button>
          </div>
        `).join('')}
      </div>
    `;
  }).join('');
}

// Render Saved Activities View
function renderSavedView() {
  const grid = $('#saved-grid');
  const countBadge = $('#saved-count');
  const summaryBox = $('#saved-summary-card');
  const savedActivities = getAllActivities().filter(a => state.saved.includes(a.id));

  if (countBadge) {
    countBadge.textContent = savedActivities.length;
    countBadge.hidden = savedActivities.length === 0;
  }

  if (summaryBox) {
    const totalHours = savedActivities.reduce((sum, a) => sum + a.hours, 0);
    summaryBox.innerHTML = `
      <div class="saved-summary-box" style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 20px 24px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
        <div>
          <h3 style="margin-bottom: 4px; font-size: 18px;">Tienes ${savedActivities.length} actividades guardadas</h3>
          <p style="margin: 0; font-size: 13px; color: var(--text-muted);">Representan un potencial de <strong>${totalHours} horas</strong> de voluntariado e impacto social directo.</p>
        </div>
        ${savedActivities.length > 0 ? `
          <button class="button primary small-button" id="apply-first-saved-btn" type="button" data-open="${esc(savedActivities[0].id)}">
            Comenzar con la primera causa →
          </button>
        ` : ''}
      </div>
    `;
  }

  if (!grid) return;

  if (savedActivities.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${icon('heart')}</div>
        <h3>Tu lista de guardados está vacía</h3>
        <p>Haz clic en el corazón de cualquier causa que te inspire para tenerla a mano y postularte cuando desees.</p>
        <a href="#explorar" class="button primary">Explorar voluntariados</a>
      </div>
    `;
    return;
  }

  grid.innerHTML = savedActivities.map(renderCardHTML).join('');
}

// Render Volunteer Dashboard ("Mi Camino")
function renderActivityDashboard() {
  const list = $('#activity-list');
  const activeCountEl = $('#dash-active-count');
  const totalHoursEl = $('#dash-total-hours');
  const totalCausesEl = $('#dash-total-causes');
  const totalCompletedEl = $('#dash-completed-missions');
  const headerHoursBadge = $('#header-hours-badge');
  const headerVolunteerName = $('#header-volunteer-name');
  const headerAvatar = $('#header-avatar');
  const idHoursStat = $('#id-hours-stat');
  const idVolunteerName = $('#id-volunteer-name');
  const idVolunteerInst = $('#id-volunteer-inst');
  const idCardQr = $('#id-card-qr');

  // Update volunteer user info in header and card
  if (headerVolunteerName) headerVolunteerName.textContent = state.user.name.split(' ')[0];
  if (headerAvatar) headerAvatar.textContent = state.user.avatar;
  if ($('#dash-name')) $('#dash-name').textContent = state.user.name;
  if ($('#dash-institution')) $('#dash-institution').textContent = `${state.user.school} · ${state.user.city}`;
  if ($('#dash-avatar')) $('#dash-avatar').textContent = state.user.avatar;
  if ($('#id-avatar')) $('#id-avatar').textContent = state.user.avatar;
  if (idVolunteerName) idVolunteerName.textContent = state.user.name;
  if (idVolunteerInst) idVolunteerInst.textContent = state.user.school;

  const validApps = state.applications
    .map(app => ({ ...app, activity: getActivityById(app.activityId) }))
    .filter(app => app.activity);

  if (activeCountEl) activeCountEl.textContent = validApps.length;

  // Calculate hours
  const totalHours = validApps.reduce((acc, cur) => acc + (cur.activity ? cur.activity.hours : 0), 0);
  if (totalHoursEl) totalHoursEl.textContent = `${totalHours} h`;
  if (headerHoursBadge) headerHoursBadge.textContent = `${totalHours}h`;
  if (idHoursStat) idHoursStat.textContent = `${totalHours} HORAS`;
  if (totalCausesEl) totalCausesEl.textContent = validApps.length;
  if (totalCompletedEl) totalCompletedEl.textContent = Math.max(1, validApps.length - 1);

  if (idCardQr) idCardQr.innerHTML = renderQRCodeSVG(`SUMA-VOL-${state.user.name}`);

  if (!list) return;

  if (validApps.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${icon('compass')}</div>
        <h3>Aún no te has postulado a ninguna jornada</h3>
        <p>Explora las causas activas en tu ciudad o en línea, postúlate en un clic y comienza a registrar tus horas oficiales de voluntariado.</p>
        <a href="#explorar" class="button primary">Ver causas disponibles</a>
      </div>
    `;
    return;
  }

  list.innerHTML = validApps.map(app => {
    const act = app.activity;
    return `
      <article class="activity-row" data-app-id="${esc(app.id)}">
        <div class="activity-art">
          ${renderArt(act.artType, act.category)}
        </div>
        <div class="activity-details">
          <div class="activity-status-row">
            <span class="status-pill ${app.status === 'confirmada' ? 'confirmed' : 'pending'}">
              ${app.status === 'confirmada' ? 'POSTULACIÓN CONFIRMADA ✓' : 'EN REVISIÓN'}
            </span>
            <small style="color: var(--text-quiet); font-size: 11px;">Folio: ${esc(app.folio)}</small>
          </div>
          <h3>${esc(act.title)}</h3>
          <div class="activity-meta">
            <span>${icon('calendar')} ${formatDate(act.date)} · ${esc(act.time)} h</span>
            <span>${icon('clock')} ${act.hours} horas</span>
            <span>${icon('pin')} ${esc(act.city)}</span>
          </div>
          <p style="font-size: 12px; color: var(--text-muted); margin: 6px 0 0;">
            ${esc(act.org)} · Punto de encuentro: ${esc(act.address)}
          </p>
        </div>
        <div class="activity-actions">
          <button class="button small-button primary" type="button" data-view-pass="${esc(app.id)}">
            ${icon('check-circle')} Ver mi Pase Digital
          </button>
          <a class="button small-button secondary" href="https://wa.me/${act.coordinatorPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola, soy ${state.user.name}, voluntario registrado para ${act.title}.`)}" target="_blank" rel="noopener noreferrer">
            ${icon('message-circle')} WhatsApp Coordinador
          </a>
          <button class="text-button" type="button" data-cancel-app="${esc(app.id)}" style="color: var(--brand-coral); justify-content: center;">
            Cancelar postulación
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Render Published Activities (NGO view)
function renderPublishedActivities() {
  const grid = $('#published-grid');
  if (!grid) return;

  if (state.published.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${icon('building')}</div>
        <h3>Aún no has publicado convocatorias con tu organización</h3>
        <p>Crea tu primera oportunidad de voluntariado para conectar con cientos de personas dispuestas a ayudar en tu causa.</p>
        <button class="button primary" id="empty-publish-btn" type="button">Publicar primera causa</button>
      </div>
    `;
    const btn = $('#empty-publish-btn');
    if (btn) btn.addEventListener('click', openPublishModal);
    return;
  }

  grid.innerHTML = state.published.map(activity => {
    // Count applicants for this published activity
    const applicants = state.applications.filter(a => a.activityId === activity.id);

    return `
      <div class="published-card-wrapper" style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        ${renderCardHTML(activity)}
        <div style="padding: 14px 20px; background: var(--bg-subtle); border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 10px;">
          <span style="font-size: 12px; font-weight: 700; color: var(--brand-emerald);">
            ${applicants.length} voluntario(s) inscrito(s)
          </span>
          <div style="display: flex; gap: 8px;">
            <button class="button small-button primary" type="button" data-manage-applicants="${esc(activity.id)}">
              Gestionar Asistencia
            </button>
            <button class="button small-button secondary" type="button" data-delete-published="${esc(activity.id)}" style="color: var(--brand-coral);">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render All Views
function renderAll() {
  renderCategoryPills();
  renderExploreGrid();
  renderCalendarView();
  renderSavedView();
  renderActivityDashboard();
  renderPublishedActivities();
}

// --- 8. DIALOG HANDLERS & MODAL MANAGEMENT ---
function showModal(id) {
  const dialog = $(`#${id}`);
  if (!dialog) return;
  $$('dialog[open]').forEach(d => d.close());
  dialog.showModal();
}

function closeModal(id) {
  const dialog = $(`#${id}`);
  if (dialog && dialog.open) dialog.close();
}

// Open Detail Dialog
function openDetailModal(id) {
  const activity = getActivityById(id);
  if (!activity) return;

  currentDetailActivity = activity;
  const content = $('#detail-content');
  if (!content) return;

  const saved = isSaved(activity.id);
  const applied = isApplied(activity.id);
  const spotsLeft = Math.max(0, activity.spotsTotal - activity.spotsFilled);

  content.innerHTML = `
    <div class="detail-header-panel">
      <div class="detail-cover-visual">
        ${renderArt(activity.artType, activity.category)}
      </div>
      <div class="detail-quick-meta">
        <span class="pill soft" style="align-self: flex-start; margin-bottom: 8px;">
          ${esc(activity.category)} · ORGANIZACIÓN VERIFICADA ✓
        </span>
        <h2 id="detail-title" style="font-size: 26px; line-height: 1.25; margin-bottom: 8px;">
          ${esc(activity.title)}
        </h2>
        <div style="font-size: 13px; font-weight: 600; color: var(--brand-emerald); margin-bottom: 14px;">
          ${esc(activity.org)}
        </div>
        <p style="font-size: 13px; color: var(--text-muted); margin: 0;">
          ${esc(activity.description)}
        </p>
      </div>
    </div>

    <!-- Key Facts Grid -->
    <div class="detail-meta-grid">
      <div class="detail-meta-item">
        ${icon('calendar')}
        <div>
          <strong>${formatDate(activity.date)} · ${esc(activity.time)} h</strong>
          <small style="display: block; color: var(--text-quiet);">Puntualidad solicitada</small>
        </div>
      </div>
      <div class="detail-meta-item">
        ${icon('clock')}
        <div>
          <strong>${activity.hours} horas acreditables</strong>
          <small style="display: block; color: var(--text-quiet);">Servicio social válido</small>
        </div>
      </div>
      <div class="detail-meta-item">
        ${icon('pin')}
        <div>
          <strong>${esc(activity.city)}</strong>
          <small style="display: block; color: var(--text-quiet);">${esc(activity.address)}</small>
        </div>
      </div>
      <div class="detail-meta-item">
        ${icon('people')}
        <div>
          <strong>${spotsLeft} lugares disponibles</strong>
          <small style="display: block; color: var(--text-quiet);">${activity.spotsFilled} ya confirmados</small>
        </div>
      </div>
    </div>

    <!-- Day Schedule Timeline -->
    <h3 class="detail-section-title">Cronograma del día</h3>
    <ul class="timeline-list">
      ${(activity.schedule || []).map(item => `
        <li class="timeline-item">
          <span class="timeline-time">${esc(item.time)} h</span>
          <span>${esc(item.text)}</span>
        </li>
      `).join('')}
    </ul>

    <!-- What's Included -->
    <h3 class="detail-section-title">¿Qué incluye la jornada?</h3>
    <div class="included-list">
      <div class="included-item">${icon('check-circle')} Seguro de accidentes incluido</div>
      <div class="included-item">${icon('check-circle')} Constancia digital con código QR</div>
      <div class="included-item">${icon('check-circle')} Herramientas y equipo de trabajo</div>
      <div class="included-item">${icon('check-circle')} Hidratación y refrigerio</div>
    </div>

    <!-- What to Bring -->
    <h3 class="detail-section-title">¿Qué debes llevar?</h3>
    <p class="detail-text">${esc(activity.requirements)}</p>

    <!-- Coordinator Card -->
    <div class="coordinator-card">
      <div class="coord-info">
        <div class="coord-avatar">${(activity.coordinator || 'Coord')[0]}</div>
        <div>
          <strong style="font-size: 13px;">${esc(activity.coordinator || 'Coordinador')}</strong>
          <small style="display: block; color: var(--text-quiet);">Responsable de campo de la ONG</small>
        </div>
      </div>
      <a class="button small-button secondary" href="https://wa.me/${(activity.coordinatorPhone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola, tengo una pregunta sobre ${activity.title}`)}" target="_blank" rel="noopener noreferrer">
        ${icon('message-circle')} WhatsApp
      </a>
    </div>

    <!-- Action Bar -->
    <div style="display: flex; gap: 12px; margin-top: 24px;">
      <button class="button primary" style="flex: 1;" type="button" data-start-apply="${esc(activity.id)}">
        ${applied ? 'Ya estás postulado · Ver Pase Digital' : 'Postularme a esta jornada →'}
      </button>
      <button class="button secondary" type="button" data-save="${esc(activity.id)}" aria-pressed="${saved}">
        ${icon('heart')} ${saved ? 'Guardada' : 'Guardar'}
      </button>
    </div>
  `;

  showModal('detail-dialog');
}

// Open Application Form Modal
function openApplyModal(id) {
  const activity = getActivityById(id);
  if (!activity) return;

  // If already applied, directly open the pass modal!
  const existingApp = state.applications.find(a => a.activityId === id);
  if (existingApp) {
    closeModal('detail-dialog');
    openPassModal(existingApp.id);
    return;
  }

  currentDetailActivity = activity;
  $('#apply-activity-name').textContent = `${activity.title} · ${formatDate(activity.date)} (${activity.hours}h)`;

  // Autofill user details
  $('#applicant-name').value = state.user.name;
  $('#applicant-email').value = state.user.email;
  $('#applicant-school').value = state.user.school;

  closeModal('detail-dialog');
  showModal('apply-dialog');
}

// Open Pass Modal
function openPassModal(appId) {
  const app = state.applications.find(a => a.id === appId);
  if (!app) return;

  const activity = getActivityById(app.activityId);
  if (!activity) return;

  currentPassApplication = app;
  const container = $('#ticket-card-content');
  if (!container) return;

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
      <div>
        <div class="ticket-folio">PASE OFICIAL DE VOLUNTARIO · ${esc(app.folio)}</div>
        <div class="ticket-title">${esc(activity.title)}</div>
        <div style="font-size: 13px; color: #a1eacb; font-weight: 600;">${esc(activity.org)}</div>
      </div>
      <div style="background: #ffffff; padding: 6px; border-radius: 8px;">
        ${renderQRCodeSVG(app.folio)}
      </div>
    </div>

    <div class="ticket-info-grid">
      <div>
        <small style="opacity: 0.8; display: block;">VOLUNTARIO/A</small>
        <strong>${esc(app.applicantName)}</strong>
      </div>
      <div>
        <small style="opacity: 0.8; display: block;">FECHA Y HORA</small>
        <strong>${formatDate(activity.date)} · ${esc(activity.time)} h</strong>
      </div>
      <div>
        <small style="opacity: 0.8; display: block;">PUNTO DE ENCUENTRO</small>
        <strong>${esc(activity.address)}</strong>
      </div>
      <div>
        <small style="opacity: 0.8; display: block;">TIEMPO ACREDITADO</small>
        <strong>${activity.hours} Horas de Servicio</strong>
      </div>
    </div>
  `;

  // Setup buttons in pass modal
  const calendarBtn = $('#ticket-calendar-btn');
  if (calendarBtn) {
    const title = encodeURIComponent(`Voluntariado SUMA: ${activity.title}`);
    const details = encodeURIComponent(`Organizado por: ${activity.org}\nPunto de encuentro: ${activity.address}\nFolio: ${app.folio}`);
    const locationStr = encodeURIComponent(activity.address);
    const dateFormatted = activity.date.replace(/-/g, '');
    calendarBtn.onclick = () => {
      window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${locationStr}&dates=${dateFormatted}T090000Z/${dateFormatted}T130000Z`, '_blank');
    };
  }

  const whatsappBtn = $('#ticket-whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.onclick = () => {
      const text = encodeURIComponent(`Hola, soy ${app.applicantName}. Tengo mi pase para la actividad "${activity.title}" (Folio: ${app.folio}). ¡Confirmando mi asistencia!`);
      window.open(`https://wa.me/${activity.coordinatorPhone.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    };
  }

  const printBtn = $('#ticket-print-btn');
  if (printBtn) {
    printBtn.onclick = () => window.print();
  }

  showModal('pass-dialog');
}

// Open Official Full Certificate Modal
function openOfficialCertificate() {
  const validApps = state.applications
    .map(app => ({ ...app, activity: getActivityById(app.activityId) }))
    .filter(app => app.activity);

  const totalHours = validApps.reduce((sum, a) => sum + (a.activity ? a.activity.hours : 0), 0) || 12;

  $('#cert-full-name').textContent = state.user.name;
  $('#cert-total-hours').textContent = totalHours;
  $('#cert-institution-label').innerHTML = `Institución Educativa: <strong>${esc(state.user.school)}</strong>`;
  $('#cert-security-folio').textContent = `SUMA-MX-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  const breakdownContainer = $('#cert-activities-breakdown');
  if (breakdownContainer) {
    breakdownContainer.innerHTML = `
      <div style="font-weight: 700; margin-bottom: 6px;">DESGLOSE DE ACTIVIDADES REALIZADAS:</div>
      ${validApps.map(a => `
        <div style="display: flex; justify-content: space-between; padding: 3px 0; border-bottom: 1px dashed #e2e8de;">
          <span>• ${esc(a.activity.title)} (${esc(a.activity.org)})</span>
          <strong>${a.activity.hours} horas</strong>
        </div>
      `).join('')}
    `;
  }

  const qrBox = $('#cert-qr-target');
  if (qrBox) {
    qrBox.innerHTML = renderQRCodeSVG(`CERT-${state.user.name}-${totalHours}H`);
  }

  showModal('certificate-dialog');
}

// Open Organization Publish Modal
function openPublishModal() {
  const form = $('#publish-form');
  if (form) form.reset();

  const dateInput = $('#publish-date');
  if (dateInput) {
    dateInput.min = new Date().toISOString().slice(0, 10);
    dateInput.value = getNextDayOfWeek(6, 1);
  }

  showModal('publish-dialog');
}

// Open Manage Applicants Modal (for NGOs)
function openManageApplicantsModal(activityId) {
  const activity = getActivityById(activityId);
  if (!activity) return;

  const applicants = state.applications.filter(a => a.activityId === activityId);
  $('#manage-title').textContent = `Postulantes para: ${activity.title}`;
  $('#manage-subtitle').textContent = `${applicants.length} voluntario(s) inscrito(s) para la jornada del ${formatDate(activity.date)}.`;

  const container = $('#applicants-list-container');
  if (!container) return;

  if (applicants.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 24px;">
        <p>Aún no hay postulaciones para esta actividad. En cuanto los voluntarios se postulen, aparecerán aquí.</p>
      </div>
    `;
  } else {
    container.innerHTML = applicants.map(app => `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div>
          <strong style="font-size: 15px;">${esc(app.applicantName)}</strong>
          <div style="font-size: 12px; color: var(--text-muted);">${esc(app.applicantEmail)} · ${esc(app.applicantPhone)}</div>
          <div style="font-size: 11px; color: var(--brand-emerald); margin-top: 4px;">${esc(app.applicantSchool)}</div>
          ${app.motivation ? `<p style="font-size: 12px; font-style: italic; margin: 6px 0 0; color: var(--text-muted);">"${esc(app.motivation)}"</p>` : ''}
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="status-pill confirmed">Confirmado</span>
          <a class="button small-button secondary" href="https://wa.me/${app.applicantPhone.replace(/[^0-9]/g, '')}" target="_blank">
            ${icon('message-circle')} WhatsApp
          </a>
        </div>
      </div>
    `).join('');
  }

  showModal('manage-applicants-dialog');
}

// Toggle Bookmark
function toggleSave(id) {
  const exists = state.saved.includes(id);
  if (exists) {
    state.saved = state.saved.filter(x => x !== id);
    showToast('Causa eliminada de tus guardados.');
  } else {
    state.saved.push(id);
    showToast('¡Causa guardada con éxito! La encontrarás en Guardados.');
  }
  persistState();
  renderAll();

  // If detail modal is open for this activity, update heart button
  if ($('#detail-dialog').open && currentDetailActivity && currentDetailActivity.id === id) {
    openDetailModal(id);
  }
}

// Reset all search & category filters
function resetFilters() {
  activeCategory = 'Todas';
  if ($('#query')) $('#query').value = '';
  if ($('#city')) $('#city').value = '';
  if ($('#mode')) $('#mode').value = '';
  if ($('#duration')) $('#duration').value = '';
  if ($('#weekend')) $('#weekend').checked = false;
  if ($('#social-service')) $('#social-service').checked = false;
  if ($('#no-experience')) $('#no-experience').checked = false;
  renderAll();
  showToast('Filtros restablecidos.');
}

// --- 9. ROUTING (Hash-based) ---
function handleRouting() {
  const hash = location.hash.slice(1).toLowerCase() || 'explorar';
  const allowed = ['explorar', 'guardados', 'actividad', 'organizaciones'];
  activeView = allowed.includes(hash) ? hash : 'explorar';

  // If user navigated to #mapa, redirect hash to #explorar
  if (hash === 'mapa') {
    location.hash = '#explorar';
    return;
  }

  // Toggle view visibility
  $$('[data-view]').forEach(section => {
    section.hidden = section.dataset.view !== activeView;
  });

  // Toggle nav link active states
  $$('[data-nav]').forEach(link => {
    const isCurrent = link.dataset.nav === activeView;
    link.classList.toggle('active', isCurrent);
    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'auto' });

  // Mobile menu close
  const nav = $('#main-nav');
  renderAll();
}

// --- 10. EVENT LISTENERS & INITIALIZATION ---
function initEventListeners() {
  // Global click delegator
  document.addEventListener('click', event => {
    const target = event.target;

    // Close buttons for modals
    const closeBtn = target.closest('[data-close]');
    if (closeBtn) {
      closeModal(closeBtn.dataset.close);
      return;
    }

    // Save/Bookmark button
    const saveBtn = target.closest('[data-save]');
    if (saveBtn) {
      event.preventDefault();
      toggleSave(saveBtn.dataset.save);
      return;
    }

    // Open detail modal
    const openBtn = target.closest('[data-open]');
    if (openBtn) {
      event.preventDefault();
      openDetailModal(openBtn.dataset.open);
      return;
    }

    // Start apply from detail modal
    const startApplyBtn = target.closest('[data-start-apply]');
    if (startApplyBtn) {
      event.preventDefault();
      openApplyModal(startApplyBtn.dataset.startApply);
      return;
    }

    // View pass button from activity list
    const viewPassBtn = target.closest('[data-view-pass]');
    if (viewPassBtn) {
      event.preventDefault();
      openPassModal(viewPassBtn.dataset.viewPass);
      return;
    }

    // Cancel application button
    const cancelAppBtn = target.closest('[data-cancel-app]');
    if (cancelAppBtn) {
      event.preventDefault();
      const appId = cancelAppBtn.dataset.cancelApp;
      if (confirm('¿Estás seguro de que deseas cancelar tu postulación a esta jornada?')) {
        state.applications = state.applications.filter(a => a.id !== appId);
        persistState();
        renderAll();
        showToast('Postulación cancelada.');
      }
      return;
    }

    // Category button
    const catBtn = target.closest('[data-category]');
    if (catBtn) {
      event.preventDefault();
      activeCategory = catBtn.dataset.category;
      renderCategoryPills();
      renderExploreGrid();
      return;
    }

    // View mode switcher button (grid / calendar)
    const viewBtn = target.closest('[data-view-mode]');
    if (viewBtn) {
      event.preventDefault();
      const mode = viewBtn.dataset.viewMode;
      $$('[data-view-mode]').forEach(b => b.classList.toggle('active', b === viewBtn));
      
      const grid = $('#opportunity-grid');
      const cal = $('#calendar-view-container');

      if (grid) grid.hidden = mode !== 'grid';
      if (cal) cal.hidden = mode !== 'calendar';

      if (mode === 'calendar') {
        renderCalendarView();
      }
      return;
    }

    // Manage applicants for NGO
    const manageBtn = target.closest('[data-manage-applicants]');
    if (manageBtn) {
      event.preventDefault();
      openManageApplicantsModal(manageBtn.dataset.manageApplicants);
      return;
    }

    // Delete published activity for NGO
    const delPubBtn = target.closest('[data-delete-published]');
    if (delPubBtn) {
      event.preventDefault();
      const id = delPubBtn.dataset.deletePublished;
      if (confirm('¿Deseas eliminar esta convocatoria de voluntariado?')) {
        state.published = state.published.filter(a => a.id !== id);
        persistState();
        renderAll();
        showToast('Convocatoria eliminada.');
      }
      return;
    }
  });

  // Search input & form
  const searchForm = $('#search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      renderExploreGrid();
      const heading = $('#results-heading');
      if (heading) heading.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const queryInput = $('#query');
  if (queryInput) queryInput.addEventListener('input', renderExploreGrid);

  const citySelect = $('#city');
  if (citySelect) citySelect.addEventListener('change', renderExploreGrid);

  const sortSelect = $('#sort');
  if (sortSelect) sortSelect.addEventListener('change', renderExploreGrid);

  ['duration', 'mode', 'weekend', 'social-service', 'no-experience'].forEach(id => {
    const el = $(`#${id}`);
    if (el) el.addEventListener('change', renderExploreGrid);
  });

  // Filter toggle button
  const filterToggle = $('#filter-toggle');
  const moreFilters = $('#more-filters');
  if (filterToggle && moreFilters) {
    filterToggle.addEventListener('click', () => {
      const isExpanded = filterToggle.getAttribute('aria-expanded') === 'true';
      filterToggle.setAttribute('aria-expanded', String(!isExpanded));
      moreFilters.hidden = isExpanded;
    });
  }

  // Clear filters
  const clearFiltersBtn = $('#clear-filters');
  if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', resetFilters);

  // Application form submit
  const applyForm = $('#apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!currentDetailActivity) return;

      const newApp = {
        id: `app-${Date.now()}`,
        activityId: currentDetailActivity.id,
        applicantName: $('#applicant-name').value.trim(),
        applicantEmail: $('#applicant-email').value.trim(),
        applicantPhone: $('#applicant-phone').value.trim(),
        applicantSchool: $('#applicant-school').value.trim() || 'Voluntario Comunitario',
        socialService: $('#applicant-social-service').value,
        motivation: $('#motivation').value.trim(),
        medical: $('#applicant-medical').value.trim() || 'Ninguna',
        status: 'confirmada',
        folio: `SUMA-VOL-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        createdAt: new Date().toISOString()
      };

      // Update user info
      state.user.name = newApp.applicantName;
      state.user.email = newApp.applicantEmail;
      state.user.school = newApp.applicantSchool;
      state.user.avatar = newApp.applicantName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

      state.applications.unshift(newApp);
      persistState();

      closeModal('apply-dialog');
      renderAll();

      // Launch festive celebration!
      launchConfetti();
      showToast('¡Felicidades! Postulación confirmada. Aquí tienes tu Pase Digital.');
      openPassModal(newApp.id);
    });
  }

  // Publish form submit (Organizations)
  const publishForm = $('#publish-form');
  if (publishForm) {
    publishForm.addEventListener('submit', e => {
      e.preventDefault();
      const form = new FormData(publishForm);

      const category = form.get('category');
      const artMap = {
        'Medio Ambiente': 'forest',
        'Comunidad y Alimentos': 'food',
        'Educación y Mentoría': 'books',
        'Bienestar Animal': 'animals',
        'Salud & Bienestar': 'health',
        'Arte, Cultura & Espacios': 'art',
        'Tecnología & Inclusión': 'tech'
      };

      const newActivity = {
        id: `org-pub-${Date.now()}`,
        title: String(form.get('title')).trim(),
        org: String(form.get('org')).trim(),
        verified: true,
        category,
        city: String(form.get('city')),
        address: String(form.get('address')),
        mode: String(form.get('mode')),
        date: String(form.get('date')),
        time: String(form.get('time')),
        hours: Number(form.get('hours')),
        spotsTotal: Number(form.get('spots')),
        spotsFilled: 0,
        artType: artMap[category] || 'forest',
        description: String(form.get('description')).trim(),
        requirements: String(form.get('requirements')).trim(),
        included: String(form.get('included') || 'Seguro de accidentes, hidratación y constancia oficial.'),
        socialServiceValid: form.get('socialServiceValid') === 'on',
        coordinator: 'Coordinador General',
        coordinatorPhone: String(form.get('coordinatorPhone') || '+528188889999'),
        lat: 25.686,
        lng: -100.316,
        schedule: [
          { time: String(form.get('time')), text: 'Bienvenida e inicio de actividades' },
          { time: '12:00', text: 'Desarrollo de jornada comunitaria' },
          { time: '13:00', text: 'Cierre y agradecimiento' }
        ]
      };

      state.published.unshift(newActivity);
      persistState();

      closeModal('publish-dialog');
      renderAll();
      launchConfetti();
      showToast('¡Convocatoria publicada con éxito! Ya está visible en Explorar.');
    });
  }

  // Edit Profile Form
  const editProfileForm = $('#edit-profile-form');
  if (editProfileForm) {
    editProfileForm.addEventListener('submit', e => {
      e.preventDefault();
      state.user.name = $('#edit-name').value.trim();
      state.user.email = $('#edit-email').value.trim();
      state.user.school = $('#edit-institution').value.trim();
      state.user.city = $('#edit-city').value.trim();
      state.user.avatar = state.user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

      persistState();
      closeModal('edit-profile-dialog');
      renderAll();
      showToast('Perfil actualizado correctamente.');
    });
  }

  const openEditProfileBtn = $('#open-edit-profile');
  if (openEditProfileBtn) {
    openEditProfileBtn.addEventListener('click', () => {
      $('#edit-name').value = state.user.name;
      $('#edit-email').value = state.user.email;
      $('#edit-institution').value = state.user.school;
      $('#edit-city').value = state.user.city;
      showModal('edit-profile-dialog');
    });
  }

  // Theme Toggle Button
  const themeToggle = $('#theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      state.theme = next;
      persistState();

      const iconEl = $('#theme-icon');
      if (iconEl) {
        iconEl.innerHTML = ICONS[next === 'dark' ? 'sun' : 'moon'];
      }
      showToast(next === 'dark' ? 'Modo oscuro activado 🌙' : 'Modo claro activado ☀️');
    });
  }

  // Certificate Verification Form
  const verifyForm = $('#cert-verify-form');
  if (verifyForm) {
    verifyForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = $('#verify-input');
      const val = input ? input.value.trim().toUpperCase() : '';

      launchConfetti();
      showToast(`✓ Constancia ${val} VERIFICADA: Registro institucional válido con acreditación de horas en SUMA.`);
    });
  }

  const demoCertBtn = $('#demo-cert-btn');
  if (demoCertBtn) {
    demoCertBtn.addEventListener('click', () => {
      if ($('#verify-input')) $('#verify-input').value = 'SUMA-MX-2026-9842';
      showToast('✓ Certificado SUMA-MX-2026-9842 Autenticado: 12 Horas de Servicio Social de Pablo Velázquez.');
    });
  }

  // Buttons for modals
  const openPublishBtn = $('#open-publish');
  if (openPublishBtn) openPublishBtn.addEventListener('click', openPublishModal);

  const openPublishSecBtn = $('#open-publish-secondary');
  if (openPublishSecBtn) openPublishSecBtn.addEventListener('click', openPublishModal);

  const openFaqTop = $('#open-faq-top');
  if (openFaqTop) openFaqTop.addEventListener('click', () => showModal('faq-dialog'));

  const footerFaqLink = $('#footer-faq-link');
  if (footerFaqLink) footerFaqLink.addEventListener('click', e => { e.preventDefault(); showModal('faq-dialog'); });

  const footerInsuranceLink = $('#footer-insurance-link');
  if (footerInsuranceLink) footerInsuranceLink.addEventListener('click', e => { e.preventDefault(); showModal('faq-dialog'); });

  const btnHowItWorks = $('#btn-how-it-works');
  if (btnHowItWorks) {
    btnHowItWorks.addEventListener('click', () => {
      const section = $('#how-it-works');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const profilePillBtn = $('#profile-pill-btn');
  if (profilePillBtn) {
    profilePillBtn.addEventListener('click', () => {
      location.hash = '#actividad';
    });
  }

  // Hero Card Quick CTA
  const heroCardCta = $('#hero-card-cta');
  if (heroCardCta) {
    heroCardCta.addEventListener('click', () => {
      openDetailModal('la-huasteca-reforesta');
    });
  }

  // Full Certificate View Button
  const openFullCertBtn = $('#open-full-certificate-btn');
  if (openFullCertBtn) {
    openFullCertBtn.addEventListener('click', openOfficialCertificate);
  }

  // Print Official Certificate
  const printOfficialCertBtn = $('#print-official-cert-btn');
  if (printOfficialCertBtn) {
    printOfficialCertBtn.addEventListener('click', () => window.print());
  }

  const printCredBtn = $('#print-credential-btn');
  if (printCredBtn) {
    printCredBtn.addEventListener('click', () => window.print());
  }

  // Mobile menu toggle
  const mobileMenuBtn = $('#mobile-menu-btn');
  const mainNav = $('#main-nav');
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Dashboard Tab Switching
  $$('.dash-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.dash-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const tabTarget = tab.dataset.dashTab;
      const appPanel = $('#dash-tab-content-applications');
      const credPanel = $('#dash-tab-content-credential');

      if (appPanel) appPanel.hidden = tabTarget !== 'applications';
      if (credPanel) credPanel.hidden = tabTarget !== 'credential';
    });
  });

  // Newsletter Form
  const newsletterForm = $('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      showToast('¡Gracias por suscribirte al Boletín de Causas SUMA!');
      newsletterForm.reset();
    });
  }

  // Close modals on clicking backdrop
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        ) {
          dialog.close();
        }
      }
    });
  });

  // Render hero featured card art
  const heroVisual = $('#hero-card-visual');
  if (heroVisual) {
    heroVisual.innerHTML = renderArt('forest', 'Medio Ambiente');
  }

  // Listen to hash change for SPA navigation
  window.addEventListener('hashchange', handleRouting);
}

// --- 11. BOOTSTRAP APPLICATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadState();

  // Restore Theme
  if (state.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const iconEl = $('#theme-icon');
    if (iconEl) iconEl.innerHTML = ICONS.sun;
  }

  // Replace data-icon attributes with SVGs
  $$('[data-icon]').forEach(el => {
    el.innerHTML = ICONS[el.dataset.icon] || ICONS.sparkle;
  });

  initEventListeners();
  handleRouting();
});
