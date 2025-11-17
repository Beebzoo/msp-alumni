# MSP Alumni Network

An interactive web platform showcasing the global reach of the Maastricht Science Programme (MSP) alumni network.

## 🌍 Overview

This website provides an interactive world map displaying where MSP alumni are currently living and where they pursued their Masters degrees. With over 1,300 alumni across 60+ countries, the MSP Alumni Network demonstrates the truly global impact of the programme.

## ✨ Features

- **Interactive World Map**: Click on any country to explore detailed alumni information
- **Toggle Views**: Switch between current locations, Masters locations, or view both
- **Country Details**: See specific cities, universities, and programmes for each country
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **UM Branding**: Professional design following Maastricht University brand guidelines

## 🎨 Design

The website follows the official Maastricht University house style:
- **Primary Colors**: Dark Blue (#001C3D), White (#FFFFFF)
- **Accent Colors**: Light Blue (#00A2DB), Orange-Red (#E84E10)
- **Typography**: Open Sans font family

## 📊 Data

The alumni data includes:
- 1,329 total alumni (2014-2025 cohorts)
- 60+ countries where alumni currently live
- 46+ countries where alumni pursued Masters degrees
- 150+ universities represented

**Data Privacy**: No personally identifiable information (names, student numbers, contact details) is displayed publicly on the website.

## 🚀 Getting Started

### View the Website

Visit: `https://beebzoo.github.io/msp-alumni/`

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Beebzoo/msp-alumni.git
cd msp-alumni
```

2. Open `index.html` in your web browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## 📁 File Structure

```
msp-alumni/
├── index.html          # Main page with world map
├── country.html        # Country detail page (coming soon)
├── styles.css          # UM-branded CSS styling
├── script.js           # Interactive map functionality
├── alumni_data.json    # Alumni data (anonymized)
└── README.md           # This file
```

## 🔄 Updating Data

The alumni data should be updated annually around December after:
1. August graduations
2. Alumni survey responses collected
3. Current information verified

To update:
1. Export updated data from your database
2. Run the data processing script to generate `alumni_data.json`
3. Update the "Last updated" date in the footer
4. Commit and push changes to GitHub

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with UM brand colors
- **JavaScript (ES6+)**: Interactive functionality
- **Leaflet.js**: Interactive map library
- **OpenStreetMap**: Map tile provider
- **GitHub Pages**: Free hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is an internal MSP project maintained by the Faculty of Science and Engineering. For questions or suggestions, contact:

**Martijn Jeurissen**  
Alumni Office Officer  
Faculty of Science and Engineering  
Maastricht University

## 📄 License

© 2024 Maastricht University. All rights reserved.

This project is for internal use by the Maastricht Science Programme and Maastricht University.

## 🔮 Future Enhancements

- [ ] Individual country detail pages
- [ ] Alumni profile cards (with consent)
- [ ] Search and filter functionality
- [ ] Timeline slider showing network growth
- [ ] Alumni success stories section
- [ ] "Connect with alumni" feature
- [ ] Career path visualizations
- [ ] Mobile app version

## 📞 Contact

For technical issues or questions about the website:
- Email: [your-email@maastrichtuniversity.nl]
- GitHub Issues: [Create an issue](https://github.com/Beebzoo/msp-alumni/issues)

---

**Maastricht Science Programme**  
Faculty of Science and Engineering  
Maastricht University  
The Netherlands
