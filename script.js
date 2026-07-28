const birthDate = new Date(2008, 1, 3);
const currentDate = new Date();
let age = currentDate.getFullYear() - birthDate.getFullYear();
const birthdayThisYear = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
const programmingStartYear = 2016;
const programmingYears = currentDate.getFullYear() - programmingStartYear;

if (currentDate < birthdayThisYear) {
  age -= 1;
}

document.getElementById("current-year").textContent = currentDate.getFullYear();

const translations = {
  pt: {
    page_title: "Otávio Lopes — Desenvolvedor fullstack",
    page_description: "Portfólio de Otávio Lopes, desenvolvedor fullstack e estudante de Ciência da Computação na UFRGS.",
    nav_about: "sobre",
    nav_projects: "projetos",
    nav_contact: "contato",
    hero_title: "Desenvolvedor fullstack com projetos em hotelaria, negócios e saúde.",
    hero_summary: "Prazer, me chamo Otávio Lopes, tenho {age} anos. Sou desenvolvedor fullstack e estudante de Ciência da Computação na UFRGS. Seja bem-vindo(a) ao meu portfólio.",
    hero_button_projects: "ver projetos",
    hero_button_about: "conheça meu trabalho",
    hero_fact_location_label: "natural de",
    location_value: "Guaíba, RS / Brasil",
    hero_fact_study_label: "estudos",
    hero_side_label: "projetos em destaque",
    hero_side_note: "Soluções web para operação, negócio e saúde.",
    profile_note: "entre produto, código e contexto",
    profile_caption: "desenvolvedor fullstack",
    about_eyebrow: "sobre mim",
    about_title: "Gosto de entender a rotina antes de escolher a tecnologia.",
    about_text_1: "Eu me interesso pela parte inteira de um produto: a rotina de quem usa, a regra de negócio, as decisões que sustentam a operação e o código que mantém tudo funcionando. Gosto de entender como cada parte se conecta para construir soluções claras, confiáveis e realmente úteis.",
    about_text_2: "Nasci em Guaíba, no Rio Grande do Sul, e hoje estudo Ciência da Computação na UFRGS. Meu trabalho combina desenvolvimento, iniciativa e compromisso com soluções confiáveis, funcionais e bem executadas.",
    about_more_cta: "clique para mais detalhes sobre mim",
    about_more_text: "Comecei a programar em 2016, desenvolvendo plugins em PHP para servidores de Minecraft, especificamente para PocketMine. Isso despertou um interesse tremendo pela programação. Desde então, venho acumulando inúmeros projetos. Nos últimos anos, tenho me dedicado a desenvolver projetos cada vez mais funcionais, capazes de operar e produzir algo útil para a sociedade. Hoje, programo há {years} anos.",
    info_location: "localização",
    info_education: "formação",
    info_education_value: "Ciência da Computação · UFRGS",
    info_focus: "foco",
    info_focus_value: "Produtos e sistemas web",
    info_english: "inglês",
    info_english_value: "C2 · Proficient",
    info_spanish: "espanhol",
    info_spanish_value: "A2 · Iniciante",
    certificate_label: "certificado",
    certificate_title: "Certificado",
    certificate_description: "EF SET · nível C2 · 71/100",
    certificate_view: "ver certificado",
    certificate_install: "instalar certificado",
    certificate_validate: "validar certificado",
    certificate_filename: "certificado_de_proficiencia_otaviolopes.pdf",
    projects_eyebrow: "projetos selecionados",
    projects_title: "Três projetos, três contextos diferentes.",
    projects_description: "Cada projeto abaixo nasceu de um contexto diferente. O ponto em comum é sair da ideia e chegar a algo que possa ser usado.",
    project_personal: "produto autoral",
    pousada_category: "gestão · hotelaria",
    pousada_description: "App completo de gerenciamento de hotelaria, com integração a um sistema de bar e controle de cada estadia e funcionário.",
    tag_management: "gestão",
    tag_operations: "operações",
    tag_integration: "integração",
    project_status_development: "em desenvolvimento",
    project_startup: "startup",
    garage_category: "web · negócios",
    garage_description: "Startup de desenvolvimento de sites institucionais para pequenas e médias empresas.",
    tag_websites: "sites",
    tag_business: "negócios",
    project_visit: "visitar site",
    project_more: "conhecer mais",
    project_partnership: "em parceria",
    cloudent_category: "saúde · software",
    cloudent_description: "SaaS odontológico completo, com agenda, tarefas, prontuários, anamnese, odontograma, gestão de caixa e estoque e suporte a múltiplas clínicas.",
    tag_health: "saúde",
    tag_software: "software",
    project_status_partnership: "projeto em parceria",
    work_eyebrow: "como eu trabalho",
    work_title: "Como eu participo de um produto.",
    work_1_title: "Entender o contexto",
    work_1_text: "Conversar sobre a rotina, as pessoas e a decisão que o produto precisa facilitar.",
    work_2_title: "Construir a solução",
    work_2_text: "Organizar a ideia e transformar requisitos em uma experiência consistente e pronta para o uso.",
    work_3_title: "Aprender com o uso",
    work_3_text: "Observar o que funciona, corrigir o que não funciona e evoluir o produto com honestidade.",
    contact_eyebrow: "contato",
    contact_title: "Quer falar sobre um projeto?",
    contact_text: "Para tratar de projetos, parcerias ou oportunidades profissionais, entre em contato por e-mail.",
    contact_card_label: "Entre em contato por e-mail",
    contact_response: "Tempo médio de resposta: 1h",
    contact_github: "abrir meu GitHub",
    footer_note: "desenvolvedor fullstack · Guaíba / RS",
    language_auto: "idioma automático",
    theme_to_dark: "ativar modo escuro",
    theme_to_light: "ativar modo claro",
    dialog_context_label: "contexto",
    dialog_audience_label: "para quem",
    dialog_role_label: "meu papel",
    dialog_features_label: "principais recursos",
    dialog_status_label: "status",
  },
  en: {
    page_title: "Otávio Lopes — Fullstack developer",
    page_description: "Portfolio of Otávio Lopes, fullstack developer and Computer Science student at UFRGS.",
    nav_about: "about",
    nav_projects: "projects",
    nav_contact: "contact",
    hero_title: "A fullstack developer with projects in hospitality, business and healthcare.",
    hero_summary: "Hello, my name is Otávio Lopes, I am {age} years old. I am a fullstack developer and Computer Science student at UFRGS. Welcome to my portfolio.",
    hero_button_projects: "see projects",
    hero_button_about: "about my work",
    hero_fact_location_label: "from",
    location_value: "Guaíba, RS / Brazil",
    hero_fact_study_label: "studies",
    hero_side_label: "selected projects",
    hero_side_note: "Web solutions for operations, business and healthcare.",
    profile_note: "between product, code and context",
    profile_caption: "fullstack developer",
    about_eyebrow: "about me",
    about_title: "I like understanding the routine before choosing the technology.",
    about_text_1: "I am interested in the entire product: the user's routine, the business rule, the decisions that support the operation and the code that keeps everything working. I like understanding how each part connects to build solutions that are clear, reliable and genuinely useful.",
    about_text_2: "I was born in Guaíba, Rio Grande do Sul, and I am currently studying Computer Science at UFRGS. My work combines development, initiative and a commitment to reliable, functional, well-executed solutions.",
    about_more_cta: "click for more about me",
    about_more_text: "I started programming in 2016 by developing PHP plugins for Minecraft servers, specifically PocketMine. This sparked a tremendous interest in programming. Since then, I have accumulated countless projects. In recent years, I have focused on building increasingly functional projects that operate and create something useful for society. I have been programming for {years} years.",
    info_location: "location",
    info_education: "education",
    info_education_value: "Computer Science · UFRGS",
    info_focus: "focus",
    info_focus_value: "Web products and systems",
    info_english: "english",
    info_english_value: "C2 · Proficient",
    info_spanish: "spanish",
    info_spanish_value: "A2 · Beginner",
    certificate_label: "certificate",
    certificate_title: "Certificate",
    certificate_description: "EF SET · C2 level · 71/100",
    certificate_view: "view certificate",
    certificate_install: "install certificate",
    certificate_validate: "validate certificate",
    certificate_filename: "otaviolopes_proficiency_certificate.pdf",
    projects_eyebrow: "selected projects",
    projects_title: "Three projects, three different contexts.",
    projects_description: "Each project below started in a different context. What they share is the effort to move from an idea to something people can use.",
    project_personal: "personal product",
    pousada_category: "management · hospitality",
    pousada_description: "A complete hospitality management app, with bar-system integration and control over every stay and employee.",
    tag_management: "management",
    tag_operations: "operations",
    tag_integration: "integration",
    project_status_development: "in development",
    project_startup: "startup",
    garage_category: "web · business",
    garage_description: "A startup developing institutional websites for small and medium-sized businesses.",
    tag_websites: "websites",
    tag_business: "business",
    project_visit: "visit website",
    project_more: "learn more",
    project_partnership: "partnership",
    cloudent_category: "health · software",
    cloudent_description: "Complete dental SaaS with scheduling, tasks, patient records, anamnesis, odontograms, cash and inventory management, and multi-clinic support.",
    tag_health: "health",
    tag_software: "software",
    project_status_partnership: "partnership project",
    work_eyebrow: "how I work",
    work_title: "How I take part in a product.",
    work_1_title: "Understand the context",
    work_1_text: "Talk about the routine, the people and the decision the product needs to make easier.",
    work_2_title: "Build the solution",
    work_2_text: "Structure the idea and turn requirements into a consistent experience ready to use.",
    work_3_title: "Learn from use",
    work_3_text: "Notice what works, fix what does not and evolve the product honestly.",
    contact_eyebrow: "contact",
    contact_title: "Want to talk about a project?",
    contact_text: "For projects, partnerships or professional opportunities, contact me by email.",
    contact_card_label: "Contact me by email",
    contact_response: "Average response time: 1h",
    contact_github: "open my GitHub",
    footer_note: "fullstack developer · Guaíba / RS",
    language_auto: "automatic language",
    theme_to_dark: "switch to dark mode",
    theme_to_light: "switch to light mode",
    dialog_context_label: "context",
    dialog_audience_label: "for",
    dialog_role_label: "my role",
    dialog_features_label: "main features",
    dialog_status_label: "status",
  },
  es: {
    page_title: "Otávio Lopes — Desarrollador fullstack",
    page_description: "Portafolio de Otávio Lopes, desarrollador fullstack y estudiante de Ciencias de la Computación en la UFRGS.",
    nav_about: "sobre mí",
    nav_projects: "proyectos",
    nav_contact: "contacto",
    hero_title: "Desarrollador fullstack con proyectos en hotelería, negocios y salud.",
    hero_summary: "Hola, me llamo Otávio Lopes, tengo {age} años. Soy desarrollador fullstack y estudiante de Ciencias de la Computación en la UFRGS. Bienvenido(a) a mi portafolio.",
    hero_button_projects: "ver proyectos",
    hero_button_about: "conoce mi trabajo",
    hero_fact_location_label: "natural de",
    location_value: "Guaíba, RS / Brasil",
    hero_fact_study_label: "estudios",
    hero_side_label: "proyectos destacados",
    hero_side_note: "Soluciones web para operación, negocios y salud.",
    profile_note: "entre producto, código y contexto",
    profile_caption: "desarrollador fullstack",
    about_eyebrow: "sobre mí",
    about_title: "Me gusta entender la rutina antes de elegir la tecnología.",
    about_text_1: "Me interesa el producto completo: la rutina de quien lo usa, la regla de negocio, las decisiones que sostienen la operación y el código que mantiene todo funcionando. Me gusta entender cómo se conecta cada parte para construir soluciones claras, confiables y realmente útiles.",
    about_text_2: "Nací en Guaíba, Rio Grande do Sul, y actualmente estudio Ciencias de la Computación en la UFRGS. Mi trabajo combina desarrollo, iniciativa y compromiso con soluciones confiables, funcionales y bien ejecutadas.",
    about_more_cta: "haz clic para saber más sobre mí",
    about_more_text: "Comencé a programar en 2016, desarrollando plugins en PHP para servidores de Minecraft, específicamente PocketMine. Esto despertó un enorme interés por la programación. Desde entonces, he acumulado innumerables proyectos. En los últimos años, me he dedicado a desarrollar proyectos cada vez más funcionales, capaces de operar y producir algo útil para la sociedad. Llevo {years} años programando.",
    info_location: "ubicación",
    info_education: "formación",
    info_education_value: "Ciencias de la Computación · UFRGS",
    info_focus: "enfoque",
    info_focus_value: "Productos y sistemas web",
    info_english: "inglés",
    info_english_value: "C2 · Proficient",
    info_spanish: "español",
    info_spanish_value: "A2 · Principiante",
    certificate_label: "certificado",
    certificate_title: "Certificado",
    certificate_description: "EF SET · nivel C2 · 71/100",
    certificate_view: "ver certificado",
    certificate_install: "instalar certificado",
    certificate_validate: "validar certificado",
    certificate_filename: "certificado_de_proficiencia_otaviolopes.pdf",
    projects_eyebrow: "proyectos seleccionados",
    projects_title: "Tres proyectos, tres contextos diferentes.",
    projects_description: "Cada proyecto nació en un contexto diferente. Lo que tienen en común es pasar de la idea a algo que pueda utilizarse.",
    project_personal: "producto personal",
    pousada_category: "gestión · hotelería",
    pousada_description: "App completa para gestionar hoteles, con integración a un sistema de bar y control de cada estadía y empleado.",
    tag_management: "gestión",
    tag_operations: "operaciones",
    tag_integration: "integración",
    project_status_development: "en desarrollo",
    project_startup: "startup",
    garage_category: "web · negocios",
    garage_description: "Startup de desarrollo de sitios institucionales para pequeñas y medianas empresas.",
    tag_websites: "sitios",
    tag_business: "negocios",
    project_visit: "visitar sitio",
    project_more: "conocer más",
    project_partnership: "en colaboración",
    cloudent_category: "salud · software",
    cloudent_description: "SaaS odontológico completo, con agenda, tareas, historiales clínicos, anamnesis, odontograma, gestión de caja y stock, y soporte para múltiples clínicas.",
    tag_health: "salud",
    tag_software: "software",
    project_status_partnership: "proyecto en colaboración",
    work_eyebrow: "cómo trabajo",
    work_title: "Cómo participo en un producto.",
    work_1_title: "Entender el contexto",
    work_1_text: "Conversar sobre la rutina, las personas y la decisión que el producto debe facilitar.",
    work_2_title: "Construir la solución",
    work_2_text: "Organizar la idea y convertir los requisitos en una experiencia consistente y lista para usar.",
    work_3_title: "Aprender con el uso",
    work_3_text: "Observar qué funciona, corregir lo que no y evolucionar el producto con honestidad.",
    contact_eyebrow: "contacto",
    contact_title: "¿Quieres hablar sobre un proyecto?",
    contact_text: "Para proyectos, colaboraciones u oportunidades profesionales, contáctame por correo electrónico.",
    contact_card_label: "Contáctame por correo electrónico",
    contact_response: "Tiempo medio de respuesta: 1h",
    contact_github: "abrir mi GitHub",
    footer_note: "desarrollador fullstack · Guaíba / RS",
    language_auto: "idioma automático",
    theme_to_dark: "activar modo oscuro",
    theme_to_light: "activar modo claro",
    dialog_context_label: "contexto",
    dialog_audience_label: "para qui\u00e9n",
    dialog_role_label: "mi rol",
    dialog_features_label: "funciones principales",
    dialog_status_label: "estado",
  },
};

const countryLanguage = {
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt", TL: "pt",
  ES: "es", MX: "es", AR: "es", BO: "es", CL: "es", CO: "es", CR: "es", CU: "es", DO: "es",
  EC: "es", SV: "es", GT: "es", HN: "es", NI: "es", PA: "es", PY: "es", PE: "es", PR: "es",
  UY: "es", VE: "es",
};

const countryNames = {
  BR: { pt: "Brasil", en: "Brazil", es: "Brasil" },
  PT: { pt: "Portugal", en: "Portugal", es: "Portugal" },
  ES: { pt: "Espanha", en: "Spain", es: "España" },
  US: { pt: "Estados Unidos", en: "United States", es: "Estados Unidos" },
  GB: { pt: "Reino Unido", en: "United Kingdom", es: "Reino Unido" },
  MX: { pt: "México", en: "Mexico", es: "México" },
  AR: { pt: "Argentina", en: "Argentina", es: "Argentina" },
  CL: { pt: "Chile", en: "Chile", es: "Chile" },
  CO: { pt: "Colômbia", en: "Colombia", es: "Colombia" },
};

const projectDetails = {
  pousada: {
    pt: { category: "produto autoral · gestão", title: "Pousada Gestor", description: "Um app completo para centralizar a operação de uma pousada: estadias, funcionários e a integração com o sistema de bar em um só lugar.", context: "gestão de hotelaria", status: "em desenvolvimento", role: "Desenvolvedor" },
    en: { category: "personal product · management", title: "Pousada Gestor", description: "A complete app to centralize a pousada's operation: stays, employees and the bar-system integration in one place.", context: "hospitality management", status: "in development", role: "Developer" },
    es: { category: "producto personal · gestión", title: "Pousada Gestor", description: "Una app completa para centralizar la operación de una posada: estadías, empleados y la integración con el sistema de bar en un solo lugar.", context: "gestión hotelera", status: "en desarrollo", role: "Desarrollador" },
  },
  garagem: {
    pt: { category: "startup · web", title: "GaragemWeb", description: "Uma startup de desenvolvimento de sites institucionais para pequenas e médias empresas.", context: "sites para negócios", status: "site ativo" },
    en: { category: "startup · web", title: "GaragemWeb", description: "A startup developing institutional websites for small and medium-sized businesses.", context: "websites for businesses", status: "live website" },
    es: { category: "startup · web", title: "GaragemWeb", description: "Una startup de desarrollo de sitios institucionales para pequeñas y medianas empresas.", context: "sitios para negocios", status: "sitio activo" },
  },
  cloudent: {
    pt: { category: "parceria · saúde", title: "Cloudent", description: "SaaS odontológico completo, com agenda, tarefas, prontuários, anamnese, odontograma, gestão de caixa e estoque e suporte a múltiplas clínicas.", context: "software odontológico", status: "projeto em parceria" },
    en: { category: "partnership · healthcare", title: "Cloudent", description: "Complete dental SaaS with scheduling, tasks, patient records, odontograms, cash and inventory management, multi-clinic support, and AI integration.", context: "dental software", status: "partnership project" },
    es: { category: "colaboración · salud", title: "Cloudent", description: "SaaS odontológico completo, con agenda, tareas, historiales clínicos, odontograma, gestión de caja y stock, soporte para múltiples clínicas e integración con IA.", context: "software odontológico", status: "proyecto en colaboración" },
  },
};

Object.assign(projectDetails, {
  pousada: {
    pt: {
      category: "On-Premises \u00b7 hotelaria",
      title: "Pousada Gestor",
      description: "Sistema usado pela Pousada do Trabalhador, em Canoas / RS, para centralizar a operação da hospedagem.",
      context: "Pousada do Trabalhador \u00b7 Canoas / RS",
      audience: "Equipe da pousada e empresas faturadas",
      role: "Desenvolvedor",
      features: [
        "Faturamento para empresas",
        "Estadias, reservas e transferência de quartos",
        "Check-in individual e em grupo",
        "Notas fiscais, recibos e gerenciamento de caixa",
        "Sistema de bar, limpeza e manutenção",
        "Multi-contas para funcionários",
      ],
    },
    en: {
      category: "On-Premises \u00b7 hospitality",
      title: "Pousada Gestor",
      description: "A system used by Pousada do Trabalhador in Canoas, Brazil, to centralize the hospitality operation.",
      context: "Pousada do Trabalhador \u00b7 Canoas / Brazil",
      audience: "Pousada staff and billed companies",
      role: "Developer",
      features: [
        "Company billing",
        "Stays, reservations and room transfers",
        "Individual and group check-in",
        "Invoices, receipts and cash management",
        "Bar, cleaning and maintenance systems",
        "Multi-account access for employees",
      ],
    },
    es: {
      category: "On-Premises \u00b7 hotelería",
      title: "Pousada Gestor",
      description: "Sistema utilizado por Pousada do Trabalhador, en Canoas, Brasil, para centralizar la operación hotelera.",
      context: "Pousada do Trabalhador \u00b7 Canoas / Brasil",
      audience: "Equipo de la posada y empresas facturadas",
      role: "Desarrollador",
      features: [
        "Facturación para empresas",
        "Estadías, reservas y transferencias de habitaciones",
        "Check-in individual y grupal",
        "Facturas, recibos y gestión de caja",
        "Sistemas de bar, limpieza y mantenimiento",
        "Multi-cuentas para empleados",
      ],
    },
  },
  garagem: {
    pt: {
      category: "SaaS \u00b7 web",
      title: "GaragemWeb",
      description: "Plataforma integrada para desenvolver e facilitar a criação de sites para empresas.",
      context: "Concessionárias, e-commerces e landing pages",
      audience: "Pequenas e médias empresas",
      role: "CEO e desenvolvimento, junto com Davi Ribeiro",
      features: [
        "Desenvolvimento de sites institucionais",
        "Projetos para concessionárias e e-commerces",
        "Landing pages",
        "Plataforma integrada para facilitar a entrega",
        "Clientes como Yoshitani Veículos e Emanuel Salgados",
      ],
    },
    en: {
      category: "SaaS \u00b7 web",
      title: "GaragemWeb",
      description: "An integrated platform for developing and making website creation easier for businesses.",
      context: "Dealerships, e-commerce and landing pages",
      audience: "Small and medium-sized businesses",
      role: "CEO and developer, together with Davi Ribeiro",
      features: [
        "Institutional website development",
        "Projects for dealerships and e-commerce",
        "Landing pages",
        "Integrated platform to simplify delivery",
        "Clients such as Yoshitani Veículos and Emanuel Salgados",
      ],
    },
    es: {
      category: "SaaS \u00b7 web",
      title: "GaragemWeb",
      description: "Plataforma integrada para desarrollar y facilitar la creación de sitios web para empresas.",
      context: "Concesionarias, e-commerce y landing pages",
      audience: "Pequeñas y medianas empresas",
      role: "CEO y desarrollador, junto con Davi Ribeiro",
      features: [
        "Desarrollo de sitios institucionales",
        "Proyectos para concesionarias y e-commerce",
        "Landing pages",
        "Plataforma integrada para facilitar la entrega",
        "Clientes como Yoshitani Vehículos y Emanuel Salgados",
      ],
    },
  },
  cloudent: {
    pt: {
      category: "SaaS \u00b7 odontologia",
      title: "Cloudent",
      description: "SaaS completo de software odontológico, com integração com IA e ferramentas para acompanhar toda a rotina clínica.",
      context: "Clínicas e profissionais de odontologia",
      audience: "Clínicas odontológicas e seus profissionais",
      role: "Desenvolvedor principal, em parceria com Gustavo Krailing Sampaio.",
      features: [
        "Integração com IA",
        "Agenda, tarefas e prontuários",
        "Anamnese e odontograma",
        "Gestão de caixa e estoque",
        "Multi-clínicas",
        "App integrado para acompanhar consultas",
      ],
    },
    en: {
      category: "SaaS \u00b7 dental",
      title: "Cloudent",
      description: "Complete dental software SaaS with AI integration and tools for the full clinical routine.",
      context: "Dental clinics and professionals",
      audience: "Dental clinics and their teams",
      role: "Lead developer, in partnership with Gustavo Krailing Sampaio.",
      features: [
        "AI integration",
        "Schedule, tasks and patient records",
        "Anamnesis and odontogram",
        "Cash and inventory management",
        "Multi-clinic support",
        "Integrated app to follow appointments",
      ],
    },
    es: {
      category: "SaaS \u00b7 odontología",
      title: "Cloudent",
      description: "SaaS completo de software odontológico, con integración con IA y herramientas para toda la rutina clínica.",
      context: "Clínicas y profesionales de odontología",
      audience: "Clínicas odontológicas y sus equipos",
      role: "Desarrollador principal, en colaboración con Gustavo Krailing Sampaio.",
      features: [
        "Integración con IA",
        "Agenda, tareas y expedientes",
        "Anamnesis y odontograma",
        "Gestión de caja y stock",
        "Soporte para múltiples clínicas",
        "App integrada para acompañar las consultas",
      ],
    },
  },
});

projectDetails.pousada.pt.role = "Desenvolvedor";
projectDetails.pousada.en.role = "Developer";
projectDetails.pousada.es.role = "Desarrollador";
projectDetails.garagem.pt.role = "CEO e respons\u00e1vel pelo desenvolvimento da plataforma, em parceria com Davi Ribeiro.";
projectDetails.garagem.en.role = "CEO and platform developer, in partnership with Davi Ribeiro.";
projectDetails.garagem.es.role = "CEO y responsable del desarrollo de la plataforma, junto con Davi Ribeiro.";
projectDetails.cloudent.pt.role = "Desenvolvedor principal, em parceria com Gustavo Krailing Sampaio.";
projectDetails.cloudent.en.role = "Lead developer, in partnership with Gustavo Krailing Sampaio.";
projectDetails.cloudent.es.role = "Desarrollador principal, en colaboración con Gustavo Krailing Sampaio.";

const languageButtons = document.querySelectorAll("[data-language]");
const languageButton = document.querySelector(".language-button");
const languageMenu = document.querySelector(".language-menu");
const languageStatus = document.querySelector("[data-language-status]");
const currentLanguage = document.querySelector("[data-current-language]");
const headerRight = document.querySelector(".header-right");
const navToggle = document.querySelector(".nav-toggle");
const themeToggle = document.querySelector("[data-theme-toggle]");
const heroTitle = document.querySelector("#hero-title");
const heroSummary = document.querySelector("[data-i18n='hero_summary']");
const aboutMoreText = document.querySelector("[data-i18n='about_more_text']");
const aboutDetailsToggle = document.querySelector(".about-details-toggle");
const aboutDetails = document.querySelector("#about-details");
const projectDialog = document.querySelector("#project-dialog");
const certificateDialog = document.querySelector("#certificate-dialog");
const certificateInstallLink = document.querySelector(".certificate-install");
const dialogTitle = document.querySelector("[data-dialog-title]");
const dialogDescription = document.querySelector("[data-dialog-description]");
const dialogContext = document.querySelector("[data-dialog-context]");
const dialogAudience = document.querySelector("[data-dialog-audience]");
const dialogRole = document.querySelector("[data-dialog-role]");
const dialogFeatures = document.querySelector("[data-dialog-features]");
let activeLanguage = "pt";
let activeProject = null;

function renderHeroTitle(title) {
  if (!heroTitle) return;

  const words = String(title).trim().split(/\s+/).filter(Boolean);
  const fragment = document.createDocumentFragment();

  words.forEach((word, index) => {
    if (index > 0) fragment.append(document.createTextNode(" "));

    const wordElement = document.createElement("span");
    wordElement.className = "hero-title-word";
    wordElement.style.setProperty("--word-index", String(index + 1));
    wordElement.textContent = word;
    fragment.append(wordElement);
  });

  heroTitle.replaceChildren(fragment);
}

function getBrowserLanguage() {
  const browserLanguage = (navigator.language || "pt-BR").toLowerCase();
  if (browserLanguage.startsWith("pt")) return "pt";
  if (browserLanguage.startsWith("es")) return "es";
  return "en";
}

function getStoredLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem("otavio-language");
    return translations[storedLanguage] ? storedLanguage : null;
  } catch (_error) {
    return null;
  }
}

function setStoredLanguage(language) {
  try {
    window.localStorage.setItem("otavio-language", language);
  } catch (_error) {
    // Some privacy settings disable local storage; the current selection still works.
  }
}

function getCurrentTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function updateThemeToggle(theme = getCurrentTheme()) {
  if (!themeToggle) return;

  const dictionary = translations[activeLanguage] || translations.pt;
  const label = dictionary[theme === "dark" ? "theme_to_light" : "theme_to_dark"];
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
}

function persistTheme(theme) {
  try {
    window.localStorage.setItem("otavio-theme-choice", theme);
  } catch (_error) {
    // The current theme still works when local storage is unavailable.
  }
}

function commitTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  updateThemeToggle(theme);
  persistTheme(theme);
}

function setTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";

  const currentTheme = getCurrentTheme();
  if (nextTheme === currentTheme) return;

  commitTheme(nextTheme);
}

function getCountryLabel(countryCode, language, apiCountryName) {
  if (countryNames[countryCode]?.[language]) return countryNames[countryCode][language];
  return apiCountryName || "";
}

function applyLanguage(language, { manual = false, countryCode = "", apiCountryName = "" } = {}) {
  const dictionary = translations[language] || translations.pt;

  activeLanguage = language;

  document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  document.title = dictionary.page_title;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.page_description);
  document.querySelector('meta[property="og:title"]').setAttribute("content", dictionary.page_title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", dictionary.page_description);
  document.querySelector('meta[property="og:locale"]').setAttribute("content", { pt: "pt_BR", en: "en_US", es: "es_ES" }[language]);
  document.querySelector('meta[name="twitter:title"]').setAttribute("content", dictionary.page_title);
  document.querySelector('meta[name="twitter:description"]').setAttribute("content", dictionary.page_description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (element === heroTitle) return;
    const translation = dictionary[element.dataset.i18n];
    if (translation) element.textContent = translation;
  });
  renderHeroTitle(dictionary.hero_title);
  heroSummary.textContent = dictionary.hero_summary.replace("{age}", age);
  aboutMoreText.textContent = dictionary.about_more_text.replace("{years}", programmingYears);
  certificateInstallLink.download = dictionary.certificate_filename;

  currentLanguage.textContent = language.toUpperCase();
  languageButtons.forEach((button) => {
    const selected = button.dataset.language === language;
    button.setAttribute("aria-checked", String(selected));
  });

  const countryLabel = getCountryLabel(countryCode, language, apiCountryName);
  languageStatus.textContent = manual ? "" : `${dictionary.language_auto}${countryLabel ? ` · ${countryLabel}` : ""}`;
  updateThemeToggle();

  if (activeProject) renderProjectDialog(activeProject, language);
}

function renderProjectDialog(projectKey, language = activeLanguage) {
  const details = projectDetails[projectKey]?.[language] || projectDetails[projectKey]?.pt;
  if (!details) return;

  projectDialog.dataset.projectTheme = projectKey;
  dialogTitle.textContent = details.title;
  dialogDescription.textContent = details.description;
  dialogContext.textContent = details.context;
  dialogAudience.textContent = details.audience;
  dialogRole.textContent = details.role;
  dialogFeatures.replaceChildren(
    ...details.features.map((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }),
  );
}

function closeProjectDialog() {
  activeProject = null;
  document.documentElement.classList.remove("project-dialog-open");
  document.body.classList.remove("project-dialog-open");
  if (projectDialog.open) projectDialog.close();
  projectDialog.classList.remove("is-open");
}

aboutDetailsToggle.addEventListener("click", () => {
  const isExpanded = aboutDetailsToggle.getAttribute("aria-expanded") === "true";
  aboutDetailsToggle.setAttribute("aria-expanded", String(!isExpanded));
  aboutDetails.hidden = isExpanded;
});

document.querySelectorAll("[data-project-more]").forEach((button) => {
  button.addEventListener("click", () => {
    activeProject = button.dataset.projectMore;
    renderProjectDialog(activeProject);
    document.documentElement.classList.add("project-dialog-open");
    document.body.classList.add("project-dialog-open");
    if (typeof projectDialog.showModal === "function") {
      projectDialog.showModal();
    } else {
      projectDialog.classList.add("is-open");
    }
  });
});

document.querySelector("[data-dialog-close]").addEventListener("click", closeProjectDialog);
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeProjectDialog();
});
projectDialog.addEventListener("close", () => {
  activeProject = null;
  document.documentElement.classList.remove("project-dialog-open");
  document.body.classList.remove("project-dialog-open");
  projectDialog.classList.remove("is-open");
});

function closeCertificateDialog() {
  document.documentElement.classList.remove("certificate-dialog-open");
  document.body.classList.remove("certificate-dialog-open");
  if (certificateDialog.open) certificateDialog.close();
  certificateDialog.classList.remove("is-open");
}

document.querySelector("[data-certificate-open]").addEventListener("click", () => {
  document.documentElement.classList.add("certificate-dialog-open");
  document.body.classList.add("certificate-dialog-open");
  if (typeof certificateDialog.showModal === "function") {
    certificateDialog.showModal();
  } else {
    certificateDialog.classList.add("is-open");
  }
});

document.querySelector("[data-certificate-close]").addEventListener("click", closeCertificateDialog);
certificateDialog.addEventListener("click", (event) => {
  if (event.target === certificateDialog) closeCertificateDialog();
});
certificateDialog.addEventListener("close", () => {
  document.documentElement.classList.remove("certificate-dialog-open");
  document.body.classList.remove("certificate-dialog-open");
  certificateDialog.classList.remove("is-open");
});

async function detectCountry() {
  const fallbackLanguage = getBrowserLanguage();
  const providers = [
    {
      url: "https://ipapi.co/json/",
      read: (location) => location,
    },
    {
      url: "https://ipwho.is/",
      read: (location) => ({
        country_code: location.country_code,
        country_name: location.country,
      }),
    },
  ];

  for (const provider of providers) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2500);

    try {
      const response = await fetch(provider.url, { signal: controller.signal });
      if (!response.ok) throw new Error("Country detection failed");

      const location = provider.read(await response.json());
      const countryCode = String(location.country_code || "").toUpperCase();
      if (!countryCode) throw new Error("Country code unavailable");

      return {
        language: countryLanguage[countryCode] || fallbackLanguage,
        countryCode,
        countryName: location.country_name || "",
      };
    } catch (_error) {
      // Try the next provider before falling back to the browser language.
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return { language: fallbackLanguage, countryCode: "", countryName: "" };
}

function closeLanguageMenu() {
  languageButton.setAttribute("aria-expanded", "false");
  languageMenu.classList.remove("is-open");
}

languageButton.addEventListener("click", () => {
  const isOpen = languageButton.getAttribute("aria-expanded") === "true";
  languageButton.setAttribute("aria-expanded", String(!isOpen));
  languageMenu.classList.toggle("is-open", !isOpen);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language, { manual: true });
    setStoredLanguage(button.dataset.language);
    closeLanguageMenu();
  });
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(getCurrentTheme() === "dark" ? "light" : "dark");
  });
  updateThemeToggle();
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-picker")) closeLanguageMenu();
});

function toggleMobileMenu() {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  headerRight.classList.toggle("is-open", !isOpen);
}

navToggle.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  event.preventDefault();
  toggleMobileMenu();
});

navToggle.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  toggleMobileMenu();
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    headerRight.classList.remove("is-open");
  });
});

const storedLanguage = getStoredLanguage();

if (storedLanguage) {
  applyLanguage(storedLanguage, { manual: true });
} else {
  applyLanguage("pt");
  detectCountry().then((result) => applyLanguage(result.language, result));
}
