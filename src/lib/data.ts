export const personalInfo = {
  name: "Sergio Zaldivar",
  location: "Cd. del Carmen, Campeche, Mexico",
  email: "zayser99@hotmail.com",
  github: "https://github.com/zayser99",
  linkedin: "https://www.linkedin.com/in/sergio-zaldivar-7370b6195",
  cv: "./cv-sergio-zaldivar.pdf"
};

export const workExperience = [
  {
    company: "The Mudlogging Company México",
    location: "Remoto",
    position: "Programador",
    period: "Noviembre 2024 - Actualidad",
    achievements: [
      "Desarrollo de un conjunto de aplicaciones que tienen como objetivo generar KPI's durante la perforación de pozos petroleros.",
      "La primera aplicación tienen como fin obtener datos de pozos de perforación (WITSML) y analizarlos, para determinar con base a algoritmos la actividad que se está realizando en el pozo y posteriormente almacenar los datos de perforación y la actividad que se determinó.",
      "La segunda aplicación se encarga de tener un Buffer de información actualizada, está obtenida de la base de datos con el objetivo de ir calculando los KPI's y servir los datos a través una API rest.",
      "La tercera es la aplicación web que sirve para generar reportes y visualizar gráficos interactivos, además de gestionar los distintos pozos que tiene la empresa, tanto los activos, como los que ya están concluidos"
    ],
  },
  {
    company: "Sponyat-Jet",
    location: "Cd del Carmen, Campeche, Mexico",
    position: "Programador Jr.",
    period: "Enero 2023 — Noviembre 2024",
    achievements: [
      "Desarrollo de un módulo en el sistema para gestionar el versionamiento de los formatos administrativos de la empresa.",
      "Desarrollo de un módulo en el sistema para la gestión de las solicitudes de alta de artículos en el Almacén.",
      "Desarrollo de un módulo de tickets para la solicitud de soporte al departamento de TI y de igual manera el módulo para gestionar los tickets y un Dashboard para el módulo.",
      "Desarrollo de un módulo en el sistema que fungía como personal de la empresa que se actualizaba conforme a los empleados activos.",
      "Desarrollo de pequeña app en Alexa para comprobar Status del servidor."
    ],
  },
  {
    company: "Sponyat-Jet",
    location: "Cd del Carmen, Campeche, Mexico",
    position: "Auxiliar TI (Prácticas Profesionales)",
    period: "Agosto 2022 — Enero 2023",
    achievements: [
      "Desarrollo de un sistema que ayuda en la administración de equipos de computo, telefonía, y demás dispositivos informáticos de la empresa teniendo así un control sistematizado de con quien se encuentran asignados esos equipos.",
      "Mantenimiento preventivo y correctivo de equipos de computo PC y laptop.",
      "Soporte técnico a colaboradores.",
      "instalación de equipos de domótica.",
    ],
  },
  {
    company: "Dirección De Control Escolar De La UNACAR",
    location: "Cd del Carmen, Campeche, Mexico",
    position: "Auxiliar Administrativo(Servicio Social)",
    period: "Febrero 2022 — Agosto 2022",
    achievements: [
      "Apoyo en la localización de expedientes.",
      "Proceso creativo para la realización de material multimedia que fungían como guía para los distintos tramites que ofrece el departamento.",
      "Desarrollo de un sistema que tiene como objetivo reducir los tiempos y facilitar la búsqueda de expedientes, esto gracias a un registro con datos de los expedientes.",
    ],
  },
];

export const education = [
  {
    institution: "Universidad Autonoma Del Carmen",
    location: "Cd del Carmen, Campeche, Mexico",
    degree: "Maestría en Tecnologías de Información Emergentes",
    period: "Agosto 2025 - Agosto 2027 (En proceso de inscripción)",
    achievements: [""
    ],
  },
  {
    institution: "Universidad Autonoma Del Carmen",
    location: "Cd del Carmen, Campeche, Mexico",
    degree: "Ing. En Sitemas Computacionales",
    period: "Agosto 2018 - Diciembre 2023",
    achievements: [
      "Participación en Hackathon de hackSureste 2019",
      "Participación en Hackathon de XVIII Congreso Internacional de Informática y Computación de la ANIEI 2019.",
      "Desarrollo de la aplicación \"Service Manager App\" con Flutter.",
    ],
  },
  {
    institution: "Universidad Autonoma Del Carmen",
    location: "Cd del Carmen, Campeche, Mexico",
    degree: "Preparatoria",
    period: "Agosto 2018 - Diciembre 2023",
    achievements: [
      "Capacitación en Informática y Telecomunicaciones.",
      "Introducción a la programación."
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Dart",
    "Java",
    "C#",
  ],
  frontendDevelopment: [
    "Nextjs",
    "React",
    "Electron",
    "Shadcn UI",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "DataTables",
    "Bootstrap",
  ],
  backendDevelopment: ["Nodejs", "Expressjs", "Nextjs", "SOAP", "API REST", "JSON", "XML"],
  databaseAndStorage: ["MySQL", "SQLite", "PostgreSQL", "SQL server", "MongoDB"],
  cloudAndDevOps: ["AWS EC2", "SSH", "Linux", "Jenkins", "PM2", "Docker", "Nginix"],
  toolsAndServices: ["DBeaver", "Git", "Git-Hub", "Postman", "NPM", "Vite"],
  uiUx: ["Figma"],
  softSkills: [
    "Organización",
    "Liderazgo",
    "Trabajo en equipo",
    "Comunicación con proveedores",
    "Proactividad",
    "Adaptabilidad",
    "Actitud de servicio",
    "Búsqueda de desarrollo profesional y personal",
    "Compromiso",
    "Comunicación",
    "Creatividad",
    "Iniciativa",
    "Pensamiento analítico",
    "Pensamiento crítico",
    "Responsabilidad"
  ],
  methodologies: ["Scrum"],
};

export const projects = [
  {
    title: "WITS emulador",
    subTitle: "Es una aplicación de escritorio echa en electrón que tiene la función ser un servidor de datos WITS emulados",
    github: "https://github.com/zayser99/wits-emulador",
    description: [
      "Configurar el comportamiento de los datos emulados.",
      "gestionar configuraciones básicas y encender y apagar el servidor WITS.",
      "Gestionar clientes conectados al servidor",
    ],
  },
  {
    title: "Service Manger App",
    subTitle: "Está enfocada en negocios que ofrezcan servicios y sirva para poder llevar un control de los trabajos realizados algunas de sus principales funciones son:",
    github: "https://github.com/zayser99/ServicesManagerApp",
    description: [
      "Registrar los servicios que se ofrecen.",
      "Realizar presupuestos.",
      "Generar recibos de pago.",
      "Permite generar recibos de pago y presupuestos por PDF.",
      "Una sección de estadística que ataque puntos como: “Servicios más solicitados “, “ingresos del mes”, “servicios más frecuentes”, “ingresos por servicios”, etc."
    ],
  },
  {
    title: "Control Escolar",
    subTitle: "Una solución para el registro de la ubicación de los expedientes de los estudiantes para el departamento de control escolar de la UNACAR. Sus principales funciones son:",
    github: "https://github.com/zayser99/CE",
    description: [
      "Gestionar almacenes.",
      "Gestionar estantes y cajas.",
      "Registrar la información del alumno y su ubicación."
    ],
  },
  {
    title: "Gastor",
    subTitle: "Es una aplicación en la cual aún estoy trabajando, busca ayudar a un grupo familiar a tener un control de sus gastos e ingresos:",
    description: [
      "Gestionar medios de pago (tarjetas, efectivo).",
      "Registrar Gastos.",
      "Registrar Ingresos.",
      "DashBoard para mostrar información de una manera visual."
    ],
  }
];

export const awards = [
  {
    name: "Hackathon de XVIII Congreso Internacional de Informática y Computación",
    issuer: "ANIEl",
    date: "Octubre 2019",
    type: "International",
    position: "Participante",
  },
  {
    name: "HackSureste",
    issuer: "InnovAcción Latam",
    date: "Septiembre 2019",
    type: "National",
    position: "Participante",
  }
];
