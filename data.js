// MSP Alumni Data - Extracted from Alumni Database
// Last updated: December 2025

const MSP_DATA = {
    // Summary Statistics
    summary: {
        totalAlumni: 1330,
        countries: 56,
        universities: 247,
        graduationYears: "2014-2025",
        dataUpdated: "December 2025"
    },
    
    // Links
    links: {
        mspMain: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme",
        mspAdmissions: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/application",
        mspWhyThisStudy: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/why-this-study",
        mspCourses: "https://www.maastrichtuniversity.nl/education/bachelor/maastricht-science-programme/courses",
        linkedinMspAlumni: "https://www.linkedin.com/groups/8957817/",
        linkedinFseAlumni: "https://www.linkedin.com/groups/13538740/",
        instagram: "https://www.instagram.com/msp_maastricht/",
        fse: "https://www.maastrichtuniversity.nl/about-um/faculties/science-and-engineering"
    },
    
    // World Top 10 Universities (QS Rankings 2025)
    worldTop10: [
        { rank: 1, name: "MIT", code: "us", hasAlumni: false, count: 0 },
        { rank: 2, name: "Imperial College", code: "gb", hasAlumni: true, count: 19 },
        { rank: 3, name: "Oxford", code: "gb", hasAlumni: true, count: 7 },
        { rank: 4, name: "Harvard", code: "us", hasAlumni: true, count: 1 },
        { rank: 5, name: "Cambridge", code: "gb", hasAlumni: true, count: 7 },
        { rank: 6, name: "Stanford", code: "us", hasAlumni: false, count: 0 },
        { rank: 7, name: "ETH Zürich", code: "ch", hasAlumni: true, count: 21 },
        { rank: 8, name: "NUS", code: "sg", hasAlumni: true, count: 1 },
        { rank: 9, name: "UCL", code: "gb", hasAlumni: true, count: 8 },
        { rank: 10, name: "Caltech", code: "us", hasAlumni: false, count: 0 }
    ],
    
    // Top Dutch Universities
    topDutchUniversities: [
        { name: "Maastricht University", rank: 147, mspAlumni: 123, logo: "maastricht.png", highlight: "Home Base" },
        { name: "Utrecht University", rank: 107, mspAlumni: 93, logo: "utrecht.png" },
        { name: "University of Amsterdam", rank: 53, mspAlumni: 72, logo: "uva.png", highlight: "Most Popular" },
        { name: "Leiden University", rank: 126, mspAlumni: 45, logo: "leiden.png" },
        { name: "Wageningen University", rank: 54, mspAlumni: 40, logo: "wageningen.png" },
        { name: "TU Delft", rank: 47, mspAlumni: 28, logo: "tudelft.png" },
        { name: "Erasmus University", rank: 176, mspAlumni: 25, logo: "erasmus.png" },
        { name: "VU Amsterdam", rank: 227, mspAlumni: 25, logo: "vu.png" }
    ],
    
    // Top International Universities
    topInternationalUniversities: [
        { name: "ETH Zürich", country: "Switzerland", code: "ch", rank: 7, mspAlumni: 21, logo: "eth.png" },
        { name: "Imperial College London", country: "United Kingdom", code: "gb", rank: 2, mspAlumni: 19, logo: "imperial.png" },
        { name: "KU Leuven", country: "Belgium", code: "be", rank: 59, mspAlumni: 18, logo: "kuleuven.png" },
        { name: "Karolinska Institutet", country: "Sweden", code: "se", rank: 58, mspAlumni: 17, logo: "karolinska.png" },
        { name: "UCL", country: "United Kingdom", code: "gb", rank: 9, mspAlumni: 8, logo: "ucl.png" },
        { name: "University of Oxford", country: "United Kingdom", code: "gb", rank: 3, mspAlumni: 7, logo: "oxford.png" },
        { name: "University of Cambridge", country: "United Kingdom", code: "gb", rank: 5, mspAlumni: 7, logo: "cambridge.png" },
        { name: "University of Edinburgh", country: "United Kingdom", code: "gb", rank: 27, mspAlumni: 7, logo: "edinburgh.png" }
    ],
    
    // Recruitment Page Data
    recruitment: {
        // Hero Stats
        heroStats: {
            alumni: 1330,
            countries: 56,
            universities: 247,
            topUniversities: "8/10"
        },
        
        // Hero Stat (single string)
        heroStat: "1,330+ alumni across 56 countries.",
        
        // Proof Stats (for proof bar)
        proofStats: [
            { number: "91%", label: "pursue Master's", subtext: "post-graduation" },
            { number: "31%", label: "at QS Top 100", subtext: "universities", highlight: true },
            { number: "43%", label: "stay in NL", subtext: "regional impact" },
            { number: "142", label: "PhD candidates", subtext: "& counting" }
        ],
        
        // Alumni Journeys (Success Stories)
        alumniJourneys: [
            {
                mspYear: "2018",
                masters: { uni: "ETH Zürich", program: "Biomedical Engineering", logo: "eth.png" },
                career: { company: "Roche", role: "Medical Data Scientist", type: "Healthcare" },
                tags: ["QS #7", "Switzerland", "Industry"]
            },
            {
                mspYear: "2017",
                masters: { uni: "University of Cambridge", program: "Astrophysics", logo: "cambridge.png" },
                career: { company: "Max Planck Institute", role: "Research Scientist", type: "Research" },
                tags: ["QS #5", "Academia", "Physics"]
            },
            {
                mspYear: "2019",
                masters: { uni: "KU Leuven", program: "Artificial Intelligence", logo: "kuleuven.png" },
                career: { company: "DeepMind", role: "ML Engineer", type: "Tech" },
                tags: ["Belgium", "AI/ML", "Tech"]
            },
            {
                mspYear: "2016",
                masters: { uni: "Imperial College", program: "Neuroscience", logo: "imperial.png" },
                career: { company: "Oxford University", role: "Postdoc Researcher", type: "Academia" },
                tags: ["QS #2", "UK", "Neuroscience"]
            },
            {
                mspYear: "2020",
                masters: { uni: "University of Amsterdam", program: "Bioinformatics", logo: "uva.png" },
                career: { company: "Philips Healthcare", role: "Data Scientist", type: "Healthcare" },
                tags: ["QS #53", "Netherlands", "Industry"]
            },
            {
                mspYear: "2015",
                masters: { uni: "Karolinska Institutet", program: "Biomedical Science", logo: "karolinska.png" },
                career: { company: "Own Startup", role: "Founder & CEO", type: "Entrepreneur" },
                tags: ["Sweden", "Healthcare", "Startup"]
            }
        ],
        
        // Career Paths
        careerPaths: [
            { title: "Academia & Research", count: 270, icon: "microscope", examples: ["PhD Researchers", "Postdocs", "Professors"] },
            { title: "Technology & IT", count: 68, icon: "code", examples: ["Software Engineers", "Data Scientists", "AI/ML"] },
            { title: "Healthcare", count: 33, icon: "heart-pulse", examples: ["Medical Researchers", "Biotech", "Pharma"] },
            { title: "Consulting", count: 31, icon: "briefcase", examples: ["Strategy", "Management", "Technical"] },
            { title: "Finance", count: 22, icon: "trending-up", examples: ["Quant Analysts", "Risk", "Fintech"] },
            { title: "Government & NGO", count: 18, icon: "landmark", examples: ["Policy", "International Orgs", "Science Policy"] }
        ],
        
        // PhD Statistics
        phdStats: {
            total: 142,
            percentage: "11%",
            highlights: [
                { text: "Peak cohort rate: 27% (2017-2018)", icon: "trending-up" },
                { text: "15+ countries for PhD destinations", icon: "globe" },
                { text: "42 additional research staff positions", icon: "flask" }
            ],
            topInstitutions: [
                "University of Amsterdam (4)",
                "KU Leuven (3)",
                "University of Helsinki (2)",
                "TU Eindhoven (2)"
            ]
        },
        
        // Programme Features
        programmeFeatures: [
            { title: "Interdisciplinary Foundation", description: "Combine natural sciences, mathematics, and humanities for a unique educational experience.", icon: "layers" },
            { title: "Research-Focused", description: "Early exposure to research methods and bachelor thesis research prepares you for advanced study.", icon: "microscope" },
            { title: "Problem-Based Learning", description: "Small-group tutorials develop critical thinking and collaboration skills.", icon: "users" },
            { title: "International Community", description: "Join students from 80+ nationalities in Maastricht's vibrant international setting.", icon: "globe" },
            { title: "Flexible Curriculum", description: "Choose your specialization from life sciences, physical sciences, or math & computation.", icon: "git-branch" },
            { title: "Career Preparation", description: "Industry connections, internships, and career guidance support your transition.", icon: "rocket" }
        ],
        
        // Regional Impact
        regionalStats: {
            netherlands: { current: 456, percentage: "43%" },
            limburg: { current: 121, percentage: "11%" },
            euregio: { origin: 392, stayed: 212 },
            international: { percentage: "57%" }
        }
    },
    
    // Country Data for Map
    countries: [
        { code: "NL", name: "Netherlands", count: 456 },
        { code: "DE", name: "Germany", count: 92 },
        { code: "GB", name: "United Kingdom", count: 86 },
        { code: "BE", name: "Belgium", count: 70 },
        { code: "SE", name: "Sweden", count: 51 },
        { code: "CH", name: "Switzerland", count: 41 },
        { code: "ES", name: "Spain", count: 30 },
        { code: "IT", name: "Italy", count: 29 },
        { code: "FR", name: "France", count: 28 },
        { code: "DK", name: "Denmark", count: 24 },
        { code: "US", name: "United States", count: 23 },
        { code: "FI", name: "Finland", count: 18 },
        { code: "AT", name: "Austria", count: 17 },
        { code: "IE", name: "Ireland", count: 9 },
        { code: "LU", name: "Luxembourg", count: 9 },
        { code: "CA", name: "Canada", count: 9 },
        { code: "PT", name: "Portugal", count: 8 },
        { code: "AU", name: "Australia", count: 8 },
        { code: "NO", name: "Norway", count: 7 },
        { code: "GR", name: "Greece", count: 5 }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MSP_DATA;
}
