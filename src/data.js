/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Tvishaa",
  last: "Bindal",
  fullName: "Tvishaa Bindal",
  tagline: "Strategic Thinker | Competitive Chess Player | Creative Performer | Lifelong Learner",
  location: "",
  email: "",
  phone: "",
  bio: [
    "I'm Tvishaa Bindal, a high school student with a passion for solving problems, embracing challenges, and continuously learning. Whether I'm planning my next move on a chessboard, presenting solutions at a Model United Nations conference, or expressing stories through Kathak, I enjoy experiences that push me to think critically and grow with purpose.",
    "My interests span academics, strategy, leadership, and the arts, allowing me to develop a balanced perspective while exploring different ways of learning and contributing. As I continue my journey in science and technology, I hope to apply the same focus, resilience, and creativity that have shaped my experiences beyond the classroom.",
    "I am driven by the belief that meaningful growth comes from stepping outside my comfort zone. Every tournament, performance, conference, and volunteering opportunity has taught me that perseverance and continuous learning are far more valuable than any single achievement — and my goal is to use analytical thinking, creativity, and collaboration to solve real-world problems while making a positive impact on the communities around me.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    youtube: "https://youtube.com/@filmsbytvishaa?si=d9iLzoU4pP2clCtw",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder.jpg",
  photo: "/photo.jpg",
  aboutPhoto: "/about-photo.jpg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },
  { label: "Achievements", to: "/awards" },
  { label: "Community Service", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Roles & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "roinet-solutions-internship",
    role: "Intern",
    org: "Roinet Solution Pvt Ltd",
    logo: "",
    location: "India",
    dates: "June 2025",
    meta: "23–26 June 2025 · India ·",
    badge: "Internship",
    desc: "Internship at Roinet Solution Pvt Ltd, a company building India's largest last-mile financial services network for underserved communities.",
    bullets: [
      "Gained exposure to Roinet's hyperlocal network of 3.78 lakh+ Customer Service Points delivering financial and non-financial services",
      "Observed how last-mile digital financial infrastructure reaches underserved individuals and communities across India",
    ],
    tags: ["Financial Inclusion", "Internship", "Fintech"],
    featured: true,
  },
  {
    slug: "climate-policy-research",
    role: "Student Researcher",
    org: "Independent Research — Climate Policy",
    logo: "",
    location: "Faridabad, Haryana, India",
    dates: "Ongoing",
    meta: "Ongoing · Climate Policy Research ·",
    badge: "Research",
    desc: "Researching climate policy and sustainable development through academic literature review, policy analysis, and structured research writing. Authored a paper titled \"Urban Heat Governance in Delhi: A Critical Review of Policy Implementation and Equity Implications.\"",
    bullets: [
      "Reviewed the Delhi action plan and state action plan and how they translated into policy commitments between 2015 and 2025",
      "Analyzed implementation gaps affecting socially vulnerable populations in Delhi",
      "Conducted structured literature review, policy analysis, and academic writing",
    ],
    tags: ["Academic Research", "Policy Analysis", "Climate Policy", "Academic Writing"],
    featured: true,
  },
  {
    slug: "mun-secretariat-samvaad-conclave",
    role: "Organizing Secretariat",
    org: "Samvaad Conclave",
    logo: "",
    location: "Faridabad, Haryana, India",
    dates: "2025 – 2026",
    meta: "2025–2026 · Faridabad, India · Secretariat ·",
    badge: "Secretariat",
    desc: "Served two consecutive years on the organizing secretariat of Samvaad Conclave, one of the largest Model United Nations conferences in Faridabad.",
    bullets: [
      "Served as Deputy HOD of External Affairs for Samvaad Conclave 2025",
      "Served as USG of Executive Board Affairs for Samvaad Conclave 2026",
      "Coordinated conference operations and delegate affairs across two consecutive editions",
    ],
    tags: ["Model UN", "Leadership", "Event Organization"],
    featured: true,
  },
  {
    slug: "discipline-prefect-student-council",
    role: "Discipline Prefect",
    org: "School Student Council",
    logo: "",
    location: "Faridabad, Haryana, India",
    dates: "",
    meta: "Faridabad, India · POCSO Committee ·",
    badge: "Elected",
    desc: "Held the position of Discipline Prefect and served as a student member of the school's POCSO committee, while volunteering across major school-wide events.",
    bullets: [
      "Served as a student member of the school's POCSO committee",
      "Volunteered at the School's Annual MUN — Rajnaya Youth Parliament",
      "Volunteered at Tech Blitz, an interschool meet for inspiring tech talent",
      "Volunteered at Prerna, an interschool meet for motivating cultural talents",
      "Supported Annual Functions and other school-wide events",
    ],
    tags: ["Leadership", "Student Governance"],
    featured: false,
  },
  {
    slug: "creative-council",
    role: "Member",
    org: "School Creative Committee",
    logo: "",
    location: "Faridabad, Haryana, India",
    dates: "",
    meta: "Faridabad, India ·",
    badge: "Committee",
    desc: "Member of the school's creative committee, volunteering to help plan and run several school events.",
    bullets: [
      "Contributed creative planning and execution for multiple school events",
      "Collaborated with peers across committees to support school-wide functions",
    ],
    tags: ["Creative Direction", "Event Planning"],
    featured: false,
  },
];

/* ---- Creative & academic projects (renders as "Featured Projects") ---- */

export const PROJECTS = [
  {
    name: "\"Taking the Reins\" — Short Film",
    org: "Writer & Director",
    meta: "1st Prize, Kriti Interschool Competition · May 2026",
    desc: "Wrote and directed a short film exploring the concept of substance abuse. The film was well received and won first prize at Kriti, an interschool competition held at The Modern School, Faridabad.",
    tags: ["Filmmaking", "Screenwriting", "Direction", "Social Awareness"],
    featured: true,
  },
  {
    name: "Cambridge Re:Think Essay Competition",
    org: "Essay Writer",
    meta: "2026",
    desc: "Participated in the Cambridge Re:Think Essay Competition 2026, writing on the topic \"Can healing ever be complete or is it always an ongoing negotiation with pain, memory and identity.\"",
    tags: ["Essay Writing", "Critical Thinking"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "",
    title: "CBSE North Zone Chess Championship — Multiple Medals",
    meta: "CBSE North Zone Chess Championships · 2022–2026",
    detail: "Bronze (U-14 Mixed, Karnal, 2022); Silver (U-17 Mixed, Sangrur, 2024); Silver (U-17 Girls, Kalka, 2025); Silver (U-19 Girls, Jhajjar, 2026).",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "SGFI State & District Chess Championships — Multiple Medals",
    meta: "SGFI Haryana State & Faridabad District · 2022–2026",
    detail: "Gold (U-14 Girls, SGFI Faridabad District, 2022); Gold (U-14 Girls, Haryana State, Kurukshetra, 2022); Silver (U-17 Girls, Haryana State, Kurukshetra, 2024); Bronze (U-17 Girls, Faridabad District, 2025); Bronze (U-19 Girls, Faridabad District, 2026).",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "\"Taking the Reins\" — 1st Prize, Kriti Interschool Competition",
    meta: "The Modern School, Faridabad · May 2026",
    detail: "Wrote and directed a short film on the theme of substance abuse, awarded first prize at the Kriti interschool competition.",
    link: "https://youtu.be/1JfCNQGpDlg?si=Qj8euq99S9ry5EyJ",
    featured: true,
  },
  {
    icon: "",
    title: "Academic Excellence — Scholar Batch & Merit Fee Waiver",
    meta: "School Scholar Batch · Since Grade 9",
    detail: "Selected to the school's Scholar Batch (top 40 of 280 students, by academic merit) since Grade 9, and received a 100% merit-based fee waiver in Grade 11.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "MUN Secretariat — Samvaad Conclave",
    meta: "2025 & 2026 · Faridabad",
    detail: "Served as Deputy HOD of External Affairs (2025) and USG of Executive Board Affairs (2026) at Samvaad Conclave, one of Faridabad's largest MUN conferences.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Delegate, 5 Model United Nations Conferences",
    meta: "Model United Nations",
    detail: "Represented delegations at 5 MUN conferences including Chaupal x NSS IIT Delhi Kaizen MUN, Rajnaya Youth Parliament, and Vezolution MUN.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Cambridge Re:Think Essay Competition 2026",
    meta: "Essay Competition",
    detail: "Wrote an essay on \"Can healing ever be complete or is it always an ongoing negotiation with pain, memory and identity.\"",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "State-Level Fine Arts Competition — 3rd Position",
    meta: "Fine Art and Cultural Foundation, Faridabad",
    detail: "Awarded 3rd position in a state-level painting competition.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Kathak — Senior Diploma & Competition Wins",
    meta: "Prayag Sangeet Samiti, Allahabad",
    detail: "Completed 5 years of formal Kathak training and earned a senior diploma; won classical dance competitions including Khanak, held in Faridabad.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "District-Level Teachers' Chess Tournament — Letter of Appreciation",
    meta: "Palwal District · July 2025",
    detail: "Organized a District-Level Teachers' Chess Tournament on International Chess Day, drawing 40+ teacher participants; received a letter of appreciation from the Palwal District Education Officer's office.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of interest ---- */

export const ARTICLES = [
  {
    title: "Climate Policy & Urban Governance",
    outlet: "Researching climate action plans, urban heat governance, and equity implications for socially vulnerable populations",
    link: "",
  },
  {
    title: "Strategic Thinking & Competitive Chess",
    outlet: "National- and state-level competitive chess, from tournament play to coaching and community chess education",
    link: "",
  },
  {
    title: "International Relations & Diplomacy",
    outlet: "Model United Nations — as delegate, organizer, and secretariat member across school and university-level conferences",
    link: "",
  },
  {
    title: "Creative & Performing Arts",
    outlet: "Kathak classical dance, painting and sketching, and filmmaking exploring social issues",
    link: "",
  },
];

/* ---- Leadership, service & community ---- */

export const VOLUNTEER = {
  stats: [
    { value: "40+", label: "Teachers at Chess Tournament" },
    { value: "3", label: "Months Teaching Underprivileged Kids" },
    { value: "5", label: "MUN Conferences as Delegate" },
  ],
  orgs: [
    {
      name: "District-Level Teachers' Chess Tournament",
      role: "Organizer",
      desc: "Organized a District-Level Teachers' Chess Tournament in Palwal on International Chess Day (20 July 2025); 40+ teachers registered. Held in the presence of the District Education Officer, Palwal, and covered in local newspapers; received a letter of appreciation from the DEO's office.",
    },
    {
      name: "Chess Classes for Underprivileged Children",
      role: "Volunteer Instructor · ~3 Months",
      desc: "Conducted chess classes for underprivileged children in government schools in Faridabad, using puzzles and friendly matches to build interest, for about 4 hours per week over 3 months.",
    },
    {
      name: "Annual Scholarship Event for Girls, Hamidpur",
      role: "Volunteer Organizer",
      desc: "Helped organize the Annual Scholarship Event for Girls at Sat Gopal Religious and Charitable Trust, Hamidpur, and volunteered to conduct sessions on Chess and Maths for students in nearby villages.",
    },
    {
      name: "Grandparents Trust",
      role: "Volunteer",
      desc: "Volunteered with the Grandparents Trust in community welfare activities.",
    },
    {
      name: "Kritagya Foundation",
      role: "Volunteer",
      desc: "Participated in donation drives organized by the Kritagya Foundation.",
    },
  ],
};

/* ---- Athletics, arts & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "",
    name: "Competitive Chess",
    desc: "National-level competitive chess player across CBSE and SGFI circuits, competing in U-11 through U-19 categories. Highlights: Silver at CBSE North Zone U-19 Girls (2026), Silver at CBSE North Zone U-17 Girls (2025), Gold at SGFI U-14 Girls Haryana State (2022), and multiple other state and district medals.",
  },
  {
    icon: "",
    name: "Model United Nations",
    desc: "Delegate at 5 Model United Nations conferences and served on the organizing secretariat, including two consecutive years as Deputy HOD of External Affairs and USG of Executive Board Affairs at Samvaad Conclave. Notable conferences: Chaupal x NSS IIT Delhi Kaizen MUN, Rajnaya Youth Parliament, and Vezolution MUN.",
  },
  {
    icon: "",
    name: "Kathak (Classical Dance)",
    desc: "5 years of formal training in Kathak with a senior diploma from Prayag Sangeet Samiti, Allahabad. Winner of classical dance competitions including Khanak, held in Faridabad.",
  },
  {
    icon: "",
    name: "Fine Arts",
    desc: "Active painter and sketcher; won 3rd position in the State-Level Fine Arts competition held by the Fine Art and Cultural Foundation, Faridabad.",
  },
  {
    icon: "",
    name: "Filmmaking",
    desc: "Wrote and directed the short film \"Taking the Reins,\" exploring a substance-abuse concept, which won first prize at the Kriti interschool competition held at The Modern School, Faridabad.",
  },
  {
    icon: "",
    name: "Public Speaking & Research",
    desc: "Delivered a TED Talk on climate control at Vidya Mandir Public School, Faridabad, and authored research papers on climate policy and urban heat governance.",
  },
];

/* ---- Skills ---- */
/* NOTE: Skills are inferred from described activities, research, and training —
   review and edit before publishing. Languages were not explicitly stated in the
   source documents and are inferred defaults for an Indian CBSE-curriculum student. */

export const SKILLS = [
  {
    group: "Core Competencies",
    items: ["Strategic Thinking", "Leadership", "Public Speaking", "Critical Thinking", "Time Management", "Teamwork"],
  },
  {
    group: "Research & Writing",
    items: ["Academic Research", "Literature Review", "Policy Analysis", "Academic Writing", "Essay Writing"],
  },
  {
    group: "Arts & Performance",
    items: ["Kathak (Classical Dance)", "Painting & Sketching", "Filmmaking", "Screenwriting"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi"],
  },
];

/* ---- Education ---- */
/* NOTE: School name was not stated in either source document — only the city
   (Faridabad, Haryana) and subjects were given. Confirm and fill in the school
   name before publishing. */

export const EDUCATION = [
  {
    school: "",
    location: "Faridabad, Haryana, India",
    level: "High School — Scholar Batch (Top 40 of 280 students)",
    dates: "",
    gpa: "",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
];

/* ---- Test scores (none listed in the source documents) ---- */

export const TEST_SCORES = [];

/* ---- Looking ahead ---- */

export const LOOKING_AHEAD = [
  "I want to apply analytical thinking, creativity, and collaboration to solve real-world problems while continuing my journey in science and technology.",
  "I hope to keep building on my experiences in strategy, leadership, and the arts — bringing the same focus, resilience, and creativity into new challenges ahead.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community Service", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
  { label: "FilmsbyTvishaa",   href: PROFILE.socials.youtube}
];
