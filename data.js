// MSP Alumni Data - Complete Dataset
// Last updated: January 2025
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
    },
    "jp": {
        name: "Japan", code: "jp", count: 4,
        gender: { Female: 0, Male: 4 },
        cities: [],
        nationalities: [],
        universities: [{ name: "Kyoto University", count: 1 }],
        coords: [36.2048, 138.2529]
    },
    "pl": {
        name: "Poland", code: "pl", count: 3,
        gender: { Female: 1, Male: 2 },
        cities: [],
        nationalities: [],
        universities: [{ name: "Medical University of Warsaw", count: 1 }],
        coords: [51.9194, 19.1451]
    },
    "bg": {
        name: "Bulgaria", code: "bg", count: 3,
        gender: { Female: 1, Male: 2 },
        cities: [],
        nationalities: [],
        universities: [{ name: "Wageningen University", count: 1 }],
        coords: [42.7339, 25.4858]
    },
    "in": {
        name: "India", code: "in", count: 2,
        gender: { Female: 2, Male: 0 },
        cities: [],
        nationalities: [],
        universities: [{ name: "Harvard University", count: 1 }],
        coords: [20.5937, 78.9629]
    },
    "sg": {
        name: "Singapore", code: "sg", count: 2,
        gender: { Female: 0, Male: 2 },
        cities: [],
        nationalities: [],
        universities: [{ name: "University of Manchester", count: 1 }],
        coords: [1.3521, 103.8198]
    },
    "si": {
        name: "Slovenia", code: "si", count: 2,
        gender: { Female: 2, Male: 0 },
        cities: [],
        nationalities: [],
        universities: [{ name: "University College London", count: 1 }],
        coords: [46.1512, 14.9955]
    },
    "cl": {
        name: "Chile", code: "cl", count: 2,
        gender: { Female: 0, Male: 2 },
        cities: [],
        nationalities: [],
        universities: [],
        coords: [-35.6751, -71.543]
    },
    "hu": {
        name: "Hungary", code: "hu", count: 2,
        gender: { Female: 1, Male: 1 },
        cities: [],
        nationalities: [],
        universities: [{ name: "Szeged University", count: 2 }],
        coords: [47.1625, 19.5033]
    },
    "lk": {
        name: "Sri Lanka", code: "lk", count: 2,
        gender: { Female: 1, Male: 1 },
        cities: [],
        nationalities: [],
        universities: [],
        coords: [7.8731, 80.7718]
    },
    "lt": {
        name: "Lithuania", code: "lt", count: 2,
        gender: { Female: 1, Male: 1 },
        cities: [],
        nationalities: [],
        universities: [{ name: "Sorbonne University", count: 1 }],
        coords: [55.1694, 23.8813]
    },
    "cn": {
        name: "China", code: "cn", count: 2,
        gender: { Female: 1, Male: 1 },
        cities: [],
        nationalities: [],
        universities: [],
        coords: [35.8617, 104.1954]
    },
    "ec": { name: "Ecuador", code: "ec", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [-1.8312, -78.1834] },
    "ke": { name: "Kenya", code: "ke", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [-0.0236, 37.9062] },
    "sx": { name: "Sint Maarten", code: "sx", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [18.0425, -63.0548] },
    "zw": { name: "Zimbabwe", code: "zw", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [-19.0154, 29.1549] },
    "ro": { name: "Romania", code: "ro", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [45.9432, 24.9668] },
    "nc": { name: "New Caledonia", code: "nc", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [-20.9043, 165.618] },
    "jm": { name: "Jamaica", code: "jm", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [18.1096, -77.2975] },
    "sk": { name: "Slovakia", code: "sk", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [48.669, 19.699] },
    "tr": { name: "Turkey", code: "tr", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [38.9637, 35.2433] },
    "tw": { name: "Taiwan", code: "tw", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [23.6978, 120.9605] },
    "sa": { name: "Saudi Arabia", code: "sa", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [23.8859, 45.0792] },
    "cz": { name: "Czech Republic", code: "cz", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [49.8175, 15.473] },
    "ml": { name: "Mali", code: "ml", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [17.5707, -3.9962] },
    "my": { name: "Malaysia", code: "my", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [4.2105, 101.9758] },
    "lv": { name: "Latvia", code: "lv", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [56.8796, 24.6032] },
    "co": { name: "Colombia", code: "co", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [4.5709, -74.2973] },
    "ae": { name: "United Arab Emirates", code: "ae", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [23.4241, 53.8478] },
    "rs": { name: "Serbia", code: "rs", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [44.0165, 21.0059] },
    "cy": { name: "Cyprus", code: "cy", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [35.1264, 33.4299] },
    "pe": { name: "Peru", code: "pe", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [-9.19, -75.0152] },
    "hk": { name: "Hong Kong", code: "hk", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [22.3193, 114.1694] },
    "md": { name: "Moldova", code: "md", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [47.4116, 28.3699] },
    "il": { name: "Israel", code: "il", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [31.0461, 34.8516] },
    "za": { name: "South Africa", code: "za", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [-30.5595, 22.9375] },
    "tn": { name: "Tunisia", code: "tn", count: 1, gender: { Female: 0, Male: 1 }, cities: [], nationalities: [], universities: [], coords: [33.8869, 9.5375] },
    "ph": { name: "Philippines", code: "ph", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [12.8797, 121.774] },
    "cr": { name: "Costa Rica", code: "cr", count: 1, gender: { Female: 1, Male: 0 }, cities: [], nationalities: [], universities: [], coords: [9.7489, -83.7534] }
};


// MSP_DATA - Main data object used by most pages
const MSP_DATA = {
    summary: {
        totalAlumni: 1321,
        nationalities: 78,
        countriesLivingIn: 87,
        universitiesAttended: 265
    },
    lastUpdated: "January 2025",
    
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
        { name: "Netherlands", code: "nl", count: 469, coords: [52.1326, 5.2913] },
        { name: "Germany", code: "de", count: 96, coords: [51.1657, 10.4515] },
        { name: "United Kingdom", code: "gb", count: 78, coords: [55.3781, -3.4360] },
        { name: "Belgium", code: "be", count: 77, coords: [50.5039, 4.4699] },
        { name: "Sweden", code: "se", count: 49, coords: [60.1282, 18.6435] },
        { name: "Switzerland", code: "ch", count: 41, coords: [46.8182, 8.2275] },
        { name: "Italy", code: "it", count: 33, coords: [41.8719, 12.5674] },
        { name: "France", code: "fr", count: 33, coords: [46.2276, 2.2137] },
        { name: "Spain", code: "es", count: 32, coords: [40.4637, -3.7492] },
        { name: "Denmark", code: "dk", count: 25, coords: [56.2639, 9.5018] },
        { name: "United States", code: "us", count: 21, coords: [37.0902, -95.7129] },
        { name: "Austria", code: "at", count: 18, coords: [47.5162, 14.5501] },
        { name: "Finland", code: "fi", count: 17, coords: [61.9241, 25.7482] },
        { name: "Ireland", code: "ie", count: 11, coords: [53.1424, -7.6921] },
        { name: "Portugal", code: "pt", count: 9, coords: [39.3999, -8.2245] },
        { name: "Luxembourg", code: "lu", count: 9, coords: [49.8153, 6.1296] },
        { name: "Australia", code: "au", count: 9, coords: [-25.2744, 133.7751] },
        { name: "Canada", code: "ca", count: 9, coords: [56.1304, -106.3468] },
        { name: "Norway", code: "no", count: 7, coords: [60.4720, 8.4689] },
        { name: "Greece", code: "gr", count: 4, coords: [39.0742, 21.8243] },
        { name: "Japan", code: "jp", count: 4, coords: [36.2048, 138.2529] },
        { name: "Poland", code: "pl", count: 3, coords: [51.9194, 19.1451] },
        { name: "Bulgaria", code: "bg", count: 3, coords: [42.7339, 25.4858] },
        { name: "India", code: "in", count: 2, coords: [20.5937, 78.9629] },
        { name: "Singapore", code: "sg", count: 2, coords: [1.3521, 103.8198] },
        { name: "Slovenia", code: "si", count: 2, coords: [46.1512, 14.9955] },
        { name: "Chile", code: "cl", count: 2, coords: [-35.6751, -71.5430] },
        { name: "Hungary", code: "hu", count: 2, coords: [47.1625, 19.5033] },
        { name: "Sri Lanka", code: "lk", count: 2, coords: [7.8731, 80.7718] },
        { name: "Lithuania", code: "lt", count: 2, coords: [55.1694, 23.8813] },
        { name: "China", code: "cn", count: 2, coords: [35.8617, 104.1954] },
        { name: "Ecuador", code: "ec", count: 1, coords: [-1.8312, -78.1834] },
        { name: "Kenya", code: "ke", count: 1, coords: [-0.0236, 37.9062] },
        { name: "Sint Maarten", code: "sx", count: 1, coords: [18.0425, -63.0548] },
        { name: "Zimbabwe", code: "zw", count: 1, coords: [-19.0154, 29.1549] },
        { name: "Romania", code: "ro", count: 1, coords: [45.9432, 24.9668] },
        { name: "New Caledonia", code: "nc", count: 1, coords: [-20.9043, 165.618] },
        { name: "Jamaica", code: "jm", count: 1, coords: [18.1096, -77.2975] },
        { name: "Slovakia", code: "sk", count: 1, coords: [48.669, 19.699] },
        { name: "Turkey", code: "tr", count: 1, coords: [38.9637, 35.2433] },
        { name: "Taiwan", code: "tw", count: 1, coords: [23.6978, 120.9605] },
        { name: "Saudi Arabia", code: "sa", count: 1, coords: [23.8859, 45.0792] },
        { name: "Czech Republic", code: "cz", count: 1, coords: [49.8175, 15.473] },
        { name: "Mali", code: "ml", count: 1, coords: [17.5707, -3.9962] },
        { name: "Malaysia", code: "my", count: 1, coords: [4.2105, 101.9758] },
        { name: "Latvia", code: "lv", count: 1, coords: [56.8796, 24.6032] },
        { name: "Colombia", code: "co", count: 1, coords: [4.5709, -74.2973] },
        { name: "United Arab Emirates", code: "ae", count: 1, coords: [23.4241, 53.8478] },
        { name: "Serbia", code: "rs", count: 1, coords: [44.0165, 21.0059] },
        { name: "Cyprus", code: "cy", count: 1, coords: [35.1264, 33.4299] },
        { name: "Peru", code: "pe", count: 1, coords: [-9.19, -75.0152] },
        { name: "Hong Kong", code: "hk", count: 1, coords: [22.3193, 114.1694] },
        { name: "Moldova", code: "md", count: 1, coords: [47.4116, 28.3699] },
        { name: "Israel", code: "il", count: 1, coords: [31.0461, 34.8516] },
        { name: "South Africa", code: "za", count: 1, coords: [-30.5595, 22.9375] },
        { name: "Tunisia", code: "tn", count: 1, coords: [33.8869, 9.5375] },
        { name: "Philippines", code: "ph", count: 1, coords: [12.8797, 121.774] },
        { name: "Costa Rica", code: "cr", count: 1, coords: [9.7489, -83.7534] }
    ],
    
    // FIXED: Logo filenames now match actual files in assets/logos/
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
        { name: "Imperial College London", count: 19, code: "gb", country: "United Kingdom", logo: "imperial-college-london.png", prestige: true },
        { name: "University of Copenhagen", count: 16, code: "dk", country: "Denmark", logo: "university-of-copenhagen.png", prestige: true },
        { name: "Vrije Universiteit Amsterdam", count: 15, code: "nl", country: "Netherlands", logo: "vrije-universiteit-amsterdam.png", prestige: false },
        { name: "University College London", count: 14, code: "gb", country: "United Kingdom", logo: "ucl.png", prestige: true },
        { name: "Lund University", count: 14, code: "se", country: "Sweden", logo: "lund-university.png", prestige: true },
        { name: "ETH Zurich", count: 10, code: "ch", country: "Switzerland", logo: "eth-zurich.png", prestige: true },
        { name: "Karolinska Institutet", count: 10, code: "se", country: "Sweden", logo: "karolinska-institutet.png", prestige: true },
        { name: "University of Cambridge", count: 8, code: "gb", country: "United Kingdom", logo: "university-of-cambridge.png", prestige: true },
        { name: "University of Edinburgh", count: 7, code: "gb", country: "United Kingdom", logo: "university-of-edinburgh.png", prestige: true },
        { name: "Technical University of Munich", count: 7, code: "de", country: "Germany", logo: "tu-munich.png", prestige: true },
        { name: "University of Oxford", count: 7, code: "gb", country: "United Kingdom", logo: "university-of-oxford.png", prestige: true }
    ],
    
    fieldsOfStudy: [
        { name: "Life Sciences & Biology", count: 341, percent: 38.9, icon: "dna" },
        { name: "Chemistry & Materials", count: 105, percent: 12.0, icon: "flask-conical" },
        { name: "Medicine & Health", count: 105, percent: 12.0, icon: "heart-pulse" },
        { name: "Physics & Engineering", count: 98, percent: 11.2, icon: "atom" },
        { name: "Neuroscience & Psychology", count: 61, percent: 7.0, icon: "brain" },
        { name: "Business & Economics", count: 50, percent: 5.7, icon: "briefcase" },
        { name: "Computer Science & AI", count: 27, percent: 3.1, icon: "cpu" },
        { name: "Environmental & Earth Sciences", count: 24, percent: 2.7, icon: "leaf" },
        { name: "Social Sciences & Humanities", count: 24, percent: 2.7, icon: "users" },
        { name: "Other", count: 39, percent: 4.4, icon: "more-horizontal" }
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
        linkedinMspAlumni: "https://www.linkedin.com/groups/12893377/",
        linkedinFseAlumni: "https://www.linkedin.com/groups/4689010/",
        instagram: "https://www.instagram.com/msp_alumni/",
        admissions: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/admission-requirements"
    },
    
    recruitment: {
        heroStat: "78 nationalities. 87 countries. 265+ universities.",
        proofStats: [
            { number: 1321, label: "MSP Alumni", highlight: true },
            { number: 78, label: "Nationalities" },
            { number: "265+", label: "Master's Universities" },
            { number: "10.7%", label: "Pursuing PhDs", subtext: "At world-leading institutions" }
        ]
    },
    
    // ============================================
    // CONSIDERING MSP PAGE DATA
    // Updated: January 2025
    // ============================================
    
    consideringMSP: {
        heroStats: {
            alumni: 1321,
            nationalities: 78,
            universities: 265,
            countries: 87
        },
        
        careerSectors: [
            { name: "Academia & Research", count: 222, percent: 16.8, icon: "graduation-cap", color: "#00A2DB", description: "PhD candidates, postdocs, research scientists, and faculty", examples: ["PhD at Max Planck", "Research Fellow at Cambridge", "Postdoc at ETH Zurich"] },
            { name: "Technology & Data", count: 66, percent: 5.0, icon: "cpu", color: "#8b5cf6", description: "Software engineers, data scientists, AI researchers", examples: ["Software Engineer at ASML", "Data Scientist", "ML Engineer"] },
            { name: "Industry R&D", count: 60, percent: 4.5, icon: "flask-conical", color: "#10b981", description: "Research and development in corporate settings", examples: ["R&D Scientist at Unilever", "Materials Researcher at ASML", "Innovation Lead"] },
            { name: "Finance & Business", count: 47, percent: 3.6, icon: "briefcase", color: "#f59e0b", description: "Management, operations, banking, and finance", examples: ["Investment Analyst", "Operations Manager", "Business Development"] },
            { name: "Pharma & Biotech", count: 46, percent: 3.5, icon: "pill", color: "#ec4899", description: "Pharmaceutical and biotechnology industry", examples: ["Scientist at Novartis", "Clinical Researcher at Roche", "Biotech Analyst"] },
            { name: "Consulting", count: 43, percent: 3.3, icon: "trending-up", color: "#E84E10", description: "Strategy, management, and specialized consulting", examples: ["Consultant at McKinsey", "Analyst at BCG", "Strategy at Deloitte"] },
            { name: "Environment & Sustainability", count: 33, percent: 2.5, icon: "leaf", color: "#22c55e", description: "Environmental science, sustainability, conservation", examples: ["Sustainability Consultant", "Environmental Researcher", "Climate Analyst"] },
            { name: "Healthcare & Medicine", count: 23, percent: 1.7, icon: "heart-pulse", color: "#ef4444", description: "Clinical practice, medical research, healthcare management", examples: ["Medical Doctor", "Clinical Research Associate", "Healthcare Consultant"] },
            { name: "Engineering", count: 21, percent: 1.6, icon: "settings", color: "#6366f1", description: "Technical engineering roles across industries", examples: ["Process Engineer", "R&D Engineer", "Technical Consultant"] },
            { name: "Entrepreneurship", count: 15, percent: 1.1, icon: "rocket", color: "#f97316", description: "Founders, startup leaders, and self-employed", examples: ["Startup Founder", "CEO", "Freelance Consultant"] },
            { name: "Government & Policy", count: 8, percent: 0.6, icon: "landmark", color: "#0ea5e9", description: "Public sector, policy research, government roles", examples: ["Policy Advisor", "EU Commission", "Government Researcher"] },
            { name: "NGO & Non-profit", count: 7, percent: 0.5, icon: "heart-handshake", color: "#d946ef", description: "Non-governmental organizations and charities", examples: ["Programme Officer", "Research Lead", "Development Coordinator"] }
        ],
        
        phdPipeline: {
            phdCandidates: 141,
            phdPercent: 10.7,
            postdocs: 9,
            researchPositions: 49,
            faculty: 5,
            totalAcademia: 204,
            academiaPercent: 15.4,
            institutions: [
                { name: "Max Planck Institutes", icon: "award" },
                { name: "ETH Zurich", icon: "award" },
                { name: "University of Cambridge", icon: "award" },
                { name: "University of Oxford", icon: "award" },
                { name: "Karolinska Institutet", icon: "award" },
                { name: "EPFL", icon: "award" }
            ]
        },
        
        fieldToCareer: [
            { field: "Life Sciences & Biology", count: 383, icon: "dna", color: "#10b981", topCareers: [{ name: "PhD Candidates", count: 62 }, { name: "Research Positions", count: 23 }, { name: "Industry R&D", count: 22 }, { name: "Pharma & Biotech", count: 19 }] },
            { field: "Chemistry & Materials", count: 111, icon: "flask-conical", color: "#8b5cf6", topCareers: [{ name: "PhD Candidates", count: 30 }, { name: "Industry R&D", count: 7 }, { name: "Environmental", count: 6 }, { name: "Technology", count: 5 }] },
            { field: "Physics & Engineering", count: 109, icon: "atom", color: "#00A2DB", topCareers: [{ name: "PhD Candidates", count: 13 }, { name: "Industry R&D", count: 6 }, { name: "Technology", count: 6 }, { name: "Consulting", count: 5 }] },
            { field: "Medicine & Health", count: 107, icon: "heart-pulse", color: "#ef4444", topCareers: [{ name: "PhD Candidates", count: 14 }, { name: "Management", count: 10 }, { name: "Industry R&D", count: 7 }, { name: "Healthcare", count: 5 }] },
            { field: "Neuroscience & Psychology", count: 63, icon: "brain", color: "#ec4899", topCareers: [{ name: "PhD Candidates", count: 8 }, { name: "Research Positions", count: 5 }, { name: "Consulting", count: 4 }, { name: "Education", count: 2 }] },
            { field: "Computer Science & AI", count: 29, icon: "cpu", color: "#6366f1", topCareers: [{ name: "Technology & Data", count: 12 }, { name: "Industry R&D", count: 5 }, { name: "Consulting", count: 3 }, { name: "PhD Candidates", count: 2 }] }
        ],
        
        notableEmployers: {
            research: [{ name: "Max Planck", count: 4 }, { name: "Fraunhofer", count: 2 }, { name: "CERN", count: 1 }, { name: "Nikhef", count: 2 }],
            consulting: [{ name: "McKinsey", count: 2 }, { name: "BCG", count: 1 }, { name: "Deloitte", count: 3 }, { name: "PwC", count: 2 }],
            industry: [{ name: "ASML", count: 4 }, { name: "Unilever", count: 2 }, { name: "AstraZeneca", count: 4 }, { name: "Novartis", count: 1 }],
            categories: [
                { name: "Research Institutes", icon: "microscope", examples: ["Max Planck", "Fraunhofer", "CERN"] },
                { name: "Consulting", icon: "trending-up", examples: ["McKinsey", "BCG", "Deloitte", "PwC"] },
                { name: "Tech & Engineering", icon: "cpu", examples: ["ASML", "Philips", "Booking.com"] },
                { name: "Pharma & Healthcare", icon: "pill", examples: ["AstraZeneca", "Novartis", "Roche"] }
            ]
        },
        
        genderByField: [
            { field: "Life Sciences & Biology", female: 244, male: 139, femalePercent: 64 },
            { field: "Medicine & Health", female: 90, male: 17, femalePercent: 84 },
            { field: "Neuroscience & Psychology", female: 41, male: 22, femalePercent: 65 },
            { field: "Chemistry & Materials", female: 54, male: 57, femalePercent: 49 },
            { field: "Physics & Engineering", female: 53, male: 55, femalePercent: 49 },
            { field: "Computer Science & AI", female: 9, male: 20, femalePercent: 31 }
        ],
        
        growth: {
            factor: 3.9,
            years: "12",
            early: { period: "2014-2017", count: 192 },
            recent: { period: "2022-2025", count: 748 },
            byYear: [
                { year: 2014, count: 25 }, { year: 2015, count: 44 }, { year: 2016, count: 57 }, { year: 2017, count: 66 },
                { year: 2018, count: 65 }, { year: 2019, count: 76 }, { year: 2020, count: 108 }, { year: 2021, count: 132 },
                { year: 2022, count: 145 }, { year: 2023, count: 170 }, { year: 2024, count: 193 }, { year: 2025, count: 240 }
            ]
        },
        
        regionalImpact: { inNetherlands: 460, netherlandsPercent: 34.8, fromEuregio: 390, euregioPercent: 29.5, euregioRetention: 54.9 },
        
        quickFacts: [
            { number: "60%", label: "Female Students", sublabel: "788 of 1,321 alumni", icon: "users" },
            { number: "35%", label: "Stay in Netherlands", sublabel: "460 alumni currently", icon: "map-pin" },
            { number: "82", label: "At Elite Universities", sublabel: "World Top 25 institutions", icon: "award" },
            { number: "3.9x", label: "Programme Growth", sublabel: "Since 2014", icon: "trending-up" }
        ],
        
        topCities: [
            { rank: 1, name: "Maastricht", country: "Netherlands", code: "nl", count: 124 },
            { rank: 2, name: "Amsterdam", country: "Netherlands", code: "nl", count: 96 },
            { rank: 3, name: "Utrecht", country: "Netherlands", code: "nl", count: 70 },
            { rank: 4, name: "London", country: "United Kingdom", code: "gb", count: 37 },
            { rank: 5, name: "Leiden", country: "Netherlands", code: "nl", count: 35 },
            { rank: 6, name: "Brussels", country: "Belgium", code: "be", count: 33 },
            { rank: 7, name: "Copenhagen", country: "Denmark", code: "dk", count: 23 },
            { rank: 8, name: "Berlin", country: "Germany", code: "de", count: 21 },
            { rank: 9, name: "Zurich", country: "Switzerland", code: "ch", count: 21 },
            { rank: 10, name: "Munich", country: "Germany", code: "de", count: 21 }
        ],
        
        // FIXED: Logo filenames now match actual files in assets/logos/
        universityTiers: {
            worldTop10: {
                label: "World Top 10",
                count: 33,
                universities: [
                    { name: "ETH Zurich", code: "ch", count: 16, logo: "eth-zurich.png" },
                    { name: "Cambridge", code: "gb", count: 9, logo: "university-of-cambridge.png" },
                    { name: "Oxford", code: "gb", count: 7, logo: "university-of-oxford.png" },
                    { name: "Harvard", code: "us", count: 1, logo: "harvard.png" }
                ]
            },
            worldTop25: {
                label: "World Top 25",
                count: 85,
                universities: [
                    { name: "Imperial College", code: "gb", count: 20, logo: "imperial-college-london.png" },
                    { name: "UCL", code: "gb", count: 19, logo: "ucl.png" },
                    { name: "Karolinska Institutet", code: "se", count: 11, logo: "karolinska-institutet.png" },
                    { name: "EPFL", code: "ch", count: 2, logo: "epfl.png" },
                    { name: "Princeton", code: "us", count: 1, logo: "princeton.png" },
                    { name: "Columbia", code: "us", count: 1, logo: "columbia.png" }
                ]
            },
            topDutch: {
                label: "Top Dutch Universities",
                count: 419,
                universities: [
                    { name: "Maastricht University", code: "nl", count: 140, logo: "maastricht-university.png" },
                    { name: "Utrecht University", code: "nl", count: 99, logo: "utrecht-university.png" },
                    { name: "University of Amsterdam", code: "nl", count: 75, logo: "university-of-amsterdam.png" },
                    { name: "Leiden University", code: "nl", count: 45, logo: "leiden-university.png" },
                    { name: "Wageningen University", code: "nl", count: 42, logo: "wageningen-university.png" },
                    { name: "Radboud University", code: "nl", count: 38, logo: "radboud-university.png" }
                ]
            }
        },
        
        composition: {
            gender: { female: 788, male: 531, other: 2 },
            international: { international: 1058, dutch: 263 },
            euStatus: { eu: 1070, nonEu: 251 }
        }
    }
};

// Country facts for all countries
const COUNTRY_FACTS = {
    nl: { capital: 'Amsterdam', currency: 'Euro (€)', language: 'Dutch', population: '17.8M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    de: { capital: 'Berlin', currency: 'Euro (€)', language: 'German', population: '84.4M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    gb: { capital: 'London', currency: 'Pound (£)', language: 'English', population: '67.3M', continent: 'Europe', timezone: 'GMT (UTC+0)' },
    be: { capital: 'Brussels', currency: 'Euro (€)', language: 'Dutch/French', population: '11.7M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    se: { capital: 'Stockholm', currency: 'Krona (kr)', language: 'Swedish', population: '10.5M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    ch: { capital: 'Bern', currency: 'Franc (CHF)', language: 'German/French', population: '8.8M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    it: { capital: 'Rome', currency: 'Euro (€)', language: 'Italian', population: '58.9M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    fr: { capital: 'Paris', currency: 'Euro (€)', language: 'French', population: '67.8M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    es: { capital: 'Madrid', currency: 'Euro (€)', language: 'Spanish', population: '47.6M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    dk: { capital: 'Copenhagen', currency: 'Krone (kr)', language: 'Danish', population: '5.9M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    fi: { capital: 'Helsinki', currency: 'Euro (€)', language: 'Finnish', population: '5.5M', continent: 'Europe', timezone: 'EET (UTC+2)' },
    at: { capital: 'Vienna', currency: 'Euro (€)', language: 'German', population: '9.1M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    ie: { capital: 'Dublin', currency: 'Euro (€)', language: 'English/Irish', population: '5.1M', continent: 'Europe', timezone: 'GMT (UTC+0)' },
    lu: { capital: 'Luxembourg City', currency: 'Euro (€)', language: 'Lux/Fr/De', population: '660K', continent: 'Europe', timezone: 'CET (UTC+1)' },
    pt: { capital: 'Lisbon', currency: 'Euro (€)', language: 'Portuguese', population: '10.4M', continent: 'Europe', timezone: 'WET (UTC+0)' },
    no: { capital: 'Oslo', currency: 'Krone (kr)', language: 'Norwegian', population: '5.5M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    gr: { capital: 'Athens', currency: 'Euro (€)', language: 'Greek', population: '10.4M', continent: 'Europe', timezone: 'EET (UTC+2)' },
    pl: { capital: 'Warsaw', currency: 'Zloty (zł)', language: 'Polish', population: '37.8M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    bg: { capital: 'Sofia', currency: 'Lev (лв)', language: 'Bulgarian', population: '6.5M', continent: 'Europe', timezone: 'EET (UTC+2)' },
    ro: { capital: 'Bucharest', currency: 'Leu (lei)', language: 'Romanian', population: '19.0M', continent: 'Europe', timezone: 'EET (UTC+2)' },
    hu: { capital: 'Budapest', currency: 'Forint (Ft)', language: 'Hungarian', population: '9.6M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    cz: { capital: 'Prague', currency: 'Koruna (Kč)', language: 'Czech', population: '10.5M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    sk: { capital: 'Bratislava', currency: 'Euro (€)', language: 'Slovak', population: '5.4M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    si: { capital: 'Ljubljana', currency: 'Euro (€)', language: 'Slovene', population: '2.1M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    lt: { capital: 'Vilnius', currency: 'Euro (€)', language: 'Lithuanian', population: '2.8M', continent: 'Europe', timezone: 'EET (UTC+2)' },
    lv: { capital: 'Riga', currency: 'Euro (€)', language: 'Latvian', population: '1.8M', continent: 'Europe', timezone: 'EET (UTC+2)' },
    rs: { capital: 'Belgrade', currency: 'Dinar (RSD)', language: 'Serbian', population: '6.7M', continent: 'Europe', timezone: 'CET (UTC+1)' },
    cy: { capital: 'Nicosia', currency: 'Euro (€)', language: 'Greek/Turkish', population: '1.3M', continent: 'Europe', timezone: 'EET (UTC+2)' },
    md: { capital: 'Chișinău', currency: 'Leu (MDL)', language: 'Romanian', population: '2.6M', continent: 'Europe', timezone: 'EET (UTC+2)' },
    tr: { capital: 'Ankara', currency: 'Lira (₺)', language: 'Turkish', population: '85.3M', continent: 'Europe/Asia', timezone: 'TRT (UTC+3)' },
    us: { capital: 'Washington D.C.', currency: 'Dollar ($)', language: 'English', population: '334.9M', continent: 'Americas', timezone: 'Multiple' },
    ca: { capital: 'Ottawa', currency: 'Dollar (C$)', language: 'English/French', population: '40.1M', continent: 'Americas', timezone: 'Multiple' },
    cl: { capital: 'Santiago', currency: 'Peso (CLP)', language: 'Spanish', population: '19.5M', continent: 'Americas', timezone: 'CLT (UTC-3)' },
    co: { capital: 'Bogotá', currency: 'Peso (COP)', language: 'Spanish', population: '52.2M', continent: 'Americas', timezone: 'COT (UTC-5)' },
    ec: { capital: 'Quito', currency: 'Dollar ($)', language: 'Spanish', population: '18.0M', continent: 'Americas', timezone: 'ECT (UTC-5)' },
    pe: { capital: 'Lima', currency: 'Sol (S/)', language: 'Spanish', population: '34.0M', continent: 'Americas', timezone: 'PET (UTC-5)' },
    cr: { capital: 'San José', currency: 'Colón (₡)', language: 'Spanish', population: '5.2M', continent: 'Americas', timezone: 'CST (UTC-6)' },
    jm: { capital: 'Kingston', currency: 'Dollar (J$)', language: 'English', population: '2.8M', continent: 'Americas', timezone: 'EST (UTC-5)' },
    sx: { capital: 'Philipsburg', currency: 'Guilder (ƒ)', language: 'Dutch/English', population: '44K', continent: 'Americas', timezone: 'AST (UTC-4)' },
    jp: { capital: 'Tokyo', currency: 'Yen (¥)', language: 'Japanese', population: '125.1M', continent: 'Asia', timezone: 'JST (UTC+9)' },
    cn: { capital: 'Beijing', currency: 'Yuan (¥)', language: 'Mandarin', population: '1.4B', continent: 'Asia', timezone: 'CST (UTC+8)' },
    sg: { capital: 'Singapore', currency: 'Dollar (S$)', language: 'English/+3', population: '5.9M', continent: 'Asia', timezone: 'SGT (UTC+8)' },
    in: { capital: 'New Delhi', currency: 'Rupee (₹)', language: 'Hindi/English', population: '1.4B', continent: 'Asia', timezone: 'IST (UTC+5:30)' },
    my: { capital: 'Kuala Lumpur', currency: 'Ringgit (RM)', language: 'Malay', population: '34.0M', continent: 'Asia', timezone: 'MYT (UTC+8)' },
    hk: { capital: 'Hong Kong', currency: 'Dollar (HK$)', language: 'Chinese/English', population: '7.5M', continent: 'Asia', timezone: 'HKT (UTC+8)' },
    tw: { capital: 'Taipei', currency: 'Dollar (NT$)', language: 'Mandarin', population: '23.9M', continent: 'Asia', timezone: 'CST (UTC+8)' },
    ph: { capital: 'Manila', currency: 'Peso (₱)', language: 'Filipino/English', population: '115.6M', continent: 'Asia', timezone: 'PHT (UTC+8)' },
    lk: { capital: 'Colombo', currency: 'Rupee (Rs)', language: 'Sinhala/Tamil', population: '22.2M', continent: 'Asia', timezone: 'IST (UTC+5:30)' },
    il: { capital: 'Jerusalem', currency: 'Shekel (₪)', language: 'Hebrew/Arabic', population: '9.7M', continent: 'Asia', timezone: 'IST (UTC+2)' },
    ae: { capital: 'Abu Dhabi', currency: 'Dirham (AED)', language: 'Arabic', population: '10.0M', continent: 'Asia', timezone: 'GST (UTC+4)' },
    sa: { capital: 'Riyadh', currency: 'Riyal (SAR)', language: 'Arabic', population: '36.4M', continent: 'Asia', timezone: 'AST (UTC+3)' },
    au: { capital: 'Canberra', currency: 'Dollar (A$)', language: 'English', population: '26.4M', continent: 'Oceania', timezone: 'Multiple' },
    nc: { capital: 'Nouméa', currency: 'Franc (XPF)', language: 'French', population: '290K', continent: 'Oceania', timezone: 'NCT (UTC+11)' },
    ke: { capital: 'Nairobi', currency: 'Shilling (KES)', language: 'Swahili/English', population: '54.0M', continent: 'Africa', timezone: 'EAT (UTC+3)' },
    za: { capital: 'Pretoria', currency: 'Rand (R)', language: 'Multiple (11)', population: '60.0M', continent: 'Africa', timezone: 'SAST (UTC+2)' },
    zw: { capital: 'Harare', currency: 'ZiG/USD', language: 'English/+15', population: '16.3M', continent: 'Africa', timezone: 'CAT (UTC+2)' },
    tn: { capital: 'Tunis', currency: 'Dinar (TND)', language: 'Arabic', population: '12.4M', continent: 'Africa', timezone: 'CET (UTC+1)' },
    ml: { capital: 'Bamako', currency: 'Franc (XOF)', language: 'French', population: '22.4M', continent: 'Africa', timezone: 'GMT (UTC+0)' }
};

// University logo file mappings - maps university names to logo filenames in assets/logos/
const UNI_LOGO_FILES = {
    // Dutch Universities
    'Maastricht University': 'maastricht-university.png',
    'Utrecht University': 'utrecht-university.png',
    'University of Amsterdam': 'university-of-amsterdam.png',
    'Leiden University': 'leiden-university.png',
    'Wageningen University': 'wageningen-university.png',
    'Wageningen University & Research': 'wageningen-university.png',
    'Radboud University': 'radboud-university.png',
    'University of Groningen': 'university-of-groningen.png',
    'Delft University of Technology': 'tu-delft.png',
    'TU Delft': 'tu-delft.png',
    'Vrije Universiteit Amsterdam': 'vrije-universiteit-amsterdam.png',
    'VU Amsterdam': 'vrije-universiteit-amsterdam.png',
    'Eindhoven University of Technology': 'eindhoven-university.png',
    'TU Eindhoven': 'eindhoven-university.png',
    'Erasmus University Rotterdam': 'erasmus-university.png',
    'University of Twente': 'university-of-twente.png',
    
    // UK Universities
    'Imperial College London': 'imperial-college-london.png',
    'University College London': 'ucl.png',
    'UCL': 'ucl.png',
    'University of Cambridge': 'university-of-cambridge.png',
    'University of Oxford': 'university-of-oxford.png',
    'University of Edinburgh': 'university-of-edinburgh.png',
    'King\'s College London': 'kings-college-london.png',
    'University of Manchester': 'university-of-manchester.png',
    'University of Glasgow': 'university-of-glasgow.png',
    'University of Birmingham': 'university-of-birmingham.png',
    'University of Leeds': 'university-of-leeds.png',
    'University of Sheffield': 'university-of-sheffield.png',
    'University of Salford': 'university-of-salford.png',
    'University of Aberdeen': 'university-of-aberdeen.png',
    'Queen Mary University of London': 'queen-mary-university-of-london.png',
    
    // German Universities
    'Technical University of Munich': 'tu-munich.png',
    'TU Munich': 'tu-munich.png',
    'LMU Munich': 'lmu-munich.png',
    'Humboldt University Berlin': 'humboldt-university-of-berlin.png',
    'Humboldt-Universitat zu Berlin': 'humboldt-university-of-berlin.png',
    'Heidelberg University': 'heidelberg-university.png',
    'University of Cologne': 'university-of-cologne.png',
    'Goethe University Frankfurt': 'goethe-university-frankfurt.png',
    'University of Tubingen': 'university-of-tubingen.png',
    
    // Belgian Universities
    'KU Leuven': 'ku-leuven.png',
    'Ghent University': 'ghent-university.png',
    'Vrije Universiteit Brussel': 'vrije-universiteit-brussel.jpg',
    'University of Antwerp': 'university-of-antwerp.png',
    'Université Libre de Bruxelles': 'universite-libre-de-bruxelles.png',
    'University of Liege': 'university-of-liege.png',
    
    // Swedish Universities
    'Uppsala University': 'uppsala-university.png',
    'Lund University': 'lund-university.png',
    'Karolinska Institutet': 'karolinska-institutet.png',
    'Stockholm University': 'stockholm-university.png',
    'University of Gothenburg': 'university-of-gothenburg.png',
    'KTH Royal Institute of Technology': 'kth-royal-institute-of-technology.png',
    
    // Swiss Universities
    'ETH Zurich': 'eth-zurich.png',
    'ETH Zürich': 'eth-zurich.png',
    'EPFL': 'epfl.png',
    'University of Zurich': 'university-of-zurich.png',
    'University of Bern': 'university-of-bern.png',
    
    // Danish Universities
    'University of Copenhagen': 'university-of-copenhagen.png',
    'Technical University of Denmark': 'technical-university-of-denmark.png',
    'Copenhagen Business School': 'copenhagen-business-school.png',
    
    // Austrian Universities
    'University of Vienna': 'university-of-vienna.png',
    'TU Wien': 'tu-wien.png',
    
    // Finnish Universities
    'University of Helsinki': 'university-of-helsinki.png',
    'Aalto University': 'aalto-university.png',
    
    // Irish Universities
    'Trinity College Dublin': 'trinity-college-dublin.png',
    'University College Dublin': 'university-college-dublin.png',
    
    // French Universities
    'Ecole Polytechnique': 'ecole-polytechnique.png',
    'Sorbonne University': 'sorbonne-university.png',
    'Paris-Saclay University': 'paris-saclay-university.png',
    'Université Claude Bernard Lyon 1': 'universite-claude-bernard-lyon-1.png',
    
    // Spanish Universities
    'University of Barcelona': 'university-of-barcelona.png',
    'Universitat de Barcelona': 'university-of-barcelona.png',
    'Universitat Autonoma de Barcelona': 'universitat-autonoma-de-barcelona.png',
    'Universitat Politecnica de Catalunya': 'universitat-politecnica-de-catalunya.png',
    'Universitat Pompeu Fabra': 'pompeu-fabra-university.jpg',
    'University of Valencia': 'university-of-valencia.png',
    
    // Italian Universities
    'Universita di Bologna': 'university-of-bologna.png',
    'University of Bologna': 'university-of-bologna.png',
    'Bocconi University': 'bocconi-university.png',
    'University of Pavia': 'university-of-pavia.png',
    
    // Other European Universities
    'University of Oslo': 'university-of-oslo.png',
    'University of Athens': 'university-of-athens.png',
    'Szeged University': 'szeged-university.png',
    
    // North American Universities
    'McGill University': 'mcgill-university.png',
    'Harvard University': 'harvard.png',
    'Princeton University': 'princeton.png',
    'Columbia University': 'columbia.png',
    'Johns Hopkins University': 'johns-hopkins-university.png',
    'MIT': 'mit.png',
    'Stanford University': 'stanford.png',
    'University of Toronto': 'university-of-toronto.png',
    
    // Australian Universities
    'University of Melbourne': 'university-of-melbourne.png',
    'James Cook University': 'james-cook-university.png',
    
    // Other Universities
    'Weizmann Institute of Science': 'weizmann-institute-of-science.png'
};

// Backward compatibility
const UNIVERSITY_LOGOS = UNI_LOGO_FILES;

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COUNTRY_DETAILS, MSP_DATA, UNIVERSITY_LOGOS, COUNTRY_FACTS, UNI_LOGO_FILES };
}
