// ============================================
// MSP ALUMNI DATABASE - COUNTRY DATA
// Generated from 1330 alumni records
// 20 countries with sufficient data (n>=5)
// Privacy threshold: n>=5 for totals, n>=3 for breakdowns
// Last updated: December 2025
// ============================================

// Nationality to flag code mapping
const nationalityFlags = {
    "Dutch": "nl",
    "German": "de",
    "Belgian": "be",
    "Italian": "it",
    "British": "gb",
    "Spanish": "es",
    "Polish": "pl",
    "Romanian": "ro",
    "French": "fr",
    "American": "us",
    "Chinese": "cn",
    "Swedish": "se",
    "Swiss": "ch",
    "Austrian": "at",
    "Danish": "dk",
    "Norwegian": "no",
    "Finnish": "fi",
    "Irish": "ie",
    "Greek": "gr",
    "Portuguese": "pt",
    "Turkish": "tr",
    "Russian": "ru",
    "Australian": "au",
    "Canadian": "ca",
    "Hungarian": "hu",
    "Czech": "cz",
    "Slovak": "sk",
    "Croatian": "hr",
    "Slovenian": "si",
    "Bulgarian": "bg",
    "Latvian": "lv",
    "Lithuanian": "lt",
    "Estonian": "ee",
    "Ukrainian": "ua",
    "Japanese": "jp",
    "Korean": "kr",
    "Indian": "in",
    "Pakistani": "pk",
    "Brazilian": "br",
    "Mexican": "mx",
    "Luxembourgish": "lu",
    "Cypriot": "cy",
    "Maltese": "mt",
    "Icelandic": "is",
    "Serbian": "rs",
    "Bosnian": "ba",
    "Albanian": "al",
    "Macedonian": "mk",
    "Taiwanese": "tw",
    "Singaporean": "sg",
    "Malaysian": "my",
    "Thai": "th",
    "Vietnamese": "vn",
    "Indonesian": "id",
    "Filipino": "ph",
    "Argentinian": "ar",
    "Chilean": "cl",
    "Colombian": "co",
    "Peruvian": "pe",
    "Venezuelan": "ve",
    "South African": "za",
    "Egyptian": "eg",
    "Moroccan": "ma",
    "Nigerian": "ng",
    "Kenyan": "ke",
    "Israeli": "il",
    "Iranian": "ir",
    "Saudi": "sa",
    "Emirati": "ae",
    "New Zealander": "nz"
};

// Main alumni database
const alumniDatabase = {
    "Australia": {
        "code": "AU",
        "displayName": "Australia",
        "total": 8,
        "living": 8,
        "studied": 2,
        "hasDetailedData": false,
        "coordinates": [-25.2744, 133.7751],
        "zoom": 4,
        "graduationYears": {
            "2017": 2,
            "2021": 3,
            "2024": 1,
            "2025": 2
        },
        "gender": {
            "Female": 4,
            "Male": 4
        },
        "origins": {
            "International": 5
        }
    },
    
    "Austria": {
        "code": "AT",
        "displayName": "Austria",
        "total": 17,
        "living": 17,
        "studied": 10,
        "hasDetailedData": true,
        "coordinates": [47.5162, 14.5501],
        "zoom": 7,
        "graduationYears": {
            "2015": 1,
            "2018": 2,
            "2020": 2,
            "2022": 4,
            "2023": 4,
            "2024": 4
        },
        "gender": {
            "Female": 9,
            "Male": 8
        },
        "origins": {
            "International": 9,
            "Euregio (non-Limburg)": 8
        },
        "nationalities": {
            "German": 6,
            "Turkish": 3
        },
        "cities": [
            { "name": "Vienna", "count": 14 }
        ]
    },
    
    "Belgium": {
        "code": "BE",
        "displayName": "Belgium",
        "total": 70,
        "living": 70,
        "studied": 42,
        "hasDetailedData": true,
        "coordinates": [50.5039, 4.4699],
        "zoom": 8,
        "graduationYears": {
            "2014": 3, "2015": 2, "2016": 5, "2017": 7, "2018": 2, "2019": 6,
            "2020": 6, "2021": 15, "2022": 6, "2023": 7, "2024": 4, "2025": 7
        },
        "gender": {
            "Female": 37,
            "Male": 31
        },
        "origins": {
            "International": 34,
            "Euregio (non-Limburg)": 33
        },
        "nationalities": {
            "Belgian": 29,
            "Italian": 6,
            "Dutch": 5,
            "German": 4,
            "Spanish": 3,
            "Luxembourgish": 3
        },
        "cities": [
            { "name": "Brussels", "count": 33 },
            { "name": "Leuven", "count": 13 },
            { "name": "Ghent", "count": 4 },
            { "name": "Antwerp", "count": 4 },
            { "name": "Liège", "count": 3 }
        ],
        "universities": [
            { "name": "KU Leuven", "city": "Leuven", "count": 20, "lat": 50.8798, "lng": 4.7005, "logo": "ku-leuven.png" },
            { "name": "Vrije Universiteit Brussel", "city": "Brussels", "count": 5, "lat": 50.8225, "lng": 4.3954, "logo": "vrije-universiteit-brussel.png" }
        ]
    },
    
    "Canada": {
        "code": "CA",
        "displayName": "Canada",
        "total": 9,
        "living": 9,
        "studied": 6,
        "hasDetailedData": false,
        "coordinates": [56.1304, -106.3468],
        "zoom": 3,
        "graduationYears": {
            "2014": 1, "2015": 1, "2017": 2, "2018": 1, "2019": 1, "2020": 1, "2022": 1, "2025": 1
        },
        "origins": {
            "International": 5
        },
        "cities": [
            { "name": "Toronto", "count": 4 }
        ]
    },
    
    "Denmark": {
        "code": "DK",
        "displayName": "Denmark",
        "total": 24,
        "living": 24,
        "studied": 22,
        "hasDetailedData": true,
        "coordinates": [56.0, 10.0],
        "zoom": 6,
        "graduationYears": {
            "2016": 1, "2017": 1, "2019": 1, "2020": 4, "2021": 1,
            "2022": 1, "2023": 7, "2024": 2, "2025": 6
        },
        "gender": {
            "Female": 15,
            "Male": 9
        },
        "origins": {
            "International": 11,
            "Euregio (non-Limburg)": 10
        },
        "nationalities": {
            "Dutch": 6,
            "German": 5,
            "Belgian": 4,
            "Luxembourgish": 3
        },
        "cities": [
            { "name": "Copenhagen", "count": 21 }
        ],
        "universities": [
            { "name": "University of Copenhagen", "city": "Copenhagen", "count": 12, "lat": 55.6761, "lng": 12.5683, "logo": "university-of-copenhagen.png" }
        ]
    },
    
    "Finland": {
        "code": "FI",
        "displayName": "Finland",
        "total": 18,
        "living": 18,
        "studied": 7,
        "hasDetailedData": true,
        "coordinates": [64.0, 26.0],
        "zoom": 4,
        "graduationYears": {
            "2014": 1, "2017": 3, "2018": 2, "2020": 1, "2021": 2,
            "2022": 4, "2023": 1, "2024": 3, "2025": 1
        },
        "gender": {
            "Female": 11,
            "Male": 7
        },
        "origins": {
            "International": 13,
            "Euregio (non-Limburg)": 3
        },
        "nationalities": {
            "Finnish": 8,
            "Dutch": 4
        },
        "cities": [
            { "name": "Helsinki", "count": 17 }
        ]
    },
    
    "France": {
        "code": "FR",
        "displayName": "France",
        "total": 28,
        "living": 28,
        "studied": 21,
        "hasDetailedData": true,
        "coordinates": [46.6, 2.3],
        "zoom": 5,
        "graduationYears": {
            "2015": 2, "2020": 6, "2021": 2, "2022": 5, "2023": 3, "2024": 7, "2025": 3
        },
        "gender": {
            "Female": 19,
            "Male": 9
        },
        "origins": {
            "International": 22,
            "Euregio (non-Limburg)": 4
        },
        "nationalities": {
            "French": 8,
            "German": 4,
            "Japanese": 3
        },
        "cities": [
            { "name": "Paris", "count": 18 }
        ],
        "universities": [
            { "name": "École Polytechnique", "city": "Paris", "count": 5, "lat": 48.7128, "lng": 2.2107, "logo": "ecole-polytechnique.png" }
        ]
    },
    
    "Germany": {
        "code": "DE",
        "displayName": "Germany",
        "total": 92,
        "living": 92,
        "studied": 49,
        "hasDetailedData": true,
        "coordinates": [51.1657, 10.4515],
        "zoom": 6,
        "graduationYears": {
            "2014": 4, "2015": 11, "2016": 8, "2017": 4, "2018": 10, "2019": 6,
            "2020": 4, "2021": 9, "2022": 8, "2023": 13, "2024": 6, "2025": 9
        },
        "gender": {
            "Female": 63,
            "Male": 29
        },
        "origins": {
            "Euregio (non-Limburg)": 51,
            "International": 37,
            "Netherlands (non-Euregio)": 4
        },
        "nationalities": {
            "German": 42,
            "Dutch": 7,
            "Belgian": 6,
            "Italian": 6,
            "Luxembourgish": 4,
            "Romanian": 3,
            "British": 3,
            "Spanish": 3
        },
        "cities": [
            { "name": "Munich", "count": 22 },
            { "name": "Berlin", "count": 20 },
            { "name": "Hamburg", "count": 5 },
            { "name": "Cologne", "count": 4 },
            { "name": "Tübingen", "count": 4 },
            { "name": "Freiburg", "count": 3 },
            { "name": "Frankfurt", "count": 3 },
            { "name": "Heidelberg", "count": 3 }
        ],
        "universities": [
            { "name": "Technical University of Munich", "city": "Munich", "count": 7, "lat": 48.1497, "lng": 11.5679, "logo": "technical-university-of-munich.png" }
        ]
    },
    
    "Greece": {
        "code": "GR",
        "displayName": "Greece",
        "total": 5,
        "living": 5,
        "studied": 3,
        "hasDetailedData": false,
        "coordinates": [39.0742, 21.8243],
        "zoom": 6,
        "graduationYears": {
            "2021": 2, "2022": 1, "2023": 1, "2025": 1
        },
        "origins": {
            "International": 4
        },
        "nationalities": {
            "Greek": 4
        },
        "cities": [
            { "name": "Athens", "count": 3 }
        ]
    },
    
    "Ireland": {
        "code": "IE",
        "displayName": "Ireland",
        "total": 9,
        "living": 9,
        "studied": 7,
        "hasDetailedData": false,
        "coordinates": [53.4129, -8.2439],
        "zoom": 6,
        "graduationYears": {
            "2015": 1, "2017": 1, "2020": 3, "2021": 1, "2023": 1, "2024": 1, "2025": 1
        },
        "origins": {
            "International": 5,
            "Euregio (non-Limburg)": 3
        },
        "cities": [
            { "name": "Dublin", "count": 6 }
        ]
    },
    
    "Italy": {
        "code": "IT",
        "displayName": "Italy",
        "total": 29,
        "living": 29,
        "studied": 22,
        "hasDetailedData": true,
        "coordinates": [41.8719, 12.5674],
        "zoom": 5,
        "graduationYears": {
            "2014": 1, "2016": 2, "2017": 2, "2018": 2, "2019": 2,
            "2020": 6, "2021": 2, "2022": 5, "2024": 4, "2025": 3
        },
        "gender": {
            "Female": 22,
            "Male": 7
        },
        "origins": {
            "International": 27
        },
        "nationalities": {
            "Italian": 16
        },
        "cities": [
            { "name": "Milan", "count": 9 },
            { "name": "Bologna", "count": 5 },
            { "name": "Genoa", "count": 4 }
        ],
        "universities": [
            { "name": "University of Bologna", "city": "Bologna", "count": 7, "lat": 44.4949, "lng": 11.3426, "logo": "university-of-bologna.png" }
        ]
    },
    
    "Luxembourg": {
        "code": "LU",
        "displayName": "Luxembourg",
        "total": 9,
        "living": 9,
        "studied": 1,
        "hasDetailedData": false,
        "coordinates": [49.8153, 6.1296],
        "zoom": 10,
        "graduationYears": {
            "2018": 1, "2020": 4, "2021": 2, "2022": 1, "2023": 1
        },
        "origins": {
            "International": 6,
            "Euregio (non-Limburg)": 3
        },
        "nationalities": {
            "Luxembourgish": 4
        },
        "cities": [
            { "name": "Luxembourg City", "count": 7 }
        ]
    },
    
    "Netherlands": {
        "code": "NL",
        "displayName": "the Netherlands",
        "total": 495,
        "living": 456,
        "studied": 495,
        "hasDetailedData": true,
        "coordinates": [52.1326, 5.2913],
        "zoom": 7,
        "graduationYears": {
            "2014": 5, "2015": 11, "2016": 22, "2017": 22, "2018": 19, "2019": 25,
            "2020": 40, "2021": 50, "2022": 54, "2023": 63, "2024": 69, "2025": 76
        },
        "gender": {
            "Female": 271,
            "Male": 185
        },
        "origins": {
            "International": 278,
            "Euregio (non-Limburg)": 73,
            "Netherlands (non-Euregio)": 54,
            "Limburg": 51
        },
        "nationalities": {
            "Dutch": 155,
            "German": 44,
            "Belgian": 35,
            "Italian": 27,
            "British": 18,
            "Spanish": 18,
            "Polish": 15,
            "Romanian": 11,
            "French": 9,
            "Hungarian": 8,
            "Turkish": 8,
            "Irish": 7
        },
        "cities": [
            { "name": "Maastricht", "count": 107 },
            { "name": "Amsterdam", "count": 102 },
            { "name": "Utrecht", "count": 72 },
            { "name": "Leiden", "count": 35 },
            { "name": "Wageningen", "count": 19 },
            { "name": "Groningen", "count": 18 },
            { "name": "Nijmegen", "count": 18 },
            { "name": "Eindhoven", "count": 10 },
            { "name": "Rotterdam", "count": 8 },
            { "name": "The Hague", "count": 7 },
            { "name": "Delft", "count": 7 },
            { "name": "Geleen", "count": 5 }
        ],
        "universities": [
            { "name": "Maastricht University", "city": "Maastricht", "count": 125, "lat": 50.8514, "lng": 5.6910, "logo": "maastricht-university.png" },
            { "name": "Utrecht University", "city": "Utrecht", "count": 91, "lat": 52.0855, "lng": 5.1744, "logo": "utrecht-university.png" },
            { "name": "University of Amsterdam", "city": "Amsterdam", "count": 69, "lat": 52.3559, "lng": 4.9552, "logo": "university-of-amsterdam.png" },
            { "name": "Leiden University", "city": "Leiden", "count": 43, "lat": 52.1575, "lng": 4.4856, "logo": "leiden-university.png" },
            { "name": "Wageningen University & Research", "city": "Wageningen", "count": 38, "lat": 51.9692, "lng": 5.6654, "logo": "wageningen-university-and-research.png" },
            { "name": "Radboud University", "city": "Nijmegen", "count": 37, "lat": 51.8207, "lng": 5.8656, "logo": "radboud-university.png" },
            { "name": "University of Groningen", "city": "Groningen", "count": 23, "lat": 53.2194, "lng": 6.5665, "logo": "university-of-groningen.png" },
            { "name": "Delft University of Technology", "city": "Delft", "count": 19, "lat": 52.0021, "lng": 4.3734, "logo": "delft-university-of-technology.png" },
            { "name": "Vrije Universiteit Amsterdam", "city": "Amsterdam", "count": 15, "lat": 52.3340, "lng": 4.8668, "logo": "vrije-universiteit-amsterdam.png" },
            { "name": "Eindhoven University of Technology", "city": "Eindhoven", "count": 9, "lat": 51.4478, "lng": 5.4904, "logo": "eindhoven-university-of-technology.png" }
        ]
    },
    
    "Norway": {
        "code": "NO",
        "displayName": "Norway",
        "total": 7,
        "living": 7,
        "studied": 5,
        "hasDetailedData": false,
        "coordinates": [64.0, 10.0],
        "zoom": 4,
        "graduationYears": {
            "2015": 1, "2018": 1, "2019": 1, "2023": 4
        },
        "origins": {
            "International": 4
        },
        "cities": [
            { "name": "Oslo", "count": 4 }
        ]
    },
    
    "Portugal": {
        "code": "PT",
        "displayName": "Portugal",
        "total": 8,
        "living": 8,
        "studied": 5,
        "hasDetailedData": false,
        "coordinates": [39.3999, -8.2245],
        "zoom": 6,
        "graduationYears": {
            "2016": 1, "2020": 1, "2021": 2, "2022": 1, "2023": 2, "2025": 1
        },
        "gender": {
            "Female": 4,
            "Male": 4
        },
        "origins": {
            "International": 5
        },
        "cities": [
            { "name": "Lisbon", "count": 5 }
        ]
    },
    
    "Spain": {
        "code": "ES",
        "displayName": "Spain",
        "total": 30,
        "living": 30,
        "studied": 26,
        "hasDetailedData": true,
        "coordinates": [40.4637, -3.7492],
        "zoom": 5,
        "graduationYears": {
            "2014": 2, "2015": 1, "2017": 5, "2018": 2, "2019": 3,
            "2020": 3, "2021": 2, "2022": 2, "2023": 2, "2024": 5, "2025": 3
        },
        "gender": {
            "Female": 14,
            "Male": 16
        },
        "origins": {
            "International": 25,
            "Euregio (non-Limburg)": 4
        },
        "nationalities": {
            "Spanish": 13,
            "Italian": 7
        },
        "cities": [
            { "name": "Barcelona", "count": 20 },
            { "name": "Madrid", "count": 5 }
        ]
    },
    
    "Sweden": {
        "code": "SE",
        "displayName": "Sweden",
        "total": 57,
        "living": 51,
        "studied": 57,
        "hasDetailedData": true,
        "coordinates": [62.0, 15.0],
        "zoom": 4,
        "graduationYears": {
            "2014": 1, "2016": 1, "2017": 1, "2018": 1, "2019": 2,
            "2020": 6, "2021": 4, "2022": 9, "2023": 4, "2024": 14, "2025": 8
        },
        "gender": {
            "Female": 28,
            "Male": 23
        },
        "origins": {
            "International": 29,
            "Euregio (non-Limburg)": 15,
            "Netherlands (non-Euregio)": 4,
            "Limburg": 3
        },
        "nationalities": {
            "German": 11,
            "Dutch": 8,
            "Belgian": 7,
            "Italian": 4,
            "Polish": 4
        },
        "cities": [
            { "name": "Stockholm", "count": 17 },
            { "name": "Uppsala", "count": 17 },
            { "name": "Lund", "count": 9 }
        ],
        "universities": [
            { "name": "Uppsala University", "city": "Uppsala", "count": 18, "lat": 59.8586, "lng": 17.6389, "logo": "uppsala-university.png" },
            { "name": "Lund University", "city": "Lund", "count": 14, "lat": 55.7047, "lng": 13.1910, "logo": "lund-university.png" },
            { "name": "Karolinska Institutet", "city": "Stockholm", "count": 9, "lat": 59.3498, "lng": 18.0269, "logo": "karolinska-institutet.png" },
            { "name": "Stockholm University", "city": "Stockholm", "count": 9, "lat": 59.3639, "lng": 18.0587, "logo": "stockholm-university.png" }
        ]
    },
    
    "Switzerland": {
        "code": "CH",
        "displayName": "Switzerland",
        "total": 41,
        "living": 41,
        "studied": 25,
        "hasDetailedData": true,
        "coordinates": [46.8182, 8.2275],
        "zoom": 7,
        "graduationYears": {
            "2014": 2, "2015": 1, "2016": 2, "2017": 4, "2019": 5,
            "2021": 6, "2022": 2, "2023": 2, "2024": 7, "2025": 10
        },
        "gender": {
            "Female": 31,
            "Male": 10
        },
        "origins": {
            "International": 29,
            "Euregio (non-Limburg)": 8
        },
        "nationalities": {
            "German": 8,
            "Italian": 5,
            "Swiss": 4,
            "Belgian": 4,
            "Spanish": 3,
            "French": 3,
            "Dutch": 3
        },
        "cities": [
            { "name": "Zürich", "count": 22 },
            { "name": "Lausanne", "count": 5 },
            { "name": "Basel", "count": 4 }
        ],
        "universities": [
            { "name": "ETH Zurich", "city": "Zürich", "count": 8, "lat": 47.3763, "lng": 8.5479, "logo": "eth-zurich.png" }
        ]
    },
    
    "United Kingdom": {
        "code": "GB",
        "displayName": "the United Kingdom",
        "total": 100,
        "living": 85,
        "studied": 100,
        "hasDetailedData": true,
        "coordinates": [54.5, -2.5],
        "zoom": 5,
        "graduationYears": {
            "2015": 7, "2016": 6, "2017": 7, "2018": 9, "2019": 9,
            "2020": 8, "2021": 8, "2022": 8, "2023": 8, "2024": 10, "2025": 5
        },
        "gender": {
            "Female": 50,
            "Male": 35
        },
        "origins": {
            "International": 65,
            "Euregio (non-Limburg)": 13,
            "Netherlands (non-Euregio)": 6
        },
        "nationalities": {
            "British": 26,
            "Dutch": 11,
            "German": 11,
            "Italian": 9,
            "Spanish": 4,
            "Belgian": 3
        },
        "cities": [
            { "name": "London", "count": 39 },
            { "name": "Edinburgh", "count": 6 },
            { "name": "Oxford", "count": 6 },
            { "name": "Cambridge", "count": 4 },
            { "name": "Glasgow", "count": 3 },
            { "name": "Liverpool", "count": 3 },
            { "name": "Birmingham", "count": 3 }
        ],
        "universities": [
            { "name": "Imperial College London", "city": "London", "count": 19, "lat": 51.4988, "lng": -0.1749, "logo": "imperial-college-london.png" },
            { "name": "University College London", "city": "London", "count": 14, "lat": 51.5246, "lng": -0.1340, "logo": "university-college-london.png" },
            { "name": "University of Cambridge", "city": "Cambridge", "count": 7, "lat": 52.2043, "lng": 0.1149, "logo": "university-of-cambridge.png" },
            { "name": "University of Edinburgh", "city": "Edinburgh", "count": 7, "lat": 55.9445, "lng": -3.1892, "logo": "university-of-edinburgh.png" },
            { "name": "University of Oxford", "city": "Oxford", "count": 7, "lat": 51.7548, "lng": -1.2544, "logo": "university-of-oxford.png" },
            { "name": "University of Birmingham", "city": "Birmingham", "count": 5, "lat": 52.4508, "lng": -1.9305, "logo": "university-of-birmingham.png" }
        ]
    },
    
    "United States": {
        "code": "US",
        "displayName": "the United States",
        "total": 23,
        "living": 23,
        "studied": 10,
        "hasDetailedData": true,
        "coordinates": [39.8283, -98.5795],
        "zoom": 4,
        "graduationYears": {
            "2017": 1, "2018": 1, "2019": 2, "2020": 2, "2021": 1,
            "2022": 4, "2023": 9, "2024": 3
        },
        "gender": {
            "Female": 13,
            "Male": 10
        },
        "origins": {
            "International": 20,
            "Euregio (non-Limburg)": 3
        },
        "nationalities": {
            "Indian": 3,
            "Dutch": 3,
            "American": 3
        },
        "cities": [
            { "name": "Boston", "count": 5 },
            { "name": "Texas", "count": 3 }
        ]
    }
};

// ============================================
// GLOBAL STATISTICS (for homepage use)
// ============================================

const globalStats = {
    totalAlumni: 1330,
    totalCountries: 20,
    totalUniversities: 228,
    totalCities: 254,
    graduationYearRange: { start: 2014, end: 2025 },
    topDestinations: [
        { country: "Netherlands", count: 456 },
        { country: "Germany", count: 92 },
        { country: "United Kingdom", count: 85 },
        { country: "Belgium", count: 70 },
        { country: "Sweden", count: 51 },
        { country: "Switzerland", count: 41 }
    ],
    topUniversities: [
        { name: "Maastricht University", country: "Netherlands", count: 125 },
        { name: "Utrecht University", country: "Netherlands", count: 91 },
        { name: "University of Amsterdam", country: "Netherlands", count: 69 },
        { name: "Leiden University", country: "Netherlands", count: 43 },
        { name: "Wageningen University & Research", country: "Netherlands", count: 38 },
        { name: "Radboud University", country: "Netherlands", count: 37 },
        { name: "University of Groningen", country: "Netherlands", count: 23 },
        { name: "KU Leuven", country: "Belgium", count: 20 },
        { name: "Imperial College London", country: "United Kingdom", count: 19 },
        { name: "Delft University of Technology", country: "Netherlands", count: 19 }
    ]
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get flag URL from country code
 */
function getFlagUrl(code, size = 40) {
    return `https://flagcdn.com/w${size}/${code.toLowerCase()}.png`;
}

/**
 * Get flag URL from nationality name
 */
function getNationalityFlagUrl(nationality, size = 40) {
    const code = nationalityFlags[nationality];
    return code ? getFlagUrl(code, size) : null;
}

/**
 * Format large numbers (e.g., 1000000 -> "1M")
 */
function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(0) + 'K';
    return num.toString();
}

/**
 * Get country data by name (case-insensitive)
 */
function getCountryData(countryName) {
    // Direct match
    if (alumniDatabase[countryName]) {
        return alumniDatabase[countryName];
    }
    
    // Case-insensitive search
    const key = Object.keys(alumniDatabase).find(
        k => k.toLowerCase() === countryName.toLowerCase()
    );
    
    return key ? alumniDatabase[key] : null;
}

/**
 * Get all countries sorted by alumni count
 */
function getCountriesByAlumniCount() {
    return Object.entries(alumniDatabase)
        .map(([name, data]) => ({ name, ...data }))
        .sort((a, b) => b.total - a.total);
}

/**
 * Get countries with detailed data only
 */
function getDetailedCountries() {
    return Object.entries(alumniDatabase)
        .filter(([_, data]) => data.hasDetailedData)
        .map(([name, data]) => ({ name, ...data }))
        .sort((a, b) => b.total - a.total);
}
