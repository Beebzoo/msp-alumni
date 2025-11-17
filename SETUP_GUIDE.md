# Quick Setup Guide for GitHub Pages

## Step 1: Upload Files to GitHub

You have 5 files ready to upload:
- `index.html` - Main website page
- `styles.css` - UM-branded styling
- `script.js` - Interactive map functionality
- `alumni_data.json` - Alumni data
- `README.md` - Project documentation

### Option A: Using GitHub Web Interface

1. Go to your repository: https://github.com/Beebzoo/msp-alumni
2. Click "Add file" → "Upload files"
3. Drag and drop all 5 files
4. Add commit message: "Initial website setup"
5. Click "Commit changes"

### Option B: Using Git Command Line

```bash
# Navigate to your local project folder
cd /path/to/your/project

# Initialize git (if not already done)
git init

# Add your files
git add index.html styles.css script.js alumni_data.json README.md

# Commit your changes
git commit -m "Initial website setup with interactive map"

# Add remote (if not already added)
git remote add origin https://github.com/Beebzoo/msp-alumni.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository settings: https://github.com/Beebzoo/msp-alumni/settings
2. Scroll down to "Pages" section (left sidebar)
3. Under "Source", select "Deploy from a branch"
4. Select branch: `main`
5. Select folder: `/ (root)`
6. Click "Save"

## Step 3: Wait for Deployment

GitHub will automatically deploy your site. This usually takes 1-2 minutes.

Your website will be live at:
**https://beebzoo.github.io/msp-alumni/**

## Step 4: Verify It Works

1. Visit your website URL
2. Check that the map loads correctly
3. Try clicking on different countries
4. Test the toggle buttons (Current Location / Masters Location / Show Both)

## Troubleshooting

### Map doesn't load?
- Check browser console for errors (F12)
- Verify `alumni_data.json` is in the same folder as `index.html`
- Make sure all files uploaded successfully

### Markers not appearing?
- The script uses country coordinates - some countries might need manual adjustment
- Check the console for "No coordinates for: [country]" messages

### Styling looks wrong?
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check that `styles.css` loaded properly

## Updating Data in the Future

When you need to update alumni data (annually in December):

1. Update your Excel file with new data
2. Process it to create new `alumni_data.json`
3. Update the "Last updated" date in `index.html` footer:
   ```html
   <p>&copy; 2024 Maastricht University. All rights reserved. | Last updated: December 2025</p>
   ```
4. Commit and push changes:
   ```bash
   git add alumni_data.json index.html
   git commit -m "Update alumni data - December 2025"
   git push
   ```

## Making Changes

To modify the website:

1. Make changes to your local files
2. Test locally by opening `index.html` in browser
3. When satisfied:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. GitHub Pages will automatically redeploy (1-2 minutes)

## Need Help?

- GitHub Pages docs: https://docs.github.com/en/pages
- Leaflet.js docs: https://leafletjs.com/
- Contact: Martijn Jeurissen (MSP Alumni Office)

---

Good luck with your website launch! 🚀
