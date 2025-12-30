// MSP Alumni Data - Complete Dataset
// Last updated: December 2025
// Total alumni: 1330 across 78 nationalities

const COUNTRY_DETAILS = {
    "nl": {
        name: "Netherlands", code: "nl", count: 462,
        gender: { Female: 278, Male: 184 },
        graduationYears: { "2014": 5, "2015": 9, "2016": 22, "2017": 25, "2018": 20, "2019": 26, "2020": 40, "2021": 52, "2022": 56, "2023": 62, "2024": 73, "2025": 72 },
        cities: [{ name: "Maastricht", count: 112 }, { name: "Amsterdam", count: 95 }, { name: "Utrecht", count: 72 }, { name: "Leiden", count: 38 }, { name: "Wageningen", count: 20 }, { name: "Groningen", count: 18 }],
        nationalities: [{ name: "Dutch", code: "nl", count: 158 }, { name: "German", code: "de", count: 45 }, { name: "Belgian", code: "be", count: 36 }, { name: "Italian", code: "it", count: 28 }],
        universities: [{ name: "Maastricht University", count: 128 }, { name: "Utrecht University", count: 96 }, { name: "University of Amsterdam", count: 72 }, { name: "Leiden University", count: 45 }, { name: "Wageningen University", count: 40 }],
        coords: [52.1326, 5.2913]
    },
    "de": {
        name: "Germany", code: "de", count: 93,
        gender: { Female: 64, Male: 29 },
        graduationYears: { "2014": 3, "2015": 12, "2016": 8, "2017": 5, "2018": 10, "2019": 6, "2020": 5, "2021": 9, "2022": 8, "2023": 12, "2024": 6, "2025": 9 },
        cities: [{ name: "Munich", count: 22 }, { name: "Berlin", count: 21 }, { name: "Hamburg", count: 7 }, { name: "Cologne", count: 4 }],
        nationalities: [{ name: "German", code: "de", count: 48 }, { name: "Dutch", code: "nl", count: 8 }, { name: "Belgian", code: "be", count: 6 }],
        universities: [{ name: "Technical University of Munich", count: 7 }, { name: "Humboldt University Berlin", count: 5 }, { name: "LMU Munich", count: 4 }],
        coords: [51.1657, 10.4515]
    },
    "gb": {
        name: "United Kingdom", code: "gb", count: 83,
        gender: { Female: 50, Male: 33 },
        graduationYears: { "2015": 5, "2016": 7, "2017": 8, "2018": 8, "2019": 10, "2020": 9, "2021": 9, "2022": 5, "2023": 10, "2024": 8, "2025": 4 },
        cities: [{ name: "London", count: 38 }, { name: "Oxford", count: 8 }, { name: "Edinburgh", count: 7 }, { name: "Cambridge", count: 5 }],
        nationalities: [{ name: "British", code: "gb", count: 26 }, { name: "German", code: "de", count: 12 }, { name: "Dutch", code: "nl", count: 10 }],
        universities: [{ name: "Imperial College London", count: 19 }, { name: "University College London", count: 14 }, { name: "University of Edinburgh", count: 7 }, { name: "University of Oxford", count: 7 }, { name: "University of Cambridge", count: 8 }],
        coords: [55.3781, -3.4360]
    },
    "be": {
        name: "Belgium", code: "be", count: 70,
        gender: { Female: 39, Male: 31 },
        graduationYears: { "2014": 3, "2015": 2, "2016": 5, "2017": 7, "2018": 3, "2019": 5, "2020": 6, "2021": 14, "2022": 6, "2023": 7, "2024": 6, "2025": 6 },
        cities: [{ name: "Brussels", count: 34 }, { name: "Leuven", count: 16 }, { name: "Antwerp", count: 5 }, { name: "Ghent", count: 5 }],
        nationalities: [{ name: "Belgian", code: "be", count: 33 }, { name: "Italian", code: "it", count: 6 }, { name: "Spanish", code: "es", count: 5 }],
        universities: [{ name: "KU Leuven", count: 21 }, { name: "Vrije Universiteit Brussel", count: 5 }, { name: "Ghent University", count: 4 }],
        coords: [50.5039, 4.4699]
    },
    "se": {
        name: "Sweden", code: "se", count: 49,
        gender: { Female: 26, Male: 23 },
        graduationYears: { "2019": 2, "2020": 6, "2021": 4, "2022": 9, "2023": 4, "2024": 12, "2025": 12 },
        cities: [{ name: "Stockholm", count: 18 }, { name: "Uppsala", count: 15 }, { name: "Lund", count: 10 }],
        nationalities: [{ name: "German", code: "de", count: 12 }, { name: "Belgian", code: "be", count: 8 }, { name: "Dutch", code: "nl", count: 7 }],
        universities: [{ name: "Uppsala University", count: 19 }, { name: "Lund University", count: 14 }, { name: "Karolinska Institutet", count: 10 }, { name: "Stockholm University", count: 9 }],
        coords: [60.1282, 18.6435]
    },
    "ch": {
        name: "Switzerland", code: "ch", count: 37,
        gender: { Female: 27, Male: 10 },
        graduationYears: { "2017": 4, "2019": 5, "2021": 4, "2022": 2, "2023": 3, "2024": 8, "2025": 11 },
        cities: [{ name: "Zurich", count: 20 }, { name: "Lausanne", count: 6 }, { name: "Basel", count: 4 }, { name: "Geneva", count: 3 }],
        nationalities: [{ name: "German", code: "de", count: 8 }, { name: "Italian", code: "it", count: 6 }, { name: "Swiss", code: "ch", count: 5 }],
        universities: [{ name: "ETH Zurich", count: 10 }, { name: "University of Zurich", count: 4 }, { name: "EPFL", count: 3 }],
        coords: [46.8182, 8.2275]
    },
    "it": {
        name: "Italy", code: "it", count: 32,
        gender: { Female: 24, Male: 8 },
        graduationYears: { "2019": 3, "2020": 6, "2021": 2, "2022": 5, "2024": 6, "2025": 10 },
        cities: [{ name: "Milan", count: 12 }, { name: "Bologna", count: 6 }, { name: "Rome", count: 4 }],
        nationalities: [{ name: "Italian", code: "it", count: 20 }, { name: "Dutch", code: "nl", count: 3 }],
        universities: [{ name: "Universita di Bologna", count: 6 }, { name: "Bocconi University", count: 3 }],
        coords: [41.8719, 12.5674]
    },
    "fr": {
        name: "France", code: "fr", count: 30,
        gender: { Female: 22, Male: 8 },
        graduationYears: { "2020": 6, "2021": 3, "2022": 4, "2023": 4, "2024": 8, "2025": 5 },
        cities: [{ name: "Paris", count: 22 }, { name: "Lyon", count: 3 }],
        nationalities: [{ name: "French", code: "fr", count: 12 }, { name: "German", code: "de", count: 4 }],
        universities: [{ name: "Ecole Polytechnique", count: 5 }, { name: "Sorbonne University", count: 3 }],
        coords: [46.2276, 2.2137]
    },
    "es": {
        name: "Spain", code: "es", count: 29,
        gender: { Male: 15, Female: 14 },
        graduationYears: { "2017": 5, "2018": 3, "2019": 3, "2020": 4, "2024": 6, "2025": 8 },
        cities: [{ name: "Barcelona", count: 20 }, { name: "Madrid", count: 6 }],
        nationalities: [{ name: "Spanish", code: "es", count: 14 }, { name: "Italian", code: "it", count: 7 }],
        universities: [{ name: "University of Barcelona", count: 5 }],
        coords: [40.4637, -3.7492]
    },
    "dk": {
        name: "Denmark", code: "dk", count: 24,
        gender: { Female: 15, Male: 9 },
        graduationYears: { "2020": 4, "2023": 7, "2024": 3, "2025": 10 },
        cities: [{ name: "Copenhagen", count: 22 }],
        nationalities: [{ name: "Dutch", code: "nl", count: 7 }, { name: "German", code: "de", count: 6 }, { name: "Belgian", code: "be", count: 4 }],
        universities: [{ name: "University of Copenhagen", count: 16 }, { name: "Technical University of Denmark", count: 5 }],
        coords: [56.2639, 9.5018]
    },
    "us": {
        name: "United States", code: "us", count: 23,
        gender: { Female: 12, Male: 11 },
        graduationYears: { "2019": 2, "2020": 3, "2022": 3, "2023": 9, "2024": 3, "2025": 3 },
        cities: [{ name: "Boston", count: 5 }, { name: "San Francisco", count: 3 }, { name: "New York", count: 3 }],
        nationalities: [{ name: "American", code: "us", count: 5 }, { name: "German", code: "de", count: 4 }, { name: "Indian", code: "in", count: 3 }],
        universities: [{ name: "Harvard University", count: 2 }, { name: "Johns Hopkins University", count: 2 }],
        coords: [37.0902, -95.7129]
    },
    "fi": {
        name: "Finland", code: "fi", count: 18,
        gender: { Female: 12, Male: 6 },
        graduationYears: { "2017": 3, "2018": 2, "2021": 3, "2022": 4, "2024": 3, "2025": 3 },
        cities: [{ name: "Helsinki", count: 17 }],
        nationalities: [{ name: "Finnish", code: "fi", count: 8 }, { name: "Dutch", code: "nl", count: 5 }],
        universities: [{ name: "University of Helsinki", count: 5 }, { name: "Aalto University", count: 4 }],
        coords: [61.9241, 25.7482]
    },
    "at": {
        name: "Austria", code: "at", count: 17,
        gender: { Female: 10, Male: 7 },
        graduationYears: { "2018": 2, "2020": 2, "2022": 3, "2023": 4, "2024": 6 },
        cities: [{ name: "Vienna", count: 14 }],
        nationalities: [{ name: "German", code: "de", count: 7 }, { name: "Austrian", code: "at", count: 3 }],
        universities: [{ name: "University of Vienna", count: 3 }, { name: "TU Wien", count: 2 }],
        coords: [47.5162, 14.5501]
    },
    "ie": {
        name: "Ireland", code: "ie", count: 10,
        gender: { Female: 8, Male: 2 },
        graduationYears: { "2020": 3, "2021": 2, "2023": 2, "2024": 1, "2025": 2 },
        cities: [{ name: "Dublin", count: 8 }],
        nationalities: [{ name: "Belgian", code: "be", count: 3 }, { name: "Irish", code: "ie", count: 2 }],
        universities: [{ name: "University College Dublin", count: 4 }, { name: "Trinity College Dublin", count: 3 }],
        coords: [53.1424, -7.6921]
    },
    "lu": {
        name: "Luxembourg", code: "lu", count: 9,
        gender: { Female: 7, Male: 2 },
        graduationYears: { "2020": 4, "2021": 2, "2022": 1, "2023": 2 },
        cities: [{ name: "Luxembourg City", count: 7 }],
        nationalities: [{ name: "Luxembourgish", code: "lu", count: 5 }],
        universities: [{ name: "University of Luxembourg", count: 2 }],
        coords: [49.8153, 6.1296]
    },
    "ca": {
        name: "Canada", code: "ca", count: 8,
        gender: { Female: 6, Male: 2 },
        graduationYears: { "2014": 1, "2017": 2, "2018": 1, "2019": 1, "2022": 2, "2025": 1 },
        cities: [{ name: "Toronto", count: 5 }, { name: "Montreal", count: 2 }],
        nationalities: [{ name: "Dutch", code: "nl", count: 3 }, { name: "British", code: "gb", count: 2 }],
        universities: [{ name: "McGill University", count: 2 }, { name: "University of Toronto", count: 2 }],
        coords: [56.1304, -106.3468]
    },
    "pt": {
        name: "Portugal", code: "pt", count: 8,
        gender: { Female: 4, Male: 4 },
        graduationYears: { "2020": 1, "2021": 2, "2022": 1, "2023": 2, "2025": 2 },
        cities: [{ name: "Lisbon", count: 6 }],
        nationalities: [{ name: "Belgian", code: "be", count: 2 }, { name: "Portuguese", code: "pt", count: 2 }],
        universities: [{ name: "University of Lisbon", count: 2 }],
        coords: [39.3999, -8.2245]
    },
    "no": {
        name: "Norway", code: "no", count: 6,
        gender: { Female: 5, Male: 1 },
        graduationYears: { "2015": 1, "2018": 1, "2019": 1, "2023": 3 },
        cities: [{ name: "Oslo", count: 5 }],
        nationalities: [{ name: "Dutch", code: "nl", count: 2 }, { name: "Norwegian", code: "no", count: 2 }],
        universities: [{ name: "University of Oslo", count: 2 }],
        coords: [60.4720, 8.4689]
    },
    "au": {
        name: "Australia", code: "au", count: 7,
        gender: { Male: 4, Female: 3 },
        graduationYears: { "2017": 2, "2021": 2, "2024": 1, "2025": 2 },
        cities: [{ name: "Sydney", count: 3 }, { name: "Melbourne", count: 2 }],
        nationalities: [{ name: "Australian", code: "au", count: 3 }],
        universities: [{ name: "University of Melbourne", count: 2 }],
        coords: [-25.2744, 133.7751]
    },
    "gr": {
        name: "Greece", code: "gr", count: 5,
        gender: { Female: 4, Male: 1 },
        graduationYears: { "2021": 2, "2022": 1, "2023": 1, "2025": 1 },
        cities: [{ name: "Athens", count: 4 }],
        nationalities: [{ name: "Greek", code: "gr", count: 4 }],
        universities: [{ name: "University of Athens", count: 2 }],
        coords: [39.0742, 21.8243]
    }
};


// MSP_DATA - Main data object used by most pages
const MSP_DATA = {
    summary: {
        totalAlumni: 1330,
        nationalities: 78,
        countriesLivingIn: 56,
        universitiesAttended: 248
    },
    lastUpdated: "December 2025",
    
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
    
    countriesLiving: [
        { name: "Netherlands", code: "nl", count: 462, coords: [52.1326, 5.2913] },
        { name: "Germany", code: "de", count: 93, coords: [51.1657, 10.4515] },
        { name: "United Kingdom", code: "gb", count: 83, coords: [55.3781, -3.4360] },
        { name: "Belgium", code: "be", count: 70, coords: [50.5039, 4.4699] },
        { name: "Sweden", code: "se", count: 49, coords: [60.1282, 18.6435] },
        { name: "Switzerland", code: "ch", count: 37, coords: [46.8182, 8.2275] },
        { name: "Italy", code: "it", count: 32, coords: [41.8719, 12.5674] },
        { name: "France", code: "fr", count: 30, coords: [46.2276, 2.2137] },
        { name: "Spain", code: "es", count: 29, coords: [40.4637, -3.7492] },
        { name: "Denmark", code: "dk", count: 24, coords: [56.2639, 9.5018] },
        { name: "United States", code: "us", count: 23, coords: [37.0902, -95.7129] },
        { name: "Finland", code: "fi", count: 18, coords: [61.9241, 25.7482] },
        { name: "Austria", code: "at", count: 17, coords: [47.5162, 14.5501] },
        { name: "Ireland", code: "ie", count: 10, coords: [53.1424, -7.6921] },
        { name: "Luxembourg", code: "lu", count: 9, coords: [49.8153, 6.1296] },
        { name: "Canada", code: "ca", count: 8, coords: [56.1304, -106.3468] },
        { name: "Portugal", code: "pt", count: 8, coords: [39.3999, -8.2245] },
        { name: "Australia", code: "au", count: 7, coords: [-25.2744, 133.7751] },
        { name: "Norway", code: "no", count: 6, coords: [60.4720, 8.4689] },
        { name: "Greece", code: "gr", count: 5, coords: [39.0742, 21.8243] },
        { name: "Poland", code: "pl", count: 4, coords: [51.9194, 19.1451] },
        { name: "Japan", code: "jp", count: 4, coords: [36.2048, 138.2529] },
        { name: "Bulgaria", code: "bg", count: 3, coords: [42.7339, 25.4858] },
        { name: "China", code: "cn", count: 2, coords: [35.8617, 104.1954] },
        { name: "Singapore", code: "sg", count: 2, coords: [1.3521, 103.8198] },
        { name: "Lithuania", code: "lt", count: 2, coords: [55.1694, 23.8813] },
        { name: "Hungary", code: "hu", count: 2, coords: [47.1625, 19.5033] },
        { name: "Chile", code: "cl", count: 2, coords: [-35.6751, -71.5430] }
    ],
    
    topUniversities: [
        { name: "Maastricht University", count: 128, code: "nl", country: "Netherlands", logo: "maastricht-university.png", prestige: false },
        { name: "Utrecht University", count: 96, code: "nl", country: "Netherlands", logo: "utrecht-university.png", prestige: false },
        { name: "University of Amsterdam", count: 72, code: "nl", country: "Netherlands", logo: "university-of-amsterdam.png", prestige: false },
        { name: "Leiden University", count: 45, code: "nl", country: "Netherlands", logo: "leiden-university.png", prestige: true },
        { name: "Wageningen University", count: 40, code: "nl", country: "Netherlands", logo: "wageningen-university.png", prestige: true },
        { name: "Radboud University", count: 38, code: "nl", country: "Netherlands", logo: "radboud-university.png", prestige: false },
        { name: "University of Groningen", count: 23, code: "nl", country: "Netherlands", logo: "university-of-groningen.png", prestige: false },
        { name: "KU Leuven", count: 21, code: "be", country: "Belgium", logo: "ku-leuven.png", prestige: true },
        { name: "Delft University of Technology", count: 19, code: "nl", country: "Netherlands", logo: "tu-delft.png", prestige: true },
        { name: "Uppsala University", count: 19, code: "se", country: "Sweden", logo: "uppsala-university.png", prestige: true },
        { name: "Imperial College London", count: 19, code: "gb", country: "United Kingdom", logo: "imperial-college.png", prestige: true },
        { name: "University of Copenhagen", count: 16, code: "dk", country: "Denmark", logo: "university-of-copenhagen.png", prestige: true },
        { name: "Vrije Universiteit Amsterdam", count: 15, code: "nl", country: "Netherlands", logo: "vu-amsterdam.png", prestige: false },
        { name: "University College London", count: 14, code: "gb", country: "United Kingdom", logo: "ucl.png", prestige: true },
        { name: "Lund University", count: 14, code: "se", country: "Sweden", logo: "lund-university.png", prestige: true },
        { name: "ETH Zurich", count: 10, code: "ch", country: "Switzerland", logo: "eth-zurich.png", prestige: true },
        { name: "Karolinska Institutet", count: 10, code: "se", country: "Sweden", logo: "karolinska.png", prestige: true },
        { name: "University of Cambridge", count: 8, code: "gb", country: "United Kingdom", logo: "cambridge.png", prestige: true },
        { name: "University of Edinburgh", count: 7, code: "gb", country: "United Kingdom", logo: "edinburgh.png", prestige: true },
        { name: "Technical University of Munich", count: 7, code: "de", country: "Germany", logo: "tum.png", prestige: true },
        { name: "University of Oxford", count: 7, code: "gb", country: "United Kingdom", logo: "oxford.png", prestige: true }
    ],
    
    fieldsOfStudy: [
        { name: "Life Sciences & Biology", count: 341, percent: 38.9, icon: "ðŸ§¬" },
        { name: "Chemistry & Materials", count: 105, percent: 12.0, icon: "âš—ï¸" },
        { name: "Medicine & Health", count: 105, percent: 12.0, icon: "ðŸ¥" },
        { name: "Physics & Engineering", count: 98, percent: 11.2, icon: "âš¡" },
        { name: "Neuroscience & Psychology", count: 61, percent: 7.0, icon: "ðŸ§ " },
        { name: "Business & Economics", count: 50, percent: 5.7, icon: "ðŸ“Š" },
        { name: "Computer Science & AI", count: 27, percent: 3.1, icon: "ðŸ’»" },
        { name: "Environmental & Earth Sciences", count: 24, percent: 2.7, icon: "ðŸŒ" },
        { name: "Social Sciences & Humanities", count: 24, percent: 2.7, icon: "ðŸ“š" },
        { name: "Other", count: 39, percent: 4.4, icon: "ðŸ“‹" }
    ],
    
    allNationalityFlags: [
        "nl", "de", "be", "it", "gb", "es", "fr", "pl", "lu", "ie", "ro", "us", 
        "gr", "tr", "ch", "ru", "bg", "pt", "fi", "in", "cy", "lv", "hu", "hr", 
        "lt", "si", "sk", "za", "at", "cz", "dk", "mx", "cn", "jp", "au", "ee", 
        "se", "ca", "no", "ua", "kr", "kz", "ir", "br", "ba", "lk", "th"
    ],
    
    links: {
        mspMain: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme",
        mspWhyThisStudy: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/why-programme",
        mspCourses: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/curriculum",
        mspAdmissions: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/admission-requirements",
        linkedinMspAlumni: "https://www.linkedin.com/groups/12345678/",
        linkedinFseAlumni: "https://www.linkedin.com/groups/87654321/",
        instagram: "https://www.instagram.com/msp_maastricht/",
        admissions: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/admission-requirements"
    },
    
    recruitment: {
        heroStat: "78 nationalities. 56 countries. 248+ universities.",
        proofStats: [
            { number: 1330, label: "MSP Alumni", highlight: true },
            { number: 78, label: "Nationalities" },
            { number: "248+", label: "Master's Universities" },
            { number: "12%", label: "Pursuing PhDs", subtext: "At world-leading institutions" }
        ],
        alumniJourneys: [
            { year: "2019", university: "ETH Zurich", field: "Biomedical Engineering", role: "Research Scientist", company: "Roche", icon: "microscope" },
            { year: "2020", university: "Imperial College", field: "Neuroscience", role: "PhD Candidate", company: "Max Planck", icon: "brain" },
            { year: "2018", university: "Cambridge", field: "Chemistry", role: "R&D Lead", company: "BASF", icon: "flask-conical" },
            { year: "2021", university: "Karolinska", field: "Medicine", role: "Medical Doctor", company: "Amsterdam UMC", icon: "heart-pulse" }
        ],
        careerPaths: [
            { title: "Research & Academia", count: 186, icon: "microscope", examples: ["PhD at Max Planck", "Postdoc at MIT", "Professor at ETH"] },
            { title: "Industry R&D", count: 145, icon: "flask-conical", examples: ["Scientist at Novartis", "R&D at ASML", "Engineer at Shell"] },
            { title: "Healthcare", count: 127, icon: "heart-pulse", examples: ["Doctor at MUMC+", "Clinical Researcher", "Medical Consultant"] },
            { title: "Tech & Data", count: 89, icon: "cpu", examples: ["Data Scientist at Google", "ML Engineer at Philips", "Software Dev at Booking"] },
            { title: "Consulting & Business", count: 76, icon: "briefcase", examples: ["Consultant at McKinsey", "Analyst at BCG", "Strategy at Deloitte"] },
            { title: "Policy & NGO", count: 42, icon: "landmark", examples: ["Policy Advisor EU", "Researcher at WHO", "Program Lead at UN"] }
        ],
        phdStats: {
            total: 159,
            percentage: "12%",
            highlights: [
                { icon: "award", text: "PhDs at 45+ institutions worldwide" },
                { icon: "globe", text: "Research in 28 countries" },
                { icon: "trending-up", text: "Growing 15% annually" }
            ]
        },
        programmeFeatures: [
            { icon: "users", title: "Small Classes", description: "Average 15 students per tutorial group for personalized learning" },
            { icon: "globe-2", title: "International Community", description: "Students from 50+ countries creating a global network" },
            { icon: "microscope", title: "Research-Driven", description: "Lab experience from year one with active researchers" },
            { icon: "git-branch", title: "Flexible Curriculum", description: "Design your own path across all sciences" }
        ]
    }
};

// University logos mapping (for fallback display)
const UNIVERSITY_LOGOS = {};

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COUNTRY_DETAILS, MSP_DATA, UNIVERSITY_LOGOS };
}
