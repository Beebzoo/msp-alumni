// Alumni data will be loaded from JSON file
let alumniData = null;
let map = null;
let currentView = 'current';
let countryMarkers = {};

// Initialize the map when page loads
document.addEventListener('DOMContentLoaded', async function() {
    await loadAlumniData();
    initializeMap();
    setupToggleButtons();
    updateStatistics();
});

// Load alumni data from JSON
async function loadAlumniData() {
    try {
        const response = await fetch('alumni_data.json');
        alumniData = await response.json();
        console.log('Alumni data loaded:', alumniData);
    } catch (error) {
        console.error('Error loading alumni data:', error);
        // Fallback to demo data if file not found
        alumniData = createDemoData();
    }
}

// Initialize the Leaflet map
function initializeMap() {
    // Create map centered on Europe
    map = L.map('world-map', {
        center: [50, 10],
        zoom: 4,
        minZoom: 2,
        maxZoom: 10,
        worldCopyJump: true
    });

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Add markers for countries
    addCountryMarkers();
}

// Country coordinates (major cities as representatives)
const countryCoordinates = {
    'Netherlands': [52.3676, 4.9041],
    'Germany': [52.5200, 13.4050],
    'United Kingdom': [51.5074, -0.1278],
    'Belgium': [50.8503, 4.3517],
    'Sweden': [59.3293, 18.0686],
    'Switzerland': [46.9481, 7.4474],
    'Spain': [40.4168, -3.7038],
    'Italy': [41.9028, 12.4964],
    'France': [48.8566, 2.3522],
    'Denmark': [55.6761, 12.5683],
    'United States': [38.9072, -77.0369],
    'Austria': [48.2082, 16.3738],
    'Finland': [60.1699, 24.9384],
    'Scotland': [55.9533, -3.1883],
    'Norway': [59.9139, 10.7522],
    'Poland': [52.2297, 21.0122],
    'Portugal': [38.7223, -9.1393],
    'Czech Republic': [50.0755, 14.4378],
    'Ireland': [53.3498, -6.2603],
    'Hungary': [47.4979, 19.0402],
    'Greece': [37.9838, 23.7275],
    'Romania': [44.4268, 26.1025],
    'Australia': [-33.8688, 151.2093],
    'Canada': [45.4215, -75.6972],
    'China': [39.9042, 116.4074],
    'Japan': [35.6762, 139.6503],
    'South Korea': [37.5665, 126.9780],
    'Singapore': [1.3521, 103.8198],
    'India': [28.6139, 77.2090],
    'Brazil': [-23.5505, -46.6333],
    'Mexico': [19.4326, -99.1332],
    'South Africa': [-33.9249, 18.4241],
    'New Zealand': [-36.8485, 174.7633],
    'USA': [38.9072, -77.0369],
    'Luxembourg': [49.6116, 6.1319],
    'Croatia': [45.8150, 15.9819],
    'Slovenia': [46.0569, 14.5058],
    'Estonia': [59.4370, 24.7536],
    'Latvia': [56.9496, 24.1052],
    'Lithuania': [54.6872, 25.2797],
    'Bulgaria': [42.6977, 23.3219],
    'Cyprus': [35.1264, 33.4299],
    'Iceland': [64.1466, -21.9426],
    'Malta': [35.8989, 14.5146],
    'Turkey': [39.9334, 32.8597],
    'Israel': [31.7683, 35.2137],
    'United Arab Emirates': [25.2048, 55.2708],
    'Hong Kong': [22.3193, 114.1694],
    'Taiwan': [25.0330, 121.5654],
    'Thailand': [13.7563, 100.5018],
    'Vietnam': [21.0285, 105.8542],
    'Indonesia': [-6.2088, 106.8456],
    'Malaysia': [3.1390, 101.6869],
    'Philippines': [14.5995, 120.9842],
    'Argentina': [-34.6037, -58.3816],
    'Chile': [-33.4489, -70.6693],
    'Colombia': [4.7110, -74.0721],
    'Peru': [-12.0464, -77.0428],
    'Costa Rica': [9.9281, -84.0907],
    'Panama': [8.9824, -79.5199],
    'Egypt': [30.0444, 31.2357],
    'Morocco': [33.9716, -6.8498],
    'Kenya': [-1.2921, 36.8219],
    'Nigeria': [9.0765, 7.3986],
    'Ghana': [5.6037, -0.1870]
};

// Add markers for each country with alumni
function addCountryMarkers() {
    if (!alumniData || !alumniData.summary) return;

    // Clear existing markers
    Object.values(countryMarkers).forEach(marker => marker.remove());
    countryMarkers = {};

    Object.entries(alumniData.summary).forEach(([country, data]) => {
        const coords = countryCoordinates[country];
        if (!coords) {
            console.log(`No coordinates for: ${country}`);
            return;
        }

        let count, color, opacity;
        
        if (currentView === 'current') {
            count = data.current;
            color = '#00A2DB'; // UM Light Blue
            opacity = count > 0 ? 0.7 : 0;
        } else if (currentView === 'masters') {
            count = data.masters;
            color = '#AE0B12'; // UM Master Red
            opacity = count > 0 ? 0.7 : 0;
        } else {
            count = data.current + data.masters;
            color = '#E84E10'; // UM Orange-Red
            opacity = count > 0 ? 0.7 : 0;
        }

        if (count === 0) return;

        // Create circle marker
        const radius = Math.sqrt(count) * 3 + 5;
        const marker = L.circleMarker(coords, {
            radius: radius,
            fillColor: color,
            color: '#001C3D',
            weight: 2,
            opacity: opacity,
            fillOpacity: 0.6
        }).addTo(map);

        // Create popup content
        const popupContent = createPopupContent(country, data);
        marker.bindPopup(popupContent);

        // Add hover effect
        marker.on('mouseover', function() {
            this.setStyle({
                fillOpacity: 0.9,
                weight: 3
            });
        });

        marker.on('mouseout', function() {
            this.setStyle({
                fillOpacity: 0.6,
                weight: 2
            });
        });

        // Click to show country details
        marker.on('click', function() {
            showCountryDetails(country);
        });

        countryMarkers[country] = marker;
    });
}

// Create popup content for country marker
function createPopupContent(country, data) {
    let content = `<div style="padding: 10px; min-width: 200px;">
        <h3 style="color: #001C3D; margin-bottom: 10px; font-size: 1.2rem;">${country}</h3>`;

    if (currentView === 'current' || currentView === 'both') {
        content += `<p style="margin: 5px 0;"><strong style="color: #00A2DB;">Currently Living:</strong> ${data.current} alumni</p>`;
    }
    
    if (currentView === 'masters' || currentView === 'both') {
        content += `<p style="margin: 5px 0;"><strong style="color: #AE0B12;">Masters Students:</strong> ${data.masters} alumni</p>`;
    }

    content += `<button onclick="showCountryDetails('${country}')" style="
        margin-top: 10px;
        padding: 8px 16px;
        background-color: #00A2DB;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
    ">View Details</button></div>`;

    return content;
}

// Setup toggle buttons for view switching
function setupToggleButtons() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update view
            currentView = this.dataset.view;
            
            // Refresh markers
            addCountryMarkers();
        });
    });
}

// Show detailed information for a specific country
function showCountryDetails(country) {
    // For now, create an alert with basic info
    // This will be replaced with a detailed page later
    const data = alumniData.summary[country];
    const details = alumniData.details[country];
    
    let message = `${country}\n\n`;
    message += `Currently Living: ${data.current} alumni\n`;
    message += `Masters Students: ${data.masters} alumni\n\n`;
    
    if (details && details.universities) {
        message += `Top Universities:\n`;
        const topUniversities = Object.entries(details.universities)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        topUniversities.forEach(([uni, count]) => {
            if (uni !== 'n.a.' && uni !== 'Not Applicable') {
                message += `- ${uni}: ${count} alumni\n`;
            }
        });
    }
    
    alert(message);
    
    // TODO: Navigate to country detail page
    // window.location.href = `country.html?country=${encodeURIComponent(country)}`;
}

// Update statistics in the stats bar
function updateStatistics() {
    if (!alumniData) return;
    
    document.getElementById('total-alumni').textContent = 
        alumniData.total_alumni.toLocaleString();
    
    document.getElementById('total-countries').textContent = 
        alumniData.total_countries_current + '+';
}

// Create demo data (fallback if JSON not loaded)
function createDemoData() {
    return {
        summary: {
            'Netherlands': { current: 445, masters: 487 },
            'Germany': { current: 92, masters: 49 },
            'United Kingdom': { current: 71, masters: 86 },
            'Belgium': { current: 68, masters: 42 },
            'Sweden': { current: 49, masters: 55 }
        },
        details: {},
        total_alumni: 1329,
        total_countries_current: 60,
        total_countries_masters: 46
    };
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
