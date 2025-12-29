// MSP Alumni Data - Country Details
// Required for country.html to function

const COUNTRY_DETAILS = {
    "nl": {
        name: "Netherlands", code: "nl", count: 445,
        gender: { Female: 268, Male: 177 },
        graduationYears: { "2014": 5, "2015": 9, "2016": 20, "2017": 23, "2018": 19, "2019": 24, "2020": 37, "2021": 49, "2022": 53, "2023": 60, "2024": 71, "2025": 75 },
        cities: [{ name: "Maastricht", count: 108 }, { name: "Amsterdam", count: 87 }, { name: "Utrecht", count: 69 }, { name: "Leiden", count: 36 }, { name: "Wageningen", count: 19 }, { name: "Groningen", count: 18 }],
        nationalities: [{ name: "Dutch", code: "nl", count: 154 }, { name: "German", code: "de", count: 40 }, { name: "Belgian", code: "be", count: 34 }, { name: "Italian", code: "it", count: 26 }],
        universities: [{ name: "Maastricht University", count: 124 }, { name: "Utrecht University", count: 93 }, { name: "University of Amsterdam", count: 70 }, { name: "Leiden University", count: 44 }, { name: "Wageningen University", count: 38 }],
        coords: [52.1326, 5.2913]
    },
    "de": {
        name: "Germany", code: "de", count: 92,
        gender: { Female: 63, Male: 29 },
        graduationYears: { "2014": 3, "2015": 12, "2016": 8, "2017": 4, "2018": 10, "2019": 6, "2020": 4, "2021": 9, "2022": 8, "2023": 12, "2024": 6, "2025": 10 },
        cities: [{ name: "Munich", count: 21 }, { name: "Berlin", count: 20 }, { name: "Hamburg", count: 6 }, { name: "Cologne", count: 3 }],
        nationalities: [{ name: "German", code: "de", count: 46 }, { name: "Dutch", code: "nl", count: 7 }, { name: "Belgian", code: "be", count: 6 }],
        universities: [{ name: "Technical University of Munich", count: 7 }, { name: "Humboldt University Berlin", count: 4 }, { name: "University of Cologne", count: 4 }],
        coords: [51.1657, 10.4515]
    },
    "gb": {
        name: "United Kingdom", code: "gb", count: 75,
        gender: { Female: 44, Male: 31 },
        graduationYears: { "2015": 5, "2016": 6, "2017": 7, "2018": 7, "2019": 9, "2020": 8, "2021": 8, "2022": 4, "2023": 9, "2024": 8, "2025": 4 },
        cities: [{ name: "London", count: 34 }, { name: "Oxford", count: 6 }, { name: "Edinburgh", count: 5 }, { name: "Cambridge", count: 2 }],
        nationalities: [{ name: "British", code: "gb", count: 24 }, { name: "German", code: "de", count: 10 }, { name: "Dutch", code: "nl", count: 9 }],
        universities: [{ name: "Imperial College London", count: 19 }, { name: "University College London", count: 14 }, { name: "University of Edinburgh", count: 7 }, { name: "University of Oxford", count: 7 }, { name: "University of Cambridge", count: 7 }],
        coords: [55.3781, -3.4360]
    },
    "be": {
        name: "Belgium", code: "be", count: 70,
        gender: { Female: 39, Male: 29 },
        graduationYears: { "2014": 3, "2015": 2, "2016": 5, "2017": 7, "2018": 2, "2019": 5, "2020": 6, "2021": 14, "2022": 6, "2023": 7, "2024": 6, "2025": 7 },
        cities: [{ name: "Brussels", count: 32 }, { name: "Leuven", count: 14 }, { name: "Antwerp", count: 4 }, { name: "Ghent", count: 4 }],
        nationalities: [{ name: "Belgian", code: "be", count: 31 }, { name: "Italian", code: "it", count: 5 }, { name: "Spanish", code: "es", count: 4 }],
        universities: [{ name: "KU Leuven", count: 21 }, { name: "Vrije Universiteit Brussel", count: 5 }, { name: "Ghent University", count: 4 }],
        coords: [50.5039, 4.4699]
    },
    "se": {
        name: "Sweden", code: "se", count: 49,
        gender: { Female: 26, Male: 23 },
        graduationYears: { "2019": 2, "2020": 6, "2021": 4, "2022": 9, "2023": 4, "2024": 12, "2025": 8 },
        cities: [{ name: "Stockholm", count: 16 }, { name: "Uppsala", count: 14 }, { name: "Lund", count: 8 }],
        nationalities: [{ name: "German", code: "de", count: 11 }, { name: "Belgian", code: "be", count: 7 }, { name: "Dutch", code: "nl", count: 6 }],
        universities: [{ name: "Uppsala University", count: 18 }, { name: "Lund University", count: 14 }, { name: "Karolinska Institutet", count: 9 }, { name: "Stockholm University", count: 9 }],
        coords: [60.1282, 18.6435]
    },
    "ch": {
        name: "Switzerland", code: "ch", count: 37,
        gender: { Female: 27, Male: 10 },
        graduationYears: { "2017": 4, "2019": 5, "2021": 4, "2022": 2, "2023": 2, "2024": 7, "2025": 8 },
        cities: [{ name: "Zurich", count: 18 }, { name: "Lausanne", count: 5 }, { name: "Basel", count: 3 }, { name: "Geneva", count: 2 }],
        nationalities: [{ name: "German", code: "de", count: 7 }, { name: "Italian", code: "it", count: 5 }, { name: "Swiss", code: "ch", count: 4 }],
        universities: [{ name: "ETH Zurich", count: 10 }, { name: "University of Zurich", count: 3 }, { name: "EPFL", count: 2 }],
        coords: [46.8182, 8.2275]
    },
    "it": {
        name: "Italy", code: "it", count: 32,
        gender: { Female: 24, Male: 8 },
        graduationYears: { "2019": 3, "2020": 6, "2021": 2, "2022": 5, "2024": 5, "2025": 4 },
        cities: [{ name: "Milan", count: 11 }, { name: "Bologna", count: 5 }, { name: "Genoa", count: 4 }, { name: "Rome", count: 2 }],
        nationalities: [{ name: "Italian", code: "it", count: 18 }, { name: "Dutch", code: "nl", count: 2 }, { name: "Belgian", code: "be", count: 2 }],
        universities: [{ name: "University of Bologna", count: 6 }, { name: "Bocconi University", count: 2 }],
        coords: [41.8719, 12.5674]
    },
    "fr": {
        name: "France", code: "fr", count: 30,
        gender: { Female: 22, Male: 8 },
        graduationYears: { "2020": 6, "2021": 2, "2022": 4, "2023": 3, "2024": 8, "2025": 5 },
        cities: [{ name: "Paris", count: 20 }, { name: "Lyon", count: 2 }, { name: "Grenoble", count: 2 }],
        nationalities: [{ name: "French", code: "fr", count: 10 }, { name: "German", code: "de", count: 3 }, { name: "Japanese", code: "jp", count: 3 }],
        universities: [{ name: "École Polytechnique", count: 5 }, { name: "Sorbonne University", count: 2 }],
        coords: [46.2276, 2.2137]
    },
    "es": {
        name: "Spain", code: "es", count: 29,
        gender: { Male: 15, Female: 14 },
        graduationYears: { "2017": 5, "2018": 2, "2019": 3, "2020": 3, "2024": 5 },
        cities: [{ name: "Barcelona", count: 18 }, { name: "Madrid", count: 5 }],
        nationalities: [{ name: "Spanish", code: "es", count: 12 }, { name: "Italian", code: "it", count: 6 }],
        universities: [{ name: "University of Barcelona", count: 4 }, { name: "Pompeu Fabra University", count: 3 }],
        coords: [40.4637, -3.7492]
    },
    "dk": {
        name: "Denmark", code: "dk", count: 24,
        gender: { Female: 15, Male: 9 },
        graduationYears: { "2020": 4, "2023": 7, "2024": 2, "2025": 6 },
        cities: [{ name: "Copenhagen", count: 21 }],
        nationalities: [{ name: "Dutch", code: "nl", count: 6 }, { name: "German", code: "de", count: 5 }, { name: "Belgian", code: "be", count: 4 }],
        universities: [{ name: "University of Copenhagen", count: 16 }, { name: "Technical University of Denmark", count: 4 }],
        coords: [56.2639, 9.5018]
    },
    "us": {
        name: "United States", code: "us", count: 21,
        gender: { Female: 11, Male: 10 },
        graduationYears: { "2019": 2, "2020": 2, "2022": 3, "2023": 9, "2024": 2 },
        cities: [{ name: "Boston", count: 4 }, { name: "San Francisco", count: 2 }, { name: "New York", count: 2 }],
        nationalities: [{ name: "Indian", code: "in", count: 3 }, { name: "German", code: "de", count: 3 }, { name: "American", code: "us", count: 2 }],
        universities: [{ name: "Harvard University", count: 1 }, { name: "Johns Hopkins University", count: 1 }, { name: "UCLA", count: 1 }],
        coords: [37.0902, -95.7129]
    },
    "fi": {
        name: "Finland", code: "fi", count: 18,
        gender: { Female: 12, Male: 6 },
        graduationYears: { "2017": 3, "2018": 2, "2021": 2, "2022": 4, "2024": 3 },
        cities: [{ name: "Helsinki", count: 17 }],
        nationalities: [{ name: "Finnish", code: "fi", count: 7 }, { name: "Dutch", code: "nl", count: 5 }],
        universities: [{ name: "University of Helsinki", count: 5 }, { name: "Aalto University", count: 3 }],
        coords: [61.9241, 25.7482]
    },
    "at": {
        name: "Austria", code: "at", count: 17,
        gender: { Female: 10, Male: 7 },
        graduationYears: { "2018": 2, "2020": 2, "2022": 3, "2023": 4, "2024": 5 },
        cities: [{ name: "Vienna", count: 13 }],
        nationalities: [{ name: "German", code: "de", count: 6 }, { name: "Turkish", code: "tr", count: 3 }],
        universities: [{ name: "University of Vienna", count: 2 }, { name: "TU Wien", count: 2 }],
        coords: [47.5162, 14.5501]
    },
    "ie": {
        name: "Ireland", code: "ie", count: 10,
        gender: { Female: 8, Male: 2 },
        graduationYears: { "2020": 3, "2021": 1, "2023": 1, "2024": 1, "2025": 2 },
        cities: [{ name: "Dublin", count: 7 }, { name: "Cork", count: 2 }],
        nationalities: [{ name: "Belgian", code: "be", count: 2 }, { name: "Irish", code: "ie", count: 2 }],
        universities: [{ name: "University College Dublin", count: 4 }, { name: "Trinity College Dublin", count: 2 }],
        coords: [53.1424, -7.6921]
    },
    "lu": {
        name: "Luxembourg", code: "lu", count: 9,
        gender: { Female: 7, Male: 2 },
        graduationYears: { "2020": 4, "2021": 2, "2022": 1, "2023": 1 },
        cities: [{ name: "Luxembourg City", count: 6 }],
        nationalities: [{ name: "Luxembourgish", code: "lu", count: 4 }, { name: "Greek", code: "gr", count: 2 }],
        universities: [{ name: "University of Luxembourg", count: 1 }],
        coords: [49.8153, 6.1296]
    },
    "ca": {
        name: "Canada", code: "ca", count: 8,
        gender: { Female: 6, Male: 2 },
        graduationYears: { "2014": 1, "2017": 2, "2018": 1, "2019": 1, "2022": 1 },
        cities: [{ name: "Toronto", count: 4 }, { name: "Montreal", count: 1 }],
        nationalities: [{ name: "Dutch", code: "nl", count: 2 }, { name: "British", code: "gb", count: 2 }, { name: "Belgian", code: "be", count: 2 }],
        universities: [{ name: "McGill University", count: 2 }, { name: "University of Toronto", count: 1 }],
        coords: [56.1304, -106.3468]
    },
    "pt": {
        name: "Portugal", code: "pt", count: 8,
        gender: { Female: 4, Male: 4 },
        graduationYears: { "2020": 1, "2021": 2, "2022": 1, "2023": 2, "2025": 1 },
        cities: [{ name: "Lisbon", count: 5 }, { name: "Porto", count: 1 }],
        nationalities: [{ name: "Belgian", code: "be", count: 2 }, { name: "Bulgarian", code: "bg", count: 2 }],
        universities: [{ name: "University of Lisbon", count: 1 }],
        coords: [39.3999, -8.2245]
    },
    "no": {
        name: "Norway", code: "no", count: 6,
        gender: { Female: 5, Male: 1 },
        graduationYears: { "2015": 1, "2018": 1, "2019": 1, "2023": 3 },
        cities: [{ name: "Oslo", count: 4 }, { name: "Bergen", count: 1 }],
        nationalities: [{ name: "Dutch", code: "nl", count: 2 }, { name: "Norwegian", code: "no", count: 1 }],
        universities: [{ name: "University of Oslo", count: 1 }],
        coords: [60.4720, 8.4689]
    },
    "gr": {
        name: "Greece", code: "gr", count: 5,
        gender: { Female: 4, Male: 1 },
        graduationYears: { "2021": 2, "2022": 1, "2023": 1, "2025": 1 },
        cities: [{ name: "Athens", count: 3 }, { name: "Thessaloniki", count: 2 }],
        nationalities: [{ name: "Greek", code: "gr", count: 4 }],
        universities: [{ name: "University of Athens", count: 1 }],
        coords: [39.0742, 21.8243]
    },
    "au": {
        name: "Australia", code: "au", count: 7,
        gender: { Male: 4, Female: 3 },
        graduationYears: { "2017": 2, "2021": 2, "2024": 1, "2025": 2 },
        cities: [{ name: "Sydney", count: 2 }, { name: "Melbourne", count: 1 }],
        nationalities: [{ name: "Australian", code: "au", count: 2 }, { name: "British", code: "gb", count: 1 }],
        universities: [{ name: "James Cook University", count: 2 }],
        coords: [-25.2744, 133.7751]
    }
};

// University logos mapping (placeholder)
const UNIVERSITY_LOGOS = {};
