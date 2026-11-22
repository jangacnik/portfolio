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
const diagram = (name) => ({ src: img(name), fit: 'contain', background: '#fff' });

const experiencePhotos = {
  rakuten: {
    company: img('rakuten'),
    responsibilities: [img('tech-lead-duties'), img('project-management'), img('backend-services'), img('project-proposals'), img('data-consistency'), img('zio-migration')],
    achievements: [img('claude-code-agents'), img('zero-downtime')],
  },
  flawless: {
    company: img('flawless-code'),
    responsibilities: [img('microservices'), diagram('bpmn-processes'), img('ocr-pipeline'), img('mentoring')],
    achievements: [img('approval-throughput'), img('angular-speed-up')],
  },
};

const skillPhotos = {
  languages: img('skill-languages'),
  backend: img('skill-backend'),
  data: img('skill-data-messaging'),
  infra: img('skill-infra-devops'),
  frontend: img('skill-frontend'),
  ai: img('skill-ai-assisted-dev'),
};

const skillIcons = {
  languages: 'speech',
  backend: 'server',
  data: 'data',
  infra: 'cloud',
};

const educationPhotos = [img('education-masters'), img('education-bachelors')];

const skillItems = {
  languages: ['Kotlin', 'Scala (ZIO)', 'Java', 'TypeScript', 'Python'],
  backend: ['Spring Boot', 'REST APIs', 'Maven', 'Gradle', 'JUnit 5', 'Activiti / BPMN'],
  data: ['Cassandra', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'SSF'],
  infra: ['Kubernetes', 'Docker', 'GCP', 'Jenkins', 'Kibana'],
  frontend: ['Vue.js', 'Angular', 'Ionic'],
  ai: ['Claude Code agents', 'OpenCode', 'Hooks', 'Skills', 'Multi-agent workflows'],
};

export const content = {
  en: {
    ui: { experience: 'Experience', skills: 'Skills', education: 'Education', languages: 'Languages', contact: 'Contact', scroll: 'Scroll to draw', email: 'Email', responsibility: 'Responsibility', achievement: 'Achievement', stack: 'Tech Stack', prev: 'Previous', next: 'Next', flip: 'Flip card for socials', unflip: 'Flip back', updated: 'Last updated', visitors: 'visitors' },
    hero: {
      name: 'Jan Alojz Gačnik',
      role: 'Backend Software Engineer',
      location: 'Chiba, Japan',
      facts: [{ label: 'Nationality', value: 'Slovenian' }, { label: 'Visa (Japan)', value: 'Spouse of Japanese national · No sponsorship required' }],
      flavor: 'Quick to adapt. Quicker to deliver.',
      cardTexts: [
        'Fresh roast, clean commits. Love in one, care in the other.',
        'Good coffee and good code: both are in the details.',
        'Tap a coffee: gain one shipped feature.',
        'Slow-brewed coffee, carefully crafted code.',
      ],
      tagline: 'Distributed systems that stay fast, consistent and online.',
      summary:
        'Backend engineer with 5+ years in fintech and large-scale consumer platforms. Building a globally distributed backend at Rakuten and leading a small team. Strong in Kotlin, Scala and Java, with deep experience in data consistency, concurrency and microservice architecture. Early adopter of AI-assisted development with Claude Code agents and multi-agent workflows.',
      stats: [
        { value: 5, suffix: '+', label: 'Years in fintech & scale' },
        { value: 50, suffix: '%', label: 'Faster PR turnaround' },
        { value: 25, suffix: '%', label: 'Higher PR throughput' },
        { value: 0, suffix: '', label: 'Production downtime' },
        { value: 100, suffix: 'M+', label: 'Users on the systems I manage' },
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
          { title: 'Tech Lead Duties', text: 'Took on tech-lead responsibilities to support the team and tech lead in a 3-engineer Agile team: planning, design decisions, and main contact for clients, QA and DevOps.' },
          { title: 'Project Management', text: 'Handle project-management tasks: scheduling releases, running the release process, managing tasks and helping manage the team day to day.' },
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
      { school: 'University of Maribor', faculty: 'Faculty of Electrical Engineering and Computer Science', degree: "Master's Degree, Computer and Information Technologies", period: 'Oct 2022 – Mar 2025', thesis: 'Business process automation using the Camunda platform', photo: educationPhotos[0] },
      { school: 'University of Maribor', faculty: 'Faculty of Electrical Engineering and Computer Science', degree: "Bachelor's Degree, Computer and Information Technologies", period: 'Oct 2018 – Sep 2022', thesis: 'Contactless work-hour monitoring system using Raspberry Pi', photo: educationPhotos[1] },
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
    ui: { experience: 'Izkušnje', skills: 'Znanja', education: 'Izobrazba', languages: 'Jeziki', contact: 'Kontakt', scroll: 'Povleci za naprej', email: 'E-pošta', responsibility: 'Odgovornost', achievement: 'Dosežek', stack: 'Tehnologije', prev: 'Nazaj', next: 'Naprej', flip: 'Obrni kartico za omrežja', unflip: 'Obrni nazaj', updated: 'Nazadnje posodobljeno', visitors: 'obiskovalcev' },
    hero: {
      name: 'Jan Alojz Gačnik',
      role: 'Backend programski inženir',
      location: 'Chiba, Japonska',
      facts: [{ label: 'Državljanstvo', value: 'Slovensko' }, { label: 'Viza (Japonska)', value: 'Zakonec japonskega državljana · Sponzorstvo ni potrebno' }],
      flavor: 'Hiter pri prilagajanju. Še hitrejši pri izvedbi.',
      cardTexts: [
        'Sveža pražena kava, čisti commiti. Ljubezen v enem, skrb v drugem.',
        'Dobra kava in dobra koda: oboje je v podrobnostih.',
        'Tapni kavo: pridobi eno dostavljeno funkcijo.',
        'Počasi kuhana kava, skrbno izdelana koda.',
      ],
      tagline: 'Porazdeljeni sistemi, ki ostanejo hitri, konsistentni in dostopni.',
      summary:
        'Backend inženir z več kot 5 leti izkušenj v fintechu in velikih potrošniških platformah. V Rakutnu razvijam globalno porazdeljen backend in vodim manjšo ekipo. Močan v Kotlinu, Scali in Javi, z globokim znanjem o konsistentnosti podatkov, sočasnosti in mikrostoritveni arhitekturi. Zgodnji uporabnik razvoja z umetno inteligenco: agenti Claude Code in večagentni delovni tokovi.',
      stats: [
        { value: 5, suffix: '+', label: 'let v fintechu in na veliki skali' },
        { value: 50, suffix: '%', label: 'hitrejši pregled PR-jev' },
        { value: 25, suffix: '%', label: 'višja prepustnost PR-jev' },
        { value: 0, suffix: '', label: 'izpada v produkciji' },
        { value: 100, suffix: 'M+', label: 'uporabnikov na sistemih, ki jih upravljam' },
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
          { title: 'Naloge tehničnega vodje', text: 'Prevzel odgovornosti tehničnega vodje za podporo ekipi in tehničnemu vodji v agilni ekipi treh inženirjev: načrtovanje, tehnične odločitve ter glavni stik za naročnike, QA in DevOps.' },
          { title: 'Vodenje projekta', text: 'Opravljam naloge vodenja projekta: načrtovanje izdaj, izvajanje procesa izdaj, upravljanje nalog in vsakodnevna pomoč pri vodenju ekipe.' },
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
      { school: 'Univerza v Mariboru', faculty: 'Fakulteta za elektrotehniko, računalništvo in informatiko', degree: 'Magistrski študij, računalništvo in informacijske tehnologije', period: 'okt. 2022 – mar. 2025', thesis: 'Avtomatizacija poslovnih procesov s platformo Camunda', photo: educationPhotos[0] },
      { school: 'Univerza v Mariboru', faculty: 'Fakulteta za elektrotehniko, računalništvo in informatiko', degree: 'Diplomski študij, računalništvo in informacijske tehnologije', period: 'okt. 2018 – sep. 2022', thesis: 'Brezstični sistem za spremljanje delovnega časa z Raspberry Pi', photo: educationPhotos[1] },
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
    ui: { experience: 'Erfahrung', skills: 'Fähigkeiten', education: 'Ausbildung', languages: 'Sprachen', contact: 'Kontakt', scroll: 'Scrollen zum Ziehen', email: 'E-Mail', responsibility: 'Aufgabe', achievement: 'Erfolg', stack: 'Tech-Stack', prev: 'Zurück', next: 'Weiter', flip: 'Karte drehen für Social Links', unflip: 'Zurückdrehen', updated: 'Zuletzt aktualisiert', visitors: 'Besucher' },
    hero: {
      name: 'Jan Alojz Gačnik',
      role: 'Backend Software Engineer',
      location: 'Chiba, Japan',
      facts: [{ label: 'Nationalität', value: 'Slowenisch' }, { label: 'Visum (Japan)', value: 'Ehepartner eines japanischen Staatsangehörigen · Kein Sponsoring nötig' }],
      flavor: 'Schnell im Anpassen. Noch schneller im Liefern.',
      cardTexts: [
        'Frisch geröstet, saubere Commits. Liebe im einen, Sorgfalt im anderen.',
        'Guter Kaffee und guter Code: beides steckt im Detail.',
        'Tappe einen Kaffee: erhalte ein ausgeliefertes Feature.',
        'Langsam gebrühter Kaffee, sorgfältig gefertigter Code.',
      ],
      tagline: 'Verteilte Systeme, die schnell, konsistent und verfügbar bleiben.',
      summary:
        'Backend-Entwickler mit über 5 Jahren Erfahrung in Fintech und großen Consumer-Plattformen. Bei Rakuten baue ich ein global verteiltes Backend und übernehme Tech-Lead-Aufgaben in einem kleinen Team. Stark in Kotlin, Scala und Java, mit fundierter Erfahrung in Datenkonsistenz, Nebenläufigkeit und Microservice-Architektur. Früher Anwender KI-gestützter Entwicklung mit Claude-Code-Agenten und Multi-Agent-Workflows.',
      stats: [
        { value: 5, suffix: '+', label: 'Jahre Fintech & Skalierung' },
        { value: 50, suffix: '%', label: 'schnellere PR-Durchlaufzeit' },
        { value: 25, suffix: '%', label: 'höherer PR-Durchsatz' },
        { value: 0, suffix: '', label: 'Produktionsausfallzeit' },
        { value: 100, suffix: 'M+', label: 'Nutzer auf den von mir betreuten Systemen' },
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
          { title: 'Tech-Lead-Aufgaben', text: 'Tech-Lead-Aufgaben übernommen, um Team und Tech Lead in einem agilen Team mit drei Entwicklern zu unterstützen: Planung, Designentscheidungen und Hauptansprechpartner für Kunden, QA und DevOps.' },
          { title: 'Projektmanagement', text: 'Übernehme Projektmanagement-Aufgaben: Release-Planung, Durchführung des Release-Prozesses, Aufgabenverwaltung und tägliche Unterstützung bei der Teamführung.' },
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
      { school: 'Universität Maribor', faculty: 'Fakultät für Elektrotechnik und Informatik', degree: 'Masterabschluss, Computer- und Informationstechnologien', period: 'Okt. 2022 – März 2025', thesis: 'Geschäftsprozessautomatisierung mit der Camunda-Plattform', photo: educationPhotos[0] },
      { school: 'Universität Maribor', faculty: 'Fakultät für Elektrotechnik und Informatik', degree: 'Bachelorabschluss, Computer- und Informationstechnologien', period: 'Okt. 2018 – Sep. 2022', thesis: 'Kontaktloses Arbeitszeiterfassungssystem mit Raspberry Pi', photo: educationPhotos[1] },
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

export const birthDate = new Date(1999, 0, 20);

export const lastUpdated = new Date(2026, 9, 1);


const magicText = {
  "Core backend of a globally distributed platform with high-throughput, low-latency requirements.": "Haste, flash. Core backend of a globally distributed platform: high throughput, low latency.",
  "Took on tech-lead responsibilities to support the team and tech lead in a 3-engineer Agile team: planning, design decisions, and main contact for clients, QA and DevOps.": "Each sprint, plan the work and make design decisions. Main contact for clients, QA and DevOps. Supports your tech lead and a 3-engineer team.",
  "Handle project-management tasks: scheduling releases, running the release process, managing tasks and helping manage the team day to day.": "At the beginning of each release, schedule it and run the release process. Manage tasks and help manage the team day to day.",
  "Built backend services for high-throughput user data operations in Kotlin and Scala, focused on reliability and low latency.": "Build backend services in Kotlin and Scala for high-throughput user data operations. Reliability. Low latency.",
  "Proposed new projects to architecture leadership, owned the design and drove adoption across teams.": "When you propose a new project to architecture leadership, you own its design. Drive its adoption across teams.",
  "Solved data consistency and concurrency challenges in a globally distributed platform.": "Whenever data consistency or concurrency becomes a problem in a globally distributed platform, solve it.",
  "Contributed to a major backend migration to a functional Scala (ZIO) architecture.": "Contribute to the major backend migration to a functional Scala (ZIO) architecture.",
  "Introduced Claude Code agents, hooks and multi-agent workflows to the team, cutting PR turnaround by up to 50%.": "When you introduce Claude Code agents, hooks and multi-agent workflows to the team, PR turnaround is cut by up to 50%.",
  "Planned and executed large-scale production data operations under tight deadlines with zero downtime and no data loss.": "Indestructible. Large-scale production data operations under tight deadlines cause zero downtime and no data loss.",
  "Credit processing platform for the European financial sector, handling high volumes of requests and documents.": "Credit processing platform for the European financial sector. Whenever a request or document enters, process it. Handles high volumes.",
  "Developed Spring Boot microservices for automated credit workflows in an 8-person Agile team.": "Whenever a credit workflow needs automating, create a Spring Boot microservice. Fights alongside an 8-person Agile team.",
  "Designed and optimized BPMN / Activiti business processes with business analysts.": "At the beginning of each design phase, design and optimize a BPMN / Activiti business process. Teamwork with business analysts.",
  "Contributed to an OCR document pipeline with 90%+ accuracy and data normalization that improved automated validation.": "OCR document pipeline: 90%+ accuracy. Whenever data is normalized, automated validation improves.",
  "Mentored and onboarded 2 junior developers in Java, Spring Boot and BPM.": "When 2 junior developers enter the battlefield, onboard and mentor them in Java, Spring Boot and BPM. They get +1/+1 counters.",
  "Raised credit approval throughput by 25% through parallel processing and automation, reducing manual review.": "Parallel processing. Automation. Credit approval throughput gets +25%. Manual review is reduced.",
  "Cut Angular latency by ~500 ms and API calls by 30%.": "Flash. Angular latency gets −500 ms and API calls get −30%."
};

const magicize = (text) => magicText[text] ?? text;

const mtgThesis = [
  '“Business process automation using the Camunda platform.” — Thesis',
  '“Contactless work-hour monitoring system using Raspberry Pi.” — Thesis',
];

const mtgStatLabels = [
  'Experience counters: fintech & scale',
  'Faster PR turnaround. Haste.',
  'Higher PR throughput. Trample.',
  'Production downtime. Hexproof.',
  'Users on the systems I manage',
];

export const mtgContent = {
  ...content.en,
  ui: {
    ...content.en.ui,
    experience: 'Battlefield',
    skills: 'Spellbook',
    education: 'Library',
    flip: 'Transform this card for socials',
    unflip: 'Transform back',
    responsibility: 'Ability',
  },
  hero: {
    ...content.en.hero,
    tagline: 'Distributed systems gain haste, consistency and hexproof from downtime.',
    summary:
      'Backend engineer with 5+ years in fintech and large-scale consumer platforms. When this engineer enters the battlefield at Rakuten, a globally distributed backend gains reliability and a small team gains support. Strong in Kotlin, Scala and Java. Deep experience in data consistency, concurrency and microservice architecture. Early adopter of AI-assisted development: Claude Code agents and multi-agent workflows.',
    facts: [
      { label: 'Nationality', value: 'Slovenian' },
      { label: 'Visa (Japan)', value: 'Spouse of a Japanese national. Sponsorship cost: {0}.' },
    ],
    stats: content.en.hero.stats.map((stat, index) => ({ ...stat, label: mtgStatLabels[index] })),
  },
  experience: content.en.experience.map((job) => ({
    ...job,
    blurb: magicize(job.blurb),
    responsibilities: job.responsibilities.map((item) => ({ ...item, text: magicize(item.text) })),
    achievements: job.achievements.map((item) => ({ ...item, text: magicize(item.text) })),
  })),
  education: content.en.education.map((school, index) => ({ ...school, thesis: mtgThesis[index] })),
  contact: {
    heading: 'Let’s build something. Cast it.',
    note: 'Based in Japan. Spouse of a Japanese national. No sponsorship required: cost {0}.',
  },
};
