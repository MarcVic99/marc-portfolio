export type ProjectCategory = "Videojuegos" | "Apps" | "Web";

type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  context: string;
  summary: string;
  stack: string[];
  cover?: ProjectImage;
  details: { title: string; text: string }[];
  gallery?: ProjectImage[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "multiversos",
    title: "Multiversus",
    category: "Videojuegos",
    context: "Prototipo en desarrollo",
    summary: "Juego táctico de cartas en Unity que combina construcción de mazos, gestión de recursos y combate por turnos.",
    stack: ["Unity", "C#", "Diseño de sistemas"],
    cover: { src: "/projects/multiversos-inicio.webp", alt: "Pantalla de inicio de Multiversus con el texto PRESS TO START" },
    details: [
      { title: "Reglas y decisiones", text: "El coste de las cartas, la posición de las unidades y el alcance de los ataques determinan qué jugadas están disponibles en cada turno." },
      { title: "Implementación del combate", text: "El prototipo separa las reglas del tablero, la mano, los recursos y el combate. Incluye un rival controlado por IA para probar el flujo de partida." },
      { title: "Interfaz y feedback", text: "Los objetivos válidos se resaltan en el tablero. Las cartas se pueden inspeccionar y los ataques tienen efectos visuales para comunicar el impacto." },
      { title: "Progresión y contenidos", text: "El prototipo de menú explora la colección, la edición de mazos, las misiones, los eventos y la presentación de recompensas. Son sistemas de prototipo que permiten estudiar cómo se conectan el combate y la progresión." },
    ],
    gallery: [
      { src: "/projects/multiversos-menu.webp", alt: "Menú del prototipo con accesos a eventos, misiones y colección" },
      { src: "/projects/multiversos-combate.webp", alt: "Partida de Multiversus con el tablero, la mano y los indicadores de turno" },
    ],
  },
  {
    slug: "freexpace",
    title: "FreeXpace: Waves Survival",
    category: "Videojuegos",
    context: "Player2Player · Juego móvil publicado",
    summary: "Desarrollé mecánicas y funcionalidades de gameplay para un juego móvil de supervivencia por oleadas durante el Free2Play Campus.",
    stack: ["Unity", "C#", "Android"],
    cover: { src: "/projects/freeXpace-cover.png", alt: "Portada de FreeXpace: Waves Survival" },
    details: [
      { title: "Gameplay", text: "Implementé y ajusté funcionalidades jugables en Unity, con atención al ritmo de las oleadas y la experiencia del jugador." },
      { title: "Diseño para móvil", text: "El trabajo se centró en una experiencia para pantalla táctil, teniendo en cuenta los controles, la legibilidad y la interfaz." },
      { title: "Producción en equipo", text: "Colaboré con Player2Player entre junio y septiembre de 2024 durante el Free2Play Campus en Vitoria-Gasteiz." },
    ],
    gallery: [
      { src: "/projects/freexpace-image.png", alt: "Captura de FreeXpace: Waves Survival" },
      { src: "/projects/freexpace-image2.png", alt: "Segunda captura de FreeXpace: Waves Survival" },
    ],
    link: { label: "Ver en Google Play", href: "https://play.google.com/store/apps/details?id=com.PlayerToPlayer.FreeXpaceWavesRift&hl=en_GB" },
  },
  {
    slug: "profitly",
    title: "Profitly",
    category: "Apps",
    context: "Herramienta de gestión comercial",
    summary: "App en Flutter para registrar ventas, controlar inventario y comparar resultados. Incluye un módulo de campañas con formularios y seguimiento de respuestas.",
    stack: ["Flutter", "Dart", "Drift", "Riverpod", "Supabase"],
    cover: { src: "/projects/sales-tracker-cover.png", alt: "Vista de la aplicación Profitly" },
    details: [
      { title: "Inventario y ventas", text: "Gestión de productos, categorías y packs. Los recibos registran cantidades, canales, métodos de pago y descuentos, con cálculo de importes y beneficios." },
      { title: "Análisis comercial", text: "Comparación de periodos y consulta de ventas por producto y canal. Los informes permiten revisar ingresos, margen y ticket medio, y exportar datos en CSV." },
      { title: "Campañas y formularios", text: "El módulo de marketing usa Supabase para gestionar campañas, diseñar formularios y revisar las respuestas de cada enlace de captación." },
      { title: "Persistencia local", text: "Drift guarda los datos de ventas e inventario en el dispositivo. La app incluye opciones de copia de seguridad." },
    ],
    gallery: [
      { src: "/projects/profitly-image.png", alt: "Una de las primeras pantallas de Profitly" },
      { src: "/projects/profitly-image2.png", alt: "Captura de una versión anterior de Profitly" },
    ],
  },
  {
    slug: "difriho",
    title: "Difriho",
    category: "Web",
    context: "Difriho S.A. · Desarrollo web desde agosto de 2026",
    summary: "Catálogo web de equipamiento para hostelería y herramientas de administración para mantener productos, contenidos y documentación técnica.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    cover: { src: "/projects/difriho-inicio.jpg", alt: "Inicio de Difriho con el carrusel de familias de maquinaria" },
    details: [
      { title: "Catálogo público", text: "El sitio organiza la maquinaria por familias de producto y facilita el acceso a descargas, fichas técnicas, manuales y despieces." },
      { title: "Herramientas de administración", text: "Desarrollo y mantenimiento con PHP y MySQL de herramientas para gestionar productos, documentación y cuentas del área profesional." },
      { title: "Interfaces y mantenimiento", text: "Mejoras de navegación, formularios e interfaces adaptadas a móvil, con revisión de calidad y despliegues iterativos según las necesidades del equipo." },
    ],
    gallery: [
      { src: "/projects/difriho-catalogo.jpg", alt: "Portada del catálogo digital de Difriho" },
      { src: "/projects/difriho-documentacion.jpg", alt: "Página de información técnica con acceso al buscador de documentos" },
    ],
    link: { label: "Visitar la web de Difriho", href: "https://www.difriho.com/" },
  },
  {
    slug: "mas-fred",
    title: "+Fred",
    category: "Web",
    context: "Web corporativa y catálogo profesional",
    summary: "Web de maquinaria profesional para hostelería, con un catálogo por familias y acceso a documentación técnica.",
    stack: ["PHP", "JavaScript", "HTML", "CSS"],
    cover: { src: "/projects/mas-fred-inicio.jpg", alt: "Inicio de +Fred con el catálogo de maquinaria profesional" },
    details: [
      { title: "Catálogo por especialidad", text: "La portada permite recorrer familias de maquinaria y consultar el catálogo completo de +Fred." },
      { title: "Recursos para profesionales", text: "La web reúne la documentación técnica, las descargas, el área profesional y los datos de contacto de las delegaciones." },
    ],
    link: { label: "Visitar la web de +Fred", href: "https://www.mfred.com/" },
  },
  {
    slug: "difriho-fred-clientes",
    title: "Difriho y +Fred · Clientes",
    category: "Apps",
    context: "Aplicaciones Android para clientes",
    summary: "Apps de Difriho y +Fred para consultar desde el móvil el catálogo, la documentación técnica y los datos de contacto de cada marca.",
    stack: ["Android", "Kotlin", "Jetpack Compose", "WebView"],
    details: [
      { title: "Acceso a los recursos", text: "Cada app tiene una pantalla de inicio con accesos al catálogo, a la web y a la información técnica de su marca." },
      { title: "Navegación móvil", text: "Las apps combinan una interfaz nativa en Compose con pantallas web integradas para consultar los recursos que publica cada marca." },
    ],
  },
  {
    slug: "difriho-fred-admin",
    title: "Difriho y +Fred · Administración",
    category: "Apps",
    context: "Aplicaciones Android de uso interno",
    summary: "Apps para acceder a los paneles de administración de cada marca y confirmar inicios de sesión desde el móvil.",
    stack: ["Android", "Kotlin", "Jetpack Compose", "Biometría", "2FA"],
    details: [
      { title: "Acceso a los paneles", text: "Cada app reúne el acceso al panel web y los controles de seguridad de la marca correspondiente." },
      { title: "Confirmación de accesos", text: "Las apps permiten aprobar solicitudes de inicio de sesión con biometría y ofrecen un código de seis dígitos como alternativa." },
    ],
  },
  {
    slug: "light-keeper",
    title: "Light Keeper",
    category: "Videojuegos",
    context: "Ganador de los ENTI-UB Awards 2022 · 2.º curso",
    summary: "Proyecto de equipo en Unity en el que trabajé en mecánicas, interacción y diseño de niveles.",
    stack: ["Unity", "C#", "Diseño de niveles"],
    cover: { src: "/projects/light-keeper-cover.png", alt: "Portada de Light Keeper" },
    details: [
      { title: "Sistemas de juego", text: "Desarrollo e integración de mecánicas jugables y de la interacción del jugador con los sistemas del juego." },
      { title: "Diseño de niveles", text: "Trabajo sobre la estructura de los niveles, su ritmo y la navegación. Las pruebas sirvieron para ajustar la respuesta de los controles y la claridad de las interacciones." },
    ],
    gallery: [
      { src: "/projects/light-keeper-image.png", alt: "Escena de Light Keeper" },
      { src: "/projects/light-keeper-image2.png", alt: "Segunda escena de Light Keeper" },
    ],
    link: { label: "Ver en itch.io", href: "https://nucelarwizards.itch.io/light-keeper" },
  },
  {
    slug: "drifting-away",
    title: "Drifting Away",
    category: "Videojuegos",
    context: "Nominado a los ENTI-UB Awards · 3.º curso",
    summary: "Juego de conducción con vista cenital en el que el jugador esquiva obstáculos y busca la mejor trazada para llegar a meta.",
    stack: ["Unreal Engine", "C++", "UI/UX"],
    cover: { src: "/projects/drifting-away-cover.png", alt: "Portada de Drifting Away" },
    details: [
      { title: "Interfaz y experiencia de juego", text: "Participé en el desarrollo de la interfaz y en el ajuste de sistemas interactivos para que los objetivos y el ritmo del juego se entendieran durante la partida." },
      { title: "Iteración en equipo", text: "El equipo planificó, implementó y pulió mecánicas y presentación durante el proyecto de tercer curso." },
    ],
    gallery: [
      { src: "/projects/drifting-away-image.png", alt: "Circuito de Drifting Away" },
      { src: "/projects/drifting-away-image2.png", alt: "Segunda captura de Drifting Away" },
    ],
    link: { label: "Ver en itch.io", href: "https://ericloo.itch.io/drifting-away" },
  },
  {
    slug: "goal-tracker",
    title: "Goal Tracker",
    category: "Apps",
    context: "Proyecto personal para Android",
    summary: "App para organizar objetivos, anotar avances y seguir hábitos desde el móvil.",
    stack: ["Flutter", "Dart", "Hive"],
    details: [
      { title: "Seguimiento de objetivos", text: "La aplicación permite crear y editar objetivos, consultar su detalle y registrar entradas de progreso." },
      { title: "Historial de hábitos", text: "Los hábitos tienen su propia vista de detalle y guardan un historial de cumplimiento. Los datos se almacenan localmente con Hive." },
    ],
  },
  {
    slug: "synrun",
    title: "SynRun",
    category: "Videojuegos",
    context: "Proyecto final de CFGS",
    summary: "Videojuego móvil de fin de ciclo que estuvo disponible en Google Play durante aproximadamente dos años.",
    stack: ["Android", "Videojuegos móviles"],
    details: [
      { title: "Publicación", text: "Desarrollé el juego como proyecto final del CFGS en Desarrollo de Aplicaciones Multiplataforma especializado en Videojuegos y Ocio Digital, en ENTI-UB." },
    ],
  },
];
