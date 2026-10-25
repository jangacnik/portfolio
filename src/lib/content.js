export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'sl', label: 'SL' },
  { code: 'de', label: 'DE' },
];

const experienceTech = {
  rakuten: ['Kotlin', 'Scala', 'ZIO', 'Vue.js', 'Cassandra', 'MySQL', 'Kafka', 'Kubernetes', 'Kibana', 'GCP', 'Claude Code'],
  flawless: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Jenkins', 'RabbitMQ', 'Kibana'],
};

const img = (name) => '/images/' + name + '.jpg';

const experiencePhotos = {
  rakuten: {
    company: img('tokyo'),
    responsibilities: [img('team'), img('servers'), img('blueprint'), img('network'), img('code')],
    achievements: [img('debug'), img('datacenter')],
  },
  flawless: {
    company: img('payments'),
    responsibilities: [img('springcode'), img('process'), img('documents'), img('mentor')],
    achievements: [img('card'), img('stopwatch')],
  },
};

const skillPhotos = {
  languages: img('code'),
  backend: img('servers'),
  data: img('network'),
  infra: img('containers'),
  frontend: img('wireframe'),
  ai: img('robot'),
};

const skillIcons = {
  languages: 'speech',
  backend: 'server',
  data: 'data',
  infra: 'cloud',
};

const educationPhotos = [img('campus'), img('campus2')];

const skillItems = {
  languages: ['Kotlin', 'Scala (ZIO)', 'Java', 'TypeScript', 'Python'],
  backend: ['Spring Boot', 'REST APIs', 'Maven', 'Gradle', 'JUnit 5', 'Activiti / BPMN'],
  data: ['Cassandra', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka'],
  infra: ['Kubernetes', 'Docker', 'GCP', 'Jenkins', 'Kibana'],
  frontend: ['Vue.js', 'Angular', 'Ionic'],
  ai: ['Claude Code agents', 'Hooks', 'Skills', 'Multi-agent workflows'],
};

export const content = {
  en: {
    ui: { experience: 'Experience', skills: 'Skills', education: 'Education', languages: 'Languages', contact: 'Contact', scroll: 'Scroll to draw', present: 'Present', lead: 'Tech Lead', email: 'Email', responsibility: 'Responsibility', achievement: 'Achievement', stack: 'Tech Stack', prev: 'Previous', next: 'Next', flip: 'Flip card for socials', unflip: 'Flip back' },
    hero: {
      name: 'Jan Alojz Gačnik',
      role: 'Backend Software Engineer',
      location: 'Chiba, Japan',
      facts: [{ label: 'Nationality', value: 'Slovenian' }, { label: 'Visa', value: 'Spouse of Japanese national · No sponsorship required' }],
      tagline: 'Distributed systems that stay fast, consistent and online.',
      summary:
        'Backend engineer with 5+ years in fintech and large-scale consumer platforms. Building a globally distributed backend at Rakuten and leading a small team. Strong in Kotlin, Scala and Java, with deep experience in data consistency, concurrency and microservice architecture. Early adopter of AI-assisted development with Claude Code agents and multi-agent workflows.',
      stats: [
        { value: 5, suffix: '+', label: 'Years in fintech & scale' },
        { value: 50, suffix: '%', label: 'Faster PR turnaround' },
        { value: 25, suffix: '%', label: 'Higher approval throughput' },
        { value: 0, suffix: '', label: 'Downtime in prod data ops' },
      ],
    },
    experience: [
      {
        company: 'Rakuten',
        role: 'Application Engineer',
        period: 'Aug 2025 – Present',
        place: 'Tokyo, Japan',
        blurb: 'Core backend of a globally distributed platform with high-throughput, low-latency requirements.',
        responsibilities: [
          { title: 'Tech Lead', text: 'Took on tech-lead responsibilities within the first year in a 3-engineer Agile team: planning, design decisions, and main contact for clients, QA and DevOps.' },
          { title: 'Backend Services', text: 'Built backend services for high-throughput user data operations in Kotlin and Scala, focused on reliability and low latency.' },
          { title: 'Project Proposals', text: 'Proposed new projects to architecture leadership, owned the design and drove adoption across teams.' },
          { title: 'Data Consistency', text: 'Solved data consistency and concurrency challenges in a globally distributed platform.' },
          { title: 'ZIO Migration', text: 'Contributed to a major backend migration to a functional Scala (ZIO) architecture.' },
        ],
        achievements: [
          { title: 'Claude Code Agents', text: 'Introduced Claude Code agents, hooks and multi-agent workflows to the team, cutting PR turnaround by up to 50%.' },
          { title: 'Zero Downtime', text: 'Planned and executed large-scale production data operations under tight deadlines with zero downtime and no data loss.' },
        ],
        tech: experienceTech.rakuten,
        photos: experiencePhotos.rakuten,
      },
      {
        company: 'Flawless Code',
        role: 'Full-stack Software Engineer',
        period: 'Feb 2021 – Aug 2025',
        place: 'Maribor, Slovenia (Remote)',
        blurb: 'Credit processing platform for the European financial sector, handling high volumes of requests and documents.',
        responsibilities: [
          { title: 'Microservices', text: 'Developed Spring Boot microservices for automated credit workflows in an 8-person Agile team.' },
          { title: 'BPMN Processes', text: 'Designed and optimized BPMN / Activiti business processes with business analysts.' },
          { title: 'OCR Pipeline', text: 'Contributed to an OCR document pipeline with 90%+ accuracy and data normalization that improved automated validation.' },
          { title: 'Mentoring', text: 'Mentored and onboarded 2 junior developers in Java, Spring Boot and BPM.' },
        ],
        achievements: [
          { title: 'Approval Throughput', text: 'Raised credit approval throughput by 25% through parallel processing and automation, reducing manual review.' },
          { title: 'Angular Speed-up', text: 'Cut Angular latency by ~500 ms and API calls by 30%.' },
        ],
        tech: experienceTech.flawless,
        photos: experiencePhotos.flawless,
      },
    ],
    skills: [
      { type: 'Languages', items: skillItems.languages, photo: skillPhotos.languages, icon: skillIcons.languages },
      { type: 'Backend', items: skillItems.backend, photo: skillPhotos.backend, icon: skillIcons.backend },
      { type: 'Data & Messaging', items: skillItems.data, photo: skillPhotos.data, icon: skillIcons.data },
      { type: 'Infra & DevOps', items: skillItems.infra, photo: skillPhotos.infra, icon: skillIcons.infra },
      { type: 'Frontend', items: skillItems.frontend, photo: skillPhotos.frontend, icon: skillIcons.frontend },
      { type: 'AI-assisted dev', items: skillItems.ai, photo: skillPhotos.ai, icon: skillIcons.ai },
    ],
    education: [
      { school: 'University of Maribor', faculty: 'Faculty of Electrical Engineering and Computer Science', degree: "Master's, Computer and Information Technologies", period: 'Oct 2022 – Mar 2025', thesis: 'Business process automation using the Camunda platform', photo: educationPhotos[0] },
      { school: 'University of Maribor', faculty: 'Faculty of Electrical Engineering and Computer Science', degree: "Bachelor's, Computer and Information Technologies", period: 'Oct 2018 – Sep 2022', thesis: 'Contactless work-hour monitoring system using Raspberry Pi', photo: educationPhotos[1] },
    ],
    spoken: [
      { name: 'Slovenian', level: 'Native', pct: 100 },
      { name: 'English', level: 'Business, B2 certified', pct: 80 },
      { name: 'German', level: 'Advanced, B2 certified', pct: 80 },
      { name: 'Japanese', level: 'Basic, studying', pct: 30 },
    ],
    contact: { heading: 'Let’s build something', note: 'Based in Japan · Spouse of Japanese national · No sponsorship required' },
  },

  sl: {
    ui: { experience: 'Izkušnje', skills: 'Znanja', education: 'Izobrazba', languages: 'Jeziki', contact: 'Kontakt', scroll: 'Povleci za naprej', present: 'Danes', lead: 'Tehnični vodja', email: 'E-pošta', responsibility: 'Odgovornost', achievement: 'Dosežek', stack: 'Tehnologije', prev: 'Nazaj', next: 'Naprej', flip: 'Obrni kartico za omrežja', unflip: 'Obrni nazaj' },
    hero: {
      name: 'Jan Alojz Gačnik',
      role: 'Backend programski inženir',
      location: 'Chiba, Japonska',
      facts: [{ label: 'Državljanstvo', value: 'Slovensko' }, { label: 'Viza', value: 'Zakonec japonskega državljana · Sponzorstvo ni potrebno' }],
      tagline: 'Porazdeljeni sistemi, ki ostanejo hitri, konsistentni in dostopni.',
      summary:
        'Backend inženir z več kot 5 leti izkušenj v fintechu in velikih potrošniških platformah. V Rakutnu razvijam globalno porazdeljen backend in vodim manjšo ekipo. Močan v Kotlinu, Scali in Javi, z globokim znanjem o konsistentnosti podatkov, sočasnosti in mikrostoritveni arhitekturi. Zgodnji uporabnik razvoja z umetno inteligenco: agenti Claude Code in večagentni delovni tokovi.',
      stats: [
        { value: 5, suffix: '+', label: 'let v fintechu in na veliki skali' },
        { value: 50, suffix: '%', label: 'hitrejši pregled PR-jev' },
        { value: 25, suffix: '%', label: 'višja prepustnost odobritev' },
        { value: 0, suffix: '', label: 'izpada pri produkcijskih operacijah' },
      ],
    },
    experience: [
      {
        company: 'Rakuten',
        role: 'Application Engineer',
        period: 'avg. 2025 – danes',
        place: 'Tokio, Japonska',
        blurb: 'Jedro backenda globalno porazdeljene platforme z visoko prepustnostjo in nizko latenco.',
        responsibilities: [
          { title: 'Tehnični vodja', text: 'V prvem letu prevzel vlogo tehničnega vodje v agilni ekipi treh inženirjev: načrtovanje, tehnične odločitve ter glavni stik za naročnike, QA in DevOps.' },
          { title: 'Backend storitve', text: 'Razvoj backend storitev za visokozmogljive operacije nad uporabniškimi podatki v Kotlinu in Scali, s poudarkom na zanesljivosti in nizki latenci.' },
          { title: 'Predlogi projektov', text: 'Predlagal nove projekte vodstvu arhitekture, prevzel načrtovanje arhitekture in vodil uvedbo med ekipami.' },
          { title: 'Konsistentnost', text: 'Rešil izzive konsistentnosti podatkov in sočasnosti v globalno porazdeljeni platformi.' },
          { title: 'Migracija ZIO', text: 'Sodeloval pri veliki migraciji backenda na funkcijsko arhitekturo v Scali (ZIO).' },
        ],
        achievements: [
          { title: 'Agenti Claude Code', text: 'V ekipo uvedel agente, kavlje in večagentne delovne tokove Claude Code ter skrajšal čas pregleda PR-jev do 50 %.' },
          { title: 'Brez izpadov', text: 'Načrtoval in izvedel obsežne produkcijske operacije nad podatki v strogih rokih, brez izpada in brez izgube podatkov.' },
        ],
        tech: experienceTech.rakuten,
        photos: experiencePhotos.rakuten,
      },
      {
        company: 'Flawless Code',
        role: 'Full-stack programski inženir',
        period: 'feb. 2021 – avg. 2025',
        place: 'Maribor, Slovenija (na daljavo)',
        blurb: 'Platforma za obdelavo kreditov za evropski finančni sektor z velikim obsegom zahtevkov in dokumentov.',
        responsibilities: [
          { title: 'Mikrostoritve', text: 'Razvoj Spring Boot mikrostoritev za avtomatizirane kreditne procese v agilni ekipi osmih ljudi.' },
          { title: 'Procesi BPMN', text: 'Načrtovanje in optimizacija poslovnih procesov BPMN / Activiti skupaj s poslovnimi analitiki.' },
          { title: 'OCR sistem', text: 'Sodeloval pri sistemu za OCR obdelavo dokumentov z več kot 90 % natančnostjo in normalizaciji podatkov za boljšo samodejno validacijo.' },
          { title: 'Mentorstvo', text: 'Mentor in uvajalec dveh mlajših razvijalcev v Javi, Spring Bootu in BPM.' },
        ],
        achievements: [
          { title: 'Prepustnost odobritev', text: 'Povečal prepustnost odobritev kreditov za 25 % s sočasno obdelavo in avtomatizacijo ter zmanjšal ročni pregled.' },
          { title: 'Hitrejši Angular', text: 'Zmanjšal latenco Angular aplikacije za ~500 ms in število API klicev za 30 %.' },
        ],
        tech: experienceTech.flawless,
        photos: experiencePhotos.flawless,
      },
    ],
    skills: [
      { type: 'Jeziki', items: skillItems.languages, photo: skillPhotos.languages, icon: skillIcons.languages },
      { type: 'Backend', items: skillItems.backend, photo: skillPhotos.backend, icon: skillIcons.backend },
      { type: 'Podatki in sporočanje', items: skillItems.data, photo: skillPhotos.data, icon: skillIcons.data },
      { type: 'Infrastruktura in DevOps', items: skillItems.infra, photo: skillPhotos.infra, icon: skillIcons.infra },
      { type: 'Frontend', items: skillItems.frontend, photo: skillPhotos.frontend, icon: skillIcons.frontend },
      { type: 'Razvoj z UI', items: skillItems.ai, photo: skillPhotos.ai, icon: skillIcons.ai },
    ],
    education: [
      { school: 'Univerza v Mariboru', faculty: 'Fakulteta za elektrotehniko, računalništvo in informatiko', degree: 'Magisterij, računalništvo in informacijske tehnologije', period: 'okt. 2022 – mar. 2025', thesis: 'Avtomatizacija poslovnih procesov s platformo Camunda', photo: educationPhotos[0] },
      { school: 'Univerza v Mariboru', faculty: 'Fakulteta za elektrotehniko, računalništvo in informatiko', degree: 'Diploma, računalništvo in informacijske tehnologije', period: 'okt. 2018 – sep. 2022', thesis: 'Brezstični sistem za spremljanje delovnega časa z Raspberry Pi', photo: educationPhotos[1] },
    ],
    spoken: [
      { name: 'Slovenščina', level: 'Materni jezik', pct: 100 },
      { name: 'Angleščina', level: 'Poslovna, certifikat B2', pct: 80 },
      { name: 'Nemščina', level: 'Napredna, certifikat B2', pct: 80 },
      { name: 'Japonščina', level: 'Osnovna, v učenju', pct: 30 },
    ],
    contact: { heading: 'Ustvarimo nekaj skupaj', note: 'Živim na Japonskem · Viza: zakonec japonskega državljana · Sponzorstvo ni potrebno' },
  },

  de: {
    ui: { experience: 'Erfahrung', skills: 'Fähigkeiten', education: 'Ausbildung', languages: 'Sprachen', contact: 'Kontakt', scroll: 'Scrollen zum Ziehen', present: 'Heute', lead: 'Tech Lead', email: 'E-Mail', responsibility: 'Aufgabe', achievement: 'Erfolg', stack: 'Tech-Stack', prev: 'Zurück', next: 'Weiter', flip: 'Karte drehen für Social Links', unflip: 'Zurückdrehen' },
    hero: {
      name: 'Jan Alojz Gačnik',
      role: 'Backend Software Engineer',
      location: 'Chiba, Japan',
      facts: [{ label: 'Nationalität', value: 'Slowenisch' }, { label: 'Visum', value: 'Ehepartner eines japanischen Staatsangehörigen · Kein Sponsoring nötig' }],
      tagline: 'Verteilte Systeme, die schnell, konsistent und verfügbar bleiben.',
      summary:
        'Backend-Entwickler mit über 5 Jahren Erfahrung in Fintech und großen Consumer-Plattformen. Bei Rakuten baue ich ein global verteiltes Backend und übernehme Tech-Lead-Aufgaben in einem kleinen Team. Stark in Kotlin, Scala und Java, mit fundierter Erfahrung in Datenkonsistenz, Nebenläufigkeit und Microservice-Architektur. Früher Anwender KI-gestützter Entwicklung mit Claude-Code-Agenten und Multi-Agent-Workflows.',
      stats: [
        { value: 5, suffix: '+', label: 'Jahre Fintech & Skalierung' },
        { value: 50, suffix: '%', label: 'schnellere PR-Durchlaufzeit' },
        { value: 25, suffix: '%', label: 'höherer Freigabedurchsatz' },
        { value: 0, suffix: '', label: 'Ausfallzeit bei Produktiv-Datenoperationen' },
      ],
    },
    experience: [
      {
        company: 'Rakuten',
        role: 'Application Engineer',
        period: 'Aug. 2025 – heute',
        place: 'Tokio, Japan',
        blurb: 'Kern-Backend einer global verteilten Plattform mit hohem Durchsatz und niedriger Latenz.',
        responsibilities: [
          { title: 'Tech Lead', text: 'Im ersten Jahr Tech-Lead-Aufgaben in einem agilen Team mit drei Entwicklern übernommen: Planung, Designentscheidungen und Hauptansprechpartner für Kunden, QA und DevOps.' },
          { title: 'Backend-Services', text: 'Backend-Services für hochperformante Nutzerdaten-Operationen in Kotlin und Scala entwickelt, mit Fokus auf Zuverlässigkeit und niedrige Latenz.' },
          { title: 'Projektvorschläge', text: 'Neue Projekte der Architekturleitung vorgeschlagen, das Design verantwortet und die teamübergreifende Einführung vorangetrieben.' },
          { title: 'Datenkonsistenz', text: 'Herausforderungen bei Datenkonsistenz und Nebenläufigkeit in einer global verteilten Plattform gelöst.' },
          { title: 'ZIO-Migration', text: 'Beitrag zur großen Backend-Migration auf eine funktionale Scala-(ZIO)-Architektur.' },
        ],
        achievements: [
          { title: 'Claude-Code-Agenten', text: 'Claude-Code-Agenten, Hooks und Multi-Agent-Workflows im Team eingeführt und die PR-Durchlaufzeit um bis zu 50 % gesenkt.' },
          { title: 'Keine Ausfallzeit', text: 'Umfangreiche Produktiv-Datenoperationen unter engen Fristen geplant und ohne Ausfall und ohne Datenverlust durchgeführt.' },
        ],
        tech: experienceTech.rakuten,
        photos: experiencePhotos.rakuten,
      },
      {
        company: 'Flawless Code',
        role: 'Full-Stack Software Engineer',
        period: 'Feb. 2021 – Aug. 2025',
        place: 'Maribor, Slowenien (Remote)',
        blurb: 'Kreditverarbeitungsplattform für den europäischen Finanzsektor mit hohem Aufkommen an Anträgen und Dokumenten.',
        responsibilities: [
          { title: 'Microservices', text: 'Spring-Boot-Microservices für automatisierte Kredit-Workflows in einem agilen 8-Personen-Team entwickelt.' },
          { title: 'BPMN-Prozesse', text: 'BPMN-/Activiti-Geschäftsprozesse gemeinsam mit Business-Analysten entworfen und optimiert.' },
          { title: 'OCR-System', text: 'Beitrag zu einem OCR-Dokumentensystem mit über 90 % Genauigkeit sowie Datennormalisierung für bessere automatische Validierung.' },
          { title: 'Mentoring', text: 'Zwei Junior-Entwickler in Java, Spring Boot und BPM eingearbeitet und betreut.' },
        ],
        achievements: [
          { title: 'Freigabedurchsatz', text: 'Kreditfreigabe-Durchsatz um 25 % gesteigert durch Parallelverarbeitung und Automatisierung, weniger manuelle Prüfung.' },
          { title: 'Schnelleres Angular', text: 'Angular-Latenz um ca. 500 ms und API-Aufrufe um 30 % reduziert.' },
        ],
        tech: experienceTech.flawless,
        photos: experiencePhotos.flawless,
      },
    ],
    skills: [
      { type: 'Sprachen', items: skillItems.languages, photo: skillPhotos.languages, icon: skillIcons.languages },
      { type: 'Backend', items: skillItems.backend, photo: skillPhotos.backend, icon: skillIcons.backend },
      { type: 'Daten & Messaging', items: skillItems.data, photo: skillPhotos.data, icon: skillIcons.data },
      { type: 'Infra & DevOps', items: skillItems.infra, photo: skillPhotos.infra, icon: skillIcons.infra },
      { type: 'Frontend', items: skillItems.frontend, photo: skillPhotos.frontend, icon: skillIcons.frontend },
      { type: 'KI-gestützte Entwicklung', items: skillItems.ai, photo: skillPhotos.ai, icon: skillIcons.ai },
    ],
    education: [
      { school: 'Universität Maribor', faculty: 'Fakultät für Elektrotechnik und Informatik', degree: 'Master, Computer- und Informationstechnologien', period: 'Okt. 2022 – März 2025', thesis: 'Geschäftsprozessautomatisierung mit der Camunda-Plattform', photo: educationPhotos[0] },
      { school: 'Universität Maribor', faculty: 'Fakultät für Elektrotechnik und Informatik', degree: 'Bachelor, Computer- und Informationstechnologien', period: 'Okt. 2018 – Sep. 2022', thesis: 'Kontaktloses Arbeitszeiterfassungssystem mit Raspberry Pi', photo: educationPhotos[1] },
    ],
    spoken: [
      { name: 'Slowenisch', level: 'Muttersprache', pct: 100 },
      { name: 'Englisch', level: 'Verhandlungssicher, B2 zertifiziert', pct: 80 },
      { name: 'Deutsch', level: 'Fortgeschritten, B2 zertifiziert', pct: 80 },
      { name: 'Japanisch', level: 'Grundkenntnisse, im Studium', pct: 30 },
    ],
    contact: { heading: 'Lass uns etwas bauen', note: 'Wohnhaft in Japan · Ehepartner eines japanischen Staatsangehörigen · Kein Sponsoring nötig' },
  },
};

export const email = 'gacnik.jan@gmail.com';

export const socials = [
  { key: 'linkedin', name: 'LinkedIn', href: 'https://www.linkedin.com/in/jan-gacnik/', handle: 'jan-gacnik' },
  { key: 'github', name: 'GitHub', href: 'https://github.com/jangacnik', handle: 'jangacnik' },
  { key: 'email', name: null, href: `mailto:${email}`, handle: email },
];
