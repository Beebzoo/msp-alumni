// ============================================
// MSP ALUMNI DATA - SINGLE SOURCE OF TRUTH
// ============================================
// 
// 🔄 UPDATE THIS FILE TWICE YEARLY (January & July)
// See UPDATE-GUIDE.md for instructions
//
// Last Updated: December 2025
// Updated By: Martijn Jeurissen
// Data Source: Alumni Database (Cleaned) - 1,330 records
// ============================================

const MSP_DATA = {
    
    // ==========================================
    // SECTION 1: KEY NUMBERS (Update these first!)
    // ==========================================
    
    lastUpdated: "December 2025",
    
    summary: {
        totalAlumni: 1330,
        countriesLivingIn: 56,        // Countries where alumni currently live
        universitiesAttended: 220,     // Unique Master's universities
        nationalities: 78              // Unique nationalities
    },
    
    // ==========================================
    // SECTION 2: GRADUATION YEARS
    // ==========================================
    
    graduationByYear: [
        { year: 2014, count: 25 },
        { year: 2015, count: 44 },
        { year: 2016, count: 57 },
        { year: 2017, count: 66 },
        { year: 2018, count: 65 },
        { year: 2019, count: 76 },
        { year: 2020, count: 108 },
        { year: 2021, count: 132 },
        { year: 2022, count: 145 },
        { year: 2023, count: 170 },
        { year: 2024, count: 194 },
        { year: 2025, count: 247 }
    ],
    
    // ==========================================
    // SECTION 3: GENDER DISTRIBUTION
    // ==========================================
    
    gender: {
        female: 795,
        male: 533
    },
    
    // ==========================================
    // SECTION 4: STUDENT ORIGINS
    // ==========================================
    
    origins: {
        international: 838,           // Outside Euregio
        euregioNonLimburg: 307,       // Belgium/Germany Euregio
        netherlandsNonEuregio: 99,    // Rest of Netherlands
        limburg: 85                   // Dutch Limburg
    },
    
    // ==========================================
    // SECTION 5: TOP NATIONALITIES
    // ==========================================
    
    topNationalities: [
        { name: "Dutch", code: "nl", count: 265 },
        { name: "German", code: "de", count: 176 },
        { name: "Belgian", code: "be", count: 138 },
        { name: "Italian", code: "it", count: 105 },
        { name: "British", code: "gb", count: 70 },
        { name: "Spanish", code: "es", count: 63 },
        { name: "French", code: "fr", count: 46 },
        { name: "Polish", code: "pl", count: 42 },
        { name: "Luxembourgish", code: "lu", count: 29 },
        { name: "Irish", code: "ie", count: 26 },
        { name: "Romanian", code: "ro", count: 23 },
        { name: "American", code: "us", count: 19 },
        { name: "Greek", code: "gr", count: 17 },
        { name: "Turkish", code: "tr", count: 17 }
    ],
    
    // All 78 nationality flag codes for the flag cascade
    allNationalityFlags: [
        'ar', 'at', 'au', 'az', 'ba', 'be', 'bg', 'br', 'ca', 'ch',
        'cl', 'cn', 'co', 'cw', 'cy', 'cz', 'de', 'dk', 'ec', 'ee',
        'es', 'fi', 'fr', 'gb', 'gh', 'gr', 'hr', 'hu', 'id', 'ie',
        'il', 'in', 'iq', 'ir', 'it', 'jp', 'ke', 'kh', 'kr', 'kw',
        'kz', 'lk', 'lt', 'lu', 'lv', 'ma', 'md', 'mk', 'mt', 'mu',
        'mx', 'my', 'mz', 'nl', 'no', 'pa', 'pe', 'ph', 'pk', 'pl',
        'pt', 'ro', 'rs', 'ru', 'sa', 'sd', 'se', 'sg', 'si', 'sk',
        'th', 'tr', 'tt', 'ua', 'us', 'vn', 'za', 'zw'
    ],
    
    // ==========================================
    // SECTION 6: WHERE ALUMNI LIVE NOW (All 56 Countries)
    // ==========================================
    // Fields: name, code, count, continent, coords (for maps)
    
    countriesLiving: [
        // Europe - Major (20+ alumni)
        { name: "Netherlands", code: "nl", count: 456, continent: "europe", coords: [52.3676, 4.9041] },
        { name: "Germany", code: "de", count: 92, continent: "europe", coords: [52.52, 13.405] },
        { name: "United Kingdom", code: "gb", count: 86, continent: "europe", coords: [51.5074, -0.1278] },
        { name: "Belgium", code: "be", count: 70, continent: "europe", coords: [50.8503, 4.3517] },
        { name: "Sweden", code: "se", count: 51, continent: "europe", coords: [59.3293, 18.0686] },
        { name: "Switzerland", code: "ch", count: 41, continent: "europe", coords: [46.948, 7.4474] },
        { name: "Spain", code: "es", count: 30, continent: "europe", coords: [40.4168, -3.7038] },
        { name: "Italy", code: "it", count: 29, continent: "europe", coords: [41.9028, 12.4964] },
        { name: "France", code: "fr", count: 28, continent: "europe", coords: [48.8566, 2.3522] },
        { name: "Denmark", code: "dk", count: 24, continent: "europe", coords: [55.6761, 12.5683] },
        { name: "United States", code: "us", count: 23, continent: "americas", coords: [38.9072, -77.0369] },
        
        // Europe - Medium (5-19 alumni)
        { name: "Finland", code: "fi", count: 18, continent: "europe", coords: [60.1699, 24.9384] },
        { name: "Austria", code: "at", count: 17, continent: "europe", coords: [48.2082, 16.3738] },
        { name: "Canada", code: "ca", count: 9, continent: "americas", coords: [45.4215, -75.6972] },
        { name: "Ireland", code: "ie", count: 9, continent: "europe", coords: [53.3498, -6.2603] },
        { name: "Luxembourg", code: "lu", count: 9, continent: "europe", coords: [49.6116, 6.1319] },
        { name: "Australia", code: "au", count: 8, continent: "asia", coords: [-25.2744, 133.7751] },
        { name: "Portugal", code: "pt", count: 8, continent: "europe", coords: [38.7223, -9.1393] },
        { name: "Norway", code: "no", count: 7, continent: "europe", coords: [59.9139, 10.7522] },
        { name: "Greece", code: "gr", count: 5, continent: "europe", coords: [37.9838, 23.7275] },
        
        // Europe - Small (1-4 alumni)
        { name: "Japan", code: "jp", count: 4, continent: "asia", coords: [35.6762, 139.6503] },
        { name: "Poland", code: "pl", count: 3, continent: "europe", coords: [52.2297, 21.0122] },
        { name: "Bulgaria", code: "bg", count: 3, continent: "europe", coords: [42.6977, 23.3219] },
        { name: "Singapore", code: "sg", count: 2, continent: "asia", coords: [1.3521, 103.8198] },
        { name: "India", code: "in", count: 2, continent: "asia", coords: [28.6139, 77.209] },
        { name: "China", code: "cn", count: 2, continent: "asia", coords: [39.9042, 116.4074] },
        { name: "Chile", code: "cl", count: 2, continent: "americas", coords: [-33.4489, -70.6693] },
        { name: "Hungary", code: "hu", count: 2, continent: "europe", coords: [47.4979, 19.0402] },
        { name: "Romania", code: "ro", count: 1, continent: "europe", coords: [44.4268, 26.1025] },
        { name: "Sint Maarten", code: "sx", count: 1, continent: "americas", coords: [18.0425, -63.0548] },
        { name: "Kenya", code: "ke", count: 1, continent: "africa", coords: [-1.2921, 36.8219] },
        { name: "Ecuador", code: "ec", count: 1, continent: "americas", coords: [-0.1807, -78.4678] },
        { name: "Turkey", code: "tr", count: 1, continent: "europe", coords: [39.9334, 32.8597] },
        { name: "New Caledonia", code: "nc", count: 1, continent: "asia", coords: [-22.2558, 166.4505] },
        { name: "Jamaica", code: "jm", count: 1, continent: "americas", coords: [18.1096, -77.2975] },
        { name: "Taiwan", code: "tw", count: 1, continent: "asia", coords: [25.033, 121.5654] },
        { name: "Malaysia", code: "my", count: 1, continent: "asia", coords: [3.139, 101.6869] },
        { name: "Saudi Arabia", code: "sa", count: 1, continent: "africa", coords: [24.7136, 46.6753] },
        { name: "Lithuania", code: "lt", count: 1, continent: "europe", coords: [54.6872, 25.2797] },
        { name: "Zimbabwe", code: "zw", count: 1, continent: "africa", coords: [-17.8252, 31.0335] },
        { name: "Czech Republic", code: "cz", count: 1, continent: "europe", coords: [50.0755, 14.4378] },
        { name: "Mali", code: "ml", count: 1, continent: "africa", coords: [12.6392, -8.0029] },
        { name: "Slovakia", code: "sk", count: 1, continent: "europe", coords: [48.1486, 17.1077] },
        { name: "Sri Lanka", code: "lk", count: 1, continent: "asia", coords: [6.9271, 79.8612] },
        { name: "Latvia", code: "lv", count: 1, continent: "europe", coords: [56.9496, 24.1052] },
        { name: "Cyprus", code: "cy", count: 1, continent: "europe", coords: [35.1856, 33.3823] },
        { name: "Colombia", code: "co", count: 1, continent: "americas", coords: [4.711, -74.0721] },
        { name: "Slovenia", code: "si", count: 1, continent: "europe", coords: [46.0569, 14.5058] },
        { name: "United Arab Emirates", code: "ae", count: 1, continent: "africa", coords: [24.4539, 54.3773] },
        { name: "Serbia", code: "rs", count: 1, continent: "europe", coords: [44.7866, 20.4489] },
        { name: "Moldova", code: "md", count: 1, continent: "europe", coords: [47.0105, 28.8638] },
        { name: "Israel", code: "il", count: 1, continent: "africa", coords: [31.7683, 35.2137] },
        { name: "South Africa", code: "za", count: 1, continent: "africa", coords: [-25.7479, 28.2293] },
        { name: "Tunisia", code: "tn", count: 1, continent: "africa", coords: [36.8065, 10.1815] },
        { name: "Philippines", code: "ph", count: 1, continent: "asia", coords: [14.5995, 120.9842] },
        { name: "Costa Rica", code: "cr", count: 1, continent: "americas", coords: [9.9281, -84.0907] }
    ],
    
    // ==========================================
    // SECTION 7: MASTER'S UNIVERSITIES (Full Data)
    // ==========================================
    // Fields: name, country, code, count, logo, rank (QS 2025), prestige, fields, highlight, website
    
    topUniversities: [
        // Dutch Universities
        { name: "Maastricht University", country: "Netherlands", code: "nl", count: 125, logo: "maastricht-university.png", rank: 121, fields: ["Life Sciences", "Medicine", "Psychology", "Economics"], website: "https://www.maastrichtuniversity.nl" },
        { name: "Utrecht University", country: "Netherlands", code: "nl", count: 93, logo: "utrecht-university.png", rank: 107, fields: ["Biology", "Chemistry", "Physics", "Medicine"], website: "https://www.uu.nl" },
        { name: "University of Amsterdam", country: "Netherlands", code: "nl", count: 70, logo: "university-of-amsterdam.png", rank: 53, fields: ["Brain & Cognitive Sciences", "Chemistry", "Physics"], website: "https://www.uva.nl" },
        { name: "Leiden University", country: "Netherlands", code: "nl", count: 44, logo: "leiden-university.png", rank: 126, fields: ["Biology", "Chemistry", "Physics", "Astronomy"], website: "https://www.universiteitleiden.nl" },
        { name: "Wageningen University", country: "Netherlands", code: "nl", count: 38, logo: "wageningen-university.png", rank: 81, fields: ["Food Science", "Environmental Science", "Biology"], highlight: "#1 Agriculture", website: "https://www.wur.nl" },
        { name: "Radboud University", country: "Netherlands", code: "nl", count: 37, logo: "radboud-university.png", rank: 127, fields: ["Neuroscience", "Biology", "Chemistry"], website: "https://www.ru.nl" },
        { name: "University of Groningen", country: "Netherlands", code: "nl", count: 23, logo: "university-of-groningen.png", rank: 139, fields: ["Biology", "Chemistry", "Physics", "Astronomy"], website: "https://www.rug.nl" },
        { name: "TU Delft", country: "Netherlands", code: "nl", count: 19, logo: "tu-delft.png", rank: 47, fields: ["Engineering", "Physics", "Computer Science"], highlight: "Top 50 Global", website: "https://www.tudelft.nl" },
        { name: "VU Amsterdam", country: "Netherlands", code: "nl", count: 15, logo: "vrije-universiteit-amsterdam.png", rank: 207, fields: ["Neuroscience", "Biology", "Chemistry"], website: "https://www.vu.nl" },
        { name: "TU Eindhoven", country: "Netherlands", code: "nl", count: 9, logo: "eindhoven-university.png", rank: 113, fields: ["Engineering", "Physics", "Data Science"], website: "https://www.tue.nl" },
        
        // Prestige International (Top 10 World)
        { name: "Imperial College London", country: "United Kingdom", code: "gb", count: 19, logo: "imperial-college-london.png", rank: 2, prestige: true, fields: ["Biology", "Chemistry", "Physics", "Engineering", "Medicine"], website: "https://www.imperial.ac.uk" },
        { name: "ETH Zürich", country: "Switzerland", code: "ch", count: 11, logo: "eth-zurich.png", rank: 7, prestige: true, fields: ["Physics", "Chemistry", "Engineering", "Computer Science"], website: "https://ethz.ch" },
        { name: "University of Cambridge", country: "United Kingdom", code: "gb", count: 7, logo: "university-of-cambridge.png", rank: 5, prestige: true, fields: ["Natural Sciences", "Chemistry", "Physics", "Biology"], website: "https://www.cam.ac.uk" },
        { name: "University of Oxford", country: "United Kingdom", code: "gb", count: 7, logo: "university-of-oxford.png", rank: 3, prestige: true, fields: ["Biochemistry", "Chemistry", "Physics"], website: "https://www.ox.ac.uk" },
        { name: "UCL", country: "United Kingdom", code: "gb", count: 14, logo: "ucl.png", rank: 9, prestige: true, fields: ["Neuroscience", "Biology", "Chemistry", "Medicine"], website: "https://www.ucl.ac.uk" },
        { name: "EPFL", country: "Switzerland", code: "ch", count: 2, logo: "epfl.png", rank: 12, prestige: true, fields: ["Engineering", "Physics", "Computer Science"], website: "https://www.epfl.ch" },
        
        // UK Universities
        { name: "University of Edinburgh", country: "United Kingdom", code: "gb", count: 7, logo: "university-of-edinburgh.png", rank: 27, fields: ["Biology", "Neuroscience", "Chemistry"], website: "https://www.ed.ac.uk" },
        { name: "University of Birmingham", country: "United Kingdom", code: "gb", count: 5, logo: "university-of-birmingham.png", rank: 80, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.birmingham.ac.uk" },
        
        // Swedish Universities
        { name: "Uppsala University", country: "Sweden", code: "se", count: 18, logo: "uppsala-university.png", rank: 105, fields: ["Biology", "Chemistry", "Physics", "Medicine"], website: "https://www.uu.se" },
        { name: "Lund University", country: "Sweden", code: "se", count: 14, logo: "lund-university.png", rank: 75, fields: ["Biology", "Physics", "Medicine"], website: "https://www.lu.se" },
        { name: "Karolinska Institutet", country: "Sweden", code: "se", count: 9, logo: "karolinska-institutet.png", rank: 45, fields: ["Medicine", "Biomedical Science", "Neuroscience"], highlight: "Top Medical School", website: "https://ki.se" },
        { name: "Stockholm University", country: "Sweden", code: "se", count: 9, logo: "stockholm-university.png", rank: 152, fields: ["Biology", "Chemistry", "Environmental Science"], website: "https://www.su.se" },
        { name: "KTH Royal Institute", country: "Sweden", code: "se", count: 3, logo: "kth-royal-institute-of-technology.png", rank: 78, fields: ["Engineering", "Physics", "Computer Science"], website: "https://www.kth.se" },
        
        // German Universities
        { name: "TU Munich", country: "Germany", code: "de", count: 7, logo: "tu-munich.png", rank: 37, fields: ["Biology", "Physics", "Engineering"], website: "https://www.tum.de" },
        { name: "Humboldt University Berlin", country: "Germany", code: "de", count: 4, logo: "humboldt-university-of-berlin.png", rank: 120, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.hu-berlin.de" },
        
        // Belgian Universities
        { name: "KU Leuven", country: "Belgium", code: "be", count: 21, logo: "ku-leuven.png", rank: 61, fields: ["Biology", "Chemistry", "Engineering", "Medicine"], website: "https://www.kuleuven.be" },
        { name: "Vrije Universiteit Brussel", country: "Belgium", code: "be", count: 5, logo: "vrije-universiteit-brussel.png", rank: 221, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.vub.be" },
        { name: "Ghent University", country: "Belgium", code: "be", count: 3, logo: "ghent-university.png", rank: 137, fields: ["Biology", "Chemistry", "Engineering"], website: "https://www.ugent.be" },
        
        // Other Countries
        { name: "University of Copenhagen", country: "Denmark", code: "dk", count: 16, logo: "university-of-copenhagen.png", rank: 96, fields: ["Biology", "Chemistry", "Neuroscience"], website: "https://www.ku.dk" },
        { name: "University of Helsinki", country: "Finland", code: "fi", count: 5, logo: "university-of-helsinki.png", rank: 107, fields: ["Biology", "Environmental Science"], website: "https://www.helsinki.fi" },
        { name: "Ecole Polytechnique", country: "France", code: "fr", count: 5, logo: "ecole-polytechnique.png", rank: 48, fields: ["Physics", "Mathematics", "Engineering"], website: "https://www.polytechnique.edu" },
        { name: "Universita di Bologna", country: "Italy", code: "it", count: 6, logo: "university-of-bologna.png", rank: 164, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.unibo.it" }
    ],
    
    // ==========================================
    // SECTION 8: MASTER'S BY COUNTRY
    // ==========================================
    
    mastersByCountry: [
        { name: "Netherlands", code: "nl", count: 485 },
        { name: "United Kingdom", code: "gb", count: 99 },
        { name: "Sweden", code: "se", count: 56 },
        { name: "Germany", code: "de", count: 41 },
        { name: "Belgium", code: "be", count: 41 },
        { name: "Denmark", code: "dk", count: 25 },
        { name: "Switzerland", code: "ch", count: 25 },
        { name: "Spain", code: "es", count: 24 },
        { name: "France", code: "fr", count: 23 },
        { name: "Italy", code: "it", count: 22 },
        { name: "United States", code: "us", count: 9 },
        { name: "Finland", code: "fi", count: 9 },
        { name: "Austria", code: "at", count: 8 },
        { name: "Ireland", code: "ie", count: 8 }
    ],
    
    // ==========================================
    // SECTION 9: FIELDS OF STUDY
    // ==========================================
    
    fieldsOfStudy: [
        { name: "Life Sciences & Biology", icon: "🧬", count: 341, percent: 39, description: "From molecular biology to ecology", examples: ["Biomedical Sciences", "Neuroscience", "Ecology"] },
        { name: "Chemistry & Materials", icon: "⚗️", count: 105, percent: 12, description: "Molecular to materials science", examples: ["Organic Chemistry", "Materials Science", "Biochemistry"] },
        { name: "Medicine & Health", icon: "🏥", count: 105, percent: 12, description: "Clinical and health sciences", examples: ["Medicine", "Public Health", "Epidemiology"] },
        { name: "Physics & Engineering", icon: "⚡", count: 98, percent: 11, description: "From theory to application", examples: ["Applied Physics", "Engineering", "Astronomy"] },
        { name: "Neuroscience & Psychology", icon: "🧠", count: 61, percent: 7, description: "Brain and behavior", examples: ["Cognitive Neuroscience", "Psychology", "AI & Cognition"] },
        { name: "Business & Economics", icon: "📊", count: 50, percent: 6, description: "Science meets business", examples: ["Economics", "Finance", "Management"] },
        { name: "Computer Science & AI", icon: "💻", count: 27, percent: 3, description: "Digital innovation", examples: ["Data Science", "AI", "Bioinformatics"] },
        { name: "Environmental & Earth Sciences", icon: "🌍", count: 24, percent: 3, description: "Planet and climate", examples: ["Environmental Science", "Climate Science", "Geoscience"] },
        { name: "Social Sciences & Humanities", icon: "📚", count: 24, percent: 3, description: "Science and society", examples: ["Science Policy", "Philosophy of Science"] },
        { name: "Other", icon: "🔬", count: 42, percent: 5, description: "Interdisciplinary paths", examples: ["Science Communication", "Education", "Law"] }
    ],
    
    // ==========================================
    // SECTION 9B: WORLD TOP 10 UNIVERSITIES (QS 2025)
    // ==========================================
    // MSP alumni presence at world's top-ranked universities
    
    worldTop10: [
        { rank: 1, name: "MIT", fullName: "Massachusetts Institute of Technology", country: "United States", code: "us", mspAlumni: 0, logo: "mit.png" },
        { rank: 2, name: "Imperial College London", fullName: "Imperial College London", country: "United Kingdom", code: "gb", mspAlumni: 19, logo: "imperial-college-london.png" },
        { rank: 3, name: "University of Oxford", fullName: "University of Oxford", country: "United Kingdom", code: "gb", mspAlumni: 7, logo: "university-of-oxford.png" },
        { rank: 4, name: "Harvard University", fullName: "Harvard University", country: "United States", code: "us", mspAlumni: 1, logo: "harvard-university.png" },
        { rank: 5, name: "University of Cambridge", fullName: "University of Cambridge", country: "United Kingdom", code: "gb", mspAlumni: 7, logo: "university-of-cambridge.png" },
        { rank: 6, name: "Stanford University", fullName: "Stanford University", country: "United States", code: "us", mspAlumni: 0, logo: "stanford-university.png" },
        { rank: 7, name: "ETH Zürich", fullName: "ETH Zürich", country: "Switzerland", code: "ch", mspAlumni: 11, logo: "eth-zurich.png" },
        { rank: 8, name: "NUS", fullName: "National University of Singapore", country: "Singapore", code: "sg", mspAlumni: 1, logo: "nus.png" },
        { rank: 9, name: "UCL", fullName: "University College London", country: "United Kingdom", code: "gb", mspAlumni: 14, logo: "ucl.png" },
        { rank: 10, name: "Caltech", fullName: "California Institute of Technology", country: "United States", code: "us", mspAlumni: 0, logo: "caltech.png" }
    ],
    
    // Top Dutch Universities (with rankings)
    topDutchUniversities: [
        { name: "Maastricht University", rank: 121, mspAlumni: 125, logo: "maastricht-university.png", highlight: "Where it all starts" },
        { name: "Utrecht University", rank: 107, mspAlumni: 93, logo: "utrecht-university.png" },
        { name: "University of Amsterdam", rank: 53, mspAlumni: 70, logo: "university-of-amsterdam.png" },
        { name: "Leiden University", rank: 126, mspAlumni: 44, logo: "leiden-university.png" },
        { name: "Wageningen University", rank: 81, mspAlumni: 38, logo: "wageningen-university.png", highlight: "#1 in Agriculture" },
        { name: "Radboud University", rank: 127, mspAlumni: 37, logo: "radboud-university.png" },
        { name: "University of Groningen", rank: 139, mspAlumni: 23, logo: "university-of-groningen.png" },
        { name: "TU Delft", rank: 47, mspAlumni: 19, logo: "tu-delft.png", highlight: "Top 50 globally" }
    ],
    
    // Top International Universities (non-Netherlands)
    topInternationalUniversities: [
        { name: "KU Leuven", country: "Belgium", code: "be", rank: 61, mspAlumni: 21, logo: "ku-leuven.png" },
        { name: "Imperial College London", country: "United Kingdom", code: "gb", rank: 2, mspAlumni: 19, logo: "imperial-college-london.png" },
        { name: "Uppsala University", country: "Sweden", code: "se", rank: 105, mspAlumni: 18, logo: "uppsala-university.png" },
        { name: "University of Copenhagen", country: "Denmark", code: "dk", rank: 96, mspAlumni: 16, logo: "university-of-copenhagen.png" },
        { name: "UCL", country: "United Kingdom", code: "gb", rank: 9, mspAlumni: 14, logo: "ucl.png" },
        { name: "Lund University", country: "Sweden", code: "se", rank: 75, mspAlumni: 14, logo: "lund-university.png" },
        { name: "ETH Zürich", country: "Switzerland", code: "ch", rank: 7, mspAlumni: 11, logo: "eth-zurich.png" },
        { name: "University of Cambridge", country: "United Kingdom", code: "gb", rank: 5, mspAlumni: 7, logo: "university-of-cambridge.png" }
    ],
    
    // ==========================================
    // SECTION 10: MSP PROGRAMME INFO
    // ==========================================
    
    programmeInfo: {
        duration: "3 years",
        language: "English",
        degree: "Bachelor of Science",
        ects: 180,
        coursesAvailable: "100+",
        tutorialGroupSize: "12-15 students",
        disciplines: [
            { name: "Biology", courses: 15, color: "#4CAF50" },
            { name: "Chemistry", courses: 13, color: "#FF9800" },
            { name: "Physics", courses: 19, color: "#2196F3" },
            { name: "Mathematics", courses: 9, color: "#9C27B0" },
            { name: "Neuroscience", courses: 5, color: "#E91E63" },
            { name: "Interdisciplinary", courses: 25, color: "#00BCD4" },
            { name: "Skills & Practicals", courses: 40, color: "#607D8B" }
        ]
    },
    
    // ==========================================
    // SECTION 11: EXTERNAL LINKS
    // ==========================================
    
    links: {
        // Main MSP pages
        mspMain: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme",
        mspWhyThisStudy: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/waarom-deze-studie",
        mspCourses: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/vakken-en-curriculum",
        mspCareer: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/jouw-toekomst",
        
        // Admissions
        mspRequirements: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/toelatingseisen",
        mspAdmissions: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/toelating-en-inschrijving",
        mspTuition: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/collegegelden",
        mspContact: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/contact",
        
        // Faculty & University
        fse: "https://www.maastrichtuniversity.nl/about-um/faculties/science-and-engineering",
        fseAlumni: "https://www.maastrichtuniversity.nl/nl/fse-alumni",
        um: "https://www.maastrichtuniversity.nl",
        
        // Social Media
        instagram: "https://www.instagram.com/msp_alumni?igsh=cHdlMHF4czY0YWUy",
        linkedinMspAlumni: "https://www.linkedin.com/groups/12472184/",
        linkedinFseAlumni: "https://www.linkedin.com/groups/14782233/",
        
        // Legacy
        admissions: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/toelating-en-inschrijving",
        courses: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/vakken-en-curriculum",
        linkedin: "https://www.linkedin.com/groups/12472184/"
    },
    
    // ==========================================
    // SECTION 12: RECRUITMENT PAGE DATA
    // ==========================================
    // Data for the "Considering MSP?" page
    
    recruitment: {
        
        // Hero section research stat
        heroStat: "92% of prospective students say hearing from alumni helps their decision.",
        
        // Proof bar - key numbers for Gen Z (ROI-focused)
        proofStats: [
            { number: "78%", label: "Pursue Master's", subtext: "of 2014-2023 grads", highlight: true },
            { number: "42%", label: "At QS Top-100", subtext: "universities", highlight: false },
            { number: "130", label: "PhD Candidates", subtext: "10% of alumni", highlight: false },
            { number: "56", label: "Countries", subtext: "on 6 continents", highlight: false }
        ],
        
        // ROA Benchmark Comparisons (Source: ROA-F-2024/9E, September 2024)
        roaBenchmarks: {
            mastersContinuation: { msp: 78, um: 77, label: "Master's Continuation" },
            programmeSatisfaction: { msp: "TBD", um: 79, label: "Programme Satisfaction" },
            wouldChooseAgain: { msp: "TBD", um: 79, label: "Would Choose Same Programme" },
            source: "ROA Graduate Survey 2024 (ROA-F-2024/9E)"
        },
        
        // Regional Retention Statistics (from cleaned database)
        regionalRetention: {
            within100km: "17%", // Euregio approximation
            inNetherlands: "43%", // 456 of 1070 with known location
            inLimburg: "11%", // ~122 in Limburg cities
            inEuregio: "17%", // NL Limburg + BE border + DE border
            brainGain: "278", // International students now in NL
            source: "MSP Alumni Database December 2025"
        },
        
        // Employer Categories (from Work_Category analysis)
        employerCategories: [
            { category: "Academia & Research", percent: "30%", icon: "graduation-cap" },
            { category: "Industry R&D & Science", percent: "17%", icon: "flask" },
            { category: "Business & Corporate", percent: "13%", icon: "briefcase" },
            { category: "Healthcare & Pharma", percent: "10%", icon: "heart-pulse" },
            { category: "Tech & IT", percent: "9%", icon: "cpu" },
            { category: "Finance & Consulting", percent: "8%", icon: "trending-up" },
            { category: "Government & NGO", percent: "2%", icon: "landmark" },
            { category: "Entrepreneurship", count: "15", icon: "lightbulb" }
        ],
        
        // Top PhD Institutions (from database analysis)
        topPhdInstitutions: [
            { name: "University of Amsterdam", count: 4 },
            { name: "KU Leuven", count: 3 },
            { name: "University of Helsinki", count: 2 },
            { name: "Eindhoven University of Technology", count: 2 },
            { name: "Nikhef", count: 2 },
            { name: "University of Sheffield", count: 2 },
            { name: "UMCG", count: 2 }
        ],
        
        // Alumni journey cards - anonymized real outcomes
        alumniJourneys: [
            {
                year: "'14",
                university: "Cambridge",
                universityLogo: "university-of-cambridge.png",
                role: "Founder & Chair",
                outcome: "Battery Technology Startup",
                location: "United Kingdom",
                icon: "lightbulb",
                companyLogo: null
            },
            {
                year: "'16",
                university: "ETH Zürich",
                universityLogo: "eth-zurich.png",
                role: "Deployment Strategist",
                outcome: "Palantir Technologies",
                location: "United States",
                icon: "brain",
                companyLogo: null
            },
            {
                year: "'16",
                university: "Oxford",
                universityLogo: "university-of-oxford.png",
                role: "Postdoctoral Researcher",
                outcome: "MIT",
                location: "United States",
                icon: "graduation-cap",
                companyLogo: null
            },
            {
                year: "'15",
                university: "Maastricht University",
                universityLogo: "maastricht-university.png",
                role: "AI Researcher",
                outcome: "Philips",
                location: "Netherlands",
                icon: "cpu",
                companyLogo: null
            },
            {
                year: "'14",
                university: "Maastricht University",
                universityLogo: "maastricht-university.png",
                role: "Lead Data Engineer",
                outcome: "The Ocean Cleanup",
                location: "Netherlands",
                icon: "waves",
                companyLogo: null
            },
            {
                year: "'18",
                university: "Cambridge",
                universityLogo: "university-of-cambridge.png",
                role: "Co-Founder & CTO",
                outcome: "Stealth Startup",
                location: "Europe",
                icon: "rocket",
                companyLogo: null
            },
            {
                year: "'15",
                university: "TU Eindhoven",
                universityLogo: "eindhoven-university.png",
                role: "Software Engineer",
                outcome: "ASML",
                location: "Netherlands",
                icon: "microscope",
                companyLogo: null
            },
            {
                year: "'15",
                university: "Utrecht University",
                universityLogo: "utrecht-university.png",
                role: "Medical Doctor",
                outcome: "Amsterdam UMC",
                location: "Netherlands",
                icon: "stethoscope",
                companyLogo: null
            }
        ]
    }
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function getCountryPercentage(countryName) {
    const country = MSP_DATA.countriesLiving.find(c => c.name === countryName);
    if (!country) return 0;
    const totalWithLocation = MSP_DATA.countriesLiving.reduce((sum, c) => sum + c.count, 0);
    return ((country.count / totalWithLocation) * 100).toFixed(1);
}

function getTotalWithMasters() {
    return MSP_DATA.mastersByCountry.reduce((sum, c) => sum + c.count, 0);
}

function formatNumber(num) {
    return num.toLocaleString('en-US');
}

function getGrowthRate() {
    const years = MSP_DATA.graduationByYear;
    const first = years[0].count;
    const last = years[years.length - 1].count;
    return Math.round(((last - first) / first) * 100);
}

// ==========================================
// COUNTRY DETAILS (for individual country pages)
// ==========================================
// 20 countries with 5+ alumni - detailed profiles

const COUNTRY_DETAILS = {
    "Netherlands": {
        "code": "nl",
        "name": "Netherlands",
        "count": 456,
        "coords": [52.3676, 4.9041],
        "cities": [
            {"name": "Maastricht", "count": 107},
            {"name": "Amsterdam", "count": 95},
            {"name": "Utrecht", "count": 72},
            {"name": "Leiden", "count": 35},
            {"name": "Wageningen", "count": 19}
        ],
        "universities": [
            {"name": "Maastricht University", "count": 80},
            {"name": "Utrecht University", "count": 73},
            {"name": "University of Amsterdam", "count": 61},
            {"name": "Leiden University", "count": 36},
            {"name": "Wageningen University & Research", "count": 28}
        ],
        "graduationYears": {"2014": 5, "2015": 11, "2016": 22, "2017": 22, "2018": 19, "2019": 25, "2020": 40, "2021": 50, "2022": 54, "2023": 63, "2024": 69, "2025": 76},
        "gender": {"Female": 271, "Male": 185},
        "nationalities": [
            {"name": "Dutch", "code": "nl", "count": 155},
            {"name": "German", "code": "de", "count": 44},
            {"name": "Belgian", "code": "be", "count": 35},
            {"name": "Italian", "code": "it", "count": 27}
        ]
    },
    "Germany": {
        "code": "de",
        "name": "Germany",
        "count": 92,
        "coords": [52.52, 13.405],
        "cities": [
            {"name": "Munich", "count": 22},
            {"name": "Berlin", "count": 20},
            {"name": "Cologne", "count": 5},
            {"name": "Hamburg", "count": 5},
            {"name": "Tübingen", "count": 4}
        ],
        "universities": [
            {"name": "Maastricht University", "count": 10},
            {"name": "Technical University of Munich", "count": 7},
            {"name": "Utrecht University", "count": 5},
            {"name": "Leiden University", "count": 5},
            {"name": "Humboldt-Universität zu Berlin", "count": 4}
        ],
        "graduationYears": {"2014": 4, "2015": 11, "2016": 8, "2017": 4, "2018": 10, "2019": 6, "2020": 4, "2021": 9, "2022": 8, "2023": 13, "2024": 6, "2025": 9},
        "gender": {"Female": 63, "Male": 29},
        "nationalities": [
            {"name": "German", "code": "de", "count": 42},
            {"name": "Dutch", "code": "nl", "count": 7},
            {"name": "Belgian", "code": "be", "count": 6},
            {"name": "Italian", "code": "it", "count": 6}
        ]
    },
    "United Kingdom": {
        "code": "gb",
        "name": "United Kingdom",
        "count": 86,
        "coords": [51.5074, -0.1278],
        "cities": [
            {"name": "London", "count": 39},
            {"name": "Oxford", "count": 7},
            {"name": "Edinburgh", "count": 6},
            {"name": "Cambridge", "count": 4},
            {"name": "Glasgow", "count": 3}
        ],
        "universities": [
            {"name": "Imperial College London", "count": 10},
            {"name": "University College London", "count": 7},
            {"name": "Maastricht University", "count": 5},
            {"name": "University of Birmingham", "count": 4},
            {"name": "University of Oxford", "count": 4}
        ],
        "graduationYears": {"2015": 7, "2016": 6, "2017": 7, "2018": 9, "2019": 9, "2020": 8, "2021": 8, "2022": 8, "2023": 9, "2024": 10, "2025": 5},
        "gender": {"Female": 51, "Male": 35},
        "nationalities": [
            {"name": "British", "code": "gb", "count": 26},
            {"name": "German", "code": "de", "count": 12},
            {"name": "Dutch", "code": "nl", "count": 11},
            {"name": "Italian", "code": "it", "count": 9}
        ]
    },
    "Belgium": {
        "code": "be",
        "name": "Belgium",
        "count": 70,
        "coords": [50.8503, 4.3517],
        "cities": [
            {"name": "Brussels", "count": 33},
            {"name": "Leuven", "count": 13},
            {"name": "Antwerp", "count": 4},
            {"name": "Ghent", "count": 4},
            {"name": "Liège", "count": 3}
        ],
        "universities": [
            {"name": "KU Leuven", "count": 14},
            {"name": "Maastricht University", "count": 9},
            {"name": "Université Libre de Bruxelles", "count": 3},
            {"name": "Vrije Universiteit Brussel", "count": 3},
            {"name": "Ghent University", "count": 3}
        ],
        "graduationYears": {"2014": 3, "2015": 2, "2016": 5, "2017": 7, "2018": 2, "2019": 6, "2020": 6, "2021": 15, "2022": 6, "2023": 7, "2024": 4, "2025": 7},
        "gender": {"Female": 37, "Male": 31},
        "nationalities": [
            {"name": "Belgian", "code": "be", "count": 29},
            {"name": "Italian", "code": "it", "count": 6},
            {"name": "Dutch", "code": "nl", "count": 5},
            {"name": "German", "code": "de", "count": 4}
        ]
    },
    "Sweden": {
        "code": "se",
        "name": "Sweden",
        "count": 51,
        "coords": [59.3293, 18.0686],
        "cities": [
            {"name": "Stockholm", "count": 17},
            {"name": "Uppsala", "count": 17},
            {"name": "Lund", "count": 9},
            {"name": "Solna", "count": 2}
        ],
        "universities": [
            {"name": "Uppsala University", "count": 16},
            {"name": "Lund University", "count": 10},
            {"name": "Stockholm University", "count": 8},
            {"name": "Karolinska Institutet", "count": 5},
            {"name": "KTH Royal Institute of Technology", "count": 3}
        ],
        "graduationYears": {"2014": 1, "2016": 1, "2017": 1, "2018": 1, "2019": 2, "2020": 6, "2021": 4, "2022": 9, "2023": 4, "2024": 14, "2025": 8},
        "gender": {"Female": 28, "Male": 23},
        "nationalities": [
            {"name": "German", "code": "de", "count": 11},
            {"name": "Dutch", "code": "nl", "count": 8},
            {"name": "Belgian", "code": "be", "count": 7},
            {"name": "Italian", "code": "it", "count": 4}
        ]
    },
    "Switzerland": {
        "code": "ch",
        "name": "Switzerland",
        "count": 41,
        "coords": [46.948, 7.4474],
        "cities": [
            {"name": "Zurich", "count": 22},
            {"name": "Lausanne", "count": 5},
            {"name": "Basel", "count": 4},
            {"name": "Geneva", "count": 2},
            {"name": "Bern", "count": 2}
        ],
        "universities": [
            {"name": "ETH Zurich", "count": 11},
            {"name": "University of Zurich", "count": 2},
            {"name": "EPFL", "count": 2},
            {"name": "Imperial College London", "count": 2},
            {"name": "Radboud University", "count": 2}
        ],
        "graduationYears": {"2014": 2, "2015": 1, "2016": 2, "2017": 4, "2019": 5, "2021": 6, "2022": 2, "2023": 2, "2024": 7, "2025": 10},
        "gender": {"Female": 31, "Male": 10},
        "nationalities": [
            {"name": "German", "code": "de", "count": 8},
            {"name": "Italian", "code": "it", "count": 5},
            {"name": "Swiss", "code": "ch", "count": 4},
            {"name": "Belgian", "code": "be", "count": 4}
        ]
    },
    "Spain": {
        "code": "es",
        "name": "Spain",
        "count": 30,
        "coords": [40.4168, -3.7038],
        "cities": [
            {"name": "Barcelona", "count": 20},
            {"name": "Madrid", "count": 5},
            {"name": "Valencia", "count": 1}
        ],
        "universities": [
            {"name": "University of Groningen", "count": 3},
            {"name": "Universitat Politècnica de Catalunya", "count": 2},
            {"name": "Pompeu Fabra University", "count": 2},
            {"name": "Universitat de Barcelona", "count": 2}
        ],
        "graduationYears": {"2014": 2, "2015": 1, "2017": 5, "2018": 2, "2019": 3, "2020": 3, "2021": 2, "2022": 2, "2023": 2, "2024": 5, "2025": 3},
        "gender": {"Male": 16, "Female": 14},
        "nationalities": [
            {"name": "Spanish", "code": "es", "count": 13},
            {"name": "Italian", "code": "it", "count": 7},
            {"name": "German", "code": "de", "count": 2},
            {"name": "British", "code": "gb", "count": 2}
        ]
    },
    "Italy": {
        "code": "it",
        "name": "Italy",
        "count": 29,
        "coords": [41.9028, 12.4964],
        "cities": [
            {"name": "Milan", "count": 9},
            {"name": "Bologna", "count": 5},
            {"name": "Genoa", "count": 4},
            {"name": "Rome", "count": 2}
        ],
        "universities": [
            {"name": "Maastricht University", "count": 3},
            {"name": "University of Copenhagen", "count": 2},
            {"name": "Bocconi University", "count": 2},
            {"name": "Università di Bologna", "count": 2}
        ],
        "graduationYears": {"2014": 1, "2016": 2, "2017": 2, "2018": 2, "2019": 2, "2020": 6, "2021": 2, "2022": 5, "2024": 4, "2025": 3},
        "gender": {"Female": 22, "Male": 7},
        "nationalities": [
            {"name": "Italian", "code": "it", "count": 16},
            {"name": "Dutch", "code": "nl", "count": 2},
            {"name": "Greek", "code": "gr", "count": 1},
            {"name": "Russian", "code": "ru", "count": 1}
        ]
    },
    "France": {
        "code": "fr",
        "name": "France",
        "count": 28,
        "coords": [48.8566, 2.3522],
        "cities": [
            {"name": "Paris", "count": 18},
            {"name": "Lille", "count": 2},
            {"name": "Grenoble", "count": 2},
            {"name": "Nice", "count": 1},
            {"name": "Marseille", "count": 1}
        ],
        "universities": [
            {"name": "Ecole Polytechnique", "count": 4},
            {"name": "Delft University of Technology", "count": 1},
            {"name": "Wageningen University & Research", "count": 1},
            {"name": "Maastricht University", "count": 1}
        ],
        "graduationYears": {"2015": 2, "2020": 6, "2021": 2, "2022": 5, "2023": 3, "2024": 7, "2025": 3},
        "gender": {"Female": 19, "Male": 9},
        "nationalities": [
            {"name": "French", "code": "fr", "count": 8},
            {"name": "German", "code": "de", "count": 4},
            {"name": "Japanese", "code": "jp", "count": 3},
            {"name": "Croatian", "code": "hr", "count": 2}
        ]
    },
    "Denmark": {
        "code": "dk",
        "name": "Denmark",
        "count": 24,
        "coords": [55.6761, 12.5683],
        "cities": [
            {"name": "Copenhagen", "count": 21},
            {"name": "Roskilde", "count": 1},
            {"name": "Kongens Lyngby", "count": 1}
        ],
        "universities": [
            {"name": "University of Copenhagen", "count": 12},
            {"name": "Technical University of Denmark", "count": 4},
            {"name": "Copenhagen Business School", "count": 3}
        ],
        "graduationYears": {"2016": 1, "2017": 1, "2019": 1, "2020": 4, "2021": 1, "2022": 1, "2023": 7, "2024": 2, "2025": 6},
        "gender": {"Female": 15, "Male": 9},
        "nationalities": [
            {"name": "Dutch", "code": "nl", "count": 6},
            {"name": "German", "code": "de", "count": 5},
            {"name": "Belgian", "code": "be", "count": 4},
            {"name": "Luxembourgish", "code": "lu", "count": 3}
        ]
    },
    "United States": {
        "code": "us",
        "name": "United States",
        "count": 23,
        "coords": [38.9072, -77.0369],
        "cities": [
            {"name": "Boston", "count": 5},
            {"name": "Texas", "count": 3},
            {"name": "San Francisco", "count": 2},
            {"name": "California", "count": 2},
            {"name": "New York", "count": 2}
        ],
        "universities": [
            {"name": "Maastricht University", "count": 2},
            {"name": "Imperial College London", "count": 1},
            {"name": "University of Amsterdam", "count": 1}
        ],
        "graduationYears": {"2017": 1, "2018": 1, "2019": 2, "2020": 2, "2021": 1, "2022": 4, "2023": 9, "2024": 3},
        "gender": {"Female": 13, "Male": 10},
        "nationalities": [
            {"name": "American", "code": "us", "count": 4},
            {"name": "Indian", "code": "in", "count": 3},
            {"name": "Dutch", "code": "nl", "count": 3},
            {"name": "French", "code": "fr", "count": 2}
        ]
    },
    "Finland": {
        "code": "fi",
        "name": "Finland",
        "count": 18,
        "coords": [60.1699, 24.9384],
        "cities": [
            {"name": "Helsinki", "count": 17},
            {"name": "Turku", "count": 1}
        ],
        "universities": [
            {"name": "University of Helsinki", "count": 4},
            {"name": "Radboud University", "count": 3},
            {"name": "Aalto University", "count": 2}
        ],
        "graduationYears": {"2014": 1, "2017": 3, "2018": 2, "2020": 1, "2021": 2, "2022": 4, "2023": 1, "2024": 3, "2025": 1},
        "gender": {"Female": 11, "Male": 7},
        "nationalities": [
            {"name": "Finnish", "code": "fi", "count": 8},
            {"name": "Dutch", "code": "nl", "count": 4},
            {"name": "German", "code": "de", "count": 1},
            {"name": "British", "code": "gb", "count": 1}
        ]
    },
    "Austria": {
        "code": "at",
        "name": "Austria",
        "count": 17,
        "coords": [48.2082, 16.3738],
        "cities": [
            {"name": "Vienna", "count": 16},
            {"name": "Salzburg", "count": 1}
        ],
        "universities": [
            {"name": "University of Vienna", "count": 2},
            {"name": "Technische Universität Wien", "count": 2},
            {"name": "KU Leuven", "count": 1},
            {"name": "Maastricht University", "count": 1}
        ],
        "graduationYears": {"2015": 1, "2018": 2, "2020": 2, "2022": 4, "2023": 4, "2024": 4},
        "gender": {"Female": 9, "Male": 8},
        "nationalities": [
            {"name": "German", "code": "de", "count": 6},
            {"name": "Turkish", "code": "tr", "count": 3},
            {"name": "Belgian", "code": "be", "count": 2}
        ]
    },
    "Canada": {
        "code": "ca",
        "name": "Canada",
        "count": 9,
        "coords": [45.4215, -75.6972],
        "cities": [
            {"name": "Toronto", "count": 4},
            {"name": "Edmonton", "count": 1},
            {"name": "Vancouver", "count": 1},
            {"name": "Montreal", "count": 1}
        ],
        "universities": [
            {"name": "University of Toronto", "count": 1},
            {"name": "University of Edinburgh", "count": 1},
            {"name": "Lund University", "count": 1},
            {"name": "University of Cambridge", "count": 1}
        ],
        "graduationYears": {"2014": 1, "2015": 1, "2017": 2, "2018": 1, "2019": 1, "2020": 1, "2022": 1, "2025": 1},
        "gender": {"Female": 7, "Male": 2},
        "nationalities": [
            {"name": "Dutch", "code": "nl", "count": 2},
            {"name": "British", "code": "gb", "count": 2},
            {"name": "Belgian", "code": "be", "count": 2},
            {"name": "Canadian", "code": "ca", "count": 1}
        ]
    },
    "Ireland": {
        "code": "ie",
        "name": "Ireland",
        "count": 9,
        "coords": [53.3498, -6.2603],
        "cities": [
            {"name": "Dublin", "count": 6},
            {"name": "Cork", "count": 2},
            {"name": "Waterford", "count": 1}
        ],
        "universities": [
            {"name": "University College Dublin", "count": 2},
            {"name": "University of Edinburgh", "count": 1},
            {"name": "Uppsala University", "count": 1},
            {"name": "Utrecht University", "count": 1}
        ],
        "graduationYears": {"2015": 1, "2017": 1, "2020": 3, "2021": 1, "2023": 1, "2024": 1, "2025": 1},
        "gender": {"Female": 7, "Male": 2},
        "nationalities": [
            {"name": "Belgian", "code": "be", "count": 2},
            {"name": "German", "code": "de", "count": 1},
            {"name": "Dutch", "code": "nl", "count": 1},
            {"name": "Irish", "code": "ie", "count": 1}
        ]
    },
    "Luxembourg": {
        "code": "lu",
        "name": "Luxembourg",
        "count": 9,
        "coords": [49.6116, 6.1319],
        "cities": [
            {"name": "Luxembourg City", "count": 7},
            {"name": "Esch-sur-Alzette", "count": 1}
        ],
        "universities": [
            {"name": "University of Luxembourg", "count": 1},
            {"name": "Wageningen University & Research", "count": 1}
        ],
        "graduationYears": {"2018": 1, "2020": 4, "2021": 2, "2022": 1, "2023": 1},
        "gender": {"Female": 7, "Male": 2},
        "nationalities": [
            {"name": "Luxembourgish", "code": "lu", "count": 4},
            {"name": "Greek", "code": "gr", "count": 2},
            {"name": "Spanish", "code": "es", "count": 1},
            {"name": "Portuguese", "code": "pt", "count": 1}
        ]
    },
    "Australia": {
        "code": "au",
        "name": "Australia",
        "count": 8,
        "coords": [-25.2744, 133.7751],
        "cities": [
            {"name": "Sydney", "count": 2},
            {"name": "Perth", "count": 2},
            {"name": "Melbourne", "count": 1},
            {"name": "Brisbane", "count": 1}
        ],
        "universities": [
            {"name": "Imperial College London", "count": 1},
            {"name": "University of Birmingham", "count": 1},
            {"name": "Leiden University", "count": 1},
            {"name": "Radboud University", "count": 1}
        ],
        "graduationYears": {"2017": 2, "2021": 3, "2024": 1, "2025": 2},
        "gender": {"Male": 4, "Female": 4},
        "nationalities": [
            {"name": "Australian", "code": "au", "count": 2},
            {"name": "British", "code": "gb", "count": 1},
            {"name": "Luxembourgish", "code": "lu", "count": 1},
            {"name": "Dutch", "code": "nl", "count": 1}
        ]
    },
    "Portugal": {
        "code": "pt",
        "name": "Portugal",
        "count": 8,
        "coords": [38.7223, -9.1393],
        "cities": [
            {"name": "Lisbon", "count": 5},
            {"name": "Porto", "count": 1},
            {"name": "Faro", "count": 1}
        ],
        "universities": [
            {"name": "Utrecht University", "count": 1},
            {"name": "Maastricht University", "count": 1},
            {"name": "Erasmus University Rotterdam", "count": 1}
        ],
        "graduationYears": {"2016": 1, "2020": 1, "2021": 2, "2022": 1, "2023": 2, "2025": 1},
        "gender": {"Female": 4, "Male": 4},
        "nationalities": [
            {"name": "Belgian", "code": "be", "count": 2},
            {"name": "Bulgarian", "code": "bg", "count": 2},
            {"name": "Dutch", "code": "nl", "count": 1},
            {"name": "Portuguese", "code": "pt", "count": 1}
        ]
    },
    "Norway": {
        "code": "no",
        "name": "Norway",
        "count": 7,
        "coords": [59.9139, 10.7522],
        "cities": [
            {"name": "Oslo", "count": 4},
            {"name": "Bergen", "count": 1},
            {"name": "Trondheim", "count": 1},
            {"name": "Tromsø", "count": 1}
        ],
        "universities": [
            {"name": "University of Amsterdam", "count": 1},
            {"name": "KU Leuven", "count": 1},
            {"name": "Lund University", "count": 1},
            {"name": "University of Oslo", "count": 1}
        ],
        "graduationYears": {"2015": 1, "2018": 1, "2019": 1, "2023": 4},
        "gender": {"Female": 6, "Male": 1},
        "nationalities": [
            {"name": "Dutch", "code": "nl", "count": 2},
            {"name": "Norwegian", "code": "no", "count": 2},
            {"name": "Italian", "code": "it", "count": 1},
            {"name": "British", "code": "gb", "count": 1}
        ]
    },
    "Greece": {
        "code": "gr",
        "name": "Greece",
        "count": 5,
        "coords": [37.9838, 23.7275],
        "cities": [
            {"name": "Athens", "count": 3},
            {"name": "Thessaloniki", "count": 2}
        ],
        "universities": [
            {"name": "Maastricht University", "count": 2},
            {"name": "University of Athens", "count": 1},
            {"name": "Aristotle University of Thessaloniki", "count": 1}
        ],
        "graduationYears": {"2021": 2, "2022": 1, "2023": 1, "2025": 1},
        "gender": {"Female": 4, "Male": 1},
        "nationalities": [
            {"name": "Greek", "code": "gr", "count": 4},
            {"name": "Dutch", "code": "nl", "count": 1}
        ]
    }
};

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MSP_DATA, COUNTRY_DETAILS, getCountryPercentage, getTotalWithMasters, formatNumber, getGrowthRate };
}
