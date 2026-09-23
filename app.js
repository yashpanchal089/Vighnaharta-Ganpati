/**
 * BAPPA'S BUSINESS DRISHTI - EK VIGHNA, EK SANKALP
 * Crafted especially for GBS Glory & SME Business Owners
 * Mahant Software · Founded by Yash Panchal (+91 90041 68049)
 */

const CONFIG = {
  YASH_WHATSAPP_PHONE: '919004168049',
  YASH_NAME: 'Yash Panchal',
  COMPANY_NAME: 'Mahant Software',
  CHAPTER_NAME: 'GBS Glory',
  APP_TITLE: "Bappa’s Business Drishti",

  // 46 Clean GBS Member Profiles & Tailored Solutions (Deduplicated & Aligned)
  SOLUTIONS_CATALOG: [
  {
    id: "website_development",
    category: "Website Development",
    keywords: ["website development", "software", "web design", "app development", "ecommerce", "portal", "coding", "web"],
    statement: "“Client quotes mangte hain aur custom scope me 10 din lag jaate hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    desc: "Clients manual Scope of Work (SOW) aur quotations mangte rehte hain, jabki interactive web package calculator na hone se 50% prospects price comparison me slip ho jaate hain.",
    recommendation: "Interactive Web Project Scope Estimator & Instant Quotation Engine by Mahant Software",
    sankalps: [
      "This week, I will launch an interactive 60-second website package estimator for GBS members.",
      "This week, I will showcase our 5 best UI/UX web applications in 1 digital lookbook.",
      "This week, I will offer complimentary website speed & SEO audits for 5 chapter members."
    ],
    referralAsk: "Please introduce me to founders, manufacturers, or service providers looking for a modern, high-converting website or custom web portal.",
    previewType: "generic_showcase"
  },
  {
    id: "courier_logistics",
    category: "Courier & Logistics Services",
    keywords: ["courier", "logistics", "shipping", "cargo", "freight", "dispatch", "parcel", "domestic courier", "international courier"],
    statement: "“Clients har consignment ke rate aur delivery days phone par poochte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    desc: "Weight slabs, volumetric charges aur tracking links manual WhatsApp par bhejne me staff ka aadha din chala jata hai.",
    recommendation: "Rapid Pincode Rate Calculator & 1-Click WhatsApp Pickup Booking Bot",
    sankalps: [
      "This week, I will introduce an instant weight-based shipping rate card for ecommerce sellers.",
      "This week, I will automate pickup requests directly into WhatsApp.",
      "This week, I will connect with 5 GBS manufacturers to audit their current courier overheads."
    ],
    referralAsk: "Please introduce me to manufacturers, e-commerce sellers, or diamond/garment traders who ship 20+ parcels daily and need fast, reliable pickups.",
    previewType: "logistics_rate"
  },
  {
    id: "commercial_interior",
    category: "Commercial Interior Designer",
    keywords: ["commercial interior", "commercial interior designer", "office interior", "retail design", "workspace interior", "corporate interior"],
    statement: "“High-end corporate projects WhatsApp chats me kho jaate hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 12 22 17"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    desc: "Lakhon rupaye ke luxury corporate & retail interiors banaye, par prospective client ko showcase bhejne ke liye 40 loose WhatsApp photos bhejni padti hain!",
    recommendation: "Curated 3D Corporate Walkthrough & Category-wise Commercial Portfolio by Mahant Software",
    sankalps: [
      "This week, I will organise my best commercial & office projects into 1 digital portfolio link.",
      "This week, I will stop sending loose WhatsApp photos and send a verified client lookbook.",
      "This week, I will provide my GBS members a 1-tap link to showcase our turnkey office capability."
    ],
    referralAsk: "Please introduce me to corporate founders, doctors opening clinics, or retail store owners planning a commercial interior makeover this quarter.",
    previewType: "interior_portfolio"
  },
  {
    id: "home_interior",
    category: "Home Interior Designer",
    keywords: ["home interior", "home interior designer", "residential interior", "flats", "villas", "modular kitchen", "turnkey interior", "home decor", "interior designer"],
    statement: "“Clients material aur finish quotes me compare karke delay karte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    desc: "Client har quote par 10 changes maangta hai aur purane projects ki live photos phone me dhoondne me ghanto nikal jaate hain.",
    recommendation: "Interactive Residential Moodboard & Modular Package Selector Portal",
    sankalps: [
      "This week, I will categorise my 2BHK/3BHK & Villa projects with clear carpet-area filters.",
      "This week, I will standardise our material & finish lookbook into an interactive web link.",
      "This week, I will equip my sales team with instant WhatsApp quotation links."
    ],
    referralAsk: "Please introduce me to homeowners who recently received possession of 2BHK or 3BHK flats and need a reliable turnkey interior designer.",
    previewType: "interior_portfolio"
  },
  {
    id: "printing_solutions",
    category: "Printing Solutions",
    keywords: ["printing", "printing solutions", "brochure", "visiting card", "offset printing", "packaging box", "label printing", "digital print"],
    statement: "“Clients har order par paper GSM aur finish rate poochte rehte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
    desc: "Matte lamination, UV spot, foil stamping ya box GSM ka live visual sample guide na hone se client decision lene me 3 din lagata hai.",
    recommendation: "Digital Print Finishes Visualizer & Instant Bulk Print Estimator",
    sankalps: [
      "This week, I will launch a digital finishes guide showing real paper textures & foils.",
      "This week, I will automate visiting card and brochure volume quotation requests.",
      "This week, I will print complimentary festive greeting cards for our GBS chapter."
    ],
    referralAsk: "Please introduce me to marketing managers, pharma companies, or retail brands who print brochures, custom packaging boxes, or labels every month.",
    previewType: "generic_showcase"
  },
  {
    id: "electrical_services",
    category: "Electrical Services",
    keywords: ["electrical", "electrical services", "electrician", "panel wiring", "wiring", "substation", "industrial electrical"],
    statement: "“Industrial tenders me past safety audit & panel photos maangte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    desc: "Heavy factory panels aur HT/LT wiring ki safety compliance verification online present na hone se bidding me disadvantage hota hai.",
    recommendation: "Certified Industrial Electrical Contractor Credential & Past Sites Showcase",
    sankalps: [
      "This week, I will publish our certified electrical safety audit badges on our link.",
      "This week, I will document 3 landmark industrial panel erections with client testimonials.",
      "This week, I will audit the power stability setup of fellow GBS manufacturing units."
    ],
    referralAsk: "Please introduce me to factory owners, commercial contractors, or warehouse managers needing HT/LT electrical panels, industrial wiring, or power audits.",
    previewType: "generic_showcase"
  },
  {
    id: "portfolio_management_services",
    category: "Portfolio Management Services",
    keywords: ["portfolio management", "pms", "wealth management", "equity", "stocks", "asset allocation", "portfolio management services"],
    statement: "“High Networth clients past performance track record verify kiye bina trust nahi karte!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    desc: "HNI clients equity investment me direct data chahte hain, par static PDF sheets unhe risk vs reward visualize nahi karne deti.",
    recommendation: "High-Trust PMS Performance Dashboard & Secure Client Risk Profiler",
    sankalps: [
      "This week, I will publish a verified rolling returns infographic link for our flagship PMS strategy.",
      "This week, I will offer a confidential 15-minute portfolio risk-audit for 5 GBS business leaders.",
      "This week, I will equip existing clients with an easy 1-tap referral link."
    ],
    referralAsk: "Please introduce me to business owners, directors, or NRIs with investible surplus of ₹50L+ looking for disciplined, research-backed wealth creation.",
    previewType: "finance_calculator"
  },
  {
    id: "eis_wealth_advisor",
    category: "EIS Wealth Advisor",
    keywords: ["eis wealth advisor", "eis", "wealth advisor", "financial advisory", "financial planner", "retirement planning", "wealth growth"],
    statement: "“HNIs tax saving aur wealth preservation ke structured blueprints maangte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
    desc: "Bespoke wealth succession, trust planning aur tax-efficient asset distribution ke modules online na hone se investor decision delay karta hai.",
    recommendation: "Interactive Net-Worth Growth Roadmap & HNIs Wealth Preservation Calculator",
    sankalps: [
      "This week, I will formulate a 3-pillar wealth growth roadmap visualizer for our clients.",
      "This week, I will send personalized financial health checkpoints to 10 top HNI contacts.",
      "This week, I will share an estate & tax preservation guide with GBS founders."
    ],
    referralAsk: "Please introduce me to high-net-worth business owners and senior professionals wanting comprehensive wealth management and estate planning.",
    previewType: "finance_calculator"
  },
  {
    id: "investment_services",
    category: "Investment Services",
    keywords: ["investment", "investment services", "mutual funds", "sip", "bonds", "fixed income", "financial growth"],
    statement: "“Clients SIP market dip me panic karte hain aur online direct apps par chale jaate hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>`,
    desc: "Long term compounding ka visual proof aur personalized goal tracking web link na hone se client market noise me SIP pause kar deta hai.",
    recommendation: "Goal-Based SIP Return Simulator & Personalized Wealth Milestone Portal",
    sankalps: [
      "This week, I will create an interactive 'Retire Early / Child Education' SIP calculator link.",
      "This week, I will send market perspective voice-notes with compounding charts to all active investors.",
      "This week, I will launch a festive child-wealth gifting plan for our GBS network."
    ],
    referralAsk: "Please introduce me to salaried executives or business owners looking to start ₹25,000+ monthly SIPs or invest lump-sum bonuses wisely.",
    previewType: "finance_calculator"
  },
  {
    id: "loan_services",
    category: "Loan Services",
    keywords: ["loan", "loan services", "home loan", "business loan", "mortgage", "lap", "working capital", "od cc"],
    statement: "“Document checklist clear na hone se loan file approval me hafte nikal jaate hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg>`,
    desc: "Banking criteria, CIBIL eligibility aur required documents list structured web form me na hone se borrower bar-bar call karta hai.",
    recommendation: "1-Tap Loan Eligibility & EMI Calculator with Instant WhatsApp Document Checklist",
    sankalps: [
      "This week, I will launch an instant Business & Home Loan eligibility estimator on our link.",
      "This week, I will create 1-tap WhatsApp document checklist PDFs for 5 major bank partners.",
      "This week, I will audit the borrowing rates of 3 GBS member manufacturing units to reduce interest."
    ],
    referralAsk: "Please introduce me to business owners planning warehouse/factory expansion, or home buyers seeking the lowest interest rate and fastest sanction.",
    previewType: "finance_calculator"
  },
  {
    id: "chartered_accountant",
    category: "Chartered Accountant",
    keywords: ["chartered accountant", "ca", "accountant", "gst", "income tax", "audit", "tax filing", "accounting", "company incorporation"],
    statement: "“Due date ke aakhiri 3 din clients documents ke liye panic karte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    desc: "GST billing, advance tax calculation aur statutory compliance deadline reminders manual bhejne me office staff exhaust ho jata hai.",
    recommendation: "Digital Client Document Portal with Automated GST & Tax Due Date Reminders",
    sankalps: [
      "This week, I will deploy an automated GST & Advance Tax reminder system for all retainers.",
      "This week, I will publish our firm's core corporate advisory credentials in a clean link.",
      "This week, I will conduct an internal tax savings check for 5 fellow GBS chapter members."
    ],
    referralAsk: "Please introduce me to growing private limited companies, LLP firms, or high-turnover traders seeking proactive tax planning and flawless auditing.",
    previewType: "finance_calculator"
  },
  {
    id: "advocate",
    category: "Advocate",
    keywords: ["advocate", "lawyer", "legal", "court", "litigation", "property dispute", "corporate law", "trademark", "contracts"],
    statement: "“Clients case study aur legal expertise bina phone consult samjh nahi paate!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 8 12 14 5 8 12 2"/><line x1="12" y1="14" x2="12" y2="22"/><circle cx="12" cy="18" r="3"/></svg>`,
    desc: "Property title search, trademark registration ya contract drafting ka transparent process web par na hone se clients price bargaining karte hain.",
    recommendation: "Prestigious Legal Practice Credential Portal & Confidential Consultation Booker",
    sankalps: [
      "This week, I will publish our practice areas (Property, Corporate, Arbitration) with clear FAQs.",
      "This week, I will enable 1-tap confidential appointment scheduling for client consultations.",
      "This week, I will offer a complimentary legal compliance contract audit for 3 GBS startups."
    ],
    referralAsk: "Please introduce me to builders, property buyers, or corporate founders requiring title clearance, contract drafting, or civil/commercial litigation support.",
    previewType: "generic_showcase"
  },
  {
    id: "vastu_numerology",
    category: "Vastu & Numerology",
    keywords: ["vastu", "numerology", "vastu & numerology", "astrology", "home vastu", "commercial vastu", "name correction"],
    statement: "“People modern science vs traditional vastu balance dekhna chahte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><circle cx="12" cy="12" r="3"/></svg>`,
    desc: "Bina tod-fod (non-demolition) remedial vastu ka scientific explanation aur client transformation stories digital link me organize nahi hain.",
    recommendation: "Floorplan Audit Request Portal & Digital Energy Balance Consultation System",
    sankalps: [
      "This week, I will launch a 1-tap 'Upload Floorplan for Vastu Audit' web gateway.",
      "This week, I will publish 5 video testimonials of non-demolition commercial vastu success.",
      "This week, I will offer an auspicious business entrance energy checkup for GBS members."
    ],
    referralAsk: "Please introduce me to factory owners, retail showroom founders, or families buying new apartments wanting scientific, non-demolition Vastu alignment.",
    previewType: "generic_showcase"
  },
  {
    id: "tarot_card_reader",
    category: "Tarot Card Reader",
    keywords: ["tarot", "tarot card reader", "tarot reading", "spiritual", "oracle", "energy healing", "guidance"],
    statement: "“Clients personal session book karne se pehle clarity & privacy chahte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>`,
    desc: "Confidentiality assurance aur structured appointment slots web par na hone se clients casual WhatsApp messages par reading discuss karne lagte hain.",
    recommendation: "Confidential 1-on-1 Tarot Slot Booking & Digital Guidance Deck",
    sankalps: [
      "This week, I will set up a private appointment scheduler with automated calendar invites.",
      "This week, I will clearly articulate our 3 consultation tiers (Career, Relationship, Personal Growth).",
      "This week, I will gift a festive annual guidance reading to 3 chapter leaders."
    ],
    referralAsk: "Please introduce me to individuals or business leaders facing crossroads in career, partnership, or life who seek intuitive, confidential guidance.",
    previewType: "generic_showcase"
  },
  {
    id: "health_insurance",
    category: "Health Insurance",
    keywords: ["health insurance", "mediclaim", "critical illness", "cashless hospital", "family floater", "super topup"],
    statement: "“Emergency ke time policy wording aur cashless claim me confusion ho jata hai!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
    desc: "Room rent capping, waiting periods aur cashless network hospitals ka instant search link na hone se client generic aggregators par chala jata hai.",
    recommendation: "1-Tap Family Mediclaim Coverage Comparer & Emergency Cashless Claim Desk",
    sankalps: [
      "This week, I will create a transparent 1-page health policy comparison matrix.",
      "This week, I will provide all existing clients an emergency 24x7 cashless hospital assistance card.",
      "This week, I will audit the medical coverage of 5 GBS member families to eliminate hidden sub-limits."
    ],
    referralAsk: "Please introduce me to families with senior citizen parents or business owners wanting group health mediclaim for their staff without room rent limits.",
    previewType: "clinic_slots"
  },
  {
    id: "general_insurance",
    category: "General Insurance",
    keywords: ["general insurance", "car insurance", "motor insurance", "marine insurance", "fire insurance", "factory insurance"],
    statement: "“Renewal reminder na hone par policy lapse ho jati hai aur claim reject hota hai!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    desc: "Commercial vehicles, factory machinery aur stock marine transit insurance me instant renewal quote na milne se client portal comparison me kho jata hai.",
    recommendation: "Automated Policy Renewal Vault & Rapid Marine/Fire Quote Engine",
    sankalps: [
      "This week, I will deploy an automated policy expiry alert system that pings clients 30 days prior.",
      "This week, I will launch an instant motor & factory insurance quote request page.",
      "This week, I will audit commercial fire & burglary insurance for 3 GBS warehouse owners."
    ],
    referralAsk: "Please introduce me to logistics fleet operators, factory owners, or showroom managers wanting prompt claim settlement and lowest corporate renewal premiums.",
    previewType: "generic_showcase"
  },
  {
    id: "lic",
    category: "LIC",
    keywords: ["lic", "life insurance", "pension plan", "jeevan umang", "jeevan labh", "endowment", "term plan"],
    statement: "“Clients policy surrender ya maturity returns ka exact chart demand karte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    desc: "Guaranteed lifetime pension aur maturity amount WhatsApp par calculate karne ka fast digital calculator na hone se deal close hone me delay hota hai.",
    recommendation: "Guaranteed Maturity & Pension Return Visualizer with WhatsApp Benefit Illustrator",
    sankalps: [
      "This week, I will create a 1-tap maturity & life cover illustrator for flagship LIC plans.",
      "This week, I will send personalized policy health checkups to 20 long-term policyholders.",
      "This week, I will present guaranteed pension retirement plans to fellow GBS business leaders."
    ],
    referralAsk: "Please introduce me to parents planning their child's higher education fund, or self-employed professionals wanting guaranteed lifetime pension post age 60.",
    previewType: "finance_calculator"
  },
  {
    id: "dental_saving_plans",
    category: "Dental Saving Plans",
    keywords: ["dental saving plans", "dental shop plan", "dental", "dentist", "teeth cleaning", "dental clinic", "orthodontics", "root canal", "dental amc"],
    statement: "“Patients cosmetic dental treatment sunkar price me drop kar dete hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    desc: "Clear visual smile transformation lookbook aur transparent annual family dental saving plans online na hone se patients clinic aane me jhijhakte hain.",
    recommendation: "Interactive Smile Makeover Lookbook & Annual Family Dental Plan Portal",
    sankalps: [
      "This week, I will publish our family dental membership plans with transparent inclusions.",
      "This week, I will showcase before/after smile alignment results on a clean patient link.",
      "This week, I will offer a festive dental hygiene screening voucher for GBS members' families."
    ],
    referralAsk: "Please introduce me to families looking for gentle, modern dental care, or professionals interested in invisible aligners and smile makeovers.",
    previewType: "clinic_slots"
  },
  {
    id: "cakes_chocolates",
    category: "Cakes & Chocolates",
    keywords: ["cakes & chocolates", "cakes", "chocolates", "bakery", "pastry", "custom cakes", "birthday cakes", "artisan chocolate"],
    statement: "“Custom cake designs ke 100 screenshots WhatsApp par confuse kar dete hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s2-1 4-1 4 1 4 1 2-1 4-1 4 1 4 1"/><path d="M2 21h20"/><circle cx="12" cy="6" r="2"/></svg>`,
    desc: "Flavour, weight, delivery time aur customized photo theme finalize karne me customer se 20 messages exchange karne padte hain.",
    recommendation: "Interactive Celebration Cake Lookbook & Instant Flavour Booking Engine",
    sankalps: [
      "This week, I will organise our bestselling custom cake themes into an easy visual link.",
      "This week, I will automate delivery date & time slot selection for celebration orders.",
      "This week, I will launch corporate anniversary & birthday celebration hamper packages."
    ],
    referralAsk: "Please introduce me to event planners, corporate HRs, or families hosting birthdays and weddings who want custom designer cakes and luxury chocolates.",
    previewType: "generic_showcase"
  },
  {
    id: "sweets_chocolates",
    category: "Sweets",
    keywords: ["sweets", "mithai", "mithai shop", "namkeen", "dryfruit", "kaju katli", "ladoo"],
    statement: "“Festive season me corporate bulk buyers custom hamper rate maangte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>`,
    desc: "50 ya 500 box ke orders me company branding aur fresh delivery date lock karne ka fast digital calculator na hone se deal miss ho jati hai.",
    recommendation: "Festive Corporate Mithai Hamper Builder with Live Slab Pricing",
    sankalps: [
      "This week, I will publish our 2026 festive corporate gifting catalog with live tier rates.",
      "This week, I will enable custom company logo embossing preview on gift boxes.",
      "This week, I will send sample tasting boxes to fellow GBS business leaders."
    ],
    referralAsk: "Please introduce me to corporate HRs, business founders, or chartered accountants looking for premium festive mithai and dryfruit hampers for clients.",
    previewType: "generic_showcase"
  },
  {
    id: "mobile_sales_services",
    category: "Mobile Sales & Services",
    keywords: ["mobile sales & services", "mobile repair", "screen replacement", "iphone repair", "smartphones", "mobile accessories"],
    statement: "“Part quality original hai ya duplicate, customer doubt karta hai!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    desc: "Original display vs copy display ka visual quality proof aur warranty card digital na hone se customer road-side repairer par chala jata hai.",
    recommendation: "Live Repair Cost Estimator & 90-Day Verified Warranty Card Portal",
    sankalps: [
      "This week, I will launch a 1-tap repair price estimator for iPhone & flagship Android screens.",
      "This week, I will issue digital warranty cards on WhatsApp for every serviced device.",
      "This week, I will offer a festive phone battery & screen health check for GBS members."
    ],
    referralAsk: "Please introduce me to smartphone owners needing genuine screen/battery replacements, or corporate firms needing mobile fleet maintenance.",
    previewType: "tech_store_catalog"
  },
  {
    id: "computer_sales",
    category: "Computer Sales",
    keywords: ["computer sales", "laptops", "desktop pc", "gaming pc", "refurbished laptop", "macbook", "it hardware"],
    statement: "“Customers online ecommerce portals se price compare karke drop ho jaate hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    desc: "Local on-site warranty support aur custom configuration (RAM, SSD, GPU) ka instant WhatsApp quotation na milne se client impersonal website se order karta hai.",
    recommendation: "Custom PC/Laptop Configurator with Local On-Site Support Warranty Badge",
    sankalps: [
      "This week, I will launch an interactive laptop & custom PC builder with live pricing.",
      "This week, I will promote our 24-hour on-site doorstep repair guarantee for corporate offices.",
      "This week, I will audit the PC & server hardware infrastructure for 3 GBS firms."
    ],
    referralAsk: "Please introduce me to corporate offices, chartered accountant firms, or schools needing bulk laptops, desktops, or IT networking hardware.",
    previewType: "tech_store_catalog"
  },
  {
    id: "makeup_artist",
    category: "Makeup Artist",
    keywords: ["makeup artist", "bridal makeup", "makeover", "hairstyling", "party makeup", "beauty artist"],
    statement: "“Brides bridal look ki high-resolution portfolio link bina filter maangti hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    desc: "Instagram algorithm kabhi-kabhi top posts chupa deta hai aur WhatsApp photos compress ho jati hain, jisse premium bridal clients doubt karte hain.",
    recommendation: "High-Definition Bridal Transformation Lookbook & Wedding Date Booking Calendar",
    sankalps: [
      "This week, I will organise our bridal, engagement & reception looks into a high-res digital album.",
      "This week, I will enable direct wedding date availability checks on WhatsApp.",
      "This week, I will offer a festive glamour makeover consultation for GBS chapter leaders."
    ],
    referralAsk: "Please introduce me to brides-to-be, event planners, or wedding photography teams looking for a certified luxury bridal makeup artist.",
    previewType: "generic_showcase"
  },
  {
    id: "social_media_manager",
    category: "Social Media Manager",
    keywords: ["social media manager", "digital marketing", "reels", "instagram growth", "content creator", "branding"],
    statement: "“Clients ko organic reach aur viral growth ka actual case study proof chahiye!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
    desc: "Past client viral reach metrics, monthly deliverables package aur return on ad spend (ROAS) ka live dashboard na hone se clients low retainers offer karte hain.",
    recommendation: "Interactive Social Media Growth Case Study Portal & Monthly ROI Tracker",
    sankalps: [
      "This week, I will document our top 3 viral client reel campaigns with actual reach data.",
      "This week, I will publish standardized monthly social media packages with transparent deliverables.",
      "This week, I will conduct an Instagram profile audit for 5 fellow GBS business owners."
    ],
    referralAsk: "Please introduce me to retail brands, doctors, or B2B founders wanting high-impact Instagram Reels, lead generation ads, and consistent organic branding.",
    previewType: "trainer_syllabus"
  },
  {
    id: "chair_car_doctor",
    category: "Chair Car Doctor",
    keywords: ["chair car doctor", "chair doctor", "chair repair", "car seat repair", "ergonomic chair", "hydraulic gas lift", "upholstery"],
    statement: "“Corporate offices purani chairs scrap kar deti hain jabki 80% repair ho sakti hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9l-7 7-7-7"/></svg>`,
    desc: "New chair vs repair savings calculator web par na hone se corporate administrative managers unrepairable maanke new expensive chairs khareedte hain.",
    recommendation: "On-Site Office Chair Health Audit Scheduler & Savings Calculator",
    sankalps: [
      "This week, I will launch a 1-tap calculator showing 'Save ₹3,500 per chair by reconditioning'.",
      "This week, I will offer a complimentary 10-chair health checkup for 5 corporate offices in GBS.",
      "This week, I will publish before-and-after hydraulic and mesh restoration videos."
    ],
    referralAsk: "Please introduce me to office facility managers, corporate HRs, or co-working space owners with 50+ office chairs needing maintenance or restoration.",
    previewType: "chair_doctor_booking"
  },
  {
    id: "stallion_comfort_chairs",
    category: "Stallion Comfort Chairs",
    keywords: ["stallion comfort chairs", "stallion comfort", "office chairs", "mesh chairs", "ergonomic furniture", "executive chairs"],
    statement: "“B2B buyers bulk quantity me comfort test aur warranty assurance chahte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>`,
    desc: "Ergonomic back support certifications aur 3-year warranty card online showcase na hone se corporate clients branded commercial brands ki taraf jhukte hain.",
    recommendation: "Ergonomic Posture Chair Selector & Bulk Corporate Trial Request Portal",
    sankalps: [
      "This week, I will launch an interactive posture & lumbar support chair selector link.",
      "This week, I will offer a 7-day free trial chair demo to 5 corporate founders in our network.",
      "This week, I will showcase our high-tensile mesh & BIFMA standard durability certifications."
    ],
    referralAsk: "Please introduce me to architects, interior contractors, or founders setting up new office spaces who need durable, ergonomic seating.",
    previewType: "chair_doctor_booking"
  },
  {
    id: "cash_counting_machines",
    category: "Cash Counting Machines",
    keywords: ["cash counting machines", "cash counting machine", "currency counter", "fake note detector", "note counting", "bundle counter"],
    statement: "“B2B buyers live demo dekhe bina order confirm nahi karte!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
    desc: "Traders, petrol pumps aur jewellers ko fake note detection live test karna hota hai, par phone call par machine feature compare nahi kar paate.",
    recommendation: "3-Model Feature Comparison & 1-Tap 'Request Free On-Site Demo' Engine",
    sankalps: [
      "This week, I will launch a 1-tap 'Book Free On-Site Demo' page for local retail shops & jewellers.",
      "This week, I will showcase side-by-side fake note detection videos online.",
      "This week, I will offer our GBS network an exclusive festive exchange offer on currency counters."
    ],
    referralAsk: "Please introduce me to retail store owners, petrol pumps, jewellers, or wholesale traders who handle heavy cash daily and need fake note protection.",
    previewType: "cash_machine_compare"
  },
  {
    id: "cctv_security_amc",
    category: "CCTV Security & AMC",
    keywords: ["cctv security & amc", "cctv amc", "security maintenance", "camera repair", "annual maintenance", "biometric amc"],
    statement: "“Existing clients ka camera band hone par hi phone aata hai!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    desc: "Annual Maintenance Contract (AMC) renewable portal aur scheduled monthly maintenance verification digital na hone se clients slip ho jaate hain.",
    recommendation: "Digital AMC Service Tracker & 1-Tap Breakdown Service Ticket Portal",
    sankalps: [
      "This week, I will launch an automated Annual Maintenance renewal reminder system.",
      "This week, I will publish verified response time guarantees for commercial clients.",
      "This week, I will sign 3 new commercial CCTV AMC contracts in our GBS network."
    ],
    referralAsk: "Please introduce me to commercial office administrators, warehouse owners, or school principals seeking prompt AMC maintenance for existing CCTV setups.",
    previewType: "cctv_packages"
  },
  {
    id: "cctv_security_systems",
    category: "CCTV Security Systems",
    keywords: ["cctv security systems", "cctv security", "surveillance", "ip camera", "biometrics", "access control", "video door phone"],
    statement: "“Builders aur commercial sites par technical specifications match nahi hoti!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    desc: "Access control, boom barriers aur CCTV systems ka integrated technical architecture document online present na hone se tenders me delay hota hai.",
    recommendation: "Integrated Security & Access Architecture Showcase Portal with Package Configurator",
    sankalps: [
      "This week, I will build an integrated security specification sheet for architects & builders.",
      "This week, I will demonstrate our smartphone biometric integration in a 60-second video.",
      "This week, I will connect with GBS real estate and redevelopment members for site security."
    ],
    referralAsk: "Please introduce me to builders, architects, or commercial facility managers who need integrated security, biometrics, and fire alarm systems.",
    previewType: "cctv_packages"
  },
  {
    id: "corporate_trainer",
    category: "Corporate Trainer",
    keywords: ["corporate trainer", "soft skills", "leadership", "sales training", "executive coach", "communication trainer"],
    statement: "“HR heads aur decision makers ko workshop syllabus online nahi milta!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    desc: "Training methodology aur past corporate participant transformations ek professional company profile ke bina HR heads tak nahi pahunchte.",
    recommendation: "Executive Corporate Training Syllabus Portal with 1-Tap Discovery Session Booking",
    sankalps: [
      "This week, I will publish our 3 flagship corporate modules with curriculum outlines.",
      "This week, I will gather 5 short video recommendations from corporate clients.",
      "This week, I will share a direct booking link for HR leaders to schedule a 20-min strategy call."
    ],
    referralAsk: "Please introduce me to HR Heads, Managing Directors, or Business Owners with teams of 20+ looking to boost sales performance and leadership skills.",
    previewType: "trainer_syllabus"
  },
  {
    id: "business_consultant",
    category: "Business Consultant",
    keywords: ["business consultant", "management consultant", "sme scaling", "business audit", "process automation", "kpi"],
    statement: "“Founders routine aag bujhane me fase hain aur scaling strategy ke liye waqt nahi!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    desc: "Process bottlenecks, standard operating procedures (SOPs) aur delegation framework ka clear diagnostic link na hone se founders consultation lene me hesitate karte hain.",
    recommendation: "SME Business Bottleneck Diagnostic Tool & Executive Strategy Session Portal",
    sankalps: [
      "This week, I will create an online 2-minute business health checkup diagnostic tool.",
      "This week, I will document a 3-step case study showing how we automated an SME founder's weekly reviews.",
      "This week, I will host a 30-minute growth strategy teardown for 3 GBS business owners."
    ],
    referralAsk: "Please introduce me to established business owners with ₹2Cr+ turnover who want to step out of daily fire-fighting and build self-running systems.",
    previewType: "trainer_syllabus"
  },
  {
    id: "pest_control_hygiene",
    category: "Pest Control & Hygiene Products",
    keywords: ["pest control & hygiene products", "pest control", "hygiene products", "sanitizer", "termite", "cockroach", "disinfectant"],
    statement: "“Customers phone par price sunke delay kar dete hain aur safety proof maangte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
    desc: "Home vs commercial kitchen treatments, herbal non-toxic chemical safety certificates aur transparent pricing online na hone se client decision delay karta hai.",
    recommendation: "Instant 1-Tap Home & Commercial AMC Estimator with Safety Certificate Vault",
    sankalps: [
      "This week, I will create an instant quote selector for 1BHK/2BHK/3BHK herbal pest treatments.",
      "This week, I will display our government approved non-toxic safety certifications clearly.",
      "This week, I will offer a festive home pest safety audit for all GBS chapter members."
    ],
    referralAsk: "Please introduce me to restaurant owners, housing society secretaries, or families moving into new homes who need certified, odourless pest control.",
    previewType: "pest_control_selector"
  },
  {
    id: "water_purification",
    category: "Water Purification",
    keywords: ["water purification", "water purifier", "ro filter", "uv filter", "commercial ro", "water softener", "alkaline water"],
    statement: "“Clients TDS reading aur filter replacement schedule bhool jaate hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    desc: "Regular membrane maintenance aur pure water TDS testing proof digital na hone se clients filter service miss kar dete hain aur water quality drop hoti hai.",
    recommendation: "TDS Health Checker & Automated Filter Cartridge Replacement Reminder Bot",
    sankalps: [
      "This week, I will launch a free doorstep water TDS testing booking link for housing societies.",
      "This week, I will automate membrane service reminder messages on WhatsApp.",
      "This week, I will audit the drinking water purification system of 5 fellow GBS member offices."
    ],
    referralAsk: "Please introduce me to homeowners, restaurant managers, or dialysis/school centers wanting certified RO/UV water purification and guaranteed prompt servicing.",
    previewType: "pest_control_selector"
  },
  {
    id: "tours_travels",
    category: "Tours & Travels",
    keywords: ["tours & travels", "travel agent", "holiday packages", "dubai package", "kashmir", "bali", "visa"],
    statement: "“Clients online portals se flight compare karke drop ho jaate hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
    desc: "Curated day-wise luxury itinerary aur 1-tap WhatsApp visa assistance na hone se prospect impersonal OTA apps par chala jata hai.",
    recommendation: "Interactive Curated International Holiday Itinerary Planner with 1-Tap Visa Lead Engine",
    sankalps: [
      "This week, I will publish our top 3 festive holiday itineraries (Dubai, Kashmir, Bali) with day-wise details.",
      "This week, I will showcase client video reels of hassle-free overseas trips.",
      "This week, I will share our exclusive corporate retreat packages with GBS business owners."
    ],
    referralAsk: "Please introduce me to families planning their Diwali vacations, or business owners arranging corporate incentive tours for their top performers.",
    previewType: "travel_itinerary"
  },
  {
    id: "hotel_resort",
    category: "Hotel & Resort",
    keywords: ["hotel & resort", "resort", "hotel", "staycation", "destination wedding", "banquet hall", "weekend getaway"],
    statement: "“Direct bookings miss ho rahi hain aur OTAs 20% commission le rahe hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    desc: "Guest OTA par search karta hai, jabki direct booking par complimentary upgrade ya direct WhatsApp booking link na hone se commission cut ho jata hai.",
    recommendation: "Direct High-Margin Room & Destination Wedding Banquet Booking Engine",
    sankalps: [
      "This week, I will launch a direct WhatsApp booking offer that saves guest 15% vs OTA.",
      "This week, I will showcase a 360-degree virtual tour of our resort rooms and banquet lawn.",
      "This week, I will offer a festive weekend staycation package exclusively to GBS members."
    ],
    referralAsk: "Please introduce me to families planning destination weddings, event planners, or companies planning an offsite executive retreat.",
    previewType: "travel_itinerary"
  },
  {
    id: "real_estate_property",
    category: "Real Estate Property",
    keywords: ["real estate property", "real estate", "property", "flats", "apartments", "plots", "residential property", "broker"],
    statement: "“Buyers 10 brokers se property shortlist karke confuse ho jaate hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>`,
    desc: "Carpet area transparency, RERA registration numbers aur verified video walkthroughs web link par na hone se buyers site visit postpone karte hain.",
    recommendation: "Verified Direct Builder & Resale Property Showcase with Instant Video Walkthroughs",
    sankalps: [
      "This week, I will launch an interactive property inventory link with verified RERA certificates.",
      "This week, I will share video walkthrough links with carpet area breakdowns on WhatsApp.",
      "This week, I will connect with 5 GBS investors seeking high rental yield residential units."
    ],
    referralAsk: "Please introduce me to home seekers looking for 2BHK/3BHK flats with clear titles, or investors seeking verified high-rental properties.",
    previewType: "property_showcase"
  },
  {
    id: "commercial_property",
    category: "Commercial Property",
    keywords: ["commercial property", "retail shops", "office spaces", "industrial shed", "warehouse", "corporate leasing"],
    statement: "“Commercial investors exact rental yields aur carpet area floor plans maangte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/><path d="M3 21h18"/><path d="M9 7h6M9 11h6M9 15h6"/></svg>`,
    desc: "Floor loading capacity, power load, ceiling height aur clear lease ROI documents online na hone se corporate deals me 6 mahine lagte hain.",
    recommendation: "Commercial ROI & Rental Yield Visualizer with Floor-Plan Downloads",
    sankalps: [
      "This week, I will publish our commercial leasing listings with certified ROI and footfall analytics.",
      "This week, I will build an instant floor-plan download link for corporate retail brands.",
      "This week, I will assist 2 fellow GBS business owners in acquiring high-growth office/retail space."
    ],
    referralAsk: "Please introduce me to retail brand expansion heads, doctors, or corporate companies looking to buy or lease 1,000+ sq.ft commercial and office properties.",
    previewType: "property_showcase"
  },
  {
    id: "building_redevelopment",
    category: "Building Redevelopment",
    keywords: ["building redevelopment", "redevelopment", "society redevelopment", "slum rehabilitation", "builder", "construction"],
    statement: "“Society members trust issue ki wajah se project 2 saal tak delay karte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="2"/><line x1="15" y1="22" x2="15" y2="2"/></svg>`,
    desc: "Past project delivery track records, additional carpet area benefit calculators aur bank guarantee proofs online na hone se society meetings me consensus nahi banta.",
    recommendation: "Transparent Society Redevelopment Portal with 3D Architectural Vision",
    sankalps: [
      "This week, I will publish a transparent society redevelopment FAQ portal.",
      "This week, I will demonstrate a live carpet area enhancement calculator for housing societies.",
      "This week, I will present our verified financial strength credentials to prospective housing societies."
    ],
    referralAsk: "Please introduce me to Housing Society Committee Members or Managing Secretaries in 30+ year old buildings planning structured redevelopment.",
    previewType: "property_showcase"
  },
  {
    id: "diamond_jewellery",
    category: "Diamond Jewellery",
    keywords: ["diamond jewellery", "diamond", "gold jewellery", "solitaire", "engagement rings", "gia certified", "fine jewellery"],
    statement: "“Customers certification aur carat authenticity ke clear documents online chahte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>`,
    desc: "Solitaire 4Cs (Cut, Clarity, Color, Carat) aur GIA/IGI certificates interactive online viewer me na hone se buyers showroom aane se jhijhakte hain.",
    recommendation: "Certified Solitaire Lookbook with Live 360° Ring Preview & Consultation Booker",
    sankalps: [
      "This week, I will launch an interactive Solitaire Diamond guide with transparent 4C pricing.",
      "This week, I will showcase our top 10 bridal engagement ring designs in high resolution.",
      "This week, I will provide a complimentary diamond authenticity check for GBS members' families."
    ],
    referralAsk: "Please introduce me to families planning weddings, or individuals looking for certified natural and lab-grown solitaire diamond jewellery.",
    previewType: "jewellery_lookbook"
  },
  {
    id: "jewellery_manufacturing",
    category: "Jewellery Manufacturing",
    keywords: ["jewellery manufacturing", "jewellery manufacturer", "cad cam jewellery", "casting", "gold casting", "diamond casting", "b2b jewellery"],
    statement: "“Retail jewellers casting finish aur weight precision par instant updates maangte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/></svg>`,
    desc: "CAD designs, casting sample approvals aur live order job status WhatsApp par manually coordinate karne se manufacturing errors aur delays aate hain.",
    recommendation: "B2B Custom Jewellery CAD/CAM Order Tracker & Weight Precision Portal",
    sankalps: [
      "This week, I will launch a 1-tap design submission portal for retail jeweller clients.",
      "This week, I will automate job-card stage tracking from CAD casting to final rhodium polish.",
      "This week, I will demonstrate our zero-loss micro-setting technology to 3 retail jeweller chains."
    ],
    referralAsk: "Please introduce me to retail jewellery showroom owners wanting high-precision custom CAD/CAM casting and timely festive order delivery.",
    previewType: "jewellery_lookbook"
  },
  {
    id: "plastic_bag_manufacturing",
    category: "Plastic Bag Manufacturing",
    keywords: ["plastic bag manufacturing", "plastic bags", "poly bags", "packaging bags", "ldpe", "hdpe", "custom printed bags", "courier bags"],
    statement: "“Buyers custom micron thickness, size aur bulk slab rates phone par calculate nahi kar paate!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    desc: "Clients size (inches), thickness (microns) aur printing cylinder costs phone par calculate karne me confuse ho jaate hain, jisse quote finalizing me delay hota hai.",
    recommendation: "Instant Bag Dimension & Micron GSM Estimator with Bulk Slab Pricing Calculator",
    sankalps: [
      "This week, I will launch an instant dimension-to-weight calculation tool for B2B buyers.",
      "This week, I will showcase government-compliant bio-degradable & recyclable certified options.",
      "This week, I will audit the packaging bag requirements of 5 fellow GBS e-commerce/retail members."
    ],
    referralAsk: "Please introduce me to garment manufacturers, ecommerce brands, or supermarket chains needing bulk custom-printed packaging and courier bags.",
    previewType: "manufacturing_spec"
  },
  {
    id: "tarpaulin",
    category: "Tarpaulin",
    keywords: ["tarpaulin", "tirpal", "waterproof covers", "monsoon shed", "truck tarpaulin", "hdpe sheet", "agriculture tarpaulin"],
    statement: "“Monsoon aane par customers last minute rate aur GSM durability verify karna chahte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 12 1 23 6 12 23 1 6"/></svg>`,
    desc: "Heavy GSM vs light GSM comparison, eyelet strength aur UV protection life span digital catalog me na hone se client cheap inferior quality se compare karta hai.",
    recommendation: "Rapid GSM Durability Selector & Waterproof Area Calculator Engine",
    sankalps: [
      "This week, I will publish our visual GSM durability comparison guide (120 GSM to 500 GSM).",
      "This week, I will launch an instant square-meter area cost calculator on WhatsApp.",
      "This week, I will connect with logistics fleet owners in our network for seasonal tarpaulin replacement."
    ],
    referralAsk: "Please introduce me to transport fleet owners, warehouse operators, or construction project heads needing heavy-duty waterproof tarpaulins and monsoon covers.",
    previewType: "manufacturing_spec"
  },
  {
    id: "curtains_sofa_material",
    category: "Curtains & Sofa Material",
    keywords: ["curtains & sofa material", "curtains", "sofa material", "furnishings", "upholstery", "velvet", "sheer", "sofa fabric", "drapes", "curtainess and sofa material"],
    statement: "“Customers phone par fabric texture aur room matching samajh nahi paate!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    desc: "Velvet, sheer, blackout drapes aur sofa fabric rubbing fastness (Martindale count) phone par describe nahi hoti, jisse client showroom aane me mahino lagata hai.",
    recommendation: "Interactive Fabric Texture Visualizer & Window Yardage Estimation Engine",
    sankalps: [
      "This week, I will launch a digital fabric swatch selector with high-res texture zoom.",
      "This week, I will create an instant window dimension to fabric meterage calculator.",
      "This week, I will offer a complimentary festive home curtain styling audit for 3 GBS members."
    ],
    referralAsk: "Please introduce me to interior designers, architects, or homeowners looking for premium blackout curtains, sheer drapes, and luxury sofa upholstery fabrics.",
    previewType: "curtains_visualizer"
  },
  {
    id: "education",
    category: "Education",
    keywords: ["education", "coaching", "classes", "tuition", "entrance exam", "school", "college", "tutoring", "admissions"],
    statement: "“Parents results aur teaching methodology ka authentic visual proof maangte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    desc: "Toppers' verified marks, faculty experience aur free demo class booking web par na hone se parents admission lene se pehle 4 competitor coaching centers visit karte hain.",
    recommendation: "Student Success Testimonials Wall & 1-Tap Free Trial Class Scheduler",
    sankalps: [
      "This week, I will showcase our past students' success stories and rankers on a verified link.",
      "This week, I will enable 1-click booking for a free diagnostic assessment trial class.",
      "This week, I will offer academic career counselling sessions for children of GBS members."
    ],
    referralAsk: "Please introduce me to parents of 9th-12th standard students seeking focused academic coaching, entrance test guidance, and guaranteed personal attention.",
    previewType: "trainer_syllabus"
  },
  {
    id: "swimming_pool",
    category: "Swimming Pool",
    keywords: ["swimming pool", "pool construction", "pool maintenance", "filtration plant", "jacuzzi", "swimming academy", "pool chemicals"],
    statement: "“Resort owners aur societies water clarity filtration AMC ke liye trustworthy partner chahte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M2 16h20M2 20h20"/><circle cx="12" cy="7" r="3"/></svg>`,
    desc: "Leak-proof swimming pool construction specs, water turnover cycles aur monthly chemical dosing records digital format me na hone se tenders me clarity nahi hoti.",
    recommendation: "Pool Construction 3D Portfolio & Water Filtration AMC Service Ticket Portal",
    sankalps: [
      "This week, I will launch a digital showcase of our luxury infinity and skimmer pool installations.",
      "This week, I will create an instant maintenance pricing calculator for housing societies and resorts.",
      "This week, I will conduct a complimentary pool water safety test for 2 GBS member properties."
    ],
    referralAsk: "Please introduce me to hotel owners, bungalow owners, or housing society committees planning to build or renovate a crystal-clear swimming pool.",
    previewType: "generic_showcase"
  },
  {
    id: "foreign_exchange",
    category: "Foreign Exchange (Forex)",
    keywords: ["foreign exchange", "forex", "currency exchange", "travel card", "international money transfer", "usd inr", "forex card", "forgin exchange"],
    statement: "“Overseas travellers live exchange rates aur doorstep currency delivery transparency chahte hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/></svg>`,
    desc: "Live daily currency rates (USD, EUR, AED, GBP) phone par poochte-poochte customer online forex portals par chala jata hai jahan transparent rate visible hota hai.",
    recommendation: "Live Real-Time Forex Rate Calculator & 1-Tap Doorstep Currency Delivery Desk",
    sankalps: [
      "This week, I will publish our live daily exchange rates with zero-hidden-markup transparency.",
      "This week, I will enable 1-tap WhatsApp booking for international multi-currency travel cards.",
      "This week, I will offer VIP doorstep currency exchange service to fellow GBS outbound travellers."
    ],
    referralAsk: "Please introduce me to students going abroad for higher studies, corporate travelers, or families holidaying internationally needing fast, certified foreign currency.",
    previewType: "finance_calculator"
  },
  {
    id: "general_business",
    category: "Other / General Business",
    keywords: ["business", "trading", "services", "manufacturing", "retail", "general"],
    statement: "“Inquiries aati hain par follow-up automated na hone se 50% deals slip ho jaati hain!”",
    svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>`,
    desc: "Inquiries phone ya WhatsApp par aati hain, par transparent digital catalog aur fast quotation calculator na hone se prospective clients delay karte hain.",
    recommendation: "Standardised 24/7 Digital Sales Funnel & Instant WhatsApp Credential Hub",
    sankalps: [
      "This week, I will organise our core offerings into a clean, mobile-friendly link.",
      "This week, I will automate answering repetitive basic customer questions on WhatsApp.",
      "This week, I will share our verified credibility credentials with my networking circle."
    ],
    referralAsk: "Please introduce me to business leaders who value genuine quality and want to elevate their brand credibility through modern web systems.",
    previewType: "generic_showcase"
  }
]
};

// 3-Question Diagnostic Questions System
const QUIZ_QUESTIONS = [
  {
    step: 1,
    badge: "🤝",
    prompt: "How do new clients usually discover you?",
    subtext: "Select the option that reflects your main client source.",
    options: [
      { id: "referrals", icon: "🤝", title: "Word-of-Mouth & GBS Referrals", desc: "Happy clients, trusted friends, and chapter network recommendations." },
      { id: "social", icon: "📱", title: "Instagram & Social Media", desc: "Reels, posts, direct messages, and online followers." },
      { id: "search", icon: "🔍", title: "Google Search & Local Maps", desc: "Local searches, website inquiries, or Google Business profile." },
      { id: "direct", icon: "🚶", title: "Direct Walk-ins & Outbound Calls", desc: "Showroom footfall, cold outreach, or existing trade directories." }
    ]
  },
  {
    step: 2,
    badge: "💬",
    prompt: "Where do you send someone asking to view your work?",
    subtext: "Where do you direct interested prospects?",
    options: [
      { id: "whatsapp_photos", icon: "💬", title: "Send 40-50 photos or PDFs on WhatsApp", desc: "Scrolling through phone gallery to forward loose photos & heavy PDFs." },
      { id: "official_site", icon: "🌐", title: "Modern Official Fast Website", desc: "An organised digital showcase link with our best projects." },
      { id: "manual_call", icon: "📞", title: "I explain everything manually on phone calls", desc: "Spending 20-30 minutes on calls describing our services and pricing." },
      { id: "showroom", icon: "🏢", title: "Invite them to visit showroom / office", desc: "Insisting they come over in person to see samples and catalogs." }
    ]
  },
  {
    step: 3,
    badge: "⏳",
    prompt: "What eats up too much of your team's valuable time?",
    subtext: "Identify your single biggest daily administrative friction.",
    options: [
      { id: "repetitive_info", icon: "🔁", title: "Repeating same basic rates & specs", desc: "Typing the exact same pricing, dimensions, or FAQs over and over." },
      { id: "chasing_quotes", icon: "⏳", title: "Chasing unpaid quotes & follow-ups", desc: "Sending quotations that get ghosted without automated follow-ups." },
      { id: "coordinating_slots", icon: "📅", title: "Coordinating appointments & visits", desc: "Manual back-and-forth messages just to finalize an inspection or meeting." },
      { id: "manual_estimates", icon: "📝", title: "Manually drafting custom proposals", desc: "Hours spent building proposals from scratch for routine inquiries." }
    ]
  }
];

// App State (Default Sound ON as requested!)
const state = {
  ownerName: '',
  businessName: '',
  categoryObj: null,
  currentQuizIndex: 0,
  quizAnswers: {
    discovery: 'referrals',
    portfolio: 'whatsapp_photos',
    timeSink: 'repetitive_info'
  },
  selectedSankalp: '',
  soundEnabled: true
};

// Web Audio API Synthesis for Pure Temple Bells & Chimes
class TempleAcousticAudio {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  playTempleBell() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const fundamentals = [587.33, 880, 1174.66, 1760];

      fundamentals.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const decay = 2.4 - idx * 0.4;
        const initialVol = 0.16 / (idx + 1);

        gain.gain.setValueAtTime(initialVol, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + decay);
      });
    } catch (e) {}
  }

  playChime() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [659.25, 783.99, 1046.50];

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.08, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.65);
      });
    } catch (e) {}
  }
}

const templeAudio = new TempleAcousticAudio();

// Gentle Marigold Petals Canvas Animation
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
  const petalCount = window.innerWidth < 600 ? 18 : 34;
  const colors = [
    'rgba(235, 120, 23, 0.45)', // Saffron
    'rgba(247, 183, 49, 0.55)', // Marigold Gold
    'rgba(197, 146, 57, 0.40)', // Metallic Gold
    'rgba(183, 28, 28, 0.30)'   // Kumkum Crimson
  ];

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 5 + 3.5,
      speedY: Math.random() * 0.55 + 0.25,
      speedX: Math.random() * 0.4 - 0.2,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 1.2 - 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
      sway: Math.random() * 2 + 1
    });
  }

  let time = 0;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    time += 0.015;

    petals.forEach(p => {
      p.y += p.speedY;
      p.x += Math.sin(time + p.sway) * 0.35 + p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -15;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -10;
      if (p.x < -20) p.x = width + 10;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Populate Category Dropdown
function populateCategoryDropdown() {
  const select = document.getElementById('businessCategory');
  if (!select) return;

  select.innerHTML = '<option value="" disabled selected>✨ Choose your GBS trade category...</option>';

  CONFIG.SOLUTIONS_CATALOG.forEach(sol => {
    const opt = document.createElement('option');
    opt.value = sol.id;
    opt.textContent = sol.category;
    select.appendChild(opt);
  });
}

// Find Category by ID or Keyword
function findCategory(idOrName) {
  if (!idOrName) return CONFIG.SOLUTIONS_CATALOG[CONFIG.SOLUTIONS_CATALOG.length - 1];

  const found = CONFIG.SOLUTIONS_CATALOG.find(s => s.id === idOrName);
  if (found) return found;

  const lower = idOrName.toLowerCase();
  for (const sol of CONFIG.SOLUTIONS_CATALOG) {
    if (sol.keywords.some(k => lower.includes(k.toLowerCase()))) {
      return sol;
    }
  }

  return CONFIG.SOLUTIONS_CATALOG[CONFIG.SOLUTIONS_CATALOG.length - 1];
}

// Screen Switcher
function showScreen(screenId) {
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Render Diagnostic Quiz Question
function renderQuizQuestion(index) {
  const question = QUIZ_QUESTIONS[index];
  if (!question) return;

  state.currentQuizIndex = index;

  document.getElementById('quizStepTag').textContent = `Question ${question.step} of 3`;
  document.getElementById('quizProgressFill').style.width = `${((index + 1) / 3) * 100}%`;
  document.getElementById('qBadgeIcon').textContent = question.badge;
  document.getElementById('questionPrompt').textContent = question.prompt;
  document.getElementById('questionSubtext').textContent = question.subtext;

  const container = document.getElementById('quizOptionsGrid');
  container.innerHTML = '';

  const activeAnswerKey = index === 0 ? 'discovery' : index === 1 ? 'portfolio' : 'timeSink';
  const currentSelected = state.quizAnswers[activeAnswerKey];

  question.options.forEach(opt => {
    const card = document.createElement('div');
    card.className = `quiz-opt-card ${currentSelected === opt.id ? 'selected' : ''}`;
    card.innerHTML = `
      <div class="quiz-opt-icon">${opt.icon}</div>
      <div class="quiz-opt-text-wrap">
        <strong class="quiz-opt-title">${opt.title}</strong>
        <p class="quiz-opt-desc">${opt.desc}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      templeAudio.playChime();
      state.quizAnswers[activeAnswerKey] = opt.id;

      // Highlight selection
      container.querySelectorAll('.quiz-opt-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      // Auto advance with subtle delay
      setTimeout(() => {
        if (index < 2) {
          renderQuizQuestion(index + 1);
        } else {
          // Finished questions -> Launch synthesis ceremony
          startSynthesisCeremony();
        }
      }, 240);
    });

    container.appendChild(card);
  });
}

// Ceremonial Sequence with Thoughtful Progress
function startSynthesisCeremony() {
  showScreen('step2Screen');
  templeAudio.playTempleBell();

  const fill = document.getElementById('scanProgressFill');
  const nodes = [
    document.getElementById('scanStep1'),
    document.getElementById('scanStep2'),
    document.getElementById('scanStep3'),
    document.getElementById('scanStep4')
  ];

  nodes.forEach(n => { n.classList.remove('active', 'completed'); });
  fill.style.width = '10%';
  nodes[0].classList.add('active');

  setTimeout(() => {
    nodes[0].classList.remove('active');
    nodes[0].classList.add('completed');
    nodes[1].classList.add('active');
    fill.style.width = '50%';
    templeAudio.playChime();
  }, 800);

  setTimeout(() => {
    nodes[1].classList.remove('active');
    nodes[1].classList.add('completed');
    nodes[2].classList.add('active');
    fill.style.width = '75%';
    templeAudio.playChime();
  }, 1600);

  setTimeout(() => {
    nodes[2].classList.remove('active');
    nodes[2].classList.add('completed');
    nodes[3].classList.add('active');
    fill.style.width = '100%';
    templeAudio.playTempleBell();
  }, 2400);

  setTimeout(() => {
    // Show sweet Prasad seal transition
    showScreen('modakLoadingScreen');
    const modakFill = document.getElementById('modakProgressFill');
    modakFill.style.width = '0%';
    setTimeout(() => { modakFill.style.width = '100%'; }, 50);

    setTimeout(() => {
      populatePatrikaResults();
      showScreen('step3Screen');
      templeAudio.playTempleBell();
    }, 900);
  }, 3200);
}

// Generate Detailed Solutions for the 3 Questions Answered by the User (Ultra-short, crisp, 1 line each)
function generateDetailedSolutions(quizAnswers, cat) {
  const discoverySolutions = {
    referrals: {
      questionTitle: "Q1 • Discovery",
      userResponse: "Word-of-Mouth & GBS",
      vighna: "Peers lack an instant digital link to forward your work on WhatsApp.",
      solution: "1-tap digital portfolio card that members can share in seconds."
    },
    social: {
      questionTitle: "Q1 • Discovery",
      userResponse: "Instagram & Social",
      vighna: "Casual DMs and 'price please' comments waste hours with low conversion.",
      solution: "Smart bio-link estimator routing serious leads directly to WhatsApp."
    },
    search: {
      questionTitle: "Q1 • Discovery",
      userResponse: "Google Search & Maps",
      vighna: "Visitors bounce away quickly if your page is slow or not mobile-friendly.",
      solution: "Fast mobile page with Google reviews and direct WhatsApp call button."
    },
    direct: {
      questionTitle: "Q1 • Discovery",
      userResponse: "Walk-ins & Calls",
      vighna: "Walk-in inquiries get lost with zero automated follow-up.",
      solution: "Desk QR stand that sends your full catalog to their phone instantly."
    }
  };

  const portfolioSolutions = {
    whatsapp_photos: {
      questionTitle: "Q2 • Work Presentation",
      userResponse: "WhatsApp Photos / PDFs",
      vighna: "Sending 40 loose photos floods client phones and looks unorganized.",
      solution: "Clean 1-tap mobile lookbook that loads in 1 second on any phone."
    },
    official_site: {
      questionTitle: "Q2 • Work Presentation",
      userResponse: "Official Website",
      vighna: "Static websites act like dead visiting cards with zero lead capture.",
      solution: "Interactive catalog with 1-tap WhatsApp inquiry on every project."
    },
    manual_call: {
      questionTitle: "Q2 • Work Presentation",
      userResponse: "Manual Phone Calls",
      vighna: "Explaining basic scope on calls for 30 minutes drains your day.",
      solution: "Visual 3-step project overview sent before calls to close faster."
    },
    showroom: {
      questionTitle: "Q2 • Work Presentation",
      userResponse: "Office / Showroom Visits",
      vighna: "Busy decision-makers postpone physical visits due to distance.",
      solution: "360° virtual showroom link with instant VIP slot booking."
    }
  };

  const timeSinkSolutions = {
    repetitive_info: {
      questionTitle: "Q3 • Operations",
      userResponse: "Repetitive Rates & Specs",
      vighna: "Hours wasted daily typing the same basic rates and specifications.",
      solution: "Instant WhatsApp FAQ and rate estimator active 24/7."
    },
    chasing_quotes: {
      questionTitle: "Q3 • Operations",
      userResponse: "Chasing Unpaid Quotes",
      vighna: "PDF quotations get stuck in review with awkward follow-ups.",
      solution: "Digital quote with 1-tap WhatsApp approval and auto-reminders."
    },
    coordinating_slots: {
      questionTitle: "Q3 • Operations",
      userResponse: "Scheduling Meetings",
      vighna: "Endless messages to fix meeting times cause delays and no-shows.",
      solution: "1-tap booking link with automatic WhatsApp confirmation."
    },
    manual_estimates: {
      questionTitle: "Q3 • Operations",
      userResponse: "Manual Custom Quotes",
      vighna: "Drafting quotes in Excel delays proposals and loses deals.",
      solution: "Fast modular quote builder delivering branded estimates in 2 minutes."
    }
  };

  return [
    discoverySolutions[quizAnswers.discovery] || discoverySolutions.referrals,
    portfolioSolutions[quizAnswers.portfolio] || portfolioSolutions.whatsapp_photos,
    timeSinkSolutions[quizAnswers.timeSink] || timeSinkSolutions.repetitive_info
  ];
}

// Populate Shubh Patrika with Reasoned Diagnosis
function populatePatrikaResults() {
  const cat = state.categoryObj;

  document.getElementById('reportBusinessName').textContent = state.businessName;
  document.getElementById('reportOwnerName').textContent = state.ownerName;
  document.getElementById('reportIndustryCategory').textContent = cat.category;

  const solCatLabel = document.getElementById('solutionsCategoryLabel');
  if (solCatLabel) solCatLabel.textContent = cat.category;

  // 1. Render Summary Answer of All Questions
  const summaryGrid = document.getElementById('threeSolutionsSummaryGrid');
  if (summaryGrid) {
    summaryGrid.innerHTML = '';
    const solutions = generateDetailedSolutions(state.quizAnswers, cat);
    const labels = ["Discovery", "Presentation", "Operations"];

    solutions.forEach((sol, idx) => {
      const row = document.createElement('div');
      row.className = 'summary-point-row';
      row.innerHTML = `
        <span class="summary-num">${idx + 1}</span>
        <div class="summary-point-content">
          <strong class="summary-key">${labels[idx]}:</strong>
          <span class="summary-val">${sol.solution}</span>
        </div>
      `;
      summaryGrid.appendChild(row);
    });
  }

  const takeawayText = document.getElementById('summaryCoreSolutionText');
  if (takeawayText) takeawayText.textContent = cat.recommendation;

  // 2. GBS 30-Second Referral Pitch Prompt
  const referralBox = document.getElementById('referralTextBox');
  if (referralBox) {
    const customAsk = `“Hello GBS Glory members! My name is ${state.ownerName} from ${state.businessName}. ${cat.referralAsk}”`;
    referralBox.textContent = customAsk;
  }

  // 3. Update Climax WhatsApp Link to Yash
  updateWhatsAppCta();
}

// Render Interactive Working Mini Preview for the Chosen Profile
function renderInteractivePreview(cat) {
  const viewport = document.getElementById('interactiveDemoViewport');
  if (!viewport) return;

  const bizName = state.businessName || "Your Firm";
  const catName = cat.category;

  if (cat.previewType === 'cash_machine_compare') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com/machines</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Live Demo Online</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchMachineTab(this, 'all')">All Models</button>
          <button type="button" class="demo-tab-btn" onclick="switchMachineTab(this, 'retail')">Retail Stores</button>
          <button type="button" class="demo-tab-btn" onclick="switchMachineTab(this, 'heavy')">Heavy Cash / Jewellers</button>
        </div>
        <div class="demo-cards-grid" id="demoCardsGrid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="machTitle1">Smart Note Counter V2</strong>
              <span class="demo-item-meta" id="machMeta1">1000 notes/min • UV/MG Fake Note Detection</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Requested Free On-Site Demo for Note Counter!')">Request Demo</button>
          </div>
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="machTitle2">Value Sorter Pro 3D</strong>
              <span class="demo-item-meta" id="machMeta2">Mix Note Total Value Counter • Color TFT Display</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Requested Free On-Site Demo for Value Sorter!')">Request Demo</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Request received! Yash & ${bizName} team will deliver demo machine within 24 hours.</div>
      </div>
    `;
  } else if (cat.previewType === 'interior_portfolio') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.design/portfolio</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● 2026 Collection</span>
        </div>
        <div class="demo-tabs-row" id="interiorTabRow">
          <button type="button" class="demo-tab-btn active" onclick="switchInteriorTab(this, 'office')">Corporate Offices</button>
          <button type="button" class="demo-tab-btn" onclick="switchInteriorTab(this, 'retail')">Boutique Retail</button>
          <button type="button" class="demo-tab-btn" onclick="switchInteriorTab(this, 'luxury')">Luxury Residence</button>
        </div>
        <div class="demo-cards-grid" id="interiorCardsGrid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="intCardTitle1">Fintech HQ • 4,500 sq.ft</strong>
              <span class="demo-item-meta" id="intCardMeta1">Acoustic pods, ergonomic workstations, executive lounge</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Moodboard & Cost Breakdown sent via WhatsApp!')">Get Moodboard</button>
          </div>
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="intCardTitle2">Chartered Firm Suite • 2,200 sq.ft</strong>
              <span class="demo-item-meta" id="intCardMeta2">Private client cabins, conference hub & veneer panelling</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Moodboard & Cost Breakdown sent via WhatsApp!')">Get Moodboard</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Client requested project moodboard directly on WhatsApp! No loose photos needed.</div>
      </div>
    `;
  } else if (cat.previewType === 'trainer_syllabus') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com/programs</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Executive Curriculum</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchTrainerTab(this, 'pitch')">Sales Pitch Mastery</button>
          <button type="button" class="demo-tab-btn" onclick="switchTrainerTab(this, 'leadership')">Executive Leadership</button>
          <button type="button" class="demo-tab-btn" onclick="switchTrainerTab(this, 'communication')">High-Stakes Speaking</button>
        </div>
        <div class="demo-cards-grid" id="trainerCardsGrid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="trTitle">2-Day Intensive: B2B Deal Closing Bootcamp</strong>
              <span class="demo-item-meta" id="trMeta">Objection handling, consultative pricing, closing psychology</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Downloaded Full Module Outline & Proposal!')">Get Curriculum</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ HR Head scheduled a 20-min curriculum discovery session!</div>
      </div>
    `;
  } else if (cat.previewType === 'pest_control_selector') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.in/calculator</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Herbal Certified</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchPestTab(this, 'home')">Home 2BHK/3BHK</button>
          <button type="button" class="demo-tab-btn" onclick="switchPestTab(this, 'commercial')">Restaurant / Commercial AMC</button>
        </div>
        <div class="demo-cards-grid" id="pestCardsGrid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="pestTitle">Herbal Odourless Cockroach & Pest Gel</strong>
              <span class="demo-item-meta" id="pestMeta">100% Non-Toxic • No need to vacate kitchen • 1-Year Warranty</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Free Inspection Slot Booked!')">Book Free Audit</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Free inspection scheduled instantly without telephone back-and-forth!</div>
      </div>
    `;
  } else if (cat.previewType === 'travel_itinerary') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.tours/diwali-trips</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Curated VIP Itineraries</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchTravelTab(this, 'dubai')">Dubai 5N/6D</button>
          <button type="button" class="demo-tab-btn" onclick="switchTravelTab(this, 'kashmir')">Kashmir 6N/7D</button>
          <button type="button" class="demo-tab-btn" onclick="switchTravelTab(this, 'bali')">Bali 4N/5D</button>
        </div>
        <div class="demo-cards-grid" id="travelCardsGrid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="travTitle">Dubai Grand Luxury Tour</strong>
              <span class="demo-item-meta" id="travMeta">Desert Safari, Burj Khalifa 124th Fl, Luxury Yacht & Visa included</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Day-wise itinerary PDF sent to customer on WhatsApp!')">Get Itinerary</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Instant day-wise itinerary sent to prospective traveler on WhatsApp!</div>
      </div>
    `;
  } else if (cat.previewType === 'logistics_rate') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.express/rate-check</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Rapid Pickup Engine</span>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card" style="flex-direction: column; align-items: flex-start;">
            <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
              <strong class="demo-item-title">Estimated Freight Calculator</strong>
              <span class="demo-badge-live">Pincode Verified</span>
            </div>
            <div style="font-size: 0.76rem; color: #555; margin: 4px 0 8px 0;">Weight: <strong>5.0 kg</strong> (Express Air Transit)</div>
            <div style="display: flex; gap: 8px; width: 100%;">
              <button type="button" class="demo-item-btn" style="flex: 1;" onclick="triggerDemoAction('Instant rate ₹450 calculated & pickup scheduled for 4 PM today!')">Calculate & Book Pickup</button>
            </div>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Pickup booked! Delivery boy assigned automatically.</div>
      </div>
    `;
  } else if (cat.previewType === 'clinic_slots') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.care/appointments</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Confirmed Slots</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active">Today Evening</button>
          <button type="button" class="demo-tab-btn">Tomorrow Morning</button>
          <button type="button" class="demo-tab-btn">Weekend VIP</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title">Care & Smile Consultation</strong>
              <span class="demo-item-meta">Dr. Verified Slot: 6:30 PM (Zero Waiting Queue)</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Appointment slot confirmed for 6:30 PM!')">Confirm Slot</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Patient confirmed slot via WhatsApp reminder! Zero receptionist delay.</div>
      </div>
    `;
  } else if (cat.previewType === 'finance_calculator') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.in/wealth-calculator</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Financial Growth Desk</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchFinanceTab(this, 'sip')">Wealth SIP</button>
          <button type="button" class="demo-tab-btn" onclick="switchFinanceTab(this, 'hni')">HNI Portfolio</button>
          <button type="button" class="demo-tab-btn" onclick="switchFinanceTab(this, 'tax')">Tax Optimization</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card" style="flex-direction: column; align-items: flex-start;">
            <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
              <strong class="demo-item-title" id="finTitle">15-Year Compounding Wealth Blueprint</strong>
              <span class="demo-badge-live" id="finBadge">14.8% CAGR</span>
            </div>
            <div style="font-size: 0.76rem; color: #555; margin: 4px 0 8px 0;" id="finMeta">Monthly ₹25,000 Invested • Projected Wealth: <strong>₹1.52 Crores</strong></div>
            <button type="button" class="demo-item-btn" style="width: 100%;" onclick="triggerDemoAction('Personalized financial plan delivered to client WhatsApp!')">Request Customized Blueprint</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Personalized wealth growth roadmap sent to prospective client on WhatsApp!</div>
      </div>
    `;
  } else if (cat.previewType === 'curtains_visualizer') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.living/fabrics</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Premium Textures</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchCurtainsTab(this, 'velvet')">Royal Velvet</button>
          <button type="button" class="demo-tab-btn" onclick="switchCurtainsTab(this, 'sheer')">Sheer Linen</button>
          <button type="button" class="demo-tab-btn" onclick="switchCurtainsTab(this, 'blackout')">100% Blackout</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="curtTitle">Imperial Velvet Drapery & Sofa Fabric</strong>
              <span class="demo-item-meta" id="curtMeta">450 GSM • High Martindale Rub Count • Stain Resistant</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Fabric Swatch & Yardage Calculator sent to customer!')">Get Swatch Box</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Fabric swatch sample & window yardage quote dispatched to client!</div>
      </div>
    `;
  } else if (cat.previewType === 'manufacturing_spec') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.factory/specs</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Factory Direct B2B</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchMfgTab(this, 'bulk')">Bulk 500kg+</button>
          <button type="button" class="demo-tab-btn" onclick="switchMfgTab(this, 'custom')">Custom Print</button>
          <button type="button" class="demo-tab-btn" onclick="switchMfgTab(this, 'bio')">Bio-Degradable</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card" style="flex-direction: column; align-items: flex-start;">
            <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
              <strong class="demo-item-title" id="mfgTitle">Industrial Dimension & GSM Calculator</strong>
              <span class="demo-badge-live">ISO 9001 Certified</span>
            </div>
            <div style="font-size: 0.76rem; color: #555; margin: 4px 0 8px 0;" id="mfgMeta">Thickness: 50 Microns • Tensile Tested • Instant Wholesale Rate</div>
            <button type="button" class="demo-item-btn" style="width: 100%;" onclick="triggerDemoAction('Wholesale factory rate & sample pack dispatched!')">Download Bulk Price Matrix</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ B2B wholesale price quotation generated with delivery timeline!</div>
      </div>
    `;
  } else if (cat.previewType === 'cctv_packages') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.security/packages</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● 2K/4K Surveillance</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchCctvTab(this, '4cam')">4-Camera Setup</button>
          <button type="button" class="demo-tab-btn" onclick="switchCctvTab(this, '8cam')">8-Camera Setup</button>
          <button type="button" class="demo-tab-btn" onclick="switchCctvTab(this, 'amc')">Commercial AMC</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="cctvTitle">Ultra HD 4-Camera Color Night Vision</strong>
              <span class="demo-item-meta" id="cctvMeta">5MP Audio Cameras • 1TB Surveillance Hard Drive • Mobile Live View</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Booked complimentary on-site security survey!')">Book Free Site Audit</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Free on-site security layout inspection scheduled!</div>
      </div>
    `;
  } else if (cat.previewType === 'jewellery_lookbook') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.jewels/lookbook</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Hallmarked & Certified</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchJewelleryTab(this, 'rings')">Solitaire Rings</button>
          <button type="button" class="demo-tab-btn" onclick="switchJewelleryTab(this, 'bridal')">Bridal Sets</button>
          <button type="button" class="demo-tab-btn" onclick="switchJewelleryTab(this, 'cad')">Custom CAD Casting</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="jewelTitle">Solitaire Eternal Promise Ring</strong>
              <span class="demo-item-meta" id="jewelMeta">1.02 Carat VVS1 • GIA Certified • 18K Hallmarked Gold</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Certificate & live video view sent on WhatsApp!')">Enquire Design</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Design specs, 4C certificate & live consultation confirmed!</div>
      </div>
    `;
  } else if (cat.previewType === 'property_showcase') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.realty/listings</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● RERA Registered</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchPropertyTab(this, 'ready')">Ready Possession</button>
          <button type="button" class="demo-tab-btn" onclick="switchPropertyTab(this, 'launch')">Pre-Launch VIP</button>
          <button type="button" class="demo-tab-btn" onclick="switchPropertyTab(this, 'commercial')">Commercial Hub</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="propTitle">Skyline Residency • 3BHK Deck Apartment</strong>
              <span class="demo-item-meta" id="propMeta">1,180 sq.ft Carpet • Rooftop Clubhouse • RERA Approved</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Brochure & verified floor plan sent on WhatsApp!')">Download Floor Plan</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Verified floor plan and video walkthrough delivered to prospect!</div>
      </div>
    `;
  } else if (cat.previewType === 'chair_doctor_booking') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.care/chair-service</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Doorstep Doctor</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchChairDoctorTab(this, 'gas')">Gas Lift & Mechanism</button>
          <button type="button" class="demo-tab-btn" onclick="switchChairDoctorTab(this, 'mesh')">Mesh & Re-Upholstery</button>
          <button type="button" class="demo-tab-btn" onclick="switchChairDoctorTab(this, 'amc')">Corporate AMC</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="chairTitle">Heavy Class-4 Gas Lift Replacement</strong>
              <span class="demo-item-meta" id="chairMeta">150kg weight tested • 2-Year Replacement Warranty • On-Site Fix</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Technician inspection booked for tomorrow 11 AM!')">Schedule Doorstep Fix</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Doorstep chair repair inspection scheduled without office disruption!</div>
      </div>
    `;
  } else if (cat.previewType === 'tech_store_catalog') {
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.tech/store</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Genuine Parts Warranty</span>
        </div>
        <div class="demo-tabs-row">
          <button type="button" class="demo-tab-btn active" onclick="switchTechStoreTab(this, 'repair')">Device Repair</button>
          <button type="button" class="demo-tab-btn" onclick="switchTechStoreTab(this, 'laptop')">Laptops & PCs</button>
          <button type="button" class="demo-tab-btn" onclick="switchTechStoreTab(this, 'fleet')">Corporate AMC</button>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title" id="techTitle">Flagship Screen & Battery Service</strong>
              <span class="demo-item-meta" id="techMeta">Original OLED display • 90-Day Guarantee • 30-min express fix</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Instant repair quote & warranty certificate issued!')">Get Repair Estimate</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Instant repair estimate & digital warranty card sent to customer!</div>
      </div>
    `;
  } else {
    // High-Converting Generic Showcase
    viewport.innerHTML = `
      <div class="demo-chrome-bar">
        <div class="demo-dots"><span class="demo-dot red"></span><span class="demo-dot yellow"></span><span class="demo-dot green"></span></div>
        <div class="demo-url-pill">https://${bizName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</div>
      </div>
      <div class="demo-inner-content">
        <div class="demo-navbar-mini">
          <span class="demo-brand-name">${bizName}</span>
          <span class="demo-badge-live">● Verified GBS Member</span>
        </div>
        <div class="demo-cards-grid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title">${catName} Services & Catalogue</strong>
              <span class="demo-item-meta">Standardised pricing, verified client credentials & quick WhatsApp RFQ</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Digital inquiry received with specifications attached!')">Request Details</button>
          </div>
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title">Direct Owner Consultation Line</strong>
              <span class="demo-item-meta">Skip intermediate staff • Connect directly with ${state.ownerName}</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Connected directly to ${state.ownerName} on WhatsApp!')">Message Owner</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Qualified client inquiry received with exact specifications!</div>
      </div>
    `;
  }
}

// Interactive Preview Helper Handlers
window.triggerDemoAction = function(msg) {
  templeAudio.playChime();
  const banner = document.getElementById('demoFeedbackBanner');
  if (banner) {
    banner.style.display = 'block';
    banner.textContent = `✓ ${msg}`;
    setTimeout(() => {
      banner.style.display = 'none';
    }, 3500);
  }
};

window.switchMachineTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title1 = document.getElementById('machTitle1');
  const meta1 = document.getElementById('machMeta1');
  const title2 = document.getElementById('machTitle2');
  const meta2 = document.getElementById('machMeta2');

  if (type === 'retail') {
    title1.textContent = "Countertop Compact Sorter";
    meta1.textContent = "Ideal for grocery, pharmacies & retail outlets • UV/MG Sensor";
    title2.textContent = "Desktop High-Speed Counter";
    meta2.textContent = "1200 notes/min • Fake note beep alarm • Batch count";
  } else if (type === 'heavy') {
    title1.textContent = "Heavy Vacuum Bundle Counter";
    meta1.textContent = "Built for banks, petrol pumps & jewellers • Handles soiled notes";
    title2.textContent = "Dual CIS 2-Pocket Value Sorter";
    meta2.textContent = "Denomination wise sorting • Serial number recording";
  } else {
    title1.textContent = "Smart Note Counter V2";
    meta1.textContent = "1000 notes/min • UV/MG Fake Note Detection";
    title2.textContent = "Value Sorter Pro 3D";
    meta2.textContent = "Mix Note Total Value Counter • Color TFT Display";
  }
};

window.switchInteriorTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title1 = document.getElementById('intCardTitle1');
  const meta1 = document.getElementById('intCardMeta1');
  const title2 = document.getElementById('intCardTitle2');
  const meta2 = document.getElementById('intCardMeta2');

  if (type === 'office') {
    title1.textContent = "Fintech Corporate Hub • 4,500 sq.ft";
    meta1.textContent = "Acoustic pods, ergonomic workstations, executive lounge";
    title2.textContent = "Chartered Firm Suite • 2,200 sq.ft";
    meta2.textContent = "Private partner cabins, conference hub & veneer panelling";
  } else if (type === 'retail') {
    title1.textContent = "Luxury Diamond Boutique • 1,200 sq.ft";
    meta1.textContent = "Custom jewel display counters, accent warm spotlights, VIP room";
    title2.textContent = "Designer Apparel Store • 2,800 sq.ft";
    meta2.textContent = "Minimalist archways, trial lounge & gold metal display racks";
  } else {
    title1.textContent = "Penthouse Villa • 3,800 sq.ft";
    meta1.textContent = "Italian marble, modular island kitchen, ambient false ceiling";
    title2.textContent = "Smart Luxury 3BHK • 1,450 sq.ft";
    meta2.textContent = "Space-saving storage, fluted panel walls & master suite";
  }
};

window.switchTrainerTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('trTitle');
  const meta = document.getElementById('trMeta');

  if (type === 'pitch') {
    title.textContent = "2-Day Intensive: B2B Deal Closing Bootcamp";
    meta.textContent = "Objection handling, consultative pricing & closing psychology";
  } else if (type === 'leadership') {
    title.textContent = "Executive Leadership & Team Autopilot";
    meta.textContent = "Delegation frameworks, accountability reviews & KPI tracking";
  } else {
    title.textContent = "High-Stakes Speaking & Boardroom Influence";
    meta.textContent = "Voice modulation, body language & persuasive storytelling";
  }
};

window.switchPestTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('pestTitle');
  const meta = document.getElementById('pestMeta');

  if (type === 'home') {
    title.textContent = "Herbal Odourless Cockroach & Pest Gel";
    meta.textContent = "100% Non-Toxic • No need to vacate kitchen • 1-Year Warranty";
  } else {
    title.textContent = "Commercial Kitchen & Restaurant Food-Safe AMC";
    meta.textContent = "FSSAI compliance ready • Monthly audit & digital certificate";
  }
};

window.switchTravelTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('travTitle');
  const meta = document.getElementById('travMeta');

  if (type === 'dubai') {
    title.textContent = "Dubai Grand Luxury Tour (5N/6D)";
    meta.textContent = "Desert Safari, Burj Khalifa 124th Fl, Luxury Yacht & Visa included";
  } else if (type === 'kashmir') {
    title.textContent = "Kashmir Autumn Paradise (6N/7D)";
    meta.textContent = "Dal Lake Shikara, Gulmarg Gondola Phase 1 & 2, Luxury Houseboat";
  } else {
    title.textContent = "Bali Romantic Villa Escape (4N/5D)";
    meta.textContent = "Private Pool Villa, Ubud Jungle Swing, Tanah Lot sunset dinner";
  }
};

window.switchFinanceTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('finTitle');
  const badge = document.getElementById('finBadge');
  const meta = document.getElementById('finMeta');

  if (type === 'sip') {
    title.textContent = "15-Year Compounding Wealth Blueprint";
    badge.textContent = "14.8% CAGR";
    meta.innerHTML = "Monthly ₹25,000 Invested • Projected Wealth: <strong>₹1.52 Crores</strong>";
  } else if (type === 'hni') {
    title.textContent = "HNI Multi-Asset Strategy Portfolio";
    badge.textContent = "Risk-Adjusted Alpha";
    meta.innerHTML = "₹1 Crore Corpus • Equity + Debt + Gold Dynamic Allocation";
  } else {
    title.textContent = "Section 80C & Corporate Tax Shield";
    badge.textContent = "Zero Surcharge";
    meta.innerHTML = "Save up to <strong>₹3,85,000</strong> annually in statutory tax deductions";
  }
};

window.switchCurtainsTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('curtTitle');
  const meta = document.getElementById('curtMeta');

  if (type === 'velvet') {
    title.textContent = "Imperial Velvet Drapery & Sofa Fabric";
    meta.textContent = "450 GSM • High Martindale Rub Count • Stain Resistant";
  } else if (type === 'sheer') {
    title.textContent = "Belgian Sheer Linen Breeze";
    meta.textContent = "Natural daylight filter • Anti-dust weave • Soft flowing drape";
  } else {
    title.textContent = "Thermal Blackout 3-Pass Coating";
    meta.textContent = "100% Light blocking • Sound dampening • AC energy saver";
  }
};

window.switchMfgTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('mfgTitle');
  const meta = document.getElementById('mfgMeta');

  if (type === 'bulk') {
    title.textContent = "Heavy Wholesale Slab (500kg+)";
    meta.textContent = "Wholesale tiered rates • Rapid dispatch • Micron quality certificate";
  } else if (type === 'custom') {
    title.textContent = "Custom 4-Color Rotogravure Printing";
    meta.textContent = "High-definition brand logo • Zero bleed ink • Multiple handles";
  } else {
    title.textContent = "CPCB Certified Bio-Degradable Bags";
    meta.textContent = "100% Compostable • Government verified barcoded compliance";
  }
};

window.switchCctvTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('cctvTitle');
  const meta = document.getElementById('cctvMeta');

  if (type === '4cam') {
    title.textContent = "Ultra HD 4-Camera Color Night Vision";
    meta.textContent = "5MP Audio Cameras • 1TB Surveillance Hard Drive • Mobile Live View";
  } else if (type === '8cam') {
    title.textContent = "Commercial 8-Camera IP POE Setup";
    meta.textContent = "4K Resolution • AI Human Detection • 2TB NVR Storage";
  } else {
    title.textContent = "Annual Maintenance & Breakdown AMC";
    meta.textContent = "Quarterly preventive checks • 4-hour breakdown SLA • Cloud backup";
  }
};

window.switchJewelleryTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('jewelTitle');
  const meta = document.getElementById('jewelMeta');

  if (type === 'rings') {
    title.textContent = "Solitaire Eternal Promise Ring";
    meta.textContent = "1.02 Carat VVS1 • GIA Certified • 18K Hallmarked Gold";
  } else if (type === 'bridal') {
    title.textContent = "Royal Heritage Bridal Choker & Jhumkas";
    meta.textContent = "Uncut Polki & Emerald accents • Antique finish • Certified Gold";
  } else {
    title.textContent = "B2B Precision CAD/CAM Casting";
    meta.textContent = "0.01mm tolerance • Micro-prong setting ready • Rapid turnaround";
  }
};

window.switchPropertyTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('propTitle');
  const meta = document.getElementById('propMeta');

  if (type === 'ready') {
    title.textContent = "Skyline Residency • 3BHK Deck Apartment";
    meta.textContent = "1,180 sq.ft Carpet • Rooftop Clubhouse • RERA Approved";
  } else if (type === 'launch') {
    title.textContent = "Pre-Launch Exclusive Township Investment";
    meta.textContent = "Special Early-Bird pricing • 10:90 Developer subvention scheme";
  } else {
    title.textContent = "Prime Retail Commercial Showroom";
    meta.textContent = "High road frontage • 8.2% Rental yield • Pre-leased to bank";
  }
};

window.switchChairDoctorTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('chairTitle');
  const meta = document.getElementById('chairMeta');

  if (type === 'gas') {
    title.textContent = "Heavy Class-4 Gas Lift Replacement";
    meta.textContent = "150kg weight tested • 2-Year Replacement Warranty • On-Site Fix";
  } else if (type === 'mesh') {
    title.textContent = "Breathable Korean Mesh & Seat Foam";
    meta.textContent = "High-density moulded foam • Zero sagging • Fresh color fabric";
  } else {
    title.textContent = "Office 50+ Chairs Annual AMC Health Care";
    meta.textContent = "Routine castor oiling • Hydraulic testing • Flat 70% cost savings vs new";
  }
};

window.switchTechStoreTab = function(btn, type) {
  templeAudio.playChime();
  const parent = btn.parentElement;
  parent.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const title = document.getElementById('techTitle');
  const meta = document.getElementById('techMeta');

  if (type === 'repair') {
    title.textContent = "Flagship Screen & Battery Service";
    meta.textContent = "Original OLED display • 90-Day Guarantee • 30-min express fix";
  } else if (type === 'laptop') {
    title.textContent = "Custom Workstation Laptop & PC";
    meta.textContent = "Intel Core i7 / Ryzen 7 • 32GB RAM • 1TB NVMe SSD • Local On-Site Support";
  } else {
    title.textContent = "Corporate IT Fleet Hardware AMC";
    meta.textContent = "Antivirus, scheduled cleanup & zero downtime backup standby laptops";
  }
};

// Pre-filled WhatsApp link to Yash Panchal
function updateWhatsAppCta() {
  const cat = state.categoryObj;
  const whatsappCta = document.getElementById('btnChatYash');
  if (!whatsappCta || !cat) return;

  const chatText = encodeURIComponent(
    `Jai Ganesh Yash! 🙏\n\n` +
    `I am *${state.ownerName}* from *${state.businessName}* (${cat.category} in ${CONFIG.CHAPTER_NAME}).\n\n` +
    `Ganpati Bappa just reviewed my business and observed:\n` +
    `🐘 _"Business ke vighna main dekh lunga... Digital wale Yash ko de do!"_\n\n` +
    `📍 Identified Obstacle (Vighna): ${cat.statement}\n` +
    `💡 Recommended by Bappa: *${cat.recommendation}*\n\n` +
    `Yash, can we discuss creating this modern digital solution for my business through Mahant Software?`
  );

  whatsappCta.href = `https://api.whatsapp.com/send?phone=${CONFIG.YASH_WHATSAPP_PHONE}&text=${chatText}`;
}

// Generate Personalized Auspicious Sankalp Card on HTML5 Canvas
function updateSankalpCanvas() {
  const canvas = document.getElementById('sankalpCardCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = 640;
  const h = canvas.height = 780;

  // Background Royal Cream & Parchment Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.5, '#FBF5EC');
  bgGrad.addColorStop(1, '#F5EDE0');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Outer Border & Corner Filigrees
  ctx.strokeStyle = '#C59239';
  ctx.lineWidth = 3;
  ctx.strokeRect(20, 20, w - 40, h - 40);

  ctx.strokeStyle = '#751113';
  ctx.lineWidth = 1;
  ctx.strokeRect(26, 26, w - 52, h - 52);

  // Corner Accents
  const drawCorner = (x, y) => {
    ctx.fillStyle = '#C59239';
    ctx.fillRect(x - 4, y - 4, 8, 8);
  };
  drawCorner(26, 26);
  drawCorner(w - 26, 26);
  drawCorner(26, h - 26);
  drawCorner(w - 26, h - 26);

  // Sacred Top Mantra
  ctx.font = 'bold 18px "Rozha One", serif';
  ctx.fillStyle = '#751113';
  ctx.textAlign = 'center';
  ctx.fillText('॥ श्री गणेशाय नमः ॥', w / 2, 60);

  ctx.font = '600 13px "Cinzel", serif';
  ctx.fillStyle = '#9E6C18';
  ctx.fillText('BAPPA’S BUSINESS DRISHTI • SHUBH SANKALP', w / 2, 85);

  // Decorative Horizontal Divider
  ctx.strokeStyle = '#C59239';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, 105);
  ctx.lineTo(w - 100, 105);
  ctx.stroke();

  // Business Details Card Box
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.strokeStyle = 'rgba(197, 146, 57, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(50, 125, w - 100, 120);
  ctx.strokeRect(50, 125, w - 100, 120);

  ctx.font = 'bold 24px "Cinzel", Georgia, serif';
  ctx.fillStyle = '#751113';
  ctx.fillText(state.businessName || "Your Enterprise", w / 2, 165);

  ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#2A1713';
  ctx.fillText(`Proprietor: ${state.ownerName || "Member"} • ${state.categoryObj ? state.categoryObj.category : "GBS Member"}`, w / 2, 195);

  ctx.font = '500 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#6B544E';
  ctx.fillText(`GBS Chapter: ${CONFIG.CHAPTER_NAME}`, w / 2, 222);

  // Vighna & Sankalp Medallion Ribbon
  ctx.fillStyle = '#751113';
  ctx.fillRect(60, 275, w - 120, 36);

  ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#FFF8E7';
  ctx.fillText('MY SHUBH SANKALP FOR THIS WEEK', w / 2, 298);

  // Sankalp Text Container
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#C59239';
  ctx.lineWidth = 1.5;
  ctx.fillRect(50, 330, w - 100, 200);
  ctx.strokeRect(50, 330, w - 100, 200);

  // Gold Quotation Marks
  ctx.font = 'bold 44px Georgia, serif';
  ctx.fillStyle = '#C59239';
  ctx.fillText('“', 80, 375);

  ctx.font = 'italic bold 20px "Plus Jakarta Sans", Georgia, serif';
  ctx.fillStyle = '#2A1713';
  const words = (state.selectedSankalp || "Organise my best projects into a digital portfolio link.").split(' ');
  let line = '';
  let y = 395;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > w - 150 && n > 0) {
      ctx.fillText(line.trim(), w / 2, y);
      line = words[n] + ' ';
      y += 34;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), w / 2, y);

  // Bappa's Blessing Quote
  ctx.font = 'bold 14px "Rozha One", serif';
  ctx.fillStyle = '#751113';
  ctx.fillText('🐘 “Business ke vighna main dekh lunga... Digital wale Yash ko de do!”', w / 2, 570);

  // Bottom Signature & Verification Seal
  ctx.strokeStyle = '#C59239';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(120, 605);
  ctx.lineTo(w - 120, 605);
  ctx.stroke();

  ctx.font = 'bold 13px "Cinzel", serif';
  ctx.fillStyle = '#2A1713';
  ctx.fillText('MAHANT SOFTWARE • YASH PANCHAL', w / 2, 635);

  ctx.font = '500 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#6B544E';
  ctx.fillText('WhatsApp: +91 90041 68049 • High-Speed Web Systems & Automation', w / 2, 658);

  ctx.font = 'italic 11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#9E6C18';
  ctx.fillText('शुभ गणेशोत्सव २०२६ • Specially crafted for GBS Members', w / 2, 720);
}

// Download Canvas as PNG
function downloadSankalpCard() {
  templeAudio.playChime();
  const canvas = document.getElementById('sankalpCardCanvas');
  if (!canvas) return;

  const link = document.createElement('a');
  link.download = `Shubh_Sankalp_${(state.businessName || 'Business').replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// Native Web Share or WhatsApp Share
function shareApp() {
  templeAudio.playChime();
  const shareTitle = "Ganpati Bappa's Business Drishti • GBS Glory";
  const shareText = `🐘 Ganpati Bappa just reviewed my business (*${state.businessName || "My Business"}*) and diagnosed our key digital bottleneck!\n\n✨ My Shubh Sankalp for this week:\n"${state.selectedSankalp}"\n\nGet your personalized Business Patrika here 👉 ${window.location.href}\n\n— Crafted for GBS Glory by Yash Panchal · Mahant Software (+91 90041 68049)`;

  if (navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText,
      url: window.location.href
    }).catch(() => {});
  } else {
    const encoded = encodeURIComponent(shareText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  }
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initFloralCanvas();
  populateCategoryDropdown();

  // Elements
  const form = document.getElementById('businessForm');
  const ownerInput = document.getElementById('ownerName');
  const businessInput = document.getElementById('businessName');
  const categorySelect = document.getElementById('businessCategory');
  const btnGoToQuestions = document.getElementById('btnGoToQuestions');
  const btnQuizBack = document.getElementById('btnQuizBack');
  const btnSeeBappasSolution = document.getElementById('btnSeeBappasSolution');
  const btnShareApp = document.getElementById('btnShareApp');
  const btnResetTest = document.getElementById('btnResetTest');
  const soundToggle = document.getElementById('soundToggle');

  // Modals
  const sankalpModal = document.getElementById('sankalpModal');
  const sankalpOverlay = document.getElementById('sankalpOverlay');
  const btnCloseSankalpModal = document.getElementById('btnCloseSankalpModal');
  const copyReferralText = document.getElementById('copyReferralText');
  const btnDownloadCanvas = document.getElementById('btnDownloadCanvas');
  const btnShareCanvas = document.getElementById('btnShareCanvas');

  // Pulse Modal
  const btnOpenPulse = document.getElementById('btnOpenPulse');
  const pulseModal = document.getElementById('pulseModal');
  const pulseOverlay = document.getElementById('pulseOverlay');
  const btnClosePulseModal = document.getElementById('btnClosePulseModal');

  // Unlock Audio on First User Interaction (Ensures sound is ON and working!)
  const unlockAudio = () => {
    if (state.soundEnabled) {
      templeAudio.init();
      if (templeAudio.ctx && templeAudio.ctx.state === 'suspended') {
        templeAudio.ctx.resume().catch(() => {});
      }
    }
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
  };
  window.addEventListener('click', unlockAudio);
  window.addEventListener('touchstart', unlockAudio);

  // Sound Toggle (Default ON)
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      const text = soundToggle.querySelector('.sound-text');
      if (state.soundEnabled) {
        if (text) text.textContent = 'Sound: On';
        soundToggle.classList.add('active');
        soundToggle.style.opacity = '1';
        templeAudio.playTempleBell();
      } else {
        if (text) text.textContent = 'Sound: Off';
        soundToggle.classList.remove('active');
        soundToggle.style.opacity = '0.7';
      }
    });
  }

  // Open/Close Pulse Modal
  if (btnOpenPulse) {
    btnOpenPulse.addEventListener('click', () => {
      templeAudio.playChime();
      pulseModal.classList.add('active');
      pulseModal.setAttribute('aria-hidden', 'false');
    });
  }

  const closePulseModal = () => {
    pulseModal.classList.remove('active');
    pulseModal.setAttribute('aria-hidden', 'true');
  };
  if (btnClosePulseModal) btnClosePulseModal.addEventListener('click', closePulseModal);
  if (pulseOverlay) pulseOverlay.addEventListener('click', closePulseModal);

  // Copy Referral Ask
  const btnCopyReferral = document.getElementById('btnCopyReferral');
  if (btnCopyReferral) {
    btnCopyReferral.addEventListener('click', () => {
      templeAudio.playChime();
      const text = document.getElementById('referralTextBox').textContent.trim();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          copyReferralText.textContent = "Copied to Clipboard!";
          setTimeout(() => { copyReferralText.textContent = "Copy GBS Referral Ask"; }, 2000);
        }).catch(() => {
          copyReferralText.textContent = "Copied!";
        });
      }
    });
  }

  // Business Name Auto-Detector for Category
  businessInput.addEventListener('input', () => {
    const val = businessInput.value.trim().toLowerCase();
    if (!categorySelect.value && val.length > 2) {
      for (const sol of CONFIG.SOLUTIONS_CATALOG) {
        if (sol.keywords.some(k => val.includes(k.toLowerCase()))) {
          categorySelect.value = sol.id;
          break;
        }
      }
    }
  });

  // Step 1 Validation & Go To Questions
  function handleGoToQuestions() {
    const owner = ownerInput.value.trim();
    const business = businessInput.value.trim();
    const categoryVal = categorySelect.value;

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

    if (!categoryVal) {
      categorySelect.focus();
      categorySelect.closest('.input-container').style.borderColor = '#C0392B';
      return;
    }
    categorySelect.closest('.input-container').style.borderColor = '';

    state.ownerName = owner;
    state.businessName = business;
    state.categoryObj = findCategory(categoryVal);

    showScreen('questionsScreen');
    renderQuizQuestion(0);
    templeAudio.playChime();
  }

  btnGoToQuestions.addEventListener('click', handleGoToQuestions);
  if (form) form.addEventListener('submit', (e) => { e.preventDefault(); handleGoToQuestions(); });

  // Quiz Back Button
  btnQuizBack.addEventListener('click', () => {
    templeAudio.playChime();
    if (state.currentQuizIndex > 0) {
      renderQuizQuestion(state.currentQuizIndex - 1);
    } else {
      showScreen('step1Screen');
    }
  });

  // Step 3 -> Step 4 (Climax & Yash's Card)
  if (btnSeeBappasSolution) {
    btnSeeBappasSolution.addEventListener('click', () => {
      templeAudio.playTempleBell();
      showScreen('step4Screen');
    });
  }
});
