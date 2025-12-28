// ============================================
// MSP ALUMNI DATA - SINGLE SOURCE OF TRUTH
// ============================================
// 
// 🔄 UPDATE THIS FILE TWICE YEARLY (January & July)
// See UPDATE-GUIDE.md for instructions
//
// Last Updated: December 2025
// Updated By: [Your Name]
// Data Source: Alumni Survey + Records
// ============================================

const MSP_DATA = {
    
    // ==========================================
    // SECTION 1: KEY NUMBERS (Update these first!)
    // ==========================================
    
    lastUpdated: "December 2025",
    
    summary: {
        totalAlumni: 1329,
        countriesLivingIn: 59,        // Countries where alumni currently live
        universitiesAttended: 235,     // Unique Master's universities
        nationalities: 87              // Unique nationalities
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
        male: 534
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
        { name: "Dutch", code: "nl", count: 265 },      // Combined Netherlands entries
        { name: "German", code: "de", count: 176 },
        { name: "Belgian", code: "be", count: 138 },
        { name: "Italian", code: "it", count: 104 },
        { name: "British", code: "gb", count: 70 },
        { name: "Spanish", code: "es", count: 63 },
        { name: "French", code: "fr", count: 45 },
        { name: "Polish", code: "pl", count: 41 },
        { name: "Luxembourgish", code: "lu", count: 29 },
        { name: "Irish", code: "ie", count: 26 },
        { name: "Romanian", code: "ro", count: 23 },
        { name: "Turkish", code: "tr", count: 17 },
        { name: "Greek", code: "gr", count: 16 },
        { name: "Russian", code: "ru", count: 15 }
    ],
    
    // All 87 nationality flag codes for the flag cascade
    allNationalityFlags: [
        'nl', 'de', 'be', 'it', 'gb', 'es', 'fr', 'pl', 'lu', 'ie',
        'ro', 'tr', 'gr', 'ru', 'ch', 'bg', 'pt', 'fi', 'in', 'us',
        'at', 'se', 'dk', 'no', 'hu', 'cz', 'sk', 'hr', 'ua', 'lt',
        'lv', 'ee', 'si', 'rs', 'mk', 'al', 'ba', 'me', 'cy', 'mt',
        'is', 'cn', 'jp', 'kr', 'tw', 'hk', 'sg', 'my', 'th', 'vn',
        'id', 'ph', 'au', 'nz', 'ca', 'mx', 'br', 'ar', 'cl', 'co',
        'pe', 'za', 'eg', 'ma', 'ng', 'ke', 'gh', 'et', 'tz', 'ps',
        'ae', 'sa', 'qa', 'kw', 'pk', 'bd', 'lk', 'np', 'mm', 'kh',
        'la', 'mn', 'kz', 'uz', 'ge', 'am', 'az'
    ],
    
    // ==========================================
    // SECTION 6: WHERE ALUMNI LIVE NOW (All Countries)
    // ==========================================
    // Fields: name, code, count, continent, coords (for maps)
    
    countriesLiving: [
        // Europe
        { name: "Netherlands", code: "nl", count: 445, continent: "europe", coords: [52.1326, 5.2913] },
        { name: "Germany", code: "de", count: 92, continent: "europe", coords: [51.1657, 10.4515] },
        { name: "United Kingdom", code: "gb", count: 81, continent: "europe", coords: [54.5, -2.5] },
        { name: "Belgium", code: "be", count: 68, continent: "europe", coords: [50.5039, 4.4699] },
        { name: "Sweden", code: "se", count: 49, continent: "europe", coords: [62.0, 15.0] },
        { name: "Switzerland", code: "ch", count: 39, continent: "europe", coords: [46.8182, 8.2275] },
        { name: "Spain", code: "es", count: 29, continent: "europe", coords: [40.4637, -3.7492] },
        { name: "Italy", code: "it", count: 27, continent: "europe", coords: [41.8719, 12.5674] },
        { name: "France", code: "fr", count: 25, continent: "europe", coords: [46.6, 2.3] },
        { name: "Denmark", code: "dk", count: 22, continent: "europe", coords: [56.0, 10.0] },
        { name: "Austria", code: "at", count: 18, continent: "europe", coords: [47.5162, 14.5501] },
        { name: "Finland", code: "fi", count: 17, continent: "europe", coords: [64.0, 26.0] },
        { name: "Ireland", code: "ie", count: 9, continent: "europe", coords: [53.4129, -8.2439] },
        { name: "Luxembourg", code: "lu", count: 9, continent: "europe", coords: [49.8153, 6.1296] },
        { name: "Portugal", code: "pt", count: 7, continent: "europe", coords: [39.3999, -8.2245] },
        { name: "Norway", code: "no", count: 7, continent: "europe", coords: [64.0, 10.0] },
        { name: "Greece", code: "gr", count: 5, continent: "europe", coords: [39.0742, 21.8243] },
        { name: "Poland", code: "pl", count: 4, continent: "europe", coords: [51.9194, 19.1451] },
        { name: "Czech Republic", code: "cz", count: 3, continent: "europe", coords: [49.8175, 15.4730] },
        { name: "Hungary", code: "hu", count: 3, continent: "europe", coords: [47.1625, 19.5033] },
        { name: "Romania", code: "ro", count: 2, continent: "europe", coords: [45.9432, 24.9668] },
        { name: "Croatia", code: "hr", count: 2, continent: "europe", coords: [45.1, 15.2] },
        { name: "Slovenia", code: "si", count: 2, continent: "europe", coords: [46.1512, 14.9955] },
        { name: "Slovakia", code: "sk", count: 2, continent: "europe", coords: [48.6690, 19.6990] },
        { name: "Bulgaria", code: "bg", count: 1, continent: "europe", coords: [42.7339, 25.4858] },
        { name: "Estonia", code: "ee", count: 1, continent: "europe", coords: [58.5953, 25.0136] },
        { name: "Latvia", code: "lv", count: 1, continent: "europe", coords: [56.8796, 24.6032] },
        { name: "Lithuania", code: "lt", count: 1, continent: "europe", coords: [55.1694, 23.8813] },
        { name: "Iceland", code: "is", count: 1, continent: "europe", coords: [64.9631, -19.0208] },
        { name: "Malta", code: "mt", count: 1, continent: "europe", coords: [35.9375, 14.3754] },
        { name: "Cyprus", code: "cy", count: 1, continent: "europe", coords: [35.1264, 33.4299] },
        
        // Americas
        { name: "United States", code: "us", count: 22, continent: "americas", coords: [39.8283, -98.5795] },
        { name: "Canada", code: "ca", count: 8, continent: "americas", coords: [56.1304, -106.3468] },
        { name: "Brazil", code: "br", count: 3, continent: "americas", coords: [-14.2350, -51.9253] },
        { name: "Mexico", code: "mx", count: 2, continent: "americas", coords: [23.6345, -102.5528] },
        { name: "Colombia", code: "co", count: 2, continent: "americas", coords: [4.5709, -74.2973] },
        { name: "Argentina", code: "ar", count: 1, continent: "americas", coords: [-38.4161, -63.6167] },
        { name: "Chile", code: "cl", count: 1, continent: "americas", coords: [-35.6751, -71.5430] },
        { name: "Peru", code: "pe", count: 1, continent: "americas", coords: [-9.1900, -75.0152] },
        
        // Asia & Pacific
        { name: "Australia", code: "au", count: 8, continent: "asia", coords: [-25.2744, 133.7751] },
        { name: "Japan", code: "jp", count: 4, continent: "asia", coords: [36.2048, 138.2529] },
        { name: "China", code: "cn", count: 3, continent: "asia", coords: [35.8617, 104.1954] },
        { name: "Singapore", code: "sg", count: 3, continent: "asia", coords: [1.3521, 103.8198] },
        { name: "South Korea", code: "kr", count: 2, continent: "asia", coords: [35.9078, 127.7669] },
        { name: "India", code: "in", count: 2, continent: "asia", coords: [20.5937, 78.9629] },
        { name: "Hong Kong", code: "hk", count: 2, continent: "asia", coords: [22.3193, 114.1694] },
        { name: "Taiwan", code: "tw", count: 1, continent: "asia", coords: [23.6978, 120.9605] },
        { name: "Thailand", code: "th", count: 1, continent: "asia", coords: [15.8700, 100.9925] },
        { name: "Indonesia", code: "id", count: 1, continent: "asia", coords: [-0.7893, 113.9213] },
        { name: "New Zealand", code: "nz", count: 1, continent: "asia", coords: [-40.9006, 174.8860] },
        { name: "Philippines", code: "ph", count: 1, continent: "asia", coords: [12.8797, 121.7740] },
        { name: "Vietnam", code: "vn", count: 1, continent: "asia", coords: [14.0583, 108.2772] },
        
        // Africa & Middle East
        { name: "Israel", code: "il", count: 3, continent: "africa", coords: [31.0461, 34.8516] },
        { name: "South Africa", code: "za", count: 2, continent: "africa", coords: [-30.5595, 22.9375] },
        { name: "UAE", code: "ae", count: 2, continent: "africa", coords: [23.4241, 53.8478] },
        { name: "Turkey", code: "tr", count: 2, continent: "africa", coords: [38.9637, 35.2433] },
        { name: "Morocco", code: "ma", count: 1, continent: "africa", coords: [31.7917, -7.0926] },
        { name: "Egypt", code: "eg", count: 1, continent: "africa", coords: [26.8206, 30.8025] },
        { name: "Kenya", code: "ke", count: 1, continent: "africa", coords: [-0.0236, 37.9062] }
    ],
    
    // ==========================================
    // SECTION 7: MASTER'S UNIVERSITIES (Full Data)
    // ==========================================
    // Fields: name, country, code, count, logo, rank (QS 2025), prestige, fields, highlight, website
    
    topUniversities: [
        // Dutch Universities
        { name: "Maastricht University", country: "Netherlands", code: "nl", count: 121, logo: "maastricht-university.png", rank: 121, fields: ["Life Sciences", "Medicine", "Psychology", "Economics"], website: "https://www.maastrichtuniversity.nl" },
        { name: "Utrecht University", country: "Netherlands", code: "nl", count: 92, logo: "utrecht-university.png", rank: 107, fields: ["Biology", "Chemistry", "Physics", "Medicine"], website: "https://www.uu.nl" },
        { name: "University of Amsterdam", country: "Netherlands", code: "nl", count: 66, logo: "university-of-amsterdam.png", rank: 53, fields: ["Brain & Cognitive Sciences", "Chemistry", "Physics"], website: "https://www.uva.nl" },
        { name: "Leiden University", country: "Netherlands", code: "nl", count: 41, logo: "leiden-university.png", rank: 126, fields: ["Biology", "Chemistry", "Physics", "Astronomy"], website: "https://www.universiteitleiden.nl" },
        { name: "Wageningen University", country: "Netherlands", code: "nl", count: 37, logo: "wageningen-university.png", rank: 81, fields: ["Food Science", "Environmental Science", "Biology"], highlight: "#1 Agriculture", website: "https://www.wur.nl" },
        { name: "Radboud University", country: "Netherlands", code: "nl", count: 36, logo: "radboud-university.png", rank: 127, fields: ["Neuroscience", "Biology", "Chemistry"], website: "https://www.ru.nl" },
        { name: "University of Groningen", country: "Netherlands", code: "nl", count: 23, logo: "university-of-groningen.png", rank: 139, fields: ["Biology", "Chemistry", "Physics", "Astronomy"], website: "https://www.rug.nl" },
        { name: "TU Delft", country: "Netherlands", code: "nl", count: 17, logo: "tu-delft.png", rank: 47, fields: ["Engineering", "Physics", "Computer Science"], highlight: "Top 50 Global", website: "https://www.tudelft.nl" },
        { name: "VU Amsterdam", country: "Netherlands", code: "nl", count: 14, logo: "vrije-universiteit-amsterdam.png", rank: 207, fields: ["Neuroscience", "Biology", "Chemistry"], website: "https://www.vu.nl" },
        { name: "TU Eindhoven", country: "Netherlands", code: "nl", count: 9, logo: "eindhoven-university.png", rank: 113, fields: ["Engineering", "Physics", "Data Science"], website: "https://www.tue.nl" },
        
        // Prestige International (Top 10 World)
        { name: "Imperial College London", country: "United Kingdom", code: "gb", count: 19, logo: "imperial-college-london.png", rank: 2, prestige: true, fields: ["Biology", "Chemistry", "Physics", "Engineering", "Medicine"], website: "https://www.imperial.ac.uk" },
        { name: "ETH Zürich", country: "Switzerland", code: "ch", count: 12, logo: "eth-zurich.png", rank: 7, prestige: true, fields: ["Physics", "Chemistry", "Engineering", "Computer Science"], website: "https://ethz.ch" },
        { name: "University of Cambridge", country: "United Kingdom", code: "gb", count: 8, logo: "university-of-cambridge.png", rank: 5, prestige: true, fields: ["Natural Sciences", "Chemistry", "Physics", "Biology"], website: "https://www.cam.ac.uk" },
        { name: "University of Oxford", country: "United Kingdom", code: "gb", count: 6, logo: "university-of-oxford.png", rank: 3, prestige: true, fields: ["Biochemistry", "Chemistry", "Physics"], website: "https://www.ox.ac.uk" },
        { name: "UCL", country: "United Kingdom", code: "gb", count: 12, logo: "ucl.png", rank: 9, prestige: true, fields: ["Neuroscience", "Biology", "Chemistry", "Medicine"], website: "https://www.ucl.ac.uk" },
        { name: "EPFL", country: "Switzerland", code: "ch", count: 6, logo: "epfl.png", rank: 12, prestige: true, fields: ["Engineering", "Physics", "Computer Science"], website: "https://www.epfl.ch" },
        
        // UK Universities
        { name: "University of Edinburgh", country: "United Kingdom", code: "gb", count: 7, logo: "university-of-edinburgh.png", rank: 27, fields: ["Biology", "Neuroscience", "Chemistry"], website: "https://www.ed.ac.uk" },
        { name: "King's College London", country: "United Kingdom", code: "gb", count: 5, logo: "kings-college-london.png", rank: 40, fields: ["Neuroscience", "Medicine", "Biology"], website: "https://www.kcl.ac.uk" },
        
        // Swedish Universities
        { name: "Uppsala University", country: "Sweden", code: "se", count: 18, logo: "uppsala-university.png", rank: 105, fields: ["Biology", "Chemistry", "Physics", "Medicine"], website: "https://www.uu.se" },
        { name: "Lund University", country: "Sweden", code: "se", count: 10, logo: "lund-university.png", rank: 75, fields: ["Biology", "Physics", "Medicine"], website: "https://www.lu.se" },
        { name: "Karolinska Institutet", country: "Sweden", code: "se", count: 9, logo: "karolinska-institutet.png", rank: 45, fields: ["Medicine", "Biomedical Science", "Neuroscience"], highlight: "Top Medical School", website: "https://ki.se" },
        { name: "Stockholm University", country: "Sweden", code: "se", count: 9, logo: "stockholm-university.png", rank: 152, fields: ["Biology", "Chemistry", "Environmental Science"], website: "https://www.su.se" },
        { name: "KTH Royal Institute", country: "Sweden", code: "se", count: 4, logo: "kth-royal-institute-of-technology.png", rank: 78, fields: ["Engineering", "Physics", "Computer Science"], website: "https://www.kth.se" },
        
        // German Universities
        { name: "TU Munich", country: "Germany", code: "de", count: 7, logo: "tu-munich.png", rank: 37, fields: ["Biology", "Physics", "Engineering"], website: "https://www.tum.de" },
        { name: "Heidelberg University", country: "Germany", code: "de", count: 5, logo: "heidelberg-university.png", rank: 49, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.uni-heidelberg.de" },
        { name: "LMU Munich", country: "Germany", code: "de", count: 4, logo: "lmu-munich.png", rank: 54, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.lmu.de" },
        { name: "Humboldt University Berlin", country: "Germany", code: "de", count: 3, logo: "humboldt-university-of-berlin.png", rank: 120, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.hu-berlin.de" },
        
        // Belgian Universities
        { name: "KU Leuven", country: "Belgium", code: "be", count: 21, logo: "ku-leuven.png", rank: 61, fields: ["Biology", "Chemistry", "Engineering", "Medicine"], website: "https://www.kuleuven.be" },
        { name: "Ghent University", country: "Belgium", code: "be", count: 8, logo: "ghent-university.png", rank: 137, fields: ["Biology", "Chemistry", "Engineering"], website: "https://www.ugent.be" },
        { name: "ULB Brussels", country: "Belgium", code: "be", count: 4, logo: "universite-libre-de-bruxelles.png", rank: 221, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.ulb.be" },
        
        // Other Countries
        { name: "University of Copenhagen", country: "Denmark", code: "dk", count: 12, logo: "university-of-copenhagen.png", rank: 96, fields: ["Biology", "Chemistry", "Neuroscience"], website: "https://www.ku.dk" },
        { name: "University of Vienna", country: "Austria", code: "at", count: 5, logo: "university-of-vienna.png", rank: 130, fields: ["Biology", "Chemistry", "Physics"], website: "https://www.univie.ac.at" },
        { name: "University of Helsinki", country: "Finland", code: "fi", count: 4, logo: "university-of-helsinki.png", rank: 107, fields: ["Biology", "Environmental Science"], website: "https://www.helsinki.fi" },
        { name: "Trinity College Dublin", country: "Ireland", code: "ie", count: 4, logo: "trinity-college-dublin.png", rank: 87, fields: ["Neuroscience", "Biology", "Chemistry"], website: "https://www.tcd.ie" },
        { name: "University of Barcelona", country: "Spain", code: "es", count: 4, logo: "university-of-barcelona.png", rank: 164, fields: ["Biology", "Chemistry", "Environmental Science"], website: "https://www.ub.edu" }
    ],
    
    // ==========================================
    // SECTION 8: MASTER'S BY COUNTRY
    // ==========================================
    
    mastersByCountry: [
        { name: "Netherlands", code: "nl", count: 487 },
        { name: "United Kingdom", code: "gb", count: 97 },  // UK + Scotland
        { name: "Sweden", code: "se", count: 55 },
        { name: "Germany", code: "de", count: 49 },
        { name: "Belgium", code: "be", count: 42 },
        { name: "Spain", code: "es", count: 25 },
        { name: "Switzerland", code: "ch", count: 24 },
        { name: "France", code: "fr", count: 21 },
        { name: "Denmark", code: "dk", count: 21 },
        { name: "Italy", code: "it", count: 21 },
        { name: "Austria", code: "at", count: 10 },
        { name: "United States", code: "us", count: 9 },
        { name: "Finland", code: "fi", count: 7 },
        { name: "Ireland", code: "ie", count: 7 }
    ],
    
    // ==========================================
    // SECTION 9: FIELDS OF STUDY
    // ==========================================
    
    fieldsOfStudy: [
        { name: "Life Sciences & Biology", icon: "dna", count: 262, percent: 31 },
        { name: "Medicine & Health", icon: "heart-pulse", count: 79, percent: 9 },
        { name: "Chemistry", icon: "flask-conical", count: 72, percent: 8 },
        { name: "Environment & Sustainability", icon: "leaf", count: 52, percent: 6 },
        { name: "Physics", icon: "atom", count: 50, percent: 6 },
        { name: "Business & Economics", icon: "trending-up", count: 48, percent: 6 },
        { name: "Neuroscience & Psychology", icon: "brain", count: 42, percent: 5 },
        { name: "Computer Science & AI", icon: "cpu", count: 37, percent: 4 },
        { name: "Other Fields", icon: "book-open", count: 210, percent: 25 }
    ],
    
    // ==========================================
    // SECTION 9B: WORLD TOP 10 UNIVERSITIES (QS 2025)
    // ==========================================
    // MSP alumni presence at world's top-ranked universities
    
    worldTop10: [
        { rank: 1, name: "MIT", fullName: "Massachusetts Institute of Technology", country: "United States", code: "us", mspAlumni: 3, logo: "mit.png" },
        { rank: 2, name: "Imperial College London", fullName: "Imperial College London", country: "United Kingdom", code: "gb", mspAlumni: 19, logo: "imperial-college-london.png" },
        { rank: 3, name: "University of Oxford", fullName: "University of Oxford", country: "United Kingdom", code: "gb", mspAlumni: 6, logo: "university-of-oxford.png" },
        { rank: 4, name: "Harvard University", fullName: "Harvard University", country: "United States", code: "us", mspAlumni: 4, logo: "harvard-university.png" },
        { rank: 5, name: "University of Cambridge", fullName: "University of Cambridge", country: "United Kingdom", code: "gb", mspAlumni: 8, logo: "university-of-cambridge.png" },
        { rank: 6, name: "Stanford University", fullName: "Stanford University", country: "United States", code: "us", mspAlumni: 3, logo: "stanford-university.png" },
        { rank: 7, name: "ETH Zürich", fullName: "ETH Zürich", country: "Switzerland", code: "ch", mspAlumni: 12, logo: "eth-zurich.png" },
        { rank: 8, name: "NUS", fullName: "National University of Singapore", country: "Singapore", code: "sg", mspAlumni: 0, logo: "nus.png" },
        { rank: 9, name: "UCL", fullName: "University College London", country: "United Kingdom", code: "gb", mspAlumni: 12, logo: "ucl.png" },
        { rank: 10, name: "Caltech", fullName: "California Institute of Technology", country: "United States", code: "us", mspAlumni: 0, logo: "caltech.png" }
    ],
    
    // Top Dutch Universities (with rankings)
    topDutchUniversities: [
        { name: "Maastricht University", rank: 121, mspAlumni: 121, logo: "maastricht-university.png", highlight: "Where it all starts" },
        { name: "Utrecht University", rank: 107, mspAlumni: 92, logo: "utrecht-university.png" },
        { name: "University of Amsterdam", rank: 53, mspAlumni: 66, logo: "university-of-amsterdam.png" },
        { name: "Leiden University", rank: 126, mspAlumni: 41, logo: "leiden-university.png" },
        { name: "Wageningen University", rank: 81, mspAlumni: 37, logo: "wageningen-university.png", highlight: "#1 in Agriculture" },
        { name: "Radboud University", rank: 127, mspAlumni: 36, logo: "radboud-university.png" },
        { name: "University of Groningen", rank: 139, mspAlumni: 23, logo: "university-of-groningen.png" },
        { name: "TU Delft", rank: 47, mspAlumni: 17, logo: "tu-delft.png", highlight: "Top 50 globally" }
    ],
    
    // Top International Universities (non-Netherlands)
    topInternationalUniversities: [
        { name: "Imperial College London", country: "United Kingdom", code: "gb", rank: 2, mspAlumni: 19, logo: "imperial-college-london.png" },
        { name: "Uppsala University", country: "Sweden", code: "se", rank: 105, mspAlumni: 18, logo: "uppsala-university.png" },
        { name: "KU Leuven", country: "Belgium", code: "be", rank: 61, mspAlumni: 21, logo: "ku-leuven.png" },
        { name: "ETH Zürich", country: "Switzerland", code: "ch", rank: 7, mspAlumni: 12, logo: "eth-zurich.png" },
        { name: "UCL", country: "United Kingdom", code: "gb", rank: 9, mspAlumni: 12, logo: "ucl.png" },
        { name: "University of Copenhagen", country: "Denmark", code: "dk", rank: 96, mspAlumni: 12, logo: "university-of-copenhagen.png" },
        { name: "Lund University", country: "Sweden", code: "se", rank: 75, mspAlumni: 10, logo: "lund-university.png" },
        { name: "University of Cambridge", country: "United Kingdom", code: "gb", rank: 5, mspAlumni: 8, logo: "university-of-cambridge.png" }
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
    // Note: Links are in Dutch (nl) - international visitors can switch language on UM site
    // This keeps Dutch prospective students comfortable while site remains accessible
    
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
        
        // Legacy (keeping for backward compatibility)
        admissions: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/toelating-en-inschrijving",
        courses: "https://www.maastrichtuniversity.nl/nl/onderwijs/bachelor/programmas/maastricht-science-programme/vakken-en-curriculum",
        linkedin: "https://www.linkedin.com/groups/12472184/"
    },
    
    // ==========================================
    // SECTION 12: RECRUITMENT PAGE DATA
    // ==========================================
    // Data for the "Considering MSP?" page
    // Based on research: 92% of students value alumni testimonials (Unibuddy 2023)
    
    recruitment: {
        
        // Hero section research stat
        heroStat: "92% of prospective students say hearing from alumni helps their decision.",
        
        // Proof bar - key numbers for Gen Z (ROI-focused)
        // Updated with ROA benchmark comparisons (ROA-F-2024/9E)
        proofStats: [
            { number: "91%", label: "Pursue Master's", subtext: "vs 77% UM avg", highlight: true },
            { number: "42%", label: "At QS Top-100", subtext: "universities", highlight: false },
            { number: "146", label: "PhD Candidates", subtext: "15% of alumni", highlight: false },
            { number: "59", label: "Countries", subtext: "on 6 continents", highlight: false }
        ],
        
        // ROA Benchmark Comparisons (Source: ROA-F-2024/9E, September 2024)
        roaBenchmarks: {
            mastersContinuation: { msp: 91, um: 77, label: "Master's Continuation" },
            programmeSatisfaction: { msp: "XX", um: 79, label: "Programme Satisfaction" }, // PLACEHOLDER - update with actual MSP data
            wouldChooseAgain: { msp: "XX", um: 79, label: "Would Choose Same Programme" }, // PLACEHOLDER
            source: "ROA Graduate Survey 2024 (ROA-F-2024/9E)"
        },
        
        // Regional Retention Statistics (PLACEHOLDERS - update with actual data)
        // Methodology: ROA 100km from Maastricht measure
        regionalRetention: {
            within100km: "XX", // PLACEHOLDER: % of alumni within 100km of Maastricht
            inNetherlands: "XX", // PLACEHOLDER: % living in Netherlands
            inLimburg: "XX", // PLACEHOLDER: % in Limburg province
            inEuregio: "XX", // PLACEHOLDER: % in Euregio (NL/BE/DE border region)
            brainGain: "XX", // PLACEHOLDER: # of international students who stayed in NL
            source: "MSP Alumni Database 2025"
        },
        
        // Employer Categories (PLACEHOLDERS - update with actual breakdown)
        employerCategories: [
            { category: "Academia & Research", percent: "XX", icon: "graduation-cap" }, // PLACEHOLDER
            { category: "Healthcare & Pharma", percent: "XX", icon: "heart-pulse" }, // PLACEHOLDER
            { category: "Tech & IT", percent: "XX", icon: "cpu" }, // PLACEHOLDER
            { category: "Finance & Consulting", percent: "XX", icon: "trending-up" }, // PLACEHOLDER
            { category: "Government & NGO", percent: "XX", icon: "landmark" }, // PLACEHOLDER
            { category: "Entrepreneurship", count: "XX", icon: "lightbulb" } // PLACEHOLDER: # of founders/CEOs
        ],
        
        // Top PhD Institutions (PLACEHOLDERS - update with actual data)
        topPhdInstitutions: [
            { name: "Institution 1", count: "XX" }, // PLACEHOLDER
            { name: "Institution 2", count: "XX" }, // PLACEHOLDER
            { name: "Institution 3", count: "XX" }, // PLACEHOLDER
            { name: "Institution 4", count: "XX" }, // PLACEHOLDER
            { name: "Institution 5", count: "XX" }  // PLACEHOLDER
        ],
        
        // Alumni journey cards - anonymized real outcomes
        // Format: year, university, universityLogo, role, outcome, location, icon, companyLogo
        alumniJourneys: [
            {
                year: "'14",
                university: "Cambridge",
                universityLogo: "university-of-cambridge.png",
                role: "Founder & Chair",
                outcome: "Battery Technology Startup",
                location: "United Kingdom",
                icon: "lightbulb",
                companyLogo: null // Add company logo later
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
                role: "PhD Candidate",
                outcome: "Harvard Medical School",
                location: "United States",
                icon: "heart-pulse",
                companyLogo: null
            }
        ],
        
        // Prestige universities - ordered by count
        prestigeUniversities: [
            { name: "KU Leuven", count: 21, logo: "ku-leuven.png" },
            { name: "Imperial College London", count: 19, logo: "imperial-college-london.png" },
            { name: "UCL", count: 13, logo: "ucl.png" },
            { name: "ETH Zürich", count: 12, logo: "eth-zurich.png" },
            { name: "Karolinska Institutet", count: 9, logo: "karolinska-institutet.png" },
            { name: "Cambridge", count: 8, logo: "university-of-cambridge.png" },
            { name: "Edinburgh", count: 7, logo: "university-of-edinburgh.png" },
            { name: "Oxford", count: 6, logo: "university-of-oxford.png" }
        ],
        
        // Career paths with counts
        careerPaths: [
            {
                title: "Research & Science",
                count: "144+",
                icon: "flask-conical",
                examples: ["R&D Scientists", "Lab Researchers", "Research Associates"]
            },
            {
                title: "PhD & Academia",
                count: "146",
                icon: "graduation-cap",
                examples: ["PhD Candidates", "Postdoctoral Fellows", "University Lecturers"]
            },
            {
                title: "Healthcare & Medical",
                count: "64",
                icon: "heart-pulse",
                examples: ["Clinical Researchers", "Medical Writers", "Healthcare Analysts"]
            },
            {
                title: "Industry & Consulting",
                count: "75+",
                icon: "briefcase",
                examples: ["Engineers at ASML", "Strategy Consultants", "Project Managers"]
            }
        ],
        
        // PhD pipeline stats
        phdStats: {
            total: 146,
            percentage: "~11%",
            highlights: [
                { icon: "building-2", text: "PhDs at <strong>MIT, Harvard, Oxford, Cambridge, ETH Zürich</strong>" },
                { icon: "globe", text: "Research positions across <strong>15+ countries</strong>" },
                { icon: "microscope", text: "Fields from <strong>neuroscience to nanotechnology</strong>" },
                { icon: "sparkles", text: "Several now <strong>postdocs and faculty</strong> at leading institutions" }
            ]
        },
        
        // Programme features for "What is MSP" section
        programmeFeatures: [
            {
                title: "Design Your Path",
                icon: "compass",
                description: "Choose from 100+ courses across biology, chemistry, physics, mathematics, and neuroscience to build your unique degree."
            },
            {
                title: "Small-Scale Learning",
                icon: "users",
                description: "Tutorial groups of 12-15 students using Problem-Based Learning. You're not a number — you're part of a community."
            },
            {
                title: "Research Experience",
                icon: "microscope",
                description: "Hands-on lab practicals and a final thesis project. Many students publish before graduating."
            }
        ]
    },
    
    // ==========================================
    // SECTION 13: PRIVACY & LEGAL
    // ==========================================
    // Based on Framework Section 7 and Appendix A
    // GDPR compliant, aligned with UM policies
    
    privacy: {
        lastUpdated: "January 2025",
        
        // Data Controller
        dataController: {
            name: "Maastricht University",
            faculty: "Faculty of Science and Engineering",
            programme: "Maastricht Science Programme",
            address: "P.O. Box 616, 6200 MD Maastricht, The Netherlands"
        },
        
        // Contact emails
        contacts: {
            alumni: "msp-alumni@maastrichtuniversity.nl",
            privacy: "privacy@maastrichtuniversity.nl",
            dpo: "fg@maastrichtuniversity.nl"
        },
        
        // External links
        externalLinks: {
            umPrivacy: "https://www.maastrichtuniversity.nl/privacy",
            dutchDPA: "https://autoriteitpersoonsgegevens.nl"
        },
        
        // Data categories collected
        dataCategories: [
            {
                category: "From UM Student Records",
                items: ["Name and contact details (email, phone, address)", "Date of birth and nationality", "Educational information (programme, graduation date)"]
            },
            {
                category: "Provided Directly by Alumni",
                items: ["Current location", "Career information (employer, job title)", "Post-MSP education (Master's programme, university)", "Communication preferences", "LinkedIn profile (optional)"]
            },
            {
                category: "From Public Sources",
                items: ["Publicly available LinkedIn professional information (with opt-out option)"]
            }
        ],
        
        // Processing purposes
        purposes: [
            { title: "Alumni Engagement", description: "Maintaining contact, sending newsletters, inviting to events" },
            { title: "Statistical Analysis", description: "Understanding alumni outcomes to improve MSP and inform prospective students" },
            { title: "Regional Development", description: "Providing anonymized data on graduate retention for stakeholders" },
            { title: "Recruitment Support", description: "Sharing aggregate success stories with prospective students" },
            { title: "Network Facilitation", description: "Enabling alumni-to-alumni connections (with consent)" }
        ],
        
        // Legal bases
        legalBases: [
            { basis: "Legitimate Interest", article: "Article 6(1)(f) GDPR", description: "Alumni engagement and institutional research are legitimate interests of Maastricht University. We have conducted a balancing test to ensure your rights are protected." },
            { basis: "Consent", article: "Article 6(1)(a) GDPR", description: "For optional activities such as featuring your story publicly, participating in mentorship programmes, or joining WhatsApp groups." }
        ],
        
        // Data subject rights
        rights: [
            { right: "Access", description: "Request a copy of your personal data", response: "Within 30 days" },
            { right: "Rectification", description: "Correct inaccurate or incomplete data", response: "Immediately upon verification" },
            { right: "Erasure", description: "Request deletion of your data (with some exceptions)", response: "Honored unless legal retention required" },
            { right: "Restriction", description: "Limit how we process your data", response: "Implemented pending resolution" },
            { right: "Portability", description: "Receive your data in a structured format", response: "CSV/JSON format" },
            { right: "Object", description: "Object to processing based on legitimate interest", response: "Balanced against legitimate interests" },
            { right: "Withdraw Consent", description: "Withdraw previously given consent at any time", response: "Processed immediately" }
        ],
        
        // What we share
        dataSharing: [
            { recipient: "Maastricht University Central Services", details: "Alumni Office, Marketing & Communications" },
            { recipient: "Research Partners", details: "Only anonymized/aggregated data for academic research" },
            { recipient: "Technical Service Providers", details: "Website hosting, email services (EU-based only)" }
        ],
        
        // What we never do
        neverDo: [
            "Sell your personal data to anyone",
            "Share your contact details without your permission",
            "Display your name, photo, or story publicly without explicit consent",
            "Send you spam or irrelevant marketing",
            "Use tracking cookies or share data with advertising networks"
        ],
        
        // Retention periods
        retention: [
            { dataType: "Degree Records", period: "30 years minimum", reason: "Public Records Act (Archiefwet)" },
            { dataType: "Contact Information", period: "Until deletion requested", reason: "Ongoing alumni relationship" },
            { dataType: "Career Outcome Data", period: "Indefinitely (anonymizable on request)", reason: "Longitudinal research value" },
            { dataType: "Event Registrations", period: "5 years", reason: "Administrative records" },
            { dataType: "Survey Responses", period: "Indefinitely (anonymizable on request)", reason: "Research and improvement" },
            { dataType: "Communication Logs", period: "2 years", reason: "Service quality" },
            { dataType: "Opt-out Records", period: "Indefinitely", reason: "Legal compliance" }
        ],
        
        // Security measures
        security: [
            "Access restricted to authorized MSP staff only",
            "Secure, encrypted connections (HTTPS)",
            "EU-based hosting",
            "Regular security reviews",
            "Data minimization principles applied"
        ],
        
        // Cookies
        cookies: {
            essential: "Required for website functionality",
            analytics: "Privacy-friendly analytics only — no personal data collected",
            tracking: "We do NOT use tracking cookies or advertising cookies"
        }
    }
};

// ==========================================
// HELPER FUNCTIONS (Don't modify these)
// ==========================================

// Get percentage of alumni in a country
function getCountryPercentage(countryCount) {
    const knownLocations = MSP_DATA.countriesLiving.reduce((sum, c) => sum + c.count, 0);
    return Math.round((countryCount / knownLocations) * 100);
}

// Get total alumni with known Master's
function getTotalWithMasters() {
    return MSP_DATA.fieldsOfStudy.reduce((sum, f) => sum + f.count, 0);
}

// Format number with commas
function formatNumber(num) {
    return num.toLocaleString();
}

// Calculate growth rate
function getGrowthRate() {
    const years = MSP_DATA.graduationByYear;
    const recent = years[years.length - 1].count;
    const earlier = years[years.length - 4].count;
    return Math.round(((recent - earlier) / earlier) * 100);
}

// ==========================================
// SECTION 12: UNIVERSITY LOGOS LOOKUP
// ==========================================
// Maps university names to logo filenames in assets/logos/
// Add new logos here as you upload them

const UNIVERSITY_LOGOS = {
    // Netherlands
    "Maastricht University": "maastricht-university.png",
    "Utrecht University": "utrecht-university.png",
    "University of Amsterdam": "university-of-amsterdam.png",
    "Leiden University": "leiden-university.png",
    "Wageningen University": "wageningen-university.png",
    "Radboud University": "radboud-university.png",
    "University of Groningen": "university-of-groningen.png",
    "TU Delft": "tu-delft.png",
    "VU Amsterdam": "vrije-universiteit-amsterdam.png",
    "TU Eindhoven": "eindhoven-university.png",
    "Erasmus University Rotterdam": "erasmus-university.png",
    "University of Twente": "university-of-twente.png",
    
    // United Kingdom
    "Imperial College London": "imperial-college-london.png",
    "University of Cambridge": "university-of-cambridge.png",
    "University of Oxford": "university-of-oxford.png",
    "University College London": "ucl.png",
    "UCL": "ucl.png",
    "University of Edinburgh": "university-of-edinburgh.png",
    "University of Birmingham": "university-of-birmingham.png",
    "King's College London": "kings-college-london.png",
    
    // Switzerland
    "ETH Zürich": "eth-zurich.png",
    "ETH Zurich": "eth-zurich.png",
    "University of Zurich": "university-of-zurich.png",
    "University of Basel": "university-of-basel.png",
    "EPFL": "epfl.png",
    "University of Geneva": "university-of-geneva.png",
    
    // Belgium
    "KU Leuven": "ku-leuven.png",
    "Ghent University": "ghent-university.png",
    "Université Libre de Bruxelles": "universite-libre-de-bruxelles.png",
    "Vrije Universiteit Brussel": "vrije-universiteit-brussel.jpg",
    "University of Antwerp": "university-of-antwerp.png",
    
    // Sweden
    "Uppsala University": "uppsala-university.png",
    "Lund University": "lund-university.png",
    "Karolinska Institutet": "karolinska-institutet.png",
    "Stockholm University": "stockholm-university.png",
    "KTH Royal Institute of Technology": "kth-royal-institute-of-technology.png",
    
    // Germany
    "TU Munich": "technical-university-of-munich.png",
    "Technical University of Munich": "technical-university-of-munich.png",
    "Humboldt University of Berlin": "humboldt-university-of-berlin.png",
    "University of Cologne": "university-of-cologne.png",
    "TU Wien": "tu-wien.png",
    "Ludwig Maximilian University": "ludwig-maximilian-university.png",
    "Heidelberg University": "heidelberg-university.png",
    "University of Freiburg": "university-of-freiburg.png",
    
    // Denmark
    "University of Copenhagen": "university-of-copenhagen.png",
    "Copenhagen Business School": "copenhagen-business-school.png",
    "Technical University of Denmark": "technical-university-of-denmark.png",
    
    // France
    "Sorbonne University": "sorbonne-university.png",
    "Paris-Saclay University": "paris-saclay-university.png",
    "Sciences Po Paris": "sciences-po-paris.png",
    "École Normale Supérieure": "ecole-normale-superieure.png",
    "Université Grenoble Alpes": "universite-grenoble-alpes.png",
    
    // Spain
    "Pompeu Fabra University": "pompeu-fabra-university.jpg",
    "University of Barcelona": "university-of-barcelona.png",
    "Autonomous University of Barcelona": "autonomous-university-barcelona.png",
    "Autonomous University of Madrid": "autonomous-university-madrid.png",
    
    // Italy
    "University of Bologna": "university-of-bologna.png",
    "University of Pavia": "university-of-pavia.png",
    "University of Milan": "university-of-milan.png",
    "Polytechnic University of Milan": "polytechnic-university-milan.png",
    
    // Austria
    "University of Vienna": "university-of-vienna.png",
    "Medical University of Vienna": "medical-university-vienna.png",
    
    // Finland
    "University of Helsinki": "university-of-helsinki.png",
    "Aalto University": "aalto-university.png",
    "University of Turku": "university-of-turku.png",
    
    // Ireland
    "Trinity College Dublin": "trinity-college-dublin.png",
    "University College Dublin": "university-college-dublin.png",
    "University College Cork": "university-college-cork.png",
    
    // USA
    "Harvard University": "harvard-university.png",
    "MIT": "mit.png",
    "Stanford University": "stanford-university.png",
    "Columbia University": "columbia-university.png",
    "UC Berkeley": "uc-berkeley.png",
    "Yale University": "yale-university.png",
    
    // Canada
    "University of Toronto": "university-of-toronto.png",
    "McGill University": "mcgill-university.png",
    "University of British Columbia": "university-of-british-columbia.png",
    
    // Australia
    "University of Sydney": "university-of-sydney.png",
    "University of Melbourne": "university-of-melbourne.png",
    "University of Western Australia": "university-of-western-australia.png",
    
    // Other European
    "University of Luxembourg": "university-of-luxembourg.png",
    "University of Lisbon": "university-of-lisbon.png",
    "NOVA University Lisbon": "nova-university-lisbon.png",
    "University of Porto": "university-of-porto.png",
    "University of Oslo": "university-of-oslo.png",
    "Norwegian University of Science and Technology": "ntnu.png",
    "National and Kapodistrian University of Athens": "university-of-athens.png",
    "Aristotle University of Thessaloniki": "aristotle-university-thessaloniki.png",
    
    // MSP/UM logos (for special use)
    "MSP": "msp-logo.png",
    "MSP Alumni": "maastricht-science-programme-logo.png"
};

// Helper function to get logo path
function getUniversityLogo(uniName) {
    const logo = UNIVERSITY_LOGOS[uniName];
    return logo ? `assets/logos/${logo}` : null;
}

// ==========================================
// SECTION 13: DETAILED COUNTRY DATA
// ==========================================

const COUNTRY_DETAILS = {
    "Netherlands": {
        "code": "nl",
        "name": "Netherlands",
        "count": 445,
        "coords": [52.1326, 5.2913],
        "cities": [
            {"name": "Maastricht", "count": 103},
            {"name": "Amsterdam", "count": 92},
            {"name": "Utrecht", "count": 71},
            {"name": "Leiden", "count": 34},
            {"name": "Groningen", "count": 18},
            {"name": "Wageningen", "count": 18},
            {"name": "Nijmegen", "count": 11},
            {"name": "Eindhoven", "count": 10}
        ],
        "universities": [
            {"name": "Maastricht University", "count": 121},
            {"name": "Utrecht University", "count": 92},
            {"name": "University of Amsterdam", "count": 66},
            {"name": "Leiden University", "count": 41},
            {"name": "Wageningen University", "count": 37},
            {"name": "Radboud University", "count": 36},
            {"name": "University of Groningen", "count": 23},
            {"name": "TU Delft", "count": 17},
            {"name": "VU Amsterdam", "count": 14},
            {"name": "TU Eindhoven", "count": 9},
            {"name": "Erasmus University Rotterdam", "count": 8},
            {"name": "University of Twente", "count": 6}
        ],
        "graduationYears": {"2014": 5, "2015": 10, "2016": 22, "2017": 22, "2018": 19, "2019": 24, "2020": 40, "2021": 50, "2022": 52, "2023": 63, "2024": 65, "2025": 73},
        "gender": {"Female": 265, "Male": 180},
        "nationalities": [
            {"name": "Dutch", "code": "nl", "count": 138},
            {"name": "German", "code": "de", "count": 43},
            {"name": "Belgian", "code": "be", "count": 34},
            {"name": "Italian", "code": "it", "count": 26},
            {"name": "British", "code": "gb", "count": 17},
            {"name": "Spanish", "code": "es", "count": 17}
        ]
    },
    "Germany": {
        "code": "de",
        "name": "Germany",
        "count": 92,
        "coords": [51.1657, 10.4515],
        "cities": [
            {"name": "Munich", "count": 22},
            {"name": "Berlin", "count": 20},
            {"name": "Hamburg", "count": 5},
            {"name": "Cologne", "count": 4},
            {"name": "Tübingen", "count": 4},
            {"name": "Freiburg", "count": 3},
            {"name": "Frankfurt", "count": 3},
            {"name": "Heidelberg", "count": 3}
        ],
        "universities": [
            {"name": "TU Munich", "count": 7},
            {"name": "Humboldt University of Berlin", "count": 5},
            {"name": "University of Cologne", "count": 4},
            {"name": "Ludwig Maximilian University", "count": 4},
            {"name": "Heidelberg University", "count": 3},
            {"name": "University of Freiburg", "count": 3}
        ],
        "graduationYears": {"2014": 4, "2015": 11, "2016": 8, "2017": 4, "2018": 10, "2019": 6, "2020": 4, "2021": 9, "2022": 8, "2023": 13, "2024": 6, "2025": 9},
        "gender": {"Female": 62, "Male": 30},
        "nationalities": [
            {"name": "German", "code": "de", "count": 42},
            {"name": "Dutch", "code": "nl", "count": 7},
            {"name": "Belgian", "code": "be", "count": 6},
            {"name": "Italian", "code": "it", "count": 6},
            {"name": "Luxembourgish", "code": "lu", "count": 4},
            {"name": "Romanian", "code": "ro", "count": 3}
        ]
    },
    "United Kingdom": {
        "code": "gb",
        "name": "United Kingdom",
        "count": 81,
        "coords": [54.5, -2.5],
        "cities": [
            {"name": "London", "count": 35},
            {"name": "Edinburgh", "count": 6},
            {"name": "Oxford", "count": 6},
            {"name": "Cambridge", "count": 4},
            {"name": "Liverpool", "count": 3},
            {"name": "Glasgow", "count": 3},
            {"name": "Birmingham", "count": 3}
        ],
        "universities": [
            {"name": "Imperial College London", "count": 19},
            {"name": "University College London", "count": 12},
            {"name": "University of Cambridge", "count": 8},
            {"name": "University of Edinburgh", "count": 7},
            {"name": "University of Oxford", "count": 6},
            {"name": "University of Birmingham", "count": 4},
            {"name": "King's College London", "count": 3}
        ],
        "graduationYears": {"2015": 7, "2016": 6, "2017": 7, "2018": 9, "2019": 9, "2020": 7, "2021": 8, "2022": 8, "2023": 6, "2024": 10, "2025": 4},
        "gender": {"Female": 48, "Male": 33},
        "nationalities": [
            {"name": "British", "code": "gb", "count": 26},
            {"name": "Dutch", "code": "nl", "count": 11},
            {"name": "German", "code": "de", "count": 10},
            {"name": "Italian", "code": "it", "count": 8},
            {"name": "Spanish", "code": "es", "count": 4},
            {"name": "Belgian", "code": "be", "count": 3}
        ]
    },
    "Belgium": {
        "code": "be",
        "name": "Belgium",
        "count": 68,
        "coords": [50.5039, 4.4699],
        "cities": [
            {"name": "Brussels", "count": 33},
            {"name": "Leuven", "count": 13},
            {"name": "Ghent", "count": 4},
            {"name": "Antwerp", "count": 4},
            {"name": "Liège", "count": 2}
        ],
        "universities": [
            {"name": "KU Leuven", "count": 21},
            {"name": "Ghent University", "count": 8},
            {"name": "Université Libre de Bruxelles", "count": 5},
            {"name": "Vrije Universiteit Brussel", "count": 4},
            {"name": "University of Antwerp", "count": 3}
        ],
        "graduationYears": {"2014": 3, "2015": 2, "2016": 5, "2017": 7, "2018": 2, "2019": 6, "2020": 6, "2021": 14, "2022": 5, "2023": 7, "2024": 4, "2025": 7},
        "gender": {"Female": 36, "Male": 32},
        "nationalities": [
            {"name": "Belgian", "code": "be", "count": 28},
            {"name": "Italian", "code": "it", "count": 6},
            {"name": "Dutch", "code": "nl", "count": 5},
            {"name": "German", "code": "de", "count": 4},
            {"name": "Spanish", "code": "es", "count": 3},
            {"name": "Luxembourgish", "code": "lu", "count": 3}
        ]
    },
    "Sweden": {
        "code": "se",
        "name": "Sweden",
        "count": 49,
        "coords": [62.0, 15.0],
        "cities": [
            {"name": "Stockholm", "count": 17},
            {"name": "Uppsala", "count": 17},
            {"name": "Lund", "count": 8},
            {"name": "Gothenburg", "count": 2}
        ],
        "universities": [
            {"name": "Uppsala University", "count": 18},
            {"name": "Lund University", "count": 10},
            {"name": "Karolinska Institutet", "count": 9},
            {"name": "Stockholm University", "count": 9},
            {"name": "KTH Royal Institute of Technology", "count": 5}
        ],
        "graduationYears": {"2014": 1, "2016": 1, "2017": 1, "2018": 1, "2019": 2, "2020": 5, "2021": 4, "2022": 9, "2023": 4, "2024": 14, "2025": 7},
        "gender": {"Female": 27, "Male": 22},
        "nationalities": [
            {"name": "German", "code": "de", "count": 11},
            {"name": "Dutch", "code": "nl", "count": 8},
            {"name": "Belgian", "code": "be", "count": 6},
            {"name": "Italian", "code": "it", "count": 4},
            {"name": "Polish", "code": "pl", "count": 3}
        ]
    },
    "Switzerland": {
        "code": "ch",
        "name": "Switzerland",
        "count": 39,
        "coords": [46.8182, 8.2275],
        "cities": [
            {"name": "Zürich", "count": 21},
            {"name": "Basel", "count": 4},
            {"name": "Lausanne", "count": 4},
            {"name": "Geneva", "count": 2},
            {"name": "Bern", "count": 2}
        ],
        "universities": [
            {"name": "ETH Zürich", "count": 12},
            {"name": "University of Zurich", "count": 6},
            {"name": "University of Basel", "count": 4},
            {"name": "EPFL", "count": 3},
            {"name": "University of Geneva", "count": 2}
        ],
        "graduationYears": {"2014": 2, "2015": 1, "2016": 2, "2017": 4, "2019": 5, "2021": 6, "2022": 2, "2023": 1, "2024": 7, "2025": 9},
        "gender": {"Female": 29, "Male": 10},
        "nationalities": [
            {"name": "German", "code": "de", "count": 8},
            {"name": "Italian", "code": "it", "count": 5},
            {"name": "Swiss", "code": "ch", "count": 4},
            {"name": "Belgian", "code": "be", "count": 4},
            {"name": "French", "code": "fr", "count": 3},
            {"name": "Dutch", "code": "nl", "count": 3}
        ]
    },
    "Spain": {
        "code": "es",
        "name": "Spain",
        "count": 29,
        "coords": [40.4637, -3.7492],
        "cities": [
            {"name": "Barcelona", "count": 20},
            {"name": "Madrid", "count": 4}
        ],
        "universities": [
            {"name": "Pompeu Fabra University", "count": 8},
            {"name": "University of Barcelona", "count": 6},
            {"name": "Autonomous University of Barcelona", "count": 4},
            {"name": "Autonomous University of Madrid", "count": 3}
        ],
        "graduationYears": {"2014": 2, "2015": 1, "2017": 5, "2018": 1, "2019": 3, "2020": 3, "2021": 2, "2022": 2, "2023": 2, "2024": 5, "2025": 3},
        "gender": {"Male": 16, "Female": 13},
        "nationalities": [
            {"name": "Spanish", "code": "es", "count": 12},
            {"name": "Italian", "code": "it", "count": 7},
            {"name": "German", "code": "de", "count": 2},
            {"name": "British", "code": "gb", "count": 2}
        ]
    },
    "Italy": {
        "code": "it",
        "name": "Italy",
        "count": 27,
        "coords": [41.8719, 12.5674],
        "cities": [
            {"name": "Milan", "count": 9},
            {"name": "Genoa", "count": 4},
            {"name": "Bologna", "count": 4},
            {"name": "Rome", "count": 2}
        ],
        "universities": [
            {"name": "University of Bologna", "count": 5},
            {"name": "University of Pavia", "count": 4},
            {"name": "University of Milan", "count": 3},
            {"name": "Polytechnic University of Milan", "count": 3}
        ],
        "graduationYears": {"2014": 1, "2016": 2, "2017": 2, "2018": 2, "2019": 2, "2020": 6, "2021": 2, "2022": 4, "2024": 3, "2025": 3},
        "gender": {"Female": 20, "Male": 7},
        "nationalities": [
            {"name": "Italian", "code": "it", "count": 16},
            {"name": "Dutch", "code": "nl", "count": 2}
        ]
    },
    "France": {
        "code": "fr",
        "name": "France",
        "count": 25,
        "coords": [46.6, 2.3],
        "cities": [
            {"name": "Paris", "count": 17},
            {"name": "Grenoble", "count": 2}
        ],
        "universities": [
            {"name": "Sorbonne University", "count": 6},
            {"name": "Paris-Saclay University", "count": 5},
            {"name": "Sciences Po Paris", "count": 4},
            {"name": "École Normale Supérieure", "count": 3},
            {"name": "Université Grenoble Alpes", "count": 2}
        ],
        "graduationYears": {"2015": 2, "2020": 5, "2021": 2, "2022": 4, "2023": 3, "2024": 6, "2025": 3},
        "gender": {"Female": 17, "Male": 8},
        "nationalities": [
            {"name": "French", "code": "fr", "count": 7},
            {"name": "Japanese", "code": "jp", "count": 3},
            {"name": "German", "code": "de", "count": 2},
            {"name": "Croatian", "code": "hr", "count": 2}
        ]
    },
    "Denmark": {
        "code": "dk",
        "name": "Denmark",
        "count": 22,
        "coords": [56.0, 10.0],
        "cities": [
            {"name": "Copenhagen", "count": 19}
        ],
        "universities": [
            {"name": "University of Copenhagen", "count": 12},
            {"name": "Technical University of Denmark", "count": 5},
            {"name": "Copenhagen Business School", "count": 3}
        ],
        "graduationYears": {"2016": 1, "2017": 1, "2019": 1, "2020": 4, "2021": 1, "2022": 1, "2023": 6, "2024": 2, "2025": 5},
        "gender": {"Female": 14, "Male": 8},
        "nationalities": [
            {"name": "German", "code": "de", "count": 5},
            {"name": "Dutch", "code": "nl", "count": 4},
            {"name": "Belgian", "code": "be", "count": 4},
            {"name": "Luxembourgish", "code": "lu", "count": 3},
            {"name": "Danish", "code": "dk", "count": 2},
            {"name": "Polish", "code": "pl", "count": 2}
        ]
    },
    "United States": {
        "code": "us",
        "name": "United States",
        "count": 22,
        "coords": [39.8283, -98.5795],
        "cities": [
            {"name": "Boston", "count": 5},
            {"name": "San Francisco", "count": 2},
            {"name": "New York", "count": 2}
        ],
        "universities": [
            {"name": "Harvard University", "count": 4},
            {"name": "MIT", "count": 3},
            {"name": "Stanford University", "count": 3},
            {"name": "Columbia University", "count": 2},
            {"name": "UC Berkeley", "count": 2},
            {"name": "Yale University", "count": 2}
        ],
        "graduationYears": {"2017": 1, "2018": 1, "2019": 1, "2020": 2, "2021": 1, "2022": 4, "2023": 9, "2024": 3},
        "gender": {"Female": 13, "Male": 9},
        "nationalities": [
            {"name": "Indian", "code": "in", "count": 3},
            {"name": "Dutch", "code": "nl", "count": 3},
            {"name": "American", "code": "us", "count": 3},
            {"name": "German", "code": "de", "count": 2},
            {"name": "Polish", "code": "pl", "count": 2},
            {"name": "Irish", "code": "ie", "count": 2}
        ]
    },
    "Austria": {
        "code": "at",
        "name": "Austria",
        "count": 18,
        "coords": [47.5162, 14.5501],
        "cities": [
            {"name": "Vienna", "count": 16}
        ],
        "universities": [
            {"name": "University of Vienna", "count": 8},
            {"name": "TU Wien", "count": 5},
            {"name": "Medical University of Vienna", "count": 3}
        ],
        "graduationYears": {"2015": 2, "2018": 2, "2020": 2, "2022": 4, "2023": 4, "2024": 4},
        "gender": {"Female": 10, "Male": 8},
        "nationalities": [
            {"name": "German", "code": "de", "count": 6},
            {"name": "Turkish", "code": "tr", "count": 3},
            {"name": "Belgian", "code": "be", "count": 2}
        ]
    },
    "Finland": {
        "code": "fi",
        "name": "Finland",
        "count": 17,
        "coords": [64.0, 26.0],
        "cities": [
            {"name": "Helsinki", "count": 16}
        ],
        "universities": [
            {"name": "University of Helsinki", "count": 10},
            {"name": "Aalto University", "count": 4},
            {"name": "University of Turku", "count": 2}
        ],
        "graduationYears": {"2014": 1, "2017": 3, "2018": 2, "2020": 1, "2021": 1, "2022": 4, "2023": 1, "2024": 3, "2025": 1},
        "gender": {"Female": 10, "Male": 7},
        "nationalities": [
            {"name": "Finnish", "code": "fi", "count": 7},
            {"name": "Dutch", "code": "nl", "count": 4}
        ]
    },
    "Ireland": {
        "code": "ie",
        "name": "Ireland",
        "count": 9,
        "coords": [53.4129, -8.2439],
        "cities": [
            {"name": "Dublin", "count": 6},
            {"name": "Cork", "count": 2}
        ],
        "universities": [
            {"name": "Trinity College Dublin", "count": 4},
            {"name": "University College Dublin", "count": 3},
            {"name": "University College Cork", "count": 2}
        ],
        "graduationYears": {"2015": 1, "2017": 1, "2020": 3, "2021": 1, "2023": 1, "2024": 1, "2025": 1},
        "gender": {"Female": 7, "Male": 2},
        "nationalities": [
            {"name": "Belgian", "code": "be", "count": 2}
        ]
    },
    "Luxembourg": {
        "code": "lu",
        "name": "Luxembourg",
        "count": 9,
        "coords": [49.8153, 6.1296],
        "cities": [
            {"name": "Luxembourg City", "count": 7}
        ],
        "universities": [
            {"name": "University of Luxembourg", "count": 7}
        ],
        "graduationYears": {"2018": 1, "2020": 4, "2021": 2, "2022": 1, "2023": 1},
        "gender": {"Female": 7, "Male": 2},
        "nationalities": [
            {"name": "Luxembourgish", "code": "lu", "count": 4},
            {"name": "Greek", "code": "gr", "count": 2}
        ]
    },
    "Australia": {
        "code": "au",
        "name": "Australia",
        "count": 8,
        "coords": [-25.2744, 133.7751],
        "cities": [
            {"name": "Sydney", "count": 2},
            {"name": "Perth", "count": 2}
        ],
        "universities": [
            {"name": "University of Sydney", "count": 3},
            {"name": "University of Melbourne", "count": 2},
            {"name": "University of Western Australia", "count": 2}
        ],
        "graduationYears": {"2017": 2, "2021": 3, "2024": 1, "2025": 2},
        "gender": {"Male": 5, "Female": 3},
        "nationalities": [
            {"name": "Australian", "code": "au", "count": 2}
        ]
    },
    "Canada": {
        "code": "ca",
        "name": "Canada",
        "count": 8,
        "coords": [56.1304, -106.3468],
        "cities": [
            {"name": "Toronto", "count": 4}
        ],
        "universities": [
            {"name": "University of Toronto", "count": 4},
            {"name": "McGill University", "count": 2},
            {"name": "University of British Columbia", "count": 2}
        ],
        "graduationYears": {"2014": 1, "2015": 1, "2017": 2, "2018": 1, "2019": 1, "2020": 1, "2025": 1},
        "gender": {"Female": 5, "Male": 3},
        "nationalities": [
            {"name": "Dutch", "code": "nl", "count": 2},
            {"name": "British", "code": "gb", "count": 2}
        ]
    },
    "Portugal": {
        "code": "pt",
        "name": "Portugal",
        "count": 7,
        "coords": [39.3999, -8.2245],
        "cities": [
            {"name": "Lisbon", "count": 4}
        ],
        "universities": [
            {"name": "University of Lisbon", "count": 3},
            {"name": "NOVA University Lisbon", "count": 2},
            {"name": "University of Porto", "count": 2}
        ],
        "graduationYears": {"2016": 1, "2020": 1, "2021": 2, "2023": 2, "2025": 1},
        "gender": {"Male": 4, "Female": 3},
        "nationalities": [
            {"name": "Bulgarian", "code": "bg", "count": 2},
            {"name": "Belgian", "code": "be", "count": 2}
        ]
    },
    "Norway": {
        "code": "no",
        "name": "Norway",
        "count": 7,
        "coords": [64.0, 10.0],
        "cities": [
            {"name": "Oslo", "count": 4}
        ],
        "universities": [
            {"name": "University of Oslo", "count": 4},
            {"name": "Norwegian University of Science and Technology", "count": 2}
        ],
        "graduationYears": {"2015": 1, "2018": 1, "2019": 1, "2023": 4},
        "gender": {"Female": 6, "Male": 1},
        "nationalities": [
            {"name": "Dutch", "code": "nl", "count": 2},
            {"name": "Norwegian", "code": "no", "count": 2}
        ]
    },
    "Greece": {
        "code": "gr",
        "name": "Greece",
        "count": 5,
        "coords": [39.0742, 21.8243],
        "cities": [
            {"name": "Athens", "count": 3},
            {"name": "Thessaloniki", "count": 2}
        ],
        "universities": [
            {"name": "National and Kapodistrian University of Athens", "count": 3},
            {"name": "Aristotle University of Thessaloniki", "count": 2}
        ],
        "graduationYears": {"2021": 2, "2022": 1, "2023": 1, "2025": 1},
        "gender": {"Female": 4, "Male": 1},
        "nationalities": [
            {"name": "Greek", "code": "gr", "count": 4}
        ]
    }
};

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MSP_DATA, COUNTRY_DETAILS, getCountryPercentage, getTotalWithMasters, formatNumber, getGrowthRate };
}
