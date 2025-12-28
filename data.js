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
    // SECTION 6: WHERE ALUMNI LIVE NOW
    // ==========================================
    
    countriesLiving: [
        { name: "Netherlands", code: "nl", count: 445, coords: [52.1326, 5.2913] },
        { name: "Germany", code: "de", count: 92, coords: [51.1657, 10.4515] },
        { name: "United Kingdom", code: "gb", count: 81, coords: [54.5, -2.5] },  // UK + Scotland
        { name: "Belgium", code: "be", count: 68, coords: [50.5039, 4.4699] },
        { name: "Sweden", code: "se", count: 49, coords: [62.0, 15.0] },
        { name: "Switzerland", code: "ch", count: 39, coords: [46.8182, 8.2275] },
        { name: "Spain", code: "es", count: 29, coords: [40.4637, -3.7492] },
        { name: "Italy", code: "it", count: 27, coords: [41.8719, 12.5674] },
        { name: "France", code: "fr", count: 25, coords: [46.6, 2.3] },
        { name: "United States", code: "us", count: 22, coords: [39.8283, -98.5795] },
        { name: "Denmark", code: "dk", count: 22, coords: [56.0, 10.0] },
        { name: "Austria", code: "at", count: 18, coords: [47.5162, 14.5501] },
        { name: "Finland", code: "fi", count: 17, coords: [64.0, 26.0] },
        { name: "Ireland", code: "ie", count: 9, coords: [53.4129, -8.2439] },
        { name: "Luxembourg", code: "lu", count: 9, coords: [49.8153, 6.1296] },
        { name: "Canada", code: "ca", count: 8, coords: [56.1304, -106.3468] },
        { name: "Australia", code: "au", count: 8, coords: [-25.2744, 133.7751] },
        { name: "Portugal", code: "pt", count: 7, coords: [39.3999, -8.2245] },
        { name: "Norway", code: "no", count: 7, coords: [64.0, 10.0] },
        { name: "Greece", code: "gr", count: 5, coords: [39.0742, 21.8243] },
        { name: "Japan", code: "jp", count: 4, coords: [36.2048, 138.2529] }
    ],
    
    // ==========================================
    // SECTION 7: MASTER'S UNIVERSITIES
    // ==========================================
    
    topUniversities: [
        // Dutch Universities
        { name: "Maastricht University", country: "Netherlands", code: "nl", count: 121, logo: "maastricht-university.png" },
        { name: "Utrecht University", country: "Netherlands", code: "nl", count: 92, logo: "utrecht-university.png" },
        { name: "University of Amsterdam", country: "Netherlands", code: "nl", count: 66, logo: "university-of-amsterdam.png" },
        { name: "Leiden University", country: "Netherlands", code: "nl", count: 41, logo: "leiden-university.png" },
        { name: "Wageningen University", country: "Netherlands", code: "nl", count: 37, logo: "wageningen-university.png" },
        { name: "Radboud University", country: "Netherlands", code: "nl", count: 36, logo: "radboud-university.png" },
        { name: "University of Groningen", country: "Netherlands", code: "nl", count: 23, logo: "university-of-groningen.png" },
        { name: "TU Delft", country: "Netherlands", code: "nl", count: 17, logo: "tu-delft.png" },
        { name: "VU Amsterdam", country: "Netherlands", code: "nl", count: 14, logo: "vu-amsterdam.png" },
        { name: "TU Eindhoven", country: "Netherlands", code: "nl", count: 9, logo: "tu-eindhoven.png" },
        
        // Prestige International
        { name: "Imperial College London", country: "United Kingdom", code: "gb", count: 19, logo: "imperial-college-london.png", prestige: true },
        { name: "ETH Zürich", country: "Switzerland", code: "ch", count: 12, logo: "eth-zurich.png", prestige: true },
        { name: "University of Cambridge", country: "United Kingdom", code: "gb", count: 8, logo: "university-of-cambridge.png", prestige: true },
        { name: "University of Oxford", country: "United Kingdom", code: "gb", count: 6, logo: "university-of-oxford.png", prestige: true },
        
        // Other Top International
        { name: "KU Leuven", country: "Belgium", code: "be", count: 21, logo: "ku-leuven.png" },
        { name: "Uppsala University", country: "Sweden", code: "se", count: 18, logo: "uppsala-university.png" },
        { name: "University of Copenhagen", country: "Denmark", code: "dk", count: 12, logo: "university-of-copenhagen.png" },
        { name: "University College London", country: "United Kingdom", code: "gb", count: 12, logo: "ucl.png" },
        { name: "Lund University", country: "Sweden", code: "se", count: 10, logo: "lund-university.png" },
        { name: "Karolinska Institutet", country: "Sweden", code: "se", count: 9, logo: "karolinska-institutet.png" },
        { name: "Stockholm University", country: "Sweden", code: "se", count: 9, logo: "stockholm-university.png" },
        { name: "University of Edinburgh", country: "United Kingdom", code: "gb", count: 7, logo: "university-of-edinburgh.png" },
        { name: "TU Munich", country: "Germany", code: "de", count: 7, logo: "tu-munich.png" }
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
        { name: "Life Sciences & Biology", icon: "🧬", count: 262, percent: 31 },
        { name: "Medicine & Health", icon: "🏥", count: 79, percent: 9 },
        { name: "Chemistry", icon: "⚗️", count: 72, percent: 8 },
        { name: "Environment & Sustainability", icon: "🌍", count: 52, percent: 6 },
        { name: "Physics", icon: "⚛️", count: 50, percent: 6 },
        { name: "Business & Economics", icon: "📊", count: 48, percent: 6 },
        { name: "Neuroscience & Psychology", icon: "🧠", count: 42, percent: 5 },
        { name: "Computer Science & AI", icon: "💻", count: 37, percent: 4 },
        { name: "Other Fields", icon: "📚", count: 210, percent: 25 }
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
        mspMain: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme",
        admissions: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/admission-application",
        courses: "https://www.maastrichtuniversity.nl/education/bachelor/programmes/maastricht-science-programme/courses-and-curriculum",
        courseRepository: "https://courserepository.maastrichtuniversity.nl/p/program/EN/7503",
        fse: "https://www.maastrichtuniversity.nl/about-um/faculties/science-and-engineering",
        um: "https://www.maastrichtuniversity.nl",
        instagram: "https://www.instagram.com/maboratorysp/",
        linkedin: "https://www.linkedin.com/groups/4892346/",
        whatsapp: "#"  // Add actual link when available
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

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MSP_DATA, getCountryPercentage, getTotalWithMasters, formatNumber, getGrowthRate };
}
