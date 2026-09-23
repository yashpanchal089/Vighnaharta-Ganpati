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

  // 45+ Comprehensive GBS Member Profiles & Tailored Solutions
  SOLUTIONS_CATALOG: [
    {
      id: "commercial_interior",
      category: "Commercial Interior",
      keywords: ["commercial interior", "office interior", "retail design", "workspace interior", "corporate interior", "interior designer"],
      statement: "“High-end corporate projects WhatsApp chats me kho jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
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
      category: "Home Interior",
      keywords: ["home interior", "residential interior", "flats", "villas", "modular kitchen", "turnkey interior", "home decor"],
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
      id: "cash_counting_machine",
      category: "Cash Counting Machine",
      keywords: ["cash counting machine", "currency counter", "fake note detector", "note counting", "bundle counter", "sorter"],
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
      id: "pest_control",
      category: "Pest Control & Hygiene Services",
      keywords: ["pest control", "hygiene", "termite", "cockroach", "bedbugs", "sanitization", "rodent"],
      statement: "“Customers phone par price sunke delay kar dete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
      desc: "Home vs commercial kitchen treatments, warranty period aur eco-friendly herbal chemical safety proof web par na hone se trust banane me waqt lagta hai.",
      recommendation: "Instant 1-Tap Home & Commercial AMC Estimator with Free Inspection Scheduler",
      sankalps: [
        "This week, I will create an instant quote selector for 1BHK/2BHK/3BHK herbal pest treatments.",
        "This week, I will display our government approved non-toxic safety certifications clearly.",
        "This week, I will offer a festive home pest safety audit for all GBS chapter members."
      ],
      referralAsk: "Please introduce me to restaurant owners, housing society secretaries, or families moving into new homes who need certified, odourless pest control.",
      previewType: "pest_control_selector"
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
      previewType: "sweets_box"
    },
    {
      id: "cakes_chocolates",
      category: "Cakes & Chocolates",
      keywords: ["cakes", "chocolates", "bakery", "pastry", "custom cakes", "birthday cakes", "artisan chocolate"],
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
      previewType: "sweets_box"
    },
    {
      id: "cctv_security",
      category: "CCTV Security",
      keywords: ["cctv", "security", "surveillance", "cctv security", "cameras", "ip camera", "dvr", "nvr"],
      statement: "“Clients unbranded cheap online cameras se compare karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
      desc: "Night-vision clarity, mobile phone live stream aur 2-year warranty service AMC ka visual proof web par turant nahi milta.",
      recommendation: "Interactive 4/8 Camera Package Configurator & Free Site Audit Booker",
      sankalps: [
        "This week, I will showcase side-by-side day vs night camera resolution clips on our link.",
        "This week, I will launch a transparent 4-camera and 8-camera setup package with installation.",
        "This week, I will offer complimentary CCTV health checkups for 5 GBS member factories/offices."
      ],
      referralAsk: "Please introduce me to factory owners, retail showroom managers, or housing societies looking to install or upgrade high-definition CCTV security.",
      previewType: "cctv_packages"
    },
    {
      id: "cctv_security_amc",
      category: "CCTC security and AMC",
      keywords: ["cctv security and amc", "cctv amc", "security maintenance", "biometric amc", "camera repair", "amc"],
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
      keywords: ["cctv security systems", "biometric", "access control", "fire alarm", "video door phone"],
      statement: "“Builders aur commercial sites par technical specifications match nahi hoti!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      desc: "Access control, boom barriers aur CCTV systems ka integrated technical architecture document online present na hone se tenders me delay hota hai.",
      recommendation: "Integrated Security & Access Architecture Showcase Portal",
      sankalps: [
        "This week, I will build an integrated security specification sheet for architects & builders.",
        "This week, I will demonstrate our smartphone biometric integration in a 60-second video.",
        "This week, I will connect with GBS real estate and redevelopment members for site security."
      ],
      referralAsk: "Please introduce me to builders, architects, or commercial facility managers who need integrated security, biometrics, and fire alarm systems.",
      previewType: "cctv_packages"
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
      id: "tours_travels",
      category: "Tours & Travels",
      keywords: ["tours & travels", "tours and travels", "travel agent", "holiday packages", "dubai package", "kashmir", "bali", "visa"],
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
      keywords: ["hotel & resort", "hotel and resort", "resort", "hotel", "staycation", "destination wedding", "banquet hall"],
      statement: "“Direct bookings miss ho rahi hain aur OTAs 20% commission le rahe hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
      desc: "Guest OTA par search karta hai, jabki direct booking par complimentary upgrade ya direct WhatsApp booking link na hone se commission cut ho jata hai.",
      recommendation: "Direct High-Margin Room & Destination Wedding Banquet Booking Engine",
      sankalps: [
        "This week, I will launch a direct WhatsApp booking offer that saves guest 15% vs OTA.",
        "This week, I will showcase a 360-degree virtual tour of our resort rooms and banquet lawn.",
        "This week, I will invite GBS members for an exclusive weekend staycation discount."
      ],
      referralAsk: "Please introduce me to families planning destination weddings, corporate groups booking offsites, or weekend holiday travelers seeking luxury stays.",
      previewType: "travel_itinerary"
    },
    {
      id: "real_estate_property",
      category: "Real Estate Property",
      keywords: ["real estate", "real estate property", "property", "realtor", "flats", "commercial property", "investments"],
      statement: "“Third-party listing portals aapke genuine leads doosre brokers ko bech dete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      desc: "Buyer direct property carpet area, verified legal RERA docs aur sample flat video dhoondhta hai, par unverified portals par misguide ho jata hai.",
      recommendation: "Exclusive Verified Property Showcase with 1-Click WhatsApp Site Visit Booking",
      sankalps: [
        "This week, I will create a dedicated showcase for our top 3 verified residential & commercial properties.",
        "This week, I will enable 1-click 'Book Free Pick & Drop Site Visit' for buyers.",
        "This week, I will present high-ROI commercial pre-leased opportunities to GBS investors."
      ],
      referralAsk: "Please introduce me to home seekers looking for 2BHK/3BHK flats or investors searching for high-rental pre-leased commercial shops.",
      previewType: "real_estate_units"
    },
    {
      id: "real_estate_property_big",
      category: "Real Estate Property – Big",
      keywords: ["real estate property – big", "land", "large plots", "commercial land", "industrial plot", "bungalow plots", "warehouse land"],
      statement: "“HNI & Corporate land buyers high-credibility presentation maangte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      desc: "Acre plots aur industrial land deals me NA permission, FSI calculation aur clear title papers online present karna essential hota hai.",
      recommendation: "HNI Private Investment Dossier & Verified Industrial Land Portal",
      sankalps: [
        "This week, I will digitise our legal title dossiers & drone site surveys for big parcels.",
        "This week, I will create an exclusive institutional investor deck for large land acquisitions.",
        "This week, I will offer prime commercial and industrial options to fellow GBS leaders."
      ],
      referralAsk: "Please introduce me to industrialists needing land for new factories, developers seeking redevelopment parcels, or HNIs investing in bulk land.",
      previewType: "real_estate_units"
    },
    {
      id: "building_redevelopment",
      category: "Building Redevelopment",
      keywords: ["building redevelopment", "redevelopment", "society redevelopment", "slum redevelopment", "civil builder", "developer"],
      statement: "“Housing society members builder credibility aur corpus fund par doubt karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
      desc: "Old societies redevelopment ke liye 10 meetings karti hain, par past delivered projects aur verified bank guarantees ka digital profile na hone se decision atakta hai.",
      recommendation: "Verified Redevelopment Track Record & Society Corpus Calculator Portal",
      sankalps: [
        "This week, I will publish our completed building timelines & before-after transformations.",
        "This week, I will create a transparent guide on extra carpet area & rent compensation.",
        "This week, I will connect with GBS members living in 30+ year old societies."
      ],
      referralAsk: "Please introduce me to committee members, chairmen, or secretaries of housing societies (25+ years old) evaluating trusted redevelopment partners.",
      previewType: "real_estate_units"
    },
    {
      id: "dental_shop_plan",
      category: "Dental Shop Plan",
      keywords: ["dental shop plan", "dental clinic", "dentist", "teeth", "dental implants", "orthodontist", "dental chair", "dental supplies"],
      statement: "“High-value dental implant cases corporate clinic chains le jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
      desc: "Top clinical skills aur painless modern technology hone ke bawajood, verified patient transformations aur online 1-tap slot booking na hone se patient drop hota hai.",
      recommendation: "High-Trust Dental Practice Showcase with Patient Video Testimonials & Instant Slot Booking",
      sankalps: [
        "This week, I will showcase 5 before-and-after smile makeover transformations online.",
        "This week, I will enable 1-tap WhatsApp appointment booking with slot availability.",
        "This week, I will provide complimentary dental checkup vouchers for GBS member families."
      ],
      referralAsk: "Please introduce me to individuals needing root canal, painless dental implants, teeth whitening, or braces, who want high-precision gentle dental care.",
      previewType: "clinic_slots"
    },
    {
      id: "health_insurance",
      category: "Health Insurance",
      keywords: ["health insurance", "mediclaim", "medical insurance", "cashless hospital", "family floater", "super top-up"],
      statement: "“Clients policy renew karte hain par claim ke waqt panic karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      desc: "Phone par har bar room-rent capping, pre-existing waiting period samjhana padta hai, jabki 1-tap cashless network hospital locator website par chahiye.",
      recommendation: "Instant Family Health Insurance Comparison & 24x7 Cashless Claim Assistance Portal",
      sankalps: [
        "This week, I will launch a 1-tap Cashless Network Hospital lookup for local hospitals.",
        "This week, I will publish an honest room-rent and copay comparison chart.",
        "This week, I will conduct free insurance portfolio health audits for 5 GBS business owners."
      ],
      referralAsk: "Please introduce me to families, senior citizens, or business owners who want comprehensive 1-Crore health coverage without room-rent capping.",
      previewType: "generic_showcase"
    },
    {
      id: "general_insurance",
      category: "General Insurance",
      keywords: ["general insurance", "factory insurance", "fire insurance", "marine insurance", "transit insurance", "stock insurance"],
      statement: "“Factory owners premium pay karte hain par policy me hidden exclusions hote hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      desc: "Industrial fire, burglary aur marine transit policies complex hoti hain, aur audit na hone se claim ke waqt rejection ka risk rehta hai.",
      recommendation: "Industrial Risk Audit & Transparent Commercial General Insurance Portal",
      sankalps: [
        "This week, I will offer a free 15-point risk audit on existing factory fire policies.",
        "This week, I will digitise transit & marine policy documentation for rapid issuance.",
        "This week, I will audit the plant & machinery insurance of GBS manufacturers."
      ],
      referralAsk: "Please introduce me to factory owners, logistics transporters, or warehouse operators who need comprehensive fire, burglary, and marine cargo coverage.",
      previewType: "generic_showcase"
    },
    {
      id: "lic",
      category: "LIC",
      keywords: ["lic", "life insurance", "term plan", "guaranteed pension", "child education plan", "life insurance corporation"],
      statement: "“Clients traditional plans ko boring samajh kar mutual funds me chale jaate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      desc: "Guaranteed lifetime tax-free pension aur sovereign government security ka live return calculator online na hone se youth connect miss hota hai.",
      recommendation: "Guaranteed Pension & Child Dream Milestone Calculator Portal",
      sankalps: [
        "This week, I will launch a 1-tap Guaranteed Tax-Free Retirement Income Calculator.",
        "This week, I will demonstrate how HNI term plans protect business debt & liability.",
        "This week, I will review the existing LIC policy status and revival for GBS members."
      ],
      referralAsk: "Please introduce me to young parents planning child education, or business owners seeking guaranteed tax-free lifetime retirement income.",
      previewType: "generic_showcase"
    },
    {
      id: "diamond_jewellery",
      category: "Diamond Jewellery",
      keywords: ["diamond jewellery", "diamonds", "solitaire", "diamond ring", "hallmark gold", "fine jewellery", "polki"],
      statement: "“Customers certification aur buyback policies par doubt karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="12" y1="22" x2="6" y2="9"/><line x1="12" y1="22" x2="18" y2="9"/></svg>`,
      desc: "IGI certified solitaire clarity, direct manufacturing price benefit aur 100% buyback guarantee ek ultra-luxury digital lookbook par showcase honi chahiye.",
      recommendation: "Luxury IGI Certified Diamond Solitaire Lookbook & Custom Ring Visualizer",
      sankalps: [
        "This week, I will publish our IGI certified solitaire collection with live carat pricing.",
        "This week, I will launch a private appointment slot booking for bridal jewellery preview.",
        "This week, I will offer exclusive diamond valuation & cleaning for fellow GBS members."
      ],
      referralAsk: "Please introduce me to families with upcoming weddings, or individuals looking to buy certified solitaires and custom engagement rings at factory prices.",
      previewType: "generic_showcase"
    },
    {
      id: "diamond_jewellers",
      category: "Diamond Jewellers",
      keywords: ["diamond jewellers", "jewellers", "diamond wholesale", "solitaires", "custom jewellery"],
      statement: "“Showroom me 200 design hain, par customer ko latest lightweight patterns online nahi dikhte!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
      desc: "Lightweight everyday diamond jewellery aur luxury bridal sets ka fast loading mobile visualizer na hone se retail buyers branded chains chale jaate hain.",
      recommendation: "Mobile-First Lightweight Diamond Jewellery Lookbook with Instant Price Slabs",
      sankalps: [
        "This week, I will digitise our bestselling everyday lightweight diamond designs.",
        "This week, I will display our transparent making charges & 100% exchange policy.",
        "This week, I will present exclusive festive gifting pendants to GBS members."
      ],
      referralAsk: "Please introduce me to corporate professionals and festive shoppers seeking daily-wear hallmarked diamond jewellery with certified buyback guarantees.",
      previewType: "generic_showcase"
    },
    {
      id: "portfolio_management_services",
      category: "Portfolio Management Services",
      keywords: ["portfolio management", "pms", "wealth management", "equity pms", "hni investments", "fund manager"],
      statement: "“HNIs verified alpha generation & past drawdown records dekhna chahte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
      desc: "₹50 Lakh+ PMS clients ko research methodology, stock selection philosophy aur SEBI audited track record ek dignified private portal par chahiye.",
      recommendation: "High-Net-Worth Private Wealth & PMS Performance Transparency Portal",
      sankalps: [
        "This week, I will build an institutional-grade investment philosophy presentation online.",
        "This week, I will publish our risk-adjusted CAGR performance metrics vs Nifty 50.",
        "This week, I will invite 3 GBS business owners for an exhaustive portfolio risk check."
      ],
      referralAsk: "Please introduce me to HNIs, business owners, or retired corporate leaders with ₹50L+ liquid capital looking for disciplined equity wealth creation.",
      previewType: "generic_showcase"
    },
    {
      id: "financial_advisory",
      category: "Financial Advisory",
      keywords: ["financial advisory", "financial advisor", "mutual funds", "sip", "wealth planning", "tax saving", "asset allocation"],
      statement: "“Clients unscientific YouTube tips follow karke losses kar lete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      desc: "Goal-based financial planning (Retirement, Children Higher Education) ka interactive visual calculator na hone se investor disciplined SIP nahi shuru karta.",
      recommendation: "Goal-Based Wealth & Financial Freedom Calculator Portal",
      sankalps: [
        "This week, I will launch an interactive SIP & Retirement Wealth Freedom tool.",
        "This week, I will publish a 3-step asset allocation guide for volatile markets.",
        "This week, I will audit the personal mutual fund folios of 5 GBS members."
      ],
      referralAsk: "Please introduce me to professionals or business owners earning ₹15L+ annually who want goal-based, stress-free mutual fund and asset allocation advisory.",
      previewType: "generic_showcase"
    },
    {
      id: "investment_services",
      category: "Investment Services",
      keywords: ["investment services", "fixed income", "bonds", "unlisted shares", "alternative investments", "structured products"],
      statement: "“Clients ko fixed return aur risk transparently compare karne me time lagta hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/></svg>`,
      desc: "Senior corporate bonds, RBI floating rate bonds aur safe capital options ka unified comparative dashboard online na hone se idle cash pada rehta hai.",
      recommendation: "Curated Fixed Income & High-Yield Bond Comparison Showcase",
      sankalps: [
        "This week, I will publish a comparison of AAA-rated bonds yielding 9-11% vs bank FDs.",
        "This week, I will create a 1-tap WhatsApp alert service for upcoming lucrative bonds.",
        "This week, I will review surplus working capital yields for fellow GBS businesses."
      ],
      referralAsk: "Please introduce me to investors seeking safe 9-11% returns through AAA-rated corporate bonds and regulated debt instruments.",
      previewType: "generic_showcase"
    },
    {
      id: "loan_services",
      category: "Loan Services",
      keywords: ["loan services", "business loan", "home loan", "lap", "loan against property", "working capital", "od cc limit", "mortgage"],
      statement: "“Bankers eligibility bataane me 2 hafte lagate hain aur client deal cancel kar deta hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
      desc: "Business loan ya LAP me accurate eligibility calculator aur 30+ partner banks ke ROI comparison ka instant tool web par na hone se file atakti hai.",
      recommendation: "Instant Multi-Bank Business Loan & LAP Eligibility Engine with 1-Click Document Checklist",
      sankalps: [
        "This week, I will launch an instant Business Loan & LAP EMI eligibility calculator.",
        "This week, I will publish a 1-page clear checklist of required banking documents.",
        "This week, I will review existing high-interest business loans of GBS members to reduce EMI."
      ],
      referralAsk: "Please introduce me to business owners needing working capital, machinery loans, or property owners looking to transfer existing high-rate loans.",
      previewType: "generic_showcase"
    },
    {
      id: "accountant",
      category: "Accountant",
      keywords: ["accountant", "accounting", "bookkeeping", "gst return", "tally", "tds", "payroll", "invoicing"],
      statement: "“Mahine ke end par clients GST bills WhatsApp par ghum kar dete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      desc: "GSTR-1 aur 3B filing deadlines par WhatsApp par bills collect karne me pura din chala jata hai, automated client submission portal missing hai.",
      recommendation: "Dedicated Monthly GST & Invoice Submission Vault with Automated Compliance Calendar",
      sankalps: [
        "This week, I will launch an automated WhatsApp tax calendar reminder for clients.",
        "This week, I will standardise a 1-link invoice upload portal to prevent missing bills.",
        "This week, I will review the GST compliance health for 3 GBS trade partners."
      ],
      referralAsk: "Please introduce me to SME business owners, traders, or contractors struggling with delayed monthly GST returns and messy bookkeeping.",
      previewType: "generic_showcase"
    },
    {
      id: "advocate",
      category: "Advocate",
      keywords: ["advocate", "lawyer", "legal", "property verification", "agreement", "corporate legal", "trademark", "litigation"],
      statement: "“Clients internet se copied wrong agreement drafts use karke disputes me phaste hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      desc: "Commercial lease, partnership deeds aur property title search ka transparent process showcase na hone se clients unprofessional sources use karte hain.",
      recommendation: "Transparent Legal Vetting & Commercial Contract Drafting Portal",
      sankalps: [
        "This week, I will publish a vital 10-point checklist for commercial lease & partnership agreements.",
        "This week, I will enable 1-tap WhatsApp consultation scheduling for urgent contract vetting.",
        "This week, I will offer a legal agreement audit for GBS business contracts."
      ],
      referralAsk: "Please introduce me to business partners drafting agreements, landlords leasing commercial premises, or property buyers needing clear title search.",
      previewType: "generic_showcase"
    },
    {
      id: "vastu_numerology",
      category: "Vastu & Numerology",
      keywords: ["vastu", "numerology", "vastu consultant", "office vastu", "factory vastu", "home vastu", "name numerology", "astrology"],
      statement: "“Clients unscientific myths me darr kar expensive demolitions karwa lete hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
      desc: "Non-demolition Vastu remedies aur business growth energy balancing ki scientific case studies online present na hone se clients hesitate karte hain.",
      recommendation: "Authentic Scientific Vastu Without Demolition & Corporate Energy Balancing Showcase",
      sankalps: [
        "This week, I will showcase 5 real factory & office case studies cured without demolition.",
        "This week, I will publish a 1-tap floor plan submission portal for online Vastu review.",
        "This week, I will offer an auspicious workplace entrance energy audit for GBS members."
      ],
      referralAsk: "Please introduce me to factory owners, retail showroom owners, or families buying new homes who want scientific Vastu without costly structural demolition.",
      previewType: "generic_showcase"
    },
    {
      id: "tarot_card_reader",
      category: "Tarot Card Reader",
      keywords: ["tarot", "tarot card reader", "tarot reader", "divination", "angel card", "spiritual guidance", "relationship healing"],
      statement: "“Clients WhatsApp par timing aur slots ke liye endless messages karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
      desc: "Confidentiality assurance, reading topics (Career, Business, Personal) aur advance slot booking link na hone se appointments miss hoti hain.",
      recommendation: "Confidential Private Tarot Consultation Booking & Guided Topic Selector Portal",
      sankalps: [
        "This week, I will launch a 1-tap private slot calendar for online video consultations.",
        "This week, I will publish clear topic frameworks for career and business decision-making.",
        "This week, I will conduct an auspicious festive intuitive energy reading for GBS members."
      ],
      referralAsk: "Please introduce me to individuals facing critical career crossroads, relationship dilemmas, or seeking spiritual clarity and intuitive guidance.",
      previewType: "generic_showcase"
    },
    {
      id: "makeup_artist",
      category: "Makeup Artist",
      keywords: ["makeup artist", "bridal makeup", "hd makeup", "airbrush makeup", "mua", "groom makeup", "fashion makeup"],
      statement: "“Brides peak muhurat me double booking ke darr se trust nahi kar paati!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>`,
      desc: "Instagram par compressed blurry photos hoti hain, jabki brides ko high-resolution 4K bridal lookbook aur advance date confirmation chahiye.",
      recommendation: "VIP 4K Bridal HD Makeup Lookbook & Real-Time Muhurat Slot Reservation Portal",
      sankalps: [
        "This week, I will publish our 4K HD bridal lookbook categorized by Haldi, Sangeet & Reception.",
        "This week, I will enable instant muhurat date availability checks online.",
        "This week, I will offer exclusive festive grooming packages for GBS member families."
      ],
      referralAsk: "Please introduce me to brides-to-be, event planners, or wedding families seeking premium HD & Airbrush bridal makeup with flawless finishes.",
      previewType: "generic_showcase"
    },
    {
      id: "mobile_repairing",
      category: "Mobile Phone & Phone Repairing",
      keywords: ["mobile phone & phone repairing", "mobile repair", "iphone repair", "screen replacement", "battery repair", "motherboard repair"],
      statement: "“Customers phone data privacy aur duplicate parts ke darr se hesitate karte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
      desc: "Doorstep screen repair, original spare parts warranty aur 100% data safety guarantee web par na hone se customer local shops se bachta hai.",
      recommendation: "Instant Phone Screen & Battery Replacement Price Finder with 6-Month Warranty Card",
      sankalps: [
        "This week, I will launch an instant repair cost estimator for popular iPhone & Samsung models.",
        "This week, I will publish our verified 100% data privacy & certified parts guarantee.",
        "This week, I will offer a free battery health diagnostic check for all GBS chapter members."
      ],
      referralAsk: "Please introduce me to corporate executives, business owners, or families who need quick, certified doorstep iPhone or Android phone screen/battery repairs.",
      previewType: "generic_showcase"
    },
    {
      id: "computer_sales",
      category: "Computer Sales",
      keywords: ["computer sales", "laptops", "desktops", "refurbished laptops", "office it setup", "server", "printers", "it hardware"],
      statement: "“Offices bulk laptops maangte hain par custom specs & AMC quotation me 2 din lagte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      desc: "Corporate laptops, workstation builds aur rental/sales specs ka transparent portal na hone se IT managers online sellers par shift ho jaate hain.",
      recommendation: "B2B Office IT Hardware Spec Configurator & Rapid Corporate Quotation Portal",
      sankalps: [
        "This week, I will publish our top corporate laptop & desktop bundles with 3-year onsite support.",
        "This week, I will launch a 1-tap bulk RFQ tool for office IT upgrades.",
        "This week, I will review the existing computer hardware setups of fellow GBS companies."
      ],
      referralAsk: "Please introduce me to IT managers, CA firms, or growing startups looking to purchase or rent 5 to 50 laptops and commercial desktop workstations.",
      previewType: "generic_showcase"
    },
    {
      id: "social_media_manager",
      category: "Social Media Manager",
      keywords: ["social media manager", "digital marketing", "instagram growth", "reels editing", "meta ads", "content creation", "social media"],
      statement: "“Clients poochte hain: 'Social media se real business leads aayengi ya sirf likes?'”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
      desc: "Vanity likes vs real revenue conversions ka case study showcase aur monthly content package pricing web par transparent na hone se deal drop hoti hai.",
      recommendation: "High-ROI Social Media Lead Case Studies & Monthly Content Retainer Portal",
      sankalps: [
        "This week, I will publish 3 real case studies proving revenue generated through viral reels.",
        "This week, I will launch transparent 12-reels + ads monthly packages for local businesses.",
        "This week, I will conduct a 15-minute social media audit for 3 GBS chapter members."
      ],
      referralAsk: "Please introduce me to retail brands, doctors, or service businesses who want consistent viral Instagram reels and qualified lead-generating ad campaigns.",
      previewType: "generic_showcase"
    },
    {
      id: "business_consultant",
      category: "Business Consultant",
      keywords: ["business consultant", "management consultant", "business coach", "sop", "scaling", "family business", "msme consulting"],
      statement: "“Promoters roz firefighting me fase rehte hain, systems implement nahi kar paate!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
      desc: "Bina standard SOPs, delegation matrix aur digital KPIs ke business owner har choti baat par engage rehta hai.",
      recommendation: "SME Business Automation Diagnostic & 90-Day Delegation Scaling Roadmap",
      sankalps: [
        "This week, I will launch a 2-minute online Business Operational Bottleneck Test.",
        "This week, I will publish our 90-Day SOP & Delegation framework for family businesses.",
        "This week, I will gift a 30-minute private business scalability session to 3 GBS owners."
      ],
      referralAsk: "Please introduce me to SME business founders doing ₹2 Cr - ₹20 Cr revenue who are stuck in daily firefighting and want system-driven autopilot operations.",
      previewType: "trainer_syllabus"
    },
    {
      id: "chair_car_doctor",
      category: "Chair Car Doctor",
      keywords: ["chair car doctor", "car doctor", "ergonomic chair repair", "car seat repair", "chair repair", "car upholstery", "office chair repair"],
      statement: "“Offices expensive chairs replace kar dete hain, jabki 70% cost bach sakti hai!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9l-7 7-7-7"/></svg>`,
      desc: "Hydraulic gas lift repair, castor wheel upgrade aur luxury leatherette seat restoration ka doorstep service visual portal online missing hai.",
      recommendation: "Doorstep Ergonomic Chair & Car Seat Restoration Calculator with 1-Year Guarantee",
      sankalps: [
        "This week, I will launch a 1-tap quote by photo for office chair gas-lift & wheel repairs.",
        "This week, I will showcase how companies save 70% budget by servicing existing chairs.",
        "This week, I will offer a free ergonomic chair inspection for 5 GBS corporate offices."
      ],
      referralAsk: "Please introduce me to corporate admin managers, co-working spaces, or car enthusiasts looking for prompt, doorstep ergonomic chair and car seat restoration.",
      previewType: "furniture_selector"
    },
    {
      id: "stallion_comfort",
      category: "Stallion Comfort – Chair & Table",
      keywords: ["stallion comfort – chair & table", "stallion comfort", "office chair", "office furniture", "ergonomic table", "cafeteria chair", "workstation"],
      statement: "“Corporate buyers sample dekhe bina bulk 50-chair order place nahi karte!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
      desc: "Spine support ergonomics, BIFMA certified hardware aur modular office table dimensions ka fast visualizer na hone se inquiries slow ho jaati hain.",
      recommendation: "BIFMA Certified Ergonomic Office Seating & Table Visualizer with Sample Trial Request",
      sankalps: [
        "This week, I will launch our corporate catalog with 1-click 'Request Sample Chair at Office'.",
        "This week, I will highlight spine posture ergonomics & 5-year replacement warranty online.",
        "This week, I will supply demo ergonomic chairs to fellow GBS chapter members."
      ],
      referralAsk: "Please introduce me to HR directors, architects, or office founders setting up new workspaces and requiring BIFMA certified ergonomic chairs and tables.",
      previewType: "furniture_selector"
    },
    {
      id: "water_purifier",
      category: "Water Purifier",
      keywords: ["water purifier", "ro water", "commercial ro", "water filter", "water softener", "alkaline water", "ro amc"],
      statement: "“Customers TDS level aur membrane change timing me confuse rehte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
      desc: "Water TDS testing report, alkaline antioxidant benefits aur scheduled filter replacement AMC ka automated portal online na hone se trust kam hota hai.",
      recommendation: "1-Tap Water TDS Testing Request & Alkaline RO Filter Replacement Subscription Engine",
      sankalps: [
        "This week, I will launch a 1-tap 'Book Free Water TDS & Purity Test at Home' page.",
        "This week, I will publish an honest comparison of Copper Alkaline vs standard RO.",
        "This week, I will test drinking water purity for 5 GBS member homes and offices."
      ],
      referralAsk: "Please introduce me to families wanting mineral-rich alkaline drinking water, or factories/restaurants requiring commercial heavy-duty RO water systems.",
      previewType: "generic_showcase"
    },
    {
      id: "tarpaulin",
      category: "Tarpaulin",
      keywords: ["tarpaulin", "tirpal", "waterproof covers", "monsoon shed cover", "silpaulin", "industrial covers", "truck tarpaulin"],
      statement: "“Clients unbranded GSM khareed kar monsoon me leakage jhelte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 12 1 23 6 12 11 1 6"/><polygon points="1 18 12 23 23 18 12 13 1 18"/><polygon points="1 12 12 17 23 12 12 7 1 12"/></svg>`,
      desc: "Heavy-duty UV stabilized 100% waterproof Silpaulin grades aur customized eyelet dimensions ka instant calculator web par hona chahiye.",
      recommendation: "Heavy-Duty All-Weather Tarpaulin Spec & Custom Size Quote Estimator",
      sankalps: [
        "This week, I will launch an instant custom size & GSM waterproof quote calculator.",
        "This week, I will showcase extreme weather & tear-resistance test videos online.",
        "This week, I will inspect monsoon shed covers for fellow GBS factory owners."
      ],
      referralAsk: "Please introduce me to warehouse managers, transporters, civil contractors, or agro traders needing 100% leakproof, heavy-duty Silpaulin covers.",
      previewType: "generic_showcase"
    },
    {
      id: "envelope_manufacturing",
      category: "Envelope Manufacturing",
      keywords: ["envelope manufacturing", "envelopes", "office envelopes", "courier envelopes", "custom printed envelopes", "packing envelopes"],
      statement: "“Bulk buyers custom paper weight aur peel-and-seal gumming rate poochte hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      desc: "Cloth-lined envelopes, bank document covers aur corporate tamper-proof gumming specs ka instant online rate matrix na hone se order late hota hai.",
      recommendation: "Custom Corporate Envelope Specification & Instant MOQ Bulk Quote Portal",
      sankalps: [
        "This week, I will publish standard size sheets & paper GSM choices for corporate stationery.",
        "This week, I will launch a 1-tap bulk rate calculator for 5,000 to 50,000 unit orders.",
        "This week, I will print customized auspicious festive envelopes for our GBS chapter."
      ],
      referralAsk: "Please introduce me to corporate procurement managers, banks, diagnostic labs, or packaging buyers who purchase 5,000+ envelopes every month.",
      previewType: "generic_showcase"
    },
    {
      id: "education",
      category: "Education",
      keywords: ["education", "coaching", "classes", "tuition", "entrance exam", "school", "college", "edtech", "academy"],
      statement: "“Parents results aur faculty verification dekhe bina fees commit nahi karte!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      desc: "Rank holders ki verified marksheet, batch timings aur 1-tap Free Demo Class booking portal na hone se parents doosre coaching center chale jaate hain.",
      recommendation: "High-Achiever Results Showcase with 1-Tap Free Trial Class Booking Portal",
      sankalps: [
        "This week, I will showcase our past students' top percentile rank cards and parent video reviews.",
        "This week, I will enable 1-tap registration for upcoming weekend scholarship demo classes.",
        "This week, I will offer a career counseling and aptitude test for GBS member children."
      ],
      referralAsk: "Please introduce me to parents of students in 8th to 12th standard looking for result-oriented coaching with personal doubt-solving sessions.",
      previewType: "trainer_syllabus"
    },
    {
      id: "swimming_pool",
      category: "Swimming pool",
      keywords: ["swimming pool", "swmiing poll", "pool maintenance", "pool construction", "pool filtration", "chlorine", "swimming"],
      statement: "“Resort aur society pools me water filtration aur pH hygiene issues aate hain!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M2 17h20"/><path d="M2 7h20"/></svg>`,
      desc: "Leakage proofing, modern glass-bead filtration aur crystal clear chemical balancing ka scheduled AMC tracker web par na hone se pool band rehta hai.",
      recommendation: "Turnkey Swimming Pool Construction & Automated Water Hygiene AMC Portal",
      sankalps: [
        "This week, I will publish our crystal-clear water filtration technology guide.",
        "This week, I will launch a 1-tap inspection booking for monsoon pool reopening & waterproofing.",
        "This week, I will inspect the swimming pool water hygiene of GBS member societies/resorts."
      ],
      referralAsk: "Please introduce me to resort managers, farm-house owners, or housing society committees needing swimming pool construction, repair, or regular water AMC.",
      previewType: "generic_showcase"
    },
    {
      id: "website_development",
      category: "Website Development",
      keywords: ["website development", "web design", "software", "web app", "developer", "ecommerce website", "coding"],
      statement: "“Aapki apni agency site ultra-fast & high-converting honi chahiye!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      desc: "Fast load speed, interactive lead tools aur modern UI aesthetics ke bina clients quality aur technical depth judge nahi kar paate.",
      recommendation: "Flagship High-Performance Web & Interactive Business Tool Architecture by Mahant Software",
      sankalps: [
        "This week, I will build an interactive live tool for all GBS chapter members.",
        "This week, I will eliminate all slow-loading elements from client web apps.",
        "This week, I will empower 10 local businesses with high-converting digital portals."
      ],
      referralAsk: "Please introduce me to serious business owners wanting custom fast websites, automated lead portals, and interactive digital customer journeys.",
      previewType: "generic_showcase"
    },
    {
      id: "general_business",
      category: "Other / General Business",
      keywords: ["other", "general", "trader", "manufacturer", "service provider"],
      statement: "“Valuable offline goodwill internet par reflect nahi ho rahi!”",
      svgIcon: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#B71C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      desc: "Saalon ki mehnat aur genuine customer trust ke baad bhi, digital presence structured na hone se naye clients pehli nazar me judge kar lete hain.",
      recommendation: "Modern High-Trust Brand Website with 1-Tap Direct WhatsApp Lead System by Yash",
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
      { id: "showroom", icon: "🏬", title: "Invite them to visit showroom / office", desc: "Insisting they come over in person to see samples and catalogs." }
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

// App State
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
  soundEnabled: false
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
  }

  playTempleBell() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      // High-purity layered temple bell harmonics
      const freqs = [528, 1056, 1584, 2112];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        const initialGain = 0.18 / (idx + 1);
        gain.gain.setValueAtTime(initialGain, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + (idx === 0 ? 2.4 : 1.2));

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 2.5);
      });
    } catch (e) {}
  }

  playChime() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(784, now); // G5
      osc.frequency.exponentialRampToValueAtTime(1174, now + 0.15); // D6

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
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
  const petalCount = window.innerWidth < 600 ? 16 : 24;

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 7 + 5,
      speedY: Math.random() * 0.7 + 0.35,
      speedX: Math.sin(Math.random() * Math.PI) * 0.45,
      angle: Math.random() * 360,
      angularSpeed: (Math.random() - 0.5) * 1.2,
      color: ['#FFA000', '#F57C00', '#FFD54F', '#E65100'][Math.floor(Math.random() * 4)],
      opacity: Math.random() * 0.35 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      p.y += p.speedY;
      p.x += p.speedX;
      p.angle += p.angularSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// Populate the Category Dropdown with all 45+ GBS Profiles
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

  nodes.forEach(n => {
    n.classList.remove('active', 'completed');
  });

  fill.style.width = '0%';

  // Step 1
  nodes[0].classList.add('active');
  fill.style.width = '25%';

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
    // Show quick sweet Prasad seal transition
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

// Populate Shubh Patrika with Reasoned Diagnosis
function populatePatrikaResults() {
  const cat = state.categoryObj;

  document.getElementById('reportBusinessName').textContent = state.businessName;
  document.getElementById('reportOwnerName').textContent = state.ownerName;
  document.getElementById('reportIndustryCategory').textContent = cat.category;
  document.getElementById('previewBizTitle').textContent = state.businessName;

  // 1. Build Personalized Strengths based on Answers
  const strengthsContainer = document.getElementById('strengthsContainer');
  strengthsContainer.innerHTML = '';

  const strengthsList = [];

  // Discovery Strength
  if (state.quizAnswers.discovery === 'referrals') {
    strengthsList.push({
      title: "Strong Referral Goodwill & Trust",
      desc: "Built on authentic word-of-mouth and deep peer trust across the GBS network."
    });
  } else if (state.quizAnswers.discovery === 'social') {
    strengthsList.push({
      title: "Modern Social Presence & Visual Appeal",
      desc: "Great aesthetic sense and openness to connecting with younger digital audiences."
    });
  } else if (state.quizAnswers.discovery === 'search') {
    strengthsList.push({
      title: "High Intent & Direct Search Discovery",
      desc: "Clients actively looking for your industry expertise search and discover your firm."
    });
  } else {
    strengthsList.push({
      title: "High-Touch Personal Rapport",
      desc: "Mastery of face-to-face relationship building and direct customer satisfaction."
    });
  }

  // Process Strength
  if (state.quizAnswers.portfolio === 'official_site') {
    strengthsList.push({
      title: "Forward-Thinking Digital Approach",
      desc: "Awareness that serious clients require a credible, modern web presence."
    });
  } else {
    strengthsList.push({
      title: "Hands-on Proprietor Dedication",
      desc: "100% genuine effort and personalized, high-touch consultation for every client."
    });
  }

  // Business Integrity Strength
  strengthsList.push({
    title: "Proven Trade Reliability",
    desc: `Delivering genuine value and earning consistent repeat orders in ${cat.category}.`
  });

  strengthsList.forEach(s => {
    const row = document.createElement('div');
    row.className = 'strength-row';
    row.innerHTML = `
      <div class="strength-icon-box">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#1B5E20" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="strength-details">
        <h4 class="strength-title">${s.title}</h4>
        <p class="strength-desc">${s.desc}</p>
      </div>
    `;
    strengthsContainer.appendChild(row);
  });

  // 2. Identified Vighna & Direct Reasoning
  const vighnaEmoji = document.getElementById('vighnaEmoji');
  vighnaEmoji.innerHTML = cat.svgIcon;

  document.getElementById('vighnaStatement').textContent = cat.statement;

  let portfolioAnswerText = "sending loose portfolio photos on WhatsApp";
  if (state.quizAnswers.portfolio === 'manual_call') portfolioAnswerText = "explaining everything manually on calls";
  if (state.quizAnswers.portfolio === 'showroom') portfolioAnswerText = "relying solely on in-person showroom visits";

  let timeSinkText = "repeating basic prices & specifications";
  if (state.quizAnswers.timeSink === 'chasing_quotes') timeSinkText = "manually chasing unpaid quotations & follow-ups";
  if (state.quizAnswers.timeSink === 'coordinating_slots') timeSinkText = "coordinating meeting & service time slots";
  if (state.quizAnswers.timeSink === 'manual_estimates') timeSinkText = "manually drafting proposals from scratch";

  document.getElementById('vighnaReasoningTag').textContent = `Reasoning from your answers:`;
  document.getElementById('vighnaDesc').innerHTML = `
    You mentioned that you rely on <strong>${portfolioAnswerText}</strong> and spend too much time <strong>${timeSinkText}</strong>.<br><br>
    ${cat.desc}
  `;

  // 3. Ek Sankalp Commitment Options
  const sankalpContainer = document.getElementById('sankalpOptionsList');
  sankalpContainer.innerHTML = '';

  state.selectedSankalp = cat.sankalps[0];

  cat.sankalps.forEach((sankalpText, idx) => {
    const item = document.createElement('div');
    item.className = `sankalp-choice-item ${idx === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <div class="sankalp-radio-bullet"></div>
      <span class="sankalp-choice-text">${sankalpText}</span>
    `;

    item.addEventListener('click', () => {
      templeAudio.playChime();
      sankalpContainer.querySelectorAll('.sankalp-choice-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      state.selectedSankalp = sankalpText;
      updateSankalpCanvas();
      updateWhatsAppCta();
    });

    sankalpContainer.appendChild(item);
  });

  // 4. "See It For My Business" (Interactive Miniature Website Preview)
  renderInteractivePreview(cat);

  // 5. GBS 30-Second Referral Pitch Prompt
  const referralBox = document.getElementById('referralTextBox');
  const customAsk = `“Hello GBS Glory members! My name is ${state.ownerName} from ${state.businessName}. ${cat.referralAsk}”`;
  referralBox.textContent = customAsk;

  // 6. Update Climax WhatsApp Link to Yash
  updateWhatsAppCta();

  // 7. Update Canvas Card Preview
  updateSankalpCanvas();
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
          <button type="button" class="demo-tab-btn active" data-filter="all">All Models</button>
          <button type="button" class="demo-tab-btn" data-filter="retail">Retail Stores</button>
          <button type="button" class="demo-tab-btn" data-filter="heavy">Heavy Cash / Jewellers</button>
        </div>
        <div class="demo-cards-grid" id="demoCardsGrid">
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title">Smart Note Counter V2</strong>
              <span class="demo-item-meta">1000 notes/min • UV/MG Fake Note Detection</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Requested Free On-Site Demo for Smart Note Counter V2!')">Request Demo</button>
          </div>
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title">Value Sorter Pro 3D</strong>
              <span class="demo-item-meta">Mix Note Total Value Counter • Color TFT Display</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Requested Free On-Site Demo for Value Sorter Pro 3D!')">Request Demo</button>
          </div>
          <div class="demo-item-card">
            <div class="demo-item-info">
              <strong class="demo-item-title">Heavy Bank Bundle Counter</strong>
              <span class="demo-item-meta">Heavy Vacuum Mechanism • Petrol Pumps & Banks</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Requested Free On-Site Demo for Heavy Bank Bundle Counter!')">Request Demo</button>
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
          <span class="demo-badge-live">● Corporate Masterclasses</span>
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
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Free home inspection scheduled instantly without telephone back-and-forth!</div>
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
              <strong class="demo-item-title">Implant & Smile Consultation</strong>
              <span class="demo-item-meta">Dr. Verified Slot: 6:30 PM (No Waiting Queue)</span>
            </div>
            <button type="button" class="demo-item-btn" onclick="triggerDemoAction('Appointment slot confirmed for 6:30 PM!')">Confirm Slot</button>
          </div>
        </div>
        <div class="demo-feedback-banner" id="demoFeedbackBanner">✓ Patient confirmed slot via WhatsApp reminder! Zero receptionist delay.</div>
      </div>
    `;
  } else {
    // High-Converting Generic Showcase (for all remaining GBS profiles!)
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
    `✨ My Chosen Sankalp for this week: "${state.selectedSankalp}"\n` +
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
  ctx.font = 'bold 20px "Rozha One", serif';
  ctx.fillStyle = '#751113';
  ctx.textAlign = 'center';
  ctx.fillText('॥ श्री गणेशाय नमः ॥', w / 2, 70);

  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#9E6C18';
  ctx.letterSpacing = '2px';
  ctx.fillText('GANESHUTSAV SPECIAL • GBS GLORY', w / 2, 94);

  // Title Ribbon
  ctx.font = 'bold 28px "Rozha One", "Cinzel", serif';
  ctx.fillStyle = '#751113';
  ctx.fillText('SHUBH BUSINESS SANKALP', w / 2, 140);

  // Thin Gold Divider
  ctx.strokeStyle = '#C59239';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(160, 160);
  ctx.lineTo(480, 160);
  ctx.stroke();

  // Business Details Card
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = 'rgba(197, 146, 57, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(50, 180, w - 100, 110, [12]);
  ctx.fill();
  ctx.stroke();

  ctx.font = 'bold 24px "Cinzel", "Rozha One", serif';
  ctx.fillStyle = '#751113';
  ctx.fillText(state.businessName || "Your Enterprise", w / 2, 222);

  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#9E6C18';
  const catName = state.categoryObj ? state.categoryObj.category : "Business Member";
  ctx.fillText(`CATEGORY: ${catName.toUpperCase()}`, w / 2, 248);

  ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#5A4640';
  ctx.fillText(`Proprietor: ${state.ownerName || "Member"}`, w / 2, 272);

  // The Sacred Sankalp Commitment Box
  ctx.fillStyle = '#FFF8EE';
  ctx.strokeStyle = '#C59239';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(50, 315, w - 100, 200, [14]);
  ctx.fill();
  ctx.stroke();

  ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#751113';
  ctx.fillText('✦ MY CHOSEN COMMITMENT FOR THIS WEEK ✦', w / 2, 350);

  // Wrap Sankalp text
  ctx.font = 'italic bold 20px "Plus Jakarta Sans", Georgia, serif';
  ctx.fillStyle = '#2A1713';
  const words = (state.selectedSankalp || "Organise my best projects into a digital portfolio link.").split(' ');
  let line = '';
  let y = 395;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 480 && n > 0) {
      ctx.fillText(line, w / 2, y);
      line = words[n] + ' ';
      y += 32;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, w / 2, y);

  // Auspicious Blessing Quote
  ctx.font = '600 15px "Rozha One", serif';
  ctx.fillStyle = '#1B5E20';
  ctx.fillText('“May Lord Vighnaharta remove all obstacles and bring Siddhi & Labh!”', w / 2, 555);

  // Bottom Signature & Mahant Software Tag
  ctx.strokeStyle = 'rgba(197, 146, 57, 0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(80, 595);
  ctx.lineTo(w - 80, 595);
  ctx.stroke();

  ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#751113';
  ctx.fillText('Crafted for GBS Glory & Business Owners', w / 2, 630);

  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#5A4640';
  ctx.fillText('Dedicated by Yash Panchal · Mahant Software', w / 2, 655);

  ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#075E54';
  ctx.fillText('WhatsApp: +91 90041 68049', w / 2, 680);

  ctx.font = '12px "Rozha One", serif';
  ctx.fillStyle = '#9E6C18';
  ctx.fillText('॥ गणपती बाप्पा मोरया, पुढच्या वर्षा लवकर या ॥', w / 2, 725);
}

// Download Canvas Image
function downloadSankalpCard() {
  const canvas = document.getElementById('sankalpCardCanvas');
  if (!canvas) return;

  const link = document.createElement('a');
  link.download = `Shubh_Sankalp_${(state.businessName || 'Business').replace(/[^a-zA-Z0-9]/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// Share Patrika App Handler
function shareApp() {
  const currentUrl = window.location.href;
  const shareText = 
    `🐘 *Ask Ganpati Bappa About Your Business!* 🙏\n\n` +
    `Receive Bappa's divine business audit and discover your single biggest Vighna & practical weekly Sankalp for our GBS network!\n\n` +
    `Check your business here 👉 ${currentUrl}\n\n` +
    `_Dedicated to GBS by Yash Panchal · Mahant Software (+91 90041 68049)_`;

  if (navigator.share) {
    navigator.share({
      title: "Bappa’s Business Drishti | Ek Vighna, Ek Sankalp",
      text: shareText,
      url: currentUrl
    }).catch(() => {});
  } else {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  }
}

// Event Listeners Initialization
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
  const btnOpenSankalpModal = document.getElementById('btnOpenSankalpModal');
  const btnViewSankalpCardFinal = document.getElementById('btnViewSankalpCardFinal');
  const btnDownloadSankalpImg = document.getElementById('btnDownloadSankalpImg');
  const btnShareSankalpWhatsApp = document.getElementById('btnShareSankalpWhatsApp');

  const pulseModal = document.getElementById('pulseModal');
  const pulseOverlay = document.getElementById('pulseOverlay');
  const btnOpenPulse = document.getElementById('btnOpenPulse');
  const btnClosePulseModal = document.getElementById('btnClosePulseModal');

  const btnCopyReferral = document.getElementById('btnCopyReferral');
  const copyReferralText = document.getElementById('copyReferralText');

  // Sound Toggle (Starts OFF as requested in review)
  soundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    const text = soundToggle.querySelector('.sound-text');
    if (state.soundEnabled) {
      text.textContent = 'Sound: On';
      soundToggle.style.opacity = '1';
      templeAudio.playTempleBell();
    } else {
      text.textContent = 'Sound: Off';
      soundToggle.style.opacity = '0.7';
    }
  });

  // Open/Close Sankalp Modal
  const openSankalpModal = () => {
    updateSankalpCanvas();
    sankalpModal.classList.add('active');
    sankalpModal.setAttribute('aria-hidden', 'false');
  };

  const closeSankalpModal = () => {
    sankalpModal.classList.remove('active');
    sankalpModal.setAttribute('aria-hidden', 'true');
  };

  if (btnOpenSankalpModal) btnOpenSankalpModal.addEventListener('click', openSankalpModal);
  if (btnViewSankalpCardFinal) btnViewSankalpCardFinal.addEventListener('click', openSankalpModal);
  if (btnCloseSankalpModal) btnCloseSankalpModal.addEventListener('click', closeSankalpModal);
  if (sankalpOverlay) sankalpOverlay.addEventListener('click', closeSankalpModal);
  if (btnDownloadSankalpImg) btnDownloadSankalpImg.addEventListener('click', downloadSankalpCard);

  if (btnShareSankalpWhatsApp) {
    btnShareSankalpWhatsApp.addEventListener('click', () => {
      const shareMsg = encodeURIComponent(
        `॥ श्री गणेशाय नमः ॥ 🙏\n\n` +
        `I just took Ganpati Bappa's Business Drishti for *${state.businessName}*!\n\n` +
        `✨ *My Shubh Sankalp for this week:*\n` +
        `"${state.selectedSankalp}"\n\n` +
        `Discover your business obstacle (Vighna) & weekly Sankalp here 👉 ${window.location.href}\n\n` +
        `_Created for GBS Glory by Yash Panchal · Mahant Software (+91 90041 68049)_`
      );
      window.open(`https://api.whatsapp.com/send?text=${shareMsg}`, '_blank');
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

  if (btnClosePulseModal) {
    btnClosePulseModal.addEventListener('click', () => {
      pulseModal.classList.remove('active');
      pulseModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (pulseOverlay) {
    pulseOverlay.addEventListener('click', () => {
      pulseModal.classList.remove('active');
      pulseModal.setAttribute('aria-hidden', 'true');
    });
  }

  // Copy Referral Ask
  if (btnCopyReferral) {
    btnCopyReferral.addEventListener('click', () => {
      templeAudio.playChime();
      const text = document.getElementById('referralTextBox').textContent.trim();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          copyReferralText.textContent = "Copied to Clipboard!";
          setTimeout(() => { copyReferralText.textContent = "Copy GBS Referral Ask"; }, 2000);
        });
      } else {
        copyReferralText.textContent = "Copied!";
        setTimeout(() => { copyReferralText.textContent = "Copy GBS Referral Ask"; }, 2000);
      }
    });
  }

  // Auto-suggest category if business name matches keywords
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

  // Step 1 Validation -> Go to Questions
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
    categorySelect.value = '';
    state.currentQuizIndex = 0;
  });
});
