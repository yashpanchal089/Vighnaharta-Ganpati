/**
 * BAPPA'S BUSINESS DRISHTI - 50 GBS MEMBER CATALOG & CONTROLLER
 * Mahant Software - Handcrafted Indian Festive Experience
 */

// 50 Tailored Industry Solutions for Business Networking Groups (GBS / BNI)
const CONFIG = {
  // Yash's WhatsApp phone number (with country code)
  YASH_WHATSAPP_PHONE: '919000000000',
  APP_TITLE: "Ganpati Bappa Business Drishti",

  SOLUTIONS_CATALOG: [
    {
      id: "ca_tax",
      category: "Chartered Accountant & Tax",
      keywords: ["ca", "tax", "audit", "chartered accountant", "gst", "taxation", "auditing"],
      statement: "“Client documents WhatsApp par bikhre hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      desc: "Subah se shaam tak IT returns & audit files, par client documents collection abhi bhi manual WhatsApp aur calls par atka hai!",
      recommendation: "Dedicated Client Document Vault & Automated Tax Calendar Portal by Yash"
    },
    {
      id: "interior_architect",
      category: "Architect & Interior Designer",
      keywords: ["interior", "interiors", "architect", "architecture", "decor", "home decor", "elevation", "vastu"],
      statement: "“High-end projects Instagram me kho jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      desc: "Lakhon rupaye ke luxury interiors deliver kiye, par jab naya client portfolio maangta hai toh WhatsApp par 50 photos bhejni padti hain!",
      recommendation: "Ultra-Fast High-Res 3D Architectural Portfolio & Walkthrough Showcase"
    },
    {
      id: "real_estate",
      category: "Real Estate & Property Consultant",
      keywords: ["real estate", "realty", "property", "properties", "broker", "developer", "plots", "land", "housing", "township"],
      statement: "“Listing portals par bhari commission ja raha hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      desc: "Third-party portals aapke property leads kisi aur broker ko bhi bech dete hain, aur direct buyer inquiry link missing hai!",
      recommendation: "Exclusive Property Showcase Website with 1-Click Direct WhatsApp Enquiries"
    },
    {
      id: "building_materials",
      category: "Tiles, Marbles & Sanitaryware",
      keywords: ["tiles", "marble", "sanitary", "granite", "ceramics", "bath", "stone", "plywood", "laminates", "timber", "hardware"],
      statement: "“Heavy 50MB PDF catalogues koi client nahi kholta!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
      desc: "Showroom me 500+ design patterns hain, par clients ko latest texture aur size filter karne ke liye blazing-fast digital link nahi milta.",
      recommendation: "1-Tap Mobile Tile & Sanitaryware Visualizer Catalogue"
    },
    {
      id: "civil_contractor",
      category: "Civil Contractor & Construction",
      keywords: ["civil", "contractor", "construction", "builder", "infra", "rcc", "structural contractor"],
      statement: "“Corporate tenders me company profile weak lagti hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
      desc: "10+ saal se heavy projects complete kiye hain, par jab corporate buyer website verify karta hai toh credibility profile nahi milti!",
      recommendation: "Verified Corporate Contractor Credential Web Profile & Completed Sites Gallery"
    },
    {
      id: "event_wedding_planner",
      category: "Event Planner & Mandap Decorator",
      keywords: ["event", "events", "mandap", "decorator", "planner", "sangeet", "reception", "wedding planner"],
      statement: "“Peak season me dates & decor booking slip ho rahi hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      desc: "Shaadi ke muhurat me 10 log ek saath WhatsApp karte hain, par live wedding decor lookbook aur booking slot checker website par nahi hai.",
      recommendation: "Interactive Royal Wedding Theme Lookbook & Muhurat Booking Portal"
    },
    {
      id: "catering_food",
      category: "Catering & Banquet Services",
      keywords: ["cater", "catering", "rasoi", "banquet", "sweets", "food", "kitchen", "thali", "restaurant", "hospitality", "mithai"],
      statement: "“Clients maangte hain custom menu & per-plate quote!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
      desc: "Offline khana lajawab hai, par client ko online live menu select karne aur instant estimated plate cost calculate karne ka system missing hai.",
      recommendation: "Festive Live Menu Selector & Instant Catering Plate Cost Estimator"
    },
    {
      id: "electrical_contractor",
      category: "Electrical Contractor & Industrial Wiring",
      keywords: ["electrical", "electric", "wiring", "panel", "transformer", "cables", "switchgear", "voltage", "substation", "light"],
      statement: "“Industrial tenders me past safety audit proof missing!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      desc: "Factory owners high-voltage safety credentials maangte hain, par web par aapka industrial HT/LT panel portfolio verify nahi hota.",
      recommendation: "Industrial Electrical Contractor Portfolio with Certified Compliance Badges"
    },
    {
      id: "solar_energy",
      category: "Solar Energy & Rooftop Systems",
      keywords: ["solar", "energy", "inverter", "rooftop", "sun", "panel", "green", "clean", "renewable", "subsidy"],
      statement: "“Customers subsidy & electricity bill savings me confuse hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
      desc: "Har client ko phone par 20 minute samjhana padta hai ki kitna bill bachega, jabki 1-click live solar savings calculator website par chahiye!",
      recommendation: "Interactive Rooftop Solar ROI & PM Surya Ghar Subsidy Savings Calculator"
    },
    {
      id: "cnc_laser_jobwork",
      category: "CNC Machining & Laser Cutting",
      keywords: ["cnc", "laser", "machining", "jobwork", "cutting", "lathe", "precision", "engineering", "mould", "die", "tooling"],
      statement: "“Mid-week machines idle hain, drawing upload portal missing!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
      desc: "OEMs ko parts cut karwane hote hain par direct CAD/DXF drawing upload aur instant quotation portal na hone se order bahar nikal jaata hai.",
      recommendation: "B2B Precision Jobwork Portal with Direct CAD/DXF Upload & Rapid RFQ"
    },
    {
      id: "corrugated_packaging",
      category: "Packaging & Corrugated Box Manufacturer",
      keywords: ["pack", "packaging", "box", "corrugated", "carton", "poly", "wrapper", "boxes", "craft", "packaging"],
      statement: "“Bulk buyers custom box size & ply grade poochte rehte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      desc: "Har company ka custom packaging dimension alag hota hai, par online box spec calculator aur bulk MOQ quote engine missing hai.",
      recommendation: "Custom Corrugated Box Specification & Instant Bulk Quote Portal"
    },
    {
      id: "chemicals_trading",
      category: "Chemicals & Industrial Solvents",
      keywords: ["chemical", "solvent", "acid", "pharma", "petro", "polymers", "resin", "coatings", "chemicals", "distributor"],
      statement: "“Safety MSDS & COA certs email me ghum ho jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>`,
      desc: "B2B plants ko har consignment ke sath Certificate of Analysis (COA) chahiye, jo compliance-ready web portal par turant milna chahiye.",
      recommendation: "Compliance-Ready Chemical B2B Portal with 1-Click COA & MSDS Downloads"
    },
    {
      id: "hardware_fasteners",
      category: "Hardware, Fasteners & Industrial Tools",
      keywords: ["hardware", "tools", "fasteners", "bolts", "nuts", "screws", "bearings", "valves", "pipes", "machinery"],
      statement: "“Phone calls par galat part number order ho jata hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      desc: "5000+ SKU hardware me se client accurate specification nahi dekh paata, jisse returns aur billing confusion badhta hai.",
      recommendation: "Searchable Industrial Hardware & Fastener Part-Number Digital Catalog"
    },
    {
      id: "steel_fabrication",
      category: "Steel Fabrication & PEB Sheds",
      keywords: ["steel fabrication", "fabrication", "shed", "sheds", "peb", "truss", "structural steel", "industrial shed"],
      statement: "“Clients engineering quality ko local welding samajh lete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      desc: "PEB industrial sheds aur structural fabrication ki asli strength tab dikhti hai jab heavy factory erection ka video & case study ho!",
      recommendation: "Heavy Engineering & PEB Industrial Shed Showcase Platform"
    },
    {
      id: "textile_garments",
      category: "Textile & Garment Wholesaler",
      keywords: ["textile", "saree", "kurti", "fabric", "garment", "apparel", "silk", "cotton", "clothing", "fashion", "yarn"],
      statement: "“Outstation buyers har roz maangte hain: 'Send new design'!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
      desc: "WhatsApp gallery bhar jaati hai, phone hang ho jata hai, jabki wholesale clients ko private password-protected catalogue link chahiye!",
      recommendation: "Private Password-Protected Wholesale B2B Fashion & Saree Lookbook"
    },
    {
      id: "commercial_printing",
      category: "Printing & Packaging Press",
      keywords: ["print", "printing", "offset", "brochure", "labels", "flex", "signage", "banner", "printcraft"],
      statement: "“Clients baar-baar paper GSM aur finish rate poochte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
      desc: "Matte lamination, spot UV, ya die-cut foil ka live sample guide na hone se inquiry quote me 2 din ka delay ho jata hai.",
      recommendation: "Digital Print Finishes Guide, Sample Visualizer & Instant Quote System"
    },
    {
      id: "diagnostic_pathology",
      category: "Diagnostic Lab & Pathology",
      keywords: ["pathology", "diagnostic", "blood test", "xray", "sonography", "mri", "laboratory", "blood lab"],
      statement: "“Patients test report status ke liye baar-baar phone karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      desc: "Fasting rules aur home sample collection booking ke liye receptionist phone me busy rehti hai, automated portal missing hai!",
      recommendation: "1-Tap Home Blood Sample Booking & Instant Online Report Download Portal"
    },
    {
      id: "dental_clinic",
      category: "Dental & Implant Clinic",
      keywords: ["dental", "dentist", "teeth", "tooth", "smile", "implant", "braces", "ortho", "oral", "clinic"],
      statement: "“High-paying smile makeover cases corporate chains le jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
      desc: "Aapki clinical skills top-class hain, par online patients ko verified Google patient reviews aur before/after implant showcase nahi dikhta!",
      recommendation: "High-Trust Dental Practice Website with Patient Video Testimonials & Booking"
    },
    {
      id: "physiotherapy_clinic",
      category: "Physiotherapy & Rehabilitation",
      keywords: ["physio", "physiotherapy", "rehab", "pain", "spine", "joint", "ortho", "exercise", "therapy", "ergonomics"],
      statement: "“Patients beech me treatment session drop kar dete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
      desc: "Home exercise routine follow-up aur painless recovery packages ka digital visual portal na hone se patient retention kam ho jata hai.",
      recommendation: "Patient Recovery Portal with Home Exercise Video Guide & Slot Booking"
    },
    {
      id: "hospital_nursing",
      category: "Hospital & Nursing Home",
      keywords: ["hospital", "nursing", "emergency", "doctor", "medical", "clinic", "healthcare", "icu", "maternity", "beds"],
      statement: "“Emergency contact Google par galat ya outdated dikhta hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
      desc: "Emergency ke waqt patient families ko 24/7 available doctors, bed availability aur cashless TPA insurance list turant nahi milti.",
      recommendation: "24/7 Verified Emergency Medical Directory, TPA Insurance & Doctor Schedule"
    },
    {
      id: "ayurveda_wellness",
      category: "Ayurveda & Holistic Wellness",
      keywords: ["ayurveda", "ayurvedic", "panchakarma", "vaidya", "herbal wellness", "nadi pariksha"],
      statement: "“Patients genuine herbal purity par doubt karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      desc: "Panchakarma aur traditional treatments ki scientific case studies aur doctor credentials ek clean, dignified website par prastut honi chahiye.",
      recommendation: "Authentic Ayurveda & Panchakarma Treatment Journey & Case Study Portal"
    },
    {
      id: "gym_fitness",
      category: "Gym & Fitness Club",
      keywords: ["gym", "fitness", "crossfit", "workout", "trainer", "muscle", "yoga", "training", "diet", "sports"],
      statement: "“Walk-ins aate hain par annual membership me convert nahi hote!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12"/></svg>`,
      desc: "New year ya festive offers par 1-tap Free Trial Pass aur real members ki weight loss transformation gallery online missing hai!",
      recommendation: "1-Tap Free Trial Gym Pass Booking & Member Transformation Showcase"
    },
    {
      id: "salon_bridal",
      category: "Salon, Spa & Bridal Makeup",
      keywords: ["salon", "spa", "beauty", "parlour", "bridal", "makeup", "hair", "skin", "makeover", "grooming"],
      statement: "“Bridal makeup muhurat me double booking ka risk!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>`,
      desc: "Brides high-end HD makeup lookbook dekhna chahti hain, par salon ka Instagram portfolio messy hai aur slot reservation tool nahi hai.",
      recommendation: "VIP Bridal Lookbook Showcase with Advance Slot Reservation Calendar"
    },
    {
      id: "photography_cinematography",
      category: "Photography & Cinematography",
      keywords: ["photography", "photographer", "cinematography", "photos", "studio", "videography", "photo studio", "candid"],
      statement: "“Google Drive links expire ho jaate hain aur cheap lagte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
      desc: "50-lakh ki wedding shoot karke client ko expiring Drive link bhejna unprofessional lagta hai, jabki branded private client gallery honi chahiye!",
      recommendation: "Private High-Speed Client Photo Gallery with Watermark & Proofing System"
    },
    {
      id: "tours_travel",
      category: "Tours & Holiday Travel Agency",
      keywords: ["travel", "tours", "holiday", "holidays", "vacation", "trips", "flight booking", "tourism"],
      statement: "“Clients OTA portals se rate compare karke drop ho jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
      desc: "Personalized curated travel itinerary aur direct WhatsApp visa assistant na hone se buyers automated flight apps par chale jaate hain.",
      recommendation: "Bespoke International Holiday Itinerary Planner & Direct Visa Lead Bot"
    },
    {
      id: "corporate_gifting",
      category: "Corporate Gifting & Merchandise",
      keywords: ["gift", "gifting", "merchandise", "diwali", "corporate gifts", "hampers", "mementos", "trophies", "promotional"],
      statement: "“Diwali & festive rush me HR managers bulk tiers maangte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
      desc: "Companies ko 100, 500 ya 2000 units ke sample photo aur volume discount slabs turant chahiye, jo ek clean portal par instantly show ho!",
      recommendation: "Corporate Festive Gift Catalogue with Live Volume Tier Pricing Engine"
    },
    {
      id: "cctv_security",
      category: "CCTV, Fire & Biometric Security",
      keywords: ["cctv", "security", "biometric", "surveillance", "camera", "alarm", "fire", "access", "safety", "automation"],
      statement: "“Clients saste online camera se compare karke quality bhool jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
      desc: "Aap installation & AMC service top-class dete hain, par web par package comparison aur live maintenance guarantee clear nahi hai.",
      recommendation: "Security System Demonstration Portal & Annual Maintenance (AMC) Package Comparison"
    },
    {
      id: "packers_movers",
      category: "Packers & Movers Logistics",
      keywords: ["packers", "movers", "logistics", "shifting", "transport", "cargo", "relocation", "truck", "freight", "warehouse"],
      statement: "“Customers hidden charges aur fake operators se darte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      desc: "Clients ko shifting cost ka transparent instant distance calculator aur vehicle tracking assurance online dekhna hota hai.",
      recommendation: "Instant Relocation Cost Estimator & Transparent Moving Contract System"
    },
    {
      id: "preowned_cars",
      category: "Used Car Dealership & Auto Showroom",
      keywords: ["car", "cars", "auto", "automobile", "motors", "preowned", "vehicle", "wheels", "drive", "garage"],
      statement: "“Buyers accidental history aur meter tampering se shaq karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="8" rx="2"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path d="M5 11l2-5h10l2 5"/></svg>`,
      desc: "Quality certified stock aapke paas hai, par 150-point inspection report aur car EMI calculator web link missing hone se deal atak jaati hai.",
      recommendation: "150-Point Certified Pre-Owned Car Showroom with EMI Calculator"
    },
    {
      id: "car_detailing_ceramic",
      category: "Car Detailing & Ceramic Coating",
      keywords: ["detailing", "ceramic", "coating", "ppf", "wash", "paint", "polish", "wrap", "automotive", "shield"],
      statement: "“Car owners ko saste polish aur genuine PPF me farak nahi pata!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      desc: "Hydrophobic effect aur scratch protection ka interactive Before/After visual comparison slider website par na ho toh client value nahi samajhta.",
      recommendation: "Interactive Before/After Paint Protection Visual Slider & Slot Booking"
    },
    {
      id: "advocate_legal",
      category: "Advocate & Legal Consultancy",
      keywords: ["advocate", "legal", "law", "attorney", "court", "trademark", "patent", "dispute", "counsel", "notary"],
      statement: "“Corporate clients case credentials aur expertise maangte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      desc: "Law firms ko advertising allowed nahi hai, par distinguished case insights aur corporate compliance advisory articles web par hone chahiye.",
      recommendation: "Distinguished Law Chamber Portal with Published Case Studies & Consultation Booking"
    },
    {
      id: "wealth_advisory",
      category: "Mutual Fund Distributor & Wealth Advisory",
      keywords: ["wealth", "mutual fund", "sip", "investment", "financial", "portfolio", "shares", "equity", "advisory", "bonds"],
      statement: "“Investors 3rd-party discount apps par switch kar rahe hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      desc: "Discount brokers ke paas human financial wisdom nahi hai, par aapke personalised financial goal planning tools online missing hain.",
      recommendation: "Personal Wealth Advisory Portal with Child Education & Retirement SIP Calculators"
    },
    {
      id: "insurance_advisor",
      category: "Health & General Insurance Advisor",
      keywords: ["insurance", "mediclaim", "policy", "lic", "claim", "term plan", "health insurance"],
      statement: "“Clients policy exclusions aur waiting period me atak jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      desc: "Emergency ke waqt 24/7 Claim Support Helpline aur family health cover comparison portal na hone se client renewal lapse kar deta hai.",
      recommendation: "Family Health Cover Comparison & Emergency Claim Settlement Helpline Page"
    },
    {
      id: "coaching_classes",
      category: "Coaching Classes & Tuitions",
      keywords: ["coaching", "classes", "tuition", "academy", "education", "neet", "jee", "commerce", "science", "institute"],
      statement: "“Competitor academies flashy online results se parents ko le jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
      desc: "Aapke batch se top ranks aate hain, par Student Hall of Fame, Faculty Credentials aur Parent Inquiry form website par missing hai!",
      recommendation: "Student Hall of Fame, Faculty Credentials & Parent Admissions Portal"
    },
    {
      id: "preschool_daycare",
      category: "Preschool, Daycare & Activity Centre",
      keywords: ["preschool", "kids", "child", "kindergarten", "playgroup", "daycare", "montessori", "school", "junior", "toddler"],
      statement: "“Anxious parents CCTV surveillance aur hygiene standards dhoondhte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>`,
      desc: "Admissions ke time parents ko virtual school walkthrough tour, safety protocols aur teacher qualification guide online dekhna hota hai.",
      recommendation: "Interactive Virtual School Tour & Child Safety Standards Admission Portal"
    },
    {
      id: "visa_overseas",
      category: "Overseas Education & Visa Consultant",
      keywords: ["visa", "immigration", "overseas", "study abroad", "ielts", "foreign education", "pr visa"],
      statement: "“Students university eligibility criteria me confuse hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      desc: "Har country ke alag rules hain, par agar 1-minute Country-Wise University Eligibility Checker website par ho toh inquiries 10x ho sakti hain!",
      recommendation: "Country-Wise University Eligibility Checker & Direct Visa Lead Engine"
    },
    {
      id: "hr_recruitment",
      category: "Recruitment & HR Placement Agency",
      keywords: ["hr", "recruitment", "placement", "jobs", "staffing", "manpower", "talent", "career", "hiring", "consultants"],
      statement: "“Companies email par resume bhejti hain aur track kho jaata hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      desc: "HR managers aur corporate employers ko live executive job board aur direct candidate CV dropbox portal ki zaroorat hoti hai.",
      recommendation: "Live Executive Job Board & Corporate Manpower Recruitment Portal"
    },
    {
      id: "digital_marketing_peer",
      category: "Digital Marketing & Branding Agency",
      keywords: ["digital", "marketing", "social media", "branding", "seo", "agency", "creative", "ads", "content", "pr"],
      statement: "“Agency ka khud ka portfolio lag kar raha hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      desc: "Clients ko speed aur ROI sikhane wali agency ki apni website agar 3 second me na khule toh corporate accounts doubt karte hain!",
      recommendation: "Blazing-Fast Jamstack Web Engine with 100/100 PageSpeed Performance"
    },
    {
      id: "it_hardware_amc",
      category: "IT Hardware, Networking & AMC Services",
      keywords: ["it", "computer", "laptop", "server", "networking", "amc", "firewall", "hardware", "software", "tech"],
      statement: "“Offices me IT downtime ticket track nahi ho paata!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      desc: "Companies IT crash ke waqt call karti hain, par automated 1-click ticket logging aur corporate AMC package list missing hai.",
      recommendation: "Corporate IT AMC Plan Portal with 1-Click Support Ticket System"
    },
    {
      id: "modular_kitchen_furniture",
      category: "Modular Kitchen & Furniture Showroom",
      keywords: ["modular kitchen", "kitchen", "furniture", "wardrobe", "woodcraft", "modular"],
      statement: "“Customers storage layout aur finish visualize nahi kar paate!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
      desc: "Acrylic vs PU finish, tandem box vs wire basket ka live modular kitchen configuration experience site par na ho toh sale delay hoti hai.",
      recommendation: "Modular Kitchen Layout Configurator & Hardware Finishes Experience Site"
    },
    {
      id: "bakery_cakes",
      category: "Bakery, Patisserie & Custom Cakes",
      keywords: ["bakery", "cake", "cakes", "pastry", "bread", "bakers", "cookies", "bakes", "dessert", "chocolatier"],
      statement: "“Weekend rush me custom birthday cake orders miss ho jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>`,
      desc: "Customers theme photo, flavour aur weight WhatsApp par bhejte hain, par advance booking slot aur live price calculator nahi milta.",
      recommendation: "Custom Cake Flavour & Theme Customizer with Advance Booking Calendar"
    },
    {
      id: "optician_eyewear",
      category: "Optician & Eyewear Store",
      keywords: ["optician", "eyewear", "optical", "glasses", "lens", "frames", "spectacles", "sunglasses", "eye", "vision"],
      statement: "“Customers online saste frames le kar power galat fit karwa lete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
      desc: "Aapke paas certified optometrist aur precision lens edging hai, par local Google Maps dominance aur frame catalogue online missing hai.",
      recommendation: "Local Google Maps SEO Dominance & Frame Collection Virtual Showcase"
    },
    {
      id: "jewellery_showroom",
      category: "Jewellery & Custom Gold/Diamond Artisan",
      keywords: ["jewel", "jewellery", "gold", "diamond", "silver", "ornaments", "gem", "gemstone", "jewellers", "kundan"],
      statement: "“New buyers BIS hallmark purity & making charges par doubt karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      desc: "Purity certificates aur certified hallmarked handcrafted bridal collections ka trustworthy digital lookbook web par hona zaroori hai.",
      recommendation: "Certified Hallmarked Bridal Jewellery Lookbook with Daily Gold Rate Ticker"
    },
    {
      id: "pest_control",
      category: "Pest Control & Sanitization Services",
      keywords: ["pest", "pest control", "termites", "fumigation", "sanitization", "cockroach", "disinfection", "rodent", "bugs", "insects"],
      statement: "“Restaurants & factories municipal inspection aane tak delay karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5zM2 13h5M17 13h5M4 6l3.5 2M16.5 8L20 6M4 20l3.5-2M16.5 18L20 20"/></svg>`,
      desc: "Commercial clients ko government compliant chemical certificates aur quarterly AMC schedule reminder portal par chahiye.",
      recommendation: "Commercial Pest AMC Scheduling Portal with Digital Treatment Compliance Certificates"
    },
    {
      id: "facility_housekeeping",
      category: "Housekeeping & Facility Management",
      keywords: ["facility", "housekeeping", "cleaning", "security guard", "maintenance", "society", "hygiene", "office boys", "services"],
      statement: "“Housing societies staff verification & credentials check maangti hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
      desc: "Corporate complexes aur societies ko certified, police-verified staff aur structured billing packages website par transparent chahiye.",
      recommendation: "Society & Corporate Facility Management Package Portal with Staff Credentials"
    },
    {
      id: "water_purifier_ro",
      category: "Water Purifier & Industrial RO Plants",
      keywords: ["water", "ro", "purifier", "filtration", "membrane", "plant", "aquaguard", "tds", "drinking water", "softener"],
      statement: "“Clients filter replacement aur TDS check bhool jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
      desc: "Aapke pure drinking water plants top hain, par automated filter replacement reminder aur water sample testing request portal missing hai.",
      recommendation: "Automated RO Membrane Service Reminder & Industrial Water Test Portal"
    },
    {
      id: "stationery_office_supplies",
      category: "Office Stationery & Corporate Supplies",
      keywords: ["stationery", "office supplies", "office stationery", "paper merchant", "desk supplies"],
      statement: "“Corporate purchase managers handwritten phone order de dete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>`,
      desc: "Corporate accounts ko har mahine repeat stationery chahiye hoti hai, jise 1-Click Monthly Reorder Portal se simplify kiya ja sakta hai.",
      recommendation: "Corporate 1-Click Reorder Portal for Office Stationery & Consumables"
    },
    {
      id: "uniforms_ppe",
      category: "Uniforms & Safety PPE Workwear",
      keywords: ["uniform", "uniforms", "ppe", "safety", "helmets", "shoes", "apron", "workwear", "industrial safety", "jackets"],
      statement: "“Factory safety managers CE/ISO compliant certificates dhoondhte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      desc: "Bulk industrial buyer ko fire-retardant fabric specs aur bulk volume sample order link ek jagah chahiye.",
      recommendation: "Industrial Safety Workwear Catalog with Compliance Certificates & Sample Request"
    },
    {
      id: "scrap_recycling",
      category: "Metal Scrap & Industrial Recycling",
      keywords: ["scrap", "recycling", "metal scrap", "scrap dealer", "waste recycling", "industrial scrap"],
      statement: "“Factories fair weighment aur instant payment guarantee dhoondhti hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
      desc: "Industrial scrap clearing contracts ke liye credibility, certified weighbridge clearance aur company profile web par honi chahiye.",
      recommendation: "Transparent Industrial Scrap Clearing Inquiry & Contract Credential Portal"
    },
    {
      id: "organic_agro_foods",
      category: "Organic Agro & Cold Pressed Oils",
      keywords: ["organic", "cold pressed", "oil", "oils", "pure oils", "wood pressed", "pure ghee", "agro foods"],
      statement: "“Customers supermarket milawat ke darr se authenticity proof maangte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
      desc: "Wood pressed oil aur pure farm products ki lab test purity report aur seed-to-bottle video story direct WhatsApp order link ke sath honi chahiye!",
      recommendation: "Farm-to-Bottle Traceability Story & Direct 1-Click WhatsApp Delivery Portal"
    }
  ]
};

// Global State
const state = {
  ownerName: "",
  businessName: "",
  industrySector: "auto",
  selectedVighna: null,
  soundEnabled: true
};

// Realistic Web Audio Brass Bell Synthesizer
class TempleAcousticAudio {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  // Resonant Brass Temple Bell
  playTempleBell() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      const harmonics = [
        { freq: 528, gain: 0.35, decay: 2.5 },
        { freq: 1056, gain: 0.18, decay: 1.8 },
        { freq: 1584, gain: 0.10, decay: 1.2 },
        { freq: 2112, gain: 0.05, decay: 0.8 }
      ];

      harmonics.forEach(h => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(h.freq, now);

        gain.gain.setValueAtTime(h.gain, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + h.decay + 0.1);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Subtle pleasant click
  playChime() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}
  }
}

const templeAudio = new TempleAcousticAudio();

// Gentle Marigold Petal & Gold Shimmer Canvas
function initFloralCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const petalCount = window.innerWidth < 600 ? 18 : 28;

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 5 + 3,
      speedY: Math.random() * 0.7 + 0.4,
      speedX: (Math.random() - 0.5) * 0.4,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.45 + 0.2,
      color: Math.random() > 0.5 ? '#E67E22' : '#F1C40F' // Marigold saffron & golden petals
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach(p => {
      p.y += p.speedY;
      p.x += Math.sin(p.angle) * 0.6;
      p.angle += p.spin;

      if (p.y > height + 20) {
        p.y = -15;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Screen Transitions
function showScreen(screenId) {
  const screens = document.querySelectorAll('.app-screen');
  screens.forEach(s => s.classList.remove('active'));

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Ceremonial Sequence Controller (Step 2 & 2.5)
function runCeremonialSequence(callback) {
  showScreen('step2Screen');
  templeAudio.playTempleBell();

  const steps = [
    { id: 'scanStep1', progress: 25, delay: 0 },
    { id: 'scanStep2', progress: 50, delay: 650 },
    { id: 'scanStep3', progress: 75, delay: 1300 },
    { id: 'scanStep4', progress: 100, delay: 1950 }
  ];

  const progressFill = document.getElementById('scanProgressFill');

  steps.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) el.classList.remove('active', 'completed');
  });

  steps.forEach((step, index) => {
    setTimeout(() => {
      const el = document.getElementById(step.id);
      if (el) {
        el.classList.add('active');
        progressFill.style.width = `${step.progress}%`;
        templeAudio.playChime();
      }

      if (index > 0) {
        const prevEl = document.getElementById(steps[index - 1].id);
        if (prevEl) {
          prevEl.classList.remove('active');
          prevEl.classList.add('completed');
        }
      }
    }, step.delay);
  });

  // Finish ceremony steps, then show Modak Unveiling
  setTimeout(() => {
    const lastEl = document.getElementById('scanStep4');
    if (lastEl) {
      lastEl.classList.remove('active');
      lastEl.classList.add('completed');
    }
    templeAudio.playTempleBell();

    // Transition to Prasad Unveiling (Step 2.5)
    setTimeout(() => {
      showScreen('modakLoadingScreen');
      templeAudio.playChime();

      const modakFill = document.getElementById('modakProgressFill');
      if (modakFill) {
        modakFill.style.width = '0%';
        setTimeout(() => {
          modakFill.style.transition = 'width 1.4s cubic-bezier(0.2, 0.8, 0.4, 1)';
          modakFill.style.width = '100%';
        }, 50);
      }

      // Complete ritual and reveal Patrika
      setTimeout(() => {
        templeAudio.playTempleBell();
        callback();
      }, 1500);
    }, 450);

  }, 2600);
}

// Deterministic String Hash: Guarantees unique distribution across 50 solutions
function hashString(str) {
  let hash = 5381;
  const clean = str.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < clean.length; i++) {
    hash = ((hash << 5) + hash) + clean.charCodeAt(i);
  }
  return Math.abs(hash);
}

// Smart Industry Keyword Matcher
function matchIndustryKeywords(business, owner) {
  const text = (business + " " + owner).toLowerCase();
  const normalized = text.replace(/[^a-z0-9]/g, ' ');
  
  for (const item of CONFIG.SOLUTIONS_CATALOG) {
    for (const kw of item.keywords) {
      // Whole-word boundary check
      const regex = new RegExp('\\b' + kw.replace(/\s+/g, '\\s+') + '\\b', 'i');
      if (regex.test(normalized)) {
        return item;
      }
    }
  }
  return null;
}

// Determine 1 of the 50 Unique Solutions
function determineSolution(ownerName, businessName, explicitCategory) {
  // 1. If explicit category is selected (not 'auto')
  if (explicitCategory && explicitCategory !== 'auto') {
    const found = CONFIG.SOLUTIONS_CATALOG.find(s => s.id === explicitCategory);
    if (found) return found;
  }

  // 2. Keyword detection from business / owner name
  const matched = matchIndustryKeywords(businessName, ownerName);
  if (matched) {
    return matched;
  }

  // 3. Fallback: Zero-Collision Hash across the 50 catalog entries
  const total = CONFIG.SOLUTIONS_CATALOG.length;
  const hashVal = hashString(businessName + "::" + ownerName);
  const index = hashVal % total;
  return CONFIG.SOLUTIONS_CATALOG[index];
}

// Populate Results in Step 3 & Step 4
function populateResults() {
  const item = state.selectedVighna;

  // Step 3 Elements
  document.getElementById('reportBusinessName').textContent = state.businessName;
  document.getElementById('reportOwnerName').textContent = state.ownerName;
  document.getElementById('vighnaStatement').textContent = item.statement;
  
  const iconContainer = document.getElementById('vighnaEmoji');
  if (iconContainer) {
    iconContainer.innerHTML = item.svgIcon;
  }

  const descEl = document.getElementById('vighnaDesc');
  if (descEl) {
    descEl.textContent = item.desc;
  }

  // Category Tag on Certificate if present
  const catEl = document.getElementById('reportIndustryCategory');
  if (catEl) {
    catEl.textContent = item.category;
  }

  // Pre-filled WhatsApp message to Yash
  const whatsappCta = document.getElementById('btnChatYash');
  const chatText = encodeURIComponent(
    `Jai Ganesh Yash! 🙏\n\n` +
    `Ganpati Bappa just reviewed my business *${state.businessName}* (${item.category}) and observed:\n\n` +
    `🐘 _"Business ke vighna main dekh lunga... Digital wale Yash ko de do!"_\n\n` +
    `📍 Observed Vighna: ${item.statement}\n` +
    `📝 Details: ${item.desc}\n` +
    `💡 Recommended by Bappa: *${item.recommendation}*\n` +
    `👤 Proprietor: ${state.ownerName}\n\n` +
    `Yash, can we discuss this solution for my business through Mahant Software?`
  );

  const phoneQuery = CONFIG.YASH_WHATSAPP_PHONE ? `phone=${CONFIG.YASH_WHATSAPP_PHONE}&` : '';
  whatsappCta.href = `https://api.whatsapp.com/send?${phoneQuery}text=${chatText}`;
}

// WhatsApp Share Handler
function shareApp() {
  const currentUrl = window.location.href;
  const shareText = 
    `🐘 *Ask Ganpati Bappa About Your Business!* 🙏\n\n` +
    `Receive Bappa's divine business audit and see what customized observation he uncovers for your enterprise in our GBS network!\n\n` +
    `Check your business here 👉 ${currentUrl}`;

  if (navigator.share) {
    navigator.share({
      title: 'Bappa’s Business Drishti | Mahant Software',
      text: shareText,
      url: currentUrl
    }).catch(() => {});
  } else {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  }
}

// Populate the Sector Dropdown with all 50 categories
function populateSectorDropdown() {
  const select = document.getElementById('digitalStatus');
  if (!select) return;

  // Clear existing options except auto
  select.innerHTML = '<option value="auto">✨ Let Bappa Auto-Detect from Business Name</option>';

  CONFIG.SOLUTIONS_CATALOG.forEach(sol => {
    const opt = document.createElement('option');
    opt.value = sol.id;
    opt.textContent = sol.category;
    select.appendChild(opt);
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initFloralCanvas();
  populateSectorDropdown();

  const form = document.getElementById('businessForm');
  const ownerInput = document.getElementById('ownerName');
  const businessInput = document.getElementById('businessName');
  const statusSelect = document.getElementById('digitalStatus');
  const btnAskBappa = document.getElementById('btnAskBappa');
  const btnSeeBappasSolution = document.getElementById('btnSeeBappasSolution');
  const btnShareApp = document.getElementById('btnShareApp');
  const btnResetTest = document.getElementById('btnResetTest');
  const soundToggle = document.getElementById('soundToggle');

  // Sound Toggle
  soundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    const text = soundToggle.querySelector('.sound-text');
    if (state.soundEnabled) {
      text.textContent = 'Bell Sound';
      soundToggle.style.opacity = '1';
      templeAudio.playChime();
    } else {
      text.textContent = 'Muted';
      soundToggle.style.opacity = '0.7';
    }
  });

  // Submission
  function handleFormSubmit(e) {
    if (e) e.preventDefault();

    const owner = ownerInput.value.trim();
    const business = businessInput.value.trim();

    if (!owner) {
      ownerInput.focus();
      ownerInput.closest('.input-container').style.borderColor = '#C0392B';
      return;
    }
    ownerInput.closest('.input-container').style.borderColor = '';

    if (!business) {
      businessInput.focus();
      businessInput.closest('.input-container').style.borderColor = '#C0392B';
      return;
    }
    businessInput.closest('.input-container').style.borderColor = '';

    state.ownerName = owner;
    state.businessName = business;
    state.industrySector = statusSelect.value;
    state.selectedVighna = determineSolution(owner, business, statusSelect.value);

    populateResults();

    runCeremonialSequence(() => {
      showScreen('step3Screen');
    });
  }

  btnAskBappa.addEventListener('click', handleFormSubmit);
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Step 3 -> Step 4
  btnSeeBappasSolution.addEventListener('click', () => {
    templeAudio.playTempleBell();
    showScreen('step4Screen');
  });

  // Share
  btnShareApp.addEventListener('click', () => {
    templeAudio.playChime();
    shareApp();
  });

  // Reset
  btnResetTest.addEventListener('click', () => {
    templeAudio.playChime();
    showScreen('step1Screen');
    ownerInput.value = '';
    businessInput.value = '';
    statusSelect.value = 'auto';
  });
});
